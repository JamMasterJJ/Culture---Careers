import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Crown, Check } from "lucide-react"
import Link from "next/link"

const CultureAIPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Culture AI Membership Pricing</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-green-200 hover:border-green-300 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Star className="mr-2 h-6 w-6 text-green-600" />
                Professional
              </CardTitle>
              <CardDescription>Perfect for active job seekers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-4">
                $19<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Up to 15 job matches per month
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Basic culture fit analytics
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Resume optimization tools
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Monthly career coaching session
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Priority application review
                </li>
              </ul>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" asChild>
                <Link href="/for-talent/memberships">Get Professional</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all relative">
            <Badge className="absolute top-4 right-4 bg-purple-600">Most Popular</Badge>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Crown className="mr-2 h-6 w-6 text-purple-600" />
                Elite
              </CardTitle>
              <CardDescription>For serious career advancement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                $49<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-500" />
                  Unlimited job matches
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-500" />
                  Advanced culture analytics & insights
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-500" />
                  Weekly 1-on-1 career coaching
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-500" />
                  Direct access to hiring managers
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-500" />
                  Personal brand development
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-purple-500" />
                  VIP networking events
                </li>
              </ul>
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/for-talent/memberships">Get Elite</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CultureAIPage
