export default function Gauge({ value, max = 100, size = 96, label, sublabel }) {
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
