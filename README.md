# [STUDIO NAME] — sito vetrina

Landing / sito vetrina per uno studio freelance di design e sviluppo web.
Direzione estetica: minimal editoriale, parallax discreto, bilingue IT/EN.

## Avvio

```bash
pnpm install
pnpm dev
```

Apri http://localhost:3000 (IT) oppure http://localhost:3000/en (EN).

Altri comandi:

```bash
pnpm build   # build di produzione
pnpm start   # serve la build di produzione
```

## Stack scelto e perché

| Tecnologia | Motivo |
|---|---|
| **Next.js 16 (App Router) + TypeScript** | Server Components → poco JavaScript lato client, utile per le metriche. |
| **Tailwind CSS v4** | Token del design system in un solo punto (`@theme` in `globals.css`): colori, type scale, spacing coerenti. |
| **Lenis** | Smooth scroll a livello pagina (~3 kb) senza jank. Gestisce anche gli anchor link con offset per l'header. |
| **Framer Motion** | Parallax dichiarativo (`useScroll` / `useTransform`) e reveal on-scroll (`whileInView`). Gli sticky scroll sono in CSS puro (`position: sticky`), senza pinning imperativo. |
| **next-intl** | i18n per App Router. Default IT a `/`, EN prefissata a `/en` (`localePrefix: "as-needed"`). Lo switch di lingua è una soft navigation, senza reload. |
| **next/font (Inter)** | Font self-hosted: scaricato a build-time e servito dal proprio dominio, nessuna richiesta esterna. Pesi 400/500. |

### Note sulle performance
- Quasi tutto è reso come Server Component; solo header, hero, contatti e le
  primitive di motion sono client.
- Le immagini del portfolio sono SVG locali serviti con `next/image`.
- Tutte le animazioni rispettano `prefers-reduced-motion`.

## Struttura

```
content/projects.ts        Dati del portfolio (tipizzati)
messages/{it,en}.json      Tutte le stringhe dell'interfaccia
public/projects/*.svg      Cover + gallery placeholder
src/i18n/                  Configurazione next-intl (routing, navigation, request)
src/proxy.ts               Middleware i18n (convenzione "proxy" di Next 16)
src/app/[locale]/          layout, page, not-found
src/components/            Sezioni + primitive di motion
src/lib/site.ts            Brand placeholder e link social
```

## Aggiungere un progetto al portfolio

1. Metti gli asset in `public/projects/` (es. `nuovo-cover.svg`,
   `nuovo-1.svg`, `nuovo-2.svg`). Vanno bene colori solidi o pattern.
2. Aggiungi **una entry** in `content/projects.ts`:

   ```ts
   {
     slug: "nuovo-progetto",
     client: "Nome Cliente",
     title: { it: "Titolo breve", en: "Short title" },
     sector: { it: "Settore", en: "Sector" },
     year: 2026,
     description: {
       it: "Una riga di descrizione.",
       en: "A one-line description.",
     },
     cover: "/projects/nuovo-cover.svg",
     gallery: ["/projects/nuovo-1.svg", "/projects/nuovo-2.svg"],
     tags: ["Design", "Next.js"],
     accent: "#d85a30",
   }
   ```

Non serve toccare nessun componente: la sezione portfolio mappa l'array.

Il tipo `Project` è definito in cima a `content/projects.ts`. I campi
`title`, `sector` e `description` sono localizzati (`{ it, en }`) per
mantenere il sito completamente bilingue; `client` e `tags` sono testo
unico.

## Aggiungere una lingua

1. Aggiungi il codice locale in `src/i18n/routing.ts`:

   ```ts
   locales: ["it", "en", "fr"],
   ```

2. Crea il file di traduzione `messages/fr.json` (copia `it.json` e
   traduci i valori).
3. Aggiungi le stringhe localizzate per ogni progetto in
   `content/projects.ts` (`title`, `sector`, `description`).

Lo switcher di lingua nell'header si popola in automatico dai locali
definiti nel routing.

## Brand

Il nome dello studio è un placeholder unico in `src/lib/site.ts`
(`STUDIO_NAME = "[STUDIO NAME]"`). Cambialo lì e si aggiorna ovunque
(header, footer, copyright). Il titolo/descrizione dei meta tag sono in
`messages/{it,en}.json` → `meta`. P.IVA e link social sono rispettivamente
in `messages` (`footer.vat`) e in `src/lib/site.ts` (`SOCIAL_LINKS`).
