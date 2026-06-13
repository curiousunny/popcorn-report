"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { WHATS_NEXT } from "@/content/data/site-data";
import { SectionBanner } from "@/components/ui/SectionBanner";

const appendixButtonClass =
  "inline-flex max-w-full items-center justify-center rounded-full border border-[#253587] bg-[#253587] px-5 py-2.5 text-center text-sm font-extrabold !text-white no-underline transition-colors duration-200 hover:bg-transparent hover:!text-[#253587] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#253587]";

const emphasisStyle = { color: "var(--chapter-color)", fontWeight: 700 };

const emphasizedPhrases = [
  "POPCORN 2.0",
  "Canada Biomedical Research Fund through 2028",
  "renewed vision and purpose",
  "expansion of our activities",
  "knowledge transfer outputs",
  "EDI+I",
  "expansion, innovation, and impact",
] as const;

const phrasesByLength = [...emphasizedPhrases].sort((a, b) => b.length - a.length);

function renderParagraph(text: string) {
  const parts: ReactNode[] = [];
  let index = 0;

  while (index < text.length) {
    const phrase = phrasesByLength.find((candidate) => text.startsWith(candidate, index));

    if (!phrase) {
      const nextPhraseIndex = Math.min(
        ...phrasesByLength
          .map((candidate) => text.indexOf(candidate, index + 1))
          .filter((candidateIndex) => candidateIndex !== -1),
      );
      const nextIndex = Number.isFinite(nextPhraseIndex) ? nextPhraseIndex : text.length;
      parts.push(text.slice(index, nextIndex));
      index = nextIndex;
      continue;
    }

    parts.push(
      phrase === "expansion of our activities" ? (
        <a key={`${phrase}-${index}`} href="/docs/appendix-2.pdf" target="_blank" rel="noopener noreferrer" style={emphasisStyle}>
          {phrase}
        </a>
      ) : (
        <strong key={`${phrase}-${index}`} style={emphasisStyle}>
          {phrase}
        </strong>
      ),
    );
    index += phrase.length;
  }

  return parts.length === 1 ? text : parts;
}

export function WhatsNext() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="whats-next" className="chapter-section">
      <SectionBanner id="whats-next" title="What's to Come" />

      <div data-theme-card="true" style={{ background: "white", borderRadius: 20, padding: "40px 36px", boxShadow: "0 4px 32px rgba(37,53,135,0.08)", border: "1px solid #e8edf8", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ background: "var(--chapter-color)", color: "white", borderRadius: 12, padding: "10px 22px", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20 }}>{WHATS_NEXT.headline}</div>
          <div style={{ fontFamily: "var(--font-poppins)", fontSize: 16, color: "#111" }}>
            Funded through 2028 via the Canada Biomedical Research Fund
          </div>
        </div>

        <blockquote style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontStyle: "italic", color: "var(--chapter-color)", borderLeft: "3px solid var(--chapter-color)", paddingLeft: 20, margin: "0 0 20px", lineHeight: 1.6 }}>
          &ldquo;The future of the POPCORN network is firmly focused on <strong>expansion, innovation, and impact</strong>.&rdquo;
          <footer style={{ fontFamily: "var(--font-poppins)", fontSize: 14, fontStyle: "normal", color: "#111", marginTop: 10 }}>Dr. Olivier Drouin</footer>
        </blockquote>


        <div className="whats-next-photo" style={{ position: "relative", aspectRatio: "3983 / 1170", minHeight: 180, borderRadius: 16, overflow: "hidden", marginBottom: 20, border: "1px solid #e8edf8", background: "white" }}>
          <Image
            src="/report-assets/group1-2.png"
            alt="POPCORN group photo"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: "contain", objectPosition: "center", borderRadius: "inherit" }}
          />
        </div>

        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          style={{ background: "none", border: "1px solid color-mix(in srgb, var(--chapter-color) 28%, white)", borderRadius: 20, padding: "8px 20px", fontFamily: "var(--font-poppins)", fontSize: 14, color: "var(--chapter-color)", cursor: "pointer", marginTop: 12 }}
        >
          {expanded ? "Read less ↑" : "Read Dr. Drouin's full message ↓"}
        </button>

        {expanded && (
          <div style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.8, marginTop: 18 }}>
            {WHATS_NEXT.body.split("\n\n").map((p, i) => <p key={i}>{renderParagraph(p)}</p>)}
          </div>
        )}

        <section
          aria-label="Report appendices"
          className="flex flex-wrap justify-center gap-3"
          style={{ marginTop: 30 }}
        >
          <a
            href="/docs/appendix-1.pdf"
            className={appendixButtonClass}
            style={{ fontFamily: "var(--font-poppins)" }}
            target="_blank"
            rel="noreferrer"
          >
            POPCORN 1.0: Deliverable Progress Tracker
          </a>
          <a
            href="/docs/appendix-2.pdf"
            className={appendixButtonClass}
            style={{ fontFamily: "var(--font-poppins)" }}
            target="_blank"
            rel="noreferrer"
          >
            POPCORN 2.0: Performance Indicators Tracker
          </a>
        </section>
      </div>
    </section>
  );
}
