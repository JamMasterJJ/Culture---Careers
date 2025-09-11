import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 to-sage-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-forest-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-forest-900">Check Your Email</CardTitle>
          <CardDescription className="text-forest-600">
            We've sent you a verification link to complete your registration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-forest-600">
            <p>Please check your email and click the verification link to activate your account.</p>
            <p className="mt-2">Didn't receive the email? Check your spam folder.</p>
          </div>

          <div className="pt-4">
            <Link href="/auth/signin">
              <Button variant="outline" className="w-full bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
