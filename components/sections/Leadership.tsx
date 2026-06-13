"use client";

import { useState } from "react";
import Image from "next/image";
import { LEADERS } from "@/content/data/site-data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

const LEADER_PHOTOS: Record<string, { src: string; alt: string }[]> = {
  olivier: [{ src: "/report-assets/olivier-drouin.png", alt: "Dr. Olivier Drouin" }],
  gc: [
    { src: "/report-assets/srinivas-murthy.png", alt: "Dr. Srin Murthy" },
    { src: "/report-assets/francine-buchanan.jpg", alt: "Dr. Francine Buchanan" },
  ],
};

export function Leadership() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section id="leadership" className="chapter-section">
      <SectionBanner id="leadership" title="Message from Leadership" subtitle="Voices from the people guiding POPCORN's purpose." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        {LEADERS.map((l, i) => (
          <FadeIn key={l.key} delay={i * 150}>
            <div data-theme-card="true" style={{ background: "white", borderRadius: 16, padding: 32, boxShadow: "0 2px 20px rgba(37,53,135,0.07)", border: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ display: "flex", flexShrink: 0 }}>
                  {(LEADER_PHOTOS[l.key] ?? []).map((photo, idx) => (
                    <Image
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      width={74}
                      height={74}
                      style={{
                        width: 74,
                        height: 74,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid white",
                        boxShadow: "0 4px 14px rgba(37,53,135,0.18)",
                        marginLeft: idx === 0 ? 0 : -18,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#253587", fontSize: 16 }}>{l.name}</div>
                  <div style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#888" }}>{l.role}</div>
                </div>
              </div>

              <blockquote style={{ fontFamily: "var(--font-heading)", fontSize: 20, color: "#253587", fontStyle: "italic", margin: "0 0 16px", lineHeight: 1.6, borderLeft: "4px solid var(--chapter-color)", paddingLeft: 16 }}>
                &ldquo;{l.pullQuote}&rdquo;
              </blockquote>

              <button
                onClick={() => setExpanded((e) => ({ ...e, [l.key]: !e[l.key] }))}
                aria-expanded={!!expanded[l.key]}
                style={{
                  background: "none", border: "1px solid color-mix(in srgb, var(--chapter-color) 28%, white)", borderRadius: 20,
                  padding: "6px 16px", fontFamily: "var(--font-poppins)", fontSize: 13,
                  color: "var(--chapter-color)", cursor: "pointer",
                }}
              >
                {expanded[l.key] ? "Read less ↑" : "Read full message ↓"}
              </button>

              {expanded[l.key] && (
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.75, marginTop: 16 }}>
                  {l.full.split("\n\n").map((p, j) => (
                    <p key={j} style={{ marginTop: 0, marginBottom: 12 }}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
