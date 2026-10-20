import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

interface ChecklistItem {
  labelEn: string;
  labelAr: string;
  detailEn: string;
  detailAr: string;
}

interface InteropStageSpec {
  stageBadge: string;
  titleEn: string;
  titleAr: string;
  securityStandard: string;
  descriptionEn: string;
  descriptionAr: string;
  protocol: string;
  governanceStandard: string;
  authorityEn: string;
  authorityAr: string;
  checklist: ChecklistItem[];
}

@Component({
  selector: 'app-diagram-interop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-interop.component.html',
  styleUrl: './diagram-interop.component.css'
})
export class DiagramInteropComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  readonly currentStage = signal<number>(1);
  readonly activeStages = signal<number[]>([1]);
  readonly stageBadges = signal<string[]>(['Active', 'Ready', 'Ready', 'Ready', 'Ready']);
  readonly isRunningTest = signal<boolean>(false);

  private autoCycleTimer: any;
  private userInteracted = false;
  private interactionTimeout: any;

  readonly stageSpecs: Record<number, InteropStageSpec> = {
    1: {
      stageBadge: 'STAGE 01 · CITIZEN INBOUND',
      titleEn: 'Citizen Touchpoint & Inbound Authentication',
      titleAr: 'قنوات المواطن والتحقق الأولي',
      securityStandard: 'Mutual TLS 1.3 · Zero-Trust',
      descriptionEn: 'Unified citizen access through the Digital Egypt portal and authorized mobile applications, authenticating requests via national security frameworks before transmission to government integration buses.',
      descriptionAr: 'منظومة وصول المواطنين الموحدة عبر بوابة مصر الرقمية والتطبيقات الذكية، مع التحقق الأمني المتبادل قبل التوجيه إلى ناقل الخدمات الحكومية.',
      protocol: 'RESTful HTTPS/3 · OpenID Connect Government Profile',
      governanceStandard: 'National Cybersecurity Authority Standards & Decree 132/2020',
      authorityEn: 'Digital Egypt Initiative & Authorized Public Channels',
      authorityAr: 'منظومة مصر الرقمية والقنوات المعتمدة',
      checklist: [
        {
          labelEn: 'Citizen Identity Attested',
          labelAr: 'توثيق هوية المواطن عبر بوابة مصر الرقمية',
          detailEn: 'Multi-factor authentication validated against government trust providers',
          detailAr: 'مطابقة التحقق متعدد العناصر مع جهات التوثيق الحكومية الرسمية'
        },
        {
          labelEn: 'Encrypted Request Packaging',
          labelAr: 'تشفير حزمة الطلب بالكامل',
          detailEn: 'Standardized payload schema complying with Egyptian e-Gov standards',
          detailAr: 'تنسيق الحزم الرقمية وفق المعايير المصرية للحكومة الإلكترونية'
        },
        {
          labelEn: 'Audited Edge Logging',
          labelAr: 'تسجيل العمليات في النطاق الحدودي',
          detailEn: 'Time-stamped non-repudiation audit entry logged at edge entry',
          detailAr: 'توثيق زمني غير قابل للتعديل عند نقطة الدخول السيادية'
        }
      ]
    },
    2: {
      stageBadge: 'STAGE 02 · GATEWAY ORCHESTRATION',
      titleEn: 'DEFI Sovereign Gateway & Policy Orchestration',
      titleAr: 'بوابة DEFI السيادية وإدارة السياسات',
      securityStandard: 'Enterprise API Gateway & WAF Inspection',
      descriptionEn: 'The central DEFI interoperability gateway acts as Egypt\'s national architectural proxy, inspecting incoming requests, verifying cryptographic digital signatures, and routing data along authorized ministerial corridors.',
      descriptionAr: 'بوابة الربط السيادي التابعة لشركة DEFI كمنصة وسيطة تفحص الطلبات وتتحقق من التوقيع الرقمي وتوجه المعاملات عبر المسارات الوزارية المصرح بها.',
      protocol: 'Enterprise Service Bus (ESB) · Standardized API Mediation',
      governanceStandard: 'National Interoperability Framework (Egyptian GSB)',
      authorityEn: 'Digital Egypt For Investment (DEFI Executive Backbone)',
      authorityAr: 'شركة مصر الرقمية للاستثمار (الذراع المعماري والتنفيذي)',
      checklist: [
        {
          labelEn: 'Cryptographic Signature Verified',
          labelAr: 'التحقق من التوقيع الرقمي والشهادات السيادية',
          detailEn: 'Validation against the national public key infrastructure (PKI)',
          detailAr: 'المطابقة مع البنية التحتية القومية للمفاتيح الرقمية (PKI)'
        },
        {
          labelEn: 'Inter-Agency Routing Governance',
          labelAr: 'حوكمة التوجيه بين الوزارات',
          detailEn: 'Enforcement of ministerial data-sharing agreements and access policies',
          detailAr: 'تطبيق اتفاقيات مشاركة البيانات وسياسات الوصول المعتمدة'
        },
        {
          labelEn: 'Data Sovereignty Boundary Control',
          labelAr: 'ضمان السيادة الرقمية وعدم خروج البيانات',
          detailEn: 'Guarantee that all routing remains within national sovereign networks',
          detailAr: 'حظر أي مسارات خارجية وحصر المعاملات داخل الشبكة الوطنية'
        }
      ]
    },
    3: {
      stageBadge: 'STAGE 03 · REGISTRY SYNCHRONIZATION',
      titleEn: 'National Base Registers Synchronization',
      titleAr: 'الربط اللحظي مع السجلات الوطنية الموحدة',
      securityStandard: 'Strict Database Attestation & Secure Interconnect',
      descriptionEn: 'Real-time query verification against Egypt\'s sovereign base registries—including civil registration, national identification, commercial registers, and land ownership—preventing data duplication.',
      descriptionAr: 'التحقق اللحظي مع السجلات الأساسية للدولة (الأحوال المدنية، السجل التجاري، التوثيق والأراضي) لمنع ازدواجية البيانات وضمان التكامل.',
      protocol: 'Event-Driven Synchronization · Secure Query Messaging',
      governanceStandard: 'Supreme Council for Digital Society Interoperability Mandate',
      authorityEn: 'Civil Registration Authority & Ministry of Justice Registries',
      authorityAr: 'مصلحة الأحوال المدنية والسجلات القومية المعتمدة',
      checklist: [
        {
          labelEn: 'Single Source of Truth Validated',
          labelAr: 'التحقق من المصدر الرسمي الموحد للمعلومة',
          detailEn: 'Direct integration eliminating fragmented, outdated ministerial records',
          detailAr: 'ربط مباشر يقضي على ازدواجية وتناقض السجلات الوزارية'
        },
        {
          labelEn: 'Privacy & Role-Based Masking',
          labelAr: 'حماية الخصوصية وتصنيف البيانات',
          detailEn: 'Minimization of sensitive citizen data shared across authorities',
          detailAr: 'قصر مشاركة البيانات على الحدود الضرورية لكل معاملة رسمية'
        },
        {
          labelEn: 'Atomic Consistency Guaranteed',
          labelAr: 'ضمان التوافق التام للمعاملات الموزعة',
          detailEn: 'Two-phase synchronization ensuring transactional data integrity',
          detailAr: 'معاملات ذرية تضمن عدم فقد أو تشتت السجلات بين المنظومات'
        }
      ]
    },
    4: {
      stageBadge: 'STAGE 04 · MINISTERIAL EXECUTION',
      titleEn: 'Ministerial Core System Workflow Execution',
      titleAr: 'تنفيذ الإجراءات بأنظمة الوزارة المعنية',
      securityStandard: 'Enterprise Workflow Automation & Service Bus',
      descriptionEn: 'Target ministerial platforms—such as the Ministry of Education (MOE) examination engines or The Cabinet IDSC intelligence portals—process the transaction and commit administrative actions.',
      descriptionAr: 'منظومات الوزارات المستفيدة (مثل منظومة الامتحانات بوزارة التربية والتعليم أو منصات مركز معلومات الوزراء) لمعالجة المعاملة واعتمادها.',
      protocol: 'Asynchronous Workflow Orchestration · Service SLA Enforcement',
      governanceStandard: 'Ministerial Service Level Agreements & Public Modernization',
      authorityEn: 'Target Ministries (MOE, Cabinet IDSC, Public Authorities)',
      authorityAr: 'الوزارات والهيئات العامة المعنية بالخدمة',
      checklist: [
        {
          labelEn: 'Ministerial Workflow Fulfilled',
          labelAr: 'إتمام دورة العمل الوزارية بالكامل',
          detailEn: 'Automated processing replacing legacy manual administrative steps',
          detailAr: 'معالجة مؤتمتة متكاملة تنهي الإجراءات الورقية التقليدية'
        },
        {
          labelEn: 'Standardized SLA Tracking',
          labelAr: 'متابعة مؤشرات الأداء وجودة الخدمة',
          detailEn: 'Monitoring compliance with national citizen-service delivery standards',
          detailAr: 'قياس دقيق لسرعة وجودة تقديم الخدمة الحكومية للمواطن'
        },
        {
          labelEn: 'Departmental Confirmation Issued',
          labelAr: 'إصدار الاعتماد والتأكيد الإداري',
          detailEn: 'Digital confirmation token generated for inter-agency continuity',
          detailAr: 'توليد إشعار الاعتماد الرسمي لمتابعة المعاملة بين الهيئات'
        }
      ]
    },
    5: {
      stageBadge: 'STAGE 05 · SOVEREIGN AUDIT & ARCHIVE',
      titleEn: 'Sovereign Infrastructure Commit & Immutable Audit',
      titleAr: 'التوثيق الرقمي النهائي في السحابة السيادية',
      securityStandard: 'Tamper-Evident Sovereign Archival & Tier-IV Resilience',
      descriptionEn: 'The completed inter-agency transaction is sealed into Egypt\'s sovereign government cloud infrastructure with a tamper-evident audit record, ensuring total legal transparency and 24/7 service continuity.',
      descriptionAr: 'توثيق المعاملة الحكومية المكتملة وحفظها بالسحابة الحكومية السيادية بسجل تدقيق محصن وموثق رسمياً لضمان الشفافية واستمرارية العمل.',
      protocol: 'Cryptographic Ledger Archival · Secure Redundant Storage',
      governanceStandard: 'Prime Minister Decree No. 132/2020 Compliance & ISO 27001',
      authorityEn: 'National Data Centers & DEFI Operations Command',
      authorityAr: 'مراكز البيانات القومية وإدارة العمليات بشركة DEFI',
      checklist: [
        {
          labelEn: 'Immutable Audit Log Sealed',
          labelAr: 'توثيق سجل الرقابة والحوكمة غير القابل للتعديل',
          detailEn: 'Cryptographically sealed audit trail accessible to state review bodies',
          detailAr: 'سجل رقابي مشفر متاح لجهات المتابعة والحوكمة الحكومية'
        },
        {
          labelEn: 'High-Availability Replication',
          labelAr: 'حفظ متكرر عالي الجاهزية بمراكز البيانات',
          detailEn: 'Multi-datacenter redundancy guaranteeing disaster recovery readiness',
          detailAr: 'تكرار متزامن متعدد المراكز لضمان استمرارية العمل دون انقطاع'
        },
        {
          labelEn: 'End-to-End Delivery Notification',
          labelAr: 'إشعار إتمام الخدمة للمواطن والجهة',
          detailEn: 'Real-time notification routed back to the citizen touchpoint',
          detailAr: 'تأكيد فوري بالاستلام والاعتماد يصل لقناة المواطن والجهة المعنية'
        }
      ]
    }
  };

  readonly activeStageData = computed(() => {
    return this.stageSpecs[this.currentStage()] || this.stageSpecs[1];
  });

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        // Subtle auto-step cycle every 6 seconds if user hasn't manually interacted
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted && !this.isRunningTest()) {
            const next = (this.currentStage() % 5) + 1;
            this.currentStage.set(next);
            this.activeStages.set([next]);
          }
        }, 6000);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
  }

  selectStage(stageNum: number, manual = false): void {
    this.currentStage.set(stageNum);
    this.activeStages.set([stageNum]);

    if (manual) {
      this.userInteracted = true;
      if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
      this.interactionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }

  triggerTest(): void {
    if (this.isRunningTest()) return;
    this.isRunningTest.set(true);
    this.userInteracted = true;

    // Step through the 5 stages sequentially to demonstrate the flow
    let stage = 1;
    this.currentStage.set(stage);
    this.activeStages.set([stage]);

    const stepInterval = setInterval(() => {
      stage++;
      if (stage <= 5) {
        this.currentStage.set(stage);
        this.activeStages.update(prev => [...prev, stage]);
      } else {
        clearInterval(stepInterval);
        this.isRunningTest.set(false);
      }
    }, 1200);
  }
}
