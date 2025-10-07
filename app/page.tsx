"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "./components/home/hero-section";
import StatsCarousel from "./components/home/stats-carousel";
import TestimonialSlider from "./components/home/testimonial-slider";
import PolicyTeasers from "./components/home/policy-teasers";
import NewsletterSignup from "./components/home/newsletter-signup";

const HeroImageClient = dynamic(() => import("./components/HeroImageClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <StatsCarousel />
      <TestimonialSlider />
      <PolicyTeasers />
      <NewsletterSignup />
    </div>
  );
}
