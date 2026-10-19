import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Strategic Public Sectors & Solutions | DEFI Public Transformation',
      description: 'Explore the vital Egyptian public sectors enabled by DEFI: Government Administration, Education, Strategic Decision Support, and National Digital Infrastructure.'
    });
  }
}
