"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Destinations", href: "/destinations" },
  { name: "Curated Escapes", href: "/curated-escapes" },
  { name: "Immersion", href: "/immersion" },
  { name: "About Us", href: "/about" },
  { name: "Our Impact", href: "/our-impact" },
  { name: "Journal", href: "/journal" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sasa-white border-b border-sasa-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/sasa-travel-logo.png"
              alt="Sasa Travel"
              width={140}
              height={50}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-9">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sasa-brown text-sm tracking-[0.12em] uppercase font-medium hover:opacity-60 transition-opacity duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/start-your-trip"
              className="hidden lg:inline-block btn-primary"
            >
              Start Your Trip
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-sasa-brown p-2"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-sasa-white border-t border-sasa-black/10">
          <div className="px-6 py-7 space-y-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sasa-brown text-sm tracking-[0.12em] uppercase font-medium"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-sasa-black/10">
              <Link
                href="/start-your-trip"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center block"
              >
                Start Your Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
