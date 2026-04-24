"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_SECTIONS } from "@/content/data/site-data";

export function NavRail() {
  const [active, setActive] = useState("hero-section");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      const ids = NAV_SECTIONS.map((s) => s.id);
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, #f4017f, #253587, #25a89e)",
          transformOrigin: "left",
          transform: `scaleX(${progress})`,
          zIndex: 200,
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      />

      {/* Desktop nav rail */}
      <nav
        aria-label="Section navigation"
        style={{
          position: "fixed", left: 0, top: 0, bottom: 0, width: 200,
          background: "white", borderRight: "1px solid #f0f0f0",
          zIndex: 100, display: "flex", flexDirection: "column",
          padding: "24px 0", overflowY: "auto",
          boxShadow: "2px 0 16px rgba(37,53,135,0.04)",
        }}
        className="hidden md:flex"
      >
        <div style={{ padding: "8px 20px 24px", borderBottom: "1px solid #f5f5f5", marginBottom: 16 }}>
          <Image src="/POPCORN_logo.png" alt="POPCORN" height={28} width={106} style={{ height: 28, width: "auto" }} />
        </div>
        {NAV_SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{
              display: "block", padding: "9px 20px",
              fontFamily: "var(--font-poppins)", fontSize: 13,
              color: active === s.id ? "#253587" : "#888",
              textDecoration: "none",
              borderLeft: active === s.id ? "3px solid #f4017f" : "3px solid transparent",
              fontWeight: active === s.id ? 600 : 400,
              background: active === s.id ? "#f8f9ff" : "transparent",
              transition: "all 0.2s",
              lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Mobile bottom nav */}
      <div
        style={{
          display: "none", position: "fixed", bottom: 0, left: 0, right: 0,
          background: "white", borderTop: "1px solid #f0f0f0",
          padding: "10px 16px", zIndex: 100, overflowX: "auto", whiteSpace: "nowrap",
        }}
        className="block md:hidden"
      >
        {NAV_SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{
              fontFamily: "var(--font-poppins)", fontSize: 12,
              color: active === s.id ? "#253587" : "#888",
              textDecoration: "none", marginRight: 16,
              fontWeight: active === s.id ? 600 : 400,
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </>
  );
}
