import { type NextRequest, NextResponse } from "next/server"
import { stripe, STRIPE_PRICE_IDS } from "@/lib/stripe/config"
import { supabase } from "@/lib/supabase/client"

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured. Please set up your Stripe environment variables." },
        { status: 500 },
      )
    }

    const { planType, userId, userEmail } = await request.json()

    if (!planType || !userId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    const priceId = STRIPE_PRICE_IDS[planType as keyof typeof STRIPE_PRICE_IDS]

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan type" }, { status: 400 })
    }

    // Get user details from database
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("email, full_name")
      .eq("id", userId)
      .single()

    if (userError) {
      console.error("Error fetching user:", userError)
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/for-talent/memberships/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/for-talent/memberships`,
      customer_email: user?.email || userEmail,
      metadata: {
        userId,
        planType,
        userEmail: user?.email || userEmail,
      },
      subscription_data: {
        metadata: {
          userId,
          planType,
        },
      },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
