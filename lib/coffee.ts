/**
 * Bryggeforhold: 60 g kaffe per liter vann.
 * Forankret i SCA Golden Cup (55 g/L ± 10 %) og Norsk Kaffeinformasjon (60–70 g/L).
 */
export const GRAMS_PER_LITER = 60;

export const WATER_PRESETS_LITERS = [0.25, 0.5, 0.75, 1.0, 1.25] as const;

export const DEFAULT_WATER_LITERS = 0.5;

export const MIN_CUSTOM_LITERS = 0.1;
export const MAX_CUSTOM_LITERS = 10;

export function calculateGrams(liters: number): number {
  return Math.round(liters * GRAMS_PER_LITER);
}

export function formatLiters(liters: number): string {
  return `${liters.toLocaleString("nb-NO")} L`;
}

/** Tolker brukerinput med komma eller punktum; null hvis ugyldig eller utenfor 0,1–10 L. */
export function parseCustomLiters(input: string): number | null {
  const value = Number(input.trim().replace(",", "."));
  if (!Number.isFinite(value)) return null;
  if (value < MIN_CUSTOM_LITERS || value > MAX_CUSTOM_LITERS) return null;
  return value;
}
