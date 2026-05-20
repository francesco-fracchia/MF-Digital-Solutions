import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
