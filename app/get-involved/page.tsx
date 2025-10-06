"use client";
import React, { useState } from "react";
import DOMPurify from "dompurify";

export default function GetInvolvedPage() {
  const steps = ["Sign Up", "Share on Social", "Host an Event"] as const;
  const [active, setActive] = useState<number>(0);

  // Volunteer multi-step form state
  const [volStep, setVolStep] = useState<number>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const toggleSkill = (s: string) => {
    setSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const submitVolunteer = async () => {
    const payload = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      phone: DOMPurify.sanitize(phone),
      skills,
    };
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert("Thanks for volunteering! We'll reach out via email.");
        setVolStep(0); setName(""); setEmail(""); setPhone(""); setSkills([]);
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch { alert("Network error. Please try again."); }
  };

  return (
    <main className="container pt-24 px-4">
      <h1 className="font-heading text-3xl mb-2">Get Involved</h1>
      <p className="text-gray-700 mb-6">Take action with NATAT2027: sign up, spread the word, and organize locally.</p>

      {/* Stepper */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <button key={s} onClick={() => setActive(i)} className={`px-3 py-1 rounded ${active===i ? 'bg-[var(--accent)] text-white' : 'bg-white border text-gray-700'}`}>{i+1}. {s}</button>
        ))}
      </div>

      {active === 0 && (
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="font-heading text-xl mb-3">Sign Up</h2>
          {/* Volunteer multi-step form */}
          {volStep === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input value={name} onChange={e=>setName(e.target.value)} className="border rounded px-3 py-2" placeholder="Full Name" />
              <input value={email} onChange={e=>setEmail(e.target.value)} className="border rounded px-3 py-2" placeholder="Email" />
              <input value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded px-3 py-2" placeholder="Phone" />
              <div className="sm:col-span-3 flex justify-end">
                <button onClick={()=>setVolStep(1)} className="px-4 py-2 rounded bg-[var(--secondary)] text-white">Next</button>
              </div>
            </div>
          )}
          {volStep === 1 && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Select your interests</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Canvassing','Digital','Fundraising','Events','Policy Research','Data'].map(s => (
                  <label key={s} className="inline-flex items-center gap-2 border rounded px-3 py-2">
                    <input type="checkbox" checked={skills.includes(s)} onChange={()=>toggleSkill(s)} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
              <div className="mt-3 flex justify-between">
                <button onClick={()=>setVolStep(0)} className="px-4 py-2 rounded bg-gray-100">Back</button>
                <button onClick={()=>setVolStep(2)} className="px-4 py-2 rounded bg-[var(--secondary)] text-white">Next</button>
              </div>
            </div>
          )}
          {volStep === 2 && (
            <div>
              <p className="text-sm">Confirm your details and submit.</p>
              <ul className="text-sm text-gray-700 mt-2 list-disc pl-5">
                <li>Name: {name || '—'}</li>
                <li>Email: {email || '—'}</li>
                <li>Phone: {phone || '—'}</li>
                <li>Skills: {skills.length ? skills.join(', ') : '—'}</li>
              </ul>
              <div className="mt-3 flex justify-between">
                <button onClick={()=>setVolStep(1)} className="px-4 py-2 rounded bg-gray-100">Back</button>
                <button onClick={submitVolunteer} className="px-4 py-2 rounded bg-[var(--secondary)] text-white">Submit</button>
              </div>
            </div>
          )}
        </section>
      )}

      {active === 1 && (
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="font-heading text-xl mb-3">Share on Social</h2>
          <p className="text-gray-700">Amplify the movement by sharing our message across platforms. Sample captions and graphics coming soon.</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="border rounded p-3">Caption Pack – Coming Soon</div>
            <div className="border rounded p-3">Graphics – Coming Soon</div>
            <div className="border rounded p-3">Hashtags – #NATAT2027 #APC</div>
          </div>
        </section>
      )}

      {active === 2 && (
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="font-heading text-xl mb-3">Host an Event</h2>
          <p className="text-gray-700">Plan a local meetup to mobilize support. Toolkit PDFs will be available for download.</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a className="block border rounded p-3" href="#" download>Flyer – Coming Soon</a>
            <a className="block border rounded p-3" href="#" download>Volunteer Script – Coming Soon</a>
            <a className="block border rounded p-3" href="#" download>Checklist – Coming Soon</a>
          </div>
        </section>
      )}
    </main>
  );
}