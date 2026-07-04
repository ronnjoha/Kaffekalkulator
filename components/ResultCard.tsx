import { GRAMS_PER_LITER } from "@/lib/coffee";
import { EspressoCup } from "@/components/illustrations";

type Props = {
  grams: number;
};

export default function ResultCard({ grams }: Props) {
  return (
    <section
      aria-live="polite"
      className="rounded-3xl bg-accent-strong px-6 py-8 text-center shadow-md"
    >
      <EspressoCup className="mx-auto h-14 w-16 text-accent-foreground/80" />
      <p className="mt-3 font-display text-sm italic text-accent-foreground/70">
        La dose perfetta
      </p>
      <p className="mt-2 text-sm font-medium text-accent-foreground/70">
        Vei opp
      </p>
      <p
        key={grams}
        className="animate-pour-in my-1 font-display text-6xl font-semibold text-accent-foreground"
      >
        {grams}
        <span className="ml-1 text-2xl font-normal">gram</span>
      </p>
      <p className="text-lg text-accent-foreground">kaffebønner</p>
      <p className="mt-4 text-xs text-accent-foreground/60">
        {GRAMS_PER_LITER} g kaffe per liter vann — basert på SCA Golden Cup
        (55 g/L ± 10 %) og Norsk Kaffeinformasjon (60–70 g/L)
      </p>
    </section>
  );
}
