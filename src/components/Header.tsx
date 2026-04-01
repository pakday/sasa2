"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  { name: "Botswana", href: "/destinations/botswana" },
  { name: "Rwanda", href: "/destinations/rwanda" },
  { name: "Kenya", href: "/destinations/kenya" },
  { name: "Tanzania", href: "/destinations/tanzania" },
  { name: "Zanzibar", href: "/destinations/zanzibar" },
  { name: "Uganda", href: "/destinations/uganda" },
  { name: "Mozambique", href: "/destinations/mozambique" },
  { name: "South Africa", href: "/destinations/south-africa" },
  { name: "Zimbabwe", href: "/destinations/zimbabwe" },
  { name: "Zambia", href: "/destinations/zambia" },
  { name: "Morocco", href: "/destinations/morocco" },
];

const navLinks = [
  { name: "Curated Escapes", href: "/curated-escapes" },
  { name: "Immersion", href: "/immersion" },
  { name: "About Us", href: "/about" },
  { name: "Our Impact", href: "/our-impact" },
];

export default function Header() {
  const [destOpen, setDestOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDest() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDestOpen(true);
  }

  function scheduleDest() {
    closeTimer.current = setTimeout(() => setDestOpen(false), 180);
  }

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
            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={openDest}
              onMouseLeave={scheduleDest}
            >
              <button className="flex items-center gap-1.5 text-sasa-brown text-sm tracking-[0.12em] uppercase font-medium hover:opacity-60 transition-opacity duration-200">
                Destinations
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    destOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-3 bg-sasa-white border border-sasa-black/10 min-w-52 shadow-xl transition-all duration-200 ${
                  destOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={openDest}
                onMouseLeave={scheduleDest}
              >
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    href={dest.href}
                    onClick={() => setDestOpen(false)}
                    className="block px-5 py-3.5 text-sasa-brown text-sm tracking-[0.06em] uppercase hover:bg-sasa-brown hover:text-sasa-white transition-colors duration-150 border-b border-sasa-black/8 last:border-0"
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            </div>

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
            {/* Mobile Destinations */}
            <div>
              <button
                onClick={() => setMobileDestOpen(!mobileDestOpen)}
                className="flex justify-between items-center w-full text-sasa-brown text-sm tracking-[0.12em] uppercase font-medium"
              >
                Destinations
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileDestOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileDestOpen && (
                <div className="mt-4 pl-4 space-y-3 border-l border-sasa-black/15">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.name}
                      href={dest.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sasa-brown/70 text-sm tracking-wide hover:text-sasa-brown transition-colors"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
