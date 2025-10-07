"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How can I volunteer for the campaign?",
    answer:
      "You can sign up to volunteer through our Get Involved page. Fill out the volunteer form with your information, skills, and availability. Our volunteer coordinator will contact you within 48 hours with opportunities that match your interests.",
  },
  {
    question: "Are donations to the campaign tax-deductible?",
    answer:
      "Political campaign donations in Nigeria are not tax-deductible. However, all donations are transparent and compliant with INEC regulations. You will receive a receipt for your records.",
  },
  {
    question: "How can I host a campaign event in my community?",
    answer:
      "We encourage supporters to host events! Visit our Get Involved page and request an event kit. Our team will provide you with materials, talking points, and support to organize a successful event in your area.",
  },
  {
    question: "Where can I find information about the candidates' policies?",
    answer:
      "Detailed policy information is available on our Platform page. You can also download our policy briefs from the Media Kit section or contact us directly with specific questions.",
  },
  {
    question: "How do I register to vote?",
    answer:
      "Visit your local INEC office or check the INEC website for voter registration information. Our volunteers can also provide guidance and materials to help you through the registration process.",
  },
  {
    question: "Can I get campaign materials in local languages?",
    answer:
      "Yes! We have materials available in English, Hausa, and Igbo. Contact our office or download resources from the Get Involved page. We're working to expand language options to serve all communities.",
  },
  {
    question: "How can media outlets request interviews or information?",
    answer:
      "Media inquiries should be directed to media@natat2027.ng. Our communications team responds to all media requests within 24 hours. You can also download our press kit from the News & Media page.",
  },
  {
    question: "What is the campaign's stance on transparency?",
    answer:
      "We are committed to full transparency in all campaign operations. All donations are recorded and reported in compliance with INEC regulations. Financial reports are available upon request.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Find answers to common questions about the campaign
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#333333] pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`text-neutral-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={24}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
