"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, Linkedin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SignupPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function SignupPopup({ isOpen, onClose, title = "Sign up to continue" }: SignupPopupProps) {
  const [signupMethod, setSignupMethod] = useState<"email" | "linkedin" | "phone" | null>(null)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success message or redirect
    setIsSubmitting(false)
    onClose()
    // In a real app, you would handle the signup process here
  }

  const handleLinkedInSignup = () => {
    // In a real app, you would redirect to LinkedIn OAuth
    window.open("https://www.linkedin.com/oauth/", "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-sm text-gray-500">Join Culture and Careers to access this feature</p>
        </div>

        {!signupMethod ? (
          <div className="space-y-4">
            <button
              onClick={() => setSignupMethod("email")}
              className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <Mail size={18} />
              Continue with Email
            </button>

            <button
              onClick={() => handleLinkedInSignup()}
              className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-[#0A66C2] px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#0958A7]"
            >
              <Linkedin size={18} />
              Continue with LinkedIn
            </button>

            <button
              onClick={() => setSignupMethod("phone")}
              className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <Phone size={18} />
              Continue with Phone
            </button>
          </div>
        ) : signupMethod === "email" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-[#FF5A5F] hover:bg-[#FF4146]" disabled={isSubmitting}>
              {isSubmitting ? "Signing up..." : "Continue"}
            </Button>
            <button
              type="button"
              onClick={() => setSignupMethod(null)}
              className="mt-2 w-full text-center text-sm text-gray-500 hover:text-gray-700"
            >
              Back to all options
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(123) 456-7890"
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-[#FF5A5F] hover:bg-[#FF4146]" disabled={isSubmitting}>
              {isSubmitting ? "Sending code..." : "Send verification code"}
            </Button>
            <button
              type="button"
              onClick={() => setSignupMethod(null)}
              className="mt-2 w-full text-center text-sm text-gray-500 hover:text-gray-700"
            >
              Back to all options
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-[#FF5A5F] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#FF5A5F] hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}
