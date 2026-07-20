export default function Icon({ name, className = "", filled = false, size }) {
  const style = { fontVariationSettings: `'FILL' ${filled ? 1 : 0}` };
  if (size) style.fontSize = size;
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}
