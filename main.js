/**
 * DEFI (Digital Egypt For Investment) — Corporate Homepage Script
 * Bilingual Architecture (EN / AR) & Diagram Interactivity
 */

// ---------------------------------------------------------------------------
// 1. Bilingual Data Dictionary
// ---------------------------------------------------------------------------
const translations = {
  en: {
    // Header & Announcement
    skipLink: "Skip to main content",
    officialNotice: "OFFICIAL PUBLIC-SECTOR ENTITY",
    mandateBanner: "Established under Prime Minister Decree No. 132/2020 | Supporting MCIT & ITIDA National Transformation",
    hqLocation: "📍 Smart Village, B145, Cairo",
    navAbout: "About DEFI",
    navEcosystem: "Digital Ecosystem",
    navCapabilities: "Capabilities",
    navJourney: "Operating Model",
    navInterop: "Data Bus",
    navSectors: "Sectors",
    navGrid: "National Grid",
    navImpact: "Impact & Partners",
    navCareers: "Careers",
    navContactCTA: "Contact Us",
    langLabel: "عربي",
    drawerLangLabel: "تبديل إلى العربية",

    // Hero Section
    heroBadgePre: "MANDATE 132/2020",
    heroBadgeText: "Executive Digital Transformation Partner",
    heroHeadline: 'Architecting the <span class="gradient-text">Digital Foundations</span> for Egypt\'s Public Sector',
    heroSubhead: "Empowering ministries and public institutions with strategic enterprise architecture, mission-critical infrastructure, and citizen-centric digital platforms that accelerate national transformation.",
    heroCtaPrimary: "Explore the Ecosystem",
    heroCtaSecondary: "Our Capabilities",

    // Hero Metrics
    metricClients: "Enterprise Clients",
    metricConsultants: "Expert Consultants",
    metricGovEntities: "Government Entities",
    metricServices: "Digital Services",

    // Diagram A (Hero Ecosystem)
    diagramATitle: "Diagram A · National Digital Ecosystem",
    diagramAInteractiveTag: "Interactive Architecture",
    telemetryThroughput: "18,450 req/s",
    telemetryLatency: "< 4.2ms",
    telemetrySecurity: "Tier IV Sovereign",
    btnSimulateTraffic: "Simulate Live Flow",
    diagramADefaultInfo: "Click or hover any ecosystem layer above to inspect how DEFI orchestrates data, governance, and services across Egypt's national digital landscape.",
    nodeTouchpointsTitle: "Citizen & Business Channels",
    nodeTouchpointsSub: "Portals · Mobile Apps · Service Centers",
    nodeEntitiesTitle: "Government Entities & Ministries",
    nodeEntitiesSub: "MOE · IDSC · 25+ Public Bodies",
    nodeCoreTitle: "DEFI Digital Enablement Backbone",
    nodeCoreSub1: "Enterprise Architecture · Interoperability",
    nodeCoreSub2: "National Data Bus · Secure Integration APIs",
    nodeDataTitle: "National Registries & Data",
    nodeDataSub: "Interoperable Base Registers",
    nodeInfraTitle: "Secure Cloud & Infrastructure",
    nodeInfraSub: "High-Availability Gov Centers · 24/7 Ops",

    // Diagram A Tooltip Explanations
    nodeInfoCitizens: "Citizen & Business Channels: Unifying digital access across portals (e.g. Digital Egypt), mobile applications, and physical service centers for seamless citizen interactions.",
    nodeInfoMinistries: "Government Entities: Collaborating with ministries such as Education (MOE) and The Cabinet IDSC to modernize public workflows and cross-departmental operations.",
    nodeInfoDefiCore: "DEFI Enablement Core: The central architectural backbone providing national data bus integration, secure API gateways, and standardized governance across government systems.",
    nodeInfoRegistries: "National Registries & Data: Establishing trusted, synchronized national data registers ensuring secure interoperability without duplicate records.",
    nodeInfoInfra: "Secure Cloud & Infrastructure: Operating robust, 24/7 mission-critical government infrastructure with high availability and sovereign data protection.",

    // Section 2: About / Authority
    aboutTag: "ESTABLISHED AUTHORITY",
    aboutTitle: 'Empowering Egypt\'s Public Sector Under <span class="gradient-text">Decree No. 132/2020</span>',
    aboutDesc1: "Digital Egypt For Investment Co. (DEFI) was founded pursuant to Prime Minister Decree No. 132/2020 to serve as the specialized technical and strategic arm supporting the Ministry of Communications and Information Technology (MCIT) and the Information Technology Industry Development Agency (ITIDA).",
    aboutDesc2: "By combining enterprise-grade IT architecture with a deep understanding of governmental mandates, DEFI bridges the gap between ambitious national transformation policies and resilient, secure operational reality.",
    pillar1Title: "Public Sector Focus",
    pillar1Desc: "Dedicated exclusively to government authorities, public service agencies, and national projects.",
    pillar2Title: "Governance & Security",
    pillar2Desc: "Rigorous compliance with Egyptian state data sovereignty, security, and quality benchmarks.",
    mandateCardTitle: "National Mandate & Mission",
    mandatePt1Title: "Modernizing Public Services:",
    mandatePt1Desc: "Transforming legacy administrative workflows into intuitive, citizen-centric digital platforms.",
    mandatePt2Title: "Interoperable Infrastructure:",
    mandatePt2Desc: "Establishing enterprise architecture frameworks that seamlessly link federal registries and services.",
    mandatePt3Title: "Operational Continuity:",
    mandatePt3Desc: "Managing and safeguarding mission-critical systems with 24/7 reliability and performance monitoring.",
    valuesLabel: "Core Values:",
    val1: "Innovation",
    val2: "Excellence",
    val3: "Collaboration",
    val4: "Integrity",

    // Section 3: Diagram C (Capability Matrix)
    capTag: "VERIFIED CAPABILITY MATRIX",
    capTitle: 'Diagram C · The 6 Institutional <span class="gradient-text">Capability Pillars</span>',
    capSub: "Rather than generic tech offerings, DEFI provides six integrated enterprise pillars verified on our official service charter. Select any pillar below to inspect its operational mandate.",
    cap1Title: "Business Architecture",
    cap1Snippet: "Strategy & operating model alignment",
    cap2Title: "Solution Architecture",
    cap2Snippet: "Scalable platforms & interoperability",
    cap3Title: "IT Operations",
    cap3Snippet: "System reliability & 24/7 performance",
    cap4Title: "Citizen Experience",
    cap4Snippet: "Accessible, intuitive public service design",
    cap5Title: "Project Management",
    cap5Snippet: "On-time delivery with public governance",
    cap6Title: "Quality Governance",
    cap6Snippet: "Audits, testing & regulatory compliance",

    cap1Heading: "Business Architecture",
    cap1Desc: "Aligning governmental strategies with operational models to support public-sector transformation, process optimization, and effective integration of government IT systems.",
    cap1Impact: "Streamlined inter-agency processes and eliminated departmental silos.",
    cap1Deliv: "Operating Models · Enterprise Process Blueprints · Transformation Roadmaps",

    cap2Heading: "Solution Architecture",
    cap2Desc: "Designing and implementing scalable, secure technology solutions aligned with national priorities, ensuring interoperability and seamless integration across government platforms.",
    cap2Impact: "Unified government systems architecture ensuring scalable, future-ready public digital services.",
    cap2Deliv: "Platform Blueprints · API Standards · System Integration Specifications",

    cap3Heading: "IT Operations & Continuity",
    cap3Desc: "Managing and optimizing government IT operations to ensure system reliability, security, continuity of services, and efficient day-to-day performance across public-sector environments.",
    cap3Impact: "Uninterrupted mission-critical public services and maximized operational uptime.",
    cap3Deliv: "24/7 Monitoring Blueprints · Incident Response Protocols · Disaster Recovery Management",

    cap4Heading: "Citizen Experience (CX)",
    cap4Desc: "Enhancing citizen interactions through intuitive, inclusive digital and physical government service designs focused on accessibility and usability across all demographics.",
    cap4Impact: "Higher citizen satisfaction, reduced service completion times, and universal digital accessibility.",
    cap4Deliv: "Citizen Journey Maps · Universal Design Frameworks · Usability Benchmark Testing",

    cap5Heading: "Project Management & Delivery",
    cap5Desc: "Delivering government projects on time and within approved budgets using proven public-sector methodologies, with strong risk management and stakeholder coordination.",
    cap5Impact: "Risk mitigation and accelerated delivery timelines across complex inter-ministerial projects.",
    cap5Deliv: "National PMO Frameworks · Milestone Governance · Risk Mitigation Matrices",

    cap6Heading: "Quality Governance & Compliance",
    cap6Desc: "Ensuring high standards of performance, security, and regulatory compliance through audits, testing, and continuous improvement across government digital initiatives.",
    cap6Impact: "Regulatory adherence to Egyptian government data security and service quality standards.",
    cap6Deliv: "Compliance Audits · Performance & Load Testing Reports · Security Certification Blueprints",

    capImpactLabel: "Institutional Impact:",
    capDeliverableLabel: "Key Deliverables:",

    // Section 4: Diagram B (Journey Stepper)
    journeyTag: "DELIVERY METHODOLOGY",
    journeyTitle: 'Diagram B · The Public-Sector <span class="gradient-text">Transformation Journey</span>',
    journeySub: "How DEFI guides government institutions from strategic mandate through architectural engineering to resilient 24/7 service operation.",
    step1Phase: "PHASE 1",
    step1Title: "Assess & Align",
    step1Summary: "Evaluate agency workflows, define objectives, and establish enterprise architecture governance.",
    step1Tag: "Governance & Strategy",

    step2Phase: "PHASE 2",
    step2Title: "Architect & Design",
    step2Summary: "Engineer secure, scalable solution blueprints complying with national interoperability standards.",
    step2Tag: "Solution Architecture",

    step3Phase: "PHASE 3",
    step3Title: "Integrate & Deploy",
    step3Summary: "Modernize legacy systems, integrate API registries, and execute phased public deployment.",
    step3Tag: "Execution & Integration",

    step4Phase: "PHASE 4",
    step4Title: "Operate & Safeguard",
    step4Summary: "Manage 24/7 continuity, infrastructure reliability, data security, and high-availability operations.",
    step4Tag: "Operations & Continuity",

    step5Phase: "PHASE 5",
    step5Title: "Elevate & Evolve",
    step5Summary: "Refine citizen experience, conduct rigorous quality audits, and scale for national impact.",
    step5Tag: "Citizen Experience CX",
    btnSimulateJourney: "Play Lifecycle Progression",
    journeyHint: "Click any phase card above or trigger progression to inspect institutional deliverables and quality gates.",

    // Section 4B: Diagram D (Sovereign Interoperability Engine)
    interopTag: "SOVEREIGN INTEGRATION BUS",
    interopTitle: 'Diagram D · Sovereign Interoperability <span class="gradient-text">Engine & Data Bus</span>',
    interopSub: "Live architectural simulation of inter-agency data flow orchestrating citizen service requests, national identity verification, and multi-ministerial fulfillment.",
    simStatusTitle: "Live Sovereign Bus: Standby / Operational",
    btnRunSim: "Run Interoperability Test",
    simNode1Title: "Citizen Touchpoint",
    simNode1Desc: "Digital Egypt Portal / App",
    simNode2Title: "DEFI Sovereign Gateway",
    simNode2Desc: "Mutual TLS & WAF Inspection",
    simNode3Title: "Civil Registry Sync",
    simNode3Desc: "National ID Verification",
    simNode4Title: "Ministerial Core Backend",
    simNode4Desc: "MOE / Cabinet IDSC / Health",
    simNode5Title: "Sovereign Tier IV Cloud",
    simNode5Desc: "Audit Trail & Signed Output",
    consoleTitle: "DEFI Enterprise Service Bus — Live Transaction Monitor",

    // Section 5: Impact & Partners
    impactTag: "VERIFIED TRACK RECORD",
    impactTitle: 'Trusted by Egypt\'s <span class="gradient-text">Leading Institutions</span>',
    impactSub: "We work closely with prominent government bodies committed to modernizing public services, elevating citizen experience, and executing Egypt's national digital agenda.",
    partnerBadgeGov: "MINISTERIAL PARTNER",
    partnerBadgeSponsor: "FOUNDING SPONSOR",
    partner1Name: "Ministry of Education & Technical Education",
    partner1Desc: "Supporting large-scale educational systems and digital examinations infrastructure to serve millions of students and educators nationwide.",
    partner1Tag: "National Education Platforms",
    partner2Name: "Information and Decision Support Center (IDSC)",
    partner2Desc: "The Egyptian Cabinet's premier think tank and decision support hub, collaborating on data platforms and institutional intelligence solutions.",
    partner2Tag: "Executive Decision Platforms",
    partner3Name: "MCIT & ITIDA",
    partner3Desc: "Aligned with the Ministry of Communications and Information Technology and ITIDA to advance Egypt's digital knowledge-based economy under Decree 132/2020.",
    partner3Tag: "National Digital Strategy",
    partner4Name: "Government Authorities & Entities",
    partner4Desc: "Delivering cross-sectoral enterprise architecture, interoperability solutions, and citizen service workflows across key governmental domains.",
    partner4Tag: "200+ Modernized Services",

    // Section 5B: Sectors in Focus
    sectorsTag: "SOVEREIGN VERTICALS",
    sectorsTitle: 'Transforming Strategic <span class="gradient-text">National Sectors</span>',
    sectorsSub: "DEFI designs and operates mission-critical digital systems across Egypt's high-priority governmental domains.",
    sector1Badge: "Education & Youth",
    sector1Title: "National Exam & Evaluation Grid",
    sector1Desc: "Mission-critical nationwide testing infrastructure supporting millions of concurrent secondary school students with zero downtime and military-grade paperless security.",
    sector1Metric: "Concurrent Candidates",
    sector2Badge: "Executive Intelligence",
    sector2Title: "National Crisis & Decision Hub",
    sector2Desc: "Real-time executive dashboards aggregating macroeconomic indicators, commodity supplies, and multi-agency KPIs directly to the Prime Minister and Cabinet leadership.",
    sector2Metric: "Executive Decision Visibility",
    sector3Badge: "Universal Healthcare",
    sector3Title: "Unified Medical Registry & E-Health",
    sector3Desc: "Interoperable electronic health records (EHR) seamlessly integrating university hospitals, public clinics, and the Universal Health Insurance authority across governorates.",
    sector3Metric: "Unified Citizen Health ID",
    sector4Badge: "Justice & Cadastre",
    sector4Title: "Sovereign Land & Property Register",
    sector4Desc: "Cryptographically audited digital title deed registry and automated notary workflows eliminating property disputes and accelerating investment registration.",
    sector4Metric: "Fraud-Resistant Deeds",
    sector5Badge: "Smart Governance",
    sector5Title: "New Capital IoT & Municipal Hub",
    sector5Desc: "Integrated urban operations center uniting utility metering, smart traffic management, and unified municipal billing in Egypt's fourth-generation sovereign cities.",
    sector5Metric: "Automated City Operations",

    // Section 5C: National Sovereign Digital Grid
    gridTag: "SOVEREIGN COVERAGE & UPTIME",
    gridTitle: 'National Command Center · <span class="gradient-text">Sovereign Digital Grid</span>',
    gridSub: "Real-time telemetry and high-availability operations across 27 Egyptian governorates unified under the sovereign digital infrastructure backbone.",
    gridStatusTitle: "Sovereign Backbone: Active · 99.999% National SLA",
    regCairo: "Greater Cairo Core",
    regAlex: "Alexandria & Delta",
    regCanal: "Suez Canal Axis",
    regUpper: "Upper Egypt Spine",
    regNac: "New Capital Gov Cloud",
    regCairoTitle: "Greater Cairo Operations Core",
    regCairoDesc: "Serving the central ministries, sovereign data registers, and 24+ million citizens with high-concurrency request routing and instant civil identification.",
    kpiThroughput: "Peak Throughput",
    kpiLatency: "Internal Bus Latency",
    kpiUptime: "Validated SLA",
    kpiEntities: "Interconnected Entities",
    btnPingHub: "Ping Regional Hub",

    // Blueprint and Payload Details
    blueprintStakeholdersLabel: "Primary Stakeholders:",
    blueprintStandardLabel: "Verification Standard:",
    blueprintDeliverableLabel: "Key Deliverable:",
    payloadTitle: "Citizen Touchpoint Inbound Request",
    payloadHint: "Click any stage above to inspect live cryptographic payload",

    // Section 6: Careers
    careersTag: "JOIN OUR MISSION",
    careersTitle: 'Be Part of Egypt\'s <span class="gradient-text">Digital Future</span>',
    careersDesc: "Whether you are an enterprise architect, software engineer, security specialist, or digital transformation consultant—we offer you the opportunity to engineer solutions that impact millions of citizens every day.",
    careerFeat1: "Nationwide sovereign impact",
    careerFeat2: "Over 200 expert technology peers",
    careerFeat3: "Enterprise-grade architecture standards",
    careerBtn: "Inquire About Opportunities",
    careerNote: "Send your CV directly to: info@defi.com.eg",
    crestDecree: "DECREE 132/2020",
    crestLabel: "National Digital Delivery",

    // Section 7: Contact
    contactTag: "GET IN TOUCH",
    contactTitle: 'Connect with Our <span class="gradient-text">Leadership Team</span>',
    contactDesc: "For public-sector partnership inquiries, enterprise architecture evaluations, or institutional collaboration, our teams at Smart Village are ready to assist.",
    contactAddressTitle: "Headquarters",
    contactAddressText: "Smart Village, Building B145, Cairo-Alexandria Desert Road, Giza, Egypt",
    contactEmailTitle: "Official Correspondence",
    contactLegalTitle: "Corporate Status",
    contactLegalText: "Egyptian Joint Stock Company established by Prime Minister Decree No. 132/2020 under MCIT & ITIDA.",
    formTitle: "Institutional Inquiry Form",
    formSub: "Direct your inquiry to our enterprise advisory team.",
    formNameLabel: "Full Name",
    formNamePh: "e.g. Dr. Ahmed Hassan",
    formEntityLabel: "Government Entity / Organization",
    formEntityPh: "e.g. Ministry / Public Authority",
    formEmailLabel: "Official Email",
    formEmailPh: "name@entity.gov.eg",
    formTopicLabel: "Inquiry Pillar",
    opt1: "Business Architecture",
    opt2: "Solution Architecture",
    opt3: "IT Operations & Continuity",
    opt4: "Citizen Experience (CX)",
    opt5: "Project Management & Governance",
    opt6: "Careers & Talent",
    opt7: "General Institutional Inquiry",
    formMessageLabel: "Message / Scope Overview",
    formMessagePh: "Please outline your entity's requirements or inquiry...",
    formSubmit: "Transmit Inquiry",
    formSuccessMsg: "Inquiry logged successfully. Our enterprise team will follow up via your official email.",
    formErrorMsg: "Please complete all required fields with valid details.",

    // Footer
    footerMission: "Digital Egypt For Investment Co. (DEFI) — Delivering enterprise architecture, digital transformation, and mission-critical government platforms under Prime Minister Decree No. 132/2020.",
    footerNavTitle: "Navigation",
    footerCapTitle: "Verified Pillars",
    footerGovTitle: "Institutional Context",
    footerDecreeText: "Established under Prime Minister Decree No. 132/2020. Operating under the auspices of MCIT and ITIDA.",
    footerCopyright: "© 2026 Digital Egypt For Investment Co. (DEFI). Established pursuant to Prime Minister Decree No. 132/2020. All rights reserved.",
    backToTop: "Back to top"
  },

  ar: {
    // Header & Announcement
    skipLink: "الانتقال إلى المحتوى الرئيسي",
    officialNotice: "جهة وطنية حكومية متخصصة",
    mandateBanner: "أُنشئت بموجب قرار رئيس مجلس الوزراء رقم 132 لسنة 2020 | دعم التحول الرقمي تحت مظلة الاتصالات وإيتيدا",
    hqLocation: "📍 القرية الذكية، مبنى B145، القاهرة",
    navAbout: "عن مصر الرقمية",
    navEcosystem: "المنظومة الرقمية",
    navCapabilities: "القدرات المؤسسية",
    navJourney: "نموذج العمل",
    navInterop: "ناقل البيانات",
    navSectors: "القطاعات",
    navGrid: "الشبكة السيادية",
    navImpact: "الشركاء والأثر",
    navCareers: "الوظائف",
    navContactCTA: "تواصل معنا",
    langLabel: "English",
    drawerLangLabel: "Switch to English",

    // Hero Section
    heroBadgePre: "قرار رقم 132/2020",
    heroBadgeText: "الشريك التنفيذي للتحول الرقمي الحكومي",
    heroHeadline: 'بناء <span class="gradient-text">الركائز الرقمية</span> للمنظومة الحكومية في مصر',
    heroSubhead: "تمكين الوزارات والجهات العامة بالبنية المؤسسية الاستراتيجية، والمنصات التقنية الآمنة، والخدمات المتمحورة حول المواطن لتسريع مسيرة التحول الرقمي الوطني.",
    heroCtaPrimary: "استكشف المنظومة الرقمية",
    heroCtaSecondary: "مجالات القدرات",

    // Hero Metrics
    metricClients: "عميل ومؤسسة",
    metricConsultants: "استشاري ومتخصص",
    metricGovEntities: "جهة حكومية مستفيدة",
    metricServices: "خدمة حكومية مُمكّنة",

    // Diagram A (Hero Ecosystem)
    diagramATitle: "مخطط أ · المنظومة الرقمية الوطنية المتكاملة",
    diagramAInteractiveTag: "هندسة معمارية تفاعلية",
    telemetryThroughput: "18,450 معاملة/ث",
    telemetryLatency: "< 4.2 مللي ثانية",
    telemetrySecurity: "سحابة سيادية Tier-IV",
    btnSimulateTraffic: "محاكاة التدفق الرقمي",
    diagramADefaultInfo: "انقر أو مرر فوق أي طبقة من طبقات المنظومة أعلاه للتعرف على دور مصر الرقمية للاستثمار في ربط البيانات والخدمات الحكومية.",
    nodeTouchpointsTitle: "قنوات المواطنين وقطاع الأعمال",
    nodeTouchpointsSub: "بوابات رقمية · تطبيقات الهاتف · مراكز الخدمة",
    nodeEntitiesTitle: "الجهات والمؤسسات الحكومية",
    nodeEntitiesSub: "التربية والتعليم · مركز معلومات مجلس الوزراء · +25 جهة",
    nodeCoreTitle: "منصة التمكين الرقمي الموحدة (DEFI)",
    nodeCoreSub1: "الهندسة المؤسسية · الربط والتكامل البيني",
    nodeCoreSub2: "ناقل البيانات الوطني · واجهات برمجة آمنة (APIs)",
    nodeDataTitle: "السجلات الوطنية وقواعد البيانات",
    nodeDataSub: "السجلات الأساسية المترابطة والآمنة",
    nodeInfraTitle: "البنية التحتية والسحابة الحكومية الآمنة",
    nodeInfraSub: "مراكز بيانات فائقة الجاهزية · تشغيل على مدار 24/7",

    // Diagram A Tooltip Explanations
    nodeInfoCitizens: "قنوات المواطنين والأعمال: توحيد الوصول للخدمات الحكومية عبر بوابة مصر الرقمية والتطبيقات الذكية ومراكز الخدمات لضمان تجربة سهلة وسلسة.",
    nodeInfoMinistries: "الجهات الحكومية والوزارات: التعاون الاستراتيجي مع الوزارات والهيئات (مثل وزارة التربية والتعليم ومركز معلومات مجلس الوزراء) لأتمتة الإجراءات ورفع كفاءة العمليات.",
    nodeInfoDefiCore: "منظومة التمكين الرقمي (DEFI): الركيزة المركزية التي توفر معايير الهندسة المؤسسية، والتكامل البيني بين الأنظمة، وواجهات الربط الموحدة وحوكمة البيانات.",
    nodeInfoRegistries: "السجلات الوطنية: بناء سجلات حكومية مركزية متكاملة لضمان دقة البيانات ومنع التكرار وتسهيل التبادل الآمن للمعلومات.",
    nodeInfoInfra: "البنية السحابية والتشغيلية: إدارة البنية التحتية فائقة الأمان ومراكز البيانات لضمان استمرارية الخدمات الحكومية الحيوية 24 ساعة يومياً.",

    // Section 2: About / Authority
    aboutTag: "سلطة وتفويض رسمي",
    aboutTitle: 'تمكين القطاع الحكومي المصري بموجب <span class="gradient-text">القرار رقم 132 لسنة 2020</span>',
    aboutDesc1: "تأسست شركة مصر الرقمية للاستثمار (DEFI) استناداً إلى قرار رئيس مجلس الوزراء رقم 132 لسنة 2020 لتكون الذراع التقني والاستراتيجي الداعم لوزارة الاتصالات وتكنولوجيا المعلومات وهيئة تنمية صناعة تكنولوجيا المعلومات (إيتيدا).",
    aboutDesc2: "من خلال الجمع بين المعايير العالمية في الهندسة المؤسسية والفهم الدقيق للمتطلبات والسياسات الحكومية، تسد الشركة الفجوة بين استراتيجيات التحول الوطني والتطبيق التشغيلي عالي الأمان والموثوقية.",
    pillar1Title: "تركيز حكومي سيادي",
    pillar1Desc: "مكرسون حصرياً لدعم الوزارات والجهات العامة والمشاريع القومية ذات الأثر المجتمعي الواسع.",
    pillar2Title: "الحوكمة وسيادة البيانات",
    pillar2Desc: "التزام صارم بمعايير الأمن السيبراني وسيادة البيانات الوطنية وأعلى معايير الجودة.",
    mandateCardTitle: "التفويض والرسالة الوطنية",
    mandatePt1Title: "تطوير الخدمات الحكومية:",
    mandatePt1Desc: "تحويل الإجراءات الورقية المعقدة إلى منصات رقمية تفاعلية تتمحور حول تيسير حياة المواطن.",
    mandatePt2Title: "بنية تحتية مترابطة:",
    mandatePt2Desc: "بناء أطر الهندسة المؤسسية التي تضمن الربط التكاملي بين مختلف الهيئات والوزارات.",
    mandatePt3Title: "استمرارية التشغيل:",
    mandatePt3Desc: "إدارة الأنظمة والمنصات الحيوية وحمايتها ومراقبة أدائها على مدار الساعة دون انقطاع.",
    valuesLabel: "القيم المؤسسية:",
    val1: "الابتكار",
    val2: "التميز",
    val3: "التعاون المشترك",
    val4: "النزاهة والشفافية",

    // Section 3: Diagram C (Capability Matrix)
    capTag: "مصفوفة القدرات المؤسسية المعتمدة",
    capTitle: 'مخطط ج · ركائز <span class="gradient-text">القدرات المؤسسية</span> الست',
    capSub: "بدلاً من الخدمات التقنية التقليدية، تقدم مصر الرقمية للاستثمار 6 ركائز مؤسسية متكاملة ومعتمدة في ميثاق خدماتنا الرسمي. اختر أي ركيزة للاطلاع على مهامها التنفيذية.",
    cap1Title: "الهندسة المؤسسية ونماذج الأعمال",
    cap1Snippet: "مواءمة الاستراتيجيات الحكومية مع نماذج التشغيل",
    cap2Title: "هندسة الحلول والمنصات",
    cap2Snippet: "منصات تقنية قابلة للتوسع والتكامل البيني",
    cap3Title: "إدارة العمليات واستمرارية الأنظمة",
    cap3Snippet: "ضمان الموثوقية والأداء المستمر على مدار 24/7",
    cap4Title: "تجربة المواطن وإمكانية الوصول",
    cap4Snippet: "تصميم خدمات رقمية ومكانية شاملة وسهلة الاستخدام",
    cap5Title: "حوكمة وإدارة المشاريع",
    cap5Snippet: "تسليم المشاريع الحكومية بدقة وحوكمة معتمدة",
    cap6Title: "حوكمة الجودة والامتثال",
    cap6Snippet: "المراجعة والاختبار والامتثال التنظيمي الصارم",

    cap1Heading: "الهندسة المؤسسية ونماذج الأعمال (Business Architecture)",
    cap1Desc: "مواءمة الاستراتيجيات الحكومية مع نماذج التشغيل التنفيذية لتمكين التحول المؤسسي في القطاع العام، وتحسين مسارات العمليات وتكامل الأنظمة الحكومية بكفاءة.",
    cap1Impact: "تبسيط الإجراءات المشتركة بين الجهات الحكومية وإزالة العوائق الإدارية المنعزلة.",
    cap1Deliv: "نماذج التشغيل المؤسسي · خرائط الإجراءات الحكومية · مسارات التحول الاستراتيجي",

    cap2Heading: "هندسة الحلول والمنصات (Solution Architecture)",
    cap2Desc: "تصميم وتطبيق حلول تقنية آمنة وقابلة للتوسع تتوافق مع الأولويات الوطنية، وتضمن الربط والتكامل السلس بين منصات وتطبيقات الجهات الحكومية.",
    cap2Impact: "بنية برمجية موحدة تضمن استدامة وتوسع الخدمات الحكومية الرقمية في المستقبل.",
    cap2Deliv: "المخططات الهندسية للمنصات · معايير واجهات الربط API · وثائق التكامل البيني",

    cap3Heading: "إدارة العمليات واستمرارية الأنظمة (IT Operations)",
    cap3Desc: "إدارة وتحسين عمليات تكنولوجيا المعلومات لضمان موثوقية الأنظمة الحكومية، وأمانها، واستمرارية الخدمات الرقمية على مدار الساعة في مختلف البيئات الحكومية.",
    cap3Impact: "استمرار الخدمات الحكومية الحيوية دون انقطاع وتأمين الجاهزية التشغيلية القصوى.",
    cap3Deliv: "أنظمة الرصد التشغيلي 24/7 · بروتوكولات الاستجابة للطوارئ · خطط التعافي من الكوارث",

    cap4Heading: "تجربة المواطن وإمكانية الوصول (Citizen Experience)",
    cap4Desc: "تطوير تجربة المواطن من خلال تصميم خدمات حكومية رقمية ومكانية تتسم بالسهولة والشمولية وتراعي سهولة الاستخدام لكافة فئات المجتمع دون استثناء.",
    cap4Impact: "رفع رضا المواطنين، وتقليص أوقات إنجاز المعاملات، وتحقيق الشمول الرقمي العادل.",
    cap4Deliv: "خرائط رحلة المواطن · أدلة التصميم الشامل · اختبارات قابلية الاستخدام المعيارية",

    cap5Heading: "إدارة وحوكمة المشاريع الحكومية (Project Management)",
    cap5Desc: "تنفيذ وإنجاز المشاريع الحكومية في المواعيد المحددة ووفق الميزانيات المعتمدة، بالاعتماد على منهجيات القطاع العام مع إدارة احترافية للمخاطر وتنسيق أصحاب المصلحة.",
    cap5Impact: "التحكم في المخاطر وتسريع وتيرة إنجاز المشاريع القومية متعددة الأطراف.",
    cap5Deliv: "أطر عمل مكاتب إدارة المشاريع (PMO) · حوكمة المراحل التنفيذية · مصفوفة إدارة المخاطر",

    cap6Heading: "حوكمة الجودة والامتثال التنظيمي (Quality Governance)",
    cap6Desc: "ضمان أعلى معايير الأداء والأمان السيبراني والامتثال التنظيمي من خلال المراجعات الدورية، واختبارات الجودة الشاملة، والتحسين المستمر للمبادرات الرقمية.",
    cap6Impact: "الالتزام الكامل بالمعايير واللوائح الوطنية المصرية لأمن وسرية البيانات وجودة الخدمات.",
    cap6Deliv: "تقارير مراجعة الامتثال · اختبارات الأداء والأحمال القصوى · وثائق شهادات الجودة والأمان",

    capImpactLabel: "الأثر المؤسسي:",
    capDeliverableLabel: "المخرجات الرئيسية:",

    // Section 4: Diagram B (Journey Stepper)
    journeyTag: "منهجية التنفيذ والتشغيل",
    journeyTitle: 'مخطط ب · رحلة التحول الرقمي <span class="gradient-text">في القطاع الحكومي</span>',
    journeySub: "مسار عمل مؤسسي واضح يقود الجهات الحكومية من تحديد الاحتياجات الاستراتيجية وحتى التشغيل الآمن والمستمر للخدمات 24 ساعة يومياً.",
    step1Phase: "المرحلة الأولى",
    step1Title: "التقييم والمواءمة",
    step1Summary: "دراسة مسارات العمل الحكومية، وتحديد الأهداف التنفيذية، وإرساء قواعد حوكمة الهندسة المؤسسية.",
    step1Tag: "الحوكمة والاستراتيجية",

    step2Phase: "المرحلة الثانية",
    step2Title: "التصميم وهندسة الحلول",
    step2Summary: "وضع المخططات الهندسية لمنصات آمنة وقابلة للتوسع تتوافق تماماً مع المعايير الوطنية للربط البيني.",
    step2Tag: "هندسة الحلول التقنية",

    step3Phase: "المرحلة الثالثة",
    step3Title: "التكامل والتطبيق",
    step3Summary: "تحديث الأنظمة الحالية، وربط السجلات وقواعد البيانات عبر واجهات آمنة، والإطلاق المرحلي المنظم.",
    step3Tag: "التنفيذ والتكامل",

    step4Phase: "المرحلة الرابعة",
    step4Title: "التشغيل والحماية",
    step4Summary: "إدارة العمليات واستمرارية البنية التحتية، وحماية أمن البيانات، وضمان الجاهزية التشغيلية على مدار 24/7.",
    step4Tag: "العمليات واستمرارية الخدمة",

    step5Phase: "المرحلة الخامسة",
    step5Title: "الارتقاء والتطوير",
    step5Summary: "تحسين تجربة المواطن باستمرار، وإجراء مراجعات الجودة الشاملة، والتوسع لتغطية الاحتياجات القومية المتزايدة.",
    step5Tag: "تجربة المواطن والجودة",
    btnSimulateJourney: "تشغيل دورة التحول",
    journeyHint: "انقر على أي مرحلة أعلاه أو شغّل مسار التحول للاطلاع على المخرجات المؤسسية وبوابات الجودة.",

    // Section 4B: Diagram D (Sovereign Interoperability Engine)
    interopTag: "ناقل الربط والتكامل السيادي",
    interopTitle: 'مخطط د · محرك الربط البيني <span class="gradient-text">وناقل البيانات السيادي</span>',
    interopSub: "محاكاة معمارية حية لتدفق البيانات الحكومية المتبادلة بين قنوات المواطنين والتحقق السيادي من الهوية وتنفيذ الخدمات الوزارية.",
    simStatusTitle: "ناقل البيانات السيادي: جاهز للتشغيل اللحظي",
    btnRunSim: "بدء اختبار التكامل السيادي",
    simNode1Title: "قنوات المواطن والأعمال",
    simNode1Desc: "منصة مصر الرقمية والتطبيقات الذكية",
    simNode2Title: "بوابة التكامل السيادية لـ DEFI",
    simNode2Desc: "التشفير المتبادل وفحص الأمان السيبراني",
    simNode3Title: "السجل المدني وقواعد البيانات",
    simNode3Desc: "التحقق اللحظي عبر الرقم القومي",
    simNode4Title: "الأنظمة المركزية للجهات الوزارية",
    simNode4Desc: "التعليم · مركز معلومات مجلس الوزراء · الصحة",
    simNode5Title: "السحابة الحكومية السيادية Tier-IV",
    simNode5Desc: "التوثيق الرقمي والاعتماد الفوري للخدمة",
    consoleTitle: "شاشة مراقبة ناقل التكامل الرقمي الحكومي — DEFI",

    // Section 5: Impact & Partners
    impactTag: "سجل الإنجاز والشركاء",
    impactTitle: 'شراكات موثوقة مع <span class="gradient-text">كبرى الهيئات الوطنية</span>',
    impactSub: "نعمل بتعاون وثيق مع المؤسسات الحكومية الرائدة الملتزمة بتطوير خدماتها، والارتقاء بتجربة المواطن، وتسريع مسيرة مصر نحو المستقبل الرقمي.",
    partnerBadgeGov: "شريك حكومي وزاري",
    partnerBadgeSponsor: "الجهة المؤسسة والداعمة",
    partner1Name: "وزارة التربية والتعليم والتعليم الفني",
    partner1Desc: "دعم المنظومات التعليمية القومية والبنية التحتية للاختبارات الرقمية لخدمة ملايين الطلاب والمعلمين في كافة أنحاء الجمهورية.",
    partner1Tag: "منظومات التعليم الرقمي القومية",
    partner2Name: "مركز المعلومات ودعم اتخاذ القرار بمجلس الوزراء",
    partner2Desc: "مركز الفكر ودعم القرار الرائد للحكومة المصرية، والتعاون في تطوير منصات البيانات والذكاء المؤسسي لدعم متخذي القرار.",
    partner2Tag: "منصات دعم القرار الحكومي",
    partner3Name: "وزارة الاتصالات وهيئة إيتيدا",
    partner3Desc: "العمل بتناغم تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات وهيئة إيتيدا لتحقيق رؤية مصر القائمة على المعرفة الرقمية وفقاً للقرار 132/2020.",
    partner3Tag: "الاستراتيجية الرقمية الوطنية",
    partner4Name: "الجهات والمؤسسات الحكومية",
    partner4Desc: "تقديم استشارات الهندسة المؤسسية وحلول الربط البيني وتطوير مسارات الخدمات للمواطنين في مختلف القطاعات الحيوية.",
    partner4Tag: "+200 خدمة حكومية مُمكّنة",

    // Section 5B: Sectors in Focus
    sectorsTag: "القطاعات والمحاور السيادية",
    sectorsTitle: 'تمكين وتطوير <span class="gradient-text">القطاعات الوطنية الكبرى</span>',
    sectorsSub: "تقوم شركة مصر الرقمية للاستثمار بتصميم وتشغيل منظومات رقمية فائقة الأهمية عبر القطاعات الحكومية ذات الأولوية الوطنية.",
    sector1Badge: "التعليم والشباب",
    sector1Title: "المنظومة القومية للاختبارات والتقييم الإلكتروني",
    sector1Desc: "بنية تحتية قومية للاختبارات الإلكترونية تخدم ملايين طلاب الثانوية العامة بشكل متزامن وبأعلى درجات التأمين السيبراني وعدم انقطاع الخدمة.",
    sector1Metric: "طالب متزامن في آن واحد",
    sector2Badge: "دعم القرار السيادي",
    sector2Title: "المنظومة القومية لإدارة الأزمات ومتابعة المؤشرات",
    sector2Desc: "لوحات قيادية لحظية لربط المؤشرات الاقتصادية والسلع الاستراتيجية وعرضها مباشرة على رئاسة مجلس الوزراء والقيادة التنفيذية.",
    sector2Metric: "رؤية شاملة للقرارات السيادية",
    sector3Badge: "التأمين الصحي الشامل",
    sector3Title: "السجل الطبي الرقمي الموحد والصحة الإلكترونية",
    sector3Desc: "سجلات طبية إلكترونية موحدة تربط المستشفيات الجامعية والمراكز الصحية بمنظومة التأمين الصحي الشامل بمختلف المحافظات.",
    sector3Metric: "مواطن مسجل بالملف الطبي الموحد",
    sector4Badge: "العدل والتوثيق العقاري",
    sector4Title: "منظومة الشهر العقاري والسجل العيني السيادي",
    sector4Desc: "أرشفة وتوثيق رقمي مشفر لمعاملات الملكية والشهر العقاري للحد من النزاعات وتسريع إجراءات الاستثمار.",
    sector4Metric: "حماية وتوثيق مشفر للملكيات",
    sector5Badge: "المدن والمرافق الذكية",
    sector5Title: "مركز إدارة المرافق الذكية بالعاصمة الإدارية",
    sector5Desc: "مركز تحكم موحد لإدارة المرافق والعدادات الذكية والتحصيل الموحد في مدن الجيل الرابع الذكية بمصر.",
    sector5Metric: "تشغيل ومراقبة ذكية على مدار الساعة",

    // Section 5C: National Sovereign Digital Grid
    gridTag: "التغطية والجاهزية السيادية",
    gridTitle: 'مركز القيادة والتحكم · <span class="gradient-text">الشبكة الرقمية السيادية</span>',
    gridSub: "مؤشرات التشغيل اللحظية وموثوقية الخدمة في 27 محافظة مصرية مترابطة تحت مظلة البنية التحتية السيادية الموحدة.",
    gridStatusTitle: "العمود الفقري السيادي: نشط · جاهزية قومية 99.999%",
    regCairo: "محور القاهرة الكبرى",
    regAlex: "الإسكندرية والدلتا",
    regCanal: "محور قناة السويس",
    regUpper: "محور صعيد مصر",
    regNac: "سحابة العاصمة الإدارية",
    regCairoTitle: "مركز العمليات الرئيسي بالقاهرة الكبرى",
    regCairoDesc: "خدمة الوزارات المركزية والسجلات السيادية وأكثر من 24 مليون مواطن مع توجيه فائق السرعة للمعاملات والتحقق اللحظي من الهوية.",
    kpiThroughput: "أقصى معدل تدفق",
    kpiLatency: "زمن استجابة الناقل",
    kpiUptime: "نسبة الجاهزية المعتمدة",
    kpiEntities: "جهات وهيئات مترابطة",
    btnPingHub: "فحص اتصال المركز",

    // Blueprint and Payload Details
    blueprintStakeholdersLabel: "أصحاب المصلحة الرئيسيون:",
    blueprintStandardLabel: "المعيار الرقابي:",
    blueprintDeliverableLabel: "المخرج الرئيسي:",
    payloadTitle: "حزمة البيانات الواردة من المواطن",
    payloadHint: "انقر فوق أي مرحلة أعلاه لمعاينة حزمة البيانات المشفرة لحظياً",

    // Section 6: Careers
    careersTag: "انضم إلى مهمتنا الوطنية",
    careersTitle: 'شارك في بناء <span class="gradient-text">مستقبل مصر الرقمي</span>',
    careersDesc: "سواء كنت مهندساً معمارياً للبرمجيات، أو خبيراً في الأمن السيبراني، أو استشارياً في التحول الرقمي—نوفر لك بيئة عمل استثنائية لصناعة حلول تمس حياة ملايين المواطنين يومياً.",
    careerFeat1: "أثر وطني وسيادي مباشر ومستدام",
    careerFeat2: "فريق يضم أكثر من 200 من نخبة الكفاءات التقنية",
    careerFeat3: "معايير هندسية مؤسسية بمعايير عالمية",
    careerBtn: "استفسر عن الفرص المتاحة",
    careerNote: "أرسل سيرتك الذاتية مباشرة إلى: info@defi.com.eg",
    crestDecree: "قرار رقم 132/2020",
    crestLabel: "الذراع التقني الوطني للتحول الرقمي",

    // Section 7: Contact
    contactTag: "تواصل معنا",
    contactTitle: 'تواصل مع <span class="gradient-text">الفريق التنفيذي</span>',
    contactDesc: "للاستفسارات الخاصة بالشراكات الحكومية، أو تقييمات الهندسة المؤسسية، أو مجالات التعاون الاستراتيجي، فريقنا في القرية الذكية جاهز لخدمتكم.",
    contactAddressTitle: "المقر الرئيسي",
    contactAddressText: "القرية الذكية، مبنى B145، طريق القاهرة - الإسكندرية الصحراوي، الجيزة، مصر",
    contactEmailTitle: "المراسلات الرسمية",
    contactLegalTitle: "الوضع القانوني والمؤسسي",
    contactLegalText: "شركة مساهمة مصرية أُنشئت بقرار رئيس مجلس الوزراء رقم 132 لسنة 2020 تحت مظلة وزارة الاتصالات وهيئة إيتيدا.",
    formTitle: "نموذج الاستفسار المؤسسي",
    formSub: "وجّه استفسارك مباشرة إلى فريق الاستشارات المؤسسية لدينا.",
    formNameLabel: "الاسم بالكامل",
    formNamePh: "مثال: د. أحمد حسن",
    formEntityLabel: "الجهة الحكومية / المؤسسة",
    formEntityPh: "مثال: وزارة / هيئة عامة",
    formEmailLabel: "البريد الإلكتروني الرسمي",
    formEmailPh: "name@entity.gov.eg",
    formTopicLabel: "مجال الاستفسار",
    opt1: "الهندسة المؤسسية ونماذج الأعمال",
    opt2: "هندسة الحلول والمنصات التقنية",
    opt3: "إدارة العمليات واستمرارية الأنظمة",
    opt4: "تجربة المواطن وإمكانية الوصول",
    opt5: "حوكمة وإدارة المشاريع الحكومية",
    opt6: "الوظائف واستقطاب الكفاءات",
    opt7: "استفسار مؤسسي عام",
    formMessageLabel: "نص الاستفسار / نطاق المشروع",
    formMessagePh: "يرجى توضيح متطلبات الجهة أو ملخص الاستفسار المطلوب...",
    formSubmit: "إرسال الاستفسار",
    formSuccessMsg: "تم تسجيل استفساركم بنجاح. سيتواصل فريق الاستشارات المؤسسية معكم عبر بريدكم الرسمي.",
    formErrorMsg: "يرجى استيفاء جميع الحقول المطلوبة بشكل صحيح.",

    // Footer
    footerMission: "شركة مصر الرقمية للاستثمار (DEFI) — تقديم حلول الهندسة المؤسسية، والتحول الرقمي، وتشغيل المنصات الحكومية الحيوية بموجب قرار رئيس مجلس الوزراء رقم 132 لسنة 2020.",
    footerNavTitle: "روابط الموقع",
    footerCapTitle: "القدرات المؤسسية",
    footerGovTitle: "الإطار المؤسسي",
    footerDecreeText: "أُنشئت بموجب قرار رئيس مجلس الوزراء رقم 132 لسنة 2020 وتعمل تحت مظلة وزارة الاتصالات وهيئة إيتيدا.",
    footerCopyright: "© 2026 شركة مصر الرقمية للاستثمار (DEFI). أُنشئت بقرار رئيس مجلس الوزراء رقم 132 لسنة 2020. جميع الحقوق محفوظة.",
    backToTop: "العودة إلى الأعلى"
  }
};

