import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/layout/footer"
import { ArrowRight, MapPin, Star, Award, Rss } from "lucide-react"

export default function BrandsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container px-4 md:px-6 py-12 md:py-20">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2E5E40] mb-6">Explore Creator-Backed Brands</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Discover brands founded by celebrities, athletes, and digital creators. Find your next career
                opportunity in the creator economy.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-[#2E5E40] mb-8">Brand Categories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Celebrity Brands */}
              <Link href="/brands/celebrity" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 relative">
                    <Image src="/placeholder.svg?key=nd2mt" alt="Celebrity Brands" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                      <div className="flex items-center">
                        <Star className="h-6 w-6 mr-2 text-white" />
                        <h3 className="text-2xl font-bold text-white">Celebrity Brands</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      Discover brands founded or backed by celebrities from entertainment, music, and film.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-[#3E6E50] font-medium inline-flex items-center group-hover:underline">
                        Explore <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Athlete Brands */}
              <Link href="/brands/athlete" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 relative">
                    <Image src="/placeholder.svg?key=popbd" alt="Athlete Brands" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                      <div className="flex items-center">
                        <Award className="h-6 w-6 mr-2 text-white" />
                        <h3 className="text-2xl font-bold text-white">Athlete Brands</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      Explore brands created by professional athletes and sports personalities.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-[#3E6E50] font-medium inline-flex items-center group-hover:underline">
                        Explore <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Creator Brands */}
              <Link href="/brands/creator" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 relative">
                    <Image src="/placeholder.svg?key=ngpdy" alt="Creator Brands" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                      <div className="flex items-center">
                        <Rss className="h-6 w-6 mr-2 text-white" />
                        <h3 className="text-2xl font-bold text-white">Creator Brands</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">
                      Find brands built by digital creators, influencers, and content entrepreneurs.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-[#3E6E50] font-medium inline-flex items-center group-hover:underline">
                        Explore <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#2E5E40]">Featured Brands</h2>
              <Button variant="outline" className="text-[#3E6E50] border-[#3E6E50]" asChild>
                <Link href="/brands/all">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Brand 1 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gray-100 relative">
                  <Image src="/placeholder.svg?key=nd2mt" alt="Fenty Beauty" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-[#2E5E40] hover:text-[#3E6E50] transition-colors">
                    Fenty Beauty
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Rihanna</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full">Beauty</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Brand 2 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gray-100 relative">
                  <Image src="/placeholder.svg?key=rt145" alt="Prime Hydration" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-[#2E5E40] hover:text-[#3E6E50] transition-colors">
                    Prime Hydration
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Logan Paul & KSI</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Beverages</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Miami, FL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Brand 3 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gray-100 relative">
                  <Image src="/placeholder.svg?key=lqip6" alt="Chamberlain Coffee" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-[#2E5E40] hover:text-[#3E6E50] transition-colors">
                    Chamberlain Coffee
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Emma Chamberlain</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Coffee</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Brand 4 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gray-100 relative">
                  <Image src="/placeholder.svg?key=tjiim" alt="100 Thieves" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-[#2E5E40] hover:text-[#3E6E50] transition-colors">
                    100 Thieves
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Nadeshot</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Gaming</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#3E6E50] text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to showcase your brand?</h2>
              <p className="text-lg text-gray-100 mb-8">
                Join Culture and Careers and connect with top talent in the creator economy. Register your brand and
                start posting jobs today.
              </p>
              <Button className="bg-white text-[#3E6E50] hover:bg-gray-100" size="lg" asChild>
                <Link href="/brands/register">Register Your Brand</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
