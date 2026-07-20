export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img src="/logo-icon.png" alt="" className="h-9 w-auto shrink-0" />
      <span className="text-nav-title text-nav-title whitespace-nowrap">
        <span className="text-primary">Property</span>
        <span className="text-white">IQ</span>
      </span>
    </div>
  );
}
