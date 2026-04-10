import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal — Sasa Travel",
  description:
    "Stories, insights, and travel notes from across Africa. Explore destination guides, cultural reflections, and travel inspiration from the Sasa Travel team.",
};

const posts = [
  {
    category: "Destinations",
    date: "March 2026",
    title: "Into the Okavango: Why Botswana Belongs on Every Safari List",
    excerpt:
      "There are places in Africa that hold you differently. Botswana is one of them. The Okavango Delta — the world's largest inland delta — floods each year with water from Angola's highlands, drawing extraordinary concentrations of wildlife to its channels, islands, and floodplains.",
    image: "/images/Botswana/hyenas-laying-down-round.jpg",
  },
  {
    category: "Experiences",
    date: "February 2026",
    title: "Rwanda Revealed: Gorilla Trekking and Cultural Connection",
    excerpt:
      "There is nothing quite like standing in a misty volcanic forest, watching a mountain gorilla move through the undergrowth just metres away. Rwanda offers this encounter — and much more beyond it.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg",
  },
  {
    category: "Travel Philosophy",
    date: "January 2026",
    title: "The Art of Slow Travel: Why Less Is More on an African Safari",
    excerpt:
      "In a world that moves fast, Africa invites you to slow down. The best wildlife encounters, the richest cultural exchanges, the most meaningful moments — they rarely come to those who rush.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/TANZANIA/sergey-pesterev-DWXR-nAbxCk-unsplash.jpg",
  },
  {
    category: "Destinations",
    date: "December 2025",
    title: "Tanzania's Greatest Stages: Serengeti, Ngorongoro & Beyond",
    excerpt:
      "Tanzania holds some of Africa's most iconic landscapes. The Serengeti stretches seemingly without end beneath open skies. Ngorongoro Crater shelters an entire ecosystem within ancient volcanic walls.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg",
  },
  {
    category: "Destinations",
    date: "November 2025",
    title: "South Africa: Safari, City, and Everything Between",
    excerpt:
      "Few destinations on the continent offer such breadth. Start with the Big Five in Kruger, move through the winelands of Stellenbosch, and end in Cape Town — one of the world's great cities.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg",
  },
  {
    category: "Insights",
    date: "October 2025",
    title: "Morocco: Where Ancient Medinas Meet the Saharan Dunes",
    excerpt:
      "Morocco is its own world — a place where centuries-old cities, mountain passes, desert dunes, and Atlantic coastlines all exist within the same country. It rewards slow exploration and an open curiosity.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/MOROCCO/giuseppe-gurrieri-bcWFbTYge7I-unsplash.jpg",
  },
];

export default function JournalPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sasa-brown/80 via-sasa-brown/60 to-sasa-brown/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/95 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p className="text-sasa-white text-xs tracking-xl uppercase mb-5">
            Stories &amp; Insights
          </p>
          <h1 className="font-serif font-semibold heading-xl text-sasa-white mb-5">
            Journal
          </h1>
          <p className="text-sasa-white/60 text-lg max-w-xl leading-relaxed">
            Destination guides, travel philosophy, and stories from the field —
            written by those who know Africa as home.
          </p>
        </div>
      </section>

      {/* ── All Posts ─────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-semibold heading-md text-sasa-brown mb-12">
            Stories & Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post, idx) => {
              const slug = post.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <div key={post.title} className="flex flex-col">
                  <div className="relative h-56 overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sasa-sec-brown text-xs tracking-sm-plus uppercase">
                      {post.category}
                    </span>
                    <span className="text-sasa-black/40 text-xs">
                      {post.date}
                    </span>
                  </div>
                  <Link href={`/journal/${slug}`}>
                    <h3 className="font-serif font-semibold heading-xs text-sasa-brown mb-3 leading-snug flex-1 hover:text-sasa-brown/60 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sasa-black/60 text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/journal/${slug}`}
                    className="inline-flex items-center gap-2 text-sasa-brown text-xs tracking-sm uppercase font-medium hover:opacity-60 transition-opacity"
                  >
                    Read Post
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-white/60 text-xs tracking-xl uppercase mb-6">
            Ready to Begin?
          </p>
          <h2 className="font-serif font-semibold heading-lg text-sasa-white mb-7 leading-snug">
            Let&apos;s Plan Your Journey
          </h2>
          <p className="text-sasa-white/60 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Every destination in our journal is one our team knows deeply. Share
            what speaks to you and we&apos;ll help shape it into something truly
            personal.
          </p>
          <Link href="/start-your-trip" className="btn-light btn-lg">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
