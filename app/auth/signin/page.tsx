"use client"
import Link from "next/link"
import { SignInForm } from "@/components/auth/sign-in-form"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignInPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string }
}) {
  const { user } = useAuth()
  const router = useRouter()

  // If user is already signed in, redirect to the callback URL or home
  useEffect(() => {
    if (user) {
      router.push(searchParams.callbackUrl || "/")
    }
  }, [user, router, searchParams.callbackUrl])

  if (user) {
    return <div>Redirecting...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="font-medium text-[#3E6E50] hover:text-[#2A4A37]">
              Sign up for free
            </Link>
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in to your account</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your Culture & Careers account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm callbackUrl={searchParams.callbackUrl} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
