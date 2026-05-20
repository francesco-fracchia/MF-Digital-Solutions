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
      it: "Consulenza di engineering",
      en: "Engineering consultancy",
    },
    year: 2024,
    description: {
      it: "Sito istituzionale trilingue (italiano, inglese, spagnolo) per una società di consulenza di engineering ad alta tensione con clienti in 36 paesi. Architettura editoriale, contenuti strutturati in MDX, particolare attenzione a performance e accessibilità.",
      en: "Trilingual corporate site (Italian, English, Spanish) for a high-voltage engineering consultancy with clients in 36 countries. Editorial architecture, content structured in MDX, particular attention to performance and accessibility.",
    },
    url: "hvcc.it",
    cover: "/projects/hvcc-cover.svg",
    gallery: ["/projects/hvcc-1.svg", "/projects/hvcc-2.svg"],
    tags: ["Next.js", "MDX", "Trilingue"],
    accent: "#1e3a5f",
  },
  {
    slug: "ff-phone-lab",
    client: "FF Phone Lab",
    title: {
      it: "Store Shopify con sincronizzazione eBay",
      en: "Shopify store with eBay sync",
    },
    sector: {
      it: "eCommerce — riparazione e rivendita smartphone",
      en: "eCommerce — smartphone repair and resale",
    },
    year: 2025,
    description: {
      it: "Store Shopify per la vendita di smartphone ricondizionati e ricambi. Tema personalizzato, sezioni custom in Liquid e sincronizzazione automatica del catalogo eBay tramite script Python con integrazione delle immagini di prodotto.",
      en: "Shopify store selling refurbished smartphones and spare parts. Custom theme, bespoke Liquid sections and automatic eBay catalogue synchronisation via Python scripts, including product image integration.",
    },
    url: "ffphonelab.it",
    cover: "/projects/ff-phone-lab-cover.svg",
    gallery: [
      "/projects/ff-phone-lab-1.svg",
      "/projects/ff-phone-lab-2.svg",
    ],
    tags: ["Shopify", "Liquid", "eBay API", "Python"],
    accent: "#1a1a1a",
  },
];