// ---------------------------------------------------------------------------
// 2. Language Management & State
// ---------------------------------------------------------------------------
let currentLang = localStorage.getItem("defi_lang") || "en";
let currentJourneyStep = 1;
let currentSelectedRegion = "cairo";
let currentPayloadStage = 1;
let showPayloadFn = null;
let selectRegionFn = null;

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  
  // Set html attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");

  // Update text content for elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      // If it contains html tags, use innerHTML; otherwise textContent
      if (dict[key].includes("<")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update placeholders for elements with data-i18n-ph
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Update toggles labels
  const langLabel = document.getElementById("lang-label");
  if (langLabel) langLabel.textContent = dict.langLabel;

  const drawerLangLabel = document.getElementById("drawer-lang-label");
  if (drawerLangLabel) drawerLangLabel.textContent = dict.drawerLangLabel;

  // Update Active Capability Panel texts if present
  if (typeof updateCapabilityPanel === "function") {
    updateCapabilityPanel(activeCapIndex);
  }

  // Update Active Journey Blueprint if present
  if (typeof renderBlueprintStage === "function") {
    renderBlueprintStage(currentJourneyStep);
  }

  // Update National Grid if present
  if (typeof selectRegionFn === "function") {
    selectRegionFn(currentSelectedRegion);
  }

  // Update Payload Inspector if present
  if (typeof showPayloadFn === "function") {
    showPayloadFn(currentPayloadStage);
  }
}

