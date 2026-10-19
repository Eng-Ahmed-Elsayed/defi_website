import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly DEFAULT_OG_IMAGE = '/defi-logo-gradient.png';
  private readonly SITE_NAME = 'DEFI | Digital Egypt For Investment';

  updateTags(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${this.SITE_NAME}`;
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
