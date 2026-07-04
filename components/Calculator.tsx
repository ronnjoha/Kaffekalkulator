"use client";

import { useState } from "react";
import GrindSection from "@/components/GrindSection";
import ResultCard from "@/components/ResultCard";
import WaterSelector from "@/components/WaterSelector";
import {
  DEFAULT_WATER_LITERS,
  calculateGrams,
  type WaterLiters,
} from "@/lib/coffee";

export default function Calculator() {
  const [waterLiters, setWaterLiters] =
    useState<WaterLiters>(DEFAULT_WATER_LITERS);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
        <WaterSelector value={waterLiters} onChange={setWaterLiters} />
      </div>
      <ResultCard grams={calculateGrams(waterLiters)} />
      <GrindSection />
    </div>
  );
}
