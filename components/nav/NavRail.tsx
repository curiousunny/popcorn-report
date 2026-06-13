"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { NAV_SECTIONS } from "@/content/data/site-data";
import { getSectionTheme } from "@/content/data/section-themes";

export function NavRail() {
  const [active, setActive] = useState("hero-section");
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [barHidden, setBarHidden] = useState(false);

  const activeSection = useMemo(
    () => NAV_SECTIONS.find((section) => section.id === active) ?? NAV_SECTIONS[0],
    [active]
  );
  const activeTheme = useMemo(() => getSectionTheme(active), [active]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setBarHidden(scrollTop > 96 && scrollTop > lastScrollY + 6);
      lastScrollY = scrollTop;

      const ids = NAV_SECTIONS.map((s) => s.id);
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

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
          zIndex: 100, flexDirection: "column",
          padding: "24px 0", overflowY: "auto",
          boxShadow: "2px 0 16px rgba(37,53,135,0.04)",
        }}
        className="hidden min-[769px]:flex"
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
              color: active === s.id ? activeTheme.mainColor : "#888",
              textDecoration: "none",
              borderLeft: active === s.id ? `3px solid ${activeTheme.mainColor}` : "3px solid transparent",
              fontWeight: active === s.id ? 600 : 400,
              background: active === s.id ? activeTheme.lightTint : "transparent",
              transition: "all 0.2s",
              lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Mobile top bar */}
      <header
        className={`fixed left-0 right-0 top-0 z-[160] flex h-14 items-center gap-3 border-b border-white/50 bg-white/78 px-4 shadow-[0_8px_30px_rgba(37,53,135,0.08)] backdrop-blur min-[769px]:hidden ${
          barHidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ transition: "transform 220ms ease" }}
      >
        <a href="#hero-section" className="flex h-11 w-24 shrink-0 items-center" aria-label="Back to cover">
          <Image src="/POPCORN_logo.png" alt="POPCORN" width={106} height={28} style={{ height: 28, width: "auto" }} priority />
        </a>
        <div
          className="min-w-0 flex-1 truncate text-center text-[12px] font-semibold text-[#253587]"
          style={{ fontFamily: "var(--font-poppins)", color: activeTheme.mainColor }}
          aria-live="polite"
        >
          {activeSection.label}
        </div>
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{ color: activeTheme.mainColor }}
          aria-label={menuOpen ? "Close section menu" : "Open section menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-section-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
              style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none", transition: "transform 180ms ease" }}
            />
            <span
              className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current"
              style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 180ms ease" }}
            />
            <span
              className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current"
              style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none", transition: "transform 180ms ease" }}
            />
          </span>
        </button>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-section-menu"
        className={`fixed inset-0 z-[150] bg-[#253587]/92 px-5 pb-8 pt-20 text-white backdrop-blur-sm min-[769px]:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ transition: "opacity 220ms ease" }}
        aria-hidden={!menuOpen}
      >
        <div
          className="mx-auto flex max-w-sm flex-col gap-2"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            transition: "transform 250ms ease",
          }}
        >
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={handleNavClick}
              className="flex min-h-12 items-center border-b border-white/14 py-3 text-left text-[18px] font-semibold leading-tight"
              style={{ color: active === s.id ? "#fdcce1" : "white", fontFamily: "var(--font-poppins)" }}
              aria-current={active === s.id ? "page" : undefined}
            >
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile section cue */}
      <div
        key={active}
        className="mobile-section-cue pointer-events-none fixed bottom-5 left-4 z-[130] rounded-full bg-white/84 px-3 py-2 text-[12px] font-semibold text-[#253587] shadow-[0_8px_28px_rgba(37,53,135,0.12)] backdrop-blur min-[769px]:hidden"
        style={{ fontFamily: "var(--font-poppins)", color: activeTheme.mainColor }}
        aria-hidden="true"
      >
        {activeSection.label}
      </div>
    </>
  );
}
