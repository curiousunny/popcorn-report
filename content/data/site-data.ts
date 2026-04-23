// POPCORN 2026 — Core site data
// Source: 2026_04_13-POP-Impact_Report_Content-DRAFT.pdf
// This file is the source of truth. All section components import from here.

export const SITE_META = {
  title: "POPCORN 2026 Impact Report",
  description:
    "How a pan-Canadian pediatric research network is preparing for the next health crisis — and improving care for children and pregnant people today.",
  url: "https://popcorn-2026.vercel.app", // replace on deploy
  ogImage: "/og-image.png",
} as const;

// ────────────────────────────────────────────────────────────────────────────
// LAND ACKNOWLEDGEMENT
// ────────────────────────────────────────────────────────────────────────────

export const LAND_ACKNOWLEDGEMENT = `POPCORN acknowledges that our network is situated on the unceded and ancestral territories of diverse Indigenous Peoples across Turtle Island. From coast to coast to coast, we respect and acknowledge Inuit, Métis, and First Nations peoples as the traditional stewards of the lands we work and live on. For those of us who are settlers, we recognize that processes of colonization continue to impact Indigenous Peoples today. POPCORN is committed to working toward cultural safety, decolonization, and reconciliation.`;

// ────────────────────────────────────────────────────────────────────────────
// LEADERSHIP MESSAGES (pull-quotes + full text for expand)
// ────────────────────────────────────────────────────────────────────────────

