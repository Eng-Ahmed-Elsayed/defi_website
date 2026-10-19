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
  updateCapabilityPanel(activeCapIndex);
}

function toggleLanguage() {
  currentLang = (currentLang === "en" ? "ar" : "en");
  localStorage.setItem("defi_lang", currentLang);
  applyTranslations(currentLang);
}

// ---------------------------------------------------------------------------
// 3. Diagram A: Connected Ecosystem Interactivity
// ---------------------------------------------------------------------------
function initDiagramA() {
  const nodes = document.querySelectorAll(".node-interactive, .diagram-core-node");
  const infoText = document.getElementById("diagram-a-info-text");

  nodes.forEach(node => {
    const updateNodeInfo = () => {
      const nodeType = node.getAttribute("data-node");
      const dict = translations[currentLang] || translations.en;
      
      nodes.forEach(n => n.classList.remove("active"));
      node.classList.add("active");

      if (nodeType === "citizens") {
        infoText.textContent = dict.nodeInfoCitizens;
      } else if (nodeType === "ministries") {
        infoText.textContent = dict.nodeInfoMinistries;
      } else if (nodeType === "defi-core") {
        infoText.textContent = dict.nodeInfoDefiCore;
      } else if (nodeType === "registries") {
        infoText.textContent = dict.nodeInfoRegistries;
      } else if (nodeType === "infra") {
        infoText.textContent = dict.nodeInfoInfra;
      }
    };

    node.addEventListener("mouseenter", updateNodeInfo);
    node.addEventListener("click", updateNodeInfo);
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        updateNodeInfo();
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 4. Diagram C: Capability Matrix Interactivity
// ---------------------------------------------------------------------------
let activeCapIndex = 1;

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
  capCards.forEach(card => {
    const index = parseInt(card.getAttribute("data-cap"), 10);
    card.addEventListener("click", () => updateCapabilityPanel(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        updateCapabilityPanel(index);
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 5. Diagram B: Transformation Journey Stepper Interactivity
// ---------------------------------------------------------------------------
function initDiagramB() {
  const stepItems = document.querySelectorAll(".journey-step-item");
  stepItems.forEach(item => {
    const handleSelect = () => {
      stepItems.forEach(s => s.classList.remove("active"));
      item.classList.add("active");
    };

    item.addEventListener("click", handleSelect);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect();
      }
    });
  });
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
// 8. Initialization on DOMContentLoaded
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  initDiagramA();
  initDiagramC();
  initDiagramB();
  initNavigation();
  initContactForm();
});
