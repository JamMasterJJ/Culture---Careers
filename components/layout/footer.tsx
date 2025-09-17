import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">Culture & Careers</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              Connecting talented individuals with innovative companies in the creator economy. Find your dream career
              today.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Job Seekers</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/jobs" className="text-base text-gray-300 hover:text-white">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/for-talent" className="text-base text-gray-300 hover:text-white">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-base text-gray-300 hover:text-white">
                  Create Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Employers</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/for-employers/post-job" className="text-base text-gray-300 hover:text-white">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/for-employers" className="text-base text-gray-300 hover:text-white">
                  Employer Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; 2024 Culture & Careers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
