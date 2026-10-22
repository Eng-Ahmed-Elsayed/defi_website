import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { CapabilityPillar } from '../../core/models/defi-content.model';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { DiagramInteropComponent } from '../../shared/components/diagram-interop/diagram-interop.component';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, DiagramInteropComponent],
  templateUrl: './capabilities.component.html',
  styleUrl: './capabilities.component.css'
})
export class CapabilitiesComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);

  readonly activePillarId = signal<string>('business-architecture');
  private routeSub?: Subscription;

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'Enterprise Capabilities & Architecture Pillars | DEFI',
      titleAr: 'ركائز القدرات والمعمارية المؤسسية | مصر الرقمية للاستثمار',
      descriptionEn: 'Explore DEFI’s 6 verified institutional capability pillars: Business Architecture, Solution Architecture, IT Operations, Citizen Experience, Project Management, and Quality Governance.',
      descriptionAr: 'استكشف ركائز القدرات المؤسسية الست لشركة مصر الرقمية للاستثمار: بنية الأعمال، بنية الحلول، تشغيل النظم، تجربة المواطن، إدارة المشروعات، وحوكمة الجودة.'
    });

    this.routeSub = this.route.queryParamMap.subscribe(params => {
      const p = params.get('pillar');
      if (p) {
        const pillars = this.lang.t().capabilityPillars;
        const num = parseInt(p, 10);
        let matched: CapabilityPillar | undefined;
        if (!isNaN(num) && num >= 1 && num <= pillars.length) {
          matched = pillars[num - 1];
        } else {
          matched = pillars.find(item => item.id === p || item.id.includes(p));
        }
        if (matched) {
          this.activePillarId.set(matched.id);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  setActivePillar(id: string): void {
    this.activePillarId.set(id);
  }

  getActivePillar(): CapabilityPillar {
    const pillars = this.lang.t().capabilityPillars;
    return pillars.find(p => p.id === this.activePillarId()) || pillars[0];
  }
}
