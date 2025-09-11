import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BrandRegistrationForm } from "@/components/brands/brand-registration-form"

export default function BrandRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="bg-white border-b border-gray-100">
          <div className="container px-4 md:px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Register Your Brand</h1>
              <p className="text-lg text-gray-600 mb-8">
                Join CareerTrends and connect with top talent in the creator economy. Fill out the form below to
                register your brand.
              </p>

              <BrandRegistrationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
