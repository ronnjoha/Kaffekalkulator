/* Ikoner i strektegning-stil, farget via currentColor. */

export function CoffeeBean({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
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

/*
 * Fylt kaffebønne i organisk, litt skjev form. Midtfuren tegnes som en strek i
 * flatens bakgrunnsfarge (`crease`), så bønnen fungerer uten maske-id-er.
 */
export function Bean({
  className,
  crease = "var(--background)",
  style,
}: {
  className?: string;
  crease?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg aria-hidden viewBox="0 0 32 44" className={className} style={style}>
      <path
        fill="currentColor"
        d="M16 1.5C25 1.5 30.8 10.5 30.2 22.5 29.6 34.5 23.8 42.6 15.6 42.5 7.2 42.4 1.4 33.6 1.8 21.6 2.2 9.8 7.8 1.5 16 1.5Z"
      />
      <path
        fill="none"
        stroke={crease}
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M16.6 4C11.6 12 20.6 18.8 15.9 25.4 12.6 30 17.4 35.8 15.4 40.6"
      />
    </svg>
  );
}

export function WaterDrop({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 C12 3 5.5 10.5 5.5 15 a6.5 6.5 0 0 0 13 0 C18.5 10.5 12 3 12 3 Z" />
    </svg>
  );
}

/* Malt kaffe: en sirkel av korn, jf. malingsgrad-ikonet i mockupen. */
export function GrindDots({ className }: { className?: string }) {
  const dots = [
    [12, 7],
    [8, 10],
    [16, 10],
    [12, 12],
    [9, 15],
    [15, 15],
    [12, 17.5],
  ] as const;
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />
      ))}
    </svg>
  );
}

export function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20 V5 M6 11 l6 -6 6 6" />
    </svg>
  );
}

export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4 v15 M6 13 l6 6 6 -6" />
    </svg>
  );
}
