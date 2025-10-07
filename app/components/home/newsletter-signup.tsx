"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "../ui/button"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service (Mailchimp, etc.)
    console.log("Newsletter signup:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#008000] to-[#006400] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-white" size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed, Stay Engaged</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Get the latest updates on campaign events, policy announcements, and ways to get involved. Join our
            community of supporters today.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold px-8 py-4"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 max-w-xl mx-auto">
              <CheckCircle className="text-white" size={24} />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          )}

          <p className="text-sm text-white/70 mt-6">
            We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
