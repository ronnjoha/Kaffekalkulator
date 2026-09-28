---
name: L'Arte della Dose
description: Kaffekalkulator for filterkaffe, servert over baristaens disk.
colors:
  espresso: "#3c2a21"
  crema: "#fff8f5"
  schiuma: "#ffffff"
  latte: "#f7e5d9"
  cappuccino: "#d3c3bd"
  ristretto: "#221a13"
  macchiato: "#4f4540"
  panna: "#f5efe6"
  basilico: "#008c45"
  pomodoro: "#cd212a"
  bianco-tricolore: "#e6ddd0"
  notte-bianco-tricolore: "#f4f5f0"
  notte-background: "#1a120b"
  notte-surface: "#271e16"
  notte-surface-muted: "#322820"
  notte-border: "#4e453f"
  notte-foreground: "#f1dfd3"
  notte-muted: "#d2c4bc"
  notte-hero-foreground: "#f2d9ca"
  notte-accent-foreground: "#3c2d23"
  notte-basilico: "#4fbf7e"
  notte-pomodoro: "#ff8a80"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: "2rem"
  accent-italic:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  body-sm:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.25rem"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1rem"
    letterSpacing: "0.15em"
rounded:
  chip: "12px"
  card: "16px"
  full: "9999px"
spacing:
  gutter: "16px"
  chip-gap: "10px"
  card-padding: "24px"
  hero-padding-y: "48px"
  section-gap: "40px"
  container-max: "800px"
components:
  chip-water:
    backgroundColor: "{colors.schiuma}"
    textColor: "{colors.ristretto}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.chip}"
    padding: "14px 8px"
  chip-water-active:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.schiuma}"
    rounded: "{rounded.chip}"
    padding: "14px 8px"
  card-dose:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.panna}"
    rounded: "{rounded.card}"
    padding: "48px 24px"
  card-surface:
    backgroundColor: "{colors.schiuma}"
    textColor: "{colors.ristretto}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
  card-tip:
    backgroundColor: "{colors.schiuma}"
    textColor: "{colors.ristretto}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.chip}"
    padding: "16px"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ristretto}"
    padding: "6px 4px"
    width: "112px"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.macchiato}"
    rounded: "{rounded.full}"
    size: "44px"
  button-icon-hover:
    backgroundColor: "{colors.latte}"
    textColor: "{colors.ristretto}"
---

# Design System: L'Arte della Dose

## Overview

**Creative North Star: "Il Banco del Barista"**

Grensesnittet er baristaens disk. Det er en rolig, ryddig arbeidsflate der ett presist svar blir satt frem for gjesten. Brukeren står ved sin egen kjøkkenbenk med vekt og kvern. Appen tar baristaens plass: den stiller ett spørsmål (hvor mye vann?), serverer ett tall (så mange gram bønner) og gir to råd til neste kopp. Alt på disken har en funksjon. Ingenting er pynt.

Stemningen er varm og håndverksmessig uten å være nostalgisk. Kremhvite og latte-fargede flater fungerer som porselen og marmor. Espresso-brunt er den eneste tunge fargen, og den er forbeholdt det som er viktigst: dosen og det aktive valget. Bodoni Modas høye kontrast gir tallet tyngde og tradisjon. Hanken Grotesk tar seg av det praktiske. Tetthet er lav, og det er god luft mellom seksjonene. Én kolonne holder blikket i én retning, fra spørsmål til svar.

Systemet skal aldri minne om en kjedekafé-app. Det betyr ingen bonuskort-estetikk, ingen produktbilder av drikke, ingen grelle kampanjefarger og ingen salgsflater. Dette er en disk, ikke en butikk.

**Key Characteristics:**
- Én kolonne, sentrert, maks 800 px. Spørsmål → svar → råd.
- Espresso-brunt resultatkort som den eneste mørke flaten i lys modus.
- Bodoni Moda for tall og overskrifter, med kursiv som varm aksent.
- Taktile, rolige flater med myke hjørner og stille skygger.
- Tricolore bare som signatur (en 3 px stripe) og funksjonelt signal.
- Full lys og mørk modus (crema og notte) med de samme rollene.

## Colors

En varm, jordnær palett hentet fra kaffekoppen. Nøytralene går fra crema til ristretto, med espresso som eneste tunge farge og basilico og pomodoro som sjeldne signaler.

### Primary
- **Espresso** (`espresso`): Bærende farge for resultatkortet (dosen) og aktiv valgknapp. Den markerer det brukeren kom for og det brukeren har valgt, og ingenting annet. I mørk modus byttes rollen: aktiv valgknapp blir lys (`notte-foreground` med `notte-accent-foreground` som tekst), mens resultatkortet blir en hevet flate (`notte-surface`) med kant.

