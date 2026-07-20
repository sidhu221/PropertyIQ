import { useState } from "react";
import Icon from "./Icon";

export default function HeroSearchBar({ placeholder, ctaLabel, helperText, onSubmit }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(url);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="flex-1 flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-container/80 px-5 py-4 focus-within:border-primary/60 transition-colors">
          <Icon name="search" className="text-on-surface-variant" size="20px" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-on-surface placeholder:text-on-surface-variant/60 text-sm"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-primary text-on-primary font-bold px-6 py-4 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
        >
          <Icon name="auto_awesome" size="18px" filled />
          {ctaLabel}
          <Icon name="arrow_forward" size="18px" />
        </button>
      </div>
      {helperText && <p className="text-on-surface-variant/70 text-xs px-1">{helperText}</p>}
    </form>
  );
}
