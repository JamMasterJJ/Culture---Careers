"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, TrendingUp } from "lucide-react"

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
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Culture & Careers</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/jobs" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                Jobs
              </Link>
              <Link href="/for-talent" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                For Talent
              </Link>
              <Link
                href="/for-employers"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                For Employers
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Button asChild variant="outline" size="sm">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
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
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/jobs" className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium">
                Jobs
              </Link>
              <Link
                href="/for-talent"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
              >
                For Talent
              </Link>
              <Link
                href="/for-employers"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
              >
                For Employers
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
              >
                About
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