function toggleLanguage() {
  currentLang = (currentLang === "en" ? "ar" : "en");
  localStorage.setItem("defi_lang", currentLang);
  applyTranslations(currentLang);
}

// ---------------------------------------------------------------------------
// 3. Diagram A: Connected Ecosystem Interactivity & Autonomous Live Telemetry
// ---------------------------------------------------------------------------
function initDiagramA() {
  const nodes = document.querySelectorAll(".node-interactive, .diagram-core-node");
  const infoText = document.getElementById("diagram-a-info-text");
  const throughputEl = document.querySelector(".tele-pill.live [data-i18n='telemetryThroughput']");
  const latencyEl = document.querySelector(".tele-pill[data-i18n='telemetryLatency']");
  const svg = document.getElementById("ecosystem-svg");

  const nodeTypes = ["citizens", "ministries", "defi-core", "registries", "infra"];
  let currentIndex = 0;
  let isUserInteracting = false;
  let pauseTimeout = null;

  const selectNode = (nodeType, manual = false) => {
    const dict = translations[currentLang] || translations.en;
    nodes.forEach(n => {
      const match = n.getAttribute("data-node") === nodeType;
      n.classList.toggle("active", match);
    });

    if (infoText) {
      infoText.style.opacity = "0.35";
      infoText.style.filter = "blur(1px)";
      setTimeout(() => {
        if (nodeType === "citizens") infoText.textContent = dict.nodeInfoCitizens;
        else if (nodeType === "ministries") infoText.textContent = dict.nodeInfoMinistries;
        else if (nodeType === "defi-core") infoText.textContent = dict.nodeInfoDefiCore;
        else if (nodeType === "registries") infoText.textContent = dict.nodeInfoRegistries;
        else if (nodeType === "infra") infoText.textContent = dict.nodeInfoInfra;
        infoText.style.opacity = "1";
        infoText.style.filter = "none";
      }, 120);
    }

    if (manual) {
      isUserInteracting = true;
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        isUserInteracting = false;
      }, 12000);
    }
  };

  nodes.forEach(node => {
    const nodeType = node.getAttribute("data-node");
    node.addEventListener("mouseenter", () => selectNode(nodeType, true));
    node.addEventListener("click", () => selectNode(nodeType, true));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectNode(nodeType, true);
      }
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    // Autonomous layer cycling every 4.2 seconds
    setInterval(() => {
      if (!isUserInteracting) {
        currentIndex = (currentIndex + 1) % nodeTypes.length;
        selectNode(nodeTypes[currentIndex], false);
      }
    }, 4200);

    // Continuous live telemetry fluctuation
    setInterval(() => {
      if (throughputEl) {
        const jitter = Math.floor(Math.random() * 90) - 45;
        const base = 18450 + jitter;
        throughputEl.textContent = `${base.toLocaleString()} req/s`;
      }
      if (latencyEl) {
        const latencyJitter = (3.8 + Math.random() * 0.4).toFixed(1);
        latencyEl.textContent = `< ${latencyJitter}ms`;
      }
    }, 2400);

    // Periodic ambient traffic pulse across ecosystem
    setInterval(() => {
      if (!isUserInteracting && svg) {
        svg.classList.add("traffic-burst");
        setTimeout(() => svg.classList.remove("traffic-burst"), 2200);
      }
    }, 11000);
  }
}

