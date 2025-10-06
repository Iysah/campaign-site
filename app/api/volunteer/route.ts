import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "local") + ":volunteer";
  const limited = rateLimit(ip, 5, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const body = await req.json();
  const name = String(body?.name || "").trim().slice(0, 200);
  const email = String(body?.email || "").trim().slice(0, 200);
  const phone = String(body?.phone || "").trim().slice(0, 50);
  const skills = Array.isArray(body?.skills) ? body.skills.slice(0, 20) : [];
  const rsvp = Number(body?.rsvp) || 0;
  const eventId = String(body?.eventId || "").trim().slice(0, 100);

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: persist to database / CMS if required
  return NextResponse.json({ ok: true, eventId, rsvp });
}