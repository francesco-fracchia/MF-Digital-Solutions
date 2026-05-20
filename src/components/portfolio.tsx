import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { projects } from "@content/projects";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale() as Locale;

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <Reveal>
          <div className="max-w-[44rem]">
            <p className="flex items-center gap-2.5 text-[0.85rem] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {t("sectionLabel")}
            </p>
            <h2 className="mt-5 text-title font-medium">{t("title")}</h2>
            <p className="mt-3 text-lead text-muted">{t("intro")}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 md:mt-16">
        {projects.map((project, i) => {
          const images = [
            { src: project.cover, w: 1600, h: 1000, speed: 0.07 },
            { src: project.gallery[0], w: 1200, h: 1500, speed: -0.05 },
            { src: project.gallery[1], w: 1600, h: 1000, speed: 0.09 },
          ].filter((img) => Boolean(img.src));

          return (
            <div key={project.slug} className="border-t border-line">
              <div className="mx-auto grid w-full max-w-[80rem] gap-y-10 px-6 md:grid-cols-12 md:items-start md:gap-x-12 md:px-10">
                {/* Sticky meta */}
                <div className="md:col-span-5 md:sticky md:top-28 md:self-start md:py-20">
                  <p className="text-[0.8rem] tabular-nums text-accent-strong">
                    {t("indexLabel")} {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-title font-medium">
                    {project.client}
                  </h3>
                  <p className="mt-2 text-[1.05rem] text-muted">
                    {project.title[locale]}
                  </p>

                  <p className="mt-7 max-w-[34rem] text-[1.05rem] leading-relaxed">
                    {project.description[locale]}
                  </p>

                  {project.url && (
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-5 inline-flex items-center gap-1.5 text-[0.95rem] text-ink"
                    >
                      <span className="text-faint">{t("labels.visit")}</span>
                      {project.url}
                      <span aria-hidden>↗</span>
                    </a>
                  )}

                  <dl className="mt-9 grid grid-cols-2 gap-y-5 border-t border-line pt-7 text-[0.9rem]">
                    <div>
                      <dt className="text-faint">{t("labels.sector")}</dt>
                      <dd className="mt-1 text-ink">{project.sector[locale]}</dd>
                    </div>
                    <div>
                      <dt className="text-faint">{t("labels.year")}</dt>
                      <dd className="mt-1 tabular-nums text-ink">
                        {project.year}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-faint">{t("labels.scope")}</dt>
                      <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-ink">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Scrolling visuals */}
                <div className="flex flex-col gap-6 md:col-span-7 md:gap-8 md:py-20">
                  {images.map((img, j) => (
                    <Reveal key={img.src} delay={j * 0.05}>
                      <Parallax speed={img.speed}>
                        <Image
                          src={img.src}
                          alt={`${project.client} — ${project.title[locale]}`}
                          width={img.w}
                          height={img.h}
                          sizes="(min-width: 768px) 55vw, 100vw"
                          className="h-auto w-full border border-line"
                        />
                      </Parallax>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
