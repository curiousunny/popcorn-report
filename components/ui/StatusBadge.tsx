import { STATUS_LABELS } from "@/content/data/site-data";

export function StatusBadge({ status }: { status: string }) {
  const info = STATUS_LABELS[status] ?? { label: status, color: "#888" };
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: 20,
      background: info.color + "18", color: info.color,
      fontFamily: "var(--font-poppins)", fontSize: 11, fontWeight: 700,
      letterSpacing: 0.5, textTransform: "uppercase" as const,
    }}>
      {info.label}
    </span>
  );
}
