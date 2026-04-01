import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Sasa Travel",
  description:
    "We are locally rooted and deeply connected to the places we share. Led by an all-African team with deep local knowledge — Sasa Travel designs journeys from the inside out.",
};

const differencePoints = [
  {
    number: "01",
    title: "Locally Rooted",
    body: "Our team is African, born and raised in the places we share. This gives us relationships, access, and insight that no outside operator can replicate.",
  },
  {
    number: "02",
    title: "Deeply Personal",
    body: "You work with the same team from start to finish. Every journey is tailored around you — your interests, your pace, your vision of what Africa could mean to you.",
  },
  {
    number: "03",
    title: "Thoughtfully Designed",
    body: "Every detail is handled with precision and care. When nothing is left to chance, you're free to be fully present and take in all that Africa has to offer.",
  },
  {
    number: "04",
    title: "Responsibly Connected",
    body: "We work with guides, communities, and partners who share our values. Choosing Sasa means your journey supports the places and people it touches.",
  },
];

export default function AboutPage() {
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
          <source src="/videos/226795.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-sasa-brown/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/85 via-sasa-brown/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p className="text-sasa-white/55 text-sm tracking-[0.4em] uppercase mb-5">
            Our Story
          </p>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-sasa-white leading-[1.05] mb-5">
            About Us
          </h1>
          <p className="text-sasa-white/70 text-lg max-w-xl leading-relaxed">
            We are locally rooted and deeply connected to the places we share —
            designed by an all-African team that knows Africa as home.
          </p>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-sasa-brown/30 mx-auto mb-10" />
          <p className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-sasa-brown leading-[1.45] italic">
            &ldquo;Every trip is thoughtfully crafted to reveal the depth,
            beauty, history, and character of each place. We go beyond the
            expected, weaving together culture, landscape, people, and story in
            a way that feels personal, seamless, and unforgettable.&rdquo;
          </p>
          <div className="w-12 h-px bg-sasa-brown/30 mx-auto mt-10" />
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                Who We Are
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown mb-8 leading-snug">
                Sharing Africa as Those Who Know It Best
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                We are locally rooted and deeply connected to the places we
                share. Our journeys are shaped by lived experience, local
                knowledge, and a genuine love for the continent — designed by an
                all-African team that knows Africa as home, not just as a
                destination.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                We believe travel should do more than show you somewhere new —
                it should move you. When every detail is handled with care,
                you&apos;re free to be fully present, take it all in, and
                experience Africa in a deeper way.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                With local insight, thoughtful design, and heartfelt
                hospitality, we create journeys that invite you to reconnect —
                with the place, with the moment, and with yourself.
              </p>
              <Link href="/start-your-trip" className="btn-primary">
                Begin Conversation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/Botswana/16167.jpg"
                  alt="Botswana safari"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg"
                  alt="Rwanda landscape"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/KENYA/antelope-4121962_1280.jpg"
                  alt="Kenya wildlife"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg"
                  alt="Tanzania"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Quote ─────────────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-1">
              <div className="relative h-80 lg:h-[460px] overflow-hidden">
                <Image
                  src="/images/general%20pics%20for%20the%20site%20use/harshil-gudka-pU-9BYqjhyo-unsplash%20(1).jpg"
                  alt="Emmanuel Kwizera, Founder"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <svg
                className="w-8 h-6 text-sasa-white/20 mb-8"
                viewBox="0 0 32 24"
                fill="currentColor"
              >
                <path d="M0 24V13.7C0 5.7 4 1.1 12 0l1.3 2C9 3 6.8 5.1 5.8 8.3H12V24H0zm17.3 0V13.7c0-8 4-12.6 12-13.7l1.3 2c-4.3 1-6.5 3.1-7.5 6.3H30V24H17.3z" />
              </svg>
              <p className="font-serif text-3xl md:text-4xl lg:text-[2.4rem] text-sasa-white italic leading-[1.45] mb-10">
                When you come from Africa, you never stop wanting to share it.
                It can be a complex place, but it is also full of warmth,
                creativity, passion, and extraordinary beauty.
              </p>
              <div className="border-t border-sasa-white/15 pt-7">
                <p className="font-serif text-2xl text-sasa-white mb-1">
                  Emmanuel Kwizera
                </p>
                <p className="text-sasa-white/45 text-xs tracking-[0.2em] uppercase">
                  Founder &amp; CEO, Sasa Travel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Sasa Travel Difference ────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              What Sets Us Apart
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              The Sasa Travel Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {differencePoints.map((point) => (
              <div key={point.number} className="flex gap-6 items-start">
                <span className="font-serif text-4xl text-sasa-brown/12 flex-shrink-0 leading-none mt-1">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-sasa-brown mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sasa-black/65 text-base leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="relative h-80 lg:h-[560px] overflow-hidden">
              <Image
                src="/images/general%20pics%20for%20the%20site%20use/KENYA/sutirta-budiman-kjOBqwMUnWw-unsplash%20(1).jpg"
                alt="Our team in the field"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                The Team
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown mb-8 leading-snug">
                Led by African Insight, Shaped by Trust
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                Sasa Travel is led by an all-African team with deep local
                knowledge and a real connection to the places we share. Our work
                is built on long-standing relationships with guides, hospitality
                partners, conservation leaders, and communities across the
                continent — relationships rooted in trust, care, and mutual
                respect.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                That foundation gives us the insight and access to create
                journeys that feel thoughtful, personal, and genuinely well
                connected. Every detail is handled with care, and every partner
                we work with is chosen for their quality, integrity, and shared
                values.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                It also allows us to create experiences that feel distinctive
                and meaningful — from carefully designed itineraries to more
                ambitious journeys that reflect our commitment to innovation,
                cultural depth, and responsible travel.
              </p>
              <Link href="/start-your-trip" className="btn-secondary">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-white/55 text-xs tracking-[0.4em] uppercase mb-6">
            Begin Your Journey
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-white mb-8 leading-snug">
            It Would Be a Privilege to Share Africa With You
          </h2>
          <p className="text-sasa-white/65 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Whatever you&apos;re looking for — an extraordinary safari, a
            cultural immersion, a multi-country adventure — we&apos;re here to
            help shape it into something deeply personal and truly memorable.
          </p>
          <Link href="/start-your-trip" className="btn-light btn-lg">
            Start Your Trip
          </Link>
        </div>
      </section>
    </>
  );
}
