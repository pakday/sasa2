import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Curated Escapes — Sasa Travel",
  description:
    "Specially designed journeys across Africa — from 15-day East Africa adventures to signature private jet safaris and summit ascents of Kilimanjaro.",
};

const regularEscapes = [
  {
    tag: "15 Days",
    region: "North Africa",
    title: "15 Days in Morocco",
    subtitle: "Culture, History & City Life",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/MOROCCO/giuseppe-gurrieri-bcWFbTYge7I-unsplash.jpg",
    description:
      "Discover the best of Morocco on a 15-day journey through its iconic cities, desert landscapes, and rich traditions. Start in Casablanca, explore Rabat, the blue streets of Chefchaouen, and the historic medina of Fez. Head into the Sahara for a desert camp experience with camel rides and unforgettable night skies. Travel through Todra Gorges and Skoura, then finish in Marrakech, where souks, palaces, and gardens bring the city to life.",
    highlights: [
      "Casablanca & Rabat",
      "Chefchaouen blue city",
      "Sahara desert camp",
      "Fez medina",
      "Marrakech",
    ],
  },
  {
    tag: "16 Days",
    region: "Southern Africa",
    title: "16-Day Southern Africa Journey",
    subtitle: "Victoria Falls, Botswana & Cape Town",
    image: "/Pictures/Botswana/16167.jpg",
    description:
      "Take in some of Southern Africa's most unforgettable places on this 16-day trip, from the power of Victoria Falls and the wildlife of Chobe and the Okavango Delta to the beauty of Cape Town. With thoughtfully chosen stays, expert guides, and a great balance of safari, scenery, and downtime, this journey brings together adventure, nature, and luxury in one seamless experience.",
    highlights: [
      "Victoria Falls",
      "Chobe National Park",
      "Okavango Delta",
      "Cape Town",
      "Winelands",
    ],
  },
  {
    tag: "14 Days",
    region: "Southern Africa",
    title: "14-Day Honeymoon Escape",
    subtitle: "South Africa & Mozambique",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg",
    description:
      "Celebrate your honeymoon with a beautiful mix of safari, city, and beach. From game drives in Greater Kruger and the energy of Cape Town to the calm, turquoise waters of Mozambique, this trip blends romance, adventure, and barefoot luxury in all the right ways.",
    highlights: [
      "Greater Kruger safari",
      "Cape Town",
      "Mozambique beaches",
      "Bazaruto Archipelago",
      "Private island lodges",
    ],
  },
  {
    tag: "15 Days",
    region: "East Africa",
    title: "The Best of East Africa",
    subtitle: "Kenya, Rwanda & Tanzania",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/KENYA/lisa-stockton-6bnNiZYIv6c-unsplash.jpg",
    description:
      "Experience the best of East Africa over 15 unforgettable days of wildlife, culture, and adventure. Begin in Nairobi, continue to Kigali and Rwanda's misty forests for a rare gorilla trekking experience, then head to Tanzania's iconic safari landscapes in search of the Big Five. Depending on the season, you may also witness the Great Migration in the Serengeti.",
    highlights: [
      "Nairobi",
      "Kigali",
      "Gorilla trekking",
      "Serengeti",
      "Big Five safari",
    ],
  },
];

const signatureJourneys = [
  {
    tag: "Signature Journey",
    region: "4 Countries",
    title: "An Extraordinary Safari Across Africa",
    subtitle: "Zimbabwe · Botswana · Kenya · Rwanda",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/RWANDA/Favorite%201%202.jpeg",
    description:
      "This remarkable journey takes you through four of Africa's most iconic wildlife destinations — Zimbabwe, Botswana, Kenya, and Rwanda — over 12 unforgettable days, with the ease and exclusivity of the Emirates Executive Private Jet. Guided by trusted experts and shaped with deep local insight, this is a rare way to experience the continent in exceptional comfort, with each stop offering its own distinct beauty, rhythm, and perspective.",
    dates: [
      { date: "August 10 – 22, 2026", status: "10 spots left" },
      {
        date: "August 25 – September 6, 2026",
        status: "Sold out",
        soldOut: true,
      },
      {
        date: "August 25 – September 6, 2027",
        status: "Inquire for availability",
      },
    ],
    duration: "12 Days",
  },
  {
    tag: "Signature Journey",
    region: "Tanzania",
    title: "Journey to the Summit",
    subtitle: "Kilimanjaro via Machame Route",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/glen-michaelsen-uAb6GF4kPq0-unsplash.jpg",
    description:
      "Join Sasa Travel for a unique Kilimanjaro experience, guided by trusted experts on the ground in Tanzania. As the world's tallest free-standing mountain, Kilimanjaro is iconic, but it is also one of the more approachable high-altitude climbs. This journey is designed to take you to the summit at a steady, well-considered pace, following the stunning Machame Route and combining adventure with comfort every step of the way. Children aged 14 and above are welcome to join.",
    dates: [
      { date: "December 7 – 15, 2026", status: "Inquire for availability" },
    ],
    duration: "9 Days",
  },
];

