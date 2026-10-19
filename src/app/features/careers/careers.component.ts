import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Careers at DEFI | Build the Digital Foundations of a Nation',
      description: 'Join Egypt\'s leading enterprise engineering team at Smart Village. Explore high-impact technology careers across enterprise architecture, sovereign cloud, and citizen experience.'
    });
  }
}
