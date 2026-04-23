"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "@/components/ui/Section";
import { CrayonUnderline } from "@/components/ui/CrayonUnderline";
import { LEADERSHIP } from "@/content/data/site-data";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { fadeUp } from "@/lib/motion";

const DROUIN_FULL_MESSAGE = `The development of POPCORN has been one of the most rewarding experiences of my career. What began as a rapid-response network during COVID-19 has evolved into something more durable: a genuine community of researchers, clinicians, patient partners, and families committed to improving pediatric health across Canada.

Seeing collaborations emerge between investigators at different institutions — work that would likely not have seen the light of day otherwise — constitutes, in my eyes, one of the most concrete markers of success. When a neonatologist in Montréal and an emergency physician in Vancouver co-lead a study that genuinely improves care for children in both provinces, that is POPCORN working as intended.

We enter POPCORN 2.0 with momentum and with clarity about what we are building: not just a research network, but a durable infrastructure for child health in Canada. Funded through 2028, grounded in equity and patient engagement, and now home to 105 investigators across 16 hospitals — we are ready.

Thank you to every researcher, trainee, family partner, site coordinator, and funder who made this possible. This report is yours.`;

export function Leadership() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <Section id="leadership" className="bg-paper-deep">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — Dr. Drouin */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em] mb-6"
            style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
          >
            A message from our principal investigator
          </p>

          <blockquote
            className="italic mb-3"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontOpticalSizing: "auto",
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              lineHeight: 1.5,
              color: "var(--ink)",
            }}
          >
            &ldquo;{LEADERSHIP.drouin.pullQuote}&rdquo;
          </blockquote>

          <CrayonUnderline className="mb-4" />

          <cite
            className="block text-sm not-italic mb-8"
            style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
          >
            — {LEADERSHIP.drouin.name},{" "}
            <span style={{ color: "var(--ink)" }}>{LEADERSHIP.drouin.role}</span>
          </cite>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="drouin-full-message"
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ fontFamily: "var(--font-source-serif)", color: "var(--teal)" }}
          >
            <span>{open ? "Close message" : "Read full message"}</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              ↓
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="drouin-full-message"
                initial={reduced ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduced ? {} : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-4">
                  {DROUIN_FULL_MESSAGE.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right — Governance co-chairs */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.12 }}
          className="lg:pt-20"
        >
          <p
            className="text-xs uppercase tracking-[0.2em] mb-6"
            style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
          >
            From the governance committee
          </p>

          <blockquote
            className="italic mb-3"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontOpticalSizing: "auto",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              lineHeight: 1.6,
              color: "var(--ink)",
            }}
          >
            &ldquo;{LEADERSHIP.governance.pullQuote}&rdquo;
          </blockquote>

          <CrayonUnderline color="var(--teal)" className="mb-4" />

          <cite
            className="block text-sm not-italic"
            style={{ fontFamily: "var(--font-source-serif)", color: "var(--ink-muted)" }}
          >
            — {LEADERSHIP.governance.names}
            <br />
            <span style={{ color: "var(--ink)" }}>{LEADERSHIP.governance.role}</span>
          </cite>
        </motion.div>
      </div>
    </Section>
  );
}
