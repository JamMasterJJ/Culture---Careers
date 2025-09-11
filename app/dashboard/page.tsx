"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/auth/signin?callbackUrl=/dashboard")
      } else {
        // For now, default everyone to job seeker dashboard
        // In a real app, you'd check user.user_metadata.user_type
        const userType = user.user_metadata?.user_type || "job_seeker"

        if (userType === "employer") {
          router.push("/dashboard/employer")
        } else {
          router.push("/dashboard/job-seeker")
        }
      }
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">Redirecting to your dashboard...</div>
    </div>
  )
}
