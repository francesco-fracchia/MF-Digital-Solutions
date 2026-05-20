import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <Reveal>
          <div className="grid md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="flex items-center gap-2.5 text-[0.85rem] text-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {t("sectionLabel")}
              </p>
              <h2 className="mt-5 text-title font-medium text-balance">
                {t("title")}
              </h2>
            </div>
            <div className="mt-8 md:col-span-7 md:col-start-6 md:mt-0">
              <p className="max-w-[40rem] text-lead text-muted">{t("para1")}</p>
              <p className="mt-6 max-w-[40rem] text-lead text-muted">
                {t("para2")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
