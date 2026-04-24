type Props = { initials: string; color?: string; size?: number };

export function Avatar({ initials, color = "#253587", size = 40 }: Props) {
  return (
    <div
      style={{
        width: size, height: size, borderRadius: "50%",
        background: color + "22", border: `2px solid ${color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-fraunces)", fontWeight: 700,
        fontSize: size * 0.35, color, flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}