// ---------------------------------------------------------------------------
// 4. Diagram C: Capability Matrix Interactivity
// ---------------------------------------------------------------------------
let activeCapIndex = 1;

function renderCapabilityVisual(index) {
  const container = document.getElementById("cap-detail-visual");
  const titleEl = document.getElementById("cap-visual-title");
  if (!container) return;

  const isAr = (currentLang === "ar");

  if (index === 1) {
    if (titleEl) titleEl.textContent = isAr ? "المخطط الهيكلي · مواءمة استراتيجية TOGAF ونماذج التشغيل" : "Architecture Schematic · TOGAF Strategy & Operating Alignment";
    container.innerHTML = `
      <svg class="cap-schematic-svg" viewBox="0 0 460 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="120" height="45" rx="8" fill="#132A47" stroke="#38BDF8" stroke-width="1.5" />
        <text x="80" y="48" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">${isAr ? "الرؤية والسياسة الوطنية" : "National Strategy"}</text>
        
        <path d="M 140 42 L 175 42" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3 3"/>
        
        <rect x="175" y="15" width="125" height="55" rx="8" fill="#0B192C" stroke="#00F0FF" stroke-width="2" />
        <text x="237" y="42" fill="#00F0FF" font-size="11" font-weight="800" text-anchor="middle">DEFI TOGAF / NAF</text>
        <text x="237" y="58" fill="#94A3B8" font-size="8.5" text-anchor="middle">${isAr ? "إطار الهندسة المؤسسية" : "Enterprise Framework"}</text>

        <path d="M 300 42 L 335 42" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3 3"/>

        <rect x="335" y="20" width="110" height="45" rx="8" fill="#132A47" stroke="#38BDF8" stroke-width="1.5" />
        <text x="390" y="48" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">${isAr ? "الوزارات المستفيدة" : "Target Ministries"}</text>

        <path d="M 237 70 L 237 110" stroke="#00F0FF" stroke-width="2"/>
        
        <rect x="40" y="110" width="380" height="40" rx="8" fill="rgba(30, 95, 216, 0.2)" stroke="#1E5FD8" stroke-width="1.5"/>
        <text x="230" y="135" fill="#38BDF8" font-size="11" font-weight="700" text-anchor="middle">${isAr ? "ناقل الإجراءات البينية المشتركة · Service SLA Registry" : "Inter-Agency Service SLA & Business Process Bus"}</text>

        <circle cx="100" cy="180" r="14" fill="#0B192C" stroke="#2DD4BF" stroke-width="1.5"/>
        <text x="100" y="184" fill="#2DD4BF" font-size="9" font-weight="700" text-anchor="middle">SLA</text>
        <text x="135" y="184" fill="#E2E8F0" font-size="10">${isAr ? "إلغاء الجزر المنعزلة" : "Zero Silos"}</text>

        <circle cx="270" cy="180" r="14" fill="#0B192C" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="270" y="184" fill="#F59E0B" font-size="9" font-weight="700" text-anchor="middle">KPI</text>
        <text x="305" y="184" fill="#E2E8F0" font-size="10">${isAr ? "مؤشرات قياس معتمدة" : "Standardized KPIs"}</text>
      </svg>
    `;
  } else if (index === 2) {
    if (titleEl) titleEl.textContent = isAr ? "المخطط الهيكلي · بنية المنصات الميكروية وناقل الأحداث" : "Architecture Schematic · Event-Driven Microservices & API Gateway";
    container.innerHTML = `
      <svg class="cap-schematic-svg" viewBox="0 0 460 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="30" width="110" height="60" rx="8" fill="#132A47" stroke="#60A5FA" stroke-width="1.5"/>
        <text x="80" y="58" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">API Gateway</text>
        <text x="80" y="74" fill="#94A3B8" font-size="8.5" text-anchor="middle">mTLS · Rate Limit</text>

        <path d="M 135 60 L 175 60" stroke="#38BDF8" stroke-width="2"/>
        
        <rect x="175" y="25" width="120" height="70" rx="10" fill="#0B192C" stroke="#00F0FF" stroke-width="2"/>
        <text x="235" y="55" fill="#00F0FF" font-size="11" font-weight="800" text-anchor="middle">Kafka Event Spine</text>
        <text x="235" y="72" fill="#2DD4BF" font-size="8.5" text-anchor="middle">50,000+ msg/sec</text>

        <path d="M 295 60 L 335 60" stroke="#38BDF8" stroke-width="2"/>

        <rect x="335" y="30" width="110" height="60" rx="8" fill="#132A47" stroke="#A78BFA" stroke-width="1.5"/>
        <text x="390" y="58" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Gov Microservices</text>
        <text x="390" y="74" fill="#94A3B8" font-size="8.5" text-anchor="middle">K8s Sovereign Pods</text>

        <path d="M 235 95 L 235 135" stroke="#00F0FF" stroke-width="2"/>
        <rect x="40" y="135" width="380" height="48" rx="8" fill="rgba(8, 126, 139, 0.2)" stroke="#2DD4BF" stroke-width="1.5"/>
        <text x="230" y="160" fill="#2DD4BF" font-size="11" font-weight="700" text-anchor="middle">${isAr ? "قواعد البيانات الوطنية الموزعة (Active-Active Sync)" : "Distributed National Base Registers (Active-Active Sync)"}</text>
        <text x="230" y="174" fill="#94A3B8" font-size="8.5" text-anchor="middle">PostgreSQL / Sharded Gov Vaults · Sub-millisecond Replication</text>
      </svg>
    `;
  } else if (index === 3) {
    if (titleEl) titleEl.textContent = isAr ? "المخطط الهيكلي · مركز الرصد التشغيلي 24/7 والجاهزية القصوى" : "Architecture Schematic · 24/7 Sovereign NOC/SOC & High Availability";
    container.innerHTML = `
      <svg class="cap-schematic-svg" viewBox="0 0 460 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="130" cy="105" r="65" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1.5"/>
        <circle cx="130" cy="105" r="42" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.5"/>
        <circle cx="130" cy="105" r="18" stroke="rgba(0, 240, 255, 0.6)" stroke-width="2"/>
        <circle cx="130" cy="105" r="4" fill="#00F0FF"/>
        <line x1="65" y1="105" x2="195" y2="105" stroke="rgba(56, 189, 248, 0.25)"/>
        <line x1="130" y1="40" x2="130" y2="170" stroke="rgba(56, 189, 248, 0.25)"/>
        <line x1="130" y1="105" x2="175" y2="60" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>

        <rect x="230" y="25" width="205" height="45" rx="8" fill="#0B192C" stroke="#2DD4BF" stroke-width="1.5"/>
        <text x="245" y="47" fill="#2DD4BF" font-size="10.5" font-weight="700">99.999% SLA</text>
        <text x="245" y="61" fill="#94A3B8" font-size="8.5">${isAr ? "جاهزية تشغيلية مستمرة" : "Zero Unplanned Downtime"}</text>

        <rect x="230" y="80" width="205" height="45" rx="8" fill="#0B192C" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="245" y="102" fill="#38BDF8" font-size="10.5" font-weight="700">&lt; 15 min RTO</text>
        <text x="245" y="116" fill="#94A3B8" font-size="8.5">${isAr ? "التعافي السريع من الكوارث" : "Rapid Disaster Recovery"}</text>

        <rect x="230" y="135" width="205" height="45" rx="8" fill="#0B192C" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="245" y="157" fill="#F59E0B" font-size="10.5" font-weight="700">24/7/365 NOC/SOC</text>
        <text x="245" y="171" fill="#94A3B8" font-size="8.5">${isAr ? "رصد أمني وفني مستمر" : "Active Threat Intelligence"}</text>
      </svg>
    `;
  } else if (index === 4) {
    if (titleEl) titleEl.textContent = isAr ? "المخطط الهيكلي · رحلة المواطن عبر القنوات الرقمية الموحدة" : "Architecture Schematic · Omnichannel Citizen Experience Flow";
    container.innerHTML = `
      <svg class="cap-schematic-svg" viewBox="0 0 460 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="25" width="115" height="42" rx="8" fill="#132A47" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="77" y="50" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">📱 Mobile App</text>

        <rect x="20" y="80" width="115" height="42" rx="8" fill="#132A47" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="77" y="105" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">💻 Web Portal</text>

        <rect x="20" y="135" width="115" height="42" rx="8" fill="#132A47" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="77" y="160" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">🏛️ Service Center</text>

        <path d="M 135 46 L 180 101 M 135 101 L 180 101 M 135 156 L 180 101" stroke="#38BDF8" stroke-width="2"/>

        <rect x="180" y="70" width="125" height="62" rx="10" fill="#0B192C" stroke="#00F0FF" stroke-width="2"/>
        <text x="242" y="98" fill="#00F0FF" font-size="11" font-weight="800" text-anchor="middle">Unified CX Engine</text>
        <text x="242" y="117" fill="#2DD4BF" font-size="9" text-anchor="middle">${isAr ? "تحقق وهوية موحدة" : "Single Sign-On IAM"}</text>

        <path d="M 305 101 L 340 101" stroke="#2DD4BF" stroke-width="2"/>

        <rect x="340" y="60" width="105" height="82" rx="10" fill="#132A47" stroke="#2DD4BF" stroke-width="1.5"/>
        <circle cx="392" cy="90" r="14" fill="#2DD4BF" fill-opacity="0.2"/>
        <text x="392" y="95" fill="#2DD4BF" font-size="14" font-weight="800" text-anchor="middle">✓</text>
        <text x="392" y="120" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">${isAr ? "خدمة فورية" : "Instant Delivery"}</text>
        <text x="392" y="133" fill="#94A3B8" font-size="8" text-anchor="middle">&lt; 30 seconds</text>
      </svg>
    `;
  } else if (index === 5) {
    if (titleEl) titleEl.textContent = isAr ? "المخطط الهيكلي · حوكمة المراحل والمخرجات القومية (Stage-Gate)" : "Architecture Schematic · Public-Sector Stage-Gate Governance";
    container.innerHTML = `
      <svg class="cap-schematic-svg" viewBox="0 0 460 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 40)">
          <rect x="0" y="0" width="95" height="70" rx="8" fill="#132A47" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="47" y="24" fill="#38BDF8" font-size="9" font-weight="800" text-anchor="middle">GATE 01</text>
          <text x="47" y="44" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">${isAr ? "التفويض والمواءمة" : "Mandate Review"}</text>
          <text x="47" y="58" fill="#2DD4BF" font-size="8" text-anchor="middle">Approved ✓</text>

          <path d="M 95 35 L 115 35" stroke="#38BDF8" stroke-width="2"/>

          <rect x="115" y="0" width="95" height="70" rx="8" fill="#132A47" stroke="#00F0FF" stroke-width="1.5"/>
          <text x="162" y="24" fill="#00F0FF" font-size="9" font-weight="800" text-anchor="middle">GATE 02</text>
          <text x="162" y="44" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">${isAr ? "اعتماد المعمارية" : "Arch Signoff"}</text>
          <text x="162" y="58" fill="#2DD4BF" font-size="8" text-anchor="middle">Validated ✓</text>

          <path d="M 210 35 L 230 35" stroke="#38BDF8" stroke-width="2"/>

          <rect x="230" y="0" width="95" height="70" rx="8" fill="#132A47" stroke="#C084FC" stroke-width="1.5"/>
          <text x="277" y="24" fill="#C084FC" font-size="9" font-weight="800" text-anchor="middle">GATE 03</text>
          <text x="277" y="44" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">${isAr ? "التشغيل التجريبي" : "Pilot Sprint"}</text>
          <text x="277" y="58" fill="#2DD4BF" font-size="8" text-anchor="middle">Tested ✓</text>

          <path d="M 325 35 L 345 35" stroke="#38BDF8" stroke-width="2"/>

          <rect x="345" y="0" width="95" height="70" rx="8" fill="#0B192C" stroke="#2DD4BF" stroke-width="2"/>
          <text x="392" y="24" fill="#2DD4BF" font-size="9" font-weight="800" text-anchor="middle">GATE 04</text>
          <text x="392" y="44" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">${isAr ? "الإطلاق القومي" : "National Live"}</text>
          <text x="392" y="58" fill="#2DD4BF" font-size="8" text-anchor="middle">Live 24/7 ✓</text>
        </g>
        
        <rect x="25" y="135" width="410" height="38" rx="6" fill="rgba(30, 95, 216, 0.15)" stroke="#1E5FD8" stroke-width="1"/>
        <text x="230" y="158" fill="#38BDF8" font-size="10" font-weight="700" text-anchor="middle">${isAr ? "حوكمة مكتب إدارة المشاريع القومية (PMO) · الشفافية والمساءلة المالية" : "National PMO Oversight · Budget Accountability & Transparency"}</text>
      </svg>
    `;
  } else if (index === 6) {
    if (titleEl) titleEl.textContent = isAr ? "المخطط الهيكلي · مصفوفة الأمان السيبراني والامتثال السيادي" : "Architecture Schematic · Sovereign Cybersecurity & Compliance Matrix";
    container.innerHTML = `
      <svg class="cap-schematic-svg" viewBox="0 0 460 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="195" height="68" rx="8" fill="#0B192C" stroke="#2DD4BF" stroke-width="1.5"/>
          <circle cx="28" cy="34" r="14" fill="#2DD4BF" fill-opacity="0.2"/>
          <text x="28" y="39" fill="#2DD4BF" font-size="13" font-weight="800" text-anchor="middle">🛡️</text>
          <text x="52" y="30" fill="#FFFFFF" font-size="10.5" font-weight="700">${isAr ? "فحص الأمان السيبراني" : "Zero-Trust & Pentest"}</text>
          <text x="52" y="48" fill="#2DD4BF" font-size="9">100% Passed · Cleared</text>

          <rect x="215" y="0" width="195" height="68" rx="8" fill="#0B192C" stroke="#38BDF8" stroke-width="1.5"/>
          <circle cx="243" cy="34" r="14" fill="#38BDF8" fill-opacity="0.2"/>
          <text x="243" y="39" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">⚖️</text>
          <text x="267" y="30" fill="#FFFFFF" font-size="10.5" font-weight="700">${isAr ? "سيادة البيانات واللوائح" : "State Data Sovereignty"}</text>
          <text x="267" y="48" fill="#38BDF8" font-size="9">Decree 132/2020 Compliant</text>

          <rect x="0" y="85" width="195" height="68" rx="8" fill="#0B192C" stroke="#F59E0B" stroke-width="1.5"/>
          <circle cx="28" cy="119" r="14" fill="#F59E0B" fill-opacity="0.2"/>
          <text x="28" y="124" fill="#F59E0B" font-size="13" font-weight="800" text-anchor="middle">⚡</text>
          <text x="52" y="115" fill="#FFFFFF" font-size="10.5" font-weight="700">${isAr ? "اختبارات الأحمال القصوى" : "Stress & Concurrency"}</text>
          <text x="52" y="133" fill="#F59E0B" font-size="9">2M+ Concurrent Users</text>

          <rect x="215" y="85" width="195" height="68" rx="8" fill="#0B192C" stroke="#C084FC" stroke-width="1.5"/>
          <circle cx="243" cy="119" r="14" fill="#C084FC" fill-opacity="0.2"/>
          <text x="243" y="124" fill="#C084FC" font-size="13" font-weight="800" text-anchor="middle">📜</text>
          <text x="267" y="115" fill="#FFFFFF" font-size="10.5" font-weight="700">${isAr ? "معايير ISO والجودة" : "ISO 27001 Certified"}</text>
          <text x="267" y="133" fill="#C084FC" font-size="9">Global Gov Benchmark</text>
        </g>
      </svg>
    `;
  }
}

