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
