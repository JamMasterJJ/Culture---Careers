"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth/auth-provider"

interface ApplicationFormProps {
  job: {
    id: string
    title: string
    company: {
      name: string
    }
  }
}

export function ApplicationForm({ job }: ApplicationFormProps) {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    full_name: user?.user_metadata?.full_name || "",
    email: user?.email || "",
    phone: "",
    cover_letter: "",
    resume_url: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_id: job.id,
          ...formData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Application Submitted",
          description: "Your application has been successfully submitted.",
          variant: "default",
        })

        // Redirect to success page or job listing
        router.push(`/jobs/${job.id}/applied`)
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to submit application. Please try again.",
          variant: "destructive",
        })
        setIsSubmitting(false)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          className="border-forest-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-forest-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border-forest-200" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume_url">Resume URL (optional)</Label>
        <Input
          id="resume_url"
          name="resume_url"
          value={formData.resume_url}
          onChange={handleChange}
          placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
          className="border-forest-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cover_letter">Cover Letter (optional)</Label>
        <Textarea
          id="cover_letter"
          name="cover_letter"
          value={formData.cover_letter}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us why you're a great fit for this role"
          className="border-forest-200"
        />
      </div>

      <Button type="submit" className="w-full bg-forest-700 hover:bg-forest-800 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
