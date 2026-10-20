import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

interface RegionalHubData {
  badgeEn: string;
  badgeAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  scopeEn: string;
  scopeAr: string;
  frameworkEn: string;
  frameworkAr: string;
  readinessEn: string;
  readinessAr: string;
  entitiesEn: string;
  entitiesAr: string;
  secEn: string;
  secAr: string;
}

@Component({
  selector: 'app-national-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './national-grid.component.html',
  styleUrl: './national-grid.component.css'
})
export class NationalGridComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  readonly selectedRegion = signal<string>('cairo');
  readonly isInspecting = signal<boolean>(false);
  readonly inspectionResult = signal<string | null>(null);

  private autoCycleTimer: any;
  private userInteracted = false;
  private interactionTimeout: any;

  readonly regionKeys = ['cairo', 'alex', 'canal', 'upper', 'nac'];

  readonly regions: Record<string, RegionalHubData> = {
    cairo: {
      badgeEn: 'CENTRAL SPINE',
      badgeAr: 'المحور المركزي',
      titleEn: 'Greater Cairo Operations Core',
      titleAr: 'مركز العمليات الرئيسي بالقاهرة الكبرى',
      descEn: 'Serving the central ministries, sovereign data registers, and public authorities with standardized request routing, national identity verification, and multi-agency coordination.',
      descAr: 'خدمة الوزارات المركزية والسجلات السيادية والهيئات العامة بالربط المعياري الموحد والتحقق من الهوية والتنسيق المؤسسي المشترك.',
      scopeEn: 'National Executive Core',
      scopeAr: 'المقر السيادي والتنفيذي',
      frameworkEn: 'Decree 132/2020',
      frameworkAr: 'قرار ١٣٢ / ٢٠٢٠',
      readinessEn: '24/7 Operations',
      readinessAr: 'تشغيل مستمر ٢٤/٧',
      entitiesEn: '25+ Public Bodies',
      entitiesAr: '+25 جهة ومؤسسة',
      secEn: 'Sovereign Cryptographic Architecture · Decree 132/2020 Compliance',
      secAr: 'معمارية تشفير سيادية متكاملة · التزام تام بالقرار ١٣٢ / ٢٠٢٠'
    },
    alex: {
      badgeEn: 'NORTHERN GATEWAY',
      badgeAr: 'البوابة الشمالية',
      titleEn: 'Alexandria & Delta Maritime Axis',
      titleAr: 'محور الإسكندرية والدلتا اللوجستي والبحري',
      descEn: 'Interconnecting Mediterranean sea customs, agricultural registry databases, and public services across Lower Egypt governorates.',
      descAr: 'ربط الجمارك البحرية المتوسطية وقواعد بيانات السجل الزراعي والخدمات الحكومية بمحافظات الدلتا والوجه البحري.',
      scopeEn: 'Lower Egypt Axis',
      scopeAr: 'محافظات الوجه البحري',
      frameworkEn: 'Customs & Agro GSB',
      frameworkAr: 'معايير الربط الجمركي والزراعي',
      readinessEn: 'Continuous Resilience',
      readinessAr: 'استمرارية عالية الجاهزية',
      entitiesEn: '18 Authorities',
      entitiesAr: '١٨ هيئة ومصلحة',
      secEn: 'Port Logistics & Customs Integration Framework',
      secAr: 'منظومة التكامل والربط اللوجستي والجمركي'
    },
    canal: {
      badgeEn: 'STRATEGIC CORRIDOR',
      badgeAr: 'الممر الاستراتيجي',
      titleEn: 'Suez Canal & Free Zone Digital Corridor',
      titleAr: 'المحور السيادي لقناة السويس والمناطق الاقتصادية',
      descEn: 'Encrypted backbone supporting global maritime logistics, port clearance, and economic zone institutional infrastructure.',
      descAr: 'عمود فقري موثق لدعم اللوجستيات الملاحية، والتخليص الجمركي الموحد، والبنية المؤسسية للمنطقة الاقتصادية.',
      scopeEn: 'Economic Zone Spine',
      scopeAr: 'نطاق المنطقة الاقتصادية',
      frameworkEn: 'Maritime GSB Protocol',
      frameworkAr: 'بروتوكول الربط الملاحي الموحد',
      readinessEn: 'Mission-Critical Ops',
      readinessAr: 'عمليات حيوية مستمرة',
      entitiesEn: '12 Strategic Entities',
      entitiesAr: '١٢ جهة استراتيجية',
      secEn: 'Maritime Security & Institutional Compliance',
      secAr: 'أمن البيانات الملاحية والتوافق المؤسسي'
    },
    upper: {
      badgeEn: 'REGIONAL DEVELOPMENT',
      badgeAr: 'التنمية الإقليمية',
      titleEn: 'Upper Egypt Sovereign Service Spine',
      titleAr: 'محور صعيد مصر للخدمات اللامركزية',
      descEn: 'Decentralized high-availability data distribution serving Assiut, Sohag, Qena, Luxor, and Aswan with localized edge reliability.',
      descAr: 'توزيع لامركزي عالي الجاهزية للبيانات والخدمات يخدم محافظات أسيوط، وسوهاج، وقنا، والأقصر، وأسوان باستمرارية كاملة.',
      scopeEn: 'Upper Egypt Governorates',
      scopeAr: 'محافظات الصعيد والجنوب',
      frameworkEn: 'Regional Edge Standards',
      frameworkAr: 'معايير النطاق الإقليمي الموزع',
      readinessEn: 'Full Redundancy',
      readinessAr: 'جاهزية وتكرار كامل',
      entitiesEn: '14 Governorates',
      entitiesAr: '١٤ محافظة وجهة',
      secEn: 'Decentralized Edge Redundancy & Sovereign Failover',
      secAr: 'جاهزية بديلة وضمان استمرارية الربط السيادي'
    },
    nac: {
      badgeEn: 'GOV CLOUD CORE',
      badgeAr: 'سحابة الحكومة المركزية',
      titleEn: 'New Administrative Capital Sovereign Cloud Core',
      titleAr: 'سحابة العاصمة الإدارية الجديدة الموحدة',
      descEn: 'The central government datacenter core hosting inter-agency enterprise services, sovereign base registers, and national digital architecture.',
      descAr: 'مركز البيانات السيادي المركزي الذي يستضيف المنظومات المشتركة بين الوزارات والسجلات القومية الموحدة.',
      scopeEn: 'Government Cloud Core',
      scopeAr: 'السحابة الحكومية الموحدة',
      frameworkEn: 'Sovereign Architecture',
      frameworkAr: 'معايير البنية السيادية',
      readinessEn: 'Tier-IV Redundancy',
      readinessAr: 'جاهزية مراكز البيانات Tier-IV',
      entitiesEn: 'All Ministries',
      entitiesAr: 'كافة الوزارات والهيئات',
      secEn: 'Hardware Root of Trust & Sovereign Data Governance',
      secAr: 'جذر ثقة عتادي وحوكمة بيانات سيادية'
    }
  };

  readonly currentRegionData = computed(() => {
    return this.regions[this.selectedRegion()] || this.regions['cairo'];
  });

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        // Subtle auto-step cycle every 6.5s when not interacted
        let cycleIdx = 0;
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted) {
            cycleIdx = (cycleIdx + 1) % this.regionKeys.length;
            this.selectedRegion.set(this.regionKeys[cycleIdx]);
          }
        }, 6500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
  }

  selectRegion(regionKey: string, manual = false): void {
    this.selectedRegion.set(regionKey);
    this.inspectionResult.set(null);

    if (manual) {
      this.userInteracted = true;
      if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
      this.interactionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }

  inspectHub(): void {
    if (this.isInspecting()) return;
    this.isInspecting.set(true);

    setTimeout(() => {
      this.isInspecting.set(false);
      const isAr = this.lang.isArabic();
      this.inspectionResult.set(
        isAr ? 'تم التحقق من ربط النطاق الإقليمي' : 'Regional Scope Verified'
      );
      setTimeout(() => this.inspectionResult.set(null), 4000);
    }, 700);
  }
}
