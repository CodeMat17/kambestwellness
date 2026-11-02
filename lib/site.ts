// Production origin of this landing page. Set NEXT_PUBLIC_SITE_URL in the
// deployment environment so canonical, sitemap and Open Graph URLs are correct.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "KAMBEST Tradomedical Services",
  shortName: "KAMBEST",
  url: siteUrl.replace(/\/+$/, ""),
  title: "KAMBEST Tradomedical Services | Traditional Wellness. Informed Choices.",
  description:
    "General health information, responsible approaches to wellbeing, and contact details for KAMBEST Tradomedical Services in Port Harcourt and Lekki/Ajah, Lagos.",
  contentUpdatedIso: "2026-10-31",
  mainWebsite: "https://kambestmeds.com",
  contentUpdated: "31 October 2026",
  whatsapp: {
    display: "0807 444 2605",
    // Prefilled chat text: points visitors to the main site first, and leaves
    // the cursor after "My enquiry:" so they can type a question instead.
    href: `https://wa.me/2348074442605?text=${encodeURIComponent(
      "Visit the KAMBEST main website for full details: www.kambestmeds.com\n\nHello KAMBEST, my enquiry is: ",
    )}`,
  },
  phones: [
    { label: "Call", display: "0803 359 1663", href: "tel:+2348033591663" },
    {
      label: "Alternative line",
      display: "0803 572 0060",
      href: "tel:+2348035720060",
    },
  ],
  locations: [
    {
      city: "Port Harcourt",
      state: "Rivers State",
      address:
        "3A Aggrey Road, opposite UBA Bank, by Lagos Bus Stop, Port Harcourt, Rivers State.",
      mapQuery: "3A Aggrey Road, Port Harcourt, Rivers State, Nigeria",
      streetAddress: "3A Aggrey Road, opposite UBA Bank, by Lagos Bus Stop",
      locality: "Port Harcourt",
    },
    {
      city: "Lekki / Ajah",
      state: "Lagos State",
      address:
        "Shop B9, Road 2, Ikota Shopping Complex, VGC, Lekki/Ajah, Lagos State.",
      mapQuery: "Ikota Shopping Complex, VGC, Lekki, Lagos, Nigeria",
      streetAddress: "Shop B9, Road 2, Ikota Shopping Complex, VGC",
      locality: "Lekki/Ajah",
    },
  ],
} as const;

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
