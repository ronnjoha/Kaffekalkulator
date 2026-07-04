"use client";

import { useState } from "react";
import AdjustmentGuide from "@/components/AdjustmentGuide";
import GrindSection from "@/components/GrindSection";
import ResultCard from "@/components/ResultCard";
import WaterSelector from "@/components/WaterSelector";
import {
  DEFAULT_WATER_LITERS,
  calculateGrams,
  parseCustomLiters,
} from "@/lib/coffee";

export default function Calculator() {
  const [presetValue, setPresetValue] = useState<number | null>(
    DEFAULT_WATER_LITERS,
  );
  const [customText, setCustomText] = useState("");
  // Siste gyldige mengde beholdes så resultatet aldri viser tomt/ugyldig.
  const [liters, setLiters] = useState<number>(DEFAULT_WATER_LITERS);

  function selectPreset(value: number) {
    setPresetValue(value);
    setLiters(value);
  }

  function activateCustom() {
    setPresetValue(null);
    setCustomText(liters.toLocaleString("nb-NO"));
  }

  function changeCustomText(text: string) {
    setCustomText(text);
    const parsed = parseCustomLiters(text);
    if (parsed !== null) setLiters(parsed);
  }

  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm">
        <WaterSelector
          presetValue={presetValue}
          customText={customText}
          onSelectPreset={selectPreset}
          onActivateCustom={activateCustom}
          onCustomTextChange={changeCustomText}
        />
      </div>
      <ResultCard grams={calculateGrams(liters)} />
      <GrindSection />
      <AdjustmentGuide />
    </div>
  );
}
