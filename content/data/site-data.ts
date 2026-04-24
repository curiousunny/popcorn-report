// POPCORN 2026 — Core site data
// Source: 2026_04_13-POP-Impact_Report_Content-DRAFT.pdf

export const SITE_META = {
  title: "POPCORN 2026 Impact Report",
  description: "Pandemic Readiness Research Shaping the Future of Maternal and Child Health.",
  url: "https://popcorn-2026.vercel.app",
  ogImage: "/og-image.png",
} as const;

// ─── LAND ACKNOWLEDGEMENT ────────────────────────────────────────────────────

export const LAND_ACKNOWLEDGEMENT = `POPCORN acknowledges that our network is situated on the unceded and ancestral territories of diverse Indigenous Peoples across Turtle Island. From coast to coast to coast, we respect and acknowledge Inuit, Métis, and First Nations peoples as the traditional stewards of the lands we work and live on. POPCORN is committed to working toward cultural safety, decolonization, and reconciliation.`;

// ─── LEADERSHIP ──────────────────────────────────────────────────────────────

export const LEADERS = [
  {
    key: "olivier",
    name: "Dr. Olivier Drouin",
    role: "Network Principal Investigator",
    initials: "OD",
    color: "#253587",
    pullQuote: "Seeing the development of collaborations and synergy that would likely not have seen the light of day otherwise constitutes one of the most concrete markers of success.",
    full: `It is with much pride that I present POPCORN's 2026 impact report. Since its launch in March 2022, POPCORN has positioned itself as an essential pan-Canadian pediatric research initiative, bringing together researchers, clinicians, and knowledge users to better respond to major challenges in child and maternal health.\n\nFrom the beginning, POPCORN was created with a clear objective: to put in place a research infrastructure capable of rapidly responding to emerging health issues affecting children and pregnant people.\n\nIn the last few years, we have been able to enlist 16 pediatric hospitals across the country while working towards integrating their partnering maternal health centers as well as many national multidisciplinary networks. This "network of networks" approach allows us to lead collaborative and interdisciplinary research, drawing from the unique expertise of each participating network.\n\nThanks to the key support from CIHR and CBRF, POPCORN was able to build key infrastructure for pandemic preparedness. I look forward to continuing this collective adventure in the years to come.`,
  },
  {
    key: "gc",
    name: "Dr. Srin Murthy & Dr. Francine Buchanan",
    role: "Governance Committee Co-Chairs",
    initials: "GC",
    color: "#25a89e",
    pullQuote: "POPCORN is building on COVID-19 lessons to help prepare the Canadian child health community for whatever comes next.",
    full: `As a Governance Committee, our role is to ensure that POPCORN, as a research network, delivers on what it has committed to do. The oversight we provide offers important arm's-length accountability, helping to ensure that the network remains focused on its stated goals and objectives.\n\nAs highlighted in this Impact Report, POPCORN has evolved significantly from a network initially focused on COVID-19 to one that is now playing a broader role in preparing the Canadian ecosystem for future outbreaks. The COVID-19 pandemic clearly demonstrated the need for high quality research conducted with rigorous standards and with meaningful patient and community partnership throughout.\n\nPOPCORN just completed an incredibly useful Social Network Analysis of its activities, demonstrating our substantial impact on the child health ecosystem. Over the past year, the network has made strong progress on its three core deliverables: being a one-stop shop for clinical studies for future outbreaks, working on surveillance activities, and engaging with administrative data.`,
  },
] as const;

// ─── GOALS ───────────────────────────────────────────────────────────────────

export const GOALS = [
  { id: 1, icon: "shield", headline: "Be Ready for Future Pandemics", desc: "Build a strong, flexible research system that can quickly respond to new health threats affecting kids and pregnant people across Canada." },
  { id: 2, icon: "heart",  headline: "Improve Health for Pregnant People and Kids", desc: "Focus on important health issues by using the strengths of children's hospitals and research networks to do reliable, science-based studies." },
  { id: 3, icon: "network", headline: "Work Better Together", desc: "Make it easier for researchers, doctors, families, and youth to team up on studies and clinical trials across different locations and specialties." },
  { id: 4, icon: "equity", headline: "Make Research Fair and Inclusive", desc: "Involve people from all backgrounds and make sure everyone has a voice in research, especially those from underserved communities." },
  { id: 5, icon: "compass", headline: "Help Leaders Make Smart Choices", desc: "Give health experts and decision-makers up-to-date, accurate information to guide public health actions — especially during outbreaks." },
] as const;

