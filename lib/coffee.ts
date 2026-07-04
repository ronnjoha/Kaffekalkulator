/**
 * Bryggeforhold: 60 g kaffe per liter vann.
 * Forankret i SCA Golden Cup (55 g/L ± 10 %) og Norsk Kaffeinformasjon (60–70 g/L).
 */
export const GRAMS_PER_LITER = 60;

export const WATER_OPTIONS_LITERS = [0.25, 0.5, 0.75, 1.0, 1.25] as const;

export type WaterLiters = (typeof WATER_OPTIONS_LITERS)[number];

export const DEFAULT_WATER_LITERS: WaterLiters = 0.5;

export function calculateGrams(liters: WaterLiters): number {
  return Math.round(liters * GRAMS_PER_LITER);
}

export function formatLiters(liters: WaterLiters): string {
  return `${liters.toLocaleString("nb-NO")} L`;
}
