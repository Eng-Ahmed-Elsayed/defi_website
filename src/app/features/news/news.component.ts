import { Component, inject, OnInit, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { NewsItem } from '../../core/models/defi-content.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly selectedCategory = signal<string>('all');
  readonly activeArticle = signal<NewsItem | null>(null);

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'Official News & Institutional Briefings',
      titleAr: 'الأخبار والإصدارات المؤسسية الرسمية',
      descriptionEn: 'Official announcements, verified partnership milestones, and digital transformation briefings from Digital Egypt For Investment Co. (DEFI).',
      descriptionAr: 'البيانات المؤسسية الرسمية وتحديثات الشراكات الوطنية وإيجازات التحول الرقمي من شركة مصر الرقمية للاستثمار.'
    });
  }

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  getFilteredNews(): NewsItem[] {
    const all = this.lang.t().newsList;
    const cat = this.selectedCategory();
    if (cat === 'all') return all;
    return all.filter(n => n.categoryId === cat);
  }

  openArticle(item: NewsItem): void {
    this.activeArticle.set(item);
  }

  closeArticle(): void {
    this.activeArticle.set(null);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.activeArticle()) {
      this.closeArticle();
    }
  }
}
