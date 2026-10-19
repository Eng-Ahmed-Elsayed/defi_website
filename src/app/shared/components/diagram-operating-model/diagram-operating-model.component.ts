import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

interface BlueprintMeta {
  phase: string;
  title: string;
  status: string;
  stakeholders: string;
  standard: string;
  deliverable: string;
}

@Component({
  selector: 'app-diagram-operating-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-operating-model.component.html',
  styleUrl: './diagram-operating-model.component.css'
})
export class DiagramOperatingModelComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  readonly currentStep = signal<number>(1);
  readonly isProgressionPlaying = signal<boolean>(false);

  private autoCycleTimer: any;
  private userInteracted = false;
  private interactionTimeout: any;

  readonly progressWidth = computed(() => `${this.currentStep() * 20}%`);

  readonly currentBlueprint = computed<BlueprintMeta>(() => {
    const isAr = this.lang.isArabic();
    const step = this.currentStep();
    const blueprints: Record<number, BlueprintMeta> = {
      1: {
        phase: isAr ? 'المرحلة 01 الهندسية' : 'PHASE 01 BLUEPRINT',
        title: isAr ? 'التقييم المؤسسي والمواءمة الاستراتيجية' : 'Institutional Assessment & Strategic Alignment',
        status: isAr ? 'بوابة الجودة: تم التحقق والاعتماد' : 'Quality Gate: Validated & Approved',
        stakeholders: isAr ? 'رئاسة مجلس الوزراء · قيادات الوزارات · هيئة إيتيدا' : 'Executive Cabinet · Ministerial Leadership · ITIDA',
        standard: isAr ? 'معايير حوكمة القرار 132/2020 (Gate A)' : 'Decree 132/2020 Compliance Gate A',
        deliverable: isAr ? 'مخطط التحول الرقمي ومصفوفة القدرات' : 'National Digital Transformation Roadmap'
      },
      2: {
        phase: isAr ? 'المرحلة 02 الهندسية' : 'PHASE 02 BLUEPRINT',
        title: isAr ? 'التصميم وهندسة الحلول السيادية المتكاملة' : 'Sovereign Solution Architecture & Blueprinting',
        status: isAr ? 'بوابة الجودة: اعتماد التصميم المعماري' : 'Quality Gate: Architecture Approved',
        stakeholders: isAr ? 'مهندسو البرمجيات · خبراء الأمن السيبراني · قطاع البنية التحتية' : 'Enterprise Architects · Cybersecurity Leads · Infrastructure Teams',
        standard: isAr ? 'معايير الربط البيني والبيانات المفتوحة' : 'National Interoperability & Data Sovereignty Specs',
        deliverable: isAr ? 'المواصفات التقنية وواجهات برمجة التطبيقات APIs' : 'Multi-Tier System Blueprint & API Specifications'
      },
      3: {
        phase: isAr ? 'المرحلة 03 الهندسية' : 'PHASE 03 BLUEPRINT',
        title: isAr ? 'التكامل والتطبيق وربط السجلات الوطنية' : 'Enterprise Integration & National Registry Sync',
        status: isAr ? 'بوابة الجودة: اجتياز اختبارات التكامل' : 'Quality Gate: Integration Cleared',
        stakeholders: isAr ? 'فرق التطوير · إدارات تكنولوجيا المعلومات بالوزارات' : 'Engineering Squads · Ministerial IT Departments',
        standard: isAr ? 'بروتوكول التشفير المتبادل mTLS 1.3' : 'Zero-Trust mTLS 1.3 & API Gateway Guardrails',
        deliverable: isAr ? 'منصة الخدمات المفعلة وربط السجل المدني' : 'Live Integrated Services & Active Registry Connectors'
      },
      4: {
        phase: isAr ? 'المرحلة 04 الهندسية' : 'PHASE 04 BLUEPRINT',
        title: isAr ? 'التشغيل وحماية الأنظمة واستمرارية الخدمة' : 'Mission-Critical 24/7 Operations & Security',
        status: isAr ? 'بوابة الجودة: الجاهزية التشغيلية القصوى' : 'Quality Gate: Active 24/7 SRE Uptime',
        stakeholders: isAr ? 'مركز إدارة العمليات (NOC) · مركز الدفاع السيبراني (SOC)' : 'Network Operations Center · Security Operations Center',
        standard: isAr ? 'معيار الجاهزية 99.999% ومراكز البيانات Tier IV' : 'Tier-IV High Availability & Disaster Recovery Protocol',
        deliverable: isAr ? 'رصد مستمر وتقارير الأداء اللحظية' : '24/7 Monitoring Dashboard & Rapid Incident Runbooks'
      },
      5: {
        phase: isAr ? 'المرحلة 05 الهندسية' : 'PHASE 05 BLUEPRINT',
        title: isAr ? 'الارتقاء بتجربة المواطن والتطوير المستمر' : 'Citizen Experience Optimization & Continuous Evolution',
        status: isAr ? 'بوابة الجودة: تحقيق مؤشرات الرضا القومي' : 'Quality Gate: Citizen Satisfaction Verified',
        stakeholders: isAr ? 'المواطنون والمستفيدون · مسؤولو تجربة المستخدم · لجان التطوير' : 'Egyptian Citizens · CX Researchers · Government Service Committees',
        standard: isAr ? 'مؤشر الرضا الحكومي والشمول الرقمي' : 'National Digital Inclusion & Citizen Experience Index',
        deliverable: isAr ? 'تحديثات الخدمات الدورية وتوسيع المنظومة' : 'Iterative Service Enhancements & Nationwide Scale'
      }
    };
    return blueprints[step] || blueprints[1];
  });

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted && !this.isProgressionPlaying()) {
            const next = (this.currentStep() % 5) + 1;
            this.currentStep.set(next);
          }
        }, 4500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
  }

  setStep(step: number, manual = false): void {
    this.currentStep.set(step);
    if (manual) {
      this.userInteracted = true;
      if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
      this.interactionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }

  playProgression(): void {
    if (this.isProgressionPlaying()) return;
    this.isProgressionPlaying.set(true);

    let stepIdx = 1;
    this.currentStep.set(stepIdx);

    const interval = setInterval(() => {
      stepIdx++;
      if (stepIdx <= 5) {
        this.currentStep.set(stepIdx);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          this.isProgressionPlaying.set(false);
        }, 1200);
      }
    }, 800);
  }
}
