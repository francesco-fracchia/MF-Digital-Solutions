"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/** Switches locale via soft navigation — no full page reload. */
export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-1 text-[0.8rem] tracking-wide"
      role="group"
      aria-label={t("switchLanguage")}
    >
      {routing.locales.map((loc, i) => {
        const active = loc === locale;
        return (
          <span key={loc} className="flex items-center gap-1">
            {i > 0 && <span className="text-line-strong">/</span>}
            <button
              type="button"
              onClick={() => router.replace(pathname, { locale: loc })}
              aria-current={active ? "true" : undefined}
              className={
                active
                  ? "text-ink"
                  : "text-faint transition-colors duration-200 hover:text-ink"
              }
            >
              {loc.toUpperCase()}
            </button>
          </span>
        );
      })}
    </div>
  );
}
