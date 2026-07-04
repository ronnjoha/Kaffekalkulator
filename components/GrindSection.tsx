import { CoffeeBean } from "@/components/illustrations";

export default function GrindSection() {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <CoffeeBean className="h-6 w-6 shrink-0 text-accent" />
        <h2 className="font-display text-xl font-semibold">
          Anbefalt malingsgrad
        </h2>
      </div>
      <p className="mt-3 inline-block rounded-full bg-surface-muted px-3 py-1 text-sm font-medium text-accent">
        Medium malingsgrad
      </p>
      <p className="mt-4 text-sm leading-relaxed">
        Mal bønnene til medium malingsgrad, omtrent som grovt sandkorn. Dette
        gir som regel en balansert filterkaffe.
      </p>
      <h3 className="mt-5 text-sm font-semibold text-muted">
        Slik påvirker malingsgraden smaken
      </h3>
      <ul className="mt-2 space-y-2.5 text-sm leading-relaxed text-muted">
        {[
          "For grov maling kan gi svak, tynn og syrlig kaffe fordi vannet renner for raskt gjennom kaffen.",
          "For fin maling kan gi bitter, tung og overekstrahert kaffe fordi vannet bruker for lang tid.",
          "Medium malingsgrad gir vanligvis best balanse for filterkaffe.",
        ].map((text) => (
          <li key={text} className="flex gap-2.5">
            <CoffeeBean className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
