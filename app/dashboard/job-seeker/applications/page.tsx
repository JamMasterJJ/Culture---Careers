"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/components/auth/auth-provider"
import { DatabaseService } from "@/lib/services/database-service"
import { ArrowLeft, Search, Filter, Calendar, MapPin, Building, ExternalLink, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

interface Application {
  id: string
  status: "submitted" | "reviewed" | "interviewing" | "rejected" | "hired"
  created_at: string
  updated_at: string
  jobs: {
    id: string
    title: string
    location: string
    companies: {
      name: string
      logo_url: string | null
    }
  }
}

const statusColors = {
  submitted: "bg-blue-100 text-blue-800",
  reviewed: "bg-yellow-100 text-yellow-800",
  interviewing: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  hired: "bg-purple-100 text-purple-800",
}

const statusLabels = {
  submitted: "Submitted",
  reviewed: "Under Review",
  interviewing: "Interviewing",
  rejected: "Not Selected",
  hired: "Hired",
}

export default function ApplicationsPage() {
  const { user } = useAuth()
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  useEffect(() => {
    if (user) {
      fetchApplications()
    }
  }, [user])

  const fetchApplications = async () => {
    if (!user) return

    try {
      const { applications, error } = await DatabaseService.getUserApplications(user.id)
      if (error) {
        console.error("Error fetching applications:", error)
        return
      }
      setApplications(applications)
    } catch (error) {
      console.error("Error fetching applications:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.jobs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobs.companies.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || app.status === statusFilter

    return matchesSearch && matchesStatus
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
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
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
              href="/dashboard/job-seeker"
              className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold tracking-wider">My Applications</h1>
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
                <div className="text-sm text-gray-600">Submitted</div>
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
                    placeholder="Search applications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
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
                  <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {applications.length === 0 ? "No applications yet" : "No applications match your filters"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {applications.length === 0
                      ? "Start applying to jobs to see your applications here."
                      : "Try adjusting your search or filter criteria."}
                  </p>
                  <Button asChild className="bg-forest-700 hover:bg-forest-800">
                    <Link href="/jobs">Browse Jobs</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredApplications.map((application) => (
                <Card key={application.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md bg-gray-50 flex-shrink-0">
                        <Image
                          src={application.jobs.companies.logo_url || "/placeholder.svg?height=48&width=48"}
                          alt={application.jobs.companies.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{application.jobs.title}</h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                              <Building className="h-4 w-4" />
                              <span>{application.jobs.companies.name}</span>
                              <MapPin className="h-4 w-4 ml-2" />
                              <span>{application.jobs.location}</span>
                            </div>
                          </div>
                          <Badge className={statusColors[application.status]}>{statusLabels[application.status]}</Badge>
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
                              <span>
                                Updated {formatDistanceToNow(new Date(application.updated_at), { addSuffix: true })}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/jobs/${application.jobs.id}`}>
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View Job
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            View Application
                          </Button>
                          {application.status === "interviewing" && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Schedule Interview
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
