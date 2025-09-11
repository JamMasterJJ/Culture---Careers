"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { createCompany } from "@/lib/services/company-service"
import { supabase } from "@/lib/supabase/client"
import { Loader2 } from "lucide-react"

export function BrandRegistrationForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    tagline: "",
    description: "",
    website: "",
    headquarters: "",
    founded: "",
    employees: "",
    logo_url: "",
    cover_image: "",
    culture_statement: "",
    interview_questions: ["", "", ""],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Auto-generate slug from name
    if (name === "name") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...formData.interview_questions]
    updatedQuestions[index] = value
    setFormData((prev) => ({ ...prev, interview_questions: updatedQuestions }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Check if user is authenticated
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        setError("You must be logged in to register a brand")
        setIsLoading(false)
        return
      }

      // Filter out empty interview questions
      const filteredQuestions = formData.interview_questions.filter((q) => q.trim() !== "")

      // Prepare company data
      const companyData = {
        ...formData,
        interview_questions: filteredQuestions,
        owner_id: session.user.id,
      }

      // Create company
      const { data, error: createError } = await createCompany(companyData)

      if (createError) {
        throw new Error(createError.message)
      }

      // Redirect to brand page
      router.push(`/brands/${data.slug}`)
    } catch (err) {
      console.error("Error registering brand:", err)
      setError(err instanceof Error ? err.message : "An error occurred while registering your brand")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">{error}</div>}

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Brand Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Brand Name *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Brand URL Slug *</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  placeholder="your-brand-name"
                />
                <p className="text-xs text-gray-500">
                  This will be used in your brand URL: careertrends.com/brands/your-slug
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="A short, catchy description of your brand"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Brand Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your brand, products, and mission"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Brand Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourbrand.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headquarters">Headquarters</Label>
                <Input
                  id="headquarters"
                  name="headquarters"
                  value={formData.headquarters}
                  onChange={handleChange}
                  placeholder="City, State/Country"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="founded">Founded Year</Label>
                <Input
                  id="founded"
                  name="founded"
                  value={formData.founded}
                  onChange={handleChange}
                  placeholder="e.g. 2020"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employees">Number of Employees</Label>
                <Input
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  placeholder="e.g. 1-10, 11-50, 51-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="logo_url">Logo URL</Label>
                <Input
                  id="logo_url"
                  name="logo_url"
                  type="url"
                  value={formData.logo_url}
                  onChange={handleChange}
                  placeholder="https://yourbrand.com/logo.png"
                />
                <p className="text-xs text-gray-500">Direct link to your logo image (PNG or SVG preferred)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover_image">Cover Image URL</Label>
                <Input
                  id="cover_image"
                  name="cover_image"
                  type="url"
                  value={formData.cover_image}
                  onChange={handleChange}
                  placeholder="https://yourbrand.com/cover.jpg"
                />
                <p className="text-xs text-gray-500">Direct link to a banner image for your brand profile</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Behind the Brand</h2>

            <div className="space-y-2">
              <Label htmlFor="culture_statement">Company Culture</Label>
              <Textarea
                id="culture_statement"
                name="culture_statement"
                value={formData.culture_statement}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your company culture, values, and what makes your workplace unique"
              />
            </div>

            <div className="space-y-4">
              <Label>Top 3 Interview Questions</Label>
              <p className="text-sm text-gray-500">Share the top questions you ask candidates during interviews</p>

              {formData.interview_questions.map((question, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`question-${index}`}>Question {index + 1}</Label>
                  <Input
                    id={`question-${index}`}
                    value={question}
                    onChange={(e) => handleQuestionChange(index, e.target.value)}
                    placeholder={`e.g. What attracted you to our brand?`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-[#FF5A5F] hover:bg-[#FF4146] text-white" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Registering...
                </>
              ) : (
                "Register Brand"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
