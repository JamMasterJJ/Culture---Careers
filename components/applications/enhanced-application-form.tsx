"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth/auth-provider"
import { DatabaseService } from "@/lib/services/database-service"
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"

interface Job {
  id: string
  title: string
  companies: {
    id: string
    name: string
    logo_url: string | null
  }
  location: string
  job_type: string | null
  description: string
}

interface EnhancedApplicationFormProps {
  job: Job
}

export function EnhancedApplicationForm({ job }: EnhancedApplicationFormProps) {
  const { user, userProfile } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    full_name: userProfile?.full_name || "",
    email: user?.email || "",
    phone: "",
    cover_letter: "",
    resume_url: "",
    linkedin_url: "",
    portfolio_url: "",
    years_experience: "",
    salary_expectation: "",
    availability: "",
    why_interested: "",
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [resumeUploaded, setResumeUploaded] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document.",
        variant: "destructive",
      })
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      })
      return
    }

    setResumeFile(file)

    // Simulate upload progress
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setResumeUploaded(true)
          return 100
        }
        return prev + 10
      })
    }, 200)

    // In a real app, you would upload to Supabase Storage here
    // For now, we'll just simulate the upload
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        resume_url: `https://storage.supabase.co/resumes/${user?.id}/${file.name}`,
      }))
    }, 2000)
  }

  const removeResume = () => {
    setResumeFile(null)
    setResumeUploaded(false)
    setUploadProgress(0)
    setFormData((prev) => ({ ...prev, resume_url: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to apply for jobs.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const applicationData = {
        job_id: job.id,
        user_id: user.id,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || null,
        resume_url: formData.resume_url || null,
        cover_letter: formData.cover_letter || null,
        status: "submitted" as const,
      }

      const { application, error } = await DatabaseService.createJobApplication(applicationData)

      if (error) {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Application Submitted",
        description: "Your application has been successfully submitted.",
      })

      // Redirect to application confirmation page
      router.push(`/jobs/${job.id}/applied`)
    } catch (error) {
      console.error("Application submission error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!user) {
    return (
      <Card className="border-forest-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold text-forest-900 mb-2">Sign in to apply</h3>
          <p className="text-forest-600 mb-4">You need to be signed in to apply for this position.</p>
          <Button asChild className="bg-forest-700 hover:bg-forest-800">
            <a href={`/auth/signin?callbackUrl=/jobs/${job.id}`}>Sign In</a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-forest-200">
      <CardHeader>
        <CardTitle className="text-xl text-forest-900">Apply for this position</CardTitle>
        <div className="flex items-center gap-3 pt-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-md bg-forest-50">
            <Image
              src={job.companies.logo_url || "/placeholder.svg?height=48&width=48"}
              alt={job.companies.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-forest-900">{job.title}</h3>
            <p className="text-sm text-forest-600">
              {job.companies.name} • {job.location}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-forest-900">Personal Information</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name *</Label>
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
                <Label htmlFor="email">Email *</Label>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-forest-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="years_experience">Years of Experience</Label>
                <Input
                  id="years_experience"
                  name="years_experience"
                  value={formData.years_experience}
                  onChange={handleChange}
                  className="border-forest-200"
                  placeholder="e.g., 3-5 years"
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-forest-900">Resume</h4>

            {!resumeFile ? (
              <div className="border-2 border-dashed border-forest-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-forest-400 mb-4" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-forest-900">Upload your resume</p>
                  <p className="text-xs text-forest-600">PDF, DOC, or DOCX up to 5MB</p>
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <Label
                  htmlFor="resume-upload"
                  className="mt-4 inline-flex cursor-pointer items-center rounded-md bg-forest-700 px-4 py-2 text-sm font-medium text-white hover:bg-forest-800"
                >
                  Choose File
                </Label>
              </div>
            ) : (
              <div className="border border-forest-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-forest-600" />
                    <div>
                      <p className="text-sm font-medium text-forest-900">{resumeFile.name}</p>
                      <p className="text-xs text-forest-600">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {resumeUploaded ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-forest-200 rounded-full h-2">
                          <div
                            className="bg-forest-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-forest-600">{uploadProgress}%</span>
                      </div>
                    )}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeResume}
                      className="text-forest-600 hover:text-forest-800"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="resume_url">Or paste resume URL</Label>
              <Input
                id="resume_url"
                name="resume_url"
                type="url"
                value={formData.resume_url}
                onChange={handleChange}
                className="border-forest-200"
                placeholder="https://drive.google.com/..."
              />
            </div>
          </div>

          {/* Professional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-forest-900">Professional Links</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin_url">LinkedIn Profile</Label>
                <Input
                  id="linkedin_url"
                  name="linkedin_url"
                  type="url"
                  value={formData.linkedin_url}
                  onChange={handleChange}
                  className="border-forest-200"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio_url">Portfolio/Website</Label>
                <Input
                  id="portfolio_url"
                  name="portfolio_url"
                  type="url"
                  value={formData.portfolio_url}
                  onChange={handleChange}
                  className="border-forest-200"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>

          {/* Application Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-forest-900">Application Details</h4>

            <div className="space-y-2">
              <Label htmlFor="why_interested">Why are you interested in this role? *</Label>
              <Textarea
                id="why_interested"
                name="why_interested"
                value={formData.why_interested}
                onChange={handleChange}
                rows={4}
                required
                className="border-forest-200"
                placeholder="Tell us what excites you about this opportunity and how you can contribute..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover_letter">Cover Letter</Label>
              <Textarea
                id="cover_letter"
                name="cover_letter"
                value={formData.cover_letter}
                onChange={handleChange}
                rows={6}
                className="border-forest-200"
                placeholder="Share more about your background, experience, and what makes you a great fit..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salary_expectation">Salary Expectation</Label>
                <Input
                  id="salary_expectation"
                  name="salary_expectation"
                  value={formData.salary_expectation}
                  onChange={handleChange}
                  className="border-forest-200"
                  placeholder="e.g., $80,000 - $100,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="border-forest-200"
                  placeholder="e.g., Immediate, 2 weeks notice"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-forest-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-forest-600">
                <AlertCircle className="inline h-4 w-4 mr-1" />
                All information will be kept confidential
              </div>
              <Button
                type="submit"
                className="bg-forest-700 hover:bg-forest-800 text-white px-8"
                disabled={isSubmitting || (!formData.resume_url && !resumeFile)}
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
