import RssFeed from "@/components/trending-ventures/rss-feed"

export const metadata = {
  title: "Trending Ventures - Culture & Careers",
  description: "Stay updated with trending celebrity, creator, and athlete-endorsed business ventures",
}

export default function TrendingVenturesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Trending Ventures</h1>
      <p className="text-gray-600 mb-8">
        Stay updated with trending celebrity, creator, and athlete-endorsed business ventures
      </p>

      <RssFeed />
    </main>
  )
}
