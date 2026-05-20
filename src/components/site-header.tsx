"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { STUDIO_NAME } from "@/lib/site";

export function SiteHeader() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: t("work") },
    { href: "#services", label: t("services") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-colors duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[80rem] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-[0.95rem] font-medium tracking-tight text-ink"
        >
          {STUDIO_NAME}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[0.9rem] text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <span className="h-4 w-px bg-line-strong" aria-hidden />
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-5 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="text-[0.9rem] text-ink"
          >
            {open ? tc("close") : tc("menu")}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="mx-auto flex w-full max-w-[80rem] flex-col px-6 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[1.05rem] text-ink last:border-b-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
