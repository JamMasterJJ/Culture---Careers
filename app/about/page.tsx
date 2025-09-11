import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              About Culture and Careers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting passionate creators with their fans through meaningful career opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Culture and Careers, we bridge the gap between creators and their communities by showcasing career
                opportunities with brands founded by influential creators, athletes, and celebrities.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that fans who share values with their favorite creators make the most passionate and aligned
                employees for their ventures.
              </p>
              <p className="text-gray-600">
                Our platform helps creators build teams that truly understand their vision, while giving fans the
                opportunity to contribute to brands they already love and support.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder-2pwe0.png" alt="Our mission in action" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Creators and Their Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder-np7pp.png" alt="Creator with fans" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Creator Communities</h3>
                <p className="text-gray-600">
                  We celebrate the unique connection between creators and their dedicated fan communities.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder-slgd9.png" alt="Athlete brand launch" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Brand Opportunities</h3>
                <p className="text-gray-600">
                  We showcase career opportunities with brands founded by influential creators and athletes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder-4kjb4.png"
                  alt="Fans working at creator brand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Meaningful Careers</h3>
                <p className="text-gray-600">
                  We help fans turn their passion into meaningful careers with brands they already love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-[#3E6E50] text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you're a creator looking to build your team or a fan seeking to work with brands you love, Culture
            and Careers is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/brands"
              className="bg-white text-[#3E6E50] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Brands
            </Link>
            <Link
              href="/jobs"
              className="bg-[#2E5E40] text-white px-6 py-3 rounded-md font-medium hover:bg-[#254E30] transition-colors"
            >
              Browse Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
