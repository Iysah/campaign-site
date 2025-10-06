"use client";
import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookie_consent");
      setVisible(stored !== "accepted" && stored !== "declined");
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookie_consent", "accepted"); } catch {}
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem("cookie_consent", "declined"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-white border rounded-lg shadow p-4">
        <p className="text-sm text-gray-700">
          We use cookies for analytics and to improve your experience. By clicking "Accept", you agree to our use of cookies.
          Read our <a href="/privacy" className="underline">Privacy Notice</a>.
        </p>
        <div className="mt-3 flex gap-2 justify-end">
          <button onClick={decline} className="px-4 py-2 rounded bg-gray-100">Decline</button>
          <button onClick={accept} className="px-4 py-2 rounded bg-[var(--accent)] text-white">Accept</button>
        </div>
      </div>
    </div>
  );
}