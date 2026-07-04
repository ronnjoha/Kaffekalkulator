import Calculator from "@/components/Calculator";
import { BeanScatter, MokaPot } from "@/components/illustrations";

export default function Home() {
  return (
    <div className="relative flex-1">
      <div aria-hidden className="tricolore h-1.5 w-full" />
      <div className="relative mx-auto w-full max-w-xl px-4 py-8 sm:py-12">
        <BeanScatter />
        <header className="relative mb-10 flex flex-col items-center text-center">
          <MokaPot className="h-20 w-16 text-accent" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Caffè filtro all&apos;italiana
          </p>
          <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight">
            Kaffekalkulator
          </h1>
          <div aria-hidden className="tricolore mt-4 h-0.5 w-24 rounded-full" />
          <p className="mt-4 max-w-sm text-muted">
            Velg vannmengde, så viser vi anbefalt mengde kaffebønner.
          </p>
        </header>
        <main className="relative">
          <Calculator />
        </main>
        <footer className="relative mt-10 text-center text-xs text-muted">
          Smak kan variere etter kaffetype, kverningsgrad og bryggemetode.
          Juster opp eller ned etter preferanse.
        </footer>
      </div>
    </div>
  );
}