// ─── PROJECT STATUS ───────────────────────────────────────────────────────────

export const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  planning:   { label: "Planning",   color: "#f7a40b" },
  recruiting: { label: "Recruiting", color: "#25a89e" },
  analysis:   { label: "Analysis",   color: "#253587" },
  manuscript: { label: "Manuscript", color: "#f4017f" },
  complete:   { label: "Complete",   color: "#555" },
};

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export type Project = {
  id: string; type: "core" | "synthesis" | "trainee" | "affiliated";
  title: string; pi: string; piInitials: string; piColor: string;
  status: string; pillar: string; summary: string;
  what: string; how: string; going: string;
};

export const PROJECTS: Project[] = [
  // CORE
  { id: "curnls", type: "core", title: "CURNLS", pi: "Caroline Quach-Thanh", piInitials: "CQ", piColor: "#f4017f", status: "analysis", pillar: "Infectious Disease", summary: "Tracking COVID-19 immunity in children using leftover blood samples from emergency department visits.", what: "The proportion of children with antibodies to COVID-19 showing infection and/or vaccination; whether public health measures relate to immunity and virus transmission; and whether using leftover blood samples to study disease rates in children is feasible.", how: "When children visited the emergency department for any reason and had blood taken, we used their leftover blood to run tests comparing vaccine- and infection-based responses to COVID-19.", going: "The CURNLS database has been cleaned and locked, and analysis has begun — with a manuscript planned for 2026!" },
  { id: "covid-cohort", type: "core", title: "COVID Cohort", pi: "Caroline Quach-Thanh", piInitials: "CQ", piColor: "#f4017f", status: "complete", pillar: "Infectious Disease", summary: "Following children and families through COVID-19 infection to understand short- and long-term health outcomes.", what: "The short and long-term outcomes of COVID-19 infection and vaccinations in children, including quality of life, mental health, and family impact.", how: "Families were enrolled when they visited the ED or hospital with COVID-19. We collected chart data and surveys at 4–5 time points over one year. An optional biobanking sub-study collected samples from patients with MIS-C, myocarditis, and pericarditis.", going: "Follow-up ended May 2025. The database is being cleaned and closed. Key lessons: multi-point retention is challenging, language barriers need more support, and flexible scheduling would help. Sub-analyses are in progress." },
  { id: "indirect", type: "core", title: "Indirect Consequences", pi: "Matthew Carwana & Nadia Roumeliotis", piInitials: "MC", piColor: "#25a89e", status: "complete", pillar: "Inpatient", summary: "Documenting how pandemic restrictions harmed vulnerable children through delayed care, surging infections, and mental health strain.", what: "Whether hospitalizations for child maltreatment changed during the pandemic; patterns of lower respiratory tract infections; and how restrictions affected mental health of marginalized youth.", how: "We conducted national population-based studies on hospitalizations (2016–2023) and an ongoing qualitative study interviewing youth and caregivers at BC Children's Social Pediatrics Program.", going: "Published in CMAJ. Key finding: maltreatment hospitalizations dropped 30% early in the pandemic, then ICU admissions for maltreatment rose ~80%. LRTI fell up to 91% then surged 38% after restrictions lifted. When systems close, vulnerable children do not become safer." },
  { id: "long-term", type: "core", title: "Long-Term Outcomes", pi: "Karen Choong", piInitials: "KC", piColor: "#f7a40b", status: "analysis", pillar: "Critical Care", summary: "Comparing long-term healthcare use and costs between children infected with COVID-19 vs. other respiratory viruses.", what: "Long-term healthcare utilization and costs among children who had COVID-19 compared to those with other respiratory viruses.", how: "Using national administrative health data from the Canadian Institute for Health Information (CIHI).", going: "CIHI data has been received and analysis is ongoing." },
  { id: "amr", type: "core", title: "AMR Surveillance", pi: "Manish Sadarangani", piInitials: "MS", piColor: "#253587", status: "planning", pillar: "Infectious Disease", summary: "Establishing Canada's first nationwide pediatric antimicrobial resistance surveillance network.", what: "How widespread resistant bacterial infections are in children, who is at highest risk, and how to guide vaccine and treatment development.", how: "Collecting data on children seen in the ED or admitted with resistant bacterial infections, storing bacterial samples for future research.", going: "Protocol is complete. Working on obtaining necessary approvals at hospital sites before sample collection begins!" },
  { id: "butter", type: "core", title: "BUTTER", pi: "Shelly Bolotin", piInitials: "SB", piColor: "#f7a40b", status: "planning", pillar: "Infectious Disease", summary: "Biobanking leftover blood from children's ED visits to track emerging infections and immunity over time.", what: "How emerging and pandemic infections affect children: how widely they spread, how severe they are, and how immunity develops.", how: "Collecting and biobanking residual blood samples from children aged 0–17 presenting to EDs, taken only from blood already drawn for routine care.", going: "Protocol is complete. Working on obtaining necessary approvals at hospital sites!" },
  { id: "maize", type: "core", title: "MAIZE", pi: "Shelly Bolotin", piInitials: "SB", piColor: "#25a89e", status: "recruiting", pillar: "Infectious Disease", summary: "A national measles serosurvey using banked samples to help decision-makers predict and control outbreaks.", what: "Population immunity to measles in Canadian children, by age, vaccine eligibility, and geography — including oversampling in regions experiencing 2025 outbreaks.", how: "Testing up to 9,000 previously banked serum specimens from the CURNLS study (2023–2024) for measles antibodies.", going: "Protocol finalized. Public Health mandates received for Quebec and Ontario. Ethics approvals underway. CURNLS samples will be shipped to CHU Sainte-Justine for testing." },
  { id: "snaccc", type: "core", title: "SNaCCC", pi: "Rishi Ganesan", piInitials: "RG", piColor: "#f4017f", status: "planning", pillar: "Critical Care", summary: "Investigating how often COVID-19 causes brain-related complications compared to other viruses in children.", what: "The frequency and types of brain-related complications in children infected with COVID-19 compared to those with other viruses.", how: "Using POPCORN COVID Cohort data to identify those with brain-related complications and collecting additional information from medical records.", going: "Protocol is currently under development." },
  { id: "bobbi", type: "core", title: "BOBBi", pi: "Manish Sadarangani", piInitials: "MS", piColor: "#253587", status: "planning", pillar: "Infectious Disease", summary: "A UK–Canada randomized trial testing whether steroids improve survival in babies with bacterial meningitis.", what: "Whether giving dexamethasone to babies under 90 days with bacterial meningitis increases the number who survive without long-term difficulties.", how: "Recruiting 1,123 babies across the UK and Canada, randomly assigned to dexamethasone + antibiotics or antibiotics alone, followed to 24 months.", going: "Trial protocol nearing finalization. Regulatory and ethics submissions beginning soon. Recruitment in Canada anticipated to begin mid-2026." },
  // KNOWLEDGE SYNTHESIS
  { id: "bronchiolitis-sr", type: "synthesis", title: "Disparities in Bronchiolitis Care", pi: "Olivier Drouin", piInitials: "OD", piColor: "#f4017f", status: "manuscript", pillar: "Inpatient", summary: "A systematic review of how race, income, and language shape disparities in care for babies hospitalized with bronchiolitis.", what: "Whether differences in bronchiolitis care — tests, treatments, length of stay — are linked to a child's race/ethnicity, family income, or language.", how: "Screening research published since 2000 on babies under 2 hospitalized with bronchiolitis, looking at sociodemographic factors and low-value care use.", going: "Nearly 5,000 abstracts screened; 65 full-texts identified for inclusion. Now abstracting data for the forthcoming manuscript." },
  { id: "discharge-sr", type: "synthesis", title: "Language & Discharge Practices", pi: "Victor Do", piInitials: "VD", piColor: "#25a89e", status: "manuscript", pillar: "Inpatient", summary: "A systematic review of hospital discharge strategies that improve outcomes for families with language and literacy barriers.", what: "How discharge interventions tailored to families' preferred language and health literacy influence understanding, confidence, and post-discharge outcomes.", how: "A systematic review following PRISMA guidelines, searching multiple databases, extracting data in duplicate, and synthesizing findings narratively.", going: "Review is being finalized. Beginning knowledge mobilization to share findings with clinicians and health system leaders." },
  { id: "picu-lowvalue", type: "synthesis", title: "Low-Value Care in the PICU", pi: "Richard Webster", piInitials: "RW", piColor: "#f7a40b", status: "manuscript", pillar: "Critical Care", summary: "A scoping review of ways to reduce unnecessary tests and treatments in pediatric intensive care units.", what: "What works to reduce low-value care in the PICU, where the gaps are, and where new opportunities exist to improve care while reducing environmental impact.", how: "Reviewing past research on Choosing Wisely-aligned interventions, studying which reduced unnecessary care and what evidence supports them.", going: "Approaching completion of data extraction. An internal presentation at CHEO PICU is upcoming to engage knowledge users and inform local decarbonization priorities." },
  { id: "cmv-sr", type: "synthesis", title: "CMV Screening in Pregnancy", pi: "Isabelle Boucoiran", piInitials: "IB", piColor: "#f4017f", status: "analysis", pillar: "Maternal Health", summary: "A systematic review comparing cytomegalovirus screening methods to find the best approach for prenatal care.", what: "The best way to check for CMV during pregnancy — comparing how well current tests work and how often they give positive results.", how: "Comparing different CMV screening methods through past research, to help design a larger national CMV screening study.", going: "All screening complete. Currently working on data abstraction for 120 included articles." },
  // TRAINEE
  { id: "expand", type: "trainee", title: "EXPAND", pi: "Mahak Arora", piInitials: "MA", piColor: "#f4017f", status: "planning", pillar: "Equity", summary: "Examining how race and ethnicity are linked to quality of life in Canadian children enrolled in POPCORN.", what: "The association between race/ethnicity and quality of life (PedsQL), including physical, social, emotional, and school functioning, and mental health outcomes.", how: "Analyses guided by POPCORN's EDI+I and Patient Engagement teams, working with the Data Pillar to determine sample sizes.", going: "Working with the Data Pillar to determine sample sizes and preparing the REB application." },
  { id: "panziera", type: "trainee", title: "Post-COVID Condition Study", pi: "Sofia Panziera", piInitials: "SP", piColor: "#25a89e", status: "planning", pillar: "Infectious Disease", summary: "Tracking long-term outcomes, PASC trajectory, and family burden in children and youth after SARS-CoV-2.", what: "Long-term outcomes of SARS-CoV-2 positive and negative children and their families, including quality of life, fatigue, and mental health trajectory.", how: "Participants followed 9–12 months post-presentation with repeated assessments of HRQoL, fatigue, daily functioning, and caregiver outcomes.", going: "Analytic planning in progress — looking forward to sharing plans with POPCORN investigators soon!" },
  { id: "sahnoun", type: "trainee", title: "COVID-19 Prediction Tool", pi: "Yesmine Sahnoun", piInitials: "YS", piColor: "#f7a40b", status: "planning", pillar: "Infectious Disease", summary: "Using classical statistics and machine learning to predict which children with COVID-19 are at risk of severe outcomes.", what: "Predictive factors associated with complications in patients diagnosed with COVID-19.", how: "Applying both traditional statistical methods and machine learning to develop and evaluate predictive models.", going: "Ethics protocol recently approved. Actively working on gaining access to the dataset." },
  { id: "dichara", type: "trainee", title: "Pregnancy & Infancy Outcomes", pi: "Costanza Di Chara", piInitials: "CD", piColor: "#253587", status: "planning", pillar: "Maternal Health", summary: "Identifying early predictors of severe COVID-19 in infants to support risk stratification and clinical management.", what: "Early predictors of severe COVID-19 outcomes and longer-term quality of life in infants hospitalized for SARS-CoV-2.", how: "Leveraging existing POPCORN COVID-19 cohort data for predictive analyses of acute severity and long-term QoL.", going: "Statistical analysis plan finalized. Preparing for data extraction and implementation." },
  { id: "guay-autoimmune", type: "trainee", title: "COVID-19 & Autoimmunity", pi: "Charles-Antoine Guay", piInitials: "CG", piColor: "#f4017f", status: "analysis", pillar: "Infectious Disease", summary: "Investigating whether COVID-19 infection raises the risk of autoimmune diseases in children beyond what other viruses cause.", what: "Whether the increase in autoimmune conditions after COVID-19 is higher than expected from other common infections, and whether vaccination reduces this risk.", how: "A Canadian population-based longitudinal study plus a cohort analysis using POPCORN data linked to health administrative data, with stratification by severity, variant, and vaccination status.", going: "Study protocol finalized. Access to Quebec health administrative data secured. Preparing data linkage between POPCORN cohort and health administrative databases." },
  { id: "djiraimadje", type: "trainee", title: "Pediatric Cancer Diagnoses", pi: "Ngueyanouba Calvin Djiraimadje", piInitials: "ND", piColor: "#25a89e", status: "planning", pillar: "Inpatient", summary: "Examining changes in incidence and severity of new pediatric cancer diagnoses before, during, and after COVID-19.", what: "Changes in the incidence and hospital admission severity of newly diagnosed pediatric cancers across Canada, with a focus on ICU admissions as a marker of delayed diagnosis.", how: "Using CIHI data to assess trends in presentation severity across the pandemic timeline.", going: "Currently developing the study protocol, defining key variables, and preparing for data access." },
  // AFFILIATED
  { id: "carebest", type: "affiliated", title: "CareBEST", pi: "Olivier Drouin", piInitials: "OD", piColor: "#f4017f", status: "recruiting", pillar: "Inpatient", summary: "Measuring low-value care variation in children hospitalized with bronchiolitis across multiple Canadian centres.", what: "The use of 6 low-value healthcare services in children aged 1–12 months hospitalized with bronchiolitis, and how this differs across patients, doctors, and hospitals.", how: "Collecting chart data on care received, parent questionnaires on family characteristics and experiences, and 30-day follow-up questionnaires.", going: "We are in our last season of participant recruitment!" },
  { id: "gram-positive", type: "affiliated", title: "Gram-Positive Cocci Infections", pi: "Shaun Morris & Jesse Papenburg", piInitials: "SM", piColor: "#25a89e", status: "analysis", pillar: "Infectious Disease", summary: "Describing incidence, risk factors, and outcomes of invasive Group A Streptococcus and Staph aureus infections in hospitalized children.", what: "Incidence, risk factors, clinical features, and outcomes in children hospitalized with iGAS and SAB infections.", how: "Collecting data from medical records of children diagnosed with SAB or iGAS across POPCORN sites.", going: "Most sites have completed data collection. Awaiting finalization of data transfer agreements." },
  { id: "cannabis", type: "affiliated", title: "Cannabis & Prenatal Exposure", pi: "Annie Ouellet", piInitials: "AO", piColor: "#f7a40b", status: "analysis", pillar: "Maternal Health", summary: "Studying how prenatal cannabis, antidepressants, or maternal depression affect a baby's emotional regulation at 6 months.", what: "Whether prenatal exposure to cannabis or antidepressants, and maternal depression, affects a baby's ability to regulate emotions — and how the post-birth home environment influences outcomes.", how: "Following over 400 babies from prenatal to about 6 months, comparing exposed and non-exposed groups using observation of emotional responses.", going: "Working with expert teams to develop video validation and coding to assess babies' emotions." },
  { id: "watelle", type: "affiliated", title: "Research Readiness Pilot", pi: "Laurence Watelle", piInitials: "LW", piColor: "#253587", status: "planning", pillar: "Data", summary: "Creating a simple system in pediatric clinics to collect patient-reported data and build a registry of families open to research.", what: "How to routinely collect children's and families' health reports during clinic visits and ask if they're open to being contacted for research.", how: "Consulting clinicians, patients, ethics experts, and hospital staff; designing a user-friendly web tool; exploring integration with electronic medical records.", going: "System for sending information to doctors still being developed. Patient and physician enrollment expected to begin spring 2026." },
  { id: "presto", type: "affiliated", title: "PRESTO", pi: "Jeffrey (Des) Pernica", piInitials: "JP", piColor: "#f4017f", status: "recruiting", pillar: "Inpatient", summary: "A feasibility study testing two approaches to improve diagnosis and antibiotic use in children hospitalized with pneumonia.", what: "Whether two future larger multi-centre studies are feasible: one testing a blood marker to guide antibiotic decisions, another comparing antibiotic durations in severe pneumonia.", how: "Testing both approaches at McMaster, London Health Sciences, and SickKids, tracking recovery and watching for problems.", going: "Enrolling at McMaster and about to begin at London Health Sciences. Enrolment is going well, and caregivers are happy with study procedures." },
];

