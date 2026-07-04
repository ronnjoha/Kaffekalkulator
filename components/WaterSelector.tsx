"use client";

import { WATER_OPTIONS_LITERS, formatLiters, type WaterLiters } from "@/lib/coffee";

type Props = {
  value: WaterLiters;
  onChange: (value: WaterLiters) => void;
};

export default function WaterSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-muted">Vannmengde</legend>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {WATER_OPTIONS_LITERS.map((liters) => (
          <label key={liters} className="cursor-pointer">
            <input
              type="radio"
              name="water-amount"
              value={liters}
              checked={value === liters}
              onChange={() => onChange(liters)}
              className="peer sr-only"
            />
            <span className="block rounded-2xl border border-border-soft bg-surface px-2 py-3 text-center font-display text-sm font-medium text-muted shadow-sm transition-colors hover:border-accent peer-checked:border-accent peer-checked:bg-accent peer-checked:text-accent-foreground peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
              {formatLiters(liters)}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