function updateCapabilityPanel(index) {
  activeCapIndex = index;
  const dict = translations[currentLang] || translations.en;

  const badge = document.getElementById("cap-detail-index");
  const heading = document.getElementById("cap-detail-heading");
  const desc = document.getElementById("cap-detail-desc");
  const impact = document.getElementById("cap-detail-impact");
  const deliv = document.getElementById("cap-detail-deliv");

  if (badge) badge.textContent = (currentLang === "ar" ? `الركيزة 0${index}` : `PILLAR 0${index}`);
  if (heading) heading.textContent = dict[`cap${index}Heading`];
  if (desc) desc.textContent = dict[`cap${index}Desc`];
  if (impact) impact.textContent = dict[`cap${index}Impact`];
  if (deliv) deliv.textContent = dict[`cap${index}Deliv`];

  // Render high-impact dynamic SVG schematic
  renderCapabilityVisual(index);

  // Update tabs active state
  document.querySelectorAll(".cap-card").forEach(card => {
    const cardIndex = parseInt(card.getAttribute("data-cap"), 10);
    const isActive = (cardIndex === index);
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function initDiagramC() {
  const capCards = document.querySelectorAll(".cap-card");
  let isUserInteracting = false;
  let pauseTimeout = null;

  capCards.forEach(card => {
    const index = parseInt(card.getAttribute("data-cap"), 10);
    const handleSelect = () => {
      isUserInteracting = true;
      clearTimeout(pauseTimeout);
      updateCapabilityPanel(index);
      pauseTimeout = setTimeout(() => {
        isUserInteracting = false;
      }, 15000);
    };

    card.addEventListener("click", handleSelect);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect();
      }
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    setInterval(() => {
      if (!isUserInteracting) {
        let nextIndex = (activeCapIndex % 6) + 1;
        updateCapabilityPanel(nextIndex);
      }
    }, 5500);
  }
}

// ---------------------------------------------------------------------------
// 5. Diagram B: Transformation Journey Stepper Interactivity
// ---------------------------------------------------------------------------
function renderBlueprintStage(stepNum) {
  currentJourneyStep = stepNum;
  const container = document.getElementById("blueprint-svg-container");
  const phaseNum = document.getElementById("blueprint-phase-num");
  const titleEl = document.getElementById("blueprint-phase-title");
  const statusEl = document.getElementById("blueprint-status-text");
  const stakeholdersEl = document.getElementById("blueprint-stakeholders");
  const standardEl = document.getElementById("blueprint-standard");
  const deliverableEl = document.getElementById("blueprint-deliverable");

  if (!container) return;
  const isAr = (currentLang === "ar");

  const blueprintData = {
    1: {
      phase: isAr ? "المرحلة 01 الهندسية" : "PHASE 01 BLUEPRINT",
      title: isAr ? "التقييم المؤسسي والمواءمة الاستراتيجية" : "Institutional Assessment & Strategic Alignment",
      status: isAr ? "بوابة الجودة: تم التحقق والاعتماد" : "Quality Gate: Validated & Approved",
      stakeholders: isAr ? "رئاسة مجلس الوزراء · قيادات الوزارات · هيئة إيتيدا" : "Executive Cabinet · Ministerial Leadership · ITIDA",
      standard: isAr ? "معايير حوكمة القرار 132/2020 (Gate A)" : "Decree 132/2020 Compliance Gate A",
      deliverable: isAr ? "مخطط التحول الرقمي ومصفوفة القدرات" : "National Digital Transformation Roadmap"
    },
    2: {
      phase: isAr ? "المرحلة 02 الهندسية" : "PHASE 02 BLUEPRINT",
      title: isAr ? "التصميم وهندسة الحلول السيادية المتكاملة" : "Sovereign Solution Architecture & Blueprinting",
      status: isAr ? "بوابة الجودة: اعتماد التصميم المعماري" : "Quality Gate: Architecture Approved",
      stakeholders: isAr ? "مهندسو البرمجيات · خبراء الأمن السيبراني · قطاع البنية التحتية" : "Enterprise Architects · Cybersecurity Leads · Infrastructure Teams",
      standard: isAr ? "معايير الربط البيني والبيانات المفتوحة" : "National Interoperability & Data Sovereignty Specs",
      deliverable: isAr ? "المواصفات التقنية وواجهات برمجة التطبيقات APIs" : "Multi-Tier System Blueprint & API Specifications"
    },
    3: {
      phase: isAr ? "المرحلة 03 الهندسية" : "PHASE 03 BLUEPRINT",
      title: isAr ? "التكامل والتطبيق وربط السجلات الوطنية" : "Enterprise Integration & National Registry Sync",
      status: isAr ? "بوابة الجودة: اجتياز اختبارات التكامل" : "Quality Gate: Integration Cleared",
      stakeholders: isAr ? "فرق التطوير · إدارات تكنولوجيا المعلومات بالوزارات" : "Engineering Squads · Ministerial IT Departments",
      standard: isAr ? "بروتوكول التشفير المتبادل mTLS 1.3" : "Zero-Trust mTLS 1.3 & API Gateway Guardrails",
      deliverable: isAr ? "منصة الخدمات المفعلة وربط السجل المدني" : "Live Integrated Services & Active Registry Connectors"
    },
    4: {
      phase: isAr ? "المرحلة 04 الهندسية" : "PHASE 04 BLUEPRINT",
      title: isAr ? "التشغيل وحماية الأنظمة واستمرارية الخدمة" : "Mission-Critical 24/7 Operations & Security",
      status: isAr ? "بوابة الجودة: الجاهزية التشغيلية القصوى" : "Quality Gate: Active 24/7 SRE Uptime",
      stakeholders: isAr ? "مركز إدارة العمليات (NOC) · مركز الدفاع السيبراني (SOC)" : "Network Operations Center · Security Operations Center",
      standard: isAr ? "معيار الجاهزية 99.999% ومراكز البيانات Tier IV" : "Tier-IV High Availability & Disaster Recovery Protocol",
      deliverable: isAr ? "رصد مستمر وتقارير الأداء اللحظية" : "24/7 Monitoring Dashboard & Rapid Incident Runbooks"
    },
    5: {
      phase: isAr ? "المرحلة 05 الهندسية" : "PHASE 05 BLUEPRINT",
      title: isAr ? "الارتقاء بتجربة المواطن والتطوير المستمر" : "Citizen Experience Optimization & Continuous Evolution",
      status: isAr ? "بوابة الجودة: تحقيق مؤشرات الرضا القومي" : "Quality Gate: Citizen Satisfaction Verified",
      stakeholders: isAr ? "المواطنون والمستفيدون · مسؤولو تجربة المستخدم · لجان التطوير" : "Egyptian Citizens · CX Researchers · Government Service Committees",
      standard: isAr ? "مؤشر الرضا الحكومي والشمول الرقمي" : "National Digital Inclusion & Citizen Experience Index",
      deliverable: isAr ? "تحديثات الخدمات الدورية وتوسيع المنظومة" : "Iterative Service Enhancements & Nationwide Scale"
    }
  };

  const currentData = blueprintData[stepNum] || blueprintData[1];
  if (phaseNum) phaseNum.textContent = currentData.phase;
  if (titleEl) titleEl.textContent = currentData.title;
  if (statusEl) statusEl.textContent = currentData.status;
  if (stakeholdersEl) stakeholdersEl.textContent = currentData.stakeholders;
  if (standardEl) standardEl.textContent = currentData.standard;
  if (deliverableEl) deliverableEl.textContent = currentData.deliverable;

  // Render SVG Blueprint visual
  container.innerHTML = `
    <svg class="blueprint-svg" viewBox="0 0 620 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="600" height="140" rx="10" fill="#07101E" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5" stroke-dasharray="6 6"/>
      
      <g transform="translate(30, 40)">
        ${[1, 2, 3, 4, 5].map((s, idx) => {
          const isCurrent = s === stepNum;
          const isPassed = s < stepNum;
          const color = isCurrent ? '#00F0FF' : (isPassed ? '#2DD4BF' : '#475569');
          const strokeW = isCurrent ? '3' : '1.5';
          const cx = idx * 115 + 20;
          return `
            <g class="bp-step-node" opacity="${isCurrent ? '1' : (isPassed ? '0.85' : '0.45')}">
              ${idx < 4 ? `<line x1="${cx + 20}" y1="30" x2="${cx + 95}" y2="30" stroke="${isPassed ? '#2DD4BF' : 'rgba(255,255,255,0.1)'}" stroke-width="2.5" ${isPassed ? '' : 'stroke-dasharray="4 4"'}/>` : ''}
              <circle cx="${cx}" cy="30" r="20" fill="#0B192C" stroke="${color}" stroke-width="${strokeW}" ${isCurrent ? 'filter="drop-shadow(0 0 8px #00F0FF)"' : ''}/>
              <text x="${cx}" y="35" fill="${isCurrent ? '#00F0FF' : '#FFFFFF'}" font-size="11" font-weight="800" text-anchor="middle">0${s}</text>
              <text x="${cx}" y="68" fill="${isCurrent ? '#38BDF8' : '#94A3B8'}" font-size="9.5" font-weight="${isCurrent ? '700' : '500'}" text-anchor="middle">Phase 0${s}</text>
            </g>
          `;
        }).join('')}
      </g>
    </svg>
  `;
}

function initDiagramB() {
  const stepItems = document.querySelectorAll(".journey-step-item");
  const progressBar = document.getElementById("journey-progress-fill");
  let isUserInteracting = false;
  let pauseTimeout = null;
  let currentStep = 1;
  
  // Render initial phase 1 blueprint
  renderBlueprintStage(1);
  if (progressBar) progressBar.style.width = "20%";

  const setStep = (step, manual = false) => {
    currentStep = step;
    stepItems.forEach(s => {
      const sNum = parseInt(s.getAttribute("data-step"), 10) || 1;
      s.classList.toggle("active", sNum === step);
      if (sNum === step && manual) {
        s.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });

    if (progressBar) {
      progressBar.style.width = `${step * 20}%`;
    }

    renderBlueprintStage(step);

    if (manual) {
      isUserInteracting = true;
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        isUserInteracting = false;
      }, 15000);
    }
  };

  stepItems.forEach(item => {
    const step = parseInt(item.getAttribute("data-step"), 10) || 1;
    item.addEventListener("click", () => setStep(step, true));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setStep(step, true);
      }
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    setInterval(() => {
      if (!isUserInteracting) {
        currentStep = (currentStep % 5) + 1;
        setStep(currentStep, false);
      }
    }, 4200);
  }
}

// ---------------------------------------------------------------------------
// 6. Navigation, Sticky Header & Mobile Drawer
// ---------------------------------------------------------------------------
function initNavigation() {
  const header = document.getElementById("site-header");
  const mobileTrigger = document.getElementById("mobile-menu-trigger");
  const mobileClose = document.getElementById("mobile-close-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-item");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  const openDrawer = () => {
    mobileDrawer?.classList.add("open");
    mobileOverlay?.classList.add("open");
    mobileTrigger?.setAttribute("aria-expanded", "true");
    mobileDrawer?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileDrawer?.classList.remove("open");
    mobileOverlay?.classList.remove("open");
    mobileTrigger?.setAttribute("aria-expanded", "false");
    mobileDrawer?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  mobileTrigger?.addEventListener("click", openDrawer);
  mobileClose?.addEventListener("click", closeDrawer);
  mobileOverlay?.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer?.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Language switch triggers
  document.getElementById("lang-toggle-btn")?.addEventListener("click", toggleLanguage);
  document.getElementById("drawer-lang-toggle")?.addEventListener("click", () => {
    toggleLanguage();
    closeDrawer();
  });
}

// ---------------------------------------------------------------------------
// 7. Institutional Inquiry Form Handling (Front-end validation)
// ---------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("institutional-inquiry-form");
  const feedback = document.getElementById("form-status");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = translations[currentLang] || translations.en;

    const name = form.querySelector("#form-name")?.value.trim();
    const entity = form.querySelector("#form-entity")?.value.trim();
    const email = form.querySelector("#form-email")?.value.trim();
    const message = form.querySelector("#form-message")?.value.trim();

    if (!name || !entity || !email || !message) {
      if (feedback) {
        feedback.className = "form-feedback error";
        feedback.textContent = dict.formErrorMsg;
      }
      return;
    }

    // Success response simulation
    if (feedback) {
      feedback.className = "form-feedback success";
      feedback.textContent = dict.formSuccessMsg;
    }
    form.reset();

    setTimeout(() => {
      if (feedback) feedback.style.display = "none";
    }, 7000);
  });
}