export default function CuratedEscapesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end justify-start overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/184737-873923039.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-sasa-brown/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p className="text-sasa-white/55 text-sm tracking-[0.4em] uppercase mb-5">
            Special Journeys
          </p>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-sasa-white leading-[1.05] mb-5">
            Curated Escapes
          </h1>
          <p className="text-sasa-white/70 text-lg max-w-xl leading-relaxed">
            Thoughtfully designed journeys across the continent — crafted with
            local insight, care, and quiet precision.
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-black/65 text-base md:text-lg leading-relaxed">
            Each Curated Escape is a fully planned journey designed to immerse
            you in the best of its destination. Every detail — from the lodges
            to the guides to the timing — is thoughtfully considered so you can
            arrive, exhale, and be fully present.
          </p>
        </div>
      </section>

      {/* ── Regular Escapes ───────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Curated Escapes
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown">
              Journeys Across the Continent
            </h2>
          </div>

          <div className="space-y-20">
            {regularEscapes.map((escape, i) => (
              <div
                key={escape.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`relative h-72 lg:h-[480px] overflow-hidden ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                >
                  <Image
                    src={escape.image}
                    alt={escape.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-sasa-brown text-sasa-white text-xs tracking-[0.15em] uppercase px-3 py-1.5">
                      {escape.tag}
                    </span>
                  </div>
                </div>
                <div
                  className={`bg-sasa-white p-10 md:p-14 flex flex-col justify-center ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                >
                  <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
                    {escape.region}
                  </p>
                  <h3 className="font-serif font-bold text-3xl md:text-4xl text-sasa-brown mb-2 leading-snug">
                    {escape.title}
                  </h3>
                  <p className="text-sasa-black/50 text-sm tracking-wide italic mb-7">
                    {escape.subtitle}
                  </p>
                  <p className="text-sasa-black/65 text-sm leading-relaxed mb-8">
                    {escape.description}
                  </p>
                  <div className="mb-8">
                    <p className="text-sasa-black/40 text-xs tracking-[0.2em] uppercase mb-3">
                      Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {escape.highlights.map((h) => (
                        <span
                          key={h}
                          className="border border-sasa-brown/25 text-sasa-brown text-xs tracking-wide px-3 py-1"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/start-your-trip"
                    className="btn-primary self-start"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signature Journeys ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Exclusive Experiences
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown">
              Signature Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {signatureJourneys.map((journey) => (
              <div
                key={journey.title}
                className="bg-sasa-white border border-sasa-brown/10 overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-sasa-brown/20" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-sasa-brown text-sasa-white text-xs tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
                      {journey.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <span className="bg-sasa-brown/90 text-sasa-white text-xs tracking-wide px-3 py-1.5">
                      {journey.duration}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-3">
                    {journey.region}
                  </p>
                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-sasa-brown mb-2 leading-snug">
                    {journey.title}
                  </h3>
                  <p className="text-sasa-black/50 text-sm tracking-wide italic mb-6">
                    {journey.subtitle}
                  </p>
                  <p className="text-sasa-black/65 text-sm leading-relaxed mb-7">
                    {journey.description}
                  </p>

                  {/* Dates */}
                  <div className="border-t border-sasa-brown/10 pt-6 mb-8">
                    <p className="text-sasa-black/40 text-xs tracking-[0.2em] uppercase mb-4">
                      Trip Dates
                    </p>
                    <div className="space-y-3">
                      {journey.dates.map((d) => (
                        <div
                          key={d.date}
                          className="flex items-center justify-between gap-4"
                        >
                          <span className="text-sasa-black/70 text-sm">
                            {d.date}
                          </span>
                          <span
                            className={`text-xs tracking-wide flex-shrink-0 ${d.soldOut ? "text-sasa-black/30 line-through" : "text-sasa-black/50"}`}
                          >
                            {d.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/start-your-trip" className="btn-primary">
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
            <div className="lg:col-span-2">
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-5">
                Inquire Now
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-sasa-brown mb-6 leading-snug">
                Interested in One of These Journeys?
              </h2>
              <p className="text-sasa-black/80 text-base leading-relaxed mb-6">
                Share a few details and we&apos;ll match you with the right
                person on our team to begin planning your escape.
              </p>
              <p className="text-sasa-black/45 text-sm leading-relaxed">
                Every journey is tailored to you — the dates, pace, lodges, and
                experiences are all shaped around what you&apos;re looking for.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
