"use client";

import { useState } from "react";
import { PROJECTS, STATUS_LABELS, type Project } from "@/content/data/site-data";
import { Avatar } from "@/components/ui/Avatar";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyLink } from "@/components/ui/CopyLink";
import { SectionBanner } from "@/components/ui/SectionBanner";

const TYPES = [
  { key: "all",       label: "All Projects" },
  { key: "core",      label: "Core" },
  { key: "synthesis", label: "Knowledge Synthesis" },
  { key: "trainee",   label: "Trainee" },
  { key: "affiliated",label: "Affiliated" },
];

const GROUP_LABELS: Record<string, string> = {
  core: "Core Projects", synthesis: "Knowledge Synthesis",
  trainee: "Student & Post-Doc Awards", affiliated: "Affiliated Projects",
};
const GROUP_ORDER = ["core", "synthesis", "trainee", "affiliated"];
const STATUS_ORDER = ["planning", "recruiting", "analysis", "manuscript", "complete"];

function StatusBadge({ status }: { status: string }) {
  const info = STATUS_LABELS[status] ?? { label: status, color: "#888" };
  return (
    <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 20, background: info.color + "18", color: info.color, fontFamily: "var(--font-poppins)", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" as const }}>
      {info.label}
    </span>
  );
}

function ProjectCard({ project, expanded, onToggle }: { project: Project; expanded: boolean; onToggle: () => void }) {
  return (
    <div
      id={`project-${project.id}`}
      style={{ background: "white", borderRadius: 14, boxShadow: "0 2px 12px rgba(37,53,135,0.07)", border: `1px solid ${expanded ? project.piColor + "33" : "#f0f0f0"}`, overflow: "hidden", transition: "border-color 0.3s", scrollMarginTop: 100 }}
    >
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 14 }}
      >
        <Avatar initials={project.piInitials} color={project.piColor} size={44} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
            <h4 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 17, color: "#253587", margin: 0 }}>{project.title}</h4>
            <StatusBadge status={project.status} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins)", fontSize: 12, color: "#888", marginBottom: 6 }}>{project.pi} · {project.pillar}</div>
          <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#555", margin: 0, lineHeight: 1.55 }}>{project.summary}</p>
        </div>
        <svg style={{ flexShrink: 0, marginTop: 4, transition: "transform 0.3s", transform: expanded ? "rotate(180deg)" : "none" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253587" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {expanded && (
        <div style={{ padding: "0 24px 24px", borderTop: "1px solid #f5f5f5" }}>
          {[
            { label: "What we want to know", text: project.what },
            { label: "How we're doing it",   text: project.how },
            { label: "How it's going",       text: project.going },
          ].map((item) => (
            <div key={item.label} style={{ marginTop: 18 }}>
              <div style={{ fontFamily: "var(--font-coming-soon)", fontSize: 15, color: "#25a89e", marginBottom: 4 }}>
                {item.label}
              </div>
              {item.text.split("\n\n").map((para, k) => (
                <p key={k} style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#444", lineHeight: 1.7, margin: k === 0 ? 0 : "10px 0 0" }}>{para}</p>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <CopyLink id={`project-${project.id}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);
  const grouped: Record<string, Project[]> = {};
  filtered.forEach((p) => { if (!grouped[p.type]) grouped[p.type] = []; grouped[p.type].push(p); });

  const statusDist = STATUS_ORDER.map((s) => ({ status: s, count: PROJECTS.filter((p) => p.status === s).length }));

  const toggle = (id: string, type: string) => {
    setExpanded((e) => {
      const next = { ...e };
      if (next[id]) { delete next[id]; return next; }
      Object.keys(next).forEach((k) => { const proj = PROJECTS.find((p) => p.id === k); if (proj?.type === type) delete next[k]; });
      next[id] = true;
      return next;
    });
  };

  return (
    <section id="projects" style={{ scrollMarginTop: 80 }}>
      <SectionBanner id="projects" title="Project Updates" subtitle={`${PROJECTS.length} projects across ${Object.keys(GROUP_LABELS).length} categories. Project statuses are as of April 2026.`} />

      {/* Lifecycle mini-chart */}
      <div style={{ background: "white", borderRadius: 14, padding: "20px 24px", marginBottom: 28, boxShadow: "0 2px 12px rgba(37,53,135,0.06)" }}>
        <div style={{ fontFamily: "var(--font-coming-soon)", color: "#888", fontSize: 14, marginBottom: 14 }}>Portfolio health at a glance</div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
          {statusDist.map(({ status, count }) => {
            const info = STATUS_LABELS[status];
            return (
              <div key={status} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: info.color }} />
                <span style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#555" }}>{info.label}: <strong>{count}</strong></span>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", height: 8, borderRadius: 8, overflow: "hidden" }}>
          {statusDist.map(({ status, count }) => (
            <div key={status} style={{ flex: count, background: STATUS_LABELS[status].color, opacity: 0.7 }} />
          ))}
        </div>
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
        {TYPES.map((t) => (
          <button
            key={t.key}
            onClick={() => { setFilter(t.key); setExpanded({}); }}
            style={{
              padding: "8px 18px", borderRadius: 24, border: "1px solid",
              borderColor: filter === t.key ? "#253587" : "#ddd",
              background: filter === t.key ? "#253587" : "white",
              color: filter === t.key ? "white" : "#555",
              fontFamily: "var(--font-poppins)", fontSize: 14, cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Groups */}
      {GROUP_ORDER.map((g) => {
        if (!grouped[g]) return null;
        return (
          <div key={g} style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 22, color: "#253587", margin: 0 }}>{GROUP_LABELS[g]}</h3>
              <span style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#888", background: "#f5f5f5", borderRadius: 12, padding: "2px 10px" }}>{grouped[g].length} projects</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {grouped[g].map((p) => (
                <FadeIn key={p.id}>
                  <ProjectCard project={p} expanded={!!expanded[p.id]} onToggle={() => toggle(p.id, p.type)} />
                </FadeIn>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
