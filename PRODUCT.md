# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hjemmebryggeren ved kjøkkenbenken. De har hele kaffebønner, en kvern og en kjøkkenvekt, og skal lage filterkaffe nå. De vet omtrent hvor mye vann de vil bruke og trenger ett tall: hvor mange gram bønner de skal veie opp. Brukssituasjonen er kort og praktisk. Man åpner appen, velger vannmengde, leser av tallet og går tilbake til bryggingen. Når koppen ikke smaker riktig, er justeringsguiden neste steg.

## Product Purpose

Kalkulatoren gjør om en valgt vannmengde til en anbefalt kaffedose i hele gram for filterkaffe, og forteller hvilken malingsgrad bønnene skal ha. Målet er at brukeren får en god og balansert kopp uten å måtte kunne forholdstall selv. Suksess betyr at tallet står klart på skjermen i løpet av sekunder, og at brukeren stoler nok på det til å veie etter det.

## Positioning

Én jobb, gjort med vilje: et fast bryggeforhold på 60 g/L med kilder (SCA Golden Cup, 55 g/L ± 10 %, og Norsk Kaffeinformasjon, 60–70 g/L), en fast anbefaling om malingsgrad og to konkrete smakstips. Appen har ingen innstillinger, profiler eller bryggemetoder å velge mellom. Enkelheten er selve produktet, ikke noe som mangler.

## Operating Context

- Brukes midt i bryggingen, ved siden av vekt, kvern og kjele.
- Hele bønner er eneste modus. Ferdigmalt kaffe er utenfor scope.
- Flyten er: velg vannmengde → les kaffedosen → mal på medium → juster neste gang etter smak.

## Capabilities and Constraints

- **Vannmengde**: fem forhåndsvalg (0,25 / 0,5 / 0,75 / 1,0 / 1,25 L, standard 0,5 L) eller egendefinert mengde fra 0,1 til 10 L. Både komma og punktum godtas som desimaltegn. Ugyldig input visker aldri ut resultatet, for siste gyldige verdi blir stående.
- **Kaffedose**: `liter × 60`, avrundet til nærmeste hele gram (`lib/coffee.ts`).
- **Malingsgrad**: alltid Medium («omtrent som grovt sandkorn») for filterkaffe.
- **Justeringsguide**: syrlig smak → mal finere, bitter smak → mal grovere.
- Lys og mørk modus. Følger systemet som standard og husker brukerens valg i `localStorage`.
- Alt skjer på klienten. Ingen backend, kontoer eller lagring av data.
- Stack: Next.js 16 (App Router), React 19, Tailwind CSS 4, deployet på Vercel.
- Terminologien i `CONTEXT.md` er bindende (Bryggeforhold, Vannmengde, Kaffedose, Malingsgrad, Justeringsguide).
- Scope er bevisst låst til én enkel kalkulator. Nye bryggemetoder, justerbart forhold, tidtaker og lignende hører ikke hjemme her uten en eksplisitt produktbeslutning.

## Brand Commitments

- Merkenavnet i UI-et er «L'Arte della Dose». Produktet heter Kaffekalkulator.
- All funksjonell tekst er på norsk (bokmål, `lang="nb"`, tall formatert for `nb-NO`). Italiensk brukes bare som merkevarekrydder.
- Tonen er rolig, praktisk og handlingsrettet. Tekstene sier hva brukeren skal gjøre («Vei opp 36 gram kaffebønner»).

## Evidence on Hand

- Kildene for bryggeforholdet: SCA Golden Cup (55 g/L ± 10 %) og Norsk Kaffeinformasjon (60–70 g/L).
- Det finnes ingen brukerdata, testimonials eller omtaler. Slikt skal ikke fabrikkeres.

## Product Principles

1. **Tallet først.** Kaffedosen er svaret brukeren kom for. Alt annet er støtte.
2. **Ingen valg brukeren ikke trenger.** Faste, begrunnede anbefalinger er bedre enn innstillinger.
3. **Tillit gjennom kilder.** Anbefalingene er forankret i navngitte standarder, ikke i synsing.
4. **Handlingsrettet språk.** Hver tekst sier hva brukeren skal gjøre ved benken.
5. **Aldri et tomt svar.** Ugyldig input skal aldri gi et tomt eller feil resultat.
