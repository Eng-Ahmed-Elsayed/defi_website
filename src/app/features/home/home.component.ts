import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { DiagramEcosystemComponent } from '../../shared/components/diagram-ecosystem/diagram-ecosystem.component';
import { DiagramOperatingModelComponent } from '../../shared/components/diagram-operating-model/diagram-operating-model.component';
import { DiagramCapabilitiesComponent } from '../../shared/components/diagram-capabilities/diagram-capabilities.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DiagramEcosystemComponent,
    DiagramOperatingModelComponent,
    DiagramCapabilitiesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Digital Egypt For Investment (DEFI) | Enterprise Digital Transformation Partner',
      description: 'Established under Prime Minister Decree No. 132/2020. Egypt\'s executive enterprise architecture, sovereign cloud, and public sector modernization partner.'
    });
  }

  scrollTo(elementId: string): void {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
