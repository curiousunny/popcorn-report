import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

export function SNAContent() {
  return (
    <div className="chapter-subsection">
      <h3 className="chapter-subtitle">Snapshot of POPCORN&apos;s Network Impact</h3>
      <div data-theme-card="true" style={{ background: "white", borderRadius: 14, padding: "22px 28px", marginBottom: 32, border: "1px solid #e8edf8" }}>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, margin: 0 }}>
          In its third year, POPCORN took a close look at how the network is making a difference. An independent evaluation team (Genevieve Sutherns, Catherine Demers, Stephanie Glegg, Janet Curran) gathered feedback from members across Canada. Eighty-one members (32%) completed the survey, and 15 participated in interviews.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, margin: "10px 0 0" }}>
          The findings show that POPCORN is strengthening Canada&rsquo;s pediatric research community.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32, alignItems: "stretch" }}>
        <FadeIn>
          <div style={{ background: "linear-gradient(135deg, #253587, #3a4faa)", borderRadius: 16, padding: "36px 28px", textAlign: "center", color: "white", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.2vw, 36px)", fontWeight: 700, lineHeight: 1.1 }}>More than 90%</div>
            <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, opacity: 0.9, marginTop: 10, lineHeight: 1.6 }}>
              of respondents said the network has increased their research collaborations, including partnerships beyond their own institutions
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div style={{ background: "linear-gradient(135deg, #f4017f, #d90070)", borderRadius: 16, padding: "36px 28px", textAlign: "center", color: "white", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.2vw, 36px)", fontWeight: 700, lineHeight: 1.1 }}>Nearly 80%</div>
            <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, opacity: 0.9, marginTop: 10, lineHeight: 1.6 }}>
              reported improved efficiency when starting new projects
            </div>
          </div>
        </FadeIn>
      </div>

      <div data-theme-card="true" style={{ background: "white", borderRadius: 14, padding: "22px 28px", marginBottom: 32, border: "1px solid #f0f0f0" }}>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, margin: 0 }}>
          Members value POPCORN&rsquo;s support for grant writing, knowledge mobilization, EDI+I, patient engagement, and project funding. The network is also expanding access to research opportunities, supporting early career investigators, engaging smaller hospitals in national studies, and building new skills and leadership capacity.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, margin: "12px 0 0" }}>
          With seven networks and 16 sites working together, POPCORN is serving as a national connector and unified voice for pediatric health research.
        </p>
      </div>

      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--chapter-color)", marginBottom: 20 }}>Three Recommendations</div>

      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <Image
            src="/sna-recommendations.png"
            alt="Strengthening POPCORN — Recommendations from the Social Network Analysis Evaluation (2025)"
            width={900}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: 12, display: "block", boxShadow: "0 2px 16px rgba(37,53,135,0.10)" }}
          />
        </div>
      </FadeIn>

      <div data-theme-card="true" style={{ background: "white", borderRadius: 12, padding: "22px 26px", border: "1px solid #e8edf8" }}>
        <p style={{ fontFamily: "var(--font-heading)", fontSize: 21, color: "var(--chapter-color)", lineHeight: 1.55, margin: 0, fontStyle: "italic", fontWeight: 700 }}>
          Together, these actions will help increase POPCORN&rsquo;s impact and long-term sustainability as a national leader in pediatric research.
        </p>
      </div>
    </div>
  );
}

export function SNA() {
  return (
    <section id="sna" className="chapter-section">
      <SectionBanner id="ecr" title="Snapshot of POPCORN's Network Impact" />
      <SNAContent />
    </section>
  );
}