### Secondary
- **Basilico** (`basilico`, mørk: `notte-basilico`): Grønt signal for «mal finere» i justeringsguiden (ikon i en sirkel tonet med 10 % av fargen) og venstre tredjedel av tricolore-stripen.

### Tertiary
- **Pomodoro** (`pomodoro`, mørk: `notte-pomodoro`): Rødt signal for «mal grovere» (ikon i en sirkel tonet med 10 % av fargen), for ugyldig input (feilmelding og understrek) og høyre tredjedel av tricolore-stripen.

### Neutral
- **Crema** (`crema`, mørk: `notte-background`): Sidebakgrunn. En varm, nesten usynlig tone som gjør at hvite kort løfter seg.
- **Schiuma** (`schiuma`, mørk: `notte-surface`): Kortflater og inaktive valgknapper. Melkeskum-hvitt.
- **Latte** (`latte`, mørk: `notte-surface-muted`): Dempede flater som hover-bakgrunn på ikonknapp, sporet i malingsskalaen og sirkelen bak malingsikonet.
- **Cappuccino** (`cappuccino`, mørk: `notte-border`): Alle kanter, som kortkanter, valgknapper, headerlinje og understrek på inputfelt.
- **Ristretto** (`ristretto`, mørk: `notte-foreground`): Primær tekst, fokusring og hover-kant på valgknapper.
- **Macchiato** (`macchiato`, mørk: `notte-muted`): Sekundær tekst, ikoner, etiketter og hint.
- **Panna** (`panna`, mørk: `notte-hero-foreground`): Tekst på resultatkortet, med opasitet 90/70/50 % for underordnede linjer.
- **Bianco tricolore** (`bianco-tricolore`, mørk: `notte-bianco-tricolore`): Bare den midterste tredjedelen av tricolore-stripen. I lys modus er feltet en varm, mørkere kremtone, fordi rent hvitt forsvinner mot crema og stripen da ser brutt ut.

### Named Rules
**The Una Tazza Rule.** Espresso er forbeholdt dosen og det aktive valget. Hvis en tredje ting på skjermen blir espresso-brun, taper tallet sin plass.

**The Segnale Rule.** Basilico og pomodoro er signaler, ikke dekor. De betyr alltid «finere/grovere» eller «feil», og ellers vises de bare i tricolore-stripen. Den eneste tonede flaten er 10 %-sirkelen bak et signalikon. Grønt og rødt brukes aldri som kortflater, kanter på kort, knappebakgrunner eller illustrasjonsfarge.

## Typography

**Display Font:** Bodoni Moda (med Georgia, serif)
**Body Font:** Hanken Grotesk (med system-ui, sans-serif)

**Character:** Bodoni Modas skarpe kontrast gir tradisjon og tyngde til tall og overskrifter, som en meny skrevet for hånd over disken. Hanken Grotesk er nøktern og lett å lese, og bærer alt som er funksjonelt. Kursiv Bodoni er systemets varme stemme.

### Hierarchy
- **Display** (700, 4,5 rem, linjehøyde 1): Kun kaffedosen på resultatkortet. Enheten «g» settes i kursiv Bodoni 400 på 1,875 rem.
- **Headline** (700, 2,25 rem → 3 rem fra 640 px, tett sporing): Sidens ene H1 («Finn den perfekte balansen»).
- **Title** (600, 1,5 rem): Seksjonstitler i kort («Vannmengde», «Anbefalt malingsgrad») og ordmerket i headeren (700). Malingsgradens navn bruker samme familie på 1,125 rem.
- **Accent italic** (400 kursiv, 1,125 rem): Den handlingsrettede linjen på resultatkortet («Vei opp 36 gram kaffebønner») og «Egen»-valgknappen.
- **Body** (400, 1 rem / 1,5 rem): Ingress og løpende tekst, maks ca. 24 rem bredt i ingressen.
- **Body small** (400/600, 0,875 rem): Verdier på valgknapper (600), tips, forklaringer og bunntekst.
- **Label** (600, 0,75 rem, sporing 0,15 em, VERSALER): Etiketten over dosen («Anbefalt kaffedose») og den lille seksjonstittelen «Justeringsguide». Feltetiketter og skala-etiketter bruker 0,1 em sporing.

### Named Rules
**The Serif Serves Rule.** Bodoni brukes bare til tall, overskrifter og den ene handlingslinjen, altså det som serveres. Knapper, etiketter, hint og feilmeldinger settes i Hanken Grotesk.

