"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();
  const marquee = t.raw("marquee") as string[];

  const { scrollY } = useScroll();
  // Layered speeds give the parallax depth without feeling like a gimmick.
  const yTitle = useTransform(scrollY, [0, 500], [0, -56]);
  const ySub = useTransform(scrollY, [0, 500], [0, -96]);
  const yCta = useTransform(scrollY, [0, 500], [0, -120]);
  const yMark = useTransform(scrollY, [0, 700], [0, 180]);
  const rotateMark = useTransform(scrollY, [0, 700], [0, 38]);
  const fade = useTransform(scrollY, [0, 440], [1, 0]);

  const m = <T,>(value: T) => (reduce ? undefined : value);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
    >
      <div className="relative mx-auto w-full max-w-[80rem] px-6 md:px-10">
        {/* Drifting graphic mark */}
        <motion.div
          aria-hidden
          style={{ y: m(yMark), rotate: m(rotateMark) }}
          className="pointer-events-none absolute right-16 top-0 hidden md:block"
        >
          <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
            <circle
              cx="46"
              cy="46"
              r="45"
              stroke="var(--color-line-strong)"
            />
            <circle cx="46" cy="46" r="4" fill="var(--color-accent)" />
          </svg>
        </motion.div>

        <motion.h1
          style={{ y: m(yTitle), opacity: m(fade) }}
          className="max-w-[18ch] text-display font-medium text-balance"
        >
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </motion.h1>

        <motion.p
          style={{ y: m(ySub), opacity: m(fade) }}
          className="mt-7 max-w-[44rem] text-lead text-muted"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          style={{ y: m(yCta), opacity: m(fade) }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 text-[0.92rem] text-paper transition-opacity duration-200 hover:opacity-85"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#contact"
            className="link-underline text-[0.92rem] text-ink"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </div>

      {/* Light marquee, drifting horizontally */}
      <div className="mt-20 overflow-hidden border-y border-line py-4 md:mt-28">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              aria-hidden={dup === 1}
              className="flex shrink-0 items-center"
            >
              {marquee.map((word) => (
                <span
                  key={word}
                  className="flex items-center text-[1.05rem] text-faint"
                >
                  <span className="px-7">{word}</span>
                  <span className="h-1 w-1 rounded-full bg-accent/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
