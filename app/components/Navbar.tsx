"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/platform", label: "Platform" },
  { href: "/news", label: "News" },
  // { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  // { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--primary)] text-white shadow-md">
      <nav className="container flex items-center justify-between px-4 py-3" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 focus:outline-none" aria-label="NATAT2027 Home">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image src="/natat.png" alt="NATAT2027 logo" width={50} height={50} priority className="rounded-full" />
          </motion.div>
          <span className="font-heading font-bold hidden sm:block">NATAT2027</span>
        </Link>

        <button
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} aria-hidden /> : <FiMenu size={24} aria-hidden />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        <ul id="primary-navigation" className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="flex items-center gap-2 bg-white text-[var(--primary)] px-3 py-1 rounded-full text-sm" aria-label="Change language">
              <FiGlobe aria-hidden /> EN
            </button>
          </li>
        </ul>
      </nav>
      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="sm:hidden bg-[var(--primary)]/95"
        >
          <ul className="px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="flex items-center gap-2 bg-white text-[var(--primary)] px-3 py-1 rounded-full text-sm" aria-label="Change language">
                <FiGlobe aria-hidden /> EN
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}