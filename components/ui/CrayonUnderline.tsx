"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Props = {
  color?: string;
  className?: string;
};

export function CrayonUnderline({ color = "var(--ochre)", className = "" }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();

  const visible = inView || reduced;

  return (
    <svg
      ref={ref}
      width="100%"
      height="12"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d="M 2 8 C 28 5, 55 10, 85 7 C 115 4, 145 9, 172 6 C 185 5, 194 7, 198 8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.9, ease: [0.65, 0, 0.35, 1] }
        }
      />
    </svg>
  );
}