export const LEADERSHIP = {
  drouin: {
    name: "Dr. Olivier Drouin",
    role: "Network Principal Investigator",
    pullQuote:
      "Seeing the development of collaborations and synergy that would likely not have seen the light of day otherwise constitutes, in my eyes, one of the most concrete markers of success.",
    // Full message kept for expand accordion — see content/messages/drouin.mdx if we split later
  },
  governance: {
    names: "Dr. Srin Murthy & Dr. Francine Buchanan",
    role: "Governance Committee Co-Chairs",
    pullQuote:
      "When systems close, vulnerable children do not become safer. POPCORN is building on the lessons of COVID-19 to help prepare the Canadian child health community for whatever comes next.",
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────
// THE 5 GOALS
// ────────────────────────────────────────────────────────────────────────────

export const GOALS = [
  {
    number: "01",
    title: "Be ready for future pandemics",
    description:
      "Build a strong, flexible research system that can quickly respond to new health threats affecting children and pregnant people across Canada.",
  },
  {
    number: "02",
    title: "Improve health for pregnant people and kids",
    description:
      "Focus on important health issues using the combined strengths of children's hospitals and research networks to do reliable, science-based studies.",
  },
  {
    number: "03",
    title: "Work better together",
    description:
      "Make it easier for researchers, doctors, families, and youth to team up on studies and clinical trials across different locations and specialties.",
  },
  {
    number: "04",
    title: "Make research fair and inclusive",
    description:
      "Involve people from all backgrounds and make sure everyone has a voice in research, especially those from underserved communities.",
  },
  {
    number: "05",
    title: "Help leaders make smart choices",
    description:
      "Give health experts and decision-makers up-to-date, accurate information to guide public health actions, especially during outbreaks.",
  },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// BY THE NUMBERS
// ────────────────────────────────────────────────────────────────────────────

export const NUMBERS = [
  {
    value: 16,
    label: "pediatric hospitals",
    context: "across Canada",
    format: "integer",
  },
  {
    value: 105,
    label: "researchers",
    context: "collaborating across the network",
    format: "integer",
  },
  {
    value: 54,
    label: "research coordinators",
    context: "and site staff",
    format: "integer",
  },
  {
    value: 31,
    label: "honoraria paid",
    context: "to patient & family partners",
    format: "integer",
  },
  {
    value: 14627,
    label: "paid to patient partners",
    context: "recognizing lived experience",
    format: "currency",
  },
  {
    value: 12,
    label: "collaborating networks",
    context: "across pediatric and maternal health",
    format: "integer",
  },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// HOSPITAL SITES (for the map)
// Coordinates are approximate — refine with Google Maps lookup before launch.
// x/y are viewBox percentages for an SVG map of Canada (viewBox 0 0 100 80).
// ────────────────────────────────────────────────────────────────────────────

export const SITES = [
  { id: "bc-childrens", name: "BC Children's Hospital", city: "Vancouver, BC", x: 14, y: 52 },
  { id: "alberta-childrens", name: "Alberta Children's Hospital", city: "Calgary, AB", x: 25, y: 54 },
  { id: "stollery", name: "Stollery Children's Hospital", city: "Edmonton, AB", x: 26, y: 48 },
  { id: "jim-pattison", name: "Jim Pattison Children's Hospital", city: "Saskatoon, SK", x: 34, y: 52 },
  { id: "childrens-manitoba", name: "Children's Hospital of Winnipeg", city: "Winnipeg, MB", x: 43, y: 58 },
  { id: "sickkids", name: "The Hospital for Sick Children", city: "Toronto, ON", x: 58, y: 66 },
  { id: "cheo", name: "Children's Hospital of Eastern Ontario", city: "Ottawa, ON", x: 63, y: 62 },
  { id: "mcmaster", name: "McMaster Children's Hospital", city: "Hamilton, ON", x: 57, y: 67 },
  { id: "london", name: "London Health Sciences Centre", city: "London, ON", x: 55, y: 68 },
  { id: "chu-ste-justine", name: "CHU Sainte-Justine", city: "Montréal, QC", x: 68, y: 62 },
  { id: "montreal-childrens", name: "Montreal Children's Hospital", city: "Montréal, QC", x: 68.5, y: 62.5 },
  { id: "chu-quebec", name: "CHU de Québec-Université Laval", city: "Québec City, QC", x: 72, y: 60 },
  { id: "chus", name: "CHU de Sherbrooke", city: "Sherbrooke, QC", x: 69, y: 64 },
  { id: "iwk", name: "IWK Health Centre", city: "Halifax, NS", x: 82, y: 62 },
  { id: "janeway", name: "Janeway Children's Health Centre", city: "St. John's, NL", x: 90, y: 58 },
  { id: "horizon", name: "Horizon Health Network", city: "Saint John, NB", x: 79, y: 63 },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// RESEARCH PILLARS (section headings + descriptions)
// ────────────────────────────────────────────────────────────────────────────

export const PILLARS = {
  "emergency": {
    name: "Emergency Medicine",
    description:
      "Understanding how children and youth arrive at emergency departments, and building research infrastructure for rapid-response studies.",
  },
  "inpatient": {
    name: "Inpatient Medicine",
    description:
      "Improving care for hospitalized children, reducing low-value testing, and closing gaps in equitable treatment.",
  },
  "critical-care": {
    name: "Critical Care",
    description:
      "Studying outcomes for the sickest children — ventilation, long-term recovery, and intensive care patterns.",
  },
  "infectious-disease": {
    name: "Infectious Diseases",
    description:
      "Tracking pathogens, antimicrobial resistance, and immunity in children — so we're ready for what comes next.",
  },
  "maternal-health": {
    name: "Maternal Health",
    description:
      "Extending POPCORN's reach to pregnant people and infants, because pandemic preparedness starts before birth.",
  },
  "cross-cutting": {
    name: "Cross-Cutting Work",
    description:
      "Studies that span pillars — equity, long-term outcomes, and knowledge synthesis projects that inform the whole network.",
  },
} as const;

// ────────────────────────────────────────────────────────────────────────────
// VOICES (testimonials)
// ────────────────────────────────────────────────────────────────────────────

export const VOICES = [
  {
    name: "Dr. Peter Gill",
    role: "Clinician-Researcher",
    quote:
      "POPCORN's structure as a pan-Canadian research platform has facilitated collaboration with leading investigators, clinicians, and patient partners across multiple sites. The network's commitment to mentorship and growth has accelerated my capacity to lead and contribute meaningfully to national research programs.",
  },
  {
    name: "Dr. Charles-Antoine Guay",
    role: "Postdoctoral Trainee & Specialist in Public Health",
    quote:
      "Since joining POPCORN, I have had the opportunity to evolve within a highly structured and stimulating research environment — with concrete leadership opportunities as a principal investigator, access to cutting-edge infrastructure, and a mentorship network of national and international experts.",
  },
  {
    name: "Dr. Mireille Guillot",
    role: "Clinician-Researcher, Neonatologist",
    quote:
      "Involvement in the POPCORN Research Network has provided invaluable mentorship and collaboration opportunities. It has fostered connections beyond my local environment and helped position me for future academic opportunities.",
  },
  {
    name: "Patient & Family Partners",
    role: "Co-leading training, grants, and governance",
    quote:
      "Our lived experience shapes how POPCORN works — from the Patient Engagement Training Series we co-designed, to the CIHR grant centering Indigenous and diverse youth voices. This is research done with us, not about us.",
  },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// SNA RECOMMENDATIONS
// ────────────────────────────────────────────────────────────────────────────

export const SNA_HEADLINE = {
  stat: "90%",
  label: "of members report POPCORN has increased their research collaborations",
  context:
    "— including partnerships that now extend beyond their own institutions.",
};

export const SNA_RECOMMENDATIONS = [
  {
    title: "Strengthen POPCORN's Identity & Purpose",
    color: "rose",
    items: [
      "Facilitate workshops to clarify mandate, roles, and direction.",
      "Provide onboarding resources to help new members contribute effectively.",
    ],
  },
  {
    title: "Expand & Sustain Connections",
    color: "ochre",
    items: [
      "Create more opportunities for internal and external networking.",
      "Keep proven connection drivers: annual conference, cross-disciplinary teams, and supportive admin.",
    ],
  },
  {
    title: "Mobilize Projects During Infrastructure Expansion",
    color: "teal",
    items: [
      "Launch quick-win projects alongside major national initiatives.",
      "Support projects at every stage: idea → development → completion.",
    ],
  },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// WHAT'S NEXT — POPCORN 2.0
// ────────────────────────────────────────────────────────────────────────────

export const WHATS_NEXT = {
  headline: "POPCORN 2.0",
  subhead: "Funded through 2028. Building beyond the pandemic.",
  narrative:
    "POPCORN 2.0 has secured funding from the Canadian Biomedical Research Fund through 2028, aimed at strengthening our collective capacity to respond to future pandemics. We also want to leverage this infrastructure between health crises to improve the health of pregnant people and children in Canada.",
  commitments: [
    "Monitor diseases and threats to children's health in Canada",
    "Support observational studies and multicenter clinical trials",
    "Deepen partnerships with pediatric groups, frontline workers, and international research collaborators",
    "Expand mentorship and funding for early career researchers",
    "Diversify funding sources and secure support beyond 2028",
    "Center equity, diversity, inclusion and Indigeneity in every activity",
  ],
} as const;

// ────────────────────────────────────────────────────────────────────────────
// CREDITS
// ────────────────────────────────────────────────────────────────────────────

export const CREDITS = {
  funders: [
    "Canadian Institutes of Health Research (CIHR)",
    "Canada Biomedical Research Fund (CBRF)",
  ],
  operational: [
    "MICYRN (Maternal Infant Child and Youth Research Network)",
    "CHU Sainte-Justine Research Center",
  ],
  design: "Designed and developed by Sunny Dong",
  contact: "info@popcornpediatrics.ca", // verify before launch
  reportDownload: "/downloads/popcorn-2026-impact-report.pdf",
  websiteUrl: "https://www.popcornpediatrics.ca",
} as const;
