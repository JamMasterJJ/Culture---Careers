import { type NextRequest, NextResponse } from "next/server"
import { stripe, JOB_POSTING_PRICES } from "@/lib/stripe/config"
import { supabase } from "@/lib/supabase/client"

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured. Please set up your Stripe environment variables." },
        { status: 500 },
      )
    }

    const { postingType, userId, jobData } = await request.json()

    if (!postingType || !userId || !jobData) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    const priceId = JOB_POSTING_PRICES[postingType as keyof typeof JOB_POSTING_PRICES]

    if (!priceId) {
      return NextResponse.json({ error: "Invalid posting type" }, { status: 400 })
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
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/for-employers/post-job/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/for-employers/post-job`,
      customer_email: user?.email,
      metadata: {
        userId,
        postingType,
        jobTitle: jobData.title,
        companyName: jobData.company,
      },
    })

    // Store job data temporarily with session ID
    await supabase.from("pending_job_posts").insert({
      session_id: session.id,
      user_id: userId,
      job_data: jobData,
      posting_type: postingType,
      created_at: new Date().toISOString(),
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Error creating job checkout session:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
