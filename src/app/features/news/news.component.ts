import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { NewsItem } from '../../core/models/defi-content.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly selectedCategory = signal<string>('all');

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Official News & Announcements | DEFI Corporate Releases',
      description: 'Official announcements, verified milestones, and digital transformation initiatives from Digital Egypt For Investment Co. (DEFI).'
    });
  }

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  getFilteredNews(): NewsItem[] {
    const all = this.lang.t().newsList;
    const cat = this.selectedCategory();
    if (cat === 'all') return all;
    return all.filter(n => n.category.toLowerCase().includes(cat.toLowerCase()));
  }
}
