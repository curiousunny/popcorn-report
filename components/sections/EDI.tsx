import { EDI_PROJECTS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

export function EDI() {
  return (
    <section id="edi" style={{ scrollMarginTop: 80 }}>
      <SectionBanner id="edi" title="Equity, Diversity, Inclusion & Indigeneity" />

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {EDI_PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 120}>
            <div style={{ background: "white", borderRadius: 16, padding: "28px 28px", boxShadow: "0 2px 16px rgba(37,53,135,0.06)", border: "1px solid #f0f0f0" }}>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 19, color: "#253587", margin: "0 0 8px" }}>{p.title}</h3>
              <div style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#888", marginBottom: 14 }}>
                {p.leads.join(", ")}{p.supervisors.length > 0 ? ` · supervised by ${p.supervisors.join(", ")}` : ""}
              </div>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 12px" }}>{p.body}</p>
              <div style={{ background: "#f0faf9", borderRadius: 10, padding: "12px 16px", borderLeft: "3px solid #25a89e" }}>
                <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#444", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{p.finding}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
