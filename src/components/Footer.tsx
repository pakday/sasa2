import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerNav = [
  { name: "Destinations", href: "/destinations" },
  { name: "Curated Escapes", href: "/curated-escapes" },
  { name: "Immersion", href: "/immersion" },
  { name: "About Us", href: "/about" },
  { name: "Our Impact", href: "/our-impact" },
  { name: "Journal", href: "/journal" },
  { name: "Start Your Trip", href: "/start-your-trip" },
];

const destinations = [
  "Botswana",
  "Kenya",
  "Rwanda",
  "Tanzania",
  "Zimbabwe",
  "South Africa",
  "Uganda",
  "Zambia",
  "Mozambique",
  "Zanzibar",
  "Morocco",
];

export default function Footer() {
  return (
    <footer className="bg-sasa-white text-sasa-brown border-t border-sasa-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo/sasa-travel-logo.png"
              alt="Sasa Travel"
              width={160}
              height={50}
              className="h-10 w-auto mb-6"
            />
            <p className="text-sasa-black/70 text-sm leading-relaxed max-w-xs">
              Experience Africa through the eyes of locals — personal journeys
              shaped by real connection, rich culture, and unforgettable
              wildlife.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sasa-black/70 text-xs tracking-sm-plus uppercase mb-5 font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sasa-brown text-sm hover:text-sasa-brown/70 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sasa-black/70 text-xs tracking-sm-plus uppercase mb-5 font-medium">
              Find Us
            </h4>
            <address className="not-italic text-sasa-brown text-sm leading-relaxed space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@sasatravel.co"
                  className="hover:text-sasa-brown/70 transition-colors"
                >
                  hello@sasatravel.co
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+13105550800"
                  className="hover:text-sasa-brown/70 transition-colors"
                >
                  +1 (310) 555-0800
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  8424 Santa Monica Blvd
                  <br />
                  Los Angeles, CA 90069
                  <br />
                  United States
                </p>
              </div>
            </address>
            <div className="mt-8">
              <Link
                href="/start-your-trip"
                className="inline-block btn-secondary"
              >
                Begin Conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sasa-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sasa-black/40 text-xs">
            © {new Date().getFullYear()} Sasa Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sasa-black/40 text-xs hover:text-sasa-brown transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sasa-black/40 text-xs hover:text-sasa-brown transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
