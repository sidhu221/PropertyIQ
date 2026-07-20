export default function Pill({ children, className = "", dot = false, dotClassName = "bg-primary" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container/80 text-on-surface-variant text-[13px] font-medium ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotClassName}`} />}
      {children}
    </span>
  );
}
