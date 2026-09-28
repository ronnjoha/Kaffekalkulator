import { ArrowDown, ArrowUp } from "@/components/illustrations";

const TIPS = [
  {
    title: "For syrlig smak?",
    text: "Mal finere for å øke ekstraksjonen.",
    iconClass: "bg-basil/10 text-basil",
    Icon: ArrowUp,
  },
  {
    title: "For bitter smak?",
    text: "Mal grovere for å redusere ekstraksjonen.",
    iconClass: "bg-tomato/10 text-tomato",
    Icon: ArrowDown,
  },
];

export default function AdjustmentGuide() {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        Justeringsguide
      </h2>
      <div className="mt-3 space-y-3">
        {TIPS.map(({ title, text, iconClass, Icon }) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface px-4 py-4 shadow-sm"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconClass}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-0.5 text-sm text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
