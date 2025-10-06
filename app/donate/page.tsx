"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const TIERS = [1000, 5000, 10000, 50000, 100000, 1000000]; // NGN
const GOAL = 500_000_000; // ₦500M

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(TIERS[1]);
  const [recurring, setRecurring] = useState<boolean>(false);
  const [raised, setRaised] = useState<number>(50_000_000); // demo value
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Paystack script is loaded lazily below; nothing to initialize here
  }, []);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const paystackPayment = () => {
    setError("");
    const sanitizedEmail = DOMPurify.sanitize(email).trim();
    if (!isValidEmail(sanitizedEmail)) {
      setError("Please enter a valid email to proceed with Paystack.");
      return;
    }
    const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
    if (!key) {
      setError("Paystack public key is not configured.");
      return;
    }
    try {
      const handler: any = (window as any).PaystackPop ? new (window as any).PaystackPop() : null;
      if (!handler) {
        setError("Paystack script not loaded yet. Please wait a moment and try again.");
        return;
      }
      handler.newTransaction({
        key,
        amount: amount * 100, // Kobo
        email: sanitizedEmail,
        metadata: { recurring },
        callback: function (response: any) {
          const ref = response?.reference || "";
          window.location.href = `/donate/success?ref=${encodeURIComponent(ref)}`;
        },
        onCancel: function () {
          window.location.href = "/donate/cancel";
        },
      });
    } catch (e) {
      setError("Unable to start Paystack payment. Please try again.");
    }
  };

  const stripeCheckout = async () => {
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, recurring }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Unable to start Stripe Checkout");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  const percent = Math.min(100, Math.round((raised / GOAL) * 100));

  return (
    <main className="pt-24 container px-4">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="font-heading text-3xl mb-2">Donate to NATAT2027</h1>
        <p className="text-gray-700">Your ₦5,000 feeds 10 families. Every naira accelerates our mission.</p>

        {/* Thermometer */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Raised: ₦{raised.toLocaleString()}</span>
            <span>Goal: ₦{GOAL.toLocaleString()}</span>
          </div>
          <div className="mt-2 w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--secondary)]" style={{ width: `${percent}%` }}></div>
          </div>
          <p className="text-sm text-gray-700 mt-1">{percent}% funded</p>
        </div>

        {/* Tiered options */}
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {TIERS.map((t) => (
            <button
              key={t}
              onClick={() => setAmount(t)}
              className={`px-3 py-2 rounded border ${amount === t ? "bg-[var(--accent)] text-white border-transparent" : "bg-white text-gray-800"}`}
            >
              ₦{t.toLocaleString()}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} /> Recurring
          </label>
        </div>

        {/* Email input for Paystack */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-1">Email for receipt</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            placeholder="you@example.com"
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={stripeCheckout} className="px-6 py-3 rounded-full bg-black text-white">Donate with Stripe</button>
          <button onClick={paystackPayment} className="px-6 py-3 rounded-full bg-[var(--secondary)] text-white">Donate with Paystack</button>
        </div>

        <p className="text-xs text-gray-600 mt-4">Compliant with INEC Regulations – All Donations Transparent.</p>
      </section>

      {/* Testimonials */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["Amina", "John", "Chinedu"].map((name) => (
          <figure key={name} className="bg-white rounded-lg shadow p-4">
            <blockquote className="text-gray-700">“My donation makes a real impact on families.”</blockquote>
            <figcaption className="mt-2 text-sm text-gray-600">{name} • Donor</figcaption>
          </figure>
        ))}
      </section>

      <Script src="https://js.paystack.co/v2/inline.js" strategy="lazyOnload" />
    </main>
  );
}