import { Injectable, inject, effect, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from './language.service';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export interface BilingualSeoConfig {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  keywordsEn?: string;
  keywordsAr?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly ls = inject(LanguageService);

  private readonly DEFAULT_OG_IMAGE = '/defi-logo-gradient.png';
  private readonly SITE_NAME_EN = 'DEFI | Digital Egypt For Investment';
  private readonly SITE_NAME_AR = 'مصر الرقمية للاستثمار | DEFI';

  private readonly activeBilingualConfig = signal<BilingualSeoConfig | null>(null);

  constructor() {
    effect(() => {
      const config = this.activeBilingualConfig();
      if (!config) return;
      const isAr = this.ls.isArabic();
      const title = isAr ? config.titleAr : config.titleEn;
      const desc = isAr ? config.descriptionAr : config.descriptionEn;
      const siteName = isAr ? this.SITE_NAME_AR : this.SITE_NAME_EN;
      const fullTitle = `${title} | ${siteName}`;

      this.titleService.setTitle(fullTitle);
      this.metaService.updateTag({ name: 'description', content: desc });
      this.metaService.updateTag({ property: 'og:title', content: fullTitle });
      this.metaService.updateTag({ property: 'og:description', content: desc });
      this.metaService.updateTag({ property: 'og:image', content: config.ogImage || this.DEFAULT_OG_IMAGE });
      this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
      this.metaService.updateTag({ name: 'twitter:description', content: desc });

      const keywords = isAr ? config.keywordsAr : config.keywordsEn;
      if (keywords) {
        this.metaService.updateTag({ name: 'keywords', content: keywords });
      }
    });
  }

  updateBilingualTags(config: BilingualSeoConfig): void {
    this.activeBilingualConfig.set(config);
  }

  updateTags(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${this.SITE_NAME_EN}`;
    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:image', content: config.ogImage || this.DEFAULT_OG_IMAGE });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });

    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }
  }
}
