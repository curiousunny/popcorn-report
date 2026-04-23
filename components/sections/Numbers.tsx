"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Counter } from "@/components/ui/Counter";
import { NUMBERS } from "@/content/data/site-data";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Numbers() {
  const reduced = useReducedMotion();

  return (
    <Section id="numbers" className="bg-cream">
      <div className="max-w-5xl mx-auto">
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
          By the numbers
        </motion.h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.08 }}
          className="text-base mb-20 max-w-xl"
          style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
        >
          The scale of POPCORN&rsquo;s pan-Canadian network, as of April 2026.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {NUMBERS.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              context={stat.context}
              format={stat.format as "integer" | "currency"}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
