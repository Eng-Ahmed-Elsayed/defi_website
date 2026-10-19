import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { CapabilityPillar } from '../../../core/models/defi-content.model';

@Component({
  selector: 'app-diagram-capabilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-capabilities.component.html',
  styleUrl: './diagram-capabilities.component.css'
})
export class DiagramCapabilitiesComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  readonly activeIndex = signal<number>(1);

  private autoCycleTimer: any;
  private userInteracted = false;
  private interactionTimeout: any;

  readonly activePillar = computed<CapabilityPillar>(() => {
    const pillars = this.lang.t().capabilityPillars;
    return pillars[this.activeIndex() - 1] || pillars[0];
  });

  readonly visualTag = computed<string>(() => {
    const isAr = this.lang.isArabic();
    switch (this.activeIndex()) {
      case 1:
        return isAr ? 'المخطط الهيكلي · مواءمة استراتيجية TOGAF ونماذج التشغيل' : 'Architecture Schematic · TOGAF Strategy & Operating Alignment';
      case 2:
        return isAr ? 'المخطط الهيكلي · بنية المنصات الميكروية وناقل الأحداث' : 'Architecture Schematic · Event-Driven Microservices & API Gateway';
      case 3:
        return isAr ? 'المخطط الهيكلي · مركز الرصد التشغيلي 24/7 والجاهزية القصوى' : 'Architecture Schematic · 24/7 Sovereign NOC/SOC & High Availability';
      case 4:
        return isAr ? 'المخطط الهيكلي · رحلة المواطن عبر القنوات الرقمية الموحدة' : 'Architecture Schematic · Omnichannel Citizen Experience Flow';
      case 5:
        return isAr ? 'المخطط الهيكلي · حوكمة المراحل والمخرجات القومية (Stage-Gate)' : 'Architecture Schematic · Public-Sector Stage-Gate Governance';
      case 6:
        return isAr ? 'المخطط الهيكلي · مصفوفة الأمان السيبراني والامتثال السيادي' : 'Architecture Schematic · Sovereign Cybersecurity & Compliance Matrix';
      default:
        return 'Architecture Schematic';
    }
  });

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted) {
            const next = (this.activeIndex() % 6) + 1;
            this.activeIndex.set(next);
          }
        }, 5500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
  }

  selectPillar(index: number, manual = false): void {
    this.activeIndex.set(index);
    if (manual) {
      this.userInteracted = true;
      if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
      this.interactionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }
}