// ---------------------------------------------------------------------------
// 8. Interactive Hero Particle Constellation System
// ---------------------------------------------------------------------------
function initHeroParticles() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  const particles = [];
  const particleCount = Math.min(width < 768 ? 24 : 45, 60);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const heroSec = document.getElementById("hero");
  heroSec?.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  heroSec?.addEventListener("mouseleave", () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  let animId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse gentle interaction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 0.8;
        p.y -= (dy / dist) * 0.8;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(30, 95, 216, ${0.25 * (1 - d / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(animate);
  }

  // IntersectionObserver to pause when off-screen
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!animId) animate();
    } else {
      cancelAnimationFrame(animId);
      animId = null;
    }
  });
  observer.observe(canvas);
}

// ---------------------------------------------------------------------------
// 9. Diagram A: Live Traffic Simulation
// ---------------------------------------------------------------------------
function initDiagramATraffic() {
  const btn = document.getElementById("btn-simulate-traffic");
  const infoText = document.getElementById("diagram-a-info-text");
  if (!btn) return;

  btn.addEventListener("click", () => {
    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="pulse-indicator"></span> <span>${currentLang === "ar" ? "جاري تدفق البيانات..." : "Traffic Pulsing..."}</span>`;

    const svg = document.getElementById("ecosystem-svg");
    svg?.classList.add("traffic-burst");

    if (infoText) {
      infoText.innerHTML = currentLang === "ar"
        ? "<strong>محاكاة نشطة:</strong> تم بث حزمة بيانات سيادية متزامنة بين قنوات المواطن ووزارة التربية والتعليم عبر ناقل DEFI وسحابة Tier-IV بنجاح (زمن استجابة: 3.8 مللي ثانية)."
        : "<strong>Active Traffic Simulation:</strong> High-priority inter-agency sovereign transaction orchestrated across DEFI Backbone between Citizens and Ministry of Education in 3.8ms.";
    }

    setTimeout(() => {
      svg?.classList.remove("traffic-burst");
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 2800);
  });
}

// ---------------------------------------------------------------------------
// 10. Diagram B: Transformation Lifecycle Player
// ---------------------------------------------------------------------------
function initJourneySimulator() {
  const btn = document.getElementById("btn-simulate-journey");
  const steps = document.querySelectorAll(".journey-step-item");
  if (!btn || !steps.length) return;

  btn.addEventListener("click", () => {
    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="pulse-indicator"></span> <span>${currentLang === "ar" ? "مسار التحول قيد التقدم..." : "Progression Active..."}</span>`;

    let stepIndex = 0;
    const interval = setInterval(() => {
      steps.forEach((s, idx) => {
        if (idx === stepIndex) {
          s.classList.add("active");
          s.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        } else {
          s.classList.remove("active");
        }
      });

      renderBlueprintStage(stepIndex + 1);

      stepIndex++;
      if (stepIndex >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 1200);
      }
    }, 700);
  });
}

