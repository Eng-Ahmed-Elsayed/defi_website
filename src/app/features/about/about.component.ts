import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'About DEFI | Prime Minister Decree No. 132/2020 & Institutional Mandate',
      description: 'Learn about Digital Egypt For Investment Co. (DEFI), established under Prime Minister Decree No. 132/2020 to support MCIT and ITIDA in executing national digital transformation.'
    });
  }
}
