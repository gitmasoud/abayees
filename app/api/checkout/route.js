import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: items.map((item) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),

      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("STRIPE CHECKOUT ERROR:", error);

    return NextResponse.json(
      {
        error: error.message || "Checkout failed",
      },
      { status: 500 }
    );
  }
}