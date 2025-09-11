"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Star,
  Building2,
  Users,
  Target,
  Zap,
  Award,
  TrendingUp,
  TrendingDown,
  Eye,
  MapPin,
  BarChart3,
  Download,
} from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function DemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    hiringNeeds: "",
    timeline: "",
    challenges: "",
    newsletter: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Mock analytics data
  const overviewStats = [
    {
      title: "Total Job Views",
      value: "12,847",
      change: "+23%",
      trend: "up",
      icon: Eye,
      description: "vs. last month",
    },
    {
      title: "Applications Received",
      value: "342",
      change: "+18%",
      trend: "up",
      icon: Users,
      description: "vs. last month",
    },
    {
      title: "Application Rate",
      value: "2.7%",
      change: "-0.3%",
      trend: "down",
      icon: Target,
      description: "vs. last month",
    },
    {
      title: "Time to Fill",
      value: "18 days",
      change: "-2 days",
      trend: "up",
      icon: Clock,
      description: "vs. last month",
    },
  ]

  const jobPerformance = [
    {
      title: "Social Media Manager",
      company: "Fenty Beauty",
      views: 2847,
      applications: 89,
      rate: "3.1%",
      status: "Active",
      posted: "5 days ago",
    },
    {
      title: "Brand Partnerships Lead",
      company: "Chamberlain Coffee",
      views: 1923,
      applications: 67,
      rate: "3.5%",
      status: "Active",
      posted: "12 days ago",
    },
    {
      title: "Content Producer",
      company: "100 Thieves",
      views: 3421,
      applications: 124,
      rate: "3.6%",
      status: "Filled",
      posted: "18 days ago",
    },
  ]

  const topLocations = [
    { city: "Los Angeles, CA", percentage: 28, applications: 96 },
    { city: "New York, NY", percentage: 22, applications: 75 },
    { city: "Miami, FL", percentage: 15, applications: 51 },
    { city: "Austin, TX", percentage: 12, applications: 41 },
    { city: "San Francisco, CA", percentage: 10, applications: 34 },
  ]

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-forest-50 to-white text-forest-950">
        <main className="flex-1">
          <div className="container px-4 md:px-6 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full mx-auto mb-8 shadow-lg">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>

              <h1 className="text-4xl font-bold text-forest-900 mb-6">Thank You for Your Interest!</h1>
              <p className="text-xl text-forest-600 mb-12 leading-relaxed">
                We've received your demo request and will be in touch within 24 hours to schedule your personalized
                demonstration of Culture & Careers.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-forest-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-forest-100 rounded-full mx-auto mb-4">
                      <Clock className="h-6 w-6 text-forest-600" />
                    </div>
                    <h3 className="font-semibold text-forest-900 mb-2">Quick Response</h3>
                    <p className="text-sm text-forest-600">Our team will contact you within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-forest-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-forest-100 rounded-full mx-auto mb-4">
                      <Target className="h-6 w-6 text-forest-600" />
                    </div>
                    <h3 className="font-semibold text-forest-900 mb-2">Personalized Demo</h3>
                    <p className="text-sm text-forest-600">15-minute walkthrough tailored to your needs</p>
                  </CardContent>
                </Card>

                <Card className="border-forest-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-forest-100 rounded-full mx-auto mb-4">
                      <Award className="h-6 w-6 text-forest-600" />
                    </div>
                    <h3 className="font-semibold text-forest-900 mb-2">Custom Proposal</h3>
                    <p className="text-sm text-forest-600">Receive a tailored hiring solution</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3">
                  <Link href="/jobs">Explore Jobs</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-forest-300 text-forest-700 hover:bg-forest-50 bg-transparent px-8 py-3"
                >
                  <Link href="/for-employers">Back to Employers</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-forest-50 to-white text-forest-950">
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-forest-200 bg-white/80 backdrop-blur-sm">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="text-forest-600 hover:text-forest-700">
                <Link href="/for-employers">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Employers
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Interactive Demo Experience
            </div>
            <h1 className="text-5xl font-bold text-forest-900 mb-6 leading-tight">
              Transform Your
              <span className="text-forest-600 block">Hiring Process</span>
            </h1>
            <p className="text-xl text-forest-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore Culture & Careers' powerful analytics dashboard and see how our platform can revolutionize your
              talent acquisition strategy.
            </p>
          </div>

          {/* Demo Dashboard Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-forest-900 mb-4">Experience Your Future Dashboard</h2>
              <p className="text-forest-600 text-lg">See real-time hiring insights and analytics in action</p>
            </div>

            {/* Dashboard Tabs */}
            <div className="bg-white rounded-xl shadow-lg border border-forest-200 overflow-hidden">
              <div className="border-b border-forest-200 bg-forest-50">
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-xl font-semibold text-forest-900">Hiring Analytics Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={activeTab === "overview" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("overview")}
                      className={activeTab === "overview" ? "bg-forest-600 text-white" : "text-forest-600"}
                    >
                      Overview
                    </Button>
                    <Button
                      variant={activeTab === "performance" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("performance")}
                      className={activeTab === "performance" ? "bg-forest-600 text-white" : "text-forest-600"}
                    >
                      Job Performance
                    </Button>
                    <Button
                      variant={activeTab === "insights" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("insights")}
                      className={activeTab === "insights" ? "bg-forest-600 text-white" : "text-forest-600"}
                    >
                      Market Insights
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {overviewStats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                          <Card key={index} className="border-forest-200">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                  <div className="flex items-center mt-2">
                                    {stat.trend === "up" ? (
                                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                    ) : (
                                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                                    )}
                                    <span
                                      className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                                    >
                                      {stat.change}
                                    </span>
                                    <span className="text-sm text-gray-500 ml-1">{stat.description}</span>
                                  </div>
                                </div>
                                <div className="p-3 bg-forest-100 rounded-lg">
                                  <Icon className="h-6 w-6 text-forest-600" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>

                    {/* Top Locations */}
                    <Card className="border-forest-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          Top Applicant Locations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topLocations.map((location, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{location.city}</p>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                  <div
                                    className="bg-forest-600 h-2 rounded-full"
                                    style={{ width: `${location.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="ml-4 text-right">
                                <p className="font-medium text-gray-900">{location.applications}</p>
                                <p className="text-sm text-gray-500">{location.percentage}%</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === "performance" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold text-forest-900">Active Job Postings</h4>
                      <Button variant="outline" size="sm" className="border-forest-300 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Export Report
                      </Button>
                    </div>
                    {jobPerformance.map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-forest-200 rounded-lg hover:bg-forest-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-gray-900">{job.title}</h3>
                            <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {job.company} • {job.posted}
                          </p>
                        </div>

                        <div className="flex items-center gap-8 text-sm">
                          <div className="text-center">
                            <p className="font-medium text-gray-900">{job.views.toLocaleString()}</p>
                            <p className="text-gray-500">Views</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900">{job.applications}</p>
                            <p className="text-gray-500">Applications</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-forest-600">{job.rate}</p>
                            <p className="text-gray-500">Rate</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "insights" && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-forest-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Market Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Social Media Marketing</span>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600">+15%</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Content Creation</span>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600">+23%</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Brand Partnerships</span>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600">+8%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-forest-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Salary Benchmarks</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Social Media Manager</span>
                              <span className="text-sm font-medium">$65,000</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Content Producer</span>
                              <span className="text-sm font-medium">$58,000</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Brand Partnerships Lead</span>
                              <span className="text-sm font-medium">$78,000</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-forest-200 bg-gradient-to-r from-forest-600 to-forest-700 text-white">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <BarChart3 className="h-6 w-6" />
                          <h4 className="text-lg font-semibold">Performance Tip</h4>
                        </div>
                        <p className="text-forest-100">
                          Jobs with salary ranges get 30% more applications than those without. Consider adding
                          competitive salary information to boost your application rates.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-forest-900 mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-forest-600 leading-relaxed mb-8">
                  Book a personalized demo to see how Culture & Careers can transform your hiring process with powerful
                  analytics and AI-driven insights.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-900 mb-2">10K+</div>
                  <div className="text-sm text-forest-600">Verified Candidates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-900 mb-2">500+</div>
                  <div className="text-sm text-forest-600">Companies Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-900 mb-2">95%</div>
                  <div className="text-sm text-forest-600">Success Rate</div>
                </div>
              </div>

              {/* What You'll Get */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-forest-100">
                <h3 className="text-xl font-semibold text-forest-900 mb-6">What you'll discover:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <p className="text-forest-700">Real-time analytics dashboard with hiring insights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <p className="text-forest-700">AI-powered candidate matching and recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <p className="text-forest-700">Market salary benchmarks and trend analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <p className="text-forest-700">Success stories from top creator economy brands</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5 from 200+ companies</span>
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "The analytics dashboard gives us insights we never had before. We can now optimize our job postings
                  in real-time and see exactly where our best candidates are coming from."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-forest-200">Head of Talent, Beast Burger</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-forest-200 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-forest-900 mb-2">Book Your Demo</h2>
                    <p className="text-forest-600">Get started in less than 2 minutes</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName" className="text-forest-900 font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="border-forest-300 focus:border-forest-500 focus:ring-forest-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-forest-900 font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="border-forest-300 focus:border-forest-500 focus:ring-forest-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-forest-900 font-medium">
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-forest-300 focus:border-forest-500 focus:ring-forest-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-forest-900 font-medium">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="border-forest-300 focus:border-forest-500 focus:ring-forest-500"
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="jobTitle" className="text-forest-900 font-medium">
                          Job Title *
                        </Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                          className="border-forest-300 focus:border-forest-500 focus:ring-forest-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="companySize" className="text-forest-900 font-medium">
                          Company Size *
                        </Label>
                        <Select
                          value={formData.companySize}
                          onValueChange={(value) => handleInputChange("companySize", value)}
                        >
                          <SelectTrigger className="border-forest-300 focus:border-forest-500 focus:ring-forest-500">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-1000">201-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="hiringNeeds" className="text-forest-900 font-medium">
                        Primary Hiring Focus *
                      </Label>
                      <Select
                        value={formData.hiringNeeds}
                        onValueChange={(value) => handleInputChange("hiringNeeds", value)}
                      >
                        <SelectTrigger className="border-forest-300 focus:border-forest-500 focus:ring-forest-500">
                          <SelectValue placeholder="Select your main focus" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="content-creators">Content Creators</SelectItem>
                          <SelectItem value="marketing">Marketing & Growth</SelectItem>
                          <SelectItem value="community">Community Management</SelectItem>
                          <SelectItem value="design">Design & Creative</SelectItem>
                          <SelectItem value="operations">Operations & Strategy</SelectItem>
                          <SelectItem value="multiple">Multiple Roles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-forest-900 font-medium">
                        Hiring Timeline *
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="border-forest-300 focus:border-forest-500 focus:ring-forest-500">
                          <SelectValue placeholder="When do you need to hire?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="challenges" className="text-forest-900 font-medium">
                        Current Hiring Challenges
                      </Label>
                      <Textarea
                        id="challenges"
                        value={formData.challenges}
                        onChange={(e) => handleInputChange("challenges", e.target.value)}
                        placeholder="Tell us about your biggest hiring challenges..."
                        className="border-forest-300 focus:border-forest-500 focus:ring-forest-500"
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="border-forest-300"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-forest-600 leading-relaxed">
                        I'd like to receive updates about creator economy hiring trends and tips
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 text-lg font-semibold"
                    >
                      {isLoading ? "Scheduling Demo..." : "Schedule My Free Demo"}
                    </Button>

                    <p className="text-xs text-forest-500 text-center leading-relaxed">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll only use your
                      information to schedule and conduct your demo.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
