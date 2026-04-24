import { REACH_STATS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyLink } from "@/components/ui/CopyLink";
import { Counter } from "@/components/ui/Counter";

const OUTPUTS = [
  {
    category: "Promotional Materials",
    items: [
      "Fact sheets (one for collaborators, one for patients and families)",
      "Infographic",
      "Map of participating sites",
      "Organizational structure",
      "All available in English and French on website",
    ],
  },
  {
    category: "Publications",
    items: [
      "2 academic publications",
      "1 poster presentation",
      "1 podcast",
      "2 oral research presentations",
      "1 infographic",
    ],
  },
  {
    category: "Presentations & Media",
    items: [
      "2 national webinars",
      "1 presentation and keynote",
      "2 media interviews",
    ],
  },
];

export function KnowledgeMobilization() {
  return (
    <section id="km" style={{ scrollMarginTop: 80 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>07 — Knowledge Mobilization</div>
          <CopyLink id="km" />
        </div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#253587", margin: 0 }}>
          Knowledge Mobilization Tools &amp; Impact
        </h2>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 18, color: "#555", marginTop: 12, maxWidth: 640, lineHeight: 1.6 }}>
          POPCORN&rsquo;s website and newsletter launched in 2022 and continues to grow. Website content is updated regularly, attracting more traffic. The top page views include: What is POPCORN?, Leadership, Projects, and Conference.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 48 }}>
        {OUTPUTS.map((o, i) => (
          <FadeIn key={o.category} delay={i * 100}>
            <div style={{ background: "white", borderRadius: 14, padding: "22px", boxShadow: "0 1px 3px rgba(37,53,135,0.05)", border: "1px solid #f0f0f0" }}>
              <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 15, color: "#25a89e", marginBottom: 12 }}>{o.category}</div>
              <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                {o.items.map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#555", marginBottom: 6, lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>Snapshot of Reach</div>
        </div>
        <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 28, color: "#253587", margin: 0 }}>By the Numbers</h3>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 1, background: "#f0f0f0", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 4px rgba(37,53,135,0.06)" }}>
        {REACH_STATS.map((s, i) => (
          <div key={s.label} style={{ background: "white" }}>
            <Counter
              value={s.value}
              label={s.label}
              context={s.note}
              format={s.prefix === "$" ? "currency" : "integer"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
