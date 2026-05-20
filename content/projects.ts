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
  /** Live site hostname, e.g. "hvcc.it". Optional. */
  url?: string;
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
    slug: "hvcc",
    client: "HVCC",
    title: {
      it: "Sito istituzionale trilingue",
      en: "Trilingual corporate site",
    },
    sector: {
      it: "Engineering alta tensione",
      en: "High-voltage engineering",
    },
    year: 2024,
    description: {
      it: "Sito istituzionale trilingue per una società di consulenza di engineering ad alta tensione attiva in 36 paesi. Architettura editoriale, contenuti strutturati, performance e accessibilità prime di tutto.",
      en: "Trilingual corporate site for a high-voltage engineering consultancy active in 36 countries. Editorial architecture, structured content, performance and accessibility first.",
    },
    url: "hvcc.it",
    cover: "/projects/hvcc-cover.svg",
    gallery: ["/projects/hvcc-1.svg", "/projects/hvcc-2.svg"],
    tags: ["Design", "Next.js", "Trilingue IT/EN/ES", "MDX"],
    accent: "#1e3a5f",
  },
  {
    slug: "ff-phone-lab",
    client: "FF Phone Lab",
    title: {
      it: "Store Shopify con sync eBay",
      en: "Shopify store with eBay sync",
    },
    sector: {
      it: "eCommerce smartphone",
      en: "Smartphone eCommerce",
    },
    year: 2025,
    description: {
      it: "Store Shopify per la vendita di smartphone ricondizionati e ricambi, con sincronizzazione automatica del catalogo eBay tramite script Python e integrazione delle immagini. Estetica dark tech, sezioni custom in Liquid, schede prodotto ottimizzate per la conversione.",
      en: "Shopify store for refurbished smartphones and spare parts, with automatic eBay catalogue sync via Python scripts and image integration. Dark-tech aesthetic, custom Liquid sections, product pages tuned for conversion.",
    },
    url: "ffphonelab.it",
    cover: "/projects/ff-phone-lab-cover.svg",
    gallery: [
      "/projects/ff-phone-lab-1.svg",
      "/projects/ff-phone-lab-2.svg",
    ],
    tags: ["Shopify", "Liquid", "eBay Browse API", "Sync Python"],
    accent: "#16181b",
  },
];
