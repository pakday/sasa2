import Image from "next/image";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────── */

const destinations = [
  {
    name: "Botswana",
    sub: "Okavango Delta & Kalahari",
    image: "/Pictures/Botswana/16167.jpg",
    href: "/destinations/botswana",
  },
  {
    name: "Kenya",
    sub: "Maasai Mara & Amboseli",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/KENYA/antelope-4121962_1280.jpg",
    href: "/destinations/kenya",
  },
  {
    name: "Rwanda",
    sub: "Gorilla Trekking & Akagera",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg",
    href: "/destinations/rwanda",
  },
  {
    name: "Tanzania",
    sub: "Serengeti & Ngorongoro",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg",
    href: "/destinations/tanzania",
  },
  {
    name: "Zimbabwe",
    sub: "Victoria Falls & Hwange",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_332073818.jpeg",
    href: "/destinations/zimbabwe",
  },
  {
    name: "South Africa",
    sub: "Kruger & Cape Winelands",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg",
    href: "/destinations/south-africa",
  },
];

const escapes = [
  {
    tag: "15 Days",
    region: "East Africa",
    title: "The Best of East Africa",
    description:
      "Kenya, Rwanda & Tanzania over 15 unforgettable days of wildlife, culture, and adventure. Begin in Nairobi, continue to Kigali for rare gorilla trekking, then head into Tanzania's iconic safari landscapes.",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/KENYA/lisa-stockton-6bnNiZYIv6c-unsplash.jpg",
    href: "/curated-escapes",
  },
  {
    tag: "Signature Journey",
    region: "4 Countries",
    title: "An Extraordinary Safari Across Africa",
    description:
      "Zimbabwe, Botswana, Kenya & Rwanda over 12 days aboard the Emirates Executive Private Jet. A rare way to experience the continent in exceptional comfort and exclusivity. Limited dates for 2026–2027.",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/RWANDA/Favorite%201%202.jpeg",
    href: "/curated-escapes",
  },
  {
    tag: "Signature Journey",
    region: "Tanzania",
    title: "Journey to the Summit",
    description:
      "Kilimanjaro via the Machame Route — a 9-day guided ascent of the world's tallest free-standing mountain. Designed to take you to the summit at a steady, well-considered pace.",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/glen-michaelsen-uAb6GF4kPq0-unsplash.jpg",
    href: "/curated-escapes",
  },
];

const journalPosts = [
  {
    category: "Destinations",
    date: "March 2026",
    title: "Into the Okavango: Why Botswana Belongs on Every Safari List",
    image: "/Pictures/Botswana/hyenas-laying-down-round.jpg",
    href: "/destinations/botswana",
  },
  {
    category: "Experiences",
    date: "February 2026",
    title: "Rwanda Revealed: Gorilla Trekking and Cultural Connection",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg",
    href: "/destinations/rwanda",
  },
  {
    category: "Travel Philosophy",
    date: "January 2026",
    title: "The Art of Slow Travel: Why Less Is More on an African Safari",
    image:
      "/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/sergey-pesterev-DWXR-nAbxCk-unsplash.jpg",
    href: "/destinations/tanzania",
  },
];

