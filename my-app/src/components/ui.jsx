/**
 * Shared, generic UI primitives reused across sections.
 * Section-specific building blocks live inside their section file instead.
 */
import { useState } from "react";

export function Icon({ name, className = "", filled = false, size }) {
  const style = { fontVariationSettings: `'FILL' ${filled ? 1 : 0}` };
  if (size) style.fontSize = size;
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}

export function Pill({ children, className = "", dot = false, dotClassName = "bg-primary" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container/80 text-on-surface-variant text-[13px] font-medium ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotClassName}`} />}
      {children}
    </span>
  );
}

export function IconButton({ icon, badge = false, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
    >
      <Icon name={icon} size="20px" />
      {badge && (
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-surface-container" />
      )}
    </button>
  );
}

export function Avatar({ initials }) {
  return (
    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
      <span className="text-on-primary text-[13px] font-bold">{initials}</span>
    </div>
  );
}

export function Gauge({ value, max = 100, size = 96, label, sublabel }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / max);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 96 96" className="w-full h-full -rotate-90">
        <circle cx="48" cy="48" r={radius} fill="transparent" stroke="var(--color-outline-variant)" strokeWidth="7" />
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="transparent"
          stroke="var(--color-primary)"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-primary text-2xl font-bold leading-none">{label ?? value}</span>
        {sublabel && (
          <span className="text-on-surface-variant text-[9px] font-bold tracking-widest uppercase mt-1">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}

export function StatCard({ icon, label, value, delta }) {
  return (
    <div className="flex-1 rounded-2xl border border-outline-variant bg-surface-container/60 px-4 py-3.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-on-surface-variant text-[11px] font-bold tracking-widest uppercase">{label}</span>
        <Icon name={icon} className="text-on-surface-variant" size="16px" />
      </div>
      <div className="text-on-surface text-lg font-bold">{value}</div>
      {delta && <div className="text-primary text-xs font-semibold mt-0.5">{delta}</div>}
    </div>
  );
}

export function PeriodToggle({ options, defaultValue }) {
  const [active, setActive] = useState(defaultValue ?? options[0]);

  return (
    <div className="flex items-center gap-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setActive(option)}
          className={
            option === active
              ? "px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold"
              : "px-2.5 py-1 rounded-full text-on-surface-variant text-xs font-semibold hover:text-on-surface transition-colors"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function MiniLineChart({ points, width = 560, height = 140 }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = i * step;
    const y = height - ((p - min) / range) * height;
    return [x, y];
  });

  const linePath = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id="mini-line-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#mini-line-fill)" />
      <path d={linePath} fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="5" fill="var(--color-primary)" />
    </svg>
  );
}
