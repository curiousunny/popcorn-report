"use client";

import { useState } from "react";
import { CopyLink } from "@/components/ui/CopyLink";

const SITES = [
  { id: 1,  name: "BC Children's Hospital",                city: "Vancouver",   province: "BC", x: 97,  y: 500, projects: 8  },
  { id: 2,  name: "Alberta Children's Hospital",           city: "Calgary",     province: "AB", x: 178, y: 490, projects: 6  },
  { id: 3,  name: "Stollery Children's Hospital",          city: "Edmonton",    province: "AB", x: 175, y: 458, projects: 6  },
  { id: 4,  name: "Jim Pattison Children's Hospital",      city: "Saskatoon",   province: "SK", x: 252, y: 460, projects: 5  },
  { id: 5,  name: "HSC Winnipeg Children's Hospital",      city: "Winnipeg",    province: "MB", x: 338, y: 478, projects: 7  },
  { id: 6,  name: "Children's Hospital London",            city: "London",      province: "ON", x: 450, y: 528, projects: 5  },
  { id: 7,  name: "McMaster Children's Hospital",          city: "Hamilton",    province: "ON", x: 466, y: 516, projects: 7  },
  { id: 8,  name: "The Hospital for Sick Children",        city: "Toronto",     province: "ON", x: 478, y: 508, projects: 12 },
  { id: 9,  name: "University of Toronto",                 city: "Toronto",     province: "ON", x: 484, y: 500, projects: 4  },
  { id: 10, name: "Children's Hospital of Eastern Ontario",city: "Ottawa",      province: "ON", x: 516, y: 492, projects: 6  },
  { id: 11, name: "Ottawa Hospital Research Institute",    city: "Ottawa",      province: "ON", x: 522, y: 484, projects: 3  },
  { id: 12, name: "Kingston Health Sciences Centre",       city: "Kingston",    province: "ON", x: 504, y: 502, projects: 4  },
  { id: 13, name: "CHU Sainte-Justine",                   city: "Montréal",    province: "QC", x: 548, y: 488, projects: 14 },
  { id: 14, name: "Montreal Children's Hospital",          city: "Montréal",    province: "QC", x: 554, y: 480, projects: 9  },
  { id: 15, name: "CHUM",                                  city: "Montréal",    province: "QC", x: 558, y: 472, projects: 3  },
  { id: 16, name: "CHU de Sherbrooke",                    city: "Sherbrooke",  province: "QC", x: 562, y: 496, projects: 4  },
  { id: 17, name: "CHU de Quebec",                        city: "Quebec City", province: "QC", x: 574, y: 470, projects: 5  },
  { id: 18, name: "IWK Health Centre",                    city: "Halifax",     province: "NS", x: 624, y: 510, projects: 6  },
  { id: 19, name: "Janeway Children's Health Centre",     city: "St. John's",  province: "NL", x: 672, y: 490, projects: 5  },
];

const maxProjects = Math.max(...SITES.map((s) => s.projects));
const getRadius = (projects: number) => 6 + (projects / maxProjects) * 14;

