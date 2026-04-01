import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rwanda — Sasa Travel",
  description: "Rwanda destination page coming soon.",
};

export default function RwandaPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-sasa-white px-6">
      <div className="text-center max-w-md">
        <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
          Rwanda
        </p>
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-sasa-brown mb-4">
          Coming Soon
        </h1>
        <p className="text-sasa-black/80 text-base leading-relaxed mb-8">
          This destination page is currently under development. We're crafting
          something special for Rwanda. Check back soon.
        </p>
        <a href="/destinations" className="btn-primary btn-lg">
          Back to Destinations
        </a>
      </div>
    </div>
  );
}
