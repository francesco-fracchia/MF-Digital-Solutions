import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";

type ServiceItem = {
  title: string;
  body: string;
  deliverables: string[];
};

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <Reveal>
          <div className="max-w-[44rem]">
            <p className="flex items-center gap-2.5 text-[0.85rem] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {t("sectionLabel")}
            </p>
            <h2 className="mt-5 text-title font-medium">{t("title")}</h2>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="grid border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <div className="md:col-span-2">
                  <span className="text-[0.85rem] tabular-nums text-accent-strong">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-title font-medium md:col-span-4 md:mt-0">
                  {item.title}
                </h3>
                <div className="mt-4 md:col-span-6 md:mt-0">
                  <p className="max-w-[42rem] text-[1.05rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] text-faint">
                    {item.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-line-strong"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
