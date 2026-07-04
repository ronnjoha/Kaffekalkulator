"use client";

import {
  MAX_CUSTOM_LITERS,
  MIN_CUSTOM_LITERS,
  WATER_PRESETS_LITERS,
  formatLiters,
  parseCustomLiters,
} from "@/lib/coffee";
import { WaterDrop } from "@/components/illustrations";

type Props = {
  presetValue: number | null; // null når egendefinert er aktiv
  customText: string;
  onSelectPreset: (liters: number) => void;
  onActivateCustom: () => void;
  onCustomTextChange: (text: string) => void;
};

const chipBase =
  "block w-full rounded-xl border px-2 py-3.5 text-center text-sm font-semibold transition-colors";
const chipInactive =
  "border-border-soft bg-surface text-foreground shadow-sm hover:border-foreground";
const chipActive = "border-accent bg-accent text-accent-foreground shadow-sm";
const chipFocus =
  "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-foreground";

export default function WaterSelector({
  presetValue,
  customText,
  onSelectPreset,
  onActivateCustom,
  onCustomTextChange,
}: Props) {
  const customActive = presetValue === null;
  const customInvalid =
    customActive && customText !== "" && parseCustomLiters(customText) === null;

  return (
    <fieldset>
      <legend className="flex items-center gap-2.5">
        <WaterDrop className="h-5 w-5 text-muted" />
        <span className="font-display text-2xl font-semibold">Vannmengde</span>
      </legend>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {WATER_PRESETS_LITERS.map((liters) => (
          <label key={liters} className="cursor-pointer">
            <input
              type="radio"
              name="water-amount"
              value={liters}
              checked={presetValue === liters}
              onChange={() => onSelectPreset(liters)}
              className="peer sr-only"
            />
            <span
              className={`${chipBase} ${chipFocus} ${
                presetValue === liters ? chipActive : chipInactive
              }`}
            >
              {formatLiters(liters)}
            </span>
          </label>
        ))}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="water-amount"
            value="custom"
            checked={customActive}
            onChange={onActivateCustom}
            className="peer sr-only"
          />
          <span
            className={`${chipBase} ${chipFocus} font-display italic ${
              customActive
                ? chipActive
                : "border-dashed border-border-soft bg-transparent text-muted hover:border-foreground"
            }`}
          >
            Egen
          </span>
        </label>
      </div>
      {customActive && (
        <div className="mt-4">
          <label
            htmlFor="custom-liters"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-muted"
          >
            Egendefinert vannmengde
          </label>
          <div className="mt-1 flex items-baseline gap-2">
            <input
              id="custom-liters"
              type="text"
              inputMode="decimal"
              autoFocus
              value={customText}
              onChange={(e) => onCustomTextChange(e.target.value)}
              aria-invalid={customInvalid}
              aria-describedby="custom-liters-hint"
              className="w-28 border-b bg-transparent px-1 py-1.5 text-lg text-foreground outline-none transition-colors border-border-soft focus:border-foreground aria-[invalid=true]:border-tomato"
            />
            <span className="text-sm text-muted">liter</span>
          </div>
          <p
            id="custom-liters-hint"
            className={`mt-1.5 text-sm ${customInvalid ? "text-tomato" : "text-muted"}`}
          >
            {customInvalid
              ? `Oppgi en mengde mellom ${MIN_CUSTOM_LITERS.toLocaleString("nb-NO")} og ${MAX_CUSTOM_LITERS} liter.`
              : "Bruk komma eller punktum, f.eks. 0,6."}
          </p>
        </div>
      )}
    </fieldset>
  );
}
