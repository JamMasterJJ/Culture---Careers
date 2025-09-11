import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, FileText, ExternalLink, Building, Briefcase } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { formatDistanceToNow, format } from "date-fns"
import { ApplicationStatusButton } from "@/components/applications/application-status-button"

export default async function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const supabase = createServerSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard/employer/applications")
  }

  // Get user data to check if they're an employer
  const { data: userData } = await supabase.from("users").select("user_type").eq("id", session.user.id).single()

  if (!userData || userData.user_type !== "employer") {
    redirect("/")
  }

  // Fetch application details
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/applications/${params.id}`, {
    headers: {
      cookie: `sb-access-token=${session.access_token}; sb-refresh-token=${session.refresh_token}`,
    },
  })

  if (!response.ok) {
    redirect("/dashboard/employer/applications")
  }

  const { application } = await response.json()

  const createdAt = new Date(application.created_at)
  const formattedDate = format(createdAt, "MMMM d, yyyy")
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true })

  return (
    <div className="flex min-h-screen flex-col bg-forest-50">
      <header className="border-b border-forest-100 bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/dashboard/employer/applications"
            className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Applications
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider">CULTURE AND CAREERS</span>
          </div>
          <div className="w-[100px]"></div> {/* Spacer for balance */}
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg border border-forest-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-forest-900 mb-1">{application.full_name}</h1>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          application.status === "reviewed"
                            ? "bg-blue-100 text-blue-800"
                            : application.status === "interviewing"
                              ? "bg-purple-100 text-purple-800"
                              : application.status === "hired"
                                ? "bg-green-100 text-green-800"
                                : application.status === "rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-forest-100 text-forest-700"
                        }
                      >
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </Badge>
                      <span className="text-sm text-forest-600">Applied {timeAgo}</span>
                    </div>
                  </div>

                  <ApplicationStatusButton application={application} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-forest-500 mr-2" />
                    <a href={`mailto:${application.email}`} className="text-forest-700 hover:text-forest-900">
                      {application.email}
                    </a>
                  </div>

                  {application.phone && (
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-forest-500 mr-2" />
                      <a href={`tel:${application.phone}`} className="text-forest-700 hover:text-forest-900">
                        {application.phone}
                      </a>
                    </div>
                  )}
                </div>

                {application.resume_url && (
                  <div className="mb-6">
                    <h2 className="text-lg font-medium text-forest-800 mb-2">Resume</h2>
                    <Button variant="outline" className="border-forest-300 text-forest-700 hover:bg-forest-50" asChild>
                      <a href={application.resume_url} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" /> View Resume <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                )}

                {application.cover_letter && (
                  <div>
                    <h2 className="text-lg font-medium text-forest-800 mb-2">Cover Letter</h2>
                    <div className="bg-forest-50 p-4 rounded-md border border-forest-100 whitespace-pre-wrap">
                      {application.cover_letter}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg border border-forest-200">
                <h2 className="text-lg font-medium text-forest-800 mb-4">Application Timeline</h2>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-forest-600"></div>
                      <div className="h-full w-0.5 bg-forest-200"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-forest-800">Application Submitted</p>
                      <p className="text-xs text-forest-600">{formattedDate}</p>
                    </div>
                  </div>

                  {application.status !== "submitted" && (
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="h-4 w-4 rounded-full bg-forest-600"></div>
                        <div className="h-full w-0.5 bg-forest-200"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-forest-800">
                          Application {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </p>
                        <p className="text-xs text-forest-600">
                          {application.updated_at ? format(new Date(application.updated_at), "MMMM d, yyyy") : ""}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Job Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-forest-900">{application.job.title}</h3>
                      <div className="flex items-center text-sm text-forest-600 mt-1">
                        <Building className="mr-1 h-4 w-4" />
                        <span>{application.job.company.name}</span>
                      </div>
                      <div className="flex items-center text-sm text-forest-600 mt-1">
                        <Briefcase className="mr-1 h-4 w-4" />
                        <span>{application.job.location}</span>
                        {application.job.is_remote && (
                          <Badge className="ml-2 bg-forest-100 text-forest-700">Remote</Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/jobs/${application.job.id}`}>View Job Listing</Link>
                    </Button>

                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/dashboard/employer/applications?job_id=${application.job.id}`}>
                        View All Applicants for This Job
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-white p-6 rounded-lg border border-forest-200">
                <h3 className="text-lg font-medium text-forest-800 mb-4">Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href={`mailto:${application.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Email Candidate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
