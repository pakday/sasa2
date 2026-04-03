import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Impact — Sasa Travel",
  description:
    "Luxury with purpose. At Sasa Travel, we believe every journey should deepen awareness of what is worth protecting — from fragile ecosystems to the communities that live alongside them.",
};

export default function OurImpactPage() {
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
          <source src="/videos/199221-909835682.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-sasa-brown/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/85 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p className="text-sasa-white/55 text-sm tracking-[0.4em] uppercase mb-5">
            Responsible Travel
          </p>
          <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl text-sasa-white leading-[1.05] mb-5">
            Our Impact
          </h1>
          <p className="text-sasa-white/70 text-lg max-w-xl leading-relaxed">
            Travel that respects, supports, and gives back to the places and
            people that make it possible.
          </p>
        </div>
      </section>

      {/* ── Luxury with Purpose ───────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-8">
            Our Philosophy
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-sasa-brown mb-8">
            Luxury with Purpose
          </h2>
          <p className="text-sasa-black/65 text-base md:text-lg leading-relaxed mb-6">
            To share Africa&apos;s wild beauty is a privilege, and one we
            approach with care and responsibility. At Sasa Travel, we create
            thoughtful, high-touch journeys that offer a deeper, more intimate
            experience of the continent we call home.
          </p>
          <p className="text-sasa-black/65 text-base md:text-lg leading-relaxed">
            But meaningful travel should leave more than memories. We believe
            every journey should deepen awareness of what is worth protecting —
            from fragile ecosystems to the communities that live alongside them.
          </p>
        </div>
      </section>

      {/* ── Full-width image break ────────────────────────────────────── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/general%20pics%20for%20the%20site%20use/TANZANIA/AdobeStock_51767739.jpeg"
          alt="African landscape — wildlife and community"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-sasa-brown/30" />
      </div>

      {/* ── Community Connection ──────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                Community Connection
              </p>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-sasa-brown mb-8 leading-snug">
                The Land and Its People Are Inseparable
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                The well-being of local communities and the health of the land
                are closely connected. That is why we are intentional about
                working in ways that support both — not just wildlife and
                landscapes, but the people who live alongside them and make
                these journeys possible.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                We value the people who welcome us. We partner with local guides
                and communities. We go out of our way to use hospitality
                partners who share our values around fair employment,
                environmental care, and community reinvestment.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                Through trusted relationships on the ground, we ensure that the
                economic benefit of travel reaches the people it should — those
                who steward these places and make them extraordinary.
              </p>
            </div>
            <div className="relative h-[460px] overflow-hidden">
              <Image
                src="/images/general%20pics%20for%20the%20site%20use/KENYA/Fav%203%202.jpeg"
                alt="Local community connection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Youth Business Support ────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="lg:order-2">
              <p className="text-sasa-white/55 text-xs tracking-[0.3em] uppercase mb-6">
                Our Focus
              </p>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-sasa-white mb-8 leading-snug">
                Supporting Youth-Led Small Businesses
              </h2>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-6">
                We support youth-led small businesses in the communities
                connected to the places and safari regions our journeys touch —
                helping create more local opportunity alongside travel.
              </p>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-6">
                These are businesses in hospitality, crafts, food, transport,
                guiding, and more. The kinds of enterprises that grow a local
                economy from the ground up and keep wealth in the communities
                that generate it.
              </p>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-10">
                We believe the most sustainable form of tourism is one that
                builds genuine local capacity — not dependency. That means
                investing in skills, relationships, and opportunity that outlast
                any single journey.
              </p>
              <Link href="/start-your-trip" className="btn-light">
                Plan a Journey That Gives Back
              </Link>
            </div>
            <div className="relative h-[460px] overflow-hidden lg:order-1">
              <Image
                src="/images/general%20pics%20for%20the%20site%20use/RWANDA/timothy-k-8eaxug2els0-unsplash.jpg"
                alt="Youth business support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact pillars ────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif font-semibold text-4xl md:text-5xl text-sasa-brown">
              How We Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-sasa-black/10">
            {[
              {
                title: "Local Partnerships",
                body: "Every guide, lodge, and operator we work with is selected for their quality, their ethics, and their genuine connection to the place. We build relationships, not just transactions.",
              },
              {
                title: "Conservation Awareness",
                body: "We design journeys that invite guests into a deeper understanding of fragile ecosystems — not just to witness them, but to care about their future. Presence creates responsibility.",
              },
              {
                title: "Community Investment",
                body: "A portion of every journey supports youth-led enterprises in the communities we visit. Local opportunity alongside travel — so the benefit stays where it should.",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className={`p-10 md:p-12 ${i < 2 ? "border-b md:border-b-0 md:border-r border-sasa-black/10" : ""}`}
              >
                <div className="w-8 h-px bg-sasa-brown mb-8" />
                <h3 className="font-serif font-semibold text-2xl text-sasa-brown mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sasa-black/80 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-sec-brown text-xs tracking-[0.4em] uppercase mb-6">
            Travel with Purpose
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-sasa-brown mb-8 leading-snug">
            Every Journey You Take <br className="hidden md:block" />
            Makes a Difference
          </h2>
          <p className="text-sasa-black/80 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            When you travel with Sasa, you&apos;re not just experiencing Africa
            at its finest. You&apos;re contributing to the communities and
            ecosystems that make these journeys possible.
          </p>
          <Link href="/start-your-trip" className="btn-primary btn-lg">
            Begin Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
