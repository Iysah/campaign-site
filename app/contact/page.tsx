"use client";
import React, { useState } from "react";
import DOMPurify from "dompurify";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("General");
  const [message, setMessage] = useState("");

  const submit = async () => {
    const payload = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      type: DOMPurify.sanitize(type),
      message: DOMPurify.sanitize(message),
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (res.ok) {
        alert("Thanks for reaching out. We'll respond soon.");
        setName(""); setEmail(""); setType("General"); setMessage("");
      } else { alert("Submission failed. Please try again later."); }
    } catch { alert("Network error. Please try again."); }
  };

  return (
    <main className="container pt-24 px-4">
      <h1 className="font-heading text-3xl mb-2">Contact</h1>
      <p className="text-gray-700 mb-6">Connect with the campaign HQ in Benue.</p>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-heading text-xl mb-3">Send a Message</h2>
          <div className="space-y-3">
            <input value={name} onChange={e=>setName(e.target.value)} className="border rounded px-3 py-2 w-full" placeholder="Full Name" />
            <input value={email} onChange={e=>setEmail(e.target.value)} className="border rounded px-3 py-2 w-full" placeholder="Email" />
            <select value={type} onChange={e=>setType(e.target.value)} className="border rounded px-3 py-2 w-full">
              <option>General</option>
              <option>Volunteer</option>
              <option>Media</option>
              <option>Donations</option>
            </select>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} className="border rounded px-3 py-2 w-full" rows={6} placeholder="Message" />
          </div>
          <div className="mt-3 flex justify-end">
            <button onClick={submit} className="px-4 py-2 rounded bg-[var(--secondary)] text-white">Submit</button>
          </div>
        </div>
        <div>
          <div className="aspect-video w-full bg-white rounded-lg shadow overflow-hidden">
            <iframe title="Benue HQ" src="https://www.google.com/maps?q=Benue%20State%20Government%20House&output=embed" className="w-full h-full" loading="lazy"></iframe>
          </div>
          <div className="mt-4 bg-white rounded-lg shadow p-4">
            <h2 className="font-heading text-xl mb-3">FAQ</h2>
            <details className="mb-2">
              <summary className="cursor-pointer font-semibold">How to Volunteer?</summary>
              <p className="text-sm text-gray-700 mt-2">Visit Get Involved and complete the volunteer form. Our team will get in touch.</p>
            </details>
            <details>
              <summary className="cursor-pointer font-semibold">Where do I donate?</summary>
              <p className="text-sm text-gray-700 mt-2">Use the Donate page for secure options via Paystack or Stripe.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}