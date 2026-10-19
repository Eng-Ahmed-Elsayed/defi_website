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
  throughput: string;
  latency: string;
  uptime: string;
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
  readonly isPinging = signal<boolean>(false);
  readonly pingResult = signal<string | null>(null);

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
      descEn: 'Serving the central ministries, sovereign data registers, and 24+ million citizens with high-concurrency request routing and instant civil identification.',
      descAr: 'خدمة الوزارات المركزية والسجلات السيادية وأكثر من 24 مليون مواطن مع توجيه فائق السرعة للمعاملات والتحقق اللحظي من الهوية.',
      throughput: '54,200 req/s',
      latency: '1.8 ms',
      uptime: '99.998%',
      entitiesEn: '25+ Bodies',
      entitiesAr: '+25 جهة ومؤسسة',
      secEn: 'End-to-End HSM Encryption · Decree 132/2020 Compliance',
      secAr: 'تشفير شامل بأجهزة HSM · التزام بالقرار 132/2020'
    },
    alex: {
      badgeEn: 'NORTHERN GATEWAY',
      badgeAr: 'البوابة الشمالية',
      titleEn: 'Alexandria & Delta Maritime Axis',
      titleAr: 'محور الإسكندرية والدلتا البحري واللوجستي',
      descEn: 'Interconnecting Mediterranean sea customs, agricultural registry databases, and public services across Lower Egypt governorates.',
      descAr: 'ربط الجمارك البحرية المتوسطية وقواعد بيانات السجل الزراعي والخدمات الحكومية بمحافظات الدلتا والوجه البحري.',
      throughput: '28,600 req/s',
      latency: '2.4 ms',
      uptime: '99.999%',
      entitiesEn: '18 Authorities',
      entitiesAr: '18 هيئة ومصلحة',
      secEn: 'Zero-Trust Maritime Border & Customs Encryption',
      secAr: 'تشفير المنافذ والجمارك البحرية بمعمارية Zero-Trust'
    },
    canal: {
      badgeEn: 'STRATEGIC CORRIDOR',
      badgeAr: 'الممر الاستراتيجي',
      titleEn: 'Suez Canal & Free Zone Cyber Spine',
      titleAr: 'المحور السيادي لقناة السويس والمناطق الحرة',
      descEn: 'Ultra-high-throughput encrypted backbone supporting global maritime logistics, port clearance, and smart economic zone infrastructure.',
      descAr: 'عمود فقري فائق السرعة لدعم اللوجستيات الملاحية العالمية، والتخليص الجمركي الفوري، والبنية التحتية للمنطقة الاقتصادية.',
      throughput: '36,400 req/s',
      latency: '1.9 ms',
      uptime: '100.00%',
      entitiesEn: '12 Strategic Bodies',
      entitiesAr: '12 جهة استراتيجية',
      secEn: 'Cryptographic Port Clearance & Military-Grade Integrity',
      secAr: 'تخليص ملاحي مشفر وجاهزية فائقة للأمان'
    },
    upper: {
      badgeEn: 'REGIONAL DEVELOPMENT',
      badgeAr: 'التنمية الإقليمية',
      titleEn: 'Upper Egypt Sovereign Service Spine',
      titleAr: 'محور صعيد مصر للتنمية والخدمات اللامركزية',
      descEn: 'Decentralized high-availability data distribution serving Assiut, Sohag, Qena, Luxor, and Aswan with localized edge caching.',
      descAr: 'توزيع لامركزي فائق الجاهزية للبيانات والخدمات يخدم محافظات أسيوط، وسوهاج، وقنا، والأقصر، وأسوان بالتخزين المؤقت اللحظي.',
      throughput: '22,800 req/s',
      latency: '3.1 ms',
      uptime: '99.995%',
      entitiesEn: '14 Governorates',
      entitiesAr: '14 محافظة وجهة',
      secEn: 'Decentralized Edge Redundancy & Sovereign Link Failover',
      secAr: 'أنظمة لا مركزية بديلة وضمان استمرارية الربط السيادي'
    },
    nac: {
      badgeEn: 'GOV CLOUD CORE',
      badgeAr: 'سحابة الحكومة المركزية',
      titleEn: 'New Administrative Capital Tier IV Cloud',
      titleAr: 'سحابة العاصمة الإدارية الجديدة (Tier-IV)',
      descEn: 'The sovereign core datacenter hosting inter-agency microservices, immutable digital ledgers, and national enterprise architecture orchestration.',
      descAr: 'مركز البيانات السيادي المركزي الذي يستضيف الخدمات الحكومية المشتركة، والسجلات الرقمية غير القابلة للتعديل، وهندسة الربط الوطني.',
      throughput: '68,900 req/s',
      latency: '0.8 ms',
      uptime: '99.999%',
      entitiesEn: 'All Ministries',
      entitiesAr: 'كافة الوزارات والهيئات',
      secEn: 'Tier-IV Disaster Recovery · Hardware Root of Trust',
      secAr: 'تعافي من الكوارث Tier-IV · جذر ثقة عتادي آمن'
    }
  };

  readonly currentRegionData = computed<RegionalHubData>(() => {
    return this.regions[this.selectedRegion()] || this.regions['cairo'];
  });

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        let regIndex = 0;
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted) {
            regIndex = (regIndex + 1) % this.regionKeys.length;
            this.selectedRegion.set(this.regionKeys[regIndex]);
          }
        }, 5500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
  }

  selectRegion(key: string, manual = false): void {
    this.selectedRegion.set(key);
    this.pingResult.set(null);
    if (manual) {
      this.userInteracted = true;
      if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
      this.interactionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }

  pingHub(): void {
    if (this.isPinging()) return;
    this.isPinging.set(true);
    this.pingResult.set(null);

    setTimeout(() => {
      const randomLatency = (Math.random() * 1.5 + 1.2).toFixed(2);
      const isAr = this.lang.isArabic();
      this.pingResult.set(isAr ? `زمن الاستجابة: ${randomLatency}ms (آمن ✓)` : `Latency: ${randomLatency}ms (Secure ✓)`);
      this.isPinging.set(false);
    }, 600);
  }
}
