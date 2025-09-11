"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function WaitlistForm() {
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
        setMessage(data.message || "Thanks for subscribing to our waitlist!")
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-white text-[#0a192f] hover:bg-gray-200"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join the Waitlist"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {message && <p className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}>{message}</p>}
    </form>
  )
}
