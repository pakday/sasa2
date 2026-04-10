import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destinations — Sasa Travel",
  description:
    "Explore Africa's most extraordinary destinations with Sasa Travel. From the Okavango Delta to the Serengeti, we craft deeply personal journeys across the continent.",
};

const destinations = [
  {
    name: "Botswana",
    region: "Southern Africa",
    tagline: "Okavango Delta & Kalahari",
    description:
      "Untamed beauty, exceptional wildlife, and some of Africa's most exclusive safari experiences. From the waterways of the Okavango Delta to the vast stillness of the Kalahari, Botswana offers a rare sense of space, privacy, and quiet luxury.",
    image: "/images/Botswana/16167.jpg",
    href: "/destinations/botswana",
    featured: true,
  },
  {
    name: "Kenya",
    region: "East Africa",
    tagline: "Maasai Mara & Amboseli",
    description:
      "The birthplace of the safari. Kenya's iconic landscapes — from the sweeping Maasai Mara to the foothills of Kilimanjaro — offer extraordinary wildlife encounters and deep cultural connection with the Maasai people.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/KENYA/antelope-4121962_1280.jpg",
    href: "/destinations/kenya",
  },
  {
    name: "Rwanda",
    region: "East Africa",
    tagline: "Gorilla Trekking & Akagera",
    description:
      "One of the most compelling destinations on the continent. Trek through misty volcanic forests to encounter mountain gorillas in their natural habitat — an encounter that changes everything.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg",
    href: "/destinations/rwanda",
  },
  {
    name: "Tanzania",
    region: "East Africa",
    tagline: "Serengeti & Ngorongoro",
    description:
      "Home to the Serengeti, the Great Migration, and Ngorongoro Crater — Tanzania is Africa at its most dramatic. Combined with the islands of Zanzibar, this destination offers an unmatched range of experiences.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg",
    href: "/destinations/tanzania",
  },
  {
    name: "Zimbabwe",
    region: "Southern Africa",
    tagline: "Victoria Falls & Hwange",
    description:
      "From the thundering power of Victoria Falls to the elephant-rich plains of Hwange, Zimbabwe is rich in natural wonder, history, and warm hospitality — deeply rewarding for those who discover it.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/AdobeStock_332073818.jpeg",
    href: "/destinations/zimbabwe",
  },
  {
    name: "South Africa",
    region: "Southern Africa",
    tagline: "Kruger & Cape Winelands",
    description:
      "An extraordinary diversity of experiences — world-class wildlife in Kruger, the cultural energy of Cape Town, and some of the world's most beautiful winelands. South Africa delivers it all with style.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg",
    href: "/destinations/south-africa",
  },
  {
    name: "Morocco",
    region: "North Africa",
    tagline: "Culture, History & Sahara",
    description:
      "Where the ancient meets the contemporary. Morocco's imperial cities, saharan dunes, blue-painted medinas, and warm hospitality create a journey unlike any other on the continent.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/MOROCCO/giuseppe-gurrieri-bcWFbTYge7I-unsplash.jpg",
    href: "/destinations/morocco",
  },
  {
    name: "Uganda",
    region: "East Africa",
    tagline: "Gorilla Trekking & Bwindi",
    description:
      "The Pearl of Africa. Uganda's rainforests shelter half the world's mountain gorilla population. Combined with the Rwenzori Mountains and White Nile adventures, it's an experience of profound natural beauty.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/KENYA/lisa-stockton-6bnNiZYIv6c-unsplash.jpg",
    href: "/destinations/uganda",
  },
  {
    name: "Zanzibar",
    region: "East Africa",
    tagline: "Beaches & Spice Islands",
    description:
      "An archipelago of powder-white beaches, turquoise waters, and centuries of Swahili culture. The perfect complement to an East African safari — barefoot luxury and timeless beauty.",
    image: "/images/general%20pics%20for%20the%20site%20use/KENYA/fav%202.jpeg",
    href: "/destinations/zanzibar",
  },
  {
    name: "Zambia",
    region: "Southern Africa",
    tagline: "Victoria Falls & South Luangwa",
    description:
      "Africa's walking safari capital. Zambia offers a more intimate and adventurous safari experience — from the iconic South Luangwa Valley to the Zambezi River and the Zambian side of Victoria Falls.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/TANZANIA/agnese-galbusera-hc6aJsbfg60-unsplash.jpg",
    href: "/destinations/zambia",
  },
  {
    name: "Mozambique",
    region: "Southern Africa",
    tagline: "Indian Ocean & Bazaruto",
    description:
      "Pristine beaches, warm turquoise waters, and the extraordinary Bazaruto Archipelago. Mozambique is a rare and beautiful blend of Portuguese colonial heritage, African soul, and island paradise.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/AdobeStock_686054056%202.jpeg",
    href: "/destinations/mozambique",
  },
];

export default function DestinationsPage() {
  const featured = destinations.find((d) => d.featured);
  const rest = destinations.filter((d) => !d.featured);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end justify-start overflow-hidden">
        <video
          suppressHydrationWarning
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/226795.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-sasa-brown/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p className="text-sasa-white/60 text-xs tracking-xl uppercase mb-5">
            Explore Africa
          </p>
          <h1 className="font-serif font-semibold heading-xl text-sasa-white mb-5">
            Destinations
          </h1>
          <p className="text-sasa-white/60 text-lg max-w-xl leading-relaxed">
            Thoughtfully curated journeys across the continent — guided by local
            insight, designed for depth.
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-black/60 text-base md:text-lg leading-relaxed">
            From the wildlife-rich savannas of East Africa to the dunes of the
            Sahara and the islands of the Indian Ocean — each destination we
            share is one we know deeply. These are places our team calls home,
            and journeys we craft with genuine care and knowledge.
          </p>
        </div>
      </section>

      {/* ── All Destinations ──────────────────────────────────────────── */}
      <section className="bg-sasa-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-semibold heading-md text-sasa-brown mb-12">
            All Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((dest) => (
              <div key={dest.name} className="flex flex-col">
                <div className="relative h-64 overflow-hidden mb-5">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sasa-white/80 text-sasa-brown text-xs tracking-xs uppercase px-3 py-1.5 font-medium">
                      {dest.region}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif font-semibold heading-sm text-sasa-brown mb-1.5">
                  {dest.name}
                </h3>
                <p className="text-sasa-sec-brown text-xs tracking-sm uppercase mb-4">
                  {dest.tagline}
                </p>
                <p className="text-sasa-black/80 text-sm leading-relaxed flex-1 mb-5">
                  {dest.description}
                </p>
                <Link
                  href="/start-your-trip"
                  className="inline-flex items-center gap-2 text-sasa-brown text-xs tracking-sm uppercase font-medium hover:opacity-60 transition-opacity"
                >
                  Enquire Now
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 hover:translate-x-1"
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
            ))}
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
            Not Sure Where to Start?
          </h2>
          <p className="text-sasa-white/60 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Our team knows these destinations as home. Share a little about what
            you&apos;re looking for, and we&apos;ll help you find the journey
            that&apos;s right for you.
          </p>
          <Link href="/start-your-trip" className="btn-light btn-lg">
            Begin Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
