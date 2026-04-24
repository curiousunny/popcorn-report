import { PE_SESSIONS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyLink } from "@/components/ui/CopyLink";

export function PatientEngagement() {
  return (
    <section id="patient-engagement" style={{ scrollMarginTop: 80 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>04 — Patient Engagement</div>
          <CopyLink id="patient-engagement" />
        </div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#253587", margin: 0 }}>
          Patient Engagement Training Series
        </h2>
      </div>

      <div style={{ background: "#fff8fb", borderRadius: 14, padding: "22px 28px", border: "1px solid #fdcce1", marginBottom: 28 }}>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.8, margin: 0 }}>
          Codeveloped with patient partners, a three-part POPCORN Patient Engagement Training Series was developed to equip researchers, research staff, and trainees with practical skills to meaningfully engage individuals with lived experience throughout the research process. This initiative emerged from a POPCORN network needs assessment completed in June 2023 in which <strong>34% of respondents identified training in patient engagement as a major gap</strong>.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.8, margin: "12px 0 0" }}>
          Building on this insight, patient and family partners co-led the design and development of the series — identifying key themes, shaping the content, and co-creating three connected sessions. A Steering Committee was developed and subcommittees of patient and family partners met over several months in 2024 and 2025. Their generous contributions, expertise, and lived experience perspectives shaped the foundation of the training series.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
        {PE_SESSIONS.map((s, i) => (
          <FadeIn key={s.number} delay={i * 120}>
            <div style={{ background: "white", borderRadius: 16, padding: "28px 24px", boxShadow: "0 1px 4px rgba(37,53,135,0.06)", border: "1px solid #f0f0f0" }}>
              <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 14, color: "#f4017f", marginBottom: 8 }}>Session {s.number}</div>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 18, color: "#253587", margin: "0 0 12px" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#555", lineHeight: 1.65, margin: "0 0 16px" }}>
                <strong>Aim:</strong> {s.aim}
              </p>
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 12 }}>
                <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 13, color: "#888", marginBottom: 8 }}>Patient Partner Speakers</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {s.speakers.map((sp) => (
                    <div key={sp} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#fdcce1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#f4017f", fontFamily: "var(--font-fraunces)", flexShrink: 0 }}>
                        {sp.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </div>
                      <span style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#444" }}>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div style={{ background: "white", borderRadius: 14, padding: "20px 24px", border: "1px solid #f0f0f0", boxShadow: "0 1px 3px rgba(37,53,135,0.05)" }}>
        <div style={{ fontFamily: "var(--font-coming-soon)", color: "#f4017f", fontSize: 14, marginBottom: 8 }}>Wrap Up</div>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#555", lineHeight: 1.75, margin: "0 0 10px" }}>
          A debrief steering committee meeting is planned in April 2026. A paper is being drafted, led by Bukola Ibitoye and supported by patient partners with aim to submit for publication in late 2026, which will include evaluation metrics from the patient and family partners, researchers and trainees and webinar attendee evaluation metrics.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#555", lineHeight: 1.75, margin: "0 0 10px" }}>
          This series reflects POPCORN&rsquo;s commitment to inclusive, collaborative, and meaningful patient &amp; family partnerships.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>
          Did you miss the sessions? You can{" "}
          <a href="https://www.popcornpediatrics.ca" target="_blank" rel="noopener noreferrer" style={{ color: "#f4017f" }}>
            access a training recording and participant guide here
          </a>{" "}
          if you would like to complete each training module through self-study.
        </p>
      </div>
    </section>
  );
}
