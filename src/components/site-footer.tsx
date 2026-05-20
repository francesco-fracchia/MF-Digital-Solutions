import { useTranslations } from "next-intl";
import { STUDIO_NAME, SOCIAL_LINKS } from "@/lib/site";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-14 md:py-20">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[0.95rem] font-medium tracking-tight text-ink">
              {STUDIO_NAME}
            </p>
            <p className="mt-2 max-w-[28rem] text-[0.95rem] text-muted">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label={t("socialLabel")} className="flex gap-7">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-[0.95rem] text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[0.85rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {STUDIO_NAME}. {t("rights")}
          </p>
          <p className="tabular-nums">{t("vat")}</p>
          <a href="#top" className="link-underline text-faint hover:text-ink">
            {t("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
