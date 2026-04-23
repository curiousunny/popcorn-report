"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { LAND_ACKNOWLEDGEMENT } from "@/content/data/site-data";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

function ScrollArrow() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      animate={reduced ? {} : { y: [0, 7, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 15 4 C 14.5 8, 14.5 20, 15 34 M 6 24 C 9 29, 12 34, 15 34 C 18 34, 21 29, 24 24"
          stroke="var(--ochre)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export function Landing() {
  const reduced = useReducedMotion();
  const animProps = reduced
    ? {}
    : { initial: "hidden" as const, animate: "visible" as const, variants: staggerChildren };

  return (
    <Section
      id="landing"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Placeholder cover illustration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url(/illustrations/cover.svg)",
          backgroundSize: "60% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      <motion.div
        {...animProps}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.p
          variants={reduced ? undefined : fadeUp}
          className="text-xs uppercase tracking-[0.25em] mb-6"
          style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
        >
          POPCORN · 2026
        </motion.p>

        <motion.h1
          variants={reduced ? undefined : fadeUp}
          className="mb-10"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontOpticalSizing: "auto",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: 900,
            lineHeight: 1.02,
            color: "var(--ink)",
          }}
        >
          POPCORN
          <br />
          2026 Impact
          <br />
          Report
        </motion.h1>

        <motion.p
          variants={reduced ? undefined : fadeUp}
          className="max-w-2xl mx-auto text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
        >
          {LAND_ACKNOWLEDGEMENT}
        </motion.p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollArrow />
      </div>
    </Section>
  );
}
