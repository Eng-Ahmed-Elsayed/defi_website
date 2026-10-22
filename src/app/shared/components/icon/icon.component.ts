import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName =
  | 'government'
  | 'decree'
  | 'ministry'
  | 'hq'
  | 'partners'
  | 'vision'
  | 'mission'
  | 'star'
  | 'shield'
  | 'bolt'
  | 'layers'
  | 'education'
  | 'analytics'
  | 'server'
  | 'healthcare'
  | 'justice'
  | 'iot'
  | 'mail'
  | 'map-pin'
  | 'info'
  | 'briefcase'
  | 'code'
  | 'check'
  | 'globe'
  | 'users'
  | 'award';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="defi-icon"
      aria-hidden="true"
    >
      @switch (name) {
        @case ('government') {
          <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/>
        }
        @case ('decree') {
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        }
        @case ('ministry') {
          <path d="M4 22h16M2 11h20M12 2l10 5H2l10-5zM6 11v11M10 11v11M14 11v11M18 11v11"/>
        }
        @case ('hq') {
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
          <line x1="9" y1="22" x2="9" y2="2"/>
          <line x1="8" y1="6" x2="6" y2="6"/>
          <line x1="16" y1="6" x2="14" y2="6"/>
          <line x1="16" y1="10" x2="14" y2="10"/>
          <line x1="16" y1="14" x2="14" y2="14"/>
          <line x1="16" y1="18" x2="14" y2="18"/>
        }
        @case ('partners') {
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        }
        @case ('vision') {
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        }
        @case ('mission') {
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        }
        @case ('star') {
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        }
        @case ('shield') {
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        }
        @case ('bolt') {
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        }
        @case ('layers') {
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        }
        @case ('education') {
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        }
        @case ('analytics') {
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        }
        @case ('server') {
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        }
        @case ('healthcare') {
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        }
        @case ('justice') {
          <path d="M12 3v18M3 7l4 7M21 7l-4 7M7 14h-4a2 2 0 0 1-2-2V7h8v5a2 2 0 0 1-2 2zM21 14h-4a2 2 0 0 1-2-2V7h8v5a2 2 0 0 1-2 2z"/>
        }
        @case ('iot') {
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
        }
        @case ('mail') {
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        }
        @case ('map-pin') {
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        }
        @case ('info') {
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        }
        @case ('briefcase') {
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        }
        @case ('code') {
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        }
        @case ('check') {
          <polyline points="20 6 9 17 4 12"/>
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        }
        @case ('users') {
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        }
        @case ('award') {
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        }
        @default {
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        }
      }
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .defi-icon {
      display: block;
      vertical-align: middle;
      flex-shrink: 0;
    }
  `]
})
export class IconComponent {
  @Input() name: string = 'shield';
  @Input() size: number = 22;
}
