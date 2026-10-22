import {
  Component,
  inject,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  signal,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { DiagramEcosystemComponent } from '../../shared/components/diagram-ecosystem/diagram-ecosystem.component';
import { DiagramOperatingModelComponent } from '../../shared/components/diagram-operating-model/diagram-operating-model.component';
import { DiagramCapabilitiesComponent } from '../../shared/components/diagram-capabilities/diagram-capabilities.component';
import { DiagramInteropComponent } from '../../shared/components/diagram-interop/diagram-interop.component';
import { NationalGridComponent } from '../../shared/components/national-grid/national-grid.component';

interface InquiryFormState {
  name: string;
  entity: string;
  email: string;
  topic: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DiagramEcosystemComponent,
    DiagramOperatingModelComponent,
    DiagramCapabilitiesComponent,
    DiagramInteropComponent,
    NationalGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('heroCanvas') private heroCanvasRef?: ElementRef<HTMLCanvasElement>;

  // Form State
  formModel: InquiryFormState = {
    name: '',
    entity: '',
    email: '',
    topic: 'business-architecture',
    message: ''
  };
  readonly isSubmitting = signal<boolean>(false);
  readonly formStatus = signal<{ success: boolean; message: string } | null>(null);

  // Animation & Canvas Handles
  private animFrameId: number | null = null;
  private resizeListener?: () => void;
  private mouseMoveListener?: (e: MouseEvent) => void;
  private mouseLeaveListener?: () => void;
  private cardSpotlightCleanup?: () => void;
  private intersectionObserver?: IntersectionObserver;
  private scrollRevealObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Digital Egypt For Investment (DEFI) | Enterprise Digital Transformation Partner',
      description: 'Established under Prime Minister Decree No. 132/2020. Egypt\'s executive enterprise architecture, sovereign cloud, and public sector modernization partner.'
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.initHeroParticles();
    this.initCardSpotlights();
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    const heroSec = document.getElementById('hero');
    if (heroSec && this.mouseMoveListener) {
      heroSec.removeEventListener('mousemove', this.mouseMoveListener);
    }
    if (heroSec && this.mouseLeaveListener) {
      heroSec.removeEventListener('mouseleave', this.mouseLeaveListener);
    }
    if (this.cardSpotlightCleanup) {
      this.cardSpotlightCleanup();
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (this.scrollRevealObserver) {
      this.scrollRevealObserver.disconnect();
    }
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
  }

  scrollTo(elementId: string): void {
    const el = document.getElementById(elementId);
    if (el) {
      const headerOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  onInquirySubmit(): void {
    if (!this.formModel.name.trim() || !this.formModel.email.trim() || !this.formModel.message.trim()) {
      this.formStatus.set({
        success: false,
        message: this.lang.isArabic()
          ? 'يرجى استكمال جميع الحقول الإلزامية قبل الإرسال.'
          : 'Please complete all required fields before submitting.'
      });
      return;
    }

    this.isSubmitting.set(true);
    this.formStatus.set(null);

    // Simulated secure transmission to DEFI Institutional Gateway
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.formStatus.set({
        success: true,
        message: this.lang.isArabic()
          ? 'تم استلام استفساركم بنجاح. سيقوم فريق الاستشارات الهندسية والمؤسسية بالتواصل معكم عبر البريد الرسمي.'
          : 'Your inquiry has been transmitted successfully. Our enterprise advisory team will respond to your official email shortly.'
      });

      // Reset form
      this.formModel = {
        name: '',
        entity: '',
        email: '',
        topic: 'business-architecture',
        message: ''
      };
    }, 900);
  }

  /**
   * Interactive Hero Particle Constellation System
   */
  private initHeroParticles(): void {
    const canvas = this.heroCanvasRef?.nativeElement || document.getElementById('hero-particles') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement || document.getElementById('hero');
    let width = (canvas.width = parent ? parent.offsetWidth : window.innerWidth);
    let height = (canvas.height = parent ? parent.offsetHeight : 650);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const particleCount = Math.min(width < 768 ? 24 : 45, 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    this.resizeListener = () => {
      if (!parent) return;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    };
    window.addEventListener('resize', this.resizeListener);

    const heroSec = document.getElementById('hero');
    if (heroSec) {
      this.mouseMoveListener = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      };
      heroSec.addEventListener('mousemove', this.mouseMoveListener);

      this.mouseLeaveListener = () => {
        mouseX = -1000;
        mouseY = -1000;
      };
      heroSec.addEventListener('mouseleave', this.mouseLeaveListener);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle mouse interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 0.8;
          p.y -= (dy / dist) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();

        // Connect constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(30, 95, 216, ${0.25 * (1 - d / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      this.animFrameId = requestAnimationFrame(animate);
    };

    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (!this.animFrameId) {
            this.animFrameId = requestAnimationFrame(animate);
          }
        } else {
          if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
          }
        }
      });
      this.intersectionObserver.observe(canvas);
    } else {
      this.animFrameId = requestAnimationFrame(animate);
    }
  }

  /**
   * Dynamic Mouse Spotlight Cursor Shader for .card-glass Elements
   */
  private initCardSpotlights(): void {
    const cards = document.querySelectorAll<HTMLElement>('.card-glass, .partner-card, .sector-card, .contact-info-card');
    if (!cards.length) return;

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };
      card.addEventListener('mousemove', move);
      handlers.push({ el: card, move });
    });

    this.cardSpotlightCleanup = () => {
      handlers.forEach(({ el, move }) => el.removeEventListener('mousemove', move));
    };
  }

  /**
   * IntersectionObserver for scroll-triggered reveal animations and section transitions
   */
  private initScrollAnimations(): void {
    if (!('IntersectionObserver' in window)) return;

    // 1. Observe sections to trigger autonomous animations and active state when scrolled into view
    const sectionIds = ['hero', 'about', 'capabilities', 'journey', 'interop', 'impact', 'sectors', 'national-grid', 'careers', 'contact'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-in-view');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    sections.forEach(sec => this.sectionObserver?.observe(sec));

    // 2. Observe reveal elements for smooth scroll entry
    const revealTargets = document.querySelectorAll<HTMLElement>(
      '.scroll-reveal, .section-header, .stat-highlight-card, .pillar-box, .interop-node, .cap-card, .metric-card, .sector-card, .timeline-card, .hero-mandate-bar'
    );

    this.scrollRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          this.scrollRevealObserver?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    revealTargets.forEach(el => this.scrollRevealObserver?.observe(el));
  }
}
