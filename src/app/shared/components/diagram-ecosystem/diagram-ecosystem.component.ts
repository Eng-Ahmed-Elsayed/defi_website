import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-diagram-ecosystem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-ecosystem.component.html',
  styleUrl: './diagram-ecosystem.component.css'
})
export class DiagramEcosystemComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  readonly activeNode = signal<string>('core');
  readonly throughputDisplay = computed<string>(() => this.lang.t().telemetryThroughput);
  readonly latencyDisplay = computed<string>(() => this.lang.t().telemetryLatency);
  readonly isSimulating = signal<boolean>(false);
  readonly customInfoText = signal<string | null>(null);

  private autoCycleTimer: any;
  private userInteracted = false;
  private resetInteractionTimeout: any;

  private readonly nodeSequence = ['citizens', 'ministries', 'defi-core', 'registries', 'infra'];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        // Autonomous layer cycling every 5.5s when not interacted
        let cycleIdx = 0;
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted) {
            cycleIdx = (cycleIdx + 1) % this.nodeSequence.length;
            this.activeNode.set(this.nodeSequence[cycleIdx]);
          }
        }, 5500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.resetInteractionTimeout) clearTimeout(this.resetInteractionTimeout);
  }

  selectNode(nodeKey: string, manual = false): void {
    this.activeNode.set(nodeKey);
    this.customInfoText.set(null);

    if (manual) {
      this.userInteracted = true;
      if (this.resetInteractionTimeout) clearTimeout(this.resetInteractionTimeout);
      this.resetInteractionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }

  getActiveLayerTitle(): string {
    const isAr = this.lang.isArabic();
    switch (this.activeNode()) {
      case 'citizens':
        return isAr ? 'قنوات المواطنين والأعمال' : 'Citizen & Business Channels';
      case 'ministries':
        return isAr ? 'الجهات الحكومية والوزارات' : 'Government Entities & Ministries';
      case 'defi-core':
      case 'core':
        return isAr ? 'منظومة DEFI للتمكين الرقمي' : 'DEFI Enablement Core';
      case 'registries':
        return isAr ? 'السجلات والبيانات الوطنية' : 'National Registries & Base Data';
      case 'infra':
        return isAr ? 'البنية السحابية السيادية' : 'Sovereign Cloud & Infra';
      default:
        return isAr ? 'منظومة DEFI للتمكين الرقمي' : 'DEFI Enablement Core';
    }
  }

  getActiveLayerSummary(): string {
    const isAr = this.lang.isArabic();
    switch (this.activeNode()) {
      case 'citizens':
        return isAr ? 'بوابة مصر الرقمية والتطبيقات الموحدة' : 'Unified Portals, Mobile Apps & Service Centers';
      case 'ministries':
        return isAr ? 'أتمتة الإجراءات والربط مع 25+ جهة' : 'Workflow Modernization & 25+ Ministries';
      case 'defi-core':
      case 'core':
        return isAr ? 'ناقل البيانات الوطني وبوابات الربط الموحدة' : 'National Data Bus, Secure API Gateway & GSB';
      case 'registries':
        return isAr ? 'سجلات حكومية مركزية متزامنة وموثوقة' : 'Synchronized National Base Registers';
      case 'infra':
        return isAr ? 'مراكز بيانات فائقة الأمان 24/7' : 'Tier-IV Sovereign Data Centers & 24/7 Ops';
      default:
        return isAr ? 'ناقل البيانات الوطني وبوابات الربط الموحدة' : 'National Data Bus, Secure API Gateway & GSB';
    }
  }

  getInfoText(): string {
    if (this.customInfoText()) {
      return this.customInfoText()!;
    }
    const t = this.lang.t();
    switch (this.activeNode()) {
      case 'citizens':
        return t.nodeInfoCitizens;
      case 'ministries':
        return t.nodeInfoMinistries;
      case 'defi-core':
      case 'core':
        return t.nodeInfoDefiCore;
      case 'registries':
        return t.nodeInfoRegistries;
      case 'infra':
        return t.nodeInfoInfra;
      default:
        return t.diagramADefaultInfo;
    }
  }

  simulateTraffic(): void {
    if (this.isSimulating()) return;
    this.isSimulating.set(true);

    const isAr = this.lang.isArabic();
    this.customInfoText.set(
      isAr
        ? 'محاكاة نشطة: تم بث حزمة بيانات سيادية متزامنة بين قنوات المواطن ووزارة التربية والتعليم عبر ناقل DEFI وسحابة Tier-IV بنجاح (زمن استجابة: 3.8 مللي ثانية).'
        : 'Active Traffic Simulation: High-priority inter-agency sovereign transaction orchestrated across DEFI Backbone between Citizens and Ministry of Education in 3.8ms.'
    );

    setTimeout(() => {
      this.isSimulating.set(false);
    }, 2800);
  }
}
