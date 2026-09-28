import { GRAMS_PER_LITER, formatLiters } from "@/lib/coffee";

type Props = {
  grams: number;
  liters: number;
};

export default function ResultCard({ grams, liters }: Props) {
  return (
    <section
      aria-live="polite"
      className="hero-shadow rounded-2xl border border-transparent bg-hero px-6 py-12 text-center dark:border-border-soft"
    >
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
