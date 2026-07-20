import Icon from "./Icon";

export default function NavLink({ icon, label, active = false, href = "#" }) {
  return (
    <a
      href={href}
      className={
        active
          ? "flex items-center gap-2 text-on-surface text-nav-link text-nav-link transition-colors"
          : "flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-nav-link text-nav-link transition-colors"
      }
    >
      <Icon name={icon} size="19px" />
      {label}
    </a>
  );
}
