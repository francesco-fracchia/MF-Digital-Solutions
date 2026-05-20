import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] w-full max-w-[80rem] flex-col justify-center px-6 md:px-10"
    >
      <p className="text-[0.85rem] tabular-nums text-accent-strong">404</p>
      <h1 className="mt-5 max-w-[18ch] text-display font-medium text-balance">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-[40rem] text-lead text-muted">{t("body")}</p>
      <Link
        href="/"
        className="link-underline mt-9 self-start text-[0.95rem] text-ink"
      >
        {t("home")}
      </Link>
    </main>
  );
}
