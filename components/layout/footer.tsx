import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Culture & Careers</h3>
            <p className="text-gray-400 text-sm">
              Connecting talent with opportunities in the creator economy. Find your perfect cultural fit.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h4 className="font-semibold">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/jobs" className="hover:text-white">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/for-talent/memberships" className="hover:text-white">
                  Memberships
                </Link>
              </li>
              <li>
                <Link href="/culture-ai" className="hover:text-white">
                  Culture AI
                </Link>
              </li>
              <li>
                <Link href="/for-talent/resources" className="hover:text-white">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h4 className="font-semibold">For Employers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/for-employers/post-job" className="hover:text-white">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link href="/for-employers/talent-search" className="hover:text-white">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="/for-employers/demo" className="hover:text-white">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="/for-employers/reporting" className="hover:text-white">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Culture & Careers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
