import Logo from "./Logo";
import NavLink from "./NavLink";
import IconButton from "./IconButton";
import Avatar from "./Avatar";

const navItems = [
  { icon: "home", label: "Dashboard", active: true },
  { icon: "apartment", label: "Portfolio" },
  { icon: "trending_up", label: "Opportunities" },
  { icon: "assignment", label: "Due Diligence" },
  { icon: "auto_awesome", label: "AI Insights" },
  { icon: "folder", label: "Saved" },
];

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