// ─── PATIENT ENGAGEMENT ───────────────────────────────────────────────────────

export const PE_SESSIONS = [
  { number: 1, title: "DeConstructing Patient Engagement", speakers: ["Isra Amsdr", "Amanda St.Dennis"], aim: "To 'deconstruct' previous methods of patient engagement by utilizing anonymous stories from patient and family partners – highlighting both the positives and the negatives." },
  { number: 2, title: "ReThinking PE Communication", speakers: ["Abby McCluskey", "Anne Marie Portelli"], aim: "Explore how communication between researchers and patient and family partners can be used as a tool for effective patient engagement." },
  { number: 3, title: "ReConstructing Patient Engagement", speakers: ["Cedar Davidson", "Sarah Mooney", "Suzanne Deliscar", "Amanda Doherty Kirby", "Becky Conia"], aim: "Explore practical tools and strategies to strengthen patient engagement in research and apply key considerations for developing an effective engagement plan." },
] as const;

// ─── EDI PROJECTS ─────────────────────────────────────────────────────────────

export const EDI_PROJECTS = [
  {
    title: "Pediatrician Perspectives and Experiences Accessing Language Interpretation Services in Pediatric Healthcare Settings",
    leads: ["Kari Guo"],
    supervisors: ["Patricia Li", "Ananya Banerjee"],
    body: "This descriptive qualitative study, led by Kari Guo and supervised by Patricia Li and Ananya Banerjee, explored pediatricians' perspectives on accessing professional language interpretation services across 12 Canadian pediatric hospitals. Clinicians identified interpretation services as essential for delivering safe, high-quality, and equitable care to linguistically diverse children and families. However, persistent barriers were reported, including limited interpreter availability, time constraints in busy clinical settings, and a lack of standardized processes to identify families' language needs.",
    finding: "Findings highlight the need to strengthen institutional policies, training, and investment in professional interpretation services. Addressing these system-level barriers could improve communication, promote equitable care, and enhance health outcomes for linguistically diverse pediatric populations across Canada.",
  },
  {
    title: "CIHR Team Grant (2025–2030): Empowering Voices, Shaping Futures",
    leads: ["Amy Shawanda", "Patricia Li"],
    supervisors: [],
    body: "Network members are co-applicants on a newly funded CIHR Team Grant (2025–2030) titled Empowering Voices, Shaping Futures: Co-designing and Co-implementing a Toolkit with Youth from Indigenous and Diverse Backgrounds for Culturally Safe Engagement in Research. This national initiative brings together researchers, youth partners, caregivers, and community collaborators to co-develop and implement a toolkit that supports culturally safe and meaningful youth engagement in health research.",
    finding: "The project is co-led by principal applicants Amy Shawanda and Patricia Li and includes POPCORN youth and parent partners: Sarah Mooney, Sunny Dong, Becky Conia, and Robert Chin-See, along with community partners and multidisciplinary researchers from across Canada. The initiative will advance reconciliation by centering Indigenous youth perspectives in research.",
  },
  {
    title: "Language Inclusivity in Pediatric Research Co-Learning Session",
    leads: ["Ananya Banerjee", "Tiffany Kim", "Maryam Parvez", "Patricia Li"],
    supervisors: ["Vivian Qiang"],
    body: "A virtual co-learning session on Language Inclusivity in Pediatric Research was delivered by Ananya Banerjee, Tiffany Kim, Maryam Parvez, and Patricia Li, with contributions from Vivian Qiang. The session brought together participants, including trainees, researchers, and collaborators, to explore strategies for more linguistically inclusive research practices.",
    finding: "Participants identified key challenges in designing equitable, linguistically responsive studies and learned practical strategies to improve communication and participation among linguistically diverse children and families. Through case examples and discussion, the session provided actionable approaches to reduce language-related barriers and strengthen equitable participation in pediatric research.",
  },
] as const;

