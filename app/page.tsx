import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";
import { Bean } from "@/components/illustrations";

export default function Home() {
  return (
    <div className="flex-1">
      <header className="border-b border-border-soft/60">
        <div className="mx-auto flex w-full max-w-[800px] items-center justify-between px-4 py-3.5">
          <p className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight">
            <Bean className="h-6 w-auto rotate-[24deg] text-foreground" />
            L&apos;Arte della Dose
          </p>
          <ThemeToggle />
        </div>
        <div aria-hidden className="tricolore h-[3px] w-full" />
      </header>
      <div className="mx-auto w-full max-w-[800px] px-4 py-10 sm:py-14">
        <section className="mb-10 text-center">
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Finn den perfekte balansen
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-balance text-muted">
            Velg vannmengde, så viser vi anbefalt mengde kaffebønner.
          </p>
        </section>
        <main>
          <Calculator />
        </main>
        <footer className="mt-12 text-balance text-center text-sm text-muted">
          Smak kan variere etter kaffetype, malingsgrad og bryggemetode.
          Juster opp eller ned etter preferanse.
        </footer>
      </div>
    </div>
  );
}
