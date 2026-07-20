import { useState } from "react";

export default function PeriodToggle({ options, defaultValue }) {
  const [active, setActive] = useState(defaultValue ?? options[0]);

  return (
    <div className="flex items-center gap-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setActive(option)}
          className={
            option === active
              ? "px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold"
              : "px-2.5 py-1 rounded-full text-on-surface-variant text-xs font-semibold hover:text-on-surface transition-colors"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
