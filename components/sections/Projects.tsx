"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, STATUS_LABELS, type Project } from "@/content/data/site-data";
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
const PROJECT_LINKS: Partial<Record<string, string>> = {
  amr: "https://www.popcornpediatrics.ca/amr-study",
  bobbi: "https://www.popcornpediatrics.ca/bobbi",
  "bronchiolitis-sr": "https://www.popcornpediatrics.ca/rapid-systematic-reviews",
  butter: "https://www.popcornpediatrics.ca/residual-samples",
  carebest: "https://www.popcornpediatrics.ca/carebest",
  cannabis: "https://www.popcornpediatrics.ca/prenatal-exposure",
  "cmv-sr": "https://www.popcornpediatrics.ca/rapid-systematic-reviews",
  "covid-cohort": "https://www.popcornpediatrics.ca/covid-cohort-study",
  curnls: "https://www.popcornpediatrics.ca/curnls",
  dichara: "https://www.popcornpediatrics.ca/student-post-doc-awards",
  "discharge-sr": "https://www.popcornpediatrics.ca/rapid-systematic-reviews",
  djiraimadje: "https://www.popcornpediatrics.ca/student-post-doc-awards",
  expand: "https://www.popcornpediatrics.ca/student-post-doc-awards",
  "guay-autoimmune": "https://www.popcornpediatrics.ca/student-post-doc-awards",
  indirect: "https://www.popcornpediatrics.ca/indirect-consequences",
  "long-term": "https://www.popcornpediatrics.ca/longterm-outcomes",
  maize: "https://www.popcornpediatrics.ca/maize",
  panziera: "https://www.popcornpediatrics.ca/student-post-doc-awards",
  "picu-lowvalue": "https://www.popcornpediatrics.ca/rapid-systematic-reviews",
  presto: "https://www.popcornpediatrics.ca/presto",
  sahnoun: "https://www.popcornpediatrics.ca/student-post-doc-awards",
  "sic-network": "https://www.popcornpediatrics.ca/projects",
  snaccc: "https://www.popcornpediatrics.ca/snaccc",
  watelle: "https://www.popcornpediatrics.ca/pilot-study-for-a-better-integration-of-research-and-clinical-care",
  "gram-positive": "https://www.popcornpediatrics.ca/picnic",
};

const PROJECT_ICON_BASE = "/report-assets/project-icons";

const projectIcons: Partial<Record<Project["id"], string>> = {
  amr: `${PROJECT_ICON_BASE}/amr-surveillance.png`,
  bobbi: `${PROJECT_ICON_BASE}/bobbi.png`,
  butter: `${PROJECT_ICON_BASE}/butter.png`,
  "covid-cohort": `${PROJECT_ICON_BASE}/covid-cohort.png`,
  curnls: `${PROJECT_ICON_BASE}/curnls.png`,
  indirect: `${PROJECT_ICON_BASE}/indirect-consequences.png`,
  "long-term": `${PROJECT_ICON_BASE}/long-term.png`,
  maize: `${PROJECT_ICON_BASE}/maize.png`,
  snaccc: `${PROJECT_ICON_BASE}/snaccc.png`,
};

const categoryIcons: Partial<Record<Project["type"], string>> = {
  synthesis: `${PROJECT_ICON_BASE}/knowledge-synthesis.png`,
  trainee: `${PROJECT_ICON_BASE}/trainee.png`,
  affiliated: `${PROJECT_ICON_BASE}/affiliated.png`,
};

function getProjectIcon(project: Project) {
  return project.type === "core" ? projectIcons[project.id] : categoryIcons[project.type];
}

function StatusBadge({ status }: { status: string }) {
  const info = STATUS_LABELS[status] ?? { label: status, color: "#888" };
  return (
    <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 20, background: info.color + "18", color: info.color, fontFamily: "var(--font-poppins)", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" as const }}>
      {info.label}
    </span>
  );
}

function ProjectMark({ project }: { project: Project }) {
  const icon = getProjectIcon(project);
  const alt =
    project.type === "core"
      ? `${project.title} project icon`
      : `${GROUP_LABELS[project.type]} icon`;

  return (
    <div
      aria-hidden={icon ? undefined : "true"}
      style={{
        width: 54,
        height: 54,
        borderRadius: 14,
        background: "#f4017f16",
        border: "2px solid #f4017f44",
        color: "#f4017f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-heading)",
        fontSize: 16,
        fontWeight: 800,
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {icon ? (
        <Image
          src={icon}
          alt={alt}
          width={160}
          height={160}
          sizes="54px"
          style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 10 }}
        />
      ) : (
        project.title.split(/\s+/).map((w) => w[0]).join("").slice(0, 3)
      )}
    </div>
  );
}

