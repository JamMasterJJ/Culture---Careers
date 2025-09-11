"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="w-full">
      {/* Event Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 text-center text-sm">
        <span className="font-medium">🎉 Virtual Job Fair - December 15th</span>
        <span className="mx-2">|</span>
        <span>Connect with top creator economy brands</span>
        <Link href="/events" className="ml-2 underline hover:no-underline">
          Register Now
        </Link>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-lg font-bold text-[#3E6E50] tracking-wider">
                Culture & Careers
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* For Job Seekers Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-[#3E6E50] font-medium"
                  onMouseEnter={() => setActiveDropdown("jobseekers")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  For Job Seekers
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "jobseekers" && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={() => setActiveDropdown("jobseekers")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/for-talent/memberships"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Memberships
                    </Link>
                    <Link
                      href="/for-talent/resources"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Career Resources
                    </Link>
                    <Link href="/for-talent/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Events
                    </Link>
                    <Link href="/jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Explore Jobs
                    </Link>
                    <Link
                      href="/for-talent/analytics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Analytics
                    </Link>
                  </div>
                )}
              </div>

              {/* For Employers Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-[#3E6E50] font-medium"
                  onMouseEnter={() => setActiveDropdown("employers")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  For Employers
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "employers" && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={() => setActiveDropdown("employers")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/for-employers/post-job"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Post Jobs
                    </Link>
                    <Link
                      href="/for-employers/talent-search"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Find Talent
                    </Link>
                    <Link href="/for-employers/demo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Request Demo
                    </Link>
                    <Link
                      href="/for-employers/reporting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Analytics
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-[#3E6E50] font-medium"
                  onMouseEnter={() => setActiveDropdown("content")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "content" && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={() => setActiveDropdown("content")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href="/content/articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Articles
                    </Link>
                    <Link href="/content/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Videos
                    </Link>
                    <Link href="/content/podcasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Podcasts
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/trending-ventures" className="text-gray-700 hover:text-[#3E6E50] font-medium">
                Trending
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button className="bg-[#3E6E50] hover:bg-[#2A4A37] text-white" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#3E6E50] focus:outline-none focus:text-[#3E6E50]"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                {/* Mobile For Job Seekers */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleDropdownToggle("mobile-jobseekers")}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3E6E50] hover:bg-gray-50"
                  >
                    For Job Seekers
                    <ChevronDown
                      className={`h-4 w-4 transform ${activeDropdown === "mobile-jobseekers" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === "mobile-jobseekers" && (
                    <div className="pl-4 space-y-1">
                      <Link
                        href="/for-talent/memberships"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Memberships
                      </Link>
                      <Link
                        href="/for-talent/resources"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Career Resources
                      </Link>
                      <Link
                        href="/for-talent/events"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Events
                      </Link>
                      <Link
                        href="/jobs"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Explore Jobs
                      </Link>
                      <Link
                        href="/for-talent/analytics"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Analytics
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile For Employers */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleDropdownToggle("mobile-employers")}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3E6E50] hover:bg-gray-50"
                  >
                    For Employers
                    <ChevronDown
                      className={`h-4 w-4 transform ${activeDropdown === "mobile-employers" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === "mobile-employers" && (
                    <div className="pl-4 space-y-1">
                      <Link
                        href="/for-employers/post-job"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Post Jobs
                      </Link>
                      <Link
                        href="/for-employers/talent-search"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Find Talent
                      </Link>
                      <Link
                        href="/for-employers/demo"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Request Demo
                      </Link>
                      <Link
                        href="/for-employers/reporting"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Analytics
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Resources */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleDropdownToggle("mobile-content")}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3E6E50] hover:bg-gray-50"
                  >
                    Resources
                    <ChevronDown
                      className={`h-4 w-4 transform ${activeDropdown === "mobile-content" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === "mobile-content" && (
                    <div className="pl-4 space-y-1">
                      <Link
                        href="/content/articles"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Articles
                      </Link>
                      <Link
                        href="/content/videos"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Videos
                      </Link>
                      <Link
                        href="/content/podcasts"
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3E6E50]"
                        onClick={() => setIsOpen(false)}
                      >
                        Podcasts
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/trending-ventures"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3E6E50] hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Trending
                </Link>

                {/* Mobile Auth Buttons */}
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="space-y-2">
                    <Link
                      href="/auth/signin"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3E6E50]"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="block px-3 py-2 text-base font-medium bg-[#3E6E50] text-white rounded-md hover:bg-[#2A4A37]"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
