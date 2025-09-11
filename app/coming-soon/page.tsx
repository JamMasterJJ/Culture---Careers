import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a192f] text-white">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/mountain-night.jpg"
          alt="Mountain landscape at night"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 py-12">
          {/* Header */}
          <header className="w-full max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-center">CULTURE AND CAREERS</h1>
          </header>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Launching Soon</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Discover jobs from brands built by creators, athletes, and cultural icons. Join our waitlist to be the
              first to know when we launch.
            </p>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <form className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-white text-[#0a192f] hover:bg-gray-200">
                  Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-400">
                Be the first to access exclusive job opportunities in the creator economy.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Culture and Careers</p>
              <div className="flex gap-6">
                <Link href="mailto:info@cultureandcareers.com" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