// ---------------------------------------------------------------------------
// 11. Diagram D: Sovereign Interoperability Simulator & Payload Inspector
// ---------------------------------------------------------------------------
function initInteropSimulator() {
  const btn = document.getElementById("btn-trigger-interop-sim");
  const logContainer = document.getElementById("interop-console-log");
  const nodes = [
    document.getElementById("sim-node-1"),
    document.getElementById("sim-node-2"),
    document.getElementById("sim-node-3"),
    document.getElementById("sim-node-4"),
    document.getElementById("sim-node-5")
  ];
  const badges = [
    document.getElementById("badge-stage-1"),
    document.getElementById("badge-stage-2"),
    document.getElementById("badge-stage-3"),
    document.getElementById("badge-stage-4"),
    document.getElementById("badge-stage-5")
  ];

  const payloadPill = document.getElementById("payload-stage-pill");
  const payloadHeading = document.getElementById("payload-title");
  const payloadSec = document.getElementById("payload-sec-badge");
  const payloadCode = document.getElementById("payload-json-display");
  const payloadLatency = document.getElementById("payload-latency-text");

  const payloads = {
    1: {
      pill: "STAGE 01 PAYLOAD",
      titleEn: "Citizen Inbound Request",
      titleAr: "طلب المواطن الوارد عبر البوابة",
      sec: "🔒 mTLS 1.3 · Zero-Trust",
      latency: "0.85 ms",
      json: `{\n  "protocol": "HTTPS/3 (QUIC) · mTLS 1.3",\n  "source_entity": "Digital Egypt Portal / App",\n  "national_id_hash": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4...",\n  "service_requested": "Unified_Health_Insurance_Enrollment",\n  "token_validation": "JWT_VERIFIED_DEFI_HSM",\n  "latency": "0.85 ms",\n  "state_status": "READY_FOR_INTEROP"\n}`
    },
    2: {
      pill: "STAGE 02 PAYLOAD",
      titleEn: "DEFI Sovereign Gateway Inspection",
      titleAr: "فحص بوابة DEFI السيادية وجدار الحماية",
      sec: "🛡️ WAF Cleared · Threat: 0/100",
      latency: "1.15 ms",
      json: `{\n  "gateway": "DEFI Sovereign Edge Cluster (Envoy)",\n  "ddos_inspection": "100 Gbps Mitigated · Clean",\n  "mutual_tls": "TLS_AES_256_GCM_SHA384 Validated",\n  "routing_target": "Civil_Registry_Base_Connector",\n  "inspection_latency": "1.15 ms",\n  "state_status": "GATEWAY_CLEARED"\n}`
    },
    3: {
      pill: "STAGE 03 PAYLOAD",
      titleEn: "Civil Registry National ID Verification",
      titleAr: "التحقق اللحظي عبر مصلحة الأحوال المدنية",
      sec: "🆔 Base Register Match 100%",
      latency: "1.40 ms",
      json: `{\n  "protocol": "gRPC Secure Stream · Base Registry Sync",\n  "civil_registry_authority": "Egyptian Civil Registration Authority",\n  "biometric_verification": "TOKEN_MATCHED_100%",\n  "data_integrity": "Cryptographic Nonce Verified",\n  "target_entity": "MOE_Cabinet_IDSC_Health_Core",\n  "latency": "1.40 ms",\n  "state_status": "ID_CONFIRMED"\n}`
    },
    4: {
      pill: "STAGE 04 PAYLOAD",
      titleEn: "Ministerial Core Workflow Execution",
      titleAr: "تنفيذ الإجراءات بأنظمة الوزارة المركزية",
      sec: "🏛️ Two-Phase Commit OK",
      latency: "2.10 ms",
      json: `{\n  "bus": "Ministerial Enterprise Service Bus",\n  "workflow_id": "WF_MOE_HEALTH_2026_9812",\n  "executing_authority": "Ministry of Health & Public Entities",\n  "state_transition": "PENDING -> APPROVED",\n  "database_transaction": "ACID Committed (Two-Phase Commit)",\n  "latency": "2.10 ms",\n  "state_status": "MINISTERIAL_EXECUTED"\n}`
    },
    5: {
      pill: "STAGE 05 PAYLOAD",
      titleEn: "Sovereign Tier IV Cloud Cryptographic Seal",
      titleAr: "التوثيق الرقمي في السحابة السيادية Tier-IV",
      sec: "☁️ HSM Signed · Immutable",
      latency: "0.65 ms",
      json: `{\n  "datacenter": "Sovereign Gov Data Core (Egypt Tier IV)",\n  "hardware_security_module": "Thales Luna HSM Level 4",\n  "cryptographic_seal": "0x7F2A...9C1D · Immutable Audit Trail",\n  "final_status_code": "200_OK_DELIVERED",\n  "total_pipeline_latency": "5.50 ms",\n  "state_status": "SEALED_AND_DELIVERED"\n}`
    }
  };

  const showPayload = (stageNum) => {
    currentPayloadStage = stageNum;
    const p = payloads[stageNum] || payloads[1];
    const isAr = (currentLang === "ar");
    if (payloadPill) payloadPill.textContent = p.pill;
    if (payloadHeading) payloadHeading.textContent = isAr ? p.titleAr : p.titleEn;
    if (payloadSec) payloadSec.textContent = p.sec;
    if (payloadCode) payloadCode.textContent = p.json;
    if (payloadLatency) {
      payloadLatency.innerHTML = `⏱️ ${isAr ? "زمن المعالجة:" : "Processing Latency:"} <strong>${p.latency}</strong>`;
    }
  };

  showPayloadFn = showPayload;

  let isUserInteracting = false;
  let pauseTimeout = null;

  // Node Click Handlers for Interactive Payload Inspection
  nodes.forEach((node, idx) => {
    node?.addEventListener("click", () => {
      isUserInteracting = true;
      clearTimeout(pauseTimeout);
      nodes.forEach(n => n?.classList.remove("active"));
      node.classList.add("active");
      showPayload(idx + 1);
      pauseTimeout = setTimeout(() => {
        isUserInteracting = false;
      }, 15000);
    });
  });

  const payloadCard = document.getElementById("interop-payload-panel");
  payloadCard?.addEventListener("mouseenter", () => {
    isUserInteracting = true;
  });
  payloadCard?.addEventListener("mouseleave", () => {
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 4000);
  });

  const appendLog = (msg, type = "text-info") => {
    if (!logContainer) return;
    const p = document.createElement("p");
    p.className = `console-line ${type}`;
    p.textContent = msg;
    logContainer.appendChild(p);
    while (logContainer.children.length > 35) {
      logContainer.removeChild(logContainer.firstChild);
    }
    logContainer.scrollTop = logContainer.scrollHeight;
  };

  const runSimulationCycle = () => {
    const isAr = (currentLang === "ar");

    // Reset nodes & badges
    nodes.forEach(n => n?.classList.remove("active", "highlight-success"));
    badges.forEach(b => {
      if (b) {
        b.className = "node-status-badge badge-pending";
        b.textContent = isAr ? "قيد الانتظار" : "Awaiting";
      }
    });

    const steps = [
      {
        idx: 0,
        badgeText: isAr ? "تم التحقق ✓" : "Verified ✓",
        log: isAr ? "[0.00s] طلب مواطن: تم استقبال المعاملة عبر بوابة مصر الرقمية (الرقم القومي: 29801...)" : "[0.00s] Inbound Request: Digital Egypt Portal (Citizen ID: 29801... authenticated)",
        delay: 0
      },
      {
        idx: 1,
        badgeText: isAr ? "مؤمّن ومشفّر ✓" : "mTLS / WAF OK ✓",
        log: isAr ? "[0.09s] بوابة DEFI السيادية: فحص أمني سيبراني شامل واجتياز جدران الحماية WAF" : "[0.09s] DEFI Sovereign Gateway: Mutual TLS handshake validated · Zero-Trust inspection cleared",
        delay: 500
      },
      {
        idx: 2,
        badgeText: isAr ? "تطابق الهوية ✓" : "ID Verified ✓",
        log: isAr ? "[0.18s] مصلحة الأحوال المدنية: التحقق اللحظي من البصمة والبيانات الحيوية" : "[0.18s] Civil Registry Sync: Biometric cryptographic token validated against Base Register",
        delay: 1100
      },
      {
        idx: 3,
        badgeText: isAr ? "تم التنفيذ الوزاري ✓" : "Executed ✓",
        log: isAr ? "[0.27s] النظام المركزي للوزارة: اعتماد الخدمة الحكومية وتحديث السجل المؤسسي" : "[0.27s] Ministerial Core (MOE/IDSC): Inter-agency workflow executed and state updated",
        delay: 1700
      },
      {
        idx: 4,
        badgeText: isAr ? "معتمد في السحابة ✓" : "Tier IV Signed ✓",
        log: isAr ? "[0.34s] السحابة السيادية Tier-IV: توثيق البصمة الرقمية للمعاملة (رمز الاستجابة 200 بنجاح)" : "[0.34s] Sovereign Tier-IV Cloud: Audit trail cryptographically sealed · Status 200 OK Delivered",
        delay: 2300
      }
    ];

    steps.forEach(({ idx, badgeText, log, delay }) => {
      setTimeout(() => {
        if (isUserInteracting) return;
        nodes.forEach((n, i) => {
          if (i === idx) {
            n?.classList.add("active", "highlight-success");
          } else if (i < idx) {
            n?.classList.add("highlight-success");
            n?.classList.remove("active");
          }
        });

        if (badges[idx]) {
          badges[idx].className = "node-status-badge badge-success";
          badges[idx].textContent = badgeText;
        }

        showPayload(idx + 1);
        appendLog(log, idx === 4 ? "text-success" : "text-info");
      }, delay);
    });
  };

  // Run autonomous continuous simulation
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    runSimulationCycle();
    setInterval(() => {
      if (!isUserInteracting) {
        runSimulationCycle();
      }
    }, 4500);
  }

  btn?.addEventListener("click", () => {
    isUserInteracting = false;
    runSimulationCycle();
  });
}

