"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotatingBrands } from "@/components/home/rotating-brands"
import { Users, Building2, TrendingUp, Briefcase, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3E6E50] to-[#2A4A37] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Where Creator Economy
            <br />
            <span className="text-green-200">Talent Meets Opportunity</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            From emerging startups to established brands, discover opportunities with companies at the forefront of the
            creator economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#3E6E50] hover:bg-green-50 font-semibold px-8 py-3">
              <Link href="/jobs">Explore Jobs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#3E6E50] font-semibold px-8 py-3 bg-transparent"
            >
              <Link href="/for-employers">Post a Job</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rotating Brands */}
      <RotatingBrands />

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-[#3E6E50]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Creator Economy Professionals</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Building2 className="h-12 w-12 text-[#3E6E50]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <TrendingUp className="h-12 w-12 text-[#3E6E50]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Culture and Careers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in connecting talent with opportunities in the rapidly growing creator economy ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-[#3E6E50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Curated Opportunities</h3>
                <p className="text-gray-600">
                  Hand-picked roles from the most innovative companies in content creation, social media, and digital
                  marketing.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="h-12 w-12 text-[#3E6E50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Matching</h3>
                <p className="text-gray-600">
                  Our CultureAI technology matches you with roles that align with your skills, values, and career goals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12 text-[#3E6E50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of the creator economy landscape and the unique skills companies are seeking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
