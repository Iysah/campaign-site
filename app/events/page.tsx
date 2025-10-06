"use client";
import React, { useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DOMPurify from "dompurify";
import Image from "next/image";

type EventItem = {
  id: string;
  title: string;
  start: string; // ISO date
  end?: string;  // ISO date
  location: string;
  description: string;
  rsvpCount: number;
};

export default function EventsPage() {
  const [view, setView] = useState<"dayGridMonth" | "timeGridWeek">("dayGridMonth");
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rsvp, setRsvp] = useState(1);
  const [events, setEvents] = useState<EventItem[]>([{
    id: "1",
    title: "Town Hall – Makurdi",
    start: new Date().toISOString(),
    location: "Makurdi, Benue",
    description: "Community engagement with campaign leadership.",
    rsvpCount: 42,
  },{
    id: "2",
    title: "Policy Forum – Gboko",
    start: new Date(Date.now() + 86400000).toISOString(),
    location: "Gboko Stadium",
    description: "Discuss economic plans and social programs.",
    rsvpCount: 105,
  }]);

  const calendarEvents = useMemo(() => events.map(e => ({
    id: e.id,
    title: e.title,
    start: e.start,
  })), [events]);

  const onEventClick = (info: any) => {
    const found = events.find(e => e.id === info.event.id);
    if (found) setSelected(found);
  };

  const submitRegistration = async () => {
    if (!selected) return;
    const payload = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      phone: DOMPurify.sanitize(phone),
      rsvp: Number(rsvp) || 1,
      eventId: selected.id,
    };
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setEvents(prev => prev.map(e => e.id === selected.id ? { ...e, rsvpCount: e.rsvpCount + payload.rsvp } : e));
        alert("Registration submitted! See you at the event.");
        setSelected(null);
        setName(""); setEmail(""); setPhone(""); setRsvp(1);
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (e) {
      alert("Network error. Please try again.");
    }
  };

  const mapSrc = selected ? `https://www.google.com/maps?q=${encodeURIComponent(selected.location)}&output=embed` : "";

  return (
    <main className="container pt-24 px-4">
      <section className="mb-6">
        <h1 className="font-heading text-3xl">Events</h1>
        <p className="text-gray-700">Join upcoming campaign events across Benue State.</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => setView("dayGridMonth")} className={`px-3 py-1 rounded ${view==='dayGridMonth' ? 'bg-[var(--accent)] text-white' : 'bg-white text-gray-700 border'}`}>Month</button>
          <button onClick={() => setView("timeGridWeek")} className={`px-3 py-1 rounded ${view==='timeGridWeek' ? 'bg-[var(--accent)] text-white' : 'bg-white text-gray-700 border'}`}>Week</button>
        </div>
      </section>

      <div className="bg-white rounded-lg shadow p-2">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek" }}
          events={calendarEvents}
          eventClick={onEventClick}
          height="auto"
        />
      </div>

      {/* Registration Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" role="dialog" aria-modal>
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-heading text-xl">Register: {selected.title}</h2>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-gray-700">Close</button>
            </div>
            <p className="text-sm text-gray-600 mb-2">Location: {selected.location}</p>
            <p className="text-sm text-gray-600 mb-4">Current RSVPs: {selected.rsvpCount}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input value={name} onChange={e=>setName(e.target.value)} className="border rounded px-3 py-2" placeholder="Full Name" />
              <input value={email} onChange={e=>setEmail(e.target.value)} className="border rounded px-3 py-2" placeholder="Email" />
              <input value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded px-3 py-2" placeholder="Phone" />
              <input type="number" min={1} value={rsvp} onChange={e=>setRsvp(Number(e.target.value))} className="border rounded px-3 py-2" placeholder="RSVP Count" />
            </div>

            <div className="mt-4">
              <div className="aspect-video w-full">
                <iframe title="Venue Map" src={mapSrc} className="w-full h-full rounded" loading="lazy"></iframe>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setSelected(null)} className="px-4 py-2 rounded bg-gray-100">Cancel</button>
              <button onClick={submitRegistration} className="px-4 py-2 rounded bg-[var(--secondary)] text-white">Register</button>
            </div>
          </div>
        </div>
      )}

      {/* Past Events */}
      <section className="mt-10">
        <h2 className="font-heading text-2xl mb-3">Past Events</h2>
        <details className="bg-white rounded-md shadow p-4">
          <summary className="cursor-pointer font-semibold">Makurdi Rally Highlights</summary>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-50 border rounded p-2">
              <Image src="/natat.png" alt="Makurdi rally" width={400} height={300} className="w-full h-auto" />
              <p className="text-sm mt-2">Strong turnout and community participation.</p>
            </div>
            <div className="bg-gray-50 border rounded p-2">
              <Image src="/natat.png" alt="Speech" width={400} height={300} className="w-full h-auto" />
              <p className="text-sm mt-2">Policy address focusing on food security.</p>
            </div>
            <div className="bg-gray-50 border rounded p-2">
              <Image src="/natat.png" alt="Volunteers" width={400} height={300} className="w-full h-auto" />
              <p className="text-sm mt-2">Volunteers mobilizing neighborhoods.</p>
            </div>
          </div>
        </details>
      </section>
    </main>
  );
}