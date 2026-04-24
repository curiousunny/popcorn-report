"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Props = { children: ReactNode; delay?: number; style?: CSSProperties };

export function FadeIn({ children, delay = 0, style = {} }: Props) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVis(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(20px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
