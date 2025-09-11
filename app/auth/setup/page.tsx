import { AuthSetupChecker } from "@/components/auth/auth-setup-checker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ExternalLink, Settings } from "lucide-react"
import Link from "next/link"

export default function AuthSetupPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Authentication Setup Guide</h1>
        <p className="text-gray-600">Complete these steps to enable all authentication methods</p>
      </div>

      <div className="mb-8">
        <AuthSetupChecker />
      </div>

      <div className="grid gap-6">
        {/* Supabase Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              1. Supabase Dashboard Configuration
            </CardTitle>
            <CardDescription>Configure authentication providers in your Supabase dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Site URL Configuration:</h4>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">Site URL: {siteUrl}</div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Redirect URLs:</h4>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm space-y-1">
                <div>{siteUrl}/auth/callback</div>
                <div>{siteUrl}/auth/reset-password</div>
              </div>
            </div>

            <Button asChild>
              <Link href="https://supabase.com/dashboard" target="_blank" className="flex items-center gap-2">
                Open Supabase Dashboard <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* LinkedIn OAuth */}
        <Card>
          <CardHeader>
            <CardTitle>2. LinkedIn OAuth Setup</CardTitle>
            <CardDescription>Configure LinkedIn OAuth in LinkedIn Developer Portal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                Go to{" "}
                <Link href="https://developer.linkedin.com" target="_blank" className="text-blue-600 hover:underline">
                  LinkedIn Developer Portal
                </Link>
              </li>
              <li>Create a new app</li>
              <li>Request access to "Sign In with LinkedIn using OpenID Connect"</li>
              <li>
                Add redirect URL: <code className="bg-gray-100 px-1 rounded">{siteUrl}/auth/callback</code>
              </li>
              <li>Get your Client ID and Client Secret</li>
            </ol>

            <Alert>
              <AlertDescription>
                Add your LinkedIn Client ID and Secret to your Supabase Auth settings under "LinkedIn (OIDC)" provider.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Phone Auth */}
        <Card>
          <CardHeader>
            <CardTitle>3. Phone Authentication Setup</CardTitle>
            <CardDescription>Configure SMS provider for phone verification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Go to your Supabase dashboard</li>
              <li>Navigate to Authentication → Settings</li>
              <li>Enable "Phone" provider</li>
              <li>Configure SMS provider (Twilio recommended)</li>
              <li>Add your Twilio credentials</li>
            </ol>

            <Alert>
              <AlertDescription>
                You'll need a Twilio account and phone number to send SMS verification codes.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle>4. Environment Variables</CardTitle>
            <CardDescription>Add these environment variables to your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm space-y-1">
              <div># Already configured</div>
              <div>NEXT_PUBLIC_SUPABASE_URL=your_supabase_url</div>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key</div>
              <div>NEXT_PUBLIC_SITE_URL={siteUrl}</div>
              <div></div>
              <div># Add these for OAuth (optional)</div>
              <div>NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_linkedin_client_id</div>
            </div>
          </CardContent>
        </Card>

        {/* Test Authentication */}
        <Card>
          <CardHeader>
            <CardTitle>5. Test Authentication</CardTitle>
            <CardDescription>Test all authentication methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/auth/signin">Test Sign In</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/auth/signup">Test Sign Up</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
