import Icon from "./Icon";

export default function StatCard({ icon, label, value, delta }) {
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
