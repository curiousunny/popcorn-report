import { ECR_VOICES } from "@/content/data/site-data";
import { Avatar } from "@/components/ui/Avatar";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

export function ECR() {
  return (
    <section id="ecr" style={{ scrollMarginTop: 80 }}>
      <SectionBanner id="ecr" title="Early Career Researchers & Career Advancement" subtitle="POPCORN has supported trainees and early career researchers through the developing mentorship program as well as through collaborations with ENRICH and IMPaCT training programs." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {ECR_VOICES.map((v, i) => (
          <FadeIn key={v.name} delay={i * 150}>
            <div style={{ background: "white", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(37,53,135,0.07)", position: "relative", border: "1px solid #f0f0f0" }}>
              <div style={{ position: "absolute", bottom: -12, left: 36, width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderTop: "12px solid white", filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.05))" }} aria-hidden="true" />
              <svg style={{ marginBottom: 12, opacity: 0.3 }} width="32" height="24" viewBox="0 0 32 24" fill={v.color} aria-hidden="true">
                <path d="M0 0h12v12H6L0 24V0zm20 0h12v12h-6L20 24V0z"/>
              </svg>
              <div style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#444", lineHeight: 1.75, margin: "0 0 20px", fontStyle: "italic" }}>
                {v.quote.split("\n\n").map((para, k) => (
                  <p key={k} style={{ margin: k === 0 ? 0 : "10px 0 0" }}>{k === 0 ? `“${para}` : para}{k === v.quote.split("\n\n").length - 1 ? "”" : ""}</p>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar initials={v.initials} color={v.color} size={44} />
                <div>
                  <div style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 15, color: "#253587" }}>{v.name}</div>
                  <div style={{ fontFamily: "var(--font-poppins)", fontSize: 12, color: "#888" }}>{v.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
