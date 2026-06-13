import Image from "next/image";
import { PE_SESSIONS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

const SESSION_VIDEOS: Record<number, string> = {
  1: "https://www.youtube.com/embed/_OOa-D-EU3E",
  2: "https://www.youtube.com/embed/LdMrbOfc_j4",
  3: "https://www.youtube.com/embed/4R6HHbN3Hro",
};

export function PatientEngagement() {
  return (
    <section id="patient-engagement" className="chapter-section">
      <SectionBanner id="patient-engagement" title="Patient Engagement" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, alignItems: "stretch", marginBottom: 28 }}>
        <div data-theme-card="true" style={{ background: "white", borderRadius: 14, padding: "22px 28px", border: "1px solid #f0f0f0" }}>
          <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, margin: 0 }}>
            Co-developed with patient partners, a three-part POPCORN Patient Engagement Training Series was developed to equip researchers, research staff, and trainees with practical skills to meaningfully engage individuals with lived experience throughout the research process. This initiative emerged from a POPCORN network needs assessment completed in June 2023 in which <strong style={{ color: "var(--chapter-color)" }}>34% of respondents identified training in patient engagement as a major gap</strong>.
          </p>
          <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, margin: "12px 0 0" }}>
            Building on this insight, patient and family partners co-led the design and development of the series — identifying key themes, shaping the content, and co-creating three connected sessions.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a href="https://www.popcornpediatrics.ca/deconstruct-to-reconstruct-patient-engagement-training-series#selfstudy" target="_blank" rel="noopener noreferrer" className="pe-training-button">
              Training materials and self-study
            </a>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 280, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 18px rgba(37,53,135,0.12)", background: "white" }}>
          <Image
            src="/report-assets/pe-training-partners.png"
            alt="Patient and family partners co-designing the POPCORN Patient Engagement Training Series"
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
        {PE_SESSIONS.map((s, i) => (
          <FadeIn key={s.number} delay={i * 120}>
            <div data-theme-card="true" style={{ background: "white", borderRadius: 16, padding: "28px 24px", boxShadow: "0 1px 4px rgba(37,53,135,0.06)", border: "1px solid #f0f0f0" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, color: "var(--chapter-color)", marginBottom: 8 }}>Session {s.number}</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, color: "#253587", margin: "0 0 12px" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#111", lineHeight: 1.65, margin: "0 0 16px" }}>
                <strong>Aim:</strong> {s.aim}
              </p>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 12, border: "1px solid #f0f0f0", marginBottom: 16, background: "#111" }}>
                <iframe
                  src={SESSION_VIDEOS[s.number]}
                  title={`Patient Engagement Training Series Session ${s.number}: ${s.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 12 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 13, color: "#888", marginBottom: 8 }}>Patient Partner Speakers</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {s.speakers.map((sp) => (
                    <div key={sp} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--chapter-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "var(--chapter-color)", fontFamily: "var(--font-heading)", flexShrink: 0 }}>
                        {sp.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </div>
                      <span style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#111" }}>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div data-theme-card="true" style={{ background: "white", borderRadius: 14, padding: "20px 24px", border: "1px solid #f0f0f0", boxShadow: "0 1px 3px rgba(37,53,135,0.05)" }}>
        <div style={{ fontFamily: "var(--font-heading)", color: "var(--chapter-color)", fontSize: 14, marginBottom: 8 }}>Wrap Up</div>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#111", lineHeight: 1.75, margin: "0 0 10px" }}>
          A debrief steering committee meeting was held in April 2026. Two papers are being drafted led by Bukola Ibitoye and Ahastan Surees (supported by patient partners) with an aim to submit for publication in late 2026, one of the papers will include evaluation metrics from the patient and family partners, researchers and trainees and webinar attendee evaluation metrics.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#111", lineHeight: 1.75, margin: "0 0 10px" }}>
          This series reflects POPCORN&rsquo;s commitment to inclusive, collaborative, and meaningful patient &amp; family partnerships.
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#111", lineHeight: 1.7, margin: 0 }}>
          Did you miss the sessions? You can{" "}
          <a href="https://www.popcornpediatrics.ca/deconstruct-to-reconstruct-patient-engagement-training-series#selfstudy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--chapter-color)", fontWeight: 700 }}>
            access a training recording and participant guide here
          </a>{" "}
          if you would like to complete each training module through self-study.
        </p>
      </div>
    </section>
  );
}
