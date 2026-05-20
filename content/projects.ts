import type { Locale } from "@/i18n/routing";

/** A string available in every supported locale. */
export type Localized = Record<Locale, string>;

export type Project = {
  /** URL-safe id, also used to look up assets. */
  slug: string;
  /** Client / brand name. Shown as-is, not translated. */
  client: string;
  /** Short project title. */
  title: Localized;
  /** Industry / sector. */
  sector: Localized;
  year: number;
  /** One-line description. */
  description: Localized;
  /** Cover image, served from /public. */
  cover: string;
  /** One or two supporting images, served from /public. */
  gallery: string[];
  /** Scope tags, kept language-neutral on purpose. */
  tags: string[];
  /** Solid colour used for the placeholder visual. */
  accent: string;
};

/**
 * Portfolio entries.
 *
 * To add a project: append one entry here and drop its SVGs in
 * /public/projects/. No component changes are required.
 */
export const projects: Project[] = [
  {
    slug: "lente-studio",
    client: "Lente Studio",
    title: {
      it: "Vetrina e configuratore",
      en: "Storefront and configurator",
    },
    sector: { it: "Occhiali", en: "Eyewear" },
    year: 2025,
    description: {
      it: "Una vetrina sobria e un configuratore per provare montature e lenti prima dell'acquisto.",
      en: "A restrained storefront and a configurator to try frames and lenses before buying.",
    },
    cover: "/projects/lente-studio-cover.svg",
    gallery: ["/projects/lente-studio-1.svg", "/projects/lente-studio-2.svg"],
    tags: ["Design", "Next.js", "Shopify"],
    accent: "#d85a30",
  },
  {
    slug: "poggio-sereno",
    client: "Poggio Sereno",
    title: {
      it: "Racconto e vendita diretta",
      en: "Story and direct sales",
    },
    sector: { it: "Cantina vinicola", en: "Winery" },
    year: 2024,
    description: {
      it: "Il racconto della tenuta toscana e la vendita diretta di ogni annata.",
      en: "The story of the Tuscan estate and direct sales of every vintage.",
    },
    cover: "/projects/poggio-sereno-cover.svg",
    gallery: [
      "/projects/poggio-sereno-1.svg",
      "/projects/poggio-sereno-2.svg",
    ],
    tags: ["Design", "Sanity", "E-commerce"],
    accent: "#3e5a41",
  },
  {
    slug: "northbound",
    client: "Northbound",
    title: {
      it: "Sito e documentazione",
      en: "Marketing site and docs",
    },
    sector: { it: "Piattaforma SaaS B2B", en: "B2B SaaS platform" },
    year: 2025,
    description: {
      it: "Il sito di prodotto e l'area documentazione per una piattaforma di logistica.",
      en: "The product site and docs area for a logistics platform.",
    },
    cover: "/projects/northbound-cover.svg",
    gallery: ["/projects/northbound-1.svg", "/projects/northbound-2.svg"],
    tags: ["Web app", "Design system", "Docs"],
    accent: "#3c4654",
  },
];
