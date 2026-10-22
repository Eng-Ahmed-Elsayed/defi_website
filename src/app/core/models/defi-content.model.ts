/**
 * DEFI (Digital Egypt For Investment) — Core Content & Domain Models
 * Strictly verified institutional data definitions under Decree No. 132/2020.
 */

export type SupportedLanguage = 'en' | 'ar';
export type TextDirection = 'ltr' | 'rtl';

export interface NavItem {
  id: string;
  label: string;
  route: string;
}

export interface MetricItem {
  id: string;
  value: string;
  number?: number;
  suffix?: string;
  label: string;
  description?: string;
}

export interface CapabilityPillar {
  id: string;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  strategicImpact: string;
  keyDeliverables: string[];
  icon: string;
}

export interface TransformationStep {
  step: string;
  name: string;
  phase: string;
  description: string;
  output: string;
}

export interface EcosystemNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  category: 'channel' | 'ministry' | 'core' | 'registry' | 'infrastructure';
}

export interface CorporateValue {
  name: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface SectorItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  capabilitiesUsed: string[];
  publicImpact: string;
  verifiedReference?: string;
}

export interface PartnerReference {
  name: string;
  arabicName: string;
  acronym: string;
  category: string;
  scope: string;
  verifiedStatus: string;
  challenge?: string;
  pillarsUsed?: string[];
  outcomeSummary?: string;
}

export interface InvestmentMandateItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  mechanism: string;
}

export interface NewsItem {
  id: string;
  categoryId: 'institutional' | 'partnership' | 'transformation';
  title: string;
  category: string;
  date: string;
  summary: string;
  readTime: string;
  officialSource: string;
  highlights?: string[];
  impactDomain?: string;
}

export interface CareerDomain {
  id: string;
  title: string;
  focusArea: string;
  description: string;
  technologies: string[];
}

export interface DefiTranslations {
  // Navigation & Announcement
  skipLink: string;
  officialNotice: string;
  mandateBanner: string;
  hqLocation: string;
  navItems: NavItem[];
  navContactCTA: string;
  langSwitchLabel: string;
  mobileMenuAria: string;

  // Hero Section
  heroBadgePre: string;
  heroBadgeText: string;
  heroHeadline: string;
  heroSubhead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  metrics: MetricItem[];

  // Hero Mandate Credentials Bar
  heroMandateItems: { icon: string; title: string; subtitle: string }[];

  // Diagram A — National Digital Ecosystem
  diagramATitle: string;
  diagramASubtitle: string;
  diagramAInteractiveTag: string;
  diagramAInstruction: string;
  telemetryThroughput: string;
  telemetryLatency: string;
  telemetrySecurity: string;
  btnSimulateTraffic: string;
  diagramADefaultInfo: string;
  nodeInfoCitizens: string;
  nodeInfoMinistries: string;
  nodeInfoDefiCore: string;
  nodeInfoRegistries: string;
  nodeInfoInfra: string;
  ecosystemNodes: EcosystemNode[];

  // Authority & Decree 132/2020 Section
  authorityTag: string;
  authorityTitle: string;
  authorityDesc1: string;
  authorityDesc2: string;
  mandatePillars: { title: string; desc: string }[];
  mandateCardTitle: string;
  mandatePoints: { title: string; desc: string }[];
  valuesLabel: string;
  corporateValues: CorporateValue[];

  // Diagram C — Capability Matrix
  capabilityTag: string;
  capabilityTitle: string;
  capabilitySubtitle: string;
  capabilityPillars: CapabilityPillar[];

  // Diagram B — Operating Model
  journeyTag: string;
  journeyTitle: string;
  journeySubtitle: string;
  btnSimulateJourney: string;
  journeyHint: string;
  journeySteps: TransformationStep[];

  // Diagram D — Sovereign Interoperability Engine & Data Bus Simulator
  interopTag: string;
  interopTitle: string;
  interopSub: string;
  simStatusTitle: string;
  btnRunSim: string;
  consoleTitle: string;

  // Section 5B: Sectors in Focus
  sectorsTag: string;
  sectorsTitle: string;
  sectorsSub: string;
  sectorsInFocus: {
    icon: string;
    badge: string;
    title: string;
    summary: string;
    metricNumber: string;
    metricLabel: string;
  }[];

  // Section 5C: National Command Center · Sovereign Digital Grid
  gridTag: string;
  gridTitle: string;
  gridSub: string;
  gridStatusTitle: string;
  btnPingHub: string;
  regionalHubs: {
    id: string;
    badge: string;
    title: string;
    description: string;
    throughput: string;
    latency: string;
    uptime: string;
    entities: string;
    security: string;
  }[];

  // Section 6: Careers Mission CTA on Home
  homeCareersTag: string;
  homeCareersTitle: string;
  homeCareersDesc: string;
  careerFeatures: string[];
  careerBtnText: string;
  careerNoteText: string;

  // Section 7: Home Inquiry Form
  homeFormTitle: string;
  homeFormSubtitle: string;
  homeFormSubmit: string;

  // Impact & Partners
  impactTag: string;
  impactTitle: string;
  impactSubtitle: string;
  partnersTitle: string;
  partnerList: PartnerReference[];

  // About Page
  aboutHeroTitle: string;
  aboutHeroSubtitle: string;
  aboutMandateHeading: string;
  aboutMandateText: string[];
  aboutGovernanceTitle: string;
  aboutGovernanceText: string;
  investmentTag: string;
  investmentTitle: string;
  investmentSubtitle: string;
  investmentMandate: InvestmentMandateItem[];

  // Capabilities Page
  capHeroTitle: string;
  capHeroSubtitle: string;
  capDetailPrompt: string;

  // Sectors Page
  sectorsHeroTitle: string;
  sectorsHeroSubtitle: string;
  sectorsList: SectorItem[];

  // News Page
  newsHeroTitle: string;
  newsHeroSubtitle: string;
  newsList: NewsItem[];

  // Careers Page
  careersHeroTitle: string;
  careersHeroSubtitle: string;
  careersWhyDEFI: string;
  careersDomainsTitle: string;
  careerDomains: CareerDomain[];
  careersCtaText: string;

  // Contact Page
  contactHeroTitle: string;
  contactHeroSubtitle: string;
  contactHqTitle: string;
  contactHqAddress: string;
  contactEmailTitle: string;
  contactOfficialEmail: string;
  contactFormTitle: string;
  contactFormIntro: string;
  formLabels: {
    fullName: string;
    organization: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    submitting: string;
    successMessage: string;
    requiredNote: string;
  };

  // Footer & Common
  footerAboutText: string;
  footerQuickLinksTitle: string;
  footerCapabilitiesTitle: string;
  footerContactTitle: string;
  footerDecreeBadge: string;
  copyrightNotice: string;
  allRightsReserved: string;

  // 404 Page
  notFoundTitle: string;
  notFoundDesc: string;
  notFoundReturnHome: string;
}
