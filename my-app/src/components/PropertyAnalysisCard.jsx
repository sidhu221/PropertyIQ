import Icon from "./Icon";
import Gauge from "./Gauge";
import StatCard from "./StatCard";
import MiniLineChart from "./MiniLineChart";
import PeriodToggle from "./PeriodToggle";
import FloatingBadge from "./FloatingBadge";
import InsightBanner from "./InsightBanner";

export default function PropertyAnalysisCard({ property, stats, projection, riskBadge, trendBadge, insight }) {
  return (
    <div className="rounded-3xl border border-outline-variant bg-surface-container/70 backdrop-blur-xl p-6 space-y-5 shadow-2xl">
      {/* Property header */}
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

      {/* Stat row */}
      <div className="relative">
        <div className="flex gap-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        {riskBadge && (
          <FloatingBadge {...riskBadge} className="absolute left-1/2 -translate-x-1/2 -bottom-5 z-10" />
        )}
      </div>

      {/* Projection chart */}
      <div className="relative">
        <div className="rounded-2xl border border-outline-variant bg-surface-container-high/60 p-5 pt-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">
                {projection.label}
              </p>
              <p className="text-on-surface text-lg font-bold mt-1">
                Total Return · {projection.totalReturn}
              </p>
            </div>
            <PeriodToggle options={projection.periods} defaultValue={projection.defaultPeriod} />
          </div>
          <div className="h-32">
            <MiniLineChart points={projection.points} />
          </div>
        </div>
        {trendBadge && (
          <FloatingBadge {...trendBadge} className="absolute right-4 -bottom-5 z-10" />
        )}
      </div>

      <InsightBanner {...insight} />
    </div>
  );
}
