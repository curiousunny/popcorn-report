"use client";

import { useState } from "react";
import { LEADERS } from "@/content/data/site-data";
import { Avatar } from "@/components/ui/Avatar";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

export function Leadership() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section id="leadership" style={{ scrollMarginTop: 80 }}>
      <SectionBanner id="leadership" title="Message from Leadership" subtitle="Voices from the people guiding POPCORN's mission." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        {LEADERS.map((l, i) => (
          <FadeIn key={l.key} delay={i * 150}>
            <div style={{ background: "white", borderRadius: 16, padding: 32, boxShadow: "0 2px 20px rgba(37,53,135,0.07)", border: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <Avatar initials={l.initials} color={l.color} size={50} />
                <div>
                  <div style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, color: "#253587", fontSize: 16 }}>{l.name}</div>
                  <div style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#888" }}>{l.role}</div>
                </div>
              </div>

              <blockquote style={{ fontFamily: "var(--font-fraunces)", fontSize: 18, color: "#253587", fontStyle: "italic", margin: "0 0 16px", lineHeight: 1.6, borderLeft: `3px solid ${l.color}`, paddingLeft: 16 }}>
                &ldquo;{l.pullQuote}&rdquo;
              </blockquote>

              {expanded[l.key] && (
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 16 }}>
                  {l.full.split("\n\n").map((p, j) => (
                    <p key={j} style={{ marginTop: 0, marginBottom: 12 }}>{p}</p>
                  ))}
                </div>
              )}

              <button
                onClick={() => setExpanded((e) => ({ ...e, [l.key]: !e[l.key] }))}
                aria-expanded={!!expanded[l.key]}
                style={{
                  background: "none", border: `1px solid ${l.color}44`, borderRadius: 20,
                  padding: "6px 16px", fontFamily: "var(--font-poppins)", fontSize: 13,
                  color: l.color, cursor: "pointer",
                }}
              >
                {expanded[l.key] ? "Read less ↑" : "Read full message ↓"}
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
