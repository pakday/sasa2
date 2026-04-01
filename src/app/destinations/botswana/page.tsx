import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Botswana Safaris — Sasa Travel",
  description:
    "Experience Botswana at its finest. From the waterways of the Okavango Delta to the vast stillness of the Kalahari — untamed beauty, exceptional wildlife, and some of Africa's most exclusive safari experiences.",
};

const highlights = [
  {
    image: "/Pictures/Botswana/hyenas-laying-down-round.jpg",
    title: "Exceptional Wildlife",
    description:
      "Home to Africa's largest elephant population and an extraordinary density of predators — lions, leopards, cheetahs, and wild dogs.",
  },
  {
    image: "/Pictures/Botswana/16167.jpg",
    title: "The Okavango Delta",
    description:
      "One of the world's most unique ecosystems — a vast inland river delta teeming with wildlife, navigated by traditional mokoro canoes.",
  },
  {
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_312250474.jpeg",
    title: "Low-Impact Luxury",
    description:
      "Botswana's high-value, low-volume approach to tourism means exclusive access to pristine landscapes with beautifully designed camps.",
  },
  {
    image: "/Pictures/Botswana/8776.jpg",
    title: "Varied Landscapes",
    description:
      "From lush floodplains of the Delta and Linyanti to the salt pans of Makgadikgadi and the solitude of the Kalahari.",
  },
];

const tripDates = [
  { date: "August 10 – 22, 2026", spots: "10 spots left" },
  { date: "August 25 – September 6, 2026", spots: "Sold out", soldOut: true },
  { date: "August 25 – September 6, 2027", spots: "Inquire for availability" },
];

