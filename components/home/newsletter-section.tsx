import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function NewsletterSection() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">CAREERTRENDS</h3>
              <div className="w-20 h-1 bg-white mt-2"></div>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="bg-white text-blue-600 p-2 rounded hover:bg-gray-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white text-blue-600 p-2 rounded hover:bg-gray-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white text-blue-600 p-2 rounded hover:bg-gray-100 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white text-blue-600 p-2 rounded hover:bg-gray-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            <div>
              <p className="text-blue-100">support@careertrends.com</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-blue-100 hover:text-white transition-colors">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Support Hub
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  Compare
                </Link>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/jobs" className="text-blue-100 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/for-talent/resources" className="text-blue-100 hover:text-white transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/for-talent/events" className="text-blue-100 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/culture-ai" className="text-blue-100 hover:text-white transition-colors">
                  CultureAI
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/for-employers/post-job" className="text-blue-100 hover:text-white transition-colors">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link href="/for-employers/talent-search" className="text-blue-100 hover:text-white transition-colors">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="/for-employers/demo" className="text-blue-100 hover:text-white transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="/for-employers/reporting" className="text-blue-100 hover:text-white transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-blue-100 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
          <div className="text-sm text-blue-100">© Copyright CAREERTRENDS. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
