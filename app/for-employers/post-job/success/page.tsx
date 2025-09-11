import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function JobPostSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 to-sage-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-forest-900">Job Posted Successfully!</CardTitle>
          <CardDescription className="text-lg text-forest-600">
            Your job posting is now live and visible to thousands of talented creators and professionals.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-forest-50 p-6 rounded-lg">
            <h3 className="font-semibold text-forest-900 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-forest-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Your job is immediately searchable on our platform
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Qualified candidates will start applying within hours
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                You'll receive email notifications for new applications
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Track performance through your employer dashboard
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/dashboard/employer">
              <Button className="w-full bg-forest-700 hover:bg-forest-800 text-white">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Dashboard
              </Button>
            </Link>
            <Link href="/for-employers/post-job">
              <Button variant="outline" className="w-full border-forest-200 hover:bg-forest-50 bg-transparent">
                Post Another Job
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-forest-600">
              Need help managing applications?{" "}
              <Link href="/contact" className="text-forest-700 hover:text-forest-800 underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
