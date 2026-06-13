"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const PHOTOS = [
  "/photos/IMG_0611.webp",
  "/photos/IMG_8747.webp",
  "/photos/IMG_8759.webp",
  "/photos/IMG_8768.webp",
  "/photos/IMG_8786.webp",
  "/photos/IMG_8838.webp",
  "/photos/IMG_8847.webp",
  "/photos/IMG_8862.webp",
];

type Photo = { id: number; src: string; x: number; y: number; rotation: number };

export function Landing() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const lastSpawn = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const photoIdx = useRef(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;

    const handler = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (now - lastSpawn.current < 700 || dist < 60) return;

      const rect = document.getElementById("hero-section")?.getBoundingClientRect();
      if (!rect || e.clientY > rect.bottom || e.clientY < rect.top) return;

      lastSpawn.current = now;
      lastPos.current = { x: e.clientX, y: e.clientY };

      const id = now;
      const src = PHOTOS[photoIdx.current % PHOTOS.length];
      photoIdx.current++;
      const rotation = (Math.random() - 0.5) * 18;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPhotos((p) => [...p.slice(-7), { id, src, x, y, rotation }]);
      setTimeout(() => setPhotos((p) => p.filter((pp) => pp.id !== id)), 2200);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      id="hero-section"
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "transparent", position: "relative", overflow: "hidden",
        padding: "60px 24px",
      }}
    >
      {/* Photo popups */}
      {photos.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute", left: p.x - 80, top: p.y - 70,
            width: 160, height: 140, borderRadius: 12, overflow: "hidden",
            boxShadow: "0 8px 32px rgba(37,53,135,0.22)",
            transform: `rotate(${p.rotation}deg)`,
            pointerEvents: "none", zIndex: 10,
            animation: "photoPopIn 2.2s ease forwards",
            border: "3px solid white",
          }}
        >
          <Image src={p.src} alt="" fill sizes="160px" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
      ))}

      {/* Content */}
      <div style={{ textAlign: "center", width: "calc(100vw - 48px)", maxWidth: 700, position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/POPCORN_logo.png" alt="POPCORN" width={260} height={69} style={{ width: "min(260px, 100%)", height: "auto" }} priority />
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div style={{ margin: "24px auto 0", width: "min(82vw, 480px)", position: "relative" }}>
            <Image
              src="/canada-map.png"
              alt="Map of Canada"
              width={640}
              height={410}
              style={{
                width: "100%", height: "auto", display: "block",
                filter: "saturate(0) brightness(3) drop-shadow(0 0 32px rgba(37,53,135,0.22))",
                opacity: 0.8,
                userSelect: "none",
              }}
            />
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <h1 style={{
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 28px)", color: "#253587",
            margin: "28px auto 16px", lineHeight: 1.3, maxWidth: "min(580px, 100%)",
          }}>
            Research Shaping the Future of Maternal and Child Health.
          </h1>
        </FadeIn>
        <FadeIn delay={400}>
          <p style={{ fontFamily: "var(--font-poppins)", fontSize: 18, color: "#111", margin: "0 0 40px" }}>
            2025 Impact Report
          </p>
        </FadeIn>
        <FadeIn delay={500}>
          <p className="mobile-desktop-note">
            This interactive report is best experienced on desktop. You can still explore the full report on mobile.
          </p>
        </FadeIn>
        <FadeIn delay={600}>
          <a href="#land-ack" style={{ display: "inline-block", textDecoration: "none", animation: "bounce 1.6s ease-in-out infinite" }}>
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" aria-label="Scroll down">
              <path d="M16 4v28M6 24l10 12 10-12" stroke="#253587" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </FadeIn>
      </div>

      {/* Animated aura blobs */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #d9c8f0 0%, transparent 70%)", filter: "blur(60px)", animation: "aura1 12s ease-in-out infinite", willChange: "transform" }}/>
      <div aria-hidden="true" style={{ position: "absolute", top: "20%", right: "-10%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, #c8dff5 0%, transparent 70%)", filter: "blur(60px)", animation: "aura2 15s ease-in-out infinite", willChange: "transform" }}/>
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-5%", left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #c8ede9 0%, transparent 70%)", filter: "blur(60px)", animation: "aura3 10s ease-in-out infinite", willChange: "transform" }}/>
      <div aria-hidden="true" style={{ position: "absolute", bottom: "15%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #fddcec 0%, transparent 70%)", filter: "blur(50px)", animation: "aura1 18s ease-in-out infinite reverse", willChange: "transform" }}/>
    </section>
  );
}
