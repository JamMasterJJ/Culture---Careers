"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your membership...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Elite Community!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your membership is now active. Get ready to accelerate your career with exclusive opportunities and expert
            guidance.
          </p>
        </div>

        {/* What's Next Section */}
        <Card className="mb-8 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-gray-600 text-sm">
                  Add your skills, experience, and career goals to get matched with the best opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Browse Exclusive Jobs</h3>
                <p className="text-gray-600 text-sm">
                  Access hidden job opportunities from top creator economy companies.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Schedule Coaching</h3>
                <p className="text-gray-600 text-sm">
                  Book your first career coaching session with our industry experts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Member Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold">Exclusive Access</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Priority application review</li>
                <li>• Hidden job opportunities</li>
                <li>• Direct hiring manager contacts</li>
                <li>• VIP networking events</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold">Expert Support</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Weekly 1-on-1 coaching sessions</li>
                <li>• Resume optimization</li>
                <li>• Salary negotiation support</li>
                <li>• Personal brand development</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/jobs">Browse Exclusive Jobs</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@cultureandcareers.com" className="text-green-600 hover:underline">
              support@cultureandcareers.com
            </a>
          </p>
        </div>

        {/* Session Info (for debugging) */}
        {sessionId && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-500">Session ID: {sessionId}</p>
          </div>
        )}
      </div>
    </div>
  )
}
