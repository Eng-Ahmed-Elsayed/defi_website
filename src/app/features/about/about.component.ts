import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { DiagramEcosystemComponent } from '../../shared/components/diagram-ecosystem/diagram-ecosystem.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, DiagramEcosystemComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'About DEFI | Prime Minister Decree No. 132/2020 & Institutional Mandate',
      titleAr: 'عن الشركة | قرار رئيس الوزراء رقم ١٣٢ لسنة ٢٠٢٠ والمهام المؤسسية',
      descriptionEn: 'Learn about Digital Egypt For Investment Co. (DEFI), established under Prime Minister Decree No. 132/2020 to support MCIT and ITIDA in executing national digital transformation.',
      descriptionAr: 'نبذة عن شركة مصر الرقمية للاستثمار، المؤسسة بقرار رئيس مجلس الوزراء رقم ١٣٢ لسنة ٢٠٢٠ كذراع استثماري وتنفيذي لوزارة الاتصالات وهيئة إيتيدا.'
    });
  }
}
