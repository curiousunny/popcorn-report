"use client";

import { useState } from "react";
import { WHATS_NEXT } from "@/content/data/site-data";
import { SectionBanner } from "@/components/ui/SectionBanner";

export function WhatsNext() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="whats-next" style={{ scrollMarginTop: 80 }}>
      <SectionBanner id="whats-next" title="What's to Come" />

      <div style={{ background: "linear-gradient(135deg, #f5f8ff, #fff8fb)", borderRadius: 20, padding: "40px 36px", boxShadow: "0 4px 32px rgba(37,53,135,0.08)", border: "1px solid #e8edf8" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ background: "#253587", color: "white", borderRadius: 12, padding: "10px 22px", fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 20 }}>{WHATS_NEXT.headline}</div>
          <div style={{ fontFamily: "var(--font-poppins)", fontSize: 16, color: "#555" }}>
            Funded through <strong>2028</strong> via CBRF
          </div>
        </div>

        <blockquote style={{ fontFamily: "var(--font-fraunces)", fontSize: 20, fontStyle: "italic", color: "#253587", borderLeft: "3px solid #f4017f", paddingLeft: 20, margin: "0 0 20px", lineHeight: 1.6 }}>
          &ldquo;{WHATS_NEXT.pullQuote}&rdquo;
        </blockquote>

        {expanded && (
          <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#555", lineHeight: 1.8 }}>
            {WHATS_NEXT.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}

        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          style={{ background: "none", border: "1px solid #25358744", borderRadius: 20, padding: "8px 20px", fontFamily: "var(--font-poppins)", fontSize: 14, color: "#253587", cursor: "pointer", marginTop: 12 }}
        >
          {expanded ? "Read less ↑" : "Read Dr. Drouin's full message ↓"}
        </button>
      </div>
    </section>
  );
}
