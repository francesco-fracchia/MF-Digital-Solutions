"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";

type Status = "idle" | "sending" | "success";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    // No backend: simulate the round-trip so the success flow is real.
    window.setTimeout(() => setStatus("success"), 900);
  }

  const fieldClass =
    "w-full border-b border-line bg-transparent py-2.5 text-[1rem] text-ink outline-none transition-colors duration-200 placeholder:text-faint focus:border-ink";
  const labelClass = "block text-[0.85rem] text-muted";

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[80rem] gap-y-14 px-6 md:grid-cols-12 md:gap-x-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[0.85rem] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {t("sectionLabel")}
            </p>
            <h2 className="mt-5 max-w-[14ch] text-title font-medium text-balance">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-[32rem] text-lead text-muted">
              {t("body")}
            </p>

            <div className="mt-10">
              <p className="text-[0.85rem] text-faint">{t("directLabel")}</p>
              <a
                href={`mailto:${t("email")}`}
                className="link-underline mt-1 inline-block text-[1.15rem] text-ink"
              >
                {t("email")}
              </a>
            </div>

            <dl className="mt-10 space-y-1 border-t border-line pt-7 text-[0.95rem]">
              <dt className="text-faint">{t("infoLabel")}</dt>
              <dd className="text-ink">{t("location")}</dd>
              <dd className="text-ink">{t("mode")}</dd>
              <dd className="text-ink">{t("availability")}</dd>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-7">
          <Reveal delay={0.05}>
            {status === "success" ? (
              <div className="flex h-full flex-col justify-center border border-line p-10 md:p-14">
                <h3 className="text-title font-medium">{t("successTitle")}</h3>
                <p className="mt-3 max-w-[36rem] text-lead text-muted">
                  {t("successBody")}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="link-underline mt-8 self-start text-[0.95rem] text-ink"
                >
                  {t("reset")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={t("form.namePlaceholder")}
                      className={`mt-2 ${fieldClass}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t("form.emailPlaceholder")}
                      className={`mt-2 ${fieldClass}`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    {t("form.subject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder={t("form.subjectPlaceholder")}
                    className={`mt-2 ${fieldClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t("form.messagePlaceholder")}
                    className={`mt-2 resize-none ${fieldClass}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="justify-self-start rounded-full bg-ink px-6 py-3 text-[0.92rem] text-paper transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
                >
                  {status === "sending" ? t("form.sending") : t("form.send")}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
