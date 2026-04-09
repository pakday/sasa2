import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immersion Experience — Sasa Travel",
  description:
    "A three-month professional immersion experience in Africa. Work alongside local teams in Casablanca, Kigali, and Cape Town.",
};

const locations = [
  {
    city: "Casablanca",
    country: "Morocco",
    image:
      "/images/general%20pics%20for%20the%20site%20use/MOROCCO/giuseppe-gurrieri-bcWFbTYge7I-unsplash.jpg",
    description:
      "Africa's business capital. Work within Morocco's dynamic commercial ecosystem, engaging with a network of small businesses at the intersection of African and European markets.",
    highlights: [
      "Business & entrepreneurship",
      "North African markets",
      "French-Arabic bilingual environment",
      "Rich cultural heritage",
    ],
  },
  {
    city: "Kigali",
    country: "Rwanda",
    image:
      "/images/general%20pics%20for%20the%20site%20use/RWANDA/timothy-k-8eaxug2els0-unsplash.jpg",
    description:
      "One of Africa's fastest-growing cities and a hub of innovation. Kigali offers hands-on experience within Rwanda's thriving start-up and small business scene in one of the continent's most progressive environments.",
    highlights: [
      "Tech & innovation ecosystem",
      "East African entrepreneurship",
      "Social enterprise focus",
      "Immersive community experience",
    ],
  },
  {
    city: "Cape Town",
    country: "South Africa",
    image:
      "/images/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg",
    description:
      "A world-class city at the tip of the continent. Cape Town's diverse economy and creative industry make it an ideal location to build real professional skills while exploring one of Africa's most beautiful and complex cities.",
    highlights: [
      "Creative & design industries",
      "Diverse business environment",
      "World-class city experience",
      "Strong NGO & impact sector",
    ],
  },
];

export default function ImmersionPage() {
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
          <source src="/videos/226782.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-sasa-brown/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p className="text-sasa-white/55 text-sm tracking-[0.4em] uppercase mb-5">
            Professional Experience
          </p>
          <h1 className="font-serif font-semibold heading-xl text-sasa-white mb-5">
            Immersion
          </h1>
          <p className="text-sasa-white/70 text-lg max-w-2xl leading-relaxed">
            A thoughtfully designed three-month experience open to anyone ready
            to build real skills, global perspective, and meaningful connections
            across Africa.
          </p>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-sasa-sec-brown text-sm tracking-[0.3em] uppercase mb-6">
                About Immersion
              </p>
              <h2 className="font-serif font-semibold heading-lg text-sasa-brown mb-8 leading-snug">
                Work. Learn. Connect. Across Africa.
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                Our Immersion experience is a thoughtfully designed three-month
                opportunity for anyone looking to gain hands-on professional
                experience in Africa. Working alongside our local teams,
                volunteers support businesses in areas aligned with their field
                of interest.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                You&apos;ll build practical skills, develop genuine global
                perspective, and gain meaningful on-the-ground experience that
                goes far beyond the classroom.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                This experience currently runs in three cities across Africa,
                each offering a distinct culture, business environment, and
                opportunity to learn through real work while engaging directly
                with dynamic local communities.
              </p>
              <a href="#apply" className="btn-primary">
                Enquire Now
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/KENYA/Fav%203%202.jpeg"
                  alt="Immersion experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 overflow-hidden mt-8">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/RWANDA/Fav%203.jpeg"
                  alt="Rwanda city life"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 overflow-hidden col-span-2">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg"
                  alt="Cape Town"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You'll Gain ──────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-serif font-semibold heading-lg text-sasa-brown">
              What You&apos;ll Gain
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Real Work Experience",
                body: "Work directly with small business owners and entrepreneurs, contributing to real projects that have a genuine impact on the ground.",
              },
              {
                number: "02",
                title: "Local Knowledge",
                body: "Understand African markets, culture, and business from the inside — knowledge that can't be taught from a textbook or acquired from abroad.",
              },
              {
                number: "03",
                title: "Global Network",
                body: "Build relationships with professionals, entrepreneurs, and community leaders across the continent that will stay with you for life.",
              },
              {
                number: "04",
                title: "Personal Growth",
                body: "Living and working in a new culture challenges and changes you. You'll return with a deeper understanding of yourself and the world.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t-2 border-sasa-brown/20 pt-7"
              >
                <p className="font-serif text-5xl text-sasa-brown/30 mb-4 leading-none">
                  {item.number}
                </p>
                <h3 className="font-serif font-semibold heading-xs text-sasa-brown mb-3">
                  {item.title}
                </h3>
                <p className="text-sasa-black/80 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ─────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Immersion Cities
            </p>
              <h2 className="font-serif font-semibold heading-lg text-sasa-brown">
          <div className="space-y-1">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`relative h-64 lg:h-80 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                >
                  <Image
                    src={loc.image}
                    alt={`${loc.city}, ${loc.country}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`bg-white p-10 md:p-14 flex flex-col justify-center ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                >
                  <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-3">
                    {loc.country}
                  </p>
                  <h3 className="font-serif font-semibold text-3xl text-sasa-brown mb-5">
                    {loc.city}
                  </h3>
                  <p className="text-sasa-black/65 text-sm leading-relaxed mb-7">
                    {loc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loc.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-sasa-brown/20 text-sasa-brown text-xs tracking-wide px-3 py-1"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-white/55 text-xs tracking-[0.4em] uppercase mb-6">
            Ready to Begin?
          </p>
          <h2 className="font-serif font-semibold heading-lg text-sasa-white mb-8 leading-snug">
            Let&apos;s Explore This Experience Together
          </h2>
          <p className="text-sasa-white/65 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you&apos;re looking to take part, a university or
            institution seeking partnerships, or interested in hosting —
            we&apos;d love to connect with you.
          </p>
          <Link href="/start-your-trip" className="btn-light btn-lg">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
