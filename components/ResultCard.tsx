import { Bean } from "@/components/illustrations";
import { GRAMS_PER_LITER, formatLiters } from "@/lib/coffee";

// Bønner «sølt» på disken rundt dosen. --r er hvilerotasjonen; de legger seg på plass når dosen endres.
const SPILLED_BEANS = [
  { className: "-right-3 -top-5 w-16 sm:w-20", r: "28deg" },
  { className: "right-12 top-4 w-8 sm:right-16 sm:w-10", r: "-22deg" },
  { className: "-bottom-4 -left-3 w-14 sm:w-[4.5rem]", r: "-38deg" },
];

type Props = {
  grams: number;
  liters: number;
};

export default function ResultCard({ grams, liters }: Props) {
  return (
    <section
      aria-live="polite"
      className="hero-shadow relative isolate overflow-hidden rounded-2xl border border-transparent bg-hero px-6 py-12 text-center dark:border-border-soft"
    >
      <div key={grams} aria-hidden className="absolute inset-0 -z-10">
        {SPILLED_BEANS.map(({ className, r }) => (
          <Bean
            key={className}
            crease="var(--hero)"
            className={`animate-bean-settle pointer-events-none absolute h-auto text-hero-foreground/12 ${className}`}
            style={{ "--r": r } as React.CSSProperties}
          />
        ))}
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-hero-foreground/70">
        Anbefalt kaffedose
      </p>
      <p
        key={grams}
        className="animate-pour-in mt-3 font-display text-7xl font-bold tabular-nums text-hero-foreground"
      >
        {grams}
        <span className="ml-2 font-display text-3xl font-normal italic">g</span>
      </p>
      <p className="mt-3 font-display text-lg italic text-hero-foreground/90">
        Vei opp {grams} gram kaffebønner
      </p>
      <div aria-hidden className="mx-auto mt-6 h-px w-2/3 bg-hero-foreground/15" />
      <p className="mt-5 text-balance text-sm text-hero-foreground/70">
        Basert på {formatLiters(liters)} vann og et forhold på{" "}
        {GRAMS_PER_LITER} g per liter.
      </p>
      <p className="mt-1.5 text-balance text-xs text-hero-foreground/60">
        SCA Golden Cup (55 g/L ± 10 %) · Norsk Kaffeinformasjon (60–70 g/L)
      </p>
    </section>
  );
}
