import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Shield, Star, CheckCircle, TrendingUp, Award, Clock } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function ForEmployersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-forest-950">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-forest-50 to-forest-100 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-forest-900 sm:text-6xl md:text-7xl">
                Hire Top Talent from the{" "}
                <span className="bg-gradient-to-r from-forest-600 to-forest-800 bg-clip-text text-transparent">
                  Creator Economy
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-forest-700 sm:text-xl">
                Access a curated network of creators, marketers, and digital natives who understand modern brands and
                audiences. Find candidates who bring fresh perspectives and proven results.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                  <Link href="/for-employers/demo">
                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-forest-300 text-forest-700 hover:bg-forest-50 bg-transparent"
                >
                  <Link href="/for-employers/post-job">Post a Job</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest-900 mb-4">Why Choose CareerTrends?</h2>
              <p className="text-lg text-forest-600 max-w-2xl mx-auto">
                We specialize in connecting creator economy brands with talent who understand your unique needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-forest-200 hover:border-forest-300 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-forest-100 rounded-full mx-auto mb-6">
                    <Users className="h-8 w-8 text-forest-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest-900 mb-4">Curated Talent Pool</h3>
                  <p className="text-forest-600 mb-6">
                    Access pre-vetted candidates with proven experience in creator economy, social media, and digital
                    marketing
                  </p>
                  <ul className="text-sm text-forest-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Content creators & influencers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Digital marketing experts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Community managers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-forest-200 hover:border-forest-300 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-forest-100 rounded-full mx-auto mb-6">
                    <Target className="h-8 w-8 text-forest-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest-900 mb-4">Smart Matching</h3>
                  <p className="text-forest-600 mb-6">
                    Our AI-powered platform matches candidates based on skills, culture fit, and creator economy
                    experience
                  </p>
                  <ul className="text-sm text-forest-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Culture-first matching
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Skills-based filtering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Experience verification
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-forest-200 hover:border-forest-300 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-forest-100 rounded-full mx-auto mb-6">
                    <Shield className="h-8 w-8 text-forest-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest-900 mb-4">Quality Guarantee</h3>
                  <p className="text-forest-600 mb-6">
                    Every candidate goes through our rigorous vetting process to ensure they meet your standards
                  </p>
                  <ul className="text-sm text-forest-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Background verification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Portfolio review
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-forest-500" />
                      Reference checks
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-forest-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest-900 mb-4">Success Stories</h2>
              <p className="text-lg text-forest-600">See how creator economy brands are building their teams with us</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-forest-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-forest-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-900">Beast Burger</h4>
                      <p className="text-sm text-forest-600">Food & Beverage</p>
                    </div>
                  </div>
                  <p className="text-forest-700 mb-4">
                    "Found our perfect Head of Marketing in just 2 weeks. The candidate understood our brand voice
                    immediately."
                  </p>
                  <div className="flex items-center gap-4 text-sm text-forest-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />2 weeks to hire
                    </div>
                    <Badge className="bg-forest-100 text-forest-700">Marketing</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-forest-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-forest-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-900">Glossier</h4>
                      <p className="text-sm text-forest-600">Beauty & Cosmetics</p>
                    </div>
                  </div>
                  <p className="text-forest-700 mb-4">
                    "The community manager we hired has increased our engagement by 300%. Perfect cultural fit!"
                  </p>
                  <div className="flex items-center gap-4 text-sm text-forest-600">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      300% engagement boost
                    </div>
                    <Badge className="bg-forest-100 text-forest-700">Community</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-forest-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-forest-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-900">100 Thieves</h4>
                      <p className="text-sm text-forest-600">Gaming & Esports</p>
                    </div>
                  </div>
                  <p className="text-forest-700 mb-4">
                    "Built our entire content team through CareerTrends. Every hire has been exceptional."
                  </p>
                  <div className="flex items-center gap-4 text-sm text-forest-600">
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3" />5 successful hires
                    </div>
                    <Badge className="bg-forest-100 text-forest-700">Content</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-forest-900 mb-4">Ready to Build Your Dream Team?</h2>
              <p className="text-lg text-forest-600 mb-8 max-w-2xl mx-auto">
                See how CareerTrends can help you find and hire top creator economy talent. Book a personalized demo to
                explore our platform and discuss your hiring needs.
              </p>

              <div className="bg-forest-50 rounded-2xl p-8 mb-8">
                <div className="grid gap-6 md:grid-cols-3 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-900 mb-2">15 min</div>
                    <p className="text-forest-600">Demo duration</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-900 mb-2">Same day</div>
                    <p className="text-forest-600">Response time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-900 mb-2">No cost</div>
                    <p className="text-forest-600">Completely free</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                  <Link href="/for-employers/demo">
                    Schedule Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-forest-500">
                Join 500+ creator economy brands who trust CareerTrends for their hiring needs
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-forest-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest-900 mb-4">Everything You Need to Hire</h2>
              <p className="text-lg text-forest-600">Comprehensive tools and features for modern hiring</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mx-auto mb-4 shadow-sm">
                  <Users className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-2">Talent Database</h3>
                <p className="text-sm text-forest-600">Access 10,000+ pre-vetted candidates</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mx-auto mb-4 shadow-sm">
                  <Target className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-2">Smart Matching</h3>
                <p className="text-sm text-forest-600">AI-powered candidate recommendations</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mx-auto mb-4 shadow-sm">
                  <Shield className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-2">Background Checks</h3>
                <p className="text-sm text-forest-600">Comprehensive candidate verification</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mx-auto mb-4 shadow-sm">
                  <Award className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-2">Success Guarantee</h3>
                <p className="text-sm text-forest-600">90-day replacement guarantee</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
