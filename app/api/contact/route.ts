import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "local") + ":contact";
  const limited = rateLimit(ip, 5, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const body = await req.json();
  // Basic server-side validation
  const name = String(body?.name || "").trim().slice(0, 200);
  const email = String(body?.email || "").trim().slice(0, 200);
  const type = String(body?.type || "General").trim().slice(0, 200);
  const message = String(body?.message || "").trim().slice(0, 2000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: forward to email or CRM
  return NextResponse.json({ ok: true });
}