import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { NationalGridComponent } from '../../shared/components/national-grid/national-grid.component';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, NationalGridComponent],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'Priority Sectors & Sovereign Digital Infrastructure | DEFI',
      titleAr: 'القطاعات الاستراتيجية والبنية التحتية الرقمية السيادية | مصر الرقمية للاستثمار',
      descriptionEn: 'Explore the 5 priority Egyptian sectors modernized by DEFI: Public Administration, Education, Strategic Decision Support, Universal Healthcare, and Justice & Land Title Registries.',
      descriptionAr: 'استكشف القطاعات الوطنية الخمسة الحيوية التي تطورها مصر الرقمية للاستثمار: الإدارة الحكومية، التعليم، دعم القرار، التأمين الصحي الشامل، والعدالة والسجل العقاري.'
    });
  }

  getSectorIcon(id: string): string {
    switch (id) {
      case 'gov-admin': return 'government';
      case 'education-human-capital': return 'education';
      case 'strategic-decision-support': return 'analytics';
      case 'universal-healthcare': return 'healthcare';
      case 'justice-smart-governance': return 'justice';
      default: return 'layers';
    }
  }
}