// ─── ECR VOICES ───────────────────────────────────────────────────────────────

export const ECR_VOICES = [
  { name: "Dr. Peter Gill", role: "Clinician-Researcher", initials: "PG", color: "#253587", quote: "Being part of the POPCORN network has advanced my professional development and provided numerous career opportunities. POPCORN's structure as a pan-Canadian research platform has facilitated collaboration with leading investigators, clinicians, and patient partners across multiple sites, research pillars, and disciplines. The network's commitment to mentorship and growth has accelerated my capacity to lead and contribute meaningfully to national research programs." },
  { name: "Dr. Charles-Antoine Guay", role: "Postdoctoral Trainee & Specialist in Public Health and Preventive Medicine", initials: "CG", color: "#f4017f", quote: "Being part of the POPCORN research network as a postdoctoral trainee is an enriching opportunity that allows me to acquire the tools necessary to launch my research program autonomously. I've had concrete leadership opportunities as a principal investigator, access to cutting-edge infrastructure and databases, and a mentorship network of national and international experts." },
  { name: "Dr. Mireille Guillot", role: "Clinician-Researcher & Neonatologist", initials: "MG", color: "#25a89e", quote: "As an early career researcher and neonatologist, involvement in the POPCORN Research Network has provided invaluable mentorship and collaboration opportunities. It has fostered connections beyond my local environment, created opportunities to contribute to impactful research initiatives, and helped position me for future academic opportunities." },
] as const;

