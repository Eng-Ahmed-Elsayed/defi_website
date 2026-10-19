import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
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
  readonly throughputDisplay = signal<string>('18,450 req/s');
  readonly latencyDisplay = signal<string>('< 4.2ms');
  readonly isSimulating = signal<boolean>(false);
  readonly customInfoText = signal<string | null>(null);

  private telemetryTimer: any;
  private autoCycleTimer: any;
  private userInteracted = false;
  private resetInteractionTimeout: any;

  private readonly nodeSequence = ['citizens', 'ministries', 'defi-core', 'registries', 'infra'];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        // Live telemetry numeric jitter
        this.telemetryTimer = setInterval(() => {
          const jitter = Math.floor(Math.random() * 90) - 45;
          const base = 18450 + jitter;
          this.throughputDisplay.set(`${base.toLocaleString()} req/s`);

          const latencyVal = (3.8 + Math.random() * 0.4).toFixed(1);
          this.latencyDisplay.set(`< ${latencyVal}ms`);
        }, 2400);

        // Autonomous layer cycling every 4.5s when not interacted
        let cycleIdx = 0;
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted) {
            cycleIdx = (cycleIdx + 1) % this.nodeSequence.length;
            this.activeNode.set(this.nodeSequence[cycleIdx]);
          }
        }, 4500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.telemetryTimer) clearInterval(this.telemetryTimer);
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
