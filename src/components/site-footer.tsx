import { useTranslations } from "next-intl";
import { STUDIO_NAME } from "@/lib/site";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-14 md:py-20">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <div>
          <p className="text-[0.95rem] font-medium tracking-tight text-ink">
            {STUDIO_NAME}
          </p>
          <p className="mt-2 max-w-[28rem] text-[0.95rem] text-muted">
            {t("tagline")}
          </p>
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