**The Ingen Overlinje Rule.** Overskrifter står alene. Ingen kicker eller overlinje over H1 eller korttitler. Label brukes som etikett for en verdi eller som selve seksjonstittelen, aldri som forspill til en annen overskrift.

**The Corsivo Rule.** Kursiv Bodoni er krydder og brukes på maks ett–to elementer per skjerm: enheten ved tallet, handlingslinjen og «Egen». Den brukes aldri på brødtekst.

## Layout

Én sentrert kolonne på maks 800 px, med 16 px sidemarg på alle skjermbredder. Siden har tre lag: header (ordmerke og temaknapp, 14 px vertikal padding, deretter tricolore-stripen i full bredde), en sentrert intro (H1 og ingress, begge med balansert linjebryting) og kalkulatoren. Kalkulatoren har seksjoner med 40 px mellomrom i fast rekkefølge: vannmengde → dose → malingsgrad → justeringsguide. Bunnteksten er sentrert og dempet, 48 px under.

Vertikal luft over introen er 40 px, og 56 px fra 640 px. Det er det eneste responsive bruddpunktet, og det påvirker bare denne luften og H1-størrelsen. Vannmengde-valgene ligger i et fast rutenett med 3 kolonner (5 forhåndsvalg + «Egen» = 2 rader) og 10 px mellomrom på alle bredder. Kort har 24 px innvendig padding. Resultatkortet har 48 px vertikal padding for å gi tallet rom.

**The Én Retning Rule.** Layouten er én kolonne i fast rekkefølge, også på desktop. Ingen sidekolonner, ingen rutenett av kort og ingen omstokking. Blikket går fra spørsmål til svar.

## Elevation & Depth

Hybrid: tonal lagdeling pluss stille, lave skygger. Hvite kort på crema-bakgrunn løfter seg med en minimal skygge og en cappuccino-kant. Bare resultatkortet får en dyp, diffus og varmtonet skygge. I mørk modus erstattes den med en kant, fordi skygger forsvinner mot mørk bakgrunn.

### Shadow Vocabulary
- **Stille** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): Innholdskort, tipskort og valgknapper i hvile og aktiv tilstand.
- **Servert** (`box-shadow: 0 20px 40px -15px rgba(60, 42, 33, 0.2)`): Kun resultatkortet. En espresso-tonet skygge som løfter dosen fra disken.

### Named Rules
**The Én Løftet Rule.** Bare dosen får den dype skyggen. Alle andre flater ligger stille på disken.

## Shapes

Myke, rolige hjørner i to trinn og ett sirkulært. Kort og resultatkort har 16 px radius. Valgknapper og tipskort har 12 px radius. Ikonknapper, malingsikonet og skalaens håndtak er sirkulære. Kanter er 1 px cappuccino. Tipskortenes signal er ikonet i en 36 px sirkel tonet med 10 % basilico eller pomodoro. Kortene har ellers samme 1 px kant som alt annet. Inputfeltet har bare understrek. «Egen»-valgknappen har stiplet kant i inaktiv tilstand for å vise at den er åpen for egen verdi.

Ikonene er egne SVG-er i strektegning (2 px strek, runde ender, `currentColor`, 20–24 px). Malingsgrad vises som prikker (fylte sirkler), fordi korn er runde.

## Components

Taktilt og rolig: flater som kjennes som keramikk under hånden, med stille kanter og ingen overraskelser. Bare resultatkortet hever stemmen.

### Buttons
- **Shape:** Sirkulær ikonknapp (44 px, full radius, i tråd med minste trykkflate). Temavelgeren er den eneste frittstående knappen.
- **Default:** Transparent bakgrunn, macchiato-farget ikon (sol/måne, 20 px).
- **Hover / Focus:** Latte-bakgrunn og ristretto-ikon ved hover, fargeovergang på 150 ms. Fokus vises som 2 px ristretto-outline med 2 px avstand.

### Chips
- **Style:** Vannmengde-valgene er radioknapper utformet som flis (12 px radius, 14 px vertikal padding, sentrert Body small 600). Inaktive har schiuma-bakgrunn, cappuccino-kant og stille skygge.
- **State:** Aktiv flis har espresso-bakgrunn og kant med hvit tekst. Hover på inaktiv flis gir ristretto-kant. Tastaturfokus vises som 2 px ristretto-outline med 2 px avstand, via det skjulte radio-elementet. «Egen» er i kursiv Bodoni med stiplet kant og transparent bakgrunn når den er inaktiv, og blir espresso som de andre når den er aktiv.