export default function BotswanaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-end justify-start overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/Botswana/13828341_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-sasa-brown/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/80 via-sasa-brown/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sasa-brown/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-16 w-full">
          <nav
            className="flex items-center gap-2 mb-10"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-sasa-white/50 text-xs tracking-wide hover:text-sasa-white transition-colors"
            >
              Home
            </Link>
            <span className="text-sasa-white/30 text-xs">/</span>
            <Link
              href="/destinations"
              className="text-sasa-white/50 text-xs tracking-wide hover:text-sasa-white transition-colors"
            >
              Destinations
            </Link>
            <span className="text-sasa-white/30 text-xs">/</span>
            <span className="text-sasa-white/80 text-xs">Botswana</span>
          </nav>

          <p className="text-sasa-white/55 text-xs tracking-[0.4em] uppercase mb-5">
            Destination
          </p>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-sasa-white leading-[1.05] mb-6 max-w-3xl">
            Botswana
          </h1>
          <p className="text-sasa-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Untamed beauty, exceptional wildlife, and some of Africa&apos;s most
            exclusive safari experiences.
          </p>
          <a href="#get-in-touch" className="btn-light btn-lg">
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-8">
            Experience Botswana at Its Finest
          </p>
          <p className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-sasa-brown italic leading-relaxed">
            &ldquo;A rare sense of space, privacy, and quiet luxury — making it
            one of the most extraordinary safari destinations in Africa.&rdquo;
          </p>
          <div className="mt-10 w-14 h-px bg-sasa-brown/25 mx-auto" />
          <p className="mt-10 text-sasa-black/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Botswana is a place for travelers looking for something truly
            special. Think remarkable wildlife, beautifully designed camps, and
            landscapes that shift from lush floodplains to salt pans and desert.
            It is wild, refined, and deeply memorable.
          </p>
        </div>
      </section>

      {/* ── Why Botswana — Highlights ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Why Botswana
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              What Makes It Unforgettable
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="relative h-[480px] overflow-hidden group"
              >
                <Image
                  src={h.image}
                  alt={h.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/85 via-sasa-brown/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif font-bold text-xl text-sasa-white mb-2 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-sasa-white/70 text-sm leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote Divider ────────────────────────────────────────── */}
      <div className="relative h-60 lg:h-72 overflow-hidden flex items-center justify-center">
        <Image
          src="/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_332073818.jpeg"
          alt="Botswana wildlife"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-sasa-brown/55" />
        <div className="relative z-10 text-center px-6">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-sasa-white italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;Where wilderness meets wonder&rdquo;
          </p>
        </div>
      </div>

      {/* ── Featured Journey ──────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Featured Journey
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              13-Day Botswana Safari
            </h2>
            <p className="mt-4 text-sasa-black/80 text-base">
              Selinda, Okavango &amp; Makgadikgadi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            <div className="relative h-80 lg:h-auto min-h-[420px]">
              <Image
                src="/Pictures/Botswana/16167.jpg"
                alt="13-Day Botswana Safari"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="bg-sasa-brown px-8 py-14 md:px-12 md:py-16 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-sasa-white mb-6 leading-snug">
                  A beautifully curated journey through three of Botswana&apos;s
                  most iconic regions
                </h3>
                <p className="text-sasa-white/65 text-sm leading-relaxed mb-5">
                  From the remote beauty of Selinda to the wildlife-rich
                  Okavango Delta and the vast Makgadikgadi Pans, this itinerary
                  brings together exceptional guiding, stunning camps, and some
                  of Africa&apos;s most remarkable scenery.
                </p>
                <p className="text-sasa-white/65 text-sm leading-relaxed mb-8">
                  This is a safari that gives you the best of Botswana in one
                  seamless experience — rich wildlife, varied landscapes, quiet
                  luxury, and a true sense of being immersed in the wild.
                </p>

                <div className="border border-sasa-white/15 p-5 mb-8">
                  <p className="text-sasa-white/50 text-xs tracking-[0.2em] uppercase mb-4">
                    Why This Journey Stands Out
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Three distinct regions in one seamless itinerary",
                      "Rich wildlife across multiple ecosystems",
                      "Exceptional guiding from trusted local experts",
                      "Beautifully selected private camps",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sasa-white/70 text-sm"
                      >
                        <span className="text-sasa-white/40 mt-0.5 flex-shrink-0">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <p className="text-sasa-white/50 text-xs tracking-[0.2em] uppercase mb-4">
                    Trip Dates
                  </p>
                  <div className="space-y-3">
                    {tripDates.map((d) => (
                      <div
                        key={d.date}
                        className="flex items-start justify-between gap-4"
                      >
                        <span className="text-sasa-white/70 text-sm">
                          {d.date}
                        </span>
                        <span
                          className={`text-xs tracking-wide flex-shrink-0 ${d.soldOut ? "text-sasa-white/35 line-through" : "text-sasa-white/55"}`}
                        >
                          {d.spots}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#get-in-touch" className="btn-light text-center">
                Inquire About This Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              {
                src: "/Pictures/Botswana/16167.jpg",
                alt: "Botswana safari landscape",
              },
              {
                src: "/Pictures/Botswana/8776.jpg",
                alt: "Wildlife in Botswana",
              },
              {
                src: "/Pictures/Botswana/hyenas-laying-down-round.jpg",
                alt: "Hyenas at rest in Botswana",
              },
              {
                src: "/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_332073818.jpeg",
                alt: "African savanna",
              },
              {
                src: "/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_312250474.jpeg",
                alt: "African wildlife",
              },
              {
                src: "/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg",
                alt: "Africa landscape",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative h-52 md:h-64 overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in Touch ─────────────────────────────────────────────── */}
      <section id="get-in-touch" className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
            <div className="lg:col-span-2">
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-5">
                Begin Your Journey
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-sasa-brown mb-6 leading-snug">
                Connect with Our <br className="hidden md:block" />
                Travel Designer
              </h2>
              <p className="text-sasa-black/80 text-base leading-relaxed mb-8">
                Share a few details about what you&apos;re looking for and
                we&apos;ll match you with the right person on our team to start
                planning your Botswana experience.
              </p>
              <div className="space-y-4">
                <p className="text-sasa-black/50 text-xs tracking-[0.2em] uppercase">
                  How would you describe yourself?
                </p>
                {[
                  "I'm ready to plan a trip to Africa soon",
                  "I'm considering a trip in the next 6–12 months",
                  "I'm thinking about a trip in the next few years",
                  "I'm interested in learning more for now",
                  "I'd like to connect, even if I'm not planning a trip yet",
                ].map((opt) => (
                  <p
                    key={opt}
                    className="text-sasa-black/55 text-sm leading-snug pl-4 border-l-2 border-sasa-brown/20"
                  >
                    {opt}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm showTimeline={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Destinations ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-sasa-brown">
              Explore More Destinations
            </h3>
            <Link
              href="/destinations"
              className="hidden sm:inline-block btn-secondary btn-sm"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Kenya",
                image:
                  "/Pictures/general%20pics%20for%20the%20site%20use/KENYA/antelope-4121962_1280.jpg",
                href: "/destinations/kenya",
              },
              {
                name: "Rwanda",
                image:
                  "/Pictures/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg",
                href: "/destinations/rwanda",
              },
              {
                name: "Tanzania",
                image:
                  "/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg",
                href: "/destinations/tanzania",
              },
              {
                name: "Zimbabwe",
                image:
                  "/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_332073818.jpeg",
                href: "/destinations/zimbabwe",
              },
            ].map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group relative h-44 md:h-52 overflow-hidden block"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-sasa-brown/40" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="font-serif font-bold text-xl text-sasa-white">
                    {d.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
