import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start Your Trip — Sasa Travel",
  description:
    "Begin Conversation with Sasa Travel. Share a few details about the journey you're looking for and we'll match you with the right person on our team.",
};

export default function StartYourTripPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sasa-brown/80 via-sasa-brown/60 to-sasa-brown/80" />
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/Botswana/8776.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-sasa-brown/40 to-sasa-brown/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sasa-white/60 text-xs tracking-xl uppercase mb-6">
            Begin Conversation
          </p>
          <h1 className="font-serif font-semibold heading-xl text-sasa-white mb-6">
            Start Your Trip
          </h1>
          <p className="text-sasa-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Share a few details about the journey you&apos;re looking for and
            we&apos;ll match you with the right person on our team.
          </p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
            {/* Left — info */}
            <div className="lg:col-span-2 lg:pt-2">
              <p className="text-sasa-sec-brown text-xs tracking-md-plus uppercase mb-5">
                How It Works
              </p>
              <h2 className="font-serif font-semibold heading-md text-sasa-brown mb-7 leading-snug">
                From Your First Message to Your First Footstep
              </h2>
              <div className="space-y-8 mb-12">
                {[
                  {
                    step: "01",
                    title: "Share Your Details",
                    body: "Fill in the form with a little about yourself and what you're looking for. No commitment — just a conversation.",
                  },
                  {
                    step: "02",
                    title: "Meet Your Designer",
                    body: "We'll match you with the right person on our team — someone who knows your destination deeply and can craft a journey around you.",
                  },
                  {
                    step: "03",
                    title: "Shape Your Journey",
                    body: "Together, we'll design an itinerary that fits your interests, timeline, and travel style — crafted with local insight and personal care.",
                  },
                  {
                    step: "04",
                    title: "Travel with Ease",
                    body: "We handle every detail so you can arrive, exhale, and be fully present. From start to finish, we're here.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-5 items-start">
                    <span className="font-serif text-3xl text-sasa-brown/40 flex-shrink-0 leading-none">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-medium heading-xs text-sasa-brown mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-sasa-black/60 text-sm leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="border-t border-sasa-black/10 pt-8">
                <p className="text-sasa-black/40 text-xs tracking-md uppercase mb-5">
                  Other Ways to Connect
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sasa-black/40 text-xs uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@sasatravel.com"
                      className="text-sasa-brown text-sm hover:opacity-60 transition-opacity"
                    >
                      hello@sasatravel.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sasa-black/40 text-xs uppercase tracking-wider mb-1">
                      Office
                    </p>
                    <address className="not-italic text-sasa-brown text-sm leading-relaxed">
                      8424 Santa Monica Blvd
                      <br />
                      Los Angeles, CA 90069
                      <br />
                      United States
                    </address>
                  </div>
                  <div>
                    <p className="text-sasa-black/40 text-xs uppercase tracking-wider mb-1">
                      Response Time
                    </p>
                    <p className="text-sasa-brown text-sm">
                      We respond within 24–48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3" id="form">
              <ContactForm showTimeline={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reassurance strip ─────────────────────────────────────────── */}
      <section className="bg-sasa-brown py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-sasa-white/10">
            {[
              {
                title: "No Obligation",
                body: "This is the beginning of a conversation, not a commitment. We're here to help you explore what's possible.",
              },
              {
                title: "Tailored to You",
                body: "Every journey we design is personal. We listen first, then craft something that genuinely fits.",
              },
              {
                title: "African Expertise",
                body: "Every member of our team has deep local knowledge. These are places we know as home.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="md:px-10 first:md:pl-0 last:md:pr-0 text-center md:text-left"
              >
                <h3 className="font-serif font-semibold heading-xs text-sasa-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sasa-white/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
