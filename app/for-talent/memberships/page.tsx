"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Loader2 } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"
import Link from "next/link"

const plans = [
  {
    id: "exploratory",
    name: "Exploratory",
    price: 0,
    description: "Perfect for exploring the creator economy",
    icon: <Check className="h-6 w-6" />,
    features: [
      "Access to job board",
      "Basic profile creation",
      "Email notifications",
      "Community access",
      "Job alerts",
      "Company research tools",
    ],
    popular: false,
  },
  {
    id: "job_seeking",
    name: "Job Seeking",
    monthlyPrice: 9.99,
    annualPrice: 95,
    description: "Advanced tools for serious job seekers",
    icon: <Star className="h-6 w-6" />,
    features: [
      "Everything in Exploratory",
      "Culture AI matching",
      "Priority job applications",
      "Advanced analytics",
      "Direct messaging",
      "Portfolio showcase",
      "Interview preparation",
      "Salary insights",
      "Resume optimization",
      "Personal brand consultation",
    ],
    popular: true,
  },
]

export default function MembershipsPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const { user, subscription } = useAuth()
  const router = useRouter()

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      router.push("/auth/signin?callbackUrl=/for-talent/memberships")
      return
    }

    setLoading(planId)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planType: planId,
          billingCycle: planId === "job_seeking" ? billingCycle : "monthly",
          userId: user.id,
          userEmail: user.email,
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error("Error creating checkout session:", data.error)
        alert("Error creating checkout session. Please try again.")
      } else if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setLoading(null)
    }
  }

  const isCurrentPlan = (planId: string) => {
    return subscription?.plan_type === planId && subscription?.status === "active"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accelerate Your Creator Career</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of creators who have transformed their careers with our comprehensive platform. Choose the
            plan that fits your ambitions.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>30-day money-back guarantee</span>
          </div>
        </div>

        {/* Current Subscription Status */}
        {subscription && (
          <div className="max-w-md mx-auto mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">
                    Current Plan: {subscription.plan_type.charAt(0).toUpperCase() + subscription.plan_type.slice(1)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="ml-1 text-xs text-green-600 font-semibold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const price =
              plan.id === "job_seeking"
                ? billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.annualPrice
                : plan.price
            const priceLabel =
              plan.id === "job_seeking"
                ? billingCycle === "monthly"
                  ? "/month"
                  : "/year"
                : plan.price === 0
                  ? ""
                  : "/month"

            return (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular
                    ? "border-forest-500 shadow-xl scale-105"
                    : "border-gray-200 hover:border-forest-300 hover:shadow-lg"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-forest-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 rounded-full ${plan.popular ? "bg-forest-100" : "bg-gray-100"}`}>
                    <div className={plan.popular ? "text-forest-600" : "text-gray-600"}>{plan.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-bold text-gray-900">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">${price}</span>
                        <span className="text-gray-600">{priceLabel}</span>
                        {plan.id === "job_seeking" && billingCycle === "annual" && (
                          <div className="text-sm text-green-600 font-medium mt-1">
                            ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(0)} saved annually
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => (plan.price === 0 ? router.push("/auth/signup") : handleSubscribe(plan.id))}
                    disabled={loading === plan.id || isCurrentPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-md font-medium text-center transition-colors duration-200 ${
                      plan.popular
                        ? "bg-forest-600 text-white hover:bg-forest-700"
                        : plan.price === 0
                          ? "bg-gray-600 text-white hover:bg-gray-700"
                          : "bg-forest-600 text-white hover:bg-forest-700"
                    } ${loading === plan.id || isCurrentPlan(plan.id) ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {loading === plan.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : isCurrentPlan(plan.id) ? (
                      "Current Plan"
                    ) : plan.price === 0 ? (
                      "Get Started Free"
                    ) : (
                      `Get ${plan.name}`
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated automatically.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee on all plans, so you can try risk-free.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards and PayPal through our secure payment processor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How does Culture AI work?</h3>
              <p className="text-gray-600">
                Our AI analyzes your profile, skills, and preferences to match you with the most relevant opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Not ready to commit? Start with our{" "}
            <Link href="/jobs" className="text-forest-600 hover:underline font-medium">
              free job board
            </Link>
          </p>
          <p className="text-sm text-gray-500">
            Questions?{" "}
            <Link href="/contact" className="text-forest-600 hover:underline">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
