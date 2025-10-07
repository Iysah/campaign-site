"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "../ui/button"

const testimonials = [
  {
    name: "Amina Adamu",
    role: "Small Business Owner, Makurdi",
    image: "/nigerian-woman-entrepreneur-smiling.jpg",
    quote:
      "The APC's economic policies have transformed my business. With NATAT2027, I see a brighter future for all entrepreneurs in Benue State.",
  },
  {
    name: "Chukwudi Okafor",
    role: "Youth Leader, Otukpo",
    image: "/nigerian-young-man-community-leader.jpg",
    quote:
      "Finally, a campaign that listens to the youth. Alia and Tinubu understand our challenges and have real solutions for job creation and education.",
  },
  {
    name: "Fatima Ibrahim",
    role: "Teacher, Gboko",
    image: "/nigerian-female-teacher-professional.jpg",
    quote:
      "Education is the foundation of progress. The APC's commitment to improving schools and teacher welfare gives me hope for our children's future.",
  },
  {
    name: "Emmanuel Oche",
    role: "Farmer, Katsina-Ala",
    image: "/nigerian-male-farmer-agriculture.jpg",
    quote:
      "Agriculture is the backbone of Benue. With better infrastructure and support from NATAT2027, we can feed the nation and prosper.",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-[#008000] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices from the People</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Hear from Nigerians who believe in the NATAT2027 vision
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <Quote className="text-[#00bfff] mb-6" size={48} />

            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-pretty">
              "{current.quote}"
            </blockquote>

            <div className="flex items-center gap-4 mb-8">
              <img
                src={current.image || "/placeholder.svg"}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <div className="font-bold text-lg">{current.name}</div>
                <div className="text-white/80 text-sm">{current.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                onClick={prevTestimonial}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <ChevronLeft size={24} />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-white w-8" : "bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
