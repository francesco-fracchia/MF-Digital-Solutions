import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  // Default locale (it) lives at "/", other locales are prefixed (e.g. "/en").
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
