import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.css'
})
export class ImpactComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Measurable Impact & Verified Partners | DEFI Public Credibility',
      description: 'Review DEFI’s verified public-sector scale: 50+ clients, 200+ consultants, 25+ government entities, 200+ modernized services, with verified ministerial partners MOE and IDSC.'
    });
  }
}
