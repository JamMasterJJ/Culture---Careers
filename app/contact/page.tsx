import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about Culture and Careers? Want to partner with us or learn more about our platform? We'd
            love to hear from you.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#3E6E50] mr-4 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">hello@cultureandcareers.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#3E6E50] mr-4 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#3E6E50] mr-4 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Office</h3>
                <p className="text-gray-600">
                  123 Creator Avenue
                  <br />
                  Los Angeles, CA 90210
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-[#3E6E50] transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#3E6E50] transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#3E6E50] transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="Your email" required />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input id="subject" name="subject" placeholder="What is this regarding?" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
            </div>

            <Button type="submit" className="w-full bg-[#3E6E50] hover:bg-[#2E5E40] text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
