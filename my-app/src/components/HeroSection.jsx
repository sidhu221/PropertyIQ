import Pill from "./Pill";
import HeroSearchBar from "./HeroSearchBar";
import PropertyAnalysisCard from "./PropertyAnalysisCard";
import { heroProperty, heroStats, heroProjection, heroInsight } from "../data/heroDemo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] hero-glow rounded-full pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Pill dot>AI Investment Intelligence · v4.2</Pill>

          <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight text-on-surface">
            Analyze Real Estate Investments with <span className="text-primary">AI Precision</span>
          </h1>

          <p className="text-on-surface-variant text-lg max-w-xl">
            PropertyIQ turns any listing URL into a complete investment dossier — cash flow, cap rate, risk
            exposure, and an AI-scored outlook in under 30 seconds.
          </p>

          <HeroSearchBar
            placeholder="Paste a Zillow, Redfin, or Realtor.com listing URL..."
            ctaLabel="Analyze Property"
            helperText="Paste a Zillow, Redfin, or Realtor.com listing URL to get started — no sign-up required."
          />
        </div>

        <div className="relative">
          <PropertyAnalysisCard
            property={heroProperty}
            stats={heroStats}
            projection={heroProjection}
            insight={heroInsight}
          />
        </div>
      </div>
    </section>
  );
}
