import type { CSSProperties } from "react";

/** Título en líneas fijas: cada línea entra por separado cuando hay movimiento. */
export default function Title({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: readonly string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag data-lines className={`font-semibold tracking-tight text-balance ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="title-line">
          <span style={{ "--i": i } as CSSProperties}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p data-reveal className={`mb-5 text-sm font-medium ${dark ? "text-suave/70" : "text-vinho"}`}>
      {children}
    </p>
  );
}
