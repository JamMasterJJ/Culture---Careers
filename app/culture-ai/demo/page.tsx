import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function DemoPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request a Culture AI Demo</h1>
            <p className="text-xl text-gray-600">
              See how Culture AI can transform your job search with a personalized demonstration.
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Demo Request Form</CardTitle>
              <CardDescription>
                Fill out the form below and our team will contact you to schedule a personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Current Job Title</Label>
                  <Input id="jobTitle" placeholder="Enter your current job title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">What interests you most about Culture AI?</Label>
                  <Textarea
                    id="interests"
                    placeholder="Tell us what features you're most interested in seeing"
                    rows={4}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700">Request Demo</Button>
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/culture-ai">Back to Culture AI</Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not ready for a demo?</h2>
            <p className="text-lg text-gray-600 mb-6">Check out our pricing plans or contact us with any questions.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="/culture-ai#pricing">View Pricing</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
