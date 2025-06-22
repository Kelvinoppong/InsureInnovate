"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lightbulb, Star, MessageSquare, TrendingUp, Zap, Filter, Search, Heart, ThumbsUp, Eye } from "lucide-react"
import { useChat } from "ai/react"

const categories = [
  { id: "claims", name: "Claims Processing", color: "bg-blue-500", icon: "📋" },
  { id: "customer", name: "Customer Engagement", color: "bg-green-500", icon: "👥" },
  { id: "policy", name: "Policy Customization", color: "bg-purple-500", icon: "📄" },
  { id: "fraud", name: "Fraud Detection", color: "bg-red-500", icon: "🔍" },
  { id: "marketing", name: "Marketing Campaigns", color: "bg-orange-500", icon: "📢" },
  { id: "digital", name: "Digital Transformation", color: "bg-indigo-500", icon: "💻" },
]

const sampleIdeas = [
  {
    id: 1,
    title: "AI-Powered Claims Photo Analysis",
    description:
      "Use computer vision to automatically assess damage from photos submitted by customers, reducing processing time by 60%.",
    category: "Claims Processing",
    rating: 4.8,
    votes: 23,
    comments: 8,
    author: "Sarah Chen",
    timestamp: "2 hours ago",
    tags: ["AI", "Automation", "Computer Vision"],
  },
  {
    id: 2,
    title: "Gamified Customer Onboarding",
    description:
      "Create an interactive mobile experience that guides new customers through policy selection with rewards and achievements.",
    category: "Customer Engagement",
    rating: 4.6,
    votes: 19,
    comments: 12,
    author: "Mike Rodriguez",
    timestamp: "4 hours ago",
    tags: ["Mobile", "Gamification", "UX"],
  },
  {
    id: 3,
    title: "Predictive Risk Scoring for Gen Z",
    description:
      "Develop dynamic pricing models based on social media activity, fitness data, and lifestyle choices for younger demographics.",
    category: "Policy Customization",
    rating: 4.2,
    votes: 15,
    comments: 6,
    author: "Alex Kim",
    timestamp: "1 day ago",
    tags: ["Data Analytics", "Gen Z", "Pricing"],
  },
]

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [customPrompt, setCustomPrompt] = useState("")
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const handleGenerateIdea = async () => {
    if (!selectedCategory && !customPrompt) return

    setIsGenerating(true)

    try {
      const response = await fetch("/api/generate-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: selectedCategory,
          customPrompt: customPrompt,
        }),
      })

      const data = await response.json()
      setGeneratedIdeas((prev) => [data.idea, ...prev])
    } catch (error) {
      console.error("Error generating idea:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const filteredIdeas = sampleIdeas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Innovation Hub</h1>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Zap className="h-3 w-3 mr-1" />
                AI Powered
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="generate" className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4" />
              <span>Generate Ideas</span>
            </TabsTrigger>
            <TabsTrigger value="browse" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Browse Ideas</span>
            </TabsTrigger>
            <TabsTrigger value="voting" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Voting Board</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>AI Assistant</span>
            </TabsTrigger>
          </TabsList>

          {/* Generate Ideas Tab */}
          <TabsContent value="generate" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lightbulb className="h-5 w-5 text-blue-600" />
                      <span>AI Idea Generator</span>
                    </CardTitle>
                    <CardDescription>
                      Select a category or enter a custom prompt to generate innovative ideas for your insurance
                      business
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Choose Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category..." />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.name}>
                              <div className="flex items-center space-x-2">
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="text-center text-gray-500 text-sm">or</div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Custom Prompt</label>
                      <Textarea
                        placeholder="e.g., How can we improve customer satisfaction for millennials?"
                        value={customPrompt}
                        onChange={(e) => setCustomPrompt(e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button
                      onClick={handleGenerateIdea}
                      disabled={isGenerating || (!selectedCategory && !customPrompt)}
                      className="w-full"
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <Zap className="h-4 w-4 mr-2" />
                          Generate Idea
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Generated Ideas */}
                {generatedIdeas.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Generated Ideas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {generatedIdeas.map((idea, index) => (
                          <div key={index} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                            <p className="text-gray-800">{idea}</p>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center space-x-2">
                                <Button size="sm" variant="outline">
                                  <Heart className="h-3 w-3 mr-1" />
                                  Save
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Star className="h-3 w-3 mr-1" />
                                  Rate
                                </Button>
                              </div>
                              <Badge variant="secondary">New</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Categories Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.name ? "default" : "outline"}
                          className="justify-start h-auto p-3"
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{category.icon}</span>
                            <div className="text-left">
                              <div className="font-medium text-sm">{category.name}</div>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Prompts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "How can we speed up claims processing?",
                        "What features would Gen Z want?",
                        "Ways to reduce customer churn",
                        "Improve fraud detection accuracy",
                      ].map((prompt, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-left h-auto p-2"
                          onClick={() => setCustomPrompt(prompt)}
                        >
                          <div className="text-xs text-gray-600 truncate">{prompt}</div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Browse Ideas Tab */}
          <TabsContent value="browse" className="space-y-6">
            <div className="grid gap-6">
              {filteredIdeas.map((idea) => (
                <Card key={idea.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{idea.title}</h3>
                        <p className="text-gray-600 mb-3">{idea.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {idea.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Badge className="ml-4">{idea.category}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {idea.author}</span>
                        <span>{idea.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{idea.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">{idea.votes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{idea.comments}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Heart className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Voting Board Tab */}
          <TabsContent value="voting" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span>Top Voted Ideas This Week</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sampleIdeas.map((idea, index) => (
                        <div key={idea.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-blue-600">#{index + 1}</div>
                            <div className="text-xs text-gray-500">Rank</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{idea.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{idea.description}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="outline">{idea.category}</Badge>
                              <span className="text-xs text-gray-500">by {idea.author}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center space-y-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              Vote
                            </Button>
                            <span className="text-sm font-medium">{idea.votes} votes</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Voting Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">156</div>
                        <div className="text-sm text-gray-600">Total Votes This Week</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">23</div>
                        <div className="text-sm text-gray-600">Active Voters</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">8</div>
                        <div className="text-sm text-gray-600">Ideas Implemented</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* AI Assistant Tab */}
          <TabsContent value="chat" className="space-y-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>AI Innovation Assistant</span>
                </CardTitle>
                <CardDescription>
                  Chat with our AI assistant to brainstorm ideas and get insights about insurance innovation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Start a conversation with the AI assistant!</p>
                      <p className="text-sm mt-2">Try asking: "How can we improve customer retention?"</p>
                    </div>
                  )}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me about insurance innovation..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading}>
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