// ---------------------------------------------------------------------------
// 12. Section 5C: National Sovereign Digital Grid Interactivity
// ---------------------------------------------------------------------------
function initNationalGrid() {
  const regionBtns = document.querySelectorAll(".region-pill-btn");
  const hubNodes = document.querySelectorAll(".grid-hub-node");
  const badgeEl = document.getElementById("reg-display-badge");
  const titleEl = document.getElementById("reg-display-title");
  const descEl = document.getElementById("reg-display-desc");
  const throughputEl = document.getElementById("reg-kpi-throughput");
  const latencyEl = document.getElementById("reg-kpi-latency");
  const uptimeEl = document.getElementById("reg-kpi-uptime");
  const entitiesEl = document.getElementById("reg-kpi-entities");
  const secEl = document.getElementById("reg-display-sec");
  const pingBtn = document.getElementById("btn-ping-region");

  const regionsData = {
    cairo: {
      badgeEn: "CENTRAL SPINE",
      badgeAr: "المحور المركزي",
      titleEn: "Greater Cairo Operations Core",
      titleAr: "مركز العمليات الرئيسي بالقاهرة الكبرى",
      descEn: "Serving the central ministries, sovereign data registers, and 24+ million citizens with high-concurrency request routing and instant civil identification.",
      descAr: "خدمة الوزارات المركزية والسجلات السيادية وأكثر من 24 مليون مواطن مع توجيه فائق السرعة للمعاملات والتحقق اللحظي من الهوية.",
      throughput: "54,200 req/s",
      latency: "1.8 ms",
      uptime: "99.998%",
      entitiesEn: "25+ Bodies",
      entitiesAr: "+25 جهة ومؤسسة",
      secEn: "End-to-End HSM Encryption · Decree 132/2020 Compliance",
      secAr: "تشفير شامل بأجهزة HSM · التزام بالقرار 132/2020"
    },
    alex: {
      badgeEn: "NORTHERN GATEWAY",
      badgeAr: "البوابة الشمالية",
      titleEn: "Alexandria & Delta Maritime Axis",
      titleAr: "محور الإسكندرية والدلتا البحري واللوجستي",
      descEn: "Interconnecting Mediterranean sea customs, agricultural registry databases, and public services across Lower Egypt governorates.",
      descAr: "ربط الجمارك البحرية المتوسطية وقواعد بيانات السجل الزراعي والخدمات الحكومية بمحافظات الدلتا والوجه البحري.",
      throughput: "28,600 req/s",
      latency: "2.4 ms",
      uptime: "99.999%",
      entitiesEn: "18 Authorities",
      entitiesAr: "18 هيئة ومصلحة",
      secEn: "Zero-Trust Maritime Border & Customs Encryption",
      secAr: "تشفير المنافذ والجمارك البحرية بمعمارية Zero-Trust"
    },
    canal: {
      badgeEn: "STRATEGIC CORRIDOR",
      badgeAr: "الممر الاستراتيجي",
      titleEn: "Suez Canal & Free Zone Cyber Spine",
      titleAr: "المحور السيادي لقناة السويس والمناطق الحرة",
      descEn: "Ultra-high-throughput encrypted backbone supporting global maritime logistics, port clearance, and smart economic zone infrastructure.",
      descAr: "عمود فقري فائق السرعة لدعم اللوجستيات الملاحية العالمية، والتخليص الجمركي الفوري، والبنية التحتية للمنطقة الاقتصادية.",
      throughput: "36,400 req/s",
      latency: "1.9 ms",
      uptime: "100.00%",
      entitiesEn: "12 Strategic Bodies",
      entitiesAr: "12 جهة استراتيجية",
      secEn: "Cryptographic Port Clearance & Military-Grade Integrity",
      secAr: "تخليص ملاحي مشفر وجاهزية فائقة للأمان"
    },
    upper: {
      badgeEn: "REGIONAL DEVELOPMENT",
      badgeAr: "التنمية الإقليمية",
      titleEn: "Upper Egypt Sovereign Service Spine",
      titleAr: "محور صعيد مصر للتنمية والخدمات اللامركزية",
      descEn: "Decentralized high-availability data distribution serving Assiut, Sohag, Qena, Luxor, and Aswan with localized edge caching.",
      descAr: "توزيع لامركزي فائق الجاهزية للبيانات والخدمات يخدم محافظات أسيوط، وسوهاج، وقنا، والأقصر، وأسوان بالتخزين المؤقت اللحظي.",
      throughput: "22,800 req/s",
      latency: "3.1 ms",
      uptime: "99.995%",
      entitiesEn: "14 Governorates",
      entitiesAr: "14 محافظة وجهة",
      secEn: "Decentralized Edge Redundancy & Sovereign Link Failover",
      secAr: "أنظمة لا مركزية بديلة وضمان استمرارية الربط السيادي"
    },
    nac: {
      badgeEn: "GOV CLOUD CORE",
      badgeAr: "سحابة الحكومة المركزية",
      titleEn: "New Administrative Capital Tier IV Cloud",
      titleAr: "سحابة العاصمة الإدارية الجديدة (Tier-IV)",
      descEn: "The sovereign core datacenter hosting inter-agency microservices, immutable digital ledgers, and national enterprise architecture orchestration.",
      descAr: "مركز البيانات السيادي المركزي الذي يستضيف الخدمات الحكومية المشتركة، والسجلات الرقمية غير القابلة للتعديل، وهندسة الربط الوطني.",
      throughput: "68,900 req/s",
      latency: "0.8 ms",
      uptime: "99.999%",
      entitiesEn: "All Ministries",
      entitiesAr: "كافة الوزارات والهيئات",
      secEn: "Tier-IV Disaster Recovery · Hardware Root of Trust",
      secAr: "تعافي من الكوارث Tier-IV · جذر ثقة عتادي آمن"
    }
  };

  const selectRegion = (regKey) => {
    currentSelectedRegion = regKey || currentSelectedRegion || "cairo";
    const reg = regionsData[currentSelectedRegion] || regionsData.cairo;
    const isAr = (currentLang === "ar");

    // Update buttons
    regionBtns.forEach(btn => {
      const active = btn.getAttribute("data-region") === currentSelectedRegion;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    // Update SVG map nodes
    hubNodes.forEach(node => {
      const active = node.getAttribute("data-hub") === currentSelectedRegion;
      node.classList.toggle("active", active);
    });

    // Update SVG map text labels dynamically
    const mapLabels = {
      alex: { label: isAr ? "الإسكندرية" : "Alexandria", sub: isAr ? "عقدة البحر المتوسط" : "Mediterranean Node" },
      canal: { label: isAr ? "قناة السويس" : "Suez Canal", sub: isAr ? "الممر اللوجستي" : "Logistics Corridor" },
      cairo: { label: isAr ? "القاهرة الكبرى" : "Greater Cairo", sub: isAr ? "مركز العمليات الوطني" : "National Operations Core" },
      nac: { label: isAr ? "العاصمة الإدارية" : "New Capital", sub: isAr ? "سحابة سيادية Tier-IV" : "Tier IV Sovereign Cloud" },
      upper: { label: isAr ? "صعيد مصر" : "Upper Egypt", sub: isAr ? "محور أسيوط / الأقصر / أسوان" : "Assiut / Luxor / Aswan Spine" }
    };

    Object.keys(mapLabels).forEach(key => {
      const lblEl = document.getElementById(`map-lbl-${key}`);
      const subEl = document.getElementById(`map-sub-${key}`);
      if (lblEl) lblEl.textContent = mapLabels[key].label;
      if (subEl) subEl.textContent = mapLabels[key].sub;
    });

    if (badgeEl) badgeEl.textContent = isAr ? reg.badgeAr : reg.badgeEn;
    if (titleEl) titleEl.textContent = isAr ? reg.titleAr : reg.titleEn;
    if (descEl) descEl.textContent = isAr ? reg.descAr : reg.descEn;
    if (throughputEl) throughputEl.textContent = reg.throughput;
    if (latencyEl) latencyEl.textContent = reg.latency;
    if (uptimeEl) uptimeEl.textContent = reg.uptime;
    if (entitiesEl) entitiesEl.textContent = isAr ? reg.entitiesAr : reg.entitiesEn;
    if (secEl) secEl.textContent = isAr ? reg.secAr : reg.secEn;
  };

  selectRegionFn = selectRegion;

  const regionKeys = ["cairo", "alex", "canal", "upper", "nac"];
  let isUserInteracting = false;
  let pauseTimeout = null;

  const handleManualSelect = (regKey) => {
    isUserInteracting = true;
    clearTimeout(pauseTimeout);
    selectRegion(regKey);
    pauseTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 15000);
  };

  regionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const regKey = btn.getAttribute("data-region");
      handleManualSelect(regKey);
    });
  });

  hubNodes.forEach(node => {
    node.addEventListener("click", () => {
      const regKey = node.getAttribute("data-hub");
      handleManualSelect(regKey);
    });
  });

  // Initial call to set labels & values
  selectRegion(currentSelectedRegion);

  // Ping Regional Hub button
  const triggerPing = (auto = false) => {
    if (!pingBtn) return;
    if (!auto) pingBtn.disabled = true;
    pingBtn.innerHTML = `<span class="ping-wave"></span> <span>${currentLang === "ar" ? "جاري القياس..." : "Pinging Hub..."}</span>`;

    setTimeout(() => {
      const randomLatency = (Math.random() * 1.5 + 1.2).toFixed(2);
      pingBtn.innerHTML = `<span class="ping-wave"></span> <span>${currentLang === "ar" ? `زمن الاستجابة: ${randomLatency}ms (آمن ✓)` : `Latency: ${randomLatency}ms (Secure ✓)`}</span>`;
      setTimeout(() => {
        pingBtn.innerHTML = `<span class="ping-wave"></span> <span>${currentLang === "ar" ? "فحص اتصال المركز" : "Ping Regional Hub"}</span>`;
        if (!auto) pingBtn.disabled = false;
      }, 2400);
    }, 600);
  };

  pingBtn?.addEventListener("click", () => {
    isUserInteracting = true;
    clearTimeout(pauseTimeout);
    triggerPing(false);
    pauseTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 15000);
  });

  // Autonomous region cycling every 5.5 seconds
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    let regIndex = 0;
    setInterval(() => {
      if (!isUserInteracting) {
        regIndex = (regIndex + 1) % regionKeys.length;
        selectRegion(regionKeys[regIndex]);
        triggerPing(true);
      }
    }, 5500);
  }
}

// ---------------------------------------------------------------------------
// 13. Linear / Apple Card Spotlight Effect
// ---------------------------------------------------------------------------
function initCardSpotlights() {
  const cards = document.querySelectorAll(
    ".card-glass, .cap-detail-panel, .journey-blueprint-card, .interop-simulator-card, .grid-command-dashboard, .sector-card, .partner-card, .careers-card"
  );
  cards.forEach(card => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    });
  });
}

// ---------------------------------------------------------------------------
// 14. Initialization on DOMContentLoaded
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  initHeroParticles();
  initDiagramA();
  initDiagramATraffic();
  initDiagramC();
  initDiagramB();
  initJourneySimulator();
  initInteropSimulator();
  initNationalGrid();
  initCardSpotlights();
  initNavigation();
  initContactForm();
});

