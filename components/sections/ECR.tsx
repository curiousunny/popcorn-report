"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ECR_VOICES } from "@/content/data/site-data";
import { SectionBanner } from "@/components/ui/SectionBanner";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const QUOTE_ACCENT = "#25a89e";
const CAROUSEL_INTERVAL_MS = 8500;

export function ECR() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const activeVoice = ECR_VOICES[activeIndex] ?? ECR_VOICES[0];
  const paragraphs = useMemo(() => activeVoice.quote.split("\n\n"), [activeVoice.quote]);
  const showQuote = (index: number) => {
    const nextIndex = (index + ECR_VOICES.length) % ECR_VOICES.length;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (isPaused || reducedMotion || ECR_VOICES.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ECR_VOICES.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  return (
    <section id="ecr" className="chapter-section">
      <SectionBanner id="ecr" title="Early Career Researchers & Career Advancement" subtitle="POPCORN has supported trainees and early career researchers through the developing mentorship program as well as through collaborations with ENRICH and IMPaCT training programs." />

      <div
        style={{ display: "grid", justifyItems: "center", gap: 16, padding: "4px 4px 18px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <article
          key={activeVoice.name}
          className="ecr-quote-card"
          data-theme-card="true"
          aria-live="polite"
          style={{
            background: "white",
            borderRadius: 16,
            padding: "clamp(26px, 4vw, 46px)",
            boxShadow: "0 2px 16px rgba(37,53,135,0.07)",
            position: "relative",
            border: `1px solid ${QUOTE_ACCENT}33`,
            width: "min(100%, 760px)",
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", bottom: -12, left: 52, width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderTop: "12px solid white", filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.05))" }} aria-hidden="true" />
          <div>
            <svg style={{ marginBottom: 18, opacity: 0.28 }} width="44" height="34" viewBox="0 0 32 24" fill={QUOTE_ACCENT} aria-hidden="true">
              <path d="M0 0h12v12H6L0 24V0zm20 0h12v12h-6L20 24V0z"/>
            </svg>
            <div style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(15px, 1.5vw, 18px)", color: "#111", lineHeight: 1.68, margin: "0 0 26px", fontStyle: "italic" }}>
              {paragraphs.map((para, k) => (
                <p key={k} style={{ margin: k === 0 ? 0 : "12px 0 0" }}>{k === 0 ? `“${para}` : para}{k === paragraphs.length - 1 ? "”" : ""}</p>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                flex: "0 0 64px",
                border: `3px solid ${QUOTE_ACCENT}`,
                boxShadow: "0 6px 18px rgba(37,53,135,0.12)",
                background: "#f7fbfa",
              }}
            >
              <Image
                src={activeVoice.photoSrc}
                alt={activeVoice.photoAlt}
                fill
                sizes="64px"
                style={{
                  objectFit: "cover",
                  objectPosition: activeVoice.photoPosition,
                }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(18px, 2.2vw, 24px)", color: "#253587" }}>{activeVoice.name}</div>
              <div style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(13px, 1.5vw, 16px)", color: "#777" }}>{activeVoice.role}</div>
            </div>
          </div>
        </article>

        <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => showQuote(activeIndex - 1)}
            aria-label="Show previous career advancement quote"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: `1px solid ${QUOTE_ACCENT}`,
              background: "white",
              color: QUOTE_ACCENT,
              cursor: "pointer",
              fontFamily: "var(--font-poppins)",
              fontSize: 20,
              lineHeight: 1,
              transition: reducedMotion ? "none" : "background 180ms ease, color 180ms ease, transform 180ms ease",
            }}
          >
            ‹
          </button>

          <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }} aria-label="Career advancement quote selector">
          {ECR_VOICES.map((voice, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={voice.name}
                type="button"
                onClick={() => showQuote(index)}
                aria-label={`Show quote from ${voice.name}`}
                aria-current={isActive ? "true" : undefined}
                style={{
                  width: isActive ? 30 : 12,
                  height: 12,
                  borderRadius: 999,
                  border: `1px solid ${QUOTE_ACCENT}`,
                  background: isActive ? QUOTE_ACCENT : "transparent",
                  cursor: "pointer",
                  padding: 0,
                  transition: reducedMotion ? "none" : "all 180ms ease",
                }}
              >
                <span className="sr-only">{voice.name}</span>
              </button>
            );
          })}
          </div>

          <button
            type="button"
            onClick={() => showQuote(activeIndex + 1)}
            aria-label="Show next career advancement quote"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: `1px solid ${QUOTE_ACCENT}`,
              background: "white",
              color: QUOTE_ACCENT,
              cursor: "pointer",
              fontFamily: "var(--font-poppins)",
              fontSize: 20,
              lineHeight: 1,
              transition: reducedMotion ? "none" : "background 180ms ease, color 180ms ease, transform 180ms ease",
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