export function CanadaMap() {
  const [hoveredSite, setHoveredSite] = useState<typeof SITES[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, site: typeof SITES[0]) => {
    const rect = (e.currentTarget as SVGElement).closest("svg")?.getBoundingClientRect();
    if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHoveredSite(site);
  };

  return (
    <section id="canada-map" style={{ scrollMarginTop: 80 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 18, color: "#f4017f", letterSpacing: 1 }}>Across Canada</div>
          <CopyLink id="canada-map" />
        </div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#253587", margin: 0 }}>
          19 Sites from Coast to Coast
        </h2>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 16, color: "#555", marginTop: 10, lineHeight: 1.6 }}>
          POPCORN spans children&rsquo;s hospitals and research centres across every region of Canada. Hover a site to learn more.
        </p>
      </div>

      <div style={{ position: "relative", width: "100%", maxWidth: 760, margin: "0 auto" }}>
        <svg
          viewBox="0 0 800 680"
          style={{ width: "100%", height: "auto", display: "block" }}
          onMouseLeave={() => setHoveredSite(null)}
          role="img"
          aria-label="Map of Canada showing 19 POPCORN participating sites"
        >
          {/* Canada outline — simplified recognizable path */}
          <path
            d="M97,260 L88,280 L72,295 L68,320 L78,338 L72,355 L80,370 L74,390
               L82,408 L90,422 L96,440 L100,460 L97,480 L100,498 L110,510 L118,524
               L130,530 L140,522 L148,508 L158,504 L168,500 L178,490 L190,486
               L200,480 L212,475 L224,472 L238,468 L252,460 L264,458 L278,460
               L292,462 L306,466 L320,470 L334,474 L338,478 L344,484 L350,490
               L356,498 L362,508 L370,518 L380,526 L392,530 L404,532 L416,530
               L424,526 L430,520 L438,524 L446,528 L450,528 L458,524 L464,518
               L466,516 L472,512 L478,508 L484,504 L490,502 L496,502 L504,502
               L508,498 L512,494 L516,492 L522,488 L528,486 L534,484 L540,484
               L548,488 L554,484 L558,480 L562,476 L568,472 L574,470 L582,468
               L590,470 L598,476 L606,484 L614,494 L620,504 L626,510 L624,510
               L618,514 L610,516 L608,522 L614,526 L622,524 L630,518 L636,512
               L644,506 L652,500 L660,492 L666,488 L672,490 L678,494 L682,498
               L680,504 L674,508 L672,514 L678,516 L686,512 L692,506 L698,498
               L702,490 L700,480 L696,472 L692,464 L688,456 L686,446 L690,438
               L696,430 L698,420 L694,410 L690,400 L688,390 L690,380 L694,370
               L698,360 L700,348 L698,336 L694,324 L688,312 L682,302 L676,294
               L668,288 L660,284 L650,282 L638,282 L626,284 L614,288 L602,290
               L590,288 L578,284 L566,278 L554,272 L542,266 L530,262 L518,260
               L506,260 L494,262 L482,264 L470,264 L458,262 L446,258 L434,254
               L422,250 L410,248 L398,248 L386,250 L374,254 L362,258 L350,260
               L338,260 L326,258 L314,254 L302,250 L290,248 L278,248 L266,250
               L254,254 L242,258 L230,262 L218,264 L206,264 L194,262 L182,258
               L170,254 L158,250 L146,248 L134,248 L122,250 L110,254 L100,258 L97,260Z"
            fill="#d4dce8"
            stroke="white"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Pulse ring on hovered site */}
          {hoveredSite && (
            <circle
              cx={hoveredSite.x}
              cy={hoveredSite.y}
              r={getRadius(hoveredSite.projects) + 8}
              fill="none"
              stroke="#f4017f"
              strokeWidth="2"
              opacity="0.4"
              style={{ animation: "pulse-ring 1s ease-out infinite" }}
            />
          )}

          {/* Site dots */}
          {SITES.map((site) => {
            const r = getRadius(site.projects);
            const isHovered = hoveredSite?.id === site.id;
            return (
              <g
                key={site.id}
                onMouseMove={(e) => handleMouseMove(e, site)}
                onMouseEnter={() => setHoveredSite(site)}
                style={{ cursor: "pointer" }}
                role="button"
                aria-label={`${site.name}, ${site.city}, ${site.province} — ${site.projects} projects`}
              >
                <circle cx={site.x} cy={site.y} r={r + 4} fill="#f4017f" opacity={isHovered ? 0.25 : 0.12} style={{ transition: "opacity 0.2s" }} />
                <circle cx={site.x} cy={site.y} r={r} fill={isHovered ? "#f4017f" : "#253587"} opacity={isHovered ? 1 : 0.75} style={{ transition: "all 0.2s" }} />
                <circle cx={site.x} cy={site.y} r={Math.max(2, r * 0.35)} fill="white" opacity="0.9" />
              </g>
            );
          })}

          {/* Tooltip as foreignObject */}
          {hoveredSite && (
            <foreignObject
              x={Math.min(tooltipPos.x + 12, 580)}
              y={Math.max(tooltipPos.y - 60, 10)}
              width="200"
              height="80"
            >
              <div
                // @ts-expect-error xmlns required for SVG foreignObject
                xmlns="http://www.w3.org/1999/xhtml"
                style={{ background: "white", borderRadius: 10, padding: "10px 14px", boxShadow: "0 4px 20px rgba(37,53,135,0.18)", border: "1px solid #eee", pointerEvents: "none" }}
              >
                <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 13, fontWeight: 700, color: "#253587", lineHeight: 1.3, marginBottom: 3 }}>{hoveredSite.name}</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#888" }}>{hoveredSite.city}, {hoveredSite.province}</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 12, color: "#f4017f", fontWeight: 600, marginTop: 4 }}>{hoveredSite.projects} projects</div>
              </div>
            </foreignObject>
          )}
        </svg>

        {/* Legend */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 8, flexWrap: "wrap" }}>
          {[{ label: "Fewer projects", r: 8 }, { label: "More projects", r: 16 }].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg width={l.r * 2 + 4} height={l.r * 2 + 4} aria-hidden="true">
                <circle cx={l.r + 2} cy={l.r + 2} r={l.r} fill="#253587" opacity="0.7" />
                <circle cx={l.r + 2} cy={l.r + 2} r={l.r * 0.35} fill="white" opacity="0.9" />
              </svg>
              <span style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#888" }}>{l.label}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f4017f" }} />
            <span style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#888" }}>Hover to explore</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { opacity: 0.5; }
          100% { r: 28; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
