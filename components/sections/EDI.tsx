import Image from "next/image";
import { EDI_PROJECTS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

export function EDIContent() {
  const prioritizedProjects = [
    ...EDI_PROJECTS.filter((project) => project.title.startsWith("CIHR Team Grant")),
    ...EDI_PROJECTS.filter((project) => !project.title.startsWith("CIHR Team Grant")),
  ];

  const metadataFor = (project: (typeof EDI_PROJECTS)[number]) => {
    if (project.title.startsWith("Language Inclusivity")) {
      return `${project.leads.join(", ")} · contributions by Vivian Qiang`;
    }
    return `${project.leads.join(", ")}${project.supervisors.length > 0 ? ` · supervised by ${project.supervisors.join(", ")}` : ""}`;
  };

  return (
    <div className="chapter-subsection" style={{ borderTop: 0, paddingTop: 0 }}>
      <div style={{ marginBottom: 24 }}>
        <Image
          src="/report-assets/edi/empowering-voices-shaping-futures.png"
          alt="Mind map titled Empowering Voices, Shaping Futures: Youth Advisory Councils for Research"
          width={1800}
          height={1200}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, border: "1px solid #f0f0f0" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {prioritizedProjects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 120}>
            <div data-theme-card="true" style={{ background: "white", borderRadius: 16, padding: "28px 28px", boxShadow: "0 2px 16px rgba(37,53,135,0.06)", border: "1px solid #f0f0f0" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: "#253587", margin: "0 0 8px" }}>{p.title}</h3>
              <div style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#888", marginBottom: 14 }}>
                {metadataFor(p)}
              </div>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.7, margin: "0 0 12px" }}>{p.body}</p>
              <div style={{ background: "var(--chapter-bg)", borderRadius: 10, padding: "12px 16px", borderLeft: "3px solid var(--chapter-color)" }}>
                <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#111", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{p.finding}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function EDI() {
  return (
    <section id="edi" className="chapter-section">
      <SectionBanner id="edi" title="Equity, Diversity, Inclusion & Indigeneity" />
      <EDIContent />
    </section>
  );
}
