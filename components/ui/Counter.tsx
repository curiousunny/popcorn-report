"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

function fmt(v: number, format: "integer" | "currency"): string {
  const n = Math.round(v);
  return format === "currency"
    ? `$${n.toLocaleString("en-CA")}`
    : n.toLocaleString("en-CA");
}

type Props = {
  value: number;
  label: string;
  context: string;
  format: "integer" | "currency";
};

export function Counter({ value, label, context, format }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapRef, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();
  const didAnimate = useRef(false);

  useEffect(() => {
    if (!isInView || didAnimate.current || !spanRef.current) return;
    didAnimate.current = true;

    if (reduced) {
      spanRef.current.textContent = fmt(value, format);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (n) => {
        if (spanRef.current) spanRef.current.textContent = fmt(n, format);
      },
    });
    return () => controls.stop();
  }, [isInView, reduced, value, format]);

  return (
    <div ref={wrapRef} className="flex flex-col items-center text-center gap-3">
      <span
        ref={spanRef}
        aria-label={fmt(value, format)}
        className="block tabular-nums"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          fontWeight: 700,
          color: "var(--pink)",
          lineHeight: 1,
          fontOpticalSizing: "auto",
        }}
      >
        {fmt(value, format)}
      </span>
      <span
        className="font-semibold text-base"
        style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
      >
        {label}
      </span>
      <span
        className="text-sm"
        style={{ fontFamily: "var(--font-poppins)", color: "#111" }}
      >
        {context}
      </span>
    </div>
  );
}
