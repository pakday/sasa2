import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SASA Travel",
  description:
    "Learn how SASA protects your personal information and handles your data when you use our travel services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-blue-100">
            Your privacy is important to us. Learn how we protect your data.
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

            {/* 1. Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SASA ("we," "us," or "our") operates the SASA website and travel
                services. This Privacy Policy explains how we collect, use,
                disclose, and protect information about you when you visit our
                website or book travel experiences with us.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
                2.1 Information You Provide Directly
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When you use SASA services or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, nationality, date of birth
                </li>
                <li>
                  <strong>Travel Information:</strong> Passport details, visa
                  information, dietary restrictions, medical conditions,
                  emergency contacts
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details and
                  billing address (processed securely through payment
                  processors)
                </li>
                <li>
                  <strong>Communication:</strong> Messages, inquiries, and
                  feedback you send us
                </li>
                <li>
                  <strong>Contact Form Data:</strong> Information submitted
                  through "Start Your Trip" or contact forms
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
                2.2 Information Collected Automatically
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When you visit our website, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Browser & Device Information:</strong> Browser type,
                  IP address, device type, operating system
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent, links
                  clicked, referral source
                </li>
                <li>
                  <strong>Cookies & Tracking:</strong> Simple analytics to
                  understand how visitors use our site
                </li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Process and manage your travel bookings and reservations
                </li>
                <li>Send confirmation, updates, and itinerary details</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Collect payment and send invoices</li>
                <li>Improve our website and services</li>
                <li>Send promotional updates (only if you've opted in)</li>
                <li>Comply with legal obligations</li>
                <li>Ensure safety and prevent fraud</li>
              </ul>
            </div>

            {/* 4. Who We Share Your Information With */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                4. Who We Share Your Information With
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> Airlines, hotels, lodges,
                  local tour operators, and activity providers necessary to
                  deliver your experience
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure third-party
                  payment providers
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Government authorities
                  when required by law
                </li>
                <li>
                  <strong>Business Partners:</strong> Only with your consent
                </li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We do not sell your personal information to third parties.
              </p>
            </div>

            {/* 5. Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                5. Data Security
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  We use industry-standard encryption (SSL/TLS) to protect
                  personal and payment information
                </li>
                <li>
                  Payment information is processed through secure, PCI-compliant
                  payment processors
                </li>
                <li>
                  We maintain reasonable physical, electronic, and procedural
                  security measures
                </li>
                <li>
                  However, no method of transmission over the internet is 100%
                  secure; use at your own risk
                </li>
              </ul>
            </div>

            {/* 6. Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                6. Your Rights
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your information (subject to legal
                  retention requirements)
                </li>
                <li>Opt out of promotional communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                To exercise these rights, contact us at
                Info@mountainwestchamber.org.
              </p>
            </div>

            {/* 7. Cookies & Tracking Technologies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                7. Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our website uses:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Essential Cookies:</strong> Required for website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Google Analytics to
                  understand visitor behavior and improve our site
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> To display relevant ads
                  (only if you've consented)
                </li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                You can refuse cookies through your browser settings, though
                some website features may not function properly.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to external websites. We are not
                responsible for their privacy practices. Please review their
                privacy policies before providing personal information.
              </p>
            </div>

            {/* 9. Promotional Communications */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                9. Promotional Communications
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We only send promotional emails if you've opted in</li>
                <li>Each promotional email includes an unsubscribe option</li>
                <li>
                  You can manage communication preferences by contacting us
                </li>
                <li>
                  We may send non-promotional service updates (itinerary
                  changes, booking confirmations) regardless of subscription
                  status
                </li>
              </ul>
            </div>

            {/* 10. International Data Transfers */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you are located outside the United States, be aware that your
                information may be transferred to, stored in, and processed in
                the United States. By using SASA services, you consent to this
                transfer.
              </p>
            </div>

            {/* 11. Data Retention */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                11. Data Retention
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Booking and payment information is retained as long as
                  necessary for legal and business purposes
                </li>
                <li>
                  Personal information may be retained longer if required by law
                </li>
                <li>
                  You may request deletion of your information at any time
                </li>
              </ul>
            </div>

            {/* 12. Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                12. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed toward children under 18. We do
                not knowingly collect information from children. If we learn
                we've collected information from a child, we will delete it
                promptly.
              </p>
            </div>

            {/* 13. California Privacy Rights (CCPA) */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                13. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Know what personal information we collect and how it's used
                </li>
                <li>Delete personal information we hold about you</li>
                <li>Opt out of the sale or sharing of your information</li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                To exercise California privacy rights, contact
                Info@mountainwestchamber.org.
              </p>
            </div>

            {/* 14. Changes to This Privacy Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                14. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy occasionally. Changes will be
                noted with an updated "Last Updated" date. Your continued use of
                our website and services constitutes acceptance of changes.
              </p>
            </div>

            {/* 15. Contact Us */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                15. Contact Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have questions about our Privacy Policy or how we handle
                your information:
              </p>
              <ul className="list-none pl-0 space-y-3 text-gray-700">
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

            {/* Closing */}
            <div className="border-t-2 border-gray-200 pt-8 mt-12">
              <p className="text-gray-700 leading-relaxed italic">
                We are committed to protecting your privacy and ensuring a
                secure, transparent experience with SASA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
