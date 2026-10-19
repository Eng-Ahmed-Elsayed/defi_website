import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { CapabilityPillar } from '../../core/models/defi-content.model';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './capabilities.component.html',
  styleUrl: './capabilities.component.css'
})
export class CapabilitiesComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly activePillarId = signal<string>('business-architecture');

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Enterprise Capabilities & Services | DEFI Public-Sector Architecture',
      description: 'Explore DEFI’s 6 verified institutional capability pillars: Business Architecture, Solution Architecture, IT Operations, Citizen Experience, Project Management, and Quality Governance.'
    });
  }

  setActivePillar(id: string): void {
    this.activePillarId.set(id);
  }

  getActivePillar(): CapabilityPillar {
    const pillars = this.lang.t().capabilityPillars;
    return pillars.find(p => p.id === this.activePillarId()) || pillars[0];
  }
}
