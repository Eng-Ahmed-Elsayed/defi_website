import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { EcosystemNode } from '../../../core/models/defi-content.model';

@Component({
  selector: 'app-diagram-ecosystem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-ecosystem.component.html',
  styleUrl: './diagram-ecosystem.component.css'
})
export class DiagramEcosystemComponent {
  readonly lang = inject(LanguageService);

  readonly selectedNodeId = signal<string>('core');

  selectNode(id: string): void {
    this.selectedNodeId.set(id);
  }

  getSelectedNode(): EcosystemNode | undefined {
    return this.lang.t().ecosystemNodes.find(n => n.id === this.selectedNodeId());
  }
}
