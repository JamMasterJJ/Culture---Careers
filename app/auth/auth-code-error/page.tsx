import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle, ArrowLeft } from "lucide-react"

export default function AuthCodeErrorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-forest-100 bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider">CULTURE AND CAREERS</span>
          </div>
          <div className="w-[100px]"></div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="bg-white p-8 rounded-lg border border-red-200 shadow-md">
            <div className="text-center mb-6">
              <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">Authentication Error</h1>
              <p className="text-gray-600 mt-2">
                There was an issue with your authentication. This could be due to an expired or invalid link.
              </p>
            </div>

            <div className="space-y-4">
              <Button asChild className="w-full bg-[#4D7C4D] hover:bg-[#3A5A3A] text-white">
                <Link href="/auth/signin">Try Signing In Again</Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/auth/signup">Create New Account</Link>
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                If you continue to experience issues, please{" "}
                <Link href="/contact" className="text-[#4D7C4D] hover:underline">
                  contact support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
