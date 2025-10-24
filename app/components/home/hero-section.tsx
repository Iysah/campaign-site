"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Users, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/apc-crown.jpeg" alt="NATAT2027 Campaign Rally" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & CTAs */}
          <div className="text-white">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00bfff] rounded-full animate-pulse"></span>
                2027 Presidential & Gubernatorial Campaign
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-balance">No Alternative</span>
              <span className="block text-balance">To Alia Tinubu</span>
              <span className="block text-[#ff0000] text-balance">2027</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl">
              Uniting Nigeria for Prosperity – APC's Vision for Benue & Beyond
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#043927] hover:bg-[#006400] text-white font-bold text-lg px-8 py-6 group"
              >
                <Link href="/get-involved">
                  Join the Movement
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-lg px-8 py-6 pulse-cta"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/events"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Calendar size={20} />
                <span className="text-sm font-medium">Upcoming Events</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Users size={20} />
                <span className="text-sm font-medium">Meet the Team</span>
              </Link>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 card-hover">
              <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Unity</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Bringing together all Nigerians for a prosperous future
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 card-hover mt-8">
              <div className="w-12 h-12 bg-[#ff0000] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Progress</h3>
              <p className="text-white/80 text-sm leading-relaxed">Building infrastructure and opportunities for all</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 card-hover">
              <div className="w-12 h-12 bg-[#00bfff] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Security</h3>
              <p className="text-white/80 text-sm leading-relaxed">Ensuring safety and peace across Benue State</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 card-hover mt-8">
              <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Education</h3>
              <p className="text-white/80 text-sm leading-relaxed">Investing in the future through quality education</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
