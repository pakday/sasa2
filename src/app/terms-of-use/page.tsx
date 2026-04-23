import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — SASA Travel",
  description:
    "Legal terms and conditions for booking SASA curated travel experiences across Africa.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg text-amber-100">
            Please read these terms carefully before using SASA services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-6 text-gray-600">
              <strong>Last Updated: April 2026</strong>
            </div>

            {/* 1. Acceptance of Terms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the SASA website and booking our curated
                escapes, immersion experiences, or travel services, you agree to
                be bound by these Terms of Use. If you do not agree with any
                part of these terms, please do not use our services.
              </p>
            </div>

            {/* 2. Services Provided */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                2. Services Provided
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SASA offers curated travel experiences, escapes, and immersion
                programs to destinations across Africa, including Botswana,
                Kenya, Morocco, Rwanda, South Africa, and Tanzania. Our services
                include travel planning, accommodation arrangements, guided
                experiences, and related travel services.
              </p>
            </div>

            {/* 3. Booking & Reservations */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                3. Booking & Reservations
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  All bookings are subject to availability and confirmation by
                  SASA
                </li>
                <li>
                  A deposit is required to secure your booking (amount to be
                  confirmed at time of booking)
                </li>
                <li>
                  Prices are quoted in the currency specified on the website and
                  are subject to change
                </li>
                <li>
                  Final payment is due by the date specified in your booking
                  confirmation
                </li>
                <li>
                  Booking confirmation constitutes acceptance of these Terms of
                  Use
                </li>
              </ul>
            </div>

            {/* 4. Cancellation & Refunds */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                4. Cancellation & Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Cancellations must be made in writing to
                  Info@mountainwestchamber.org
                </li>
                <li>Refund policies vary by package and destination</li>
                <li>
                  Cancellations made more than 60 days before departure: 80%
                  refund
                </li>
                <li>
                  Cancellations made 30-60 days before departure: 50% refund
                </li>
                <li>
                  Cancellations made fewer than 30 days before departure:
                  Non-refundable
                </li>
                <li>
                  Travel insurance is strongly recommended to cover unforeseen
                  circumstances
                </li>
              </ul>
            </div>

            {/* 5. Traveler Responsibilities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                5. Traveler Responsibilities
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a traveler, you are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Ensuring your passport is valid for at least 6 months beyond
                  your travel dates
                </li>
                <li>Obtaining all necessary visas and travel documentation</li>
                <li>
                  Following all local laws and customs of destination countries
                </li>
                <li>Maintaining appropriate travel insurance</li>
                <li>
                  Informing SASA of any medical conditions or special
                  requirements in advance
                </li>
                <li>
                  Following all safety guidelines and instructions provided by
                  our guides
                </li>
              </ul>
            </div>

            {/* 6. Health & Safety */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                6. Health & Safety
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Travel to Africa involves potential health risks; consult your
                  healthcare provider
                </li>
                <li>
                  SASA is not liable for illness, injury, or death from
                  diseases, natural disasters, or unforeseen circumstances
                </li>
                <li>
                  All travelers participate in activities at their own risk
                </li>
                <li>
                  Travel insurance that covers medical evacuation is highly
                  recommended
                </li>
              </ul>
            </div>

            {/* 7. Limitations of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                7. Limitations of Liability
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SASA shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Flight delays, cancellations, or changes made by airlines
                </li>
                <li>Weather-related disruptions or natural disasters</li>
                <li>Political unrest, civil unrest, or acts of terrorism</li>
                <li>Illness, injury, or death</li>
                <li>Lost, damaged, or stolen personal belongings</li>
                <li>Changes to itineraries due to local conditions</li>
                <li>Any indirect, incidental, or consequential damages</li>
              </ul>
            </div>

            {/* 8. Itinerary Changes */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                8. Itinerary Changes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify itineraries due to weather, local
                conditions, or unforeseen circumstances. While we strive to
                deliver the experiences described, alternative arrangements may
                be made to ensure your safety and enjoyment.
              </p>
            </div>

            {/* 9. Intellectual Property */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                9. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All content on the SASA website, including images, text, videos,
                and designs, is the property of SASA or its licensors. You may
                not reproduce, distribute, or use this content without express
                written permission.
              </p>
            </div>

            {/* 10. User Conduct */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                10. User Conduct
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Engage in any unlawful activity</li>
                <li>Harass or discriminate against others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Post malicious or harmful content</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>

            {/* 11. Third-Party Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                11. Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SASA partners with airlines, hotels, and local operators. We are
                not responsible for their services, conduct, or policies. Your
                use of their services is subject to their terms and conditions.
              </p>
            </div>

            {/* 12. Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                12. Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms of Use shall be resolved
                through good-faith negotiation. If unresolved, disputes will be
                subject to local law and jurisdiction of the location from which
                SASA operates.
              </p>
            </div>

            {/* 13. Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms of Use, please contact:
              </p>
              <ul className="list-none pl-0 space-y-3 text-gray-700 mt-4">
                <li>
                  <strong>Email:</strong> Info@mountainwestchamber.org
                </li>
                <li>
                  <strong>Phone:</strong> 801-280-0595
                </li>
                <li>
                  <strong>Address:</strong> 4168 South 12600 South, Riverton, UT
                  84065
                </li>
              </ul>
            </div>

            {/* 14. Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                14. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SASA reserves the right to modify these Terms of Use at any
                time. Changes will be posted on this page with an updated "Last
                Updated" date. Your continued use of our services constitutes
                acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
