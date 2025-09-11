"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setMessage("Thanks for subscribing to The Drop!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-4">
        <Mail className="absolute left-3 top-3 h-5 w-5 text-forest-400" />
        <Input
          type="email"
          placeholder="Enter your email"
          className="pl-10 bg-white border-forest-200 text-forest-900 placeholder:text-forest-400 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-forest-600 hover:bg-forest-700 text-white"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe to The Drop"}
      </Button>

      {message && (
        <p className={`mt-3 text-xs ${status === "error" ? "text-red-500" : "text-forest-600"} text-center`}>
          {message}
        </p>
      )}

      {status !== "success" && (
        <p className="mt-3 text-xs text-forest-600 text-center">
          Join thousands of professionals getting weekly job alerts and industry insights.
        </p>
      )}
    </form>
  )
}
