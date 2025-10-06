import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
  }
  const stripe = new Stripe(secret);
  const body = await req.json();
  const amount = Number(body?.amount) || 1000; // NGN
  const recurring = Boolean(body?.recurring);
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: recurring ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "ngn",
            product_data: { name: "NATAT2027 Donation" },
            unit_amount: amount * 100, // kobo
            ...(recurring ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/donate/success`,
      cancel_url: `${origin}/donate/cancel`,
    });
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Failed to create session" }, { status: 500 });
  }
}