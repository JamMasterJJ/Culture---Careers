"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobType: "",
    workType: "",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",
    description: "",
    requirements: "",
    benefits: "",
    category: "",
    tags: [] as string[],
    applicationEmail: "",
    applicationUrl: "",
    featured: false,
    urgent: false,
    postingType: "standard",
  })

  const [currentTag, setCurrentTag] = useState("")

  const jobCategories = [
    "Marketing & Brand Management",
    "Content Creation & Social Media",
    "Business Development & Partnerships",
    "Product Management",
    "Engineering & Development",
    "Design & Creative",
    "Operations & Analytics",
    "Sales & Customer Success",
    "Finance & Legal",
    "Human Resources",
  ]

  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"]
  const workTypes = ["Remote", "On-site", "Hybrid"]

  const addTag = () => {
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag],
      }))
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Job posting data:", formData)
    alert("Job posted successfully! (This is a demo)")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Job</h1>
            <p className="text-lg text-gray-600">
              Connect with top talent in the creator economy. Reach thousands of qualified candidates.
            </p>
          </div>

          <div className="mb-8">
            <Label className="text-lg font-semibold mb-4 block">Select Posting Type</Label>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Standard Plan */}
              <div
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  formData.postingType === "standard"
                    ? "border-[#4D7C4D] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, postingType: "standard" }))}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Standard</h3>
                  <div className="text-3xl font-bold text-[#4D7C4D] mb-4">$299</div>
                  <p className="text-gray-600 mb-4">Perfect for most positions</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• 30-day listing</li>
                    <li>• Email applications</li>
                    <li>• Basic analytics</li>
                    <li>• Social media promotion</li>
                  </ul>
                </div>
              </div>

              {/* Featured Plan */}
              <div
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all relative ${
                  formData.postingType === "featured"
                    ? "border-[#4D7C4D] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, postingType: "featured" }))}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#4D7C4D] text-white px-3 py-1 rounded-full text-xs font-medium">POPULAR</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Featured</h3>
                  <div className="text-3xl font-bold text-[#4D7C4D] mb-4">$499</div>
                  <p className="text-gray-600 mb-4">Get 3x more visibility</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• 45-day listing</li>
                    <li>• Featured placement</li>
                    <li>• Priority in search</li>
                    <li>• Advanced analytics</li>
                    <li>• Newsletter inclusion</li>
                  </ul>
                </div>
              </div>

              {/* Premium Plan */}
              <div
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  formData.postingType === "premium"
                    ? "border-[#4D7C4D] bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, postingType: "premium" }))}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-[#4D7C4D] mb-4">$799</div>
                  <p className="text-gray-600 mb-4">Maximum exposure</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li>• 60-day listing</li>
                    <li>• Homepage featured</li>
                    <li>• Dedicated email blast</li>
                    <li>• Talent matching</li>
                    <li>• Personal support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Fill out the information below to create your job posting</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))}
                      placeholder="e.g. Social Media Manager"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      placeholder="e.g. Fenty Beauty"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g. Los Angeles, CA"
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobType">Job Type *</Label>
                    <Select
                      value={formData.jobType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, jobType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="workType">Work Type *</Label>
                    <Select
                      value={formData.workType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, workType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select work type" />
                      </SelectTrigger>
                      <SelectContent>
                        {workTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Salary Range</Label>
                  <div className="grid md:grid-cols-3 gap-4 mt-2">
                    <div>
                      <Input
                        value={formData.salaryMin}
                        onChange={(e) => setFormData((prev) => ({ ...prev, salaryMin: e.target.value }))}
                        placeholder="Min salary"
                        type="number"
                      />
                    </div>
                    <div>
                      <Input
                        value={formData.salaryMax}
                        onChange={(e) => setFormData((prev) => ({ ...prev, salaryMax: e.target.value }))}
                        placeholder="Max salary"
                        type="number"
                      />
                    </div>
                    <div>
                      <Select
                        value={formData.currency}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, currency: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Job Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tags">Skills & Tags</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      placeholder="Add a skill or tag"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">
                      Add
                    </Button>
                  </div>
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                    placeholder="List the required skills, experience, and qualifications..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="benefits">Benefits & Perks</Label>
                  <Textarea
                    id="benefits"
                    value={formData.benefits}
                    onChange={(e) => setFormData((prev) => ({ ...prev, benefits: e.target.value }))}
                    placeholder="Health insurance, flexible hours, remote work, equity, etc..."
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="applicationEmail">Application Email</Label>
                    <Input
                      id="applicationEmail"
                      type="email"
                      value={formData.applicationEmail}
                      onChange={(e) => setFormData((prev) => ({ ...prev, applicationEmail: e.target.value }))}
                      placeholder="careers@company.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="applicationUrl">Application URL</Label>
                    <Input
                      id="applicationUrl"
                      type="url"
                      value={formData.applicationUrl}
                      onChange={(e) => setFormData((prev) => ({ ...prev, applicationUrl: e.target.value }))}
                      placeholder="https://company.com/careers/apply"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, featured: !!checked }))}
                    />
                    <Label htmlFor="featured">Make this a featured job (+$200)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="urgent"
                      checked={formData.urgent}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, urgent: !!checked }))}
                    />
                    <Label htmlFor="urgent">Mark as urgent hiring (+$100)</Label>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="bg-[#4D7C4D] hover:bg-[#3A5A3A] text-white px-8">
                    Post Job - $
                    {formData.postingType === "featured" ? "499" : formData.postingType === "premium" ? "799" : "299"}
                  </Button>
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
