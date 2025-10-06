"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroImageClient = dynamic(() => import("./components/HeroImageClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10">
        <div className="container px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              <span className="block text-[var(--primary)]">No Alternative</span>
              <span className="block text-[var(--secondary)]">To Alia Tinubu</span>
              <span className="block text-gray-900">2027</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">Uniting Nigeria for Prosperity – APC's Vision for Benue & Beyond.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/get-involved" className="px-6 py-3 rounded-full bg-[var(--primary)] text-white hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">Join the Movement</Link>
              <Link href="/donate" className="px-6 py-3 rounded-full bg-[var(--secondary)] text-white hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">Donate Now</Link>
            </div>
          </div>
          <HeroImageClient />
        </div>
      </section>

      {/* Stats */}
      <section className="container px-4 py-12 grid sm:grid-cols-3 gap-6">
        {["1M+ Supporters", "50+ Events", "Secure Your Vote"].map((stat) => (
          <div key={stat} className="p-6 rounded-xl bg-white shadow">
            <p className="text-center font-heading text-xl">{stat}</p>
          </div>
        ))}
      </section>

      {/* Policy teasers */}
      <section className="container px-4 pb-16 grid md:grid-cols-3 gap-6">
        {["Economy", "Security", "Education"].map((p) => (
          <div key={p} className="p-6 border rounded-xl">
            <h3 className="font-heading text-xl mb-2">{p}</h3>
            <p className="text-gray-700">Explore our comprehensive policies for {p.toLowerCase()} and development across Benue.</p>
            <Link href="/platform" className="mt-3 inline-block text-[var(--accent)]">Learn more →</Link>
          </div>
        ))}
      </section>
    </div>
  );
}
