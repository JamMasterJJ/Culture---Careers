"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, X, BookOpen } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  thumbnail: string
  readTime: string
  author: string
  category: string
  publishedAt: string
  tags: string[]
}

const articles: Article[] = [
  {
    id: "1",
    title: "The Complete Guide to Building Your Personal Brand as a Creator",
    excerpt:
      "Learn how to develop an authentic personal brand that resonates with your audience and opens doors to new opportunities.",
    content: `
# The Complete Guide to Building Your Personal Brand as a Creator

Building a personal brand as a creator isn't just about having a pretty Instagram feed or a catchy tagline. It's about creating a consistent, authentic representation of who you are and what you stand for.

## Why Personal Branding Matters

In today's saturated creator economy, having a strong personal brand is what sets you apart from the millions of other content creators vying for attention. Your personal brand is your promise to your audience – it tells them what they can expect from you and why they should care.

## Key Elements of a Strong Personal Brand

### 1. Authenticity
Your brand should be a genuine reflection of who you are. Audiences can spot fake from a mile away, and authenticity builds trust.

### 2. Consistency
From your visual aesthetic to your messaging, consistency across all platforms helps build recognition and trust.

### 3. Value Proposition
What unique value do you bring to your audience? This should be clear in everything you do.

## Building Your Brand Strategy

Start by defining your core values, mission, and the transformation you want to create for your audience. Then, ensure every piece of content you create aligns with these foundational elements.

Remember, building a personal brand is a marathon, not a sprint. Stay consistent, stay authentic, and the results will follow.
    `,
    thumbnail: "/placeholder.svg?height=200&width=350&text=Personal+Brand+Guide",
    readTime: "8 min read",
    author: "Sarah Johnson",
    category: "Branding",
    publishedAt: "2 days ago",
    tags: ["Personal Branding", "Creator Tips", "Strategy"],
  },
  {
    id: "2",
    title: "Monetization Strategies That Actually Work for Small Creators",
    excerpt:
      "Discover proven monetization methods that don't require millions of followers to start generating income from your content.",
    content: `
# Monetization Strategies That Actually Work for Small Creators

You don't need a million followers to start making money as a creator. In fact, many successful creators generate substantial income with relatively small but highly engaged audiences.

## The Power of Micro-Audiences

Having 1,000 true fans who genuinely care about your content is often more valuable than 100,000 passive followers. These engaged followers are more likely to:

- Purchase your products or services
- Share your content with others
- Provide valuable feedback
- Support your long-term growth

## Proven Monetization Methods

### 1. Digital Products
Create and sell digital products like:
- E-books and guides
- Online courses
- Templates and presets
- Exclusive content

### 2. Services
Offer your expertise through:
- Consulting calls
- Done-for-you services
- Coaching programs
- Speaking engagements

### 3. Community Building
Build a paid community where members get:
- Exclusive content
- Direct access to you
- Networking opportunities
- Premium resources

## Getting Started

Start with one monetization method and master it before adding others. Focus on providing genuine value, and the money will follow naturally.
    `,
    thumbnail: "/placeholder.svg?height=200&width=350&text=Creator+Monetization",
    readTime: "6 min read",
    author: "Mike Chen",
    category: "Monetization",
    publishedAt: "4 days ago",
    tags: ["Monetization", "Small Creators", "Revenue"],
  },
  {
    id: "3",
    title: "Content Planning: How to Never Run Out of Ideas Again",
    excerpt:
      "A systematic approach to content planning that ensures you always have fresh, engaging ideas for your audience.",
    content: `
# Content Planning: How to Never Run Out of Ideas Again

One of the biggest challenges creators face is consistently coming up with fresh, engaging content ideas. The good news? With the right system, you'll never run out of ideas again.

## The Content Idea Framework

### 1. Audience Research
Understanding your audience is the foundation of great content. Regularly:
- Survey your followers
- Monitor comments and DMs
- Join communities where your audience hangs out
- Analyze your top-performing content

### 2. Content Pillars
Establish 3-5 content pillars that align with your brand and audience interests. For example:
- Educational content
- Behind-the-scenes
- Personal stories
- Industry insights
- Entertainment

### 3. Content Calendar
Plan your content in advance using a calendar system:
- Monthly themes
- Weekly content types
- Daily posting schedule
- Special events and holidays

## Idea Generation Techniques

### The Question Method
Keep a running list of questions your audience asks. Each question is a potential piece of content.

### The Trend Adaptation
Take trending topics and adapt them to your niche. This helps you stay relevant while maintaining your unique voice.

### The Repurposing Strategy
One piece of content can become multiple posts across different platforms and formats.

## Tools and Resources

- Content calendar templates
- Social media scheduling tools
- Trend monitoring platforms
- Analytics tools for performance tracking

Remember, consistency beats perfection. It's better to post regularly with good content than to wait for the perfect post.
    `,
    thumbnail: "/placeholder.svg?height=200&width=350&text=Content+Planning",
    readTime: "7 min read",
    author: "Emma Rodriguez",
    category: "Content Strategy",
    publishedAt: "1 week ago",
    tags: ["Content Planning", "Strategy", "Productivity"],
  },
  {
    id: "4",
    title: "The Psychology Behind Viral Content: What Makes People Share",
    excerpt:
      "Understand the psychological triggers that make content shareable and how to ethically incorporate them into your strategy.",
    content: `
# The Psychology Behind Viral Content: What Makes People Share

Going viral isn't just luck – there's actual science behind what makes content shareable. Understanding these psychological principles can help you create more engaging content.

## The Six Principles of Viral Content

### 1. Social Currency
People share content that makes them look good. Create content that:
- Makes people appear knowledgeable
- Aligns with their values
- Shows their good taste
- Demonstrates their insider knowledge

### 2. Triggers
Content that's easily triggered by everyday situations gets shared more. Link your content to:
- Common experiences
- Daily routines
- Popular culture references
- Seasonal events

### 3. Emotion
High-emotion content gets shared more than neutral content. Focus on:
- Awe and wonder
- Humor and joy
- Anger and outrage (use carefully)
- Inspiration and motivation

### 4. Public Visibility
Make your content easy to see and share:
- Use eye-catching visuals
- Include shareable quotes
- Create branded elements
- Make sharing buttons prominent

### 5. Practical Value
People love sharing useful information:
- How-to guides
- Life hacks
- Money-saving tips
- Time-saving strategies

### 6. Stories
Humans are wired for stories. Wrap your message in:
- Personal anecdotes
- Case studies
- Customer success stories
- Behind-the-scenes narratives

## Ethical Considerations

While these principles are powerful, use them responsibly:
- Don't manipulate emotions for harmful purposes
- Always provide genuine value
- Be honest and transparent
- Respect your audience's intelligence

## Implementation Tips

Start by analyzing your most successful content through this lens. What psychological principles did it tap into? Then, consciously incorporate these elements into future content.

Remember, the goal isn't just to go viral – it's to create meaningful connections with your audience that lead to long-term success.
    `,
    thumbnail: "/placeholder.svg?height=200&width=350&text=Viral+Content+Psychology",
    readTime: "9 min read",
    author: "Dr. Lisa Park",
    category: "Psychology",
    publishedAt: "3 days ago",
    tags: ["Viral Content", "Psychology", "Social Media"],
  },
]

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const openArticleModal = (article: Article) => {
    setSelectedArticle(article)
  }

  const closeArticleModal = () => {
    setSelectedArticle(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-50 to-forest-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Creator Articles</h1>
          <p className="text-lg text-forest-700 max-w-2xl">
            In-depth articles, guides, and insights from industry experts to help you grow your creator business and
            build a sustainable career.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={article.thumbnail || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => openArticleModal(article)}
                    className="bg-white text-forest-900 hover:bg-forest-50"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-forest-100 text-forest-800">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{article.publishedAt}</span>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{article.title}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-forest-100 text-forest-800">
                  {selectedArticle.category}
                </Badge>
                <span className="text-sm text-gray-500">{selectedArticle.readTime}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeArticleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Article Content */}
            <div className="p-6">
              {/* Article Meta */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {selectedArticle.author}
                    </div>
                    <span>{selectedArticle.publishedAt}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedArticle.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-forest-100 text-forest-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">{selectedArticle.content}</div>
              </div>

              {/* Article Footer */}
              <div className="mt-8 pt-6 border-t">
                <div className="bg-forest-50 rounded-lg p-6">
                  <h3 className="font-semibold text-forest-900 mb-3">Key Takeaways</h3>
                  <ul className="text-sm text-forest-700 space-y-2">
                    <li>• Implement these strategies consistently for best results</li>
                    <li>• Focus on providing genuine value to your audience</li>
                    <li>• Track your progress and adjust your approach as needed</li>
                    <li>• Remember that building a creator business takes time and patience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
