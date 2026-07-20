import Icon from "./Icon";

export default function FloatingBadge({ icon, iconTone = "primary", title, subtitle, className = "" }) {
  const toneClasses =
    iconTone === "warning"
      ? "bg-warning/15 text-warning"
      : "bg-primary/15 text-primary";

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
