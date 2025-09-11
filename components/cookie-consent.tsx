"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary")
    setShowBanner(false)
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="text-base font-semibold text-gray-900 mb-2">Cookie Consent</h3>
            <p className="text-sm text-gray-600 mb-2">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="text-sm text-gray-600">
              Read our{" "}
              <Link href="/privacy" className="text-[#3E6E50] hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-[#3E6E50] hover:underline">
                Terms of Service
              </Link>{" "}
              for more information.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 text-gray-700"
              onClick={acceptNecessary}
            >
              Necessary Only
            </Button>
            <Button className="bg-[#3E6E50] hover:bg-[#2E5E40] text-white" onClick={acceptAll}>
              Accept All
            </Button>
            <button
              onClick={closeBanner}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close cookie banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
