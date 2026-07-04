import { GrindDots } from "@/components/illustrations";

export default function GrindSection() {
  return (
    <section className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold">
        <GrindDots className="h-6 w-6 shrink-0 text-muted" />
        Anbefalt malingsgrad
      </h2>
      <div className="mt-5 flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface-muted">
          <GrindDots className="h-9 w-9 text-foreground" />
        </div>
        <div>
          <p className="font-display text-lg font-semibold">Middels (Medium)</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Mal bønnene til medium malingsgrad, omtrent som grovt sandkorn.
            Dette gir som regel en balansert filterkaffe.
          </p>
        </div>
      </div>
      <div className="mt-6" aria-hidden>
        <div className="relative h-1.5 rounded-full bg-surface-muted">
          <div className="absolute left-0 top-0 h-full w-1/2 rounded-full bg-foreground/60" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-foreground" />
        </div>
        <div className="mt-2 flex justify-between text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          <span>Fin</span>
          <span>Medium</span>
          <span>Grov</span>
        </div>
      </div>
    </section>
  );
}
