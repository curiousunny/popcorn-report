export const SECTION_THEMES = {
  leadership: {
    mainColor: "#253b89",
    lightTint: "#f2f5ff",
    bannerSrc: "/report-assets/banners/leadership.png",
    bannerAlt: "Message from Leadership",
  },
  goals: {
    mainColor: "#00b09e",
    lightTint: "#effcf9",
    bannerSrc: "/report-assets/banners/goals.png",
    bannerAlt: "Goals",
  },
  projects: {
    mainColor: "#ff0083",
    lightTint: "#fff0f8",
    bannerSrc: "/report-assets/banners/projects.png",
    bannerAlt: "Project Updates",
  },
  "patient-engagement": {
    mainColor: "#ff5651",
    lightTint: "#fff8e8",
    bannerSrc: "/report-assets/banners/patient-engagement-edi.png",
    bannerAlt: "Patient Engagement",
  },
  edi: {
    mainColor: "#ff5651",
    lightTint: "#fff8e8",
    bannerSrc: "/report-assets/banners/edi-di.png",
    bannerAlt: "Equity, Diversity, Inclusion and Indigeneity",
  },
  ecr: {
    mainColor: "#00b09e",
    lightTint: "#effcf9",
    bannerSrc: "/report-assets/banners/career-advancement.png",
    bannerAlt: "Career Advancements",
  },
  km: {
    mainColor: "#253b89",
    lightTint: "#f2f5ff",
    bannerSrc: "/report-assets/banners/knowledge-mobilization.png",
    bannerAlt: "Knowledge Mobilization Tools and Impact",
  },
  "whats-next": {
    mainColor: "#ff0083",
    lightTint: "#fff0f8",
    bannerSrc: "/report-assets/banners/whats-to-come.png",
    bannerAlt: "What's to Come?",
  },
} as const;

export type SectionThemeId = keyof typeof SECTION_THEMES;

export function getSectionTheme(id: string) {
  return SECTION_THEMES[id as SectionThemeId] ?? {
    mainColor: "#253b89",
    lightTint: "#f2f5ff",
    bannerSrc: "",
    bannerAlt: id,
  };
}
