import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyLink } from "@/components/ui/CopyLink";

export function SNA() {
  return (
    <section id="sna" style={{ scrollMarginTop: 80 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>08 — Social Network Analysis</div>
          <CopyLink id="sna" />
        </div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#253587", margin: 0 }}>
          Snapshot of POPCORN&rsquo;s Network Impact
        </h2>
      </div>

      <div style={{ background: "#f8f9ff", borderRadius: 14, padding: "22px 28px", marginBottom: 32, border: "1px solid #e8edf8" }}>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.8, margin: 0 }}>
          In its third year, POPCORN took a close look at how the network is making a difference. An independent evaluation team (Genevieve Sutherns, Catherine Demers, Stephanie Glegg, Janet Curran) gathered feedback from members across Canada. Eighty-one members (32%) completed the survey, and 15 participated in interviews.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
        <FadeIn>
          <div style={{ background: "linear-gradient(135deg, #253587, #3a4faa)", borderRadius: 16, padding: "36px 28px", textAlign: "center", color: "white" }}>
            <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 60, fontWeight: 700, lineHeight: 1 }}>90%+</div>
            <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, opacity: 0.9, marginTop: 10, lineHeight: 1.6 }}>
              said the network has increased their research collaborations, including partnerships beyond their own institutions
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div style={{ background: "linear-gradient(135deg, #f4017f, #d90070)", borderRadius: 16, padding: "36px 28px", textAlign: "center", color: "white" }}>
            <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 60, fontWeight: 700, lineHeight: 1 }}>~80%</div>
            <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, opacity: 0.9, marginTop: 10, lineHeight: 1.6 }}>
              reported improved efficiency when starting new projects
            </div>
          </div>
        </FadeIn>
      </div>

      <div style={{ background: "white", borderRadius: 14, padding: "22px 28px", marginBottom: 32, border: "1px solid #f0f0f0" }}>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.8, margin: 0 }}>
          Members value POPCORN&rsquo;s support for grant writing, knowledge mobilization, EDI+I, patient engagement, and project funding. The network is also expanding access to research opportunities, supporting early career investigators, engaging smaller hospitals in national studies, and building new skills and leadership capacity.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.8, margin: "12px 0 0" }}>
          With seven networks and 16 sites working together, POPCORN is serving as a national connector and unified voice for pediatric health research.
        </p>
      </div>

      <div style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 22, color: "#253587", marginBottom: 20 }}>Three Recommendations</div>

      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <Image
            src="/sna-recommendations.jpg"
            alt="Strengthening POPCORN — Recommendations from the Social Network Analysis Evaluation (2025)"
            width={900}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: 12, display: "block", boxShadow: "0 2px 16px rgba(37,53,135,0.10)" }}
          />
        </div>
      </FadeIn>

      <div style={{ background: "#f5f8ff", borderRadius: 12, padding: "16px 22px", border: "1px solid #e8edf8" }}>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
          Together, these actions will help increase POPCORN&rsquo;s impact and long-term sustainability as a national leader in pediatric research.
        </p>
      </div>
    </section>
  );
}
