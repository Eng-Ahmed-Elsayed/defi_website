import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { CapabilityPillar } from '../../../core/models/defi-content.model';

@Component({
  selector: 'app-diagram-capabilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-capabilities.component.html',
  styleUrl: './diagram-capabilities.component.css'
})
export class DiagramCapabilitiesComponent {
  readonly lang = inject(LanguageService);

  readonly selectedPillarId = signal<string>('business-architecture');

  selectPillar(id: string): void {
    this.selectedPillarId.set(id);
  }

  getSelectedPillar(): CapabilityPillar {
    const pillars = this.lang.t().capabilityPillars;
    return pillars.find(p => p.id === this.selectedPillarId()) || pillars[0];
  }
}