// ─── REACH STATS ──────────────────────────────────────────────────────────────

export const REACH_STATS = [
  { value: 16,    label: "patient & parent partners",  prefix: "",  note: "Lived-experience voices at every level" },
  { value: 31,    label: "honoraria paid",              prefix: "",  note: "Patient and family partners compensated, not just consulted" },
  { value: 14627, label: "in honoraria",                prefix: "$", note: "Ensuring partners are compensated equitably" },
  { value: 105,   label: "researchers",                 prefix: "",  note: "Across 16 hospitals and multiple disciplines" },
  { value: 54,    label: "research coordinators",       prefix: "",  note: "Site staff keeping studies running" },
  { value: 19,    label: "member institutions",         prefix: "",  note: "Hospitals and sites across Canada" },
  { value: 8,     label: "root networks",               prefix: "",  note: "National networks POPCORN is built upon" },
  { value: 12,    label: "collaborating networks",      prefix: "",  note: "Partners strengthening our reach" },
  { value: 7,     label: "industry partners",           prefix: "",  note: "Supporting research infrastructure" },
  { value: 13,    label: "biobank staff",               prefix: "",  note: "Managing Canada's pediatric biobank" },
  { value: 3,     label: "public partners",             prefix: "",  note: "Amplifying research to the public" },
  { value: 11,    label: "letters of support provided", prefix: "",  note: "Backing for grant applications" },
] as const;

