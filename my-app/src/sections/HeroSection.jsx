import { useState } from "react";
import { Icon, Pill, Gauge, StatCard, PeriodToggle, MiniLineChart } from "../components/ui";
import { heroProperty, heroStats, heroProjection, heroInsight } from "../data/heroDemo";

function HeroSearchBar({ placeholder, ctaLabel, helperText, onSubmit }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(url);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="flex-1 flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-container/80 px-5 py-4 focus-within:border-primary/60 transition-colors">
          <Icon name="search" className="text-on-surface-variant" size="20px" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-on-surface placeholder:text-on-surface-variant/60 text-sm"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-primary text-on-primary font-bold px-6 py-4 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
        >
          <Icon name="auto_awesome" size="18px" filled />
          {ctaLabel}
          <Icon name="arrow_forward" size="18px" />
        </button>
      </div>
      {helperText && <p className="text-on-surface-variant/70 text-xs px-1">{helperText}</p>}
    </form>
  );
}

// Small overlapping callout used to surface a highlighted metric on top of a card seam.
function FloatingBadge({ icon, iconTone = "primary", title, subtitle, className = "" }) {
  const toneClasses = iconTone === "warning" ? "bg-warning/15 text-warning" : "bg-primary/15 text-primary";

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-container-high/95 backdrop-blur-xl px-4 py-3 shadow-2xl ${className}`}
    >
      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${toneClasses}`}>
        <Icon name={icon} size="18px" filled />
      </div>
      <div className="leading-tight">
        <p className="text-on-surface-variant text-[11px]">{title}</p>
        <p className="text-on-surface text-[13px] font-bold">{subtitle}</p>
      </div>
    </div>
  );
}

function InsightBanner({ title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
      <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
        <Icon name="auto_awesome" size="18px" filled />
      </div>
      <div>
        <p className="text-on-surface text-sm font-bold">{title}</p>
        <p className="text-on-surface-variant text-[13px] mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// The mock "live analysis" card on the right side of the hero.
function PropertyAnalysisCard({ property, stats, projection, riskBadge, trendBadge, insight }) {
  return (
    <div className="rounded-3xl border border-outline-variant bg-surface-container/70 backdrop-blur-xl p-6 space-y-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-1.5 text-on-surface-variant text-sm">
            <Icon name="location_on" size="16px" />
            {property.address}
          </p>
          <p className="text-on-surface text-[32px] font-bold leading-tight mt-1">{property.price}</p>
          <div className="flex items-center gap-4 text-on-surface-variant text-sm mt-2">
            <span className="flex items-center gap-1.5">
              <Icon name="bed" size="16px" />
              {property.beds} bd
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="bathtub" size="16px" />
              {property.baths} ba
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="straighten" size="16px" />
              {property.sqft} sqft
            </span>
          </div>
        </div>
        <Gauge value={property.aiScore} label={property.aiScore} sublabel="AI Score" />
      </div>

      <div className="relative">
        <div className="flex gap-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        {riskBadge && <FloatingBadge {...riskBadge} className="absolute left-1/2 -translate-x-1/2 -bottom-5 z-10" />}
      </div>

      <div className="relative">
        <div className="rounded-2xl border border-outline-variant bg-surface-container-high/60 p-5 pt-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">
                {projection.label}
              </p>
              <p className="text-on-surface text-lg font-bold mt-1">Total Return · {projection.totalReturn}</p>
            </div>
            <PeriodToggle options={projection.periods} defaultValue={projection.defaultPeriod} />
          </div>
          <div className="h-32">
            <MiniLineChart points={projection.points} />
          </div>
        </div>
        {trendBadge && <FloatingBadge {...trendBadge} className="absolute right-4 -bottom-5 z-10" />}
      </div>

      <InsightBanner {...insight} />
    </div>
  );
}

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
