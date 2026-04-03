import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const countryPages = [
      "botswana",
      "kenya",
      "rwanda",
      "tanzania",
      "uganda",
      "mozambique",
      "south-africa",
      "zimbabwe",
      "zambia",
      "morocco",
      "zanzibar",
    ];
    return countryPages.map((country) => ({
      source: `/destinations/${country}`,
      destination: "/destinations",
      permanent: false,
    }));
  },
};

export default nextConfig;
