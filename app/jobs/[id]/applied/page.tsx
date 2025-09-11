import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function ApplicationSuccessPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="bg-white p-8 rounded-lg border border-forest-200 shadow-md text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-forest-600" />
            </div>

            <h1 className="text-3xl font-bold text-forest-900 mb-4">Application Submitted!</h1>

            <p className="text-forest-700 mb-6">
              Thank you for applying. Your application has been successfully submitted and is now under review. We'll be
              in touch soon regarding next steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-forest-300 text-forest-700 hover:bg-forest-50" asChild>
                <Link href={`/jobs/${params.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Job
                </Link>
              </Button>

              <Button className="bg-forest-700 hover:bg-forest-800 text-white" asChild>
                <Link href="/jobs">Browse More Jobs</Link>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-forest-100">
              <h2 className="text-lg font-medium text-forest-800 mb-2">What happens next?</h2>
              <ol className="text-left space-y-2 text-forest-600">
                <li className="flex items-start">
                  <span className="text-forest-500 font-medium mr-2">1.</span>
                  <span>The employer will review your application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 font-medium mr-2">2.</span>
                  <span>You'll receive an email notification if you're selected for an interview</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 font-medium mr-2">3.</span>
                  <span>You can track the status of your application in your dashboard</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
