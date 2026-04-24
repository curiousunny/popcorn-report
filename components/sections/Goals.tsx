import { GOALS } from "@/content/data/site-data";
import { GoalIcon } from "@/components/ui/GoalIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyLink } from "@/components/ui/CopyLink";

export function Goals() {
  return (
    <section id="goals" style={{ scrollMarginTop: 80 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>02 — Goals</div>
          <CopyLink id="goals" />
        </div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#253587", margin: 0 }}>Our Five Goals</h2>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 18, color: "#555", marginTop: 12, maxWidth: 640, lineHeight: 1.6 }}>
          By meeting these goals, POPCORN ensures children and pregnant people across Canada get the care they need — and that we&rsquo;re ready for the next health crisis.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {GOALS.map((g, i) => (
          <FadeIn key={g.id} delay={i * 100}>
            <div style={{ background: "white", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(37,53,135,0.06)", border: "1px solid #f0f0f0", height: "100%", boxSizing: "border-box" as const }}>
              <div style={{ marginBottom: 16 }}><GoalIcon type={g.icon} size={40} /></div>
              <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 15, color: "#f4017f", marginBottom: 6 }}>Goal {g.id}</div>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 18, color: "#253587", margin: "0 0 10px", lineHeight: 1.3 }}>{g.headline}</h3>
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#666", lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
