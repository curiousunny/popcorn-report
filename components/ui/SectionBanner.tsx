import { CopyLink } from "@/components/ui/CopyLink";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionBanner({ id, title, subtitle }: Props) {
  return (
    <div
      style={{
        background: "#253587",
        marginLeft: -48,
        marginRight: -48,
        padding: "36px 48px 32px",
        marginBottom: 40,
      }}
      className="section-banner"
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.15 }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontFamily: "var(--font-poppins)", fontSize: 16, color: "rgba(255,255,255,0.75)", marginTop: 10, maxWidth: 640, lineHeight: 1.65, marginBottom: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ paddingTop: 6, flexShrink: 0 }}>
          <CopyLink id={id} light />
        </div>
      </div>
    </div>
  );
}
