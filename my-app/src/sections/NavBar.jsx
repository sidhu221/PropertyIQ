import { Link, useLocation } from "react-router-dom";
import { Icon, IconButton, Avatar } from "../components/ui";

const navItems = [
  { icon: "home", label: "Dashboard", to: "/" },
  { icon: "apartment", label: "Portfolio", to: "/portfolio" },
  { icon: "trending_up", label: "Opportunities", to: "#" },
  { icon: "assignment", label: "Due Diligence", to: "#" },
  { icon: "auto_awesome", label: "AI Insights", to: "#" },
  { icon: "folder", label: "Saved", to: "#" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src="/logo-icon.png" alt="" className="h-9 w-auto shrink-0" />
      <span className="text-nav-title text-nav-title whitespace-nowrap">
        <span className="text-primary">Property</span>
        <span className="text-white">IQ</span>
      </span>
    </Link>
  );
}

function NavLink({ icon, label, to }) {
  const { pathname } = useLocation();
  const active = to !== "#" && (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={
        active
          ? "flex items-center gap-2 text-on-surface text-nav-link text-nav-link transition-colors"
          : "flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-nav-link text-nav-link transition-colors"
      }
    >
      <Icon name={icon} size="19px" />
      {label}
    </Link>
  );
}

export default function NavBar() {
  return (
    <header className="w-full px-4 pt-4">
      <nav className="flex items-center justify-between gap-6 mx-auto max-w-[1600px] rounded-2xl border border-outline-variant/60 bg-surface-container/80 backdrop-blur-xl px-6 py-3">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <IconButton icon="search" label="Search" />
          <IconButton icon="notifications" label="Notifications" badge />
          <div className="ml-2">
            <Avatar initials="JM" />
          </div>
        </div>
      </nav>
    </header>
  );
}
