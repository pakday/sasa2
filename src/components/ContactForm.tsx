"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+250", label: "🇷🇼 +250" },
  { code: "+267", label: "🇧🇼 +267" },
  { code: "+254", label: "🇰🇪 +254" },
  { code: "+255", label: "🇹🇿 +255" },
  { code: "+27", label: "🇿🇦 +27" },
  { code: "+263", label: "🇿🇼 +263" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+212", label: "🇲🇦 +212" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+81", label: "🇯🇵 +81" },
  { code: "+86", label: "🇨🇳 +86" },
];

const DESTINATIONS = [
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
  "Multiple Destinations",
];

const INTERESTS = [
  "Wildlife Safari",
  "Gorilla Trekking",
  "Cultural Experiences",
  "Adventure & Trekking",
  "Honeymoon",
  "Family Travel",
  "Fly-In Safari",
  "Photography",
  "Beach & Relaxation",
  "Luxury Lodges",
  "Community Immersion",
];

interface ContactFormProps {
  showTimeline?: boolean;
}

export default function ContactForm({
  showTimeline = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    destinations: "",
    interests: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-12 h-12 border-2 border-sasa-brown rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-5 h-5 text-sasa-brown"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-sasa-brown mb-4">
          Thank you — we&apos;ll be in touch soon.
        </h3>
        <p className="text-sasa-black/80 text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ve received your details and will match you with the right
          person on our team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      {/* ── Personal Information ───────────────────────────────────── */}
      <div>
        <p className="text-sasa-black text-xs tracking-[0.35em] uppercase mb-6 font-medium">
          Personal Information
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm text-sasa-black mb-2"
            >
              First Name <span className="text-sasa-red">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              className="w-full border border-sasa-black/20 bg-transparent px-4 py-3 text-sasa-black text-sm placeholder-sasa-black/25 focus:outline-none focus:border-sasa-brown transition-colors"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm text-sasa-black mb-2"
            >
              Last Name <span className="text-sasa-red">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              className="w-full border border-sasa-black/20 bg-transparent px-4 py-3 text-sasa-black text-sm placeholder-sasa-black/25 focus:outline-none focus:border-sasa-brown transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-sasa-black mb-2"
            >
              Email <span className="text-sasa-red">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full border border-sasa-black/20 bg-transparent px-4 py-3 text-sasa-black text-sm placeholder-sasa-black/25 focus:outline-none focus:border-sasa-brown transition-colors"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm text-sasa-black mb-2"
            >
              Contact Number <span className="text-sasa-red">*</span>
            </label>
            <div className="flex border border-sasa-black/20 focus-within:border-sasa-brown transition-colors">
              <div className="relative flex-shrink-0">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  aria-label="Country code"
                  className="appearance-none bg-transparent pl-3 pr-7 py-3 text-sasa-black text-sm focus:outline-none cursor-pointer"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-sasa-black/50 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="w-px bg-sasa-black/15 self-stretch" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel-national"
                placeholder={form.countryCode}
                className="flex-1 bg-transparent px-4 py-3 text-sasa-black text-sm placeholder-sasa-black/25 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Trip Information ──────────────────────────────────────── */}
      <div>
        <p className="text-sasa-black text-xs tracking-[0.35em] uppercase mb-6 font-medium">
          Trip Information
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Destinations */}
          <div>
            <label
              htmlFor="destinations"
              className="block text-sm text-sasa-black mb-2"
            >
              Destinations <span className="text-sasa-red">*</span>
            </label>
            <div className="relative">
              <select
                id="destinations"
                name="destinations"
                required
                value={form.destinations}
                onChange={handleChange}
                className="w-full appearance-none border border-sasa-black/20 bg-transparent px-4 py-3 pr-10 text-sasa-black text-sm focus:outline-none focus:border-sasa-brown transition-colors cursor-pointer"
              >
                <option value="" disabled>
                  Select destinations...
                </option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sasa-black/50 pointer-events-none"
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
          </div>

          {/* Interests */}
          <div>
            <label
              htmlFor="interests"
              className="block text-sm text-sasa-black mb-2"
            >
              Interests <span className="text-sasa-red">*</span>
            </label>
            <div className="relative">
              <select
                id="interests"
                name="interests"
                required
                value={form.interests}
                onChange={handleChange}
                className="w-full appearance-none border border-sasa-black/20 bg-transparent px-4 py-3 pr-10 text-sasa-black text-sm focus:outline-none focus:border-sasa-brown transition-colors cursor-pointer"
              >
                <option value="" disabled>
                  Select interests...
                </option>
                {INTERESTS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sasa-black/50 pointer-events-none"
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
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm text-sasa-black mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Type here..."
            className="w-full border border-sasa-black/20 bg-transparent px-4 py-3 text-sasa-black text-sm placeholder-sasa-black/25 focus:outline-none focus:border-sasa-brown transition-colors resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      <div>
        <button type="submit" className="btn-primary btn-lg">
          Submit
        </button>
      </div>

      <p className="text-xs text-sasa-black/40 leading-relaxed">
        By submitting this form, you agree to hear from us about Sasa Travel.
        You can unsubscribe at any time.
      </p>
    </form>
  );
}