const testimonials = [
  {
    quote:
      "We honestly can't say enough good things about our first trip to South Africa and Botswana. Everything was so well thought through and smoothly handled from start to finish, which meant we could just relax and enjoy the experience. The guides made it feel incredibly special.",
    heading: "It still doesn't quite feel real",
    trip: "South Africa & Botswana",
  },
  {
    quote:
      "Our family of five had the most incredible trip to Zimbabwe — easily one of the best trips we've ever taken together. The service was excellent, the guides were amazing, and seeing so much wildlife made the whole experience unforgettable.",
    heading: "One of the best trips we've ever taken",
    trip: "Zimbabwe",
  },
  {
    quote:
      "You created a journey that helped me reconnect with myself in a really meaningful way. I'll never forget the role you played in that process of rediscovery. Thank you, truly, for the care and intention you operate at.",
    heading: "A journey that changed me",
    trip: "Africa Immersion Journey",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/5220298-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="/images/Botswana/13828341_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle overlay — keep video vivid */}
        <div className="absolute inset-0 bg-sasa-brown/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-sasa-brown/55" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sasa-white/60 text-xs tracking-[0.4em] uppercase mb-8">
            Sasa Travel
          </p>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-sasa-white leading-[1.05] mb-8 tracking-tight">
            Experience Africa <br className="hidden md:block" />
            Through the Eyes of Locals
          </h1>
          <p className="text-sasa-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Personal journeys shaped by real connection, rich culture,
            unforgettable wildlife, and the kind of moments that stay with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-your-trip" className="btn-primary btn-lg">
              Begin Your Journey
            </Link>
            <Link href="/destinations" className="btn-light btn-lg">
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-sasa-white/30" />
          <svg
            className="w-4 h-4 text-sasa-white/40 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-sasa-brown/30 mx-auto mb-10" />
          <p className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-sasa-brown leading-[1.4] italic mb-10">
            &ldquo;The most meaningful journeys are rooted in place. We design
            private experiences across Africa with local insight, care, and an
            intimate understanding of the continent.&rdquo;
          </p>
          <p className="text-sasa-black/55 text-sm tracking-[0.2em] uppercase">
            Sasa Travel
          </p>
          <div className="w-12 h-px bg-sasa-brown/30 mx-auto mt-10" />
        </div>
      </section>

      {/* ── What We Create ────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/Pictures/general%20pics%20for%20the%20site%20use/AdobeStock_312250474.jpeg"
                alt="Africa landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                What We Create
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown leading-tight mb-8">
                Journeys That Connect You <br className="hidden lg:block" />
                to the True Africa
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                At Sasa Travel, we believe the most meaningful journeys are the
                ones that stay with you. We create thoughtful, personal
                experiences across Africa that connect you to its people,
                landscapes, and culture in a deeper way.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                Guided by an all-African team with deep local knowledge, every
                journey we craft is designed to feel seamless, elevated, and
                deeply connected to the spirit of Africa — so you leave with
                lasting memories and a real connection to the continent.
              </p>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations ──────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Where We Travel
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              Destinations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative overflow-hidden"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif font-bold text-2xl text-sasa-white leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-sasa-white/65 text-xs tracking-wide mt-1">
                      {dest.sub}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations" className="btn-secondary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Founder's Message ─────────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-[560px] overflow-hidden">
                <Image
                  src="/Pictures/general%20pics%20for%20the%20site%20use/harshil-gudka-pU-9BYqjhyo-unsplash%20(1).jpg"
                  alt="Emmanuel Kwizera, Founder"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sasa-white/60 text-xs tracking-[0.4em] uppercase mb-8">
                Founder&apos;s Message
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-white mb-8 leading-snug">
                Africa Has Always Remained the Place That Grounds Me Most
              </h2>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-5">
                I was born and raised in Rwanda, and although I now live between
                Los Angeles, London, and Rwanda, Africa has always remained the
                place that grounds me most.
              </p>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-5">
                Having traveled across the continent, I&apos;ve come to
                appreciate that what makes Africa unforgettable is not just its
                beauty, wildlife, or landscapes — but the feeling it gives you.
                The warmth, depth, rhythm, and sense of connection that is hard
                to find anywhere else. Every time I return, I feel it again.
                Home.
              </p>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-5">
                This company was born from a desire to share that feeling with
                others through journeys that are thoughtful, personal, and
                rooted in real experience. I want travelers to see Africa beyond
                the obvious — through its people, culture, landscapes, and the
                quiet moments that leave a lasting mark.
              </p>
              <p className="text-sasa-white/70 text-base leading-relaxed mb-10">
                It would be a privilege for me and my team to help shape that
                experience with you.
              </p>
              <div className="border-t border-sasa-white/15 pt-6">
                <p className="font-serif text-2xl text-sasa-white">Emmanuel</p>
                <p className="text-sasa-white/45 text-xs tracking-[0.2em] uppercase mt-1">
                  Founder &amp; CEO, Sasa Travel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Curated Escapes ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
                Special Journeys
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
                Curated Escapes
              </h2>
            </div>
            <Link
              href="/curated-escapes"
              className="hidden md:inline-block btn-secondary btn-sm"
            >
              View All Journeys
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {escapes.map((trip) => (
              <div key={trip.title} className="group flex flex-col">
                <div className="relative h-80 overflow-hidden mb-6 flex-shrink-0">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/55 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sasa-brown text-sasa-white text-xs tracking-[0.15em] uppercase px-3 py-1.5">
                      {trip.tag}
                    </span>
                  </div>
                </div>
                <p className="text-sasa-sec-brown text-xs tracking-[0.2em] uppercase mb-2">
                  {trip.region}
                </p>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-sasa-brown mb-4 leading-snug">
                  {trip.title}
                </h3>
                <p className="text-sasa-black/80 text-sm leading-relaxed mb-6 flex-1">
                  {trip.description}
                </p>
                <Link
                  href={trip.href}
                  className="inline-flex items-center gap-2 text-sasa-brown text-xs tracking-[0.15em] uppercase font-medium hover:opacity-60 transition-opacity duration-300 group/link"
                >
                  Explore Journey
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
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

          <div className="text-center mt-14 md:hidden">
            <Link href="/curated-escapes" className="btn-secondary">
              View All Journeys
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              What Travelers Say
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              Stories from the Field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-sasa-black/8 p-8 flex flex-col"
              >
                <svg
                  className="w-8 h-6 text-sasa-brown/30 mb-6 flex-shrink-0"
                  viewBox="0 0 32 24"
                  fill="currentColor"
                >
                  <path d="M0 24V13.7C0 5.7 4 1.1 12 0l1.3 2C9 3 6.8 5.1 5.8 8.3H12V24H0zm17.3 0V13.7c0-8 4-12.6 12-13.7l1.3 2c-4.3 1-6.5 3.1-7.5 6.3H30V24H17.3z" />
                </svg>
                <p className="text-sasa-brown font-serif text-xl italic mb-4 leading-snug">
                  &ldquo;{t.heading}&rdquo;
                </p>
                <p className="text-sasa-black/65 text-sm leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-sasa-black/8 pt-5">
                  <p className="text-sasa-black text-sm font-medium">Guest</p>
                  <p className="text-sasa-sec-brown text-xs tracking-wide mt-1">
                    {t.trip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-72 lg:h-[460px] overflow-hidden">
              <Image
                src="/Pictures/general%20pics%20for%20the%20site%20use/TANZANIA/AdobeStock_51767739.jpeg"
                alt="Community and landscape in Africa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                Our Impact
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown mb-6 leading-tight">
                Travel That Gives Back
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                We support youth-led small businesses in the communities
                connected to the places and safari regions our journeys touch —
                helping create more local opportunity alongside travel.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                To share Africa&apos;s wild beauty is a privilege we approach
                with care and responsibility. Meaningful travel should leave
                more than memories — it should deepen awareness of what is worth
                protecting.
              </p>
              <Link href="/our-impact" className="btn-secondary">
                Learn About Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── From the Journal ──────────────────────────────────────────── */}
      <section className="bg-sasa-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-sasa-black/45 text-xs tracking-[0.3em] uppercase mb-4">
                From the Journal
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
                Stories &amp; Insights
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden md:inline-block text-sasa-brown text-xs tracking-[0.2em] uppercase font-medium border-b border-sasa-brown pb-0.5 hover:opacity-60 transition-opacity"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {journalPosts.map((post) => (
              <Link key={post.title} href={post.href} className="group">
                <div className="relative h-64 overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-sasa-green text-xs tracking-[0.2em] uppercase mb-3">
                  {post.category} &middot; {post.date}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-sasa-brown leading-snug group-hover:opacity-70 transition-opacity duration-300">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Pictures/general%20pics%20for%20the%20site%20use/RWANDA/timothy-k-8eaxug2els0-unsplash.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-sasa-brown/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-white/60 text-xs tracking-[0.4em] uppercase mb-6">
            Ready to Explore?
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-sasa-white mb-8 leading-snug">
            Your Africa Journey <br className="hidden md:block" />
            Begins Here
          </h2>
          <p className="text-sasa-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Connect with our travel designers to start planning your bespoke
            African experience — crafted around your interests, timeline, and
            vision.
          </p>
          <Link href="/start-your-trip" className="btn-light btn-lg">
            Begin the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
