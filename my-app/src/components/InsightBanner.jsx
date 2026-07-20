import Icon from "./Icon";

export default function InsightBanner({ title, description }) {
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
