import { type NextRequest, NextResponse } from "next/server"
import { stripe, STRIPE_WEBHOOK_SECRET } from "@/lib/stripe/config"
import { supabase } from "@/lib/supabase/client"
import type Stripe from "stripe"

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      console.error("Stripe is not configured")
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 })
    }

    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    if (!signature) {
      console.error("No Stripe signature found")
      return NextResponse.json({ error: "No signature" }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    console.log("Received webhook event:", event.type)

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        if (session.mode === "subscription") {
          // Handle membership subscription
          if (session.metadata?.userId && session.metadata?.planType) {
            const { error } = await supabase.from("user_subscriptions").upsert({
              user_id: session.metadata.userId,
              plan_type: session.metadata.planType,
              stripe_customer_id: session.customer as string,
              stripe_subscription_id: session.subscription as string,
              status: "active",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })

            if (error) {
              console.error("Error updating subscription:", error)
            } else {
              console.log("Subscription created successfully for user:", session.metadata.userId)
            }
          }
        } else if (session.mode === "payment") {
          // Handle job posting payment
          const { data: pendingJob, error: fetchError } = await supabase
            .from("pending_job_posts")
            .select("*")
            .eq("session_id", session.id)
            .single()

          if (fetchError) {
            console.error("Error fetching pending job:", fetchError)
          } else if (pendingJob) {
            // Create the actual job post
            const jobData = pendingJob.job_data
            const { error: jobError } = await supabase.from("jobs").insert({
              ...jobData,
              user_id: pendingJob.user_id,
              posting_type: pendingJob.posting_type,
              is_featured: pendingJob.posting_type === "featured" || pendingJob.posting_type === "premium",
              is_premium: pendingJob.posting_type === "premium",
              payment_status: "paid",
              stripe_session_id: session.id,
              created_at: new Date().toISOString(),
            })

            if (jobError) {
              console.error("Error creating job:", jobError)
            } else {
              // Clean up pending job
              await supabase.from("pending_job_posts").delete().eq("session_id", session.id)
              console.log("Job posted successfully for session:", session.id)
            }
          }
        }
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription

        const { error } = await supabase
          .from("user_subscriptions")
          .update({
            status: subscription.status,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id)

        if (error) {
          console.error("Error updating subscription status:", error)
        } else {
          console.log("Subscription updated:", subscription.id)
        }
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription

        const { error } = await supabase
          .from("user_subscriptions")
          .update({
            status: "cancelled",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id)

        if (error) {
          console.error("Error cancelling subscription:", error)
        } else {
          console.log("Subscription cancelled:", subscription.id)
        }
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice

        if (invoice.subscription) {
          const { error } = await supabase
            .from("user_subscriptions")
            .update({
              status: "past_due",
              updated_at: new Date().toISOString(),
            })
            .eq("stripe_subscription_id", invoice.subscription as string)

          if (error) {
            console.error("Error updating subscription to past_due:", error)
          } else {
            console.log("Subscription marked as past_due:", invoice.subscription)
          }
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
