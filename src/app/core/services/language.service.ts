import { Injectable, signal, computed, effect } from '@angular/core';
import { SupportedLanguage, TextDirection, DefiTranslations } from '../models/defi-content.model';
import { DEFI_TRANSLATIONS } from '../data/defi-content.data';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'defi_portal_lang';

  // Core language signal
  readonly currentLang = signal<SupportedLanguage>(this.getInitialLanguage());

  // Computed text direction (LTR or RTL)
  readonly dir = computed<TextDirection>(() => (this.currentLang() === 'ar' ? 'rtl' : 'ltr'));

  // Reactive translation dictionary
  readonly t = computed<DefiTranslations>(() => DEFI_TRANSLATIONS[this.currentLang()]);

  // Is Arabic active
  readonly isArabic = computed<boolean>(() => this.currentLang() === 'ar');

  constructor() {
    // Automatically apply HTML dir and lang attributes when signal changes
    effect(() => {
      const lang = this.currentLang();
      const direction = this.dir();
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        document.documentElement.dir = direction;
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    });
  }

  toggleLanguage(): void {
    this.currentLang.update(prev => (prev === 'en' ? 'ar' : 'en'));
  }

  setLanguage(lang: SupportedLanguage): void {
    if (lang === 'en' || lang === 'ar') {
      this.currentLang.set(lang);
    }
  }

  private getInitialLanguage(): SupportedLanguage {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(this.STORAGE_KEY) as SupportedLanguage;
      if (stored === 'en' || stored === 'ar') {
        return stored;
      }
      const browserLang = navigator.language?.toLowerCase() || '';
      if (browserLang.startsWith('ar')) {
        return 'ar';
      }
    }
    return 'en';
  }
}
