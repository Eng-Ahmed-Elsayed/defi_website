import { DefiTranslations } from '../models/defi-content.model';

export const DEFI_TRANSLATIONS: Record<'en' | 'ar', DefiTranslations> = {
  en: {
    // Header & Announcement
    skipLink: 'Skip to main content',
    officialNotice: 'OFFICIAL PUBLIC-SECTOR ENTITY',
    mandateBanner: 'Established under Prime Minister Decree No. 132/2020 | Supporting MCIT & ITIDA National Transformation',
    hqLocation: '📍 Smart Village, B145, Cairo',
    navItems: [
      { id: 'about', label: 'About DEFI', route: '/about' },
      { id: 'capabilities', label: 'Capabilities', route: '/capabilities' },
      { id: 'sectors', label: 'Sectors & Solutions', route: '/sectors' },
      { id: 'impact', label: 'Impact & Partners', route: '/impact' },
      { id: 'news', label: 'News & Insights', route: '/news' },
      { id: 'careers', label: 'Careers', route: '/careers' }
    ],
    navContactCTA: 'Contact Us',
    langSwitchLabel: 'عربي',
    mobileMenuAria: 'Toggle mobile navigation menu',

    // Hero Section
    heroBadgePre: 'MANDATE 132/2020',
    heroBadgeText: 'Executive Digital Transformation Partner',
    heroHeadline: 'Architecting the <span class="gradient-text">Digital Foundations</span> for Egypt\'s Public Sector',
    heroSubhead: 'Empowering ministries and public authorities with strategic enterprise architecture, mission-critical infrastructure, and citizen-centric digital platforms that accelerate national transformation.',
    heroCtaPrimary: 'Explore National Ecosystem',
    heroCtaSecondary: 'Institutional Capabilities',
    metrics: [
      { id: 'decree', value: '132 / 2020', label: 'Prime Minister Decree', description: 'Established legal mandate for public-sector digital transformation' },
      { id: 'auspices', value: 'MCIT & ITIDA', label: 'Strategic Auspices', description: 'Under the auspices of national communications & IT authorities' },
      { id: 'pillars', value: '6 Core Pillars', label: 'Enterprise Architecture', description: 'Integrated institutional modernization and governance framework' },
      { id: 'hq', value: 'Smart Village', label: 'National Headquarters', description: 'Operating from Building B145, Cairo-Alexandria Desert Road' }
    ],

    // Diagram A (Ecosystem)
    diagramATitle: 'The Connected National Digital Ecosystem',
    diagramASubtitle: 'Interactive visual architecture demonstrating how DEFI orchestrates data, governance, and services across Egypt\'s public infrastructure.',
    diagramAInteractiveTag: 'Interactive Architecture Flow',
    diagramAInstruction: 'Hover or tap any ecosystem layer to inspect DEFI\'s architectural orchestration role.',
    ecosystemNodes: [
      {
        id: 'channels',
        category: 'channel',
        title: 'Citizen & Business Touchpoints',
        subtitle: 'Digital Egypt Portal · Mobile Apps · Service Centers',
        role: 'Unified Public Access',
        description: 'Multi-channel access points enabling citizens, businesses, and expatriates to access unified public services securely with intuitive interfaces.'
      },
      {
        id: 'ministries',
        category: 'ministry',
        title: 'Government Entities & Ministries',
        subtitle: 'Education (MOE) · Cabinet IDSC · 25+ Authorities',
        role: 'Service Delivery Execution',
        description: 'Sectoral authorities delivering specialized public mandates, collaborating with DEFI to standardize workflows and modernize legacy core systems.'
      },
      {
        id: 'core',
        category: 'core',
        title: 'DEFI Digital Enablement Backbone',
        subtitle: 'Enterprise Architecture · Interoperability · Security',
        role: 'Central Orchestration Hub',
        description: 'The national integration engine providing secure API gateways, common data registers, and enterprise architecture governance.'
      },
      {
        id: 'registries',
        category: 'registry',
        title: 'National Registries & Data Assets',
        subtitle: 'Civil Register · Commercial Registry · Land Records',
        role: 'Single Source of Truth',
        description: 'Interoperable foundational databases ensuring instant verification, zero duplicate data entry, and seamless cross-ministerial intelligence.'
      },
      {
        id: 'infra',
        category: 'infrastructure',
        title: 'Sovereign Infrastructure & Operational Governance',
        subtitle: 'Sovereign Cloud · High Availability · Cyber Resilience',
        role: 'Resilient Foundation',
        description: 'Sovereign infrastructure frameworks and continuous operational oversight supporting state-grade reliability, security, and institutional continuity.'
      }
    ],

    // Authority / Decree 132/2020
    authorityTag: 'ESTABLISHED LEGAL AUTHORITY',
    authorityTitle: 'Empowering Egypt\'s Public Sector Under <span class="gradient-text">Decree No. 132/2020</span>',
    authorityDesc1: 'Digital Egypt For Investment Co. (DEFI) was founded pursuant to Prime Minister Decree No. 132/2020 to serve as the specialized technical and strategic execution arm supporting the Ministry of Communications and Information Technology (MCIT) and the Information Technology Industry Development Agency (ITIDA).',
    authorityDesc2: 'By uniting enterprise-grade IT architecture with deep institutional knowledge of Egyptian governmental frameworks, DEFI turns high-level national policies into resilient, scalable digital reality.',
    mandatePillars: [
      { title: 'Public Sector Specialization', desc: 'Dedicated exclusively to government authorities, public service agencies, and national digital platforms.' },
      { title: 'Sovereignty & Governance', desc: 'Strict adherence to national data protection regulations, state confidentiality, and enterprise benchmarks.' }
    ],
    mandateCardTitle: 'Official Mandate & Operating Scope',
    mandatePoints: [
      { title: 'Modernizing Public Services:', desc: 'Transforming legacy bureaucratic processes into seamless, citizen-centric digital platforms.' },
      { title: 'Interoperable Infrastructure:', desc: 'Establishing robust enterprise architecture connecting disparate ministerial databases and service gateways.' },
      { title: 'Operational Continuity:', desc: 'Managing and safeguarding mission-critical governmental IT platforms with 24/7 proactive monitoring.' }
    ],
    valuesLabel: 'Corporate Values:',
    corporateValues: [
      { name: 'Innovation', tagline: 'Future-ready solutions', description: 'Applying modern technology architectures to solve complex public sector challenges.', icon: '💡' },
      { name: 'Excellence', tagline: 'Uncompromising rigor', description: 'Delivering state-grade engineering, high availability, and institutional precision.', icon: '⭐' },
      { name: 'Collaboration', tagline: 'Strategic partnership', description: 'Working hand-in-hand with ministries and public entities as a unified transformation team.', icon: '🤝' },
      { name: 'Integrity', tagline: 'Institutional trust', description: 'Upholding strict data sovereignty, transparency, and ethical governance across all initiatives.', icon: '🛡️' }
    ],

    // Diagram C (Capability Matrix)
    capabilityTag: 'VERIFIED CAPABILITY MATRIX',
    capabilityTitle: 'The 6 Institutional <span class="gradient-text">Capability Pillars</span>',
    capabilitySubtitle: 'Rather than fragmented technology offerings, DEFI provides six integrated enterprise pillars verified on our official service charter. Select any pillar to inspect its mandate.',
    capabilityPillars: [
      {
        id: 'business-architecture',
        title: 'Business Architecture',
        subtitle: 'Strategy & operating model alignment',
        heading: 'Strategic Business Architecture',
        description: 'Aligning governmental strategies with operational models to support public-sector transformation, process optimization, and effective integration of government IT systems.',
        strategicImpact: 'Streamlined inter-agency processes and eliminated departmental silos across public agencies.',
        keyDeliverables: ['Target Operating Models', 'Enterprise Process Blueprints', 'Transformation Roadmaps', 'Organizational Impact Assessments'],
        icon: '🏛️'
      },
      {
        id: 'solution-architecture',
        title: 'Solution Architecture',
        subtitle: 'Scalable platforms & interoperability',
        heading: 'Enterprise Solution Architecture',
        description: 'Designing and implementing scalable, secure technology solutions aligned with national priorities, ensuring interoperability and seamless integration across government platforms.',
        strategicImpact: 'Unified government systems architecture ensuring scalable, future-ready public digital services.',
        keyDeliverables: ['Platform Blueprints', 'API Integration Standards', 'Cross-Agency Interoperability Specifications', 'Sovereign Cloud Schemas'],
        icon: '⚙️'
      },
      {
        id: 'it-operations',
        title: 'IT Operations & Continuity',
        subtitle: 'System reliability & 24/7 performance',
        heading: 'Mission-Critical IT Operations',
        description: 'Managing and optimizing government IT operations to ensure system reliability, security, continuity of services, and efficient day-to-day performance across public-sector environments.',
        strategicImpact: 'Uninterrupted mission-critical public services and maximized operational uptime for national systems.',
        keyDeliverables: ['24/7 Monitoring Blueprints', 'Incident Response Protocols', 'Disaster Recovery Management', 'SLA Performance Governance'],
        icon: '🛡️'
      },
      {
        id: 'citizen-experience',
        title: 'Citizen Experience (CX)',
        subtitle: 'Accessible, intuitive public service design',
        heading: 'Citizen Experience & Human-Centered Design',
        description: 'Enhancing citizen interactions through intuitive, inclusive digital and physical government service designs focused on accessibility and usability across all demographics.',
        strategicImpact: 'Higher citizen satisfaction, reduced service completion times, and universal digital accessibility.',
        keyDeliverables: ['Citizen Journey Maps', 'Universal Design Standards', 'Usability Benchmark Testing', 'Multi-Channel Service Guidelines'],
        icon: '👥'
      },
      {
        id: 'project-management',
        title: 'Project Management',
        subtitle: 'On-time delivery with public governance',
        heading: 'Strategic Public-Sector Project Management',
        description: 'Leading and executing complex digital transformation projects with structured methodologies, risk management, stakeholder coordination, and adherence to public-sector standards.',
        strategicImpact: 'Predictable delivery timelines, strict budget adherence, and seamless coordination across multiple ministerial stakeholders.',
        keyDeliverables: ['Governance Frameworks', 'Risk Mitigation Matrix', 'Milestone Tracking Dashboards', 'Multi-Vendor Delivery Oversight'],
        icon: '📋'
      },
      {
        id: 'quality-governance',
        title: 'Quality Governance',
        subtitle: 'Audits, testing & regulatory compliance',
        heading: 'Enterprise Quality Governance & Compliance',
        description: 'Establishing robust quality frameworks, continuous testing, performance audits, and compliance verification to guarantee that national platforms meet the highest state benchmarks.',
        strategicImpact: 'Fault-tolerant public systems with rigorous compliance to Egyptian state security and privacy regulations.',
        keyDeliverables: ['Automated Testing Regimes', 'Regulatory Compliance Audits', 'Performance Verification Reports', 'State Security Benchmarks'],
        icon: '🔍'
      }
    ],

    // Diagram B (Operating Model)
    journeyTag: 'SYSTEMIC TRANSFORMATION JOURNEY',
    journeyTitle: 'Diagram B · Institutional <span class="gradient-text">Operating Model</span>',
    journeySubtitle: 'A structured, 5-phase delivery lifecycle that converts complex ministerial mandates into resilient, scalable digital public infrastructure.',
    journeySteps: [
      {
        step: '01',
        name: 'Assess & Align',
        phase: 'Discovery & Strategic Mandate',
        description: 'Conducting comprehensive evaluations of existing ministerial workflows, legal frameworks, and citizen needs to define clear transformation objectives.',
        output: 'Institutional Baseline & Transformation Charter'
      },
      {
        step: '02',
        name: 'Architect & Govern',
        phase: 'Enterprise Architecture & Standards',
        description: 'Formulating end-to-end technical blueprints, data governance models, and security protocols aligned with national interoperability guidelines.',
        output: 'System Blueprint & Security Architecture'
      },
      {
        step: '03',
        name: 'Build & Interoperate',
        phase: 'Platform Modernization & API Integration',
        description: 'Engineering microservices, modernizing legacy databases, and integrating shared national API gateways for real-time cross-ministerial exchange.',
        output: 'Interoperable Public Service Platforms'
      },
      {
        step: '04',
        name: 'Deploy & Operate',
        phase: 'Mission-Critical 24/7 Operations',
        description: 'Executing smooth rollouts with continuous performance monitoring, zero-downtime failover, and proactive incident management.',
        output: 'High-Availability Production Operations'
      },
      {
        step: '05',
        name: 'Elevate & Scale',
        phase: 'Citizen Experience & Continuous Optimization',
        description: 'Gathering real-time citizen feedback, auditing system performance, and scaling digital services to handle nationwide demand.',
        output: 'Continual Service Optimization & Analytics'
      }
    ],

    // Impact & Partners
    impactTag: 'VERIFIED SCALE & CREDIBILITY',
    impactTitle: 'Measurable Public Impact & <span class="gradient-text">Institutional Trust</span>',
    impactSubtitle: 'DEFI delivers tangible results across Egypt\'s public sector, backed by published metrics and verified institutional partnerships.',
    partnersTitle: 'Verified Public Institutional Partners',
    partnerList: [
      {
        name: 'Ministry of Education and Technical Education',
        arabicName: 'وزارة التربية والتعليم والتعليم الفني',
        acronym: 'MOE',
        category: 'Ministerial Partner',
        scope: 'Educational platforms and nation-wide digital examination and administration infrastructure.',
        verifiedStatus: 'Verified Official Client'
      },
      {
        name: 'The Egyptian Cabinet Information and Decision Support Center',
        arabicName: 'مركز المعلومات ودعم اتخاذ القرار بمجلس الوزراء',
        acronym: 'IDSC',
        category: 'Strategic Partner',
        scope: 'Executive decision support platforms, governmental data synthesis, and national indicators.',
        verifiedStatus: 'Verified Official Client'
      }
    ],

    // About Page
    aboutHeroTitle: 'Empowering Egypt\'s Digital Renaissance',
    aboutHeroSubtitle: 'Established under Prime Minister Decree No. 132/2020, DEFI serves as the premier technological and enterprise architecture partner for the Egyptian state.',
    aboutMandateHeading: 'Our Mandate & Strategic Foundation',
    aboutMandateText: [
      'Digital Egypt For Investment Co. (DEFI) was founded under Prime Minister Decree No. 132/2020 to accelerate the execution of Egypt’s national digital strategy under the auspices of the Ministry of Communications and Information Technology (MCIT) and the Information Technology Industry Development Agency (ITIDA).',
      'As governments worldwide navigate rapid technological evolution, Egypt requires robust, enterprise-grade technical foundations that can support hundreds of millions of annual citizen transactions while safeguarding national data sovereignty.',
      'DEFI fulfills this critical role by acting as a specialized institutional bridge: marrying global IT best practices and modern microservices architecture with an intimate understanding of Egyptian public-sector regulations, inter-agency workflows, and security requirements.'
    ],
    aboutGovernanceTitle: 'Institutional Governance & Alignment',
    aboutGovernanceText: 'DEFI operates under strict regulatory oversight, ensuring that every platform engineered complies with Egyptian data sovereignty legislation, state security directives, and international quality standards.',

    // Capabilities Page
    capHeroTitle: 'Enterprise Capabilities for Public Transformation',
    capHeroSubtitle: 'Six verified institutional pillars engineered to modernize ministries, automate complex public workflows, and safeguard state infrastructure.',
    capDetailPrompt: 'Explore detailed deliverables, methodologies, and strategic impact for each pillar below:',

    // Sectors Page
    sectorsHeroTitle: 'Empowering Strategic Public Sectors',
    sectorsHeroSubtitle: 'Proven enterprise solutions engineered for the specific requirements of Egypt\'s vital national domains.',
    sectorsList: [
      {
        id: 'gov-admin',
        title: 'Government & Public Administration',
        tag: 'Core Modernization',
        description: 'Digitizing inter-agency workflows, establishing unified government portals, and eliminating bureaucratic bottlenecks through automated enterprise architectures.',
        capabilitiesUsed: ['Business Architecture', 'Solution Architecture', 'Quality Governance'],
        publicImpact: 'Reduced processing time for citizen requests and automated cross-ministerial approvals.',
        verifiedReference: 'Public Service Digitization Initiatives'
      },
      {
        id: 'education',
        title: 'Education & Human Capital',
        tag: 'National Scale',
        description: 'Engineering resilient, scalable digital educational platforms, examination delivery systems, and institutional records management.',
        capabilitiesUsed: ['Solution Architecture', 'IT Operations', 'Citizen Experience'],
        publicImpact: 'Supporting millions of students and educators with secure, high-concurrency educational infrastructure.',
        verifiedReference: 'Ministry of Education & Technical Education (MOE)'
      },
      {
        id: 'decision-support',
        title: 'Strategic Decision Support',
        tag: 'Data Intelligence',
        description: 'Developing executive data dashboards, indicator tracking engines, and strategic reporting platforms for public policy decision-makers.',
        capabilitiesUsed: ['Business Architecture', 'Solution Architecture', 'Project Management'],
        publicImpact: 'Empowering senior leadership with verified real-time public data and predictive socioeconomic indicators.',
        verifiedReference: 'The Cabinet Information and Decision Support Center (IDSC)'
      },
      {
        id: 'digital-infrastructure',
        title: 'National Digital Infrastructure & Registries',
        tag: 'Foundational Scale',
        description: 'Building secure data integration backbones that connect disparate public registries into a synchronized, single source of state truth.',
        capabilitiesUsed: ['Solution Architecture', 'IT Operations', 'Quality Governance'],
        publicImpact: 'Eliminating duplicate citizen records and establishing secure API interoperability across 25+ government entities.',
        verifiedReference: 'National Registry Interoperability Initiatives'
      }
    ],

    // News Page
    newsHeroTitle: 'Official News & Announcements',
    newsHeroSubtitle: 'Verified institutional updates, partnership milestones, and digital transformation initiatives.',
    newsList: [
      {
        id: 'news-1',
        title: 'DEFI Advances National Public-Sector Transformation Under Decree No. 132/2020',
        category: 'Institutional Mandate',
        date: '2026',
        summary: 'Under the mandate established by Prime Minister Decree No. 132/2020, DEFI continues scaling its enterprise architecture delivery across Egyptian ministries and authorities.',
        readTime: '3 min read',
        officialSource: 'DEFI Executive Communications'
      },
      {
        id: 'news-2',
        title: 'Strategic Collaboration with Ministry of Education (MOE) and Cabinet IDSC',
        category: 'Partnership Milestone',
        date: '2026',
        summary: 'DEFI highlights ongoing technical cooperation with key ministerial partners, delivering enterprise-grade platform reliability and strategic decision-support systems.',
        readTime: '4 min read',
        officialSource: 'DEFI Corporate Report'
      },
      {
        id: 'news-3',
        title: 'Enterprise Architecture Framework for National Interoperability',
        category: 'Technical Governance',
        date: '2026',
        summary: 'DEFI outlines core architectural principles and integration standards guiding inter-agency interoperability and secure citizen service delivery.',
        readTime: '3 min read',
        officialSource: 'DEFI Enterprise Architecture Directorate'
      }
    ],

    // Careers Page
    careersHeroTitle: 'Build the Digital Foundations of a Nation',
    careersHeroSubtitle: 'Join Egypt’s premier enterprise technology teams at Smart Village and engineer high-impact solutions for millions of citizens.',
    careersWhyDEFI: 'At DEFI, your code and architectures directly improve the daily lives of citizens across Egypt. We offer mission-driven engineering, enterprise-scale challenges, and a culture centered on excellence and innovation.',
    careersDomainsTitle: 'Core Technology & Architectural Disciplines',
    careerDomains: [
      {
        id: 'ent-arch',
        title: 'Enterprise & Solution Architecture',
        focusArea: 'System Blueprints & Standards',
        description: 'Design nation-scale software systems, interoperability protocols, and cloud-native integration architectures for ministries.',
        technologies: ['TOGAF', 'Microservices', 'API Gateways', 'Domain-Driven Design']
      },
      {
        id: 'cloud-ops',
        title: 'Cloud Infrastructure & SRE',
        focusArea: 'High Availability & Resiliency',
        description: 'Ensure mission-critical uptime, 24/7 incident response, and zero-downtime continuous deployment for government systems.',
        technologies: ['Kubernetes', 'Sovereign Cloud', 'Observability', 'Disaster Recovery']
      },
      {
        id: 'cx-design',
        title: 'Citizen Experience & Product Design',
        focusArea: 'Human-Centered Public Services',
        description: 'Craft intuitive, accessible digital experiences that work seamlessly across diverse citizen demographics and devices.',
        technologies: ['Design Systems', 'WCAG 2.1 AA', 'User Journey Mapping', 'Prototyping']
      },
      {
        id: 'gov-sec',
        title: 'Quality Engineering & Compliance',
        focusArea: 'Security, Standards & Assurance',
        description: 'Conduct automated test engineering, security vulnerability audits, and state regulatory compliance verification.',
        technologies: ['Automated QA', 'Data Governance', 'Penetration Testing', 'ISO Benchmarks']
      }
    ],
    careersCtaText: 'Ready to contribute to Egypt’s digital future? Send your credentials and portfolio directly to our recruitment team at info@defi.com.eg.',

    // Contact Page
    contactHeroTitle: 'Connect with DEFI Leadership',
    contactHeroSubtitle: 'Engage with our enterprise architecture and transformation teams at our Smart Village headquarters.',
    contactHqTitle: 'Headquarters & Executive Offices',
    contactHqAddress: 'Building B145, Smart Village, Cairo-Alexandria Desert Road, Giza, Egypt',
    contactEmailTitle: 'Official Enterprise Inquiries',
    contactOfficialEmail: 'info@defi.com.eg',
    contactFormTitle: 'Request an Institutional Consultation',
    contactFormIntro: 'Submit your inquiry to discuss enterprise architecture, ministerial modernization, or strategic partnerships.',
    formLabels: {
      fullName: 'Full Name',
      organization: 'Government Entity / Ministry / Organization',
      email: 'Official Work Email',
      subject: 'Inquiry Domain / Subject',
      message: 'Detailed Project Scope or Inquiry',
      submit: 'Submit Consultation Request',
      submitting: 'Submitting Inquiry...',
      successMessage: 'Thank you. Your consultation inquiry has been routed to DEFI executive operations. We will respond within 24 business hours.',
      requiredNote: 'Fields marked with * are required for public-sector correspondence.'
    },

    // Footer & Common
    footerAboutText: 'Digital Egypt For Investment Co. (DEFI) — Established under Prime Minister Decree No. 132/2020. Egypt\'s executive digital transformation and enterprise architecture partner supporting MCIT and ITIDA.',
    footerQuickLinksTitle: 'Institutional Navigation',
    footerCapabilitiesTitle: 'Capability Pillars',
    footerContactTitle: 'Headquarters & Contact',
    footerDecreeBadge: 'Prime Minister Decree No. 132/2020',
    copyrightNotice: '© 2026 Digital Egypt For Investment Co. (DEFI). All Rights Reserved.',
    allRightsReserved: 'Digital Egypt For Investment Co. — Smart Village, Giza, Egypt',

    // 404 Page
    notFoundTitle: 'Page Not Found',
    notFoundDesc: 'The page you requested could not be located on the DEFI corporate portal. Please navigate back to the homepage or explore our capabilities.',
    notFoundReturnHome: 'Return to Homepage'
  },

  ar: {
    // Header & Announcement
    skipLink: 'الانتقال إلى المحتوى الرئيسي',
    officialNotice: 'جهة رسمية تابعة للدولة',
    mandateBanner: 'تأسست بموجب قرار رئيس مجلس الوزراء رقم 132 لسنة 2020 | دعم التحول الرقمي مع MCIT و ITIDA',
    hqLocation: '📍 القرية الذكية، مبنى B145، الجيزة',
    navItems: [
      { id: 'about', label: 'عن الشركة', route: '/about' },
      { id: 'capabilities', label: 'القدرات المؤسسية', route: '/capabilities' },
      { id: 'sectors', label: 'القطاعات والحلول', route: '/sectors' },
      { id: 'impact', label: 'الأثر والشركاء', route: '/impact' },
      { id: 'news', label: 'الأخبار والرؤى', route: '/news' },
      { id: 'careers', label: 'الوظائف', route: '/careers' }
    ],
    navContactCTA: 'تواصل معنا',
    langSwitchLabel: 'English',
    mobileMenuAria: 'تبديل قائمة التنقل للمحمول',

    // Hero Section
    heroBadgePre: 'قرار 132 / 2020',
    heroBadgeText: 'الشريك التنفيذي للتحول الرقمي الحكومي',
    heroHeadline: 'بناء وتطوير <span class="gradient-text">الأسس الرقمية</span> للقطاع الحكومي المصري',
    heroSubhead: 'تمكين الوزارات والهيئات العامة بالبنى المؤسسية الاستراتيجية، والبنية التحتية الحيوية، والمنصات الرقمية المتمحورة حول خدمة المواطن لتسريع مسيرة التحول الوطني.',
    heroCtaPrimary: 'استكشاف النظام الرقمي الوطني',
    heroCtaSecondary: 'القدرات المؤسسية',
    metrics: [
      { id: 'decree', value: '132 / 2020', label: 'قرار رئيس الوزراء', description: 'المرجعية القانونية الرسمية لتأسيس الذراع التنفيذي للتحول الرقمي الحكومي' },
      { id: 'auspices', value: 'MCIT و ITIDA', label: 'الرعاية الاستراتيجية', description: 'تحت مظلة وزارة الاتصالات وهيئة تنمية صناعة تكنولوجيا المعلومات' },
      { id: 'pillars', value: '6 ركائز', label: 'بنية مؤسسية متكاملة', description: 'إطار عمل مؤسسي شامل لتحديث وحوكمة المنظومات العامة' },
      { id: 'hq', value: 'القرية الذكية', label: 'المقر التنفيذي', description: 'مبنى B145، طريق القاهرة - الإسكندرية الصحراوي، الجيزة' }
    ],

    // Diagram A (Ecosystem)
    diagramATitle: 'النظام الرقمي الوطني المتكامل',
    diagramASubtitle: 'مخطط معماري تفاعلي يوضح دور شركة مصر الرقمية للاستثمار (DEFI) في توجيه تدفق البيانات والخدمات والحوكمة عبر البنية التحتية لمصر.',
    diagramAInteractiveTag: 'مخطط معماري تفاعلي',
    diagramAInstruction: 'مرر المؤشر أو اضغط على أي طبقة معمارية لاستكشاف دور DEFI في التنسيق والربط الوطني.',
    ecosystemNodes: [
      {
        id: 'channels',
        category: 'channel',
        title: 'قنوات وصول المواطنين وقطاع الأعمال',
        subtitle: 'بوابة مصر الرقمية · التطبيقات الذكية · مراكز الخدمات',
        role: 'نقاط وصول موحدة',
        description: 'واجهات متكاملة تتيح للمواطنين وقطاع الأعمال الوصول إلى الخدمات العامة بسهولة وأمان مع توحيد تجربة الاستخدام عبر مختلف القنوات.'
      },
      {
        id: 'ministries',
        category: 'ministry',
        title: 'الجهات والوزارات الحكومية',
        subtitle: 'التربية والتعليم (MOE) · مركز معلومات مجلس الوزراء (IDSC) · +25 جهة',
        role: 'تنفيذ الخدمات القطاعية',
        description: 'الهيئات والوزارات التي تقدم المهام العامة المتخصصة، وتتعاون مع DEFI لتوحيد وتحديث أنظمتها الأساسية وربطها بالشبكة القومية.'
      },
      {
        id: 'core',
        category: 'core',
        title: 'منظومة DEFI للتمكين الرقمي',
        subtitle: 'البنية المؤسسية · منصات الربط والتكامل · حوكمة الأمان',
        role: 'محور الربط والتنسيق الوطني',
        description: 'المحور المعماري المركزي الذي يوفر بوابات الربط البرمجي (APIs)، والسجلات الموحدة، ومعايير الحوكمة لضمان تكامل المنظومات الحكومية.'
      },
      {
        id: 'registries',
        category: 'registry',
        title: 'السجلات والبيانات الوطنية الأساسية',
        subtitle: 'السجل المدني · السجل التجاري · التوثيق والأراضي',
        role: 'المصدر الوطني الموثوق للمعلومات',
        description: 'قواعد بيانات مركزية مؤمنة تضمن التحقق الفوري من الهوية ومنع تكرار البيانات مع توفير معلومات دقيقة لصناع القرار.'
      },
      {
        id: 'infra',
        category: 'infrastructure',
        title: 'البنية التحتية السيادية وحوكمة العمليات',
        subtitle: 'السحابة السيادية · الجاهزية العالية · المرونة السيبرانية',
        role: 'الأساس المؤسسي المؤمن',
        description: 'أطر البنية التحتية السيادية والإشراف التشغيلي المستمر لضمان أعلى معايير الاعتمادية والأمان والاستمرارية للمنصات الحكومية.'
      }
    ],

    // Authority / Decree 132/2020
    authorityTag: 'المرجعية والصفة القانونية الرسمية',
    authorityTitle: 'تمكين القطاع الحكومي المصري بموجب <span class="gradient-text">قرار رئيس الوزراء رقم 132 لسنة 2020</span>',
    authorityDesc1: 'تأسست شركة مصر الرقمية للاستثمار (DEFI) بموجب قرار دولة رئيس مجلس الوزراء رقم 132 لسنة 2020 لتكون الذراع الفنية والتنفيذية المتخصصة في دعم وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) وهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA).',
    authorityDesc2: 'تجمع الشركة بين خبرات البنية المؤسسية العالمية والفهم العميق للأطر التشريعية والتنظيمية الحكومية، مما يمكنها من تحويل السياسات الوطنية للتحول الرقمي إلى واقع عملي عالي الاعتمادية والأمان.',
    mandatePillars: [
      { title: 'التخصص الحصري في القطاع العام', desc: 'تكريس كافة الموارد والخبرات للوزارات والهيئات الحكومية والمشروعات القومية الاستراتيجية.' },
      { title: 'السيادة وحوكمة البيانات', desc: 'التزام صارم بمعايير حماية البيانات الوطنية والسرية المؤسسية وأعلى متطلبات الجودة والأمان.' }
    ],
    mandateCardTitle: 'نطاق الاختصاص والمهام المؤسسية',
    mandatePoints: [
      { title: 'تحديث الخدمات الحكومية:', desc: 'تحويل الإجراءات الإدارية التقليدية إلى خدمات رقمية مرنة وسريعة تتمحور حول المواطن.' },
      { title: 'البنية المؤسسية التبادلية:', desc: 'بناء أطر معمارية متكاملة تربط السجلات الفيدرالية ومنافذ الخدمات الحكومية بسلاسة.' },
      { title: 'استمرارية العمليات الحرجة:', desc: 'إدارة وحماية الأنظمة الحكومية الحيوية من خلال مراقبة استباقية وتشغيل متواصل على مدار 24 ساعة.' }
    ],
    valuesLabel: 'القيم المؤسسية:',
    corporateValues: [
      { name: 'الابتكار', tagline: 'حلول جاهزة للمستقبل', description: 'تطبيق أحدث النماذج المعمارية والتقنية لتجاوز تحديات القطاع العام المعقدة.', icon: '💡' },
      { name: 'التميز', tagline: 'أعلى معايير الإتقان', description: 'تقديم هندسة برمجية تليق بالدولة، مع ضمان استقرار الأنظمة والدقة المؤسسية.', icon: '⭐' },
      { name: 'التعاون', tagline: 'شراكة استراتيجية وثيقة', description: 'العمل المشترك مع الوزارات والجهات العامة كفريق تحول وطني واحد ومتجانس.', icon: '🤝' },
      { name: 'النزاهة', tagline: 'الثقة والمسؤولية الوطنية', description: 'صون سيادة البيانات والشفافية وتطبيق الحوكمة الأخلاقية الصارمة في كافة المشروعات.', icon: '🛡️' }
    ],

    // Diagram C (Capability Matrix)
    capabilityTag: 'مصفوفة القدرات المؤسسية المعتمدة',
    capabilityTitle: 'الركائز الست <span class="gradient-text">للقدرات المؤسسية</span> المعتمدة',
    capabilitySubtitle: 'تقدم DEFI ست ركائز متكاملة ومعتمدة في ميثاق خدماتها المؤسسية بدلاً من الحلول التقنية المجزأة. اضغط على أي ركيزة لتفاصيل مهامها.',
    capabilityPillars: [
      {
        id: 'business-architecture',
        title: 'البنية المؤسسية للأعمال',
        subtitle: 'مواءمة الاستراتيجيات والنماذج التشغيلية',
        heading: 'هندسة وبنية الأعمال المؤسسية',
        description: 'مواءمة الاستراتيجيات الحكومية مع نماذج التشغيل لتمكين التحول الرقمي وتحسين الإجراءات وضمان تكامل الأنظمة بكفاءة عالية.',
        strategicImpact: 'تبسيط الإجراءات الحكومية المشتركة والقضاء على العزلة الإدارية بين الوزارات والهيئات.',
        keyDeliverables: ['نماذج التشغيل المستهدفة', 'مخططات الإجراءات المؤسسية', 'خرائط طريق التحول الرقمي', 'تقييمات الأثر التنظيمي'],
        icon: '🏛️'
      },
      {
        id: 'solution-architecture',
        title: 'بنية الحلول التقنية',
        subtitle: 'منصات قابلة للتوسع والتكامل البيني',
        heading: 'بنية وهندسة الحلول التقنية المتطورة',
        description: 'تصميم وتنفيذ حلول برمجية آمنة وقابلة للتوسع تتوافق مع الأولويات الوطنية، وتضمن الربط والتكامل السلس بين مختلف المنصات الحكومية.',
        strategicImpact: 'بنية موحدة للأنظمة الحكومية تضمن تقديم خدمات رقمية عامة تواكب احتياجات المستقبل.',
        keyDeliverables: ['المخططات المعمارية للمنصات', 'معايير واجهات الربط (APIs)', 'مواصفات التشغيل البيني بين الجهات', 'مخططات السحابة السيادية'],
        icon: '⚙️'
      },
      {
        id: 'it-operations',
        title: 'تشغيل تكنولوجيا المعلومات واستمراريتها',
        subtitle: 'موثوقية الأنظمة والتشغيل الدائم 24/7',
        heading: 'إدارة وتشغيل الأنظمة والمنظومات الحيوية',
        description: 'إدارة العمليات التقنية لضمان أمان وموثوقية واستمرارية الخدمات الرقمية، ورفع كفاءة الأداء اليومي في بيئات القطاع الحكومي.',
        strategicImpact: 'استمرار الخدمات العامة دون انقطاع ورفع معدلات الجاهزية التشغيلية للأنظمة الوطنية إلى أقصى حد.',
        keyDeliverables: ['مخططات المراقبة على مدار الساعة', 'بروتوكولات الاستجابة للحوادث', 'إدارة التعافي من الكوارث', 'حوكمة اتفاقيات مستوى الخدمة (SLA)'],
        icon: '🛡️'
      },
      {
        id: 'citizen-experience',
        title: 'تجربة المواطن (CX)',
        subtitle: 'تصميم شامل وسهل للخدمات الحكومية',
        heading: 'تصميم تجربة المواطن والخدمات الشاملة',
        description: 'الارتقاء بتجربة المواطن عبر تصميم خدمات حكومية رقمية وميدانية شاملة وسهلة الاستخدام تناسب كافة الفئات المجتمعية.',
        strategicImpact: 'رفع رضا المواطنين وتقليص أوقات إنجاز المعاملات وضمان إتاحة الخدمات الرقمية للجميع.',
        keyDeliverables: ['خرائط رحلة المواطن', 'معايير التصميم الشامل', 'اختبارات سهولة الاستخدام', 'أدلة الخدمات متعددة القنوات'],
        icon: '👥'
      },
      {
        id: 'project-management',
        title: 'إدارة المشاريع الاستراتيجية',
        subtitle: 'تسليم في المواعيد المحددة بحوكمة حكومية',
        heading: 'إدارة مشروعات التحول الرقمي الكبرى',
        description: 'قيادة وتنفيذ مشروعات التحول الرقمي المعقدة بمنهجيات دقيقة وإدارة للمخاطر وتنسيق فعال مع كافة الأطراف والجهات المعنية.',
        strategicImpact: 'الالتزام الدقيق بالجداول الزمنية والميزانيات المعتمدة وتحقيق التنسيق السلس بين الوزارات المختلفة.',
        keyDeliverables: ['أطر حوكمة المشروعات', 'مصفوفة إدارة وتخفيف المخاطر', 'لوحات متابعة الإنجاز والمراحل', 'الإشراف على موردي التكنولوجيا'],
        icon: '📋'
      },
      {
        id: 'quality-governance',
        title: 'حوكمة الجودة والامتثال',
        subtitle: 'تدقيق واختبار والتزام بالمعايير الوطنية',
        heading: 'حوكمة الجودة والامتثال التنظيمي والسيادي',
        description: 'تطبيق أطر صارمة لضمان الجودة والاختبار المستمر وتدقيق الأداء لضمان مطابقة المنصات الوطنية لأعلى معايير الدولة.',
        strategicImpact: 'منظومات حكومية عالية المتانة خالية من الأخطاء وملتزمة كلياً بالقوانين والتشريعات المصرية.',
        keyDeliverables: ['منظومات الاختبار الآلي', 'تدقيق الامتثال التنظيمي', 'تقارير التحقق من الأداء', 'معايير الأمان السيادي للدولة'],
        icon: '🔍'
      }
    ],

    // Diagram B (Operating Model)
    journeyTag: 'دورة التحول المنهجية المتكاملة',
    journeyTitle: 'النموذج التشغيلي المؤسسي للتحول الرقمي',
    journeySubtitle: 'دورة تسليم منهجية من 5 مراحل تحول التكليفات الوزارية المعقدة إلى بنية تحتية رقمية عامة تتسم بالمرونة والتوسع.',
    journeySteps: [
      {
        step: '01',
        name: 'التقييم والمواءمة',
        phase: 'الاستكشاف وتحديد التكليف الاستراتيجي',
        description: 'إجراء تقييم شامل للإجراءات الحكومية الحالية والأطر القانونية واحتياجات المواطنين لتحديد أهداف التحول بدقة.',
        output: 'ميثاق التحول الرقمي والخط الأساسي للمؤسسة'
      },
      {
        step: '02',
        name: 'التصميم والحوكمة المعمارية',
        phase: 'البنية المؤسسية والمعايير الوطنية',
        description: 'صياغة المخططات الفنية الشاملة ونماذج حوكمة البيانات وبروتوكولات الأمان المتوافقة مع معايير الدولة.',
        output: 'المخطط الهندسي للبنية التحتية والأمنية'
      },
      {
        step: '03',
        name: 'البناء والتشغيل البيني',
        phase: 'تحديث المنصات والربط البرمجي',
        description: 'برمجة المنصات الحديثة وتحديث قواعد البيانات القائمة وربطها عبر بوابات الربط البرمجي الوطنية لتبادل البيانات الفوري.',
        output: 'منصات خدمات عامة قابلة للتكامل البيني'
      },
      {
        step: '04',
        name: 'الإطلاق والتشغيل المستمر',
        phase: 'العمليات الحيوية على مدار 24/7',
        description: 'تنفيذ عمليات الإطلاق السلس مع مراقبة حية للأداء، واستجابة استباقية للحوادث، وضمان عدم توقف الخدمات.',
        output: 'تشغيل تشغيلي عالي الجاهزية والاستقرار'
      },
      {
        step: '05',
        name: 'الارتقاء والتوسع',
        phase: 'تجربة المواطن والتحسين المستمر',
        description: 'جمع الملاحظات المباشرة من المواطنين وتدقيق أداء المنظومات وتوسيع نطاق الخدمات لتلبية متطلبات الجمهورية.',
        output: 'تطوير مستمر وتحليلات قياس الأثر المؤسسي'
      }
    ],

    // Impact & Partners
    impactTag: 'أرقام رسمية ومصداقية وطنية',
    impactTitle: 'أثر ملموس في القطاع العام <span class="gradient-text">وشراكات مؤسسية موثوقة</span>',
    impactSubtitle: 'تحقق DEFI نتائج ملموسة في القطاع الحكومي المصري مدعومة بمؤشرات رسمية وشراكات وزارية معتمدة.',
    partnersTitle: 'الشركاء والعملاء المؤسسيون الرسميون',
    partnerList: [
      {
        name: 'وزارة التربية والتعليم والتعليم الفني',
        arabicName: 'وزارة التربية والتعليم والتعليم الفني',
        acronym: 'MOE',
        category: 'شريك وزاري استراتيجي',
        scope: 'تطوير المنصات التعليمية وأنظمة الاختبارات الإلكترونية والبنية التحتية لإدارة العملية التعليمية.',
        verifiedStatus: 'عميل رسمي معتمد'
      },
      {
        name: 'مركز المعلومات ودعم اتخاذ القرار بمجلس الوزراء',
        arabicName: 'مركز المعلومات ودعم اتخاذ القرار بمجلس الوزراء',
        acronym: 'IDSC',
        category: 'شريك وطني تنفيذي',
        scope: 'بناء منصات دعم اتخاذ القرار التنفيذي وتجميع البيانات الوطنية وتتبع المؤشرات التنموية.',
        verifiedStatus: 'عميل رسمي معتمد'
      }
    ],

    // About Page
    aboutHeroTitle: 'ريادة التحول الرقمي لمصر المستقبل',
    aboutHeroSubtitle: 'تأسست شركة مصر الرقمية للاستثمار بموجب قرار رئيس الوزراء رقم 132 لسنة 2020 كشريك استراتيجي رائد في البنية المؤسسية للدولة المصرية.',
    aboutMandateHeading: 'المهام التأسيسية والرؤية الاستراتيجية',
    aboutMandateText: [
      'تأسست شركة مصر الرقمية للاستثمار (DEFI) بموجب قرار رئيس مجلس الوزراء رقم 132 لسنة 2020، لتسريع وتيرة تنفيذ الاستراتيجية الوطنية للتحول الرقمي تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) وهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA).',
      'في ظل تسارع التطور التكنولوجي، تحتاج المنظومة الحكومية المصرية إلى قواعد تقنية مؤسسية راسخة تدعم مئات الملايين من المعاملات السنوية للمواطنين مع الحفاظ الكامل على سيادة وأمن البيانات القومية.',
      'تضطلع DEFI بهذا الدور المحوري كحلقة وصل استراتيجية فريدة: تجمع بين أحدث الممارسات التكنولوجية العالمية وهندسة الخدمات المصغرة، وبين المعرفة المعمقة بالقوانين المصرية والإجراءات الحكومية والسيادية.'
    ],
    aboutGovernanceTitle: 'الحوكمة المؤسسية والامتثال الوطني',
    aboutGovernanceText: 'تعمل DEFI في إطار حوكمة ورقابة حكومية صارمة لضمان امتثال كافة المنصات المطورة لقوانين حماية البيانات المصرية والتعليمات السيادية ومعايير الجودة المعتمدة.',

    // Capabilities Page
    capHeroTitle: 'القدرات المؤسسية المتخصصة لتحول القطاع العام',
    capHeroSubtitle: 'ست ركائز هندسية معتمدة لتحديث الوزارات وأتمتة الإجراءات الحكومية المعقدة وحماية البنية التحتية للدولة.',
    capDetailPrompt: 'استكشف المخرجات والمنهجيات والأثر الاستراتيجي لكل ركيزة معمارية أدناه:',

    // Sectors Page
    sectorsHeroTitle: 'حلول مؤسسية لتمكين القطاعات الحيوية',
    sectorsHeroSubtitle: 'حلول وهندسة برمجية مثبتة مصممة خصيصاً لتلبية المتطلبات المحددة للمجالات الوطنية في جمهورية مصر العربية.',
    sectorsList: [
      {
        id: 'gov-admin',
        title: 'الإدارة الحكومية والخدمات العامة',
        tag: 'التحديث الجذري',
        description: 'رقمنة دورات العمل المشتركة بين الوزارات، وبناء بوابات حكومية موحدة، والقضاء على البيروقراطية من خلال هندسة مؤسسية مؤتمتة.',
        capabilitiesUsed: ['بنية الأعمال المؤسسية', 'بنية الحلول التقنية', 'حوكمة الجودة'],
        publicImpact: 'تقليص زمن إنجاز المعاملات وميكنة الموافقات المشتركة بين مختلف الجهات.',
        verifiedReference: 'مبادرات رقمنة الخدمات الحكومية'
      },
      {
        id: 'education',
        title: 'التعليم وبناء رأس المال البشري',
        tag: 'نطاق قومي واسع',
        description: 'هندسة منصات تعليمية رقمية مرنة، ومنظومات الاختبارات الإلكترونية وإدارة السجلات التعليمية الوطنية.',
        capabilitiesUsed: ['بنية الحلول التقنية', 'تشغيل تكنولوجيا المعلومات', 'تجربة المواطن'],
        publicImpact: 'خدمة ملايين الطلاب والمعلمين ببنية تحتية قوية تدعم أعداداً ضخمة متزامنة من المستخدمين.',
        verifiedReference: 'وزارة التربية والتعليم والتعليم الفني (MOE)'
      },
      {
        id: 'decision-support',
        title: 'دعم اتخاذ القرار الاستراتيجي',
        tag: 'ذكاء البيانات الوطنية',
        description: 'تطوير لوحات القيادة التنفيذية، ومحركات تتبع المؤشرات، ومنصات التقارير الاستراتيجية لصناع القرار في الدولة.',
        capabilitiesUsed: ['بنية الأعمال المؤسسية', 'بنية الحلول التقنية', 'إدارة المشاريع'],
        publicImpact: 'تمكين القيادات الحكومية ببيانات موثوقة لحظية ومؤشرات استشرافية تنموية.',
        verifiedReference: 'مركز المعلومات ودعم اتخاذ القرار بمجلس الوزراء (IDSC)'
      },
      {
        id: 'digital-infrastructure',
        title: 'البنية التحتية الرقمية والسجلات الوطنية',
        tag: 'الأساس القومي',
        description: 'بناء محاور تكامل البيانات الآمنة التي تربط السجلات الحكومية المتفرقة في مصدر وطني موحد وموثوق للمعلومات.',
        capabilitiesUsed: ['بنية الحلول التقنية', 'تشغيل تكنولوجيا المعلومات', 'حوكمة الجودة'],
        publicImpact: 'منع تكرار بيانات المواطنين وضمان الربط البرمجي البيني بين أكثر من 25 جهة حكومية.',
        verifiedReference: 'مبادرات التشغيل البيني للسجلات الوطنية'
      }
    ],

    // News Page
    newsHeroTitle: 'البيانات والأخبار الرسمية',
    newsHeroSubtitle: 'تحديثات مؤسسية موثقة، ومحطات للشراكات الاستراتيجية، وإنجازات التحول الرقمي القومي.',
    newsList: [
      {
        id: 'news-1',
        title: 'شركة مصر الرقمية للاستثمار تمضي قدماً في قيادة التحول الحكومي بموجب القرار 132 لسنة 2020',
        category: 'المهام المؤسسية',
        date: '2026',
        summary: 'تنفيذاً للتكليفات الصادرة بقرار رئيس مجلس الوزراء رقم 132 لسنة 2020، تواصل DEFI توسيع نطاق تنفيذ البنية المؤسسية عبر الوزارات المصرية.',
        readTime: '3 دقائق للقراءة',
        officialSource: 'المكتب الإعلامي لشركة DEFI'
      },
      {
        id: 'news-2',
        title: 'تعاون تقني استراتيجي مع وزارة التربية والتعليم ومركز معلومات مجلس الوزراء',
        category: 'شراكات وطنية',
        date: '2026',
        summary: 'تسليط الضوء على التعاون التقني المستمر مع الشركاء الوزاريين لتقديم استقرار فني للمنصات ومنظومات متطورة لدعم القرار.',
        readTime: '4 دقائق للقراءة',
        officialSource: 'التقرير المؤسسي السنوي لـ DEFI'
      },
      {
        id: 'news-3',
        title: 'إطلاق معايير البنية المؤسسية للربط والتكامل البيني الحكومي',
        category: 'الحوكمة التقنية',
        date: '2026',
        summary: 'تستعرض شركة مصر الرقمية للاستثمار المبادئ المعمارية الحاكمة ومواصفات الربط البيني الآمن لتكامل الخدمات الرقمية بين الجهات العامة.',
        readTime: '3 دقائق للقراءة',
        officialSource: 'إدارة البنية المؤسسية - DEFI'
      }
    ],

    // Careers Page
    careersHeroTitle: 'شارك في بناء الأسس الرقمية للوطن',
    careersHeroSubtitle: 'انضم إلى نخبة مهندسي التكنولوجيا المؤسسية في القرية الذكية وابتكر حلولاً رقمية تخدم ملايين المواطنين يومياً.',
    careersWhyDEFI: 'في DEFI، تساهم تصاميمك البرمجية والمعمارية مباشرة في تيسير حياة ملايين المواطنين في كافة ربوع مصر. نقدم بيئة هندسية وطنية هادفة وتحديات تقنية بمستوى الدولة وثقافة قوامها الإتقان والابتكار.',
    careersDomainsTitle: 'المسارات التخصصية والهندسية الرئيسية',
    careerDomains: [
      {
        id: 'ent-arch',
        title: 'البنية المؤسسية وهندسة الحلول',
        focusArea: 'المخططات والمعايير التقنية',
        description: 'تصميم أنظمة قومية واسعة النطاق وبروتوكولات الربط البيني وحلول التكامل السحابي للوزارات.',
        technologies: ['TOGAF', 'Microservices', 'API Gateways', 'Domain-Driven Design']
      },
      {
        id: 'cloud-ops',
        title: 'البنية السحابية وهندسة استقرار الأنظمة (SRE)',
        focusArea: 'الموثوقية والجاهزية على مدار الساعة',
        description: 'ضمان استقرار الأنظمة الحكومية الحيوية، والاستجابة الفورية للحوادث، والنشر الآمن المستمر دون توقف.',
        technologies: ['Kubernetes', 'Sovereign Cloud', 'Observability', 'Disaster Recovery']
      },
      {
        id: 'cx-design',
        title: 'تصميم تجربة المواطن (CX)',
        focusArea: 'خدمات حكومية متمحورة حول الإنسان',
        description: 'ابتكار تجارب استخدام رقمية سلسة وشاملة تعمل بكفاءة على كافة الأجهزة وتلبي احتياجات جميع المواطنين.',
        technologies: ['Design Systems', 'WCAG 2.1 AA', 'User Journey Mapping', 'Prototyping']
      },
      {
        id: 'gov-sec',
        title: 'هندسة الجودة والامتثال السيادي',
        focusArea: 'الأمان والامتثال للمعايير القياسية',
        description: 'تنفيذ أنظمة الاختبار المؤتمت، وتدقيق الثغرات الأمنية، والتحقق من التوافق التام مع المعايير السيادية للدولة.',
        technologies: ['Automated QA', 'Data Governance', 'Penetration Testing', 'ISO Benchmarks']
      }
    ],
    careersCtaText: 'هل ترغب في المساهمة في رسم المستقبل الرقمي لمصر؟ يسعدنا استلام سيرتك الذاتية وملف أعمالك عبر البريد الرسمي info@defi.com.eg.',

    // Contact Page
    contactHeroTitle: 'تواصل مع القيادات التنفيذية لـ DEFI',
    contactHeroSubtitle: 'تواصل مع فرق البنية المؤسسية والتحول الرقمي في مقرنا الرئيسي بالقرية الذكية.',
    contactHqTitle: 'المقر الرئيسي والمكاتب التنفيذية',
    contactHqAddress: 'مبنى B145، القرية الذكية، طريق القاهرة - الإسكندرية الصحراوي، الجيزة، جمهورية مصر العربية',
    contactEmailTitle: 'الاستفسارات والمراسلات المؤسسية الرسمية',
    contactOfficialEmail: 'info@defi.com.eg',
    contactFormTitle: 'طلب استشارة أو شراكة مؤسسية',
    contactFormIntro: 'أرسل استفسارك لبحث مشروعات البنية المؤسسية، أو ميكنة وتحديث الوزارات، أو الشراكات الاستراتيجية.',
    formLabels: {
      fullName: 'الاسم الكامل',
      organization: 'الجهة الحكومية / الوزارة / المؤسسة',
      email: 'البريد الإلكتروني المؤسسي الرسمي',
      subject: 'موضوع الاستشارة / مجال الاستفسار',
      message: 'تفاصيل المشروع أو نطاق الاستفسار',
      submit: 'إرسال طلب الاستشارة',
      submitting: 'جارٍ إرسال الطلب...',
      successMessage: 'شكراً لتواصلكم. تم استلام طلب الاستشارة وتوجيهه للإدارة المختصة، وسيتم الرد خلال 24 ساعة عمل.',
      requiredNote: 'الحقول المشار إليها بعلامة * إلزامية للمراسلات المؤسسية الرسمية.'
    },

    // Footer & Common
    footerAboutText: 'شركة مصر الرقمية للاستثمار (DEFI) — تأسست بموجب قرار رئيس مجلس الوزراء رقم 132 لسنة 2020. الشريك التنفيذي للتحول الرقمي والبنية المؤسسية لدعم وزارة الاتصالات وهيئة إيتيدا.',
    footerQuickLinksTitle: 'التنقل المؤسسي',
    footerCapabilitiesTitle: 'القدرات والخدمات',
    footerContactTitle: 'المقر والاتصال',
    footerDecreeBadge: 'قرار رئيس الوزراء رقم 132 / 2020',
    copyrightNotice: '© 2026 شركة مصر الرقمية للاستثمار (DEFI). جميع الحقوق محفوظة.',
    allRightsReserved: 'شركة مصر الرقمية للاستثمار — القرية الذكية، الجيزة، مصر',

    // 404 Page
    notFoundTitle: 'الصفحة غير موجودة',
    notFoundDesc: 'لم نتمكن من العثور على الصفحة المطلوبة على بوابة DEFI. يرجى العودة إلى الصفحة الرئيسية أو استكشاف القدرات المؤسسية.',
    notFoundReturnHome: 'العودة للصفحة الرئيسية'
  }
};
