import { EDI_PROJECTS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyLink } from "@/components/ui/CopyLink";

export function EDI() {
  return (
    <section id="edi" style={{ scrollMarginTop: 80 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>05 — EDI+I</div>
          <CopyLink id="edi" />
        </div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#253587", margin: 0 }}>
          Equity, Diversity, Inclusion & Indigeneity
        </h2>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 18, color: "#555", marginTop: 12, lineHeight: 1.6 }}>
          EDI+I isn&rsquo;t a section of our work — it&rsquo;s a thread woven through everything we do.
        </p>
      </div>

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
