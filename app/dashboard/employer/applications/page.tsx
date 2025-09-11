"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/components/auth/auth-provider"
import { DatabaseService } from "@/lib/services/database-service"
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  FileText,
  User,
  CheckCircle,
  XCircle,
  Clock,
  Users,
} from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

interface JobApplication {
  id: string
  full_name: string
  email: string
  phone: string | null
  resume_url: string | null
  cover_letter: string | null
  status: "submitted" | "reviewed" | "interviewing" | "rejected" | "hired"
  created_at: string
  updated_at: string
  users: {
    id: string
    full_name: string
    email: string
  } | null
}

interface Job {
  id: string
  title: string
  location: string
  applications: JobApplication[]
}

const statusColors = {
  submitted: "bg-blue-100 text-blue-800",
  reviewed: "bg-yellow-100 text-yellow-800",
  interviewing: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  hired: "bg-purple-100 text-purple-800",
}

const statusLabels = {
  submitted: "New Application",
  reviewed: "Under Review",
  interviewing: "Interviewing",
  rejected: "Not Selected",
  hired: "Hired",
}

export default function EmployerApplicationsPage() {
  const { user } = useAuth()
  const [jobs, setJobs] = useState<Job[]>([])
  const [selectedJob, setSelectedJob] = useState<string>("all")
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  useEffect(() => {
    if (user) {
      fetchEmployerJobs()
    }
  }, [user])

  const fetchEmployerJobs = async () => {
    if (!user) return

    try {
      // In a real app, you'd fetch jobs owned by the employer
      // For now, we'll use mock data
      const mockJobs = [
        {
          id: "1",
          title: "Social Media Manager",
          location: "Los Angeles, CA",
          applications: [
            {
              id: "1",
              full_name: "Sarah Johnson",
              email: "sarah.johnson@email.com",
              phone: "+1 (555) 123-4567",
              resume_url: "https://example.com/resume1.pdf",
              cover_letter: "I'm excited about this opportunity to join your team...",
              status: "submitted" as const,
              created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
              updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
              users: {
                id: "user1",
                full_name: "Sarah Johnson",
                email: "sarah.johnson@email.com",
              },
            },
            {
              id: "2",
              full_name: "Michael Chen",
              email: "michael.chen@email.com",
              phone: "+1 (555) 987-6543",
              resume_url: "https://example.com/resume2.pdf",
              cover_letter: "With 5 years of experience in social media marketing...",
              status: "interviewing" as const,
              created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
              updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
              users: {
                id: "user2",
                full_name: "Michael Chen",
                email: "michael.chen@email.com",
              },
            },
          ],
        },
        {
          id: "2",
          title: "Content Creator",
          location: "Remote",
          applications: [
            {
              id: "3",
              full_name: "Emma Rodriguez",
              email: "emma.rodriguez@email.com",
              phone: null,
              resume_url: null,
              cover_letter: "I've been creating content for 3 years...",
              status: "reviewed" as const,
              created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
              updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
              users: {
                id: "user3",
                full_name: "Emma Rodriguez",
                email: "emma.rodriguez@email.com",
              },
            },
          ],
        },
      ]

      setJobs(mockJobs)

      // Flatten all applications
      const allApplications = mockJobs.flatMap((job) => job.applications)
      setApplications(allApplications)
    } catch (error) {
      console.error("Error fetching employer jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (applicationId: string, newStatus: JobApplication["status"]) => {
    try {
      const { application, error } = await DatabaseService.updateApplicationStatus(applicationId, newStatus)

      if (error) {
        console.error("Error updating application status:", error)
        return
      }

      // Update local state
      setApplications((prev) =>
        prev.map((app) =>
          app.id === applicationId ? { ...app, status: newStatus, updated_at: new Date().toISOString() } : app,
        ),
      )

      setJobs((prev) =>
        prev.map((job) => ({
          ...job,
          applications: job.applications.map((app) =>
            app.id === applicationId ? { ...app, status: newStatus, updated_at: new Date().toISOString() } : app,
          ),
        })),
      )
    } catch (error) {
      console.error("Error updating application status:", error)
    }
  }

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    const matchesJob =
      selectedJob === "all" ||
      jobs.find((job) => job.applications.some((jobApp) => jobApp.id === app.id))?.id === selectedJob

    return matchesSearch && matchesStatus && matchesJob
  })

  const getStatusStats = () => {
    const stats = {
      total: applications.length,
      submitted: applications.filter((app) => app.status === "submitted").length,
      reviewed: applications.filter((app) => app.status === "reviewed").length,
      interviewing: applications.filter((app) => app.status === "interviewing").length,
      rejected: applications.filter((app) => app.status === "rejected").length,
      hired: applications.filter((app) => app.status === "hired").length,
    }
    return stats
  }

  const stats = getStatusStats()

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <div className="container px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/employer"
              className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold tracking-wider">Job Applications</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                <div className="text-sm text-gray-600">Total Applications</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.submitted}</div>
                <div className="text-sm text-gray-600">New Applications</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.reviewed}</div>
                <div className="text-sm text-gray-600">Under Review</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{stats.interviewing}</div>
                <div className="text-sm text-gray-600">Interviewing</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.hired}</div>
                <div className="text-sm text-gray-600">Hired</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search applicants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedJob} onValueChange={setSelectedJob}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by job" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jobs</SelectItem>
                    {jobs.map((job) => (
                      <SelectItem key={job.id} value={job.id}>
                        {job.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="submitted">New Applications</SelectItem>
                    <SelectItem value="reviewed">Under Review</SelectItem>
                    <SelectItem value="interviewing">Interviewing</SelectItem>
                    <SelectItem value="rejected">Not Selected</SelectItem>
                    <SelectItem value="hired">Hired</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {applications.length === 0 ? "No applications yet" : "No applications match your filters"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {applications.length === 0
                      ? "Applications will appear here when candidates apply to your jobs."
                      : "Try adjusting your search or filter criteria."}
                  </p>
                  <Button asChild className="bg-forest-700 hover:bg-forest-800">
                    <Link href="/for-employers/post-job">Post a Job</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredApplications.map((application) => {
                const job = jobs.find((j) => j.applications.some((app) => app.id === application.id))

                return (
                  <Card key={application.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-400" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">{application.full_name}</h3>
                              <div className="flex items-center gap-4 text-gray-600 mb-2">
                                <div className="flex items-center gap-1">
                                  <Mail className="h-4 w-4" />
                                  <span>{application.email}</span>
                                </div>
                                {application.phone && (
                                  <div className="flex items-center gap-1">
                                    <Phone className="h-4 w-4" />
                                    <span>{application.phone}</span>
                                  </div>
                                )}
                              </div>
                              {job && (
                                <div className="text-sm text-gray-500 mb-2">
                                  Applied for: <span className="font-medium">{job.title}</span> • {job.location}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={statusColors[application.status]}>
                                {statusLabels[application.status]}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
                              </span>
                            </div>
                            {application.updated_at !== application.created_at && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>
                                  Updated {formatDistanceToNow(new Date(application.updated_at), { addSuffix: true })}
                                </span>
                              </div>
                            )}
                          </div>

                          {application.cover_letter && (
                            <div className="mb-4 p-3 bg-gray-50 rounded-md">
                              <p className="text-sm text-gray-700 line-clamp-3">{application.cover_letter}</p>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {application.resume_url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={application.resume_url} target="_blank" rel="noopener noreferrer">
                                  <FileText className="h-4 w-4 mr-1" />
                                  View Resume
                                </a>
                              </Button>
                            )}

                            <Button size="sm" variant="outline">
                              <Mail className="h-4 w-4 mr-1" />
                              Send Message
                            </Button>

                            {application.status === "submitted" && (
                              <>
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700 text-white"
                                  onClick={() => handleStatusUpdate(application.id, "reviewed")}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Review
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                                  onClick={() => handleStatusUpdate(application.id, "rejected")}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </>
                            )}

                            {application.status === "reviewed" && (
                              <>
                                <Button
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                  onClick={() => handleStatusUpdate(application.id, "interviewing")}
                                >
                                  Schedule Interview
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                                  onClick={() => handleStatusUpdate(application.id, "rejected")}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </>
                            )}

                            {application.status === "interviewing" && (
                              <>
                                <Button
                                  size="sm"
                                  className="bg-purple-600 hover:bg-purple-700 text-white"
                                  onClick={() => handleStatusUpdate(application.id, "hired")}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Hire
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                                  onClick={() => handleStatusUpdate(application.id, "rejected")}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
