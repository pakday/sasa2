import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    category: "Destinations",
    date: "March 2026",
    title: "Into the Okavango: Why Botswana Belongs on Every Safari List",
    excerpt:
      "There are places in Africa that hold you differently. Botswana is one of them. The Okavango Delta — the world's largest inland delta — floods each year with water from Angola's highlands, drawing extraordinary concentrations of wildlife to its channels, islands, and floodplains.",
    image: "/images/Botswana/hyenas-laying-down-round.jpg",
    content: `
The Okavango Delta is not a destination you visit by accident. It requires intention, time, and a willingness to venture into one of Africa's most remote and pristine ecosystems.

When the annual flood arrives — typically between April and August — the delta transforms into a vast freshwater wilderness. Channels widen, islands appear, and the landscape becomes a maze of waterways that only make sense from the air. On the ground, it's intimate, quiet, and extraordinarily alive.

What makes Botswana special isn't just the wildlife. It's the silence. The space. The feeling that you've stepped outside the modern world entirely.

The Big Five are here — lions, buffalo, elephants, leopards, and rhinos — but so are countless other species that rarely get the attention they deserve. Wild dogs hunt across the floodplains. Hippos create their own roads through the channels. Birds arrive in numbers that make the sky itself seem alive.

For those seeking an authentic African experience, Botswana delivers what few other places can: wilderness in its truest form, guided by genuine expertise, and viewed without the crowds that define safari elsewhere on the continent.

This is why Botswana belongs on every safari list. Not for the convenience, but for the transformation it offers those brave enough to go.
    `,
  },
  {
    category: "Experiences",
    date: "February 2026",
    title: "Rwanda Revealed: Gorilla Trekking and Cultural Connection",
    excerpt:
      "There is nothing quite like standing in a misty volcanic forest, watching a mountain gorilla move through the undergrowth just metres away. Rwanda offers this encounter — and much more beyond it.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/RWANDA/AdobeStock_214680490.jpeg",
    content: `
Rwanda is a country of recovery and renewal. Less than three decades removed from devastating conflict, it has emerged as one of Africa's most stable and forward-thinking nations — and its tourism is beginning to reflect that maturity.

Volcanoes National Park, in the northwest, is home to some 600 mountain gorillas — nearly a third of the world's remaining population. Trekking to see them is not simply a wildlife encounter. It's a privilege, a responsibility, and an experience that stays with you long after you return.

The trek begins before dawn. Your guide leads you upward through dense forest, finding paths where tourists haven't walked in weeks. The air grows cooler. The forest thickens. Then, ahead, you hear the sound of branches breaking — not distant, but close. Very close.

The gorillas emerge not as photographs or films, but as beings. They move with purpose and grace. A silverback watches you with an intelligence that is both unsettling and profound. Infants play while mothers rest nearby. For that hour in their presence, the outside world feels infinitely far away.

But Rwanda is more than gorillas. Kigali's Genocide Memorial speaks to the country's difficult past and hard-won present. The shores of Lake Kivu offer quiet, lakeside beauty. The people themselves — warm, resilient, and forward-looking — define the Rwanda experience as much as any landscape.

This is a destination worth visiting not just for what you'll see, but for what you'll learn about human resilience and natural recovery.
    `,
  },
  {
    category: "Travel Philosophy",
    date: "January 2026",
    title: "The Art of Slow Travel: Why Less Is More on an African Safari",
    excerpt:
      "In a world that moves fast, Africa invites you to slow down. The best wildlife encounters, the richest cultural exchanges, the most meaningful moments — they rarely come to those who rush.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/TANZANIA/sergey-pesterev-DWXR-nAbxCk-unsplash.jpg",
    content: `
There is a temptation when planning an African safari to see as much as possible. To tick boxes: Serengeti, Okavango, Victoria Falls, Cape Town. To maximize the itinerary.

This instinct is understandable. Africa is vast, and the time we can afford away from daily life is limited. But some of the most profound travel experiences come from the opposite approach: staying longer in fewer places, slowing down, and allowing the landscape — and its rhythms — to work on you.

A four-hour game drive in the morning yields wildlife sightings. A ten-hour day spent in one region, with quiet afternoon hours and evening time to simply sit and absorb, yields something deeper: connection.

Slow travel isn't about doing less. It's about doing things more fully. It's about having a conversation with your guide that lasts longer than the drive between two lodges. It's about returning to a spot you loved on the first day of your visit and experiencing it differently under different light, with different animals, with a deeper understanding of the ecosystem.

It's about reading a book under a baobab tree without checking the time. It's about understanding that the best moments are rarely scheduled.

For those willing to embrace it, slow travel transforms a safari from a destination you check off your list into an experience that becomes part of how you see the world.
    `,
  },
  {
    category: "Destinations",
    date: "December 2025",
    title: "Tanzania's Greatest Stages: Serengeti, Ngorongoro & Beyond",
    excerpt:
      "Tanzania holds some of Africa's most iconic landscapes. The Serengeti stretches seemingly without end beneath open skies. Ngorongoro Crater shelters an entire ecosystem within ancient volcanic walls.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/TANZANIA/Favorite%201.jpeg",
    content: `
Tanzania is a masterclass in African geography. Within its borders exist landscapes so distinct they might be different continents: the Serengeti's endless plains, the Ngorongoro Crater's contained ecosystem, Mount Kilimanjaro's snow-capped peak rising from savanna, and Zanzibar's tropical islands.

The Serengeti is perhaps Africa's most famous ecosystem — a two-million-hectare expanse of grassland, woodland, and volcanic rock where the annual wildebeest migration remains one of nature's greatest spectacles. But the Serengeti offers more than migration season. Year-round, it is a stage where the drama of predator and prey plays out constantly.

Ngorongoro Crater, meanwhile, is something entirely different. Formed by a volcanic collapse two million years ago, it contains a self-contained ecosystem with its own lion, elephant, buffalo, and zebra populations. The crater's steep walls create a natural boundary that makes it feel like visiting another planet.

For those with time and curiosity, Mount Kilimanjaro offers the ultimate high-altitude challenge. At 5,895 meters, it is Africa's highest peak — and despite its altitude, the climbing routes are accessible to those willing to take time with acclimatization and steady effort.

Tanzania rewards exploration. It rewards those who don't try to see everything in a week, but rather choose a few places and fall into them deeply.
    `,
  },
  {
    category: "Destinations",
    date: "November 2025",
    title: "South Africa: Safari, City, and Everything Between",
    excerpt:
      "Few destinations on the continent offer such breadth. Start with the Big Five in Kruger, move through the winelands of Stellenbosch, and end in Cape Town — one of the world's great cities.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/SOUTH%20AFRICA/marina-zvada-wkHsJN_AWXc-unsplash.jpg",
    content: `
South Africa's diversity is perhaps its greatest strength as a travel destination. Few places in the world can offer safari, mountains, vineyards, and a world-class city all within driving distance of one another.

Kruger National Park remains one of Africa's premier safari destinations. Its size — nearly two million hectares — ensures that even during peak seasons, there are moments of profound solitude and wildlife encounter.

The Winelands of Stellenbosch and Franschhoek offer a completely different rhythm: vineyard visits, farm-to-table dining, and landscapes that feel more Mediterranean than African. The wine quality rivals the world's finest wine regions, and the setting — mountains rising dramatically from the vineyards — is stunning.

And then there is Cape Town. Perched on two oceans, beneath Table Mountain, it is a city that feels confident in itself. The food scene rivals any major world city. The museums tell the full, complex story of South African history. The waterfront offers cosmopolitan energy. The nearby Cape Peninsula provides dramatic coastal scenery.

For first-time visitors to Africa seeking a diverse experience and creature comforts alongside adventure, South Africa delivers.
    `,
  },
  {
    category: "Insights",
    date: "October 2025",
    title: "Morocco: Where Ancient Medinas Meet the Saharan Dunes",
    excerpt:
      "Morocco is its own world — a place where centuries-old cities, mountain passes, desert dunes, and Atlantic coastlines all exist within the same country. It rewards slow exploration and an open curiosity.",
    image:
      "/images/general%20pics%20for%20the%20site%20use/MOROCCO/giuseppe-gurrieri-bcWFbTYge7I-unsplash.jpg",
    content: `
Morocco feels like a different continent entirely from sub-Saharan Africa — and that's part of its magic. The language is Arabic (often French too). The architecture carries North African and Islamic traditions. The food is distinctive, with spices and preparations found nowhere else.

Marrakech's medina — the old walled city — is a sensory overload in the best possible way. Narrow streets open into hidden courtyards. The smell of tagines cooking drifts through the air. The call to prayer echoes across rooftops. It's disorienting, energizing, and utterly captivating.

The Atlas Mountains, which cut through the country's interior, offer trekking routes that lead to Berber villages where traditional ways of life continue largely unchanged. The Sahara, meanwhile, promises nights under stars so numerous they almost seem unreal.

The coastal cities of Essaouira and Casablanca provide respite from the desert and mountains — beaches, fresh seafood, and a more relaxed pace.

Morocco rewards those willing to venture beyond the standard tourist trail. Hire a guide, learn some Arabic phrases, eat what's placed in front of you, and sit for tea. Those who engage with Morocco fully discover one of the world's most thrilling destinations.
    `,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(
    (p) =>
      p.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") === slug,
  );

  return {
    title: post ? `${post.title} — Sasa Travel` : "Journal — Sasa Travel",
    description: post?.excerpt || "Read stories and insights from Sasa Travel.",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find(
    (p) =>
      p.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") === slug,
  );

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-sasa-brown mb-4">
            Post not found
          </h1>
          <Link href="/journal" className="text-sasa-brown hover:opacity-60">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero / Header ──────────────────────────────────────────── */}
      <section
        className="relative h-96 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/95 via-sasa-brown/30 to-transparent" />

        <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20">
          <Link
            href="/journal"
            className="flex items-center gap-2 text-sasa-white hover:text-sasa-white/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 text-sasa-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.15em] uppercase mb-4 text-sasa-white/80">
              {post.category}
            </p>
            <h1 className="font-serif font-semibold text-4xl md:text-5xl leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-sasa-white/70 text-sm">{post.date}</p>
          </div>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────────────── */}
      <section className="bg-sasa-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-sasa-black/70 text-base leading-relaxed whitespace-pre-wrap mb-8">
            {post.content}
          </p>

          {/* ── More Stories ──────────────────────────────────────── */}
          <div className="mt-16 pt-12 border-t border-sasa-black/10">
            <h3 className="font-serif font-semibold text-2xl text-sasa-brown mb-8">
              More Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts
                .filter((p) => p.title !== post.title)
                .slice(0, 2)
                .map((relatedPost) => {
                  const relatedSlug = relatedPost.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "");
                  return (
                    <Link
                      key={relatedPost.title}
                      href={`/journal/${relatedSlug}`}
                      className="group"
                    >
                      <div className="relative h-40 overflow-hidden rounded-sm mb-4">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="font-serif font-semibold text-lg text-sasa-brown mb-2 group-hover:text-sasa-brown/70 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sasa-black/60 text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* ── CTA ────────────────────────────────────────────────── */}
          <div className="mt-16 pt-12 border-t border-sasa-black/10 text-center">
            <p className="text-sasa-black/60 text-sm mb-6">
              Ready to visit {post.title.split(":")[0]}?
            </p>
            <Link href="/start-your-trip" className="btn-secondary">
              Start Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
