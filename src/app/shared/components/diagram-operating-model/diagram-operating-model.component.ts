import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { TransformationStep } from '../../../core/models/defi-content.model';

@Component({
  selector: 'app-diagram-operating-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-operating-model.component.html',
  styleUrl: './diagram-operating-model.component.css'
})
export class DiagramOperatingModelComponent {
  readonly lang = inject(LanguageService);

  readonly activeStepIndex = signal<number>(0);

  setActiveStep(index: number): void {
    this.activeStepIndex.set(index);
  }

  getActiveStep(): TransformationStep {
    const steps = this.lang.t().journeySteps;
    return steps[this.activeStepIndex()] || steps[0];
  }
}
