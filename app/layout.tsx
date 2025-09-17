import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AuthProvider } from "@/components/auth/auth-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Culture & Careers - Where Creator Economy Talent Meets Opportunity",
  description: "Connect with top creator economy companies and find your dream career in the digital age.",
  keywords: [
    "creator economy jobs",
    "culture careers",
    "creative jobs",
    "startup careers",
    "remote work",
    "job matching",
    "career development",
    "company culture",
    "talent acquisition",
  ],
  authors: [{ name: "Culture&Careers Team" }],
  creator: "Culture&Careers",
  publisher: "Culture&Careers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://culture-careers.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://culture-careers.com",
    title: "Culture&Careers - Where Creator Economy Talent Meets Opportunity",
    description: "Connect with top creator economy companies and find your dream career in the digital age.",
    siteName: "Culture&Careers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Culture&Careers - Where Creator Economy Talent Meets Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culture&Careers - Where Creator Economy Talent Meets Opportunity",
    description: "Connect with top creator economy companies and find your dream career in the digital age.",
    images: ["/og-image.png"],
    creator: "@culturecareers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
