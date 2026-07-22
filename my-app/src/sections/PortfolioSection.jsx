import { Icon, Pill } from "../components/ui";
import { portfolioStats, portfolioCashFlow, portfolioActivity } from "../data/portfolioDemo";

function PortfolioStatCard({ icon, label, value, delta }) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-primary/60 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative rounded-3xl border border-outline-variant bg-surface-container/70 backdrop-blur-xl px-6 py-6 transition-colors duration-300 group-hover:border-primary/40">
        <div className="flex items-center justify-between mb-4">
          <span className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">{label}</span>
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
            <Icon name={icon} className="text-on-surface-variant" size="16px" />
          </div>
        </div>
        <div className="text-on-surface text-3xl font-bold">{value}</div>
        <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-2">
          <Icon name="north_east" size="14px" />
          {delta}
        </div>
      </div>
    </div>
  );
}

function CashFlowChart({ data }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="rounded-3xl border border-outline-variant bg-surface-container/70 backdrop-blur-xl p-6 flex-1">
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">Performance</p>
          <p className="text-on-surface text-lg font-bold mt-1">Cash flow · 12 months</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Actual
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-outline-variant" />
            Forecast
          </span>
        </div>
      </div>

      <div className="flex items-end gap-2 h-56">
        {data.map((d, i) => (
          <div key={i} className="group relative flex-1 flex flex-col items-center justify-end h-full gap-2">
            <div
              className={`w-full rounded-t-md transition-all duration-200 ${
                d.forecast ? "bg-outline-variant group-hover:brightness-150" : "bg-primary group-hover:brightness-125"
              }`}
              style={{ height: `${(d.value / max) * 100}%` }}
            />
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-2 w-10 h-6 rounded-full bg-primary/70 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-3">
        {data.map((d, i) => (
          <span key={i} className="flex-1 text-center text-on-surface-variant text-xs">
            {d.month}
          </span>
        ))}
      </div>
    </div>
  );
}

function ActivityFeed({ items }) {
  return (
    <div className="rounded-3xl border border-outline-variant bg-surface-container/70 backdrop-blur-xl p-6 w-full lg:w-96 shrink-0">
      <p className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase mb-4">Activity</p>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
              <Icon name={item.icon} className="text-on-surface-variant" size="18px" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-on-surface text-sm font-bold truncate">{item.title}</p>
              <p className="text-on-surface-variant text-xs mt-0.5">{item.time}</p>
            </div>
            <p className="text-on-surface text-sm font-bold whitespace-nowrap">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] hero-glow rounded-full pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-20 space-y-6">
        <div className="text-center space-y-5 max-w-3xl mx-auto mb-4">
          <Pill className="mx-auto">PORTFOLIO</Pill>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-on-surface">
            One dashboard for your entire <span className="text-primary">real estate book</span>
          </h1>

          <p className="text-on-surface-variant text-lg">
            Live valuations, monthly cash flow, occupancy, and maintenance across every unit — updated
            automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {portfolioStats.map((stat) => (
            <PortfolioStatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <CashFlowChart data={portfolioCashFlow} />
          <ActivityFeed items={portfolioActivity} />
        </div>
      </div>
    </section>
  );
}
