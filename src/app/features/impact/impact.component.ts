import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.css'
})
export class ImpactComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'National Delivery Metrics & Verified Institutional Impact | DEFI',
      titleAr: 'مؤشرات الإنجاز الوطني والأثر المؤسسي المعتمد | مصر الرقمية للاستثمار',
      descriptionEn: 'Explore DEFI’s verified institutional track record, public-sector metrics, and strategic partnerships with the Ministry of Education and Cabinet IDSC.',
      descriptionAr: 'استكشف سجل الإنجاز المؤسسي المعتمد لشركة مصر الرقمية للاستثمار، ومؤشرات الأداء للقطاع الحكومي وشراكاتها الاستراتيجية مع وزارة التربية والتعليم ومركز معلومات مجلس الوزراء.'
    });
  }
}
