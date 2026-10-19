import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the root app component', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain header, router outlet, and footer', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should have all 8 required public routes configured in routes', async () => {
    const { routes } = await import('./app.routes');
    const paths = routes.map(r => r.path);
    expect(paths).toContain('');
    expect(paths).toContain('about');
    expect(paths).toContain('capabilities');
    expect(paths).toContain('sectors');
    expect(paths).toContain('impact');
    expect(paths).toContain('news');
    expect(paths).toContain('careers');
    expect(paths).toContain('contact');
  });

  it('should toggle language in LanguageService and update direction', async () => {
    const { LanguageService } = await import('./core/services/language.service');
    const langService = TestBed.inject(LanguageService);
    langService.setLanguage('en');
    expect(langService.currentLang()).toBe('en');
    expect(langService.dir()).toBe('ltr');
    expect(langService.isArabic()).toBe(false);

    langService.toggleLanguage();
    expect(langService.currentLang()).toBe('ar');
    expect(langService.dir()).toBe('rtl');
    expect(langService.isArabic()).toBe(true);

    // Reset back to English
    langService.setLanguage('en');
  });
});


