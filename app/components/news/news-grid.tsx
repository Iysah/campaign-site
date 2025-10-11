"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, Tag, Search } from "lucide-react"
import { Button } from "../ui/button"

const newsArticles = [
  {
    id: "1",
    title: "NATAT2027 Launches Massive Youth Empowerment Program",
    excerpt:
      "Campaign announces comprehensive initiative to train 50,000 youths in digital skills and entrepreneurship across Benue State.",
    category: "Press Release",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "/news-youth-empowerment-program.jpg",
    slug: "youth-empowerment-program-launch",
  },
  {
    id: "2",
    title: "Alia Visits Farmers in Katsina-Ala, Promises Agricultural Revolution",
    excerpt:
      "Gubernatorial candidate meets with local farmers to discuss modern farming techniques and market access solutions.",
    category: "Campaign Update",
    date: "2025-01-12",
    readTime: "4 min read",
    image: "/news-alia-visits-farmers.jpg",
    slug: "alia-visits-farmers-katsina-ala",
  },
  {
    id: "3",
    title: "Tinubu Outlines Economic Blueprint for Nigeria at Makurdi Rally",
    excerpt:
      "Presidential candidate presents detailed plan for job creation, infrastructure development, and economic growth.",
    category: "Coverage",
    date: "2025-01-10",
    readTime: "6 min read",
    image: "/news-tinubu-makurdi-rally.jpg",
    slug: "tinubu-economic-blueprint-makurdi",
  },
  {
    id: "4",
    title: "NATAT2027 Campaign Reaches 1 Million Supporters Milestone",
    excerpt:
      "Historic achievement as campaign surpasses one million registered supporters across Benue State and beyond.",
    category: "Press Release",
    date: "2025-01-08",
    readTime: "3 min read",
    image: "/news-one-million-supporters.jpg",
    slug: "one-million-supporters-milestone",
  },
  {
    id: "5",
    title: "Healthcare Initiative: Free Medical Outreach in 10 LGAs",
    excerpt:
      "Campaign partners with medical professionals to provide free healthcare services to underserved communities.",
    category: "Blog",
    date: "2025-01-05",
    readTime: "5 min read",
    image: "/news-healthcare-outreach.jpg",
    slug: "free-medical-outreach-initiative",
  },
  {
    id: "6",
    title: "Education Summit: Building the Future of Benue Schools",
    excerpt: "Campaign hosts stakeholders to discuss comprehensive education reform and infrastructure development.",
    category: "Coverage",
    date: "2025-01-03",
    readTime: "7 min read",
    image: "/news-education-summit.jpg",
    slug: "education-summit-benue-schools",
  },
]

const categories = ["All", "Press Release", "Campaign Update", "Coverage", "Blog"]

export default function NewsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Search & Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#008000] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        {displayedArticles.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200 card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#008000] text-white text-xs font-medium rounded-full">
                        <Tag size={12} />
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#008000] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="font-medium"
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    className={currentPage === page ? "bg-[#008000] hover:bg-[#006400]" : ""}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  className="font-medium"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