function ProjectCard({ project, expanded, onToggle }: { project: Project; expanded: boolean; onToggle: () => void }) {
  const projectUrl = PROJECT_LINKS[project.id] ?? "https://www.popcornpediatrics.ca/projects";

  return (
    <div
      id={`project-${project.id}`}
      data-theme-card="true"
      style={{ background: "white", borderRadius: 14, boxShadow: "0 2px 12px rgba(37,53,135,0.07)", border: `1px solid ${expanded ? project.piColor + "33" : "#f0f0f0"}`, overflow: "hidden", transition: "border-color 0.3s", scrollMarginTop: 100 }}
    >
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 14 }}
      >
        <ProjectMark project={project} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: "#253587", margin: 0 }}>{project.title}</h4>
            <StatusBadge status={project.status} />
          </div>
          <div style={{ fontFamily: "var(--font-poppins)", fontSize: 12, color: "#888", marginBottom: 6 }}>{project.pi} · {project.pillar}</div>
          <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", margin: 0, lineHeight: 1.6 }}>{project.summary}</p>
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
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 15, color: "var(--chapter-color)", marginBottom: 4 }}>
                {item.label}
              </div>
              {item.text.split("\n\n").map((para, k) => (
                <p key={k} style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#111", lineHeight: 1.7, margin: k === 0 ? 0 : "10px 0 0" }}>{para}</p>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 999,
                background: "var(--chapter-color)",
                color: "white",
                fontFamily: "var(--font-poppins)",
                fontSize: 14,
                fontWeight: 800,
                padding: "10px 16px",
                textDecoration: "none",
              }}
            >
              View project page
            </a>
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

  const sortedProjects = [...PROJECTS].sort((a, b) => a.title.localeCompare(b.title));
  const filtered = filter === "all" ? sortedProjects : sortedProjects.filter((p) => p.type === filter);
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
    <section id="projects" className="chapter-section">
      <SectionBanner id="projects" title="Project Updates" subtitle={`${PROJECTS.length} projects across ${Object.keys(GROUP_LABELS).length} categories. Project statuses are as of April 2026.`} />

      {/* Lifecycle mini-chart */}
      <div data-theme-card="true" style={{ background: "white", borderRadius: 14, padding: "20px 24px", marginBottom: 28, boxShadow: "0 2px 12px rgba(37,53,135,0.06)", border: "1px solid #f0f0f0" }}>
        <div style={{ fontFamily: "var(--font-heading)", color: "var(--chapter-color)", fontSize: 14, marginBottom: 14 }}>Projects at a glance</div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
          {statusDist.map(({ status, count }) => {
            const info = STATUS_LABELS[status];
            return (
              <div key={status} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: info.color }} />
                <span style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#111" }}>{info.label}: <strong>{count}</strong></span>
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
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
        {TYPES.map((t) => (
          <button
            key={t.key}
            onClick={() => { setFilter(t.key); setExpanded({}); }}
            style={{
              padding: "12px 20px", borderRadius: 24, border: "1px solid",
              borderColor: filter === t.key ? "var(--chapter-color)" : "#ddd",
              background: filter === t.key ? "var(--chapter-color)" : "white",
              color: filter === t.key ? "white" : "#111",
              fontFamily: "var(--font-poppins)", fontSize: 15, cursor: "pointer", transition: "all 0.2s",
              flex: "1 1 190px",
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
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 26, color: "#253587", margin: 0 }}>{GROUP_LABELS[g]}</h3>
              <span style={{ fontFamily: "var(--font-poppins)", fontSize: 13, color: "#888", background: "#f5f5f5", borderRadius: 12, padding: "2px 10px" }}>{grouped[g].length} projects</span>
            </div>
            {g === "core" && (
              <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#111", lineHeight: 1.6, margin: "-6px 0 18px" }}>
                If you&apos;re interested in learning about the specific data variables we&apos;re collecting for these POPCORN projects, please visit the{" "}
                <a href="https://www.maelstrom-research.org/network/popcorn" target="_blank" rel="noopener noreferrer">
                  Maelstrom website
                </a>
                .
              </p>
            )}
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
