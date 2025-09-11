import Stripe from "stripe"

// Stripe configuration
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    })
  : null

export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || ""

// Price IDs for different membership plans
export const STRIPE_PRICE_IDS = {
  basic: process.env.STRIPE_BASIC_PRICE_ID || "price_basic_monthly",
  pro: process.env.STRIPE_PRO_PRICE_ID || "price_pro_monthly",
  premium: process.env.STRIPE_PREMIUM_PRICE_ID || "price_premium_monthly",
}

// Job posting price IDs
export const JOB_POSTING_PRICES = {
  standard: process.env.STRIPE_STANDARD_JOB_PRICE_ID || "price_standard_job",
  featured: process.env.STRIPE_FEATURED_JOB_PRICE_ID || "price_featured_job",
  premium: process.env.STRIPE_PREMIUM_JOB_PRICE_ID || "price_premium_job",
}

export const MEMBERSHIP_PLANS = {
  basic: {
    name: "Basic",
    price: 29,
    features: ["Access to job board", "Basic profile creation", "Email notifications", "Community access"],
  },
  pro: {
    name: "Pro",
    price: 79,
    features: [
      "Everything in Basic",
      "Culture AI matching",
      "Priority job applications",
      "Advanced analytics",
      "Direct messaging",
    ],
  },
  premium: {
    name: "Premium",
    price: 149,
    features: [
      "Everything in Pro",
      "1-on-1 career coaching",
      "Resume optimization",
      "Interview preparation",
      "Exclusive job opportunities",
    ],
  },
}

export const JOB_POSTING_PLANS = {
  standard: {
    name: "Standard Job Post",
    price: 99,
    duration: "30 days",
    features: ["Basic job listing", "Standard visibility", "Email applications"],
  },
  featured: {
    name: "Featured Job Post",
    price: 199,
    duration: "45 days",
    features: ["Featured placement", "Enhanced visibility", "Priority in search", "Company branding"],
  },
  premium: {
    name: "Premium Job Post",
    price: 399,
    duration: "60 days",
    features: [
      "Top placement",
      "Maximum visibility",
      "Social media promotion",
      "Dedicated account manager",
      "Advanced analytics",
    ],
  },
}
