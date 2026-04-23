"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { CrayonUnderline } from "@/components/ui/CrayonUnderline";
import { GOALS } from "@/content/data/site-data";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/* Stagger vertical offsets for desktop asymmetric grid */
const OFFSETS = ["mt-0", "mt-10", "mt-4", "mt-16", "mt-6"];

type Goal = (typeof GOALS)[number];

function GoalCard({ goal, offset, delay }: { goal: Goal; offset: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1], delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`min-w-[220px] lg:min-w-0 flex-shrink-0 lg:flex-shrink cursor-default ${offset}`}
    >
      {/* Hand-drawn number */}
      <p
        className="mb-3 select-none"
        style={{
          fontFamily: "var(--font-fraunces)",
          fontOpticalSizing: "auto",
          fontSize: "3.5rem",
          fontWeight: 900,
          lineHeight: 1,
          color: "var(--ochre)",
          opacity: 0.35,
        }}
        aria-hidden="true"
      >
        {goal.number}
      </p>

      <h3
        className="mb-1 leading-snug"
        style={{
          fontFamily: "var(--font-fraunces)",
          fontOpticalSizing: "auto",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--ink)",
        }}
      >
        {goal.title}
      </h3>

      <motion.div
        animate={hovered && !reduced ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <CrayonUnderline className="mb-3" />
      </motion.div>

      {!hovered && <div className="mb-3 h-[12px]" aria-hidden="true" />}

      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
      >
        {goal.description}
      </p>
    </motion.div>
  );
}

export function Goals() {
  const reduced = useReducedMotion();

  return (
    <Section id="goals">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="mb-4"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontOpticalSizing: "auto",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            color: "var(--ink)",
          }}
        >
          The 5 goals guiding our work
        </motion.h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.06 }}
          className="text-base mb-16 max-w-xl"
          style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
        >
          POPCORN 2.0 is organized around five strategic priorities that span
          preparedness, equity, and collaboration.
        </motion.p>

        {/* Mobile: horizontal scroll. Desktop: staggered 5-column grid */}
        <div className="flex gap-8 overflow-x-auto pb-4 lg:overflow-x-visible lg:grid lg:grid-cols-5 lg:gap-8">
          {GOALS.map((goal, i) => (
            <GoalCard
              key={goal.number}
              goal={goal}
              offset={OFFSETS[i]}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
