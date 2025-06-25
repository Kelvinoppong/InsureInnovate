import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Users, TrendingUp, MessageSquare, Star, ArrowRight, Zap, Target, Shield } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">InsureInnovate</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#categories" className="text-gray-600 hover:text-blue-600 transition-colors">
              Categories
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            <Zap className="h-3 w-3 mr-1" />
            AI-Powered Innovation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Insurance Business with
            <span className="text-blue-600"> AI-Generated Ideas</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Harness the power of artificial intelligence to generate innovative solutions for claims processing,
            customer engagement, fraud detection, and more. Empower your team to drive meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/dashboard">
                Start Generating Ideas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
            {/* Sign In Section */}
      <section id="signin" className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/placeholder.jpg')" }}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Welcome Back</h2>
            <p className="text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-white hover:text-blue-400">Facebook</Link>
              <Link href="#" className="text-white hover:text-blue-400">Twitter</Link>
              <Link href="#" className="text-white hover:text-blue-400">Instagram</Link>
              <Link href="#" className="text-white hover:text-blue-400">YouTube</Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded shadow-lg text-gray-900">
            <h3 className="text-2xl font-semibold mb-6">Sign in</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email Address</Label>
                <Input id="signin-email" type="email" placeholder="Email Address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input id="signin-password" type="password" placeholder="Password" />
              </div>
              <div className="flex items-center space-x-2">
                <Input id="remember" type="checkbox" />
                <Label htmlFor="remember">Remember Me</Label>
              </div>
              <Button className="w-full">Sign in now</Button>
              <div className="text-sm text-center">
                <Link href="#" className="text-blue-600 hover:underline">Lost your password?</Link>
              </div>
              <p className="text-xs text-center text-gray-500">
                By clicking on "Sign in now" you agree to <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link> | <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Innovation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to foster innovation and drive improvements across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI Idea Generator</CardTitle>
                <CardDescription>Generate innovative solutions using GPT-4 for any insurance challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Context-aware suggestions</li>
                  <li>• Industry-specific prompts</li>
                  <li>• Instant idea generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Collaborative Voting</CardTitle>
                <CardDescription>Let your team vote on the most promising ideas and track popularity</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time voting system</li>
                  <li>• Idea leaderboards</li>
                  <li>• Team collaboration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Smart Categories</CardTitle>
                <CardDescription>
                  Organize ideas across key business areas with intelligent categorization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Claims processing</li>
                  <li>• Customer engagement</li>
                  <li>• Fraud detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>AI Chatbot Assistant</CardTitle>
                <CardDescription>Brainstorm with an intelligent assistant that understands insurance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Natural conversation</li>
                  <li>• Context-aware responses</li>
                  <li>• 24/7 availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Rate & Comment</CardTitle>
                <CardDescription>Save favorite ideas, rate them, and add collaborative feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 5-star rating system</li>
                  <li>• Threaded comments</li>
                  <li>• Bookmark favorites</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Weekly Inspiration</CardTitle>
                <CardDescription>Receive fresh AI-generated ideas every Monday to spark innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automated idea generation</li>
                  <li>• Email notifications</li>
                  <li>• Curated suggestions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate targeted ideas across all areas of your insurance business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Claims Processing", color: "bg-blue-500", count: "150+ ideas" },
              { name: "Customer Engagement", color: "bg-green-500", count: "120+ ideas" },
              { name: "Policy Customization", color: "bg-purple-500", count: "90+ ideas" },
              { name: "Fraud Detection", color: "bg-red-500", count: "80+ ideas" },
              { name: "Marketing Campaigns", color: "bg-orange-500", count: "110+ ideas" },
              { name: "Digital Transformation", color: "bg-indigo-500", count: "95+ ideas" },
            ].map((category) => (
              <Card key={category.name} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Innovate?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking insurance companies using AI to drive innovation and stay competitive
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
            <Link href="/dashboard">
              Start Your Innovation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">InsureInnovate</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering insurance companies with AI-driven innovation solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 InsureInnovate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