// ─── SNA ──────────────────────────────────────────────────────────────────────

export const SNA_RECS = [
  { title: "Strengthen Identity", color: "#253587", desc: "Develop a clearer and more consistent communication of POPCORN's unique value proposition to members, funders, and the broader research community." },
  { title: "Expand Connections",  color: "#f4017f", desc: "Intentionally grow the network's reach into underrepresented regions and specialties, building bridges with new institutions and communities." },
  { title: "Mobilize Projects",   color: "#25a89e", desc: "Accelerate the translation of research findings into clinical practice and public health policy through targeted knowledge mobilization strategies." },
] as const;

// ─── WHATS NEXT ───────────────────────────────────────────────────────────────

export const WHATS_NEXT = {
  headline: "POPCORN 2.0",
  subhead: "Funded through 2028 via CBRF",
  pullQuote: "The future of the POPCORN network is firmly focused on expansion, innovation, and impact.",
  body: `Looking ahead, POPCORN is at a pivotal moment, marked by new ambitions and strong potential for growth. Building on POPCORN 1.0, POPCORN 2.0 has secured funding through 2028 to substantially strengthen our collective capacity to respond to future pandemics — while leveraging this infrastructure between health crises to improve the health of pregnant people and children in Canada.\n\nWe are developing a renewed vision and foundational strategic plan, informed by in-depth interviews with network members, funders, public health partners, and clinicians.\n\nPOPCORN will continue monitoring diseases and threats to children's health, supporting observational studies and multicenter clinical trials, and developing key partnerships with pediatric groups, frontline workers, and international research groups.\n\nEDI+I will continue to guide all our activities. POPCORN remains firmly committed to collaborating with diverse communities, reducing health inequities, and promoting inclusive, patient-centered research.`,
} as const;

// ─── NAV SECTIONS ────────────────────────────────────────────────────────────

export const NAV_SECTIONS = [
  { id: "hero-section",        label: "Cover" },
  { id: "land-ack",            label: "Land Acknowledgement" },
  { id: "leadership",          label: "01 Leadership" },
  { id: "goals",               label: "02 Goals" },
  { id: "canada-map",          label: "03 Across Canada" },
  { id: "projects",            label: "04 Projects" },
  { id: "patient-engagement",  label: "05 Patient Engagement" },
  { id: "edi",                 label: "06 EDI+I" },
  { id: "ecr",                 label: "07 Career Advancement" },
  { id: "km",                  label: "08 Knowledge Mobilization" },
  { id: "sna",                 label: "09 Network Analysis" },
  { id: "whats-next",          label: "10 What's to Come" },
] as const;
