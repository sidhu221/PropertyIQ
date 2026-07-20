export default function Avatar({ initials }) {
  return (
    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
      <span className="text-on-primary text-[13px] font-bold">{initials}</span>
    </div>
  );
}
