import Icon from "./Icon";

export default function IconButton({ icon, badge = false, onClick, label }) {
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
