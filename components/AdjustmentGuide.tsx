import { ArrowDown, ArrowUp } from "@/components/illustrations";

const TIPS = [
  {
    title: "For syrlig smak?",
    text: "Mal finere for å øke ekstraksjonen.",
    borderClass: "border-l-basil",
    iconClass: "text-basil",
    Icon: ArrowUp,
  },
  {
    title: "For bitter smak?",
    text: "Mal grovere for å redusere ekstraksjonen.",
    borderClass: "border-l-tomato",
    iconClass: "text-tomato",
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
        {TIPS.map(({ title, text, borderClass, iconClass, Icon }) => (
          <div
            key={title}
            className={`flex items-center gap-4 rounded-xl border border-border-soft border-l-4 bg-surface px-4 py-4 shadow-sm ${borderClass}`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${iconClass}`} />
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
