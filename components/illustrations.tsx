/* Håndtegnede SVG-illustrasjoner i strektegning-stil, farget via currentColor. */

export function MokaPot({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Underkammer */}
      <path d="M18 76 L13 50 H51 L46 76 Z" />
      {/* Midtband */}
      <path d="M12 50 H52 M14 44 H50" />
      {/* Overkammer */}
      <path d="M17 44 L13 20 H51 L47 44 Z" />
      {/* Tut */}
      <path d="M13 20 L6 26 L13 30" />
      {/* Lokk og knott */}
      <path d="M22 20 Q32 8 42 20" />
      <circle cx="32" cy="7" r="2.5" />
      {/* Håndtak */}
      <path d="M51 22 Q61 24 58 33 Q56 39 48 40" />
    </svg>
  );
}

export function EspressoCup({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 72 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Damp */}
      <path className="animate-steam" d="M28 18 C26 14 30 12 28 6" />
      <path className="animate-steam steam-delayed" d="M38 18 C36 14 40 12 38 6" />
      {/* Kopp */}
      <path d="M13 26 H51 L47.5 44 Q46.5 49 41 49 H23 Q17.5 49 16.5 44 Z" />
      {/* Hank */}
      <path d="M51 29 Q60 30 58 37 Q56.5 42 48.5 42" />
      {/* Skål */}
      <path d="M8 55 H56" />
    </svg>
  );
}

export function CoffeeBean({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <ellipse cx="12" cy="12" rx="10" ry="6.5" transform="rotate(-45 12 12)" />
      <path d="M6 18 Q11.5 14.5 12 12 Q12.5 9.5 18 6" />
    </svg>
  );
}

/* Dekorative bønner strødd rundt kortstakken. */
export function BeanScatter() {
  const beans: { top: string; left?: string; right?: string; size: string; rotate: string }[] = [
    { top: "2%", left: "4%", size: "h-7 w-7", rotate: "rotate-12" },
    { top: "8%", right: "5%", size: "h-5 w-5", rotate: "-rotate-45" },
    { top: "47%", left: "1%", size: "h-4 w-4", rotate: "rotate-90" },
    { top: "60%", right: "1%", size: "h-6 w-6", rotate: "rotate-45" },
    { top: "97%", left: "2%", size: "h-5 w-5", rotate: "-rotate-12" },
    { top: "97%", right: "2%", size: "h-4 w-4", rotate: "rotate-6" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 text-accent/25">
      {beans.map((b, i) => (
        <CoffeeBean
          key={i}
          className={`absolute ${b.size} ${b.rotate}`}
          style={{ top: b.top, left: b.left, right: b.right }}
        />
      ))}
    </div>
  );
}