### Cards / Containers
- **Corner Style:** 16 px.
- **Background:** Schiuma på crema.
- **Shadow Strategy:** Stille (se Elevation & Depth).
- **Border:** 1 px cappuccino.
- **Internal Padding:** 24 px. Seksjonstittel i Title med et 20–24 px macchiato-ikon foran.

### Inputs / Fields
- **Style:** Kun understrek (1 px cappuccino), transparent bakgrunn, 112 px bredt, Body 1,125 rem, med enheten «liter» i macchiato ved siden av. Etikett i Label over (0,1 em sporing).
- **Focus:** Understreken blir ristretto.
- **Error:** Understrek og hint blir pomodoro, også mens feltet har fokus, og hinttekst byttes til en konkret grense («Oppgi en mengde mellom 0,1 og 10 liter.»). Resultatet beholder siste gyldige verdi, så feil viser seg aldri som et tomt svar.

### Navigation
- **Style:** Ingen navigasjon, bare en header med ordmerket «L'Arte della Dose» (Bodoni 700, 1,5 rem) til venstre og temaknappen til høyre, avsluttet av en 1 px cappuccino-linje (60 % opasitet) og tricolore-stripen.

### Resultatkortet (la Dose)
Signaturkomponenten. Espresso-flate (lys) eller notte-surface med kant (mørk), 16 px radius, 48 × 24 px padding, Servert-skygge og alt sentrert. Rekkefølgen er: etiketten «Anbefalt kaffedose» i Label (panna 70 %), dosen i Display med tabulære tall, handlingslinjen i Accent italic (panna 90 %), en 1 px skillelinje over to tredjedeler av bredden (panna 15 %), grunnlaget i Body small (70 %) og kildene i 0,75 rem (60 %). Grunnlaget nevner alltid vannmengden dosen gjelder («Basert på 0,5 L vann og et forhold på 60 g per liter»), slik at det er tydelig hvilken verdi som står når egendefinert input er ugyldig. Tekst på kortet går aldri under 60 % opasitet, fordi 50 % faller under 4,5:1. Kortet er `aria-live="polite"`. Når tallet endres, «helles» det inn: 6 px oppover og fra 0 til 1 i opasitet over 350 ms ease-out. Animasjonen skrus av ved `prefers-reduced-motion`.

### Malingsskala
En passiv skala (fin – medium – grov) under malingsgrad-teksten. Et 6 px latte-spor der venstre halvdel er fylt med ristretto på 60 %, og et 16 px ristretto-håndtak med schiuma-kant i midten. Etikettene står i Label under. Skalaen er dekorativ (`aria-hidden`), fordi teksten over sier det samme.

### Tricolore-stripen
3 px høy, i full bredde, rett under headeren. Tre like store felt uten overgang: basilico, bianco tricolore og pomodoro. Den er systemets eneste rent dekorative element og finnes bare på dette ene stedet.

## Do's and Don'ts

### Do:
- **Do** la kaffedosen være det største og tyngste på skjermen (Display, 4,5 rem, espresso-kort).
- **Do** bruke tokenparene (`--background`, `--surface`, `--foreground` osv.) slik at alt fungerer i både crema og notte uten egne overstyringer.
- **Do** gi alle interaktive elementer en 2 px ristretto-fokusring med 2 px avstand.
- **Do** bruke cappuccino-kant pluss stille skygge på alle kort og fliser, og 16 px / 12 px radius etter nivå.
- **Do** sette overlinjer og små funksjonelle titler i Label med versaler og 0,15 em sporing.
- **Do** respektere `prefers-reduced-motion` for all bevegelse.
- **Do** tematisere nettleserflatene: tekstmarkering i espresso (lys) eller lys foreground (mørk), markør i foreground, `color-scheme` per tema og `theme-color` som følger sidebakgrunnen.

### Don't:
- **Don't** la systemet ligne en kjedekafé-app: ingen bonuskort-estetikk, ingen produktbilder av drikke, ingen grelle kampanjefarger og ingen salgsflater.
- **Don't** bruke espresso-brunt på mer enn dosen og det aktive valget (The Una Tazza Rule).
- **Don't** bruke basilico eller pomodoro som flate, knappebakgrunn eller dekor. De er signaler (The Segnale Rule).
- **Don't** gjenta tricolore-stripen andre steder enn under headeren.
- **Don't** gi andre flater enn resultatkortet den dype Servert-skyggen.
- **Don't** bryte opp enkolonne-layouten til sidekolonner eller kortrutenett på store skjermer.
- **Don't** sette knapper, etiketter eller feilmeldinger i Bodoni.
- **Don't** sette en overlinje over en overskrift (The Ingen Overlinje Rule).
- **Don't** gi kort en tykk farget venstre- eller høyrekant. Signalfarge bor i ikonet.
