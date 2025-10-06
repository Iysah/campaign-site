import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white mt-16" role="contentinfo">
      <div className="container px-4 py-10 grid sm:grid-cols-3 gap-8">
        <div className="flex items-center gap-3">
          <Image src="/natat.png" alt="NATAT2027 logo" width={50} height={50} className="rounded-full" />
          <div>
            <p className="font-heading font-bold">NATAT2027</p>
            <p className="text-sm">© 2025 APC NATAT2027</p>
          </div>
        </div>
        <nav aria-label="Quick Navigation">
          <ul className="space-y-2">
            <li><Link href="/platform" className="hover:underline">Our Platform</Link></li>
            <li><Link href="/news" className="hover:underline">News & Media</Link></li>
            <li><Link href="/donate" className="hover:underline">Donate</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-semibold mb-2">Follow Us</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">X/Twitter</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}