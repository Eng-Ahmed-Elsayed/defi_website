import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'Engineering Careers & National Impact Disciplines | DEFI',
      titleAr: 'فرص العمل والمسارات الهندسية للتحول القومي | مصر الرقمية للاستثمار',
      descriptionEn: 'Join DEFI’s enterprise architecture and engineering teams at Smart Village to build mission-critical digital public infrastructure serving millions of Egyptian citizens.',
      descriptionAr: 'انضم إلى فرق المعمارية المؤسسية والهندسة المتقدمة بشركة مصر الرقمية للاستثمار بالقرية الذكية للمساهمة في بناء وتشغيل البنية الرقمية السيادية لمصر.'
    });
  }
}
