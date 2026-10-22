import { Component, Input, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../core/services/language.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-institutional-inquiry-form',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="inquiry-form-wrapper" [class.surface-dark]="surface === 'dark'" [class.surface-light]="surface === 'light'">
      @if (isSubmitted()) {
        <!-- Verified Confirmation Panel -->
        <div class="form-feedback-card success-card" role="status" aria-live="polite">
          <div class="feedback-badge-row">
            <span class="status-icon-box" aria-hidden="true">
              <app-icon name="check" [size]="20"></app-icon>
            </span>
            <div>
              <strong class="feedback-title">
                {{ lang.isArabic() ? 'تم تجهيز الاستشارة المؤسسية بنجاح' : 'Consultation Request Prepared Successfully' }}
              </strong>
              <p class="feedback-subhead">
                {{ lang.isArabic() 
                    ? 'تم توجيه طلبك إلى البريد المؤسسي التنفيذي لشركة مصر الرقمية للاستثمار (info@defi.com.eg).' 
                    : 'Your request has been formatted for DEFI executive operations at info@defi.com.eg.' }}
              </p>
            </div>
          </div>

          <div class="inquiry-summary-box">
            <div class="summary-line">
              <span class="summary-label">{{ lang.isArabic() ? 'الاسم:' : 'Contact:' }}</span>
              <strong class="summary-val">{{ formData.fullName }}</strong>
            </div>
            <div class="summary-line">
              <span class="summary-label">{{ lang.isArabic() ? 'الجهة:' : 'Entity:' }}</span>
              <strong class="summary-val">{{ formData.organization }}</strong>
            </div>
            <div class="summary-line">
              <span class="summary-label">{{ lang.isArabic() ? 'المجال:' : 'Domain:' }}</span>
              <strong class="summary-val">{{ getDomainLabel(formData.domain) }}</strong>
            </div>
          </div>

          <div class="feedback-actions">
            <a [href]="mailtoUrl()" class="btn btn-primary action-btn">
              <span>{{ lang.isArabic() ? 'فتح تطبيق البريد (info@defi.com.eg)' : 'Open Email Client (info@defi.com.eg)' }}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <button type="button" class="btn btn-outline action-btn" (click)="copyToClipboard()">
              @if (copied()) {
                <span class="copied-msg">{{ lang.isArabic() ? '✓ تم النسخ إلى الحافظة' : '✓ Copied to Clipboard' }}</span>
              } @else {
                <span>{{ lang.isArabic() ? 'نسخ بيانات الاستفسار' : 'Copy Inquiry Details' }}</span>
              }
            </button>
            <button type="button" class="btn-text-reset" (click)="resetForm()">
              {{ lang.isArabic() ? 'إرسال استفسار جديد' : 'Submit Another Request' }}
            </button>
          </div>
        </div>
      } @else {
        <!-- Consultation Form -->
        <form class="consultation-form" (ngSubmit)="onSubmit()" novalidate>
          @if (formError(); as err) {
            <div class="form-alert error-alert" role="alert" aria-live="assertive">
              <app-icon name="info" [size]="18"></app-icon>
              <span>{{ err }}</span>
            </div>
          }

          <div class="form-grid-2">
            <div class="form-group">
              <label for="fullName" class="form-label">
                {{ lang.t().formLabels.fullName }} <span class="req">*</span>
              </label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                [(ngModel)]="formData.fullName" 
                class="form-input" 
                required 
                [placeholder]="lang.isArabic() ? 'مثال: د. أحمد مصطفى' : 'e.g. Dr. Ahmed Mostafa'">
            </div>

            <div class="form-group">
              <label for="organization" class="form-label">
                {{ lang.t().formLabels.organization }} <span class="req">*</span>
              </label>
              <input 
                type="text" 
                id="organization" 
                name="organization" 
                [(ngModel)]="formData.organization" 
                class="form-input" 
                required 
                [placeholder]="lang.isArabic() ? 'مثال: اسم الوزارة / الهيئة / المؤسسة' : 'e.g. Ministry / Authority / Investment Entity'">
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label for="email" class="form-label">
                {{ lang.t().formLabels.email }} <span class="req">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="formData.email" 
                class="form-input" 
                required 
                placeholder="name@organization.gov.eg">
            </div>

            <div class="form-group">
              <label for="domain" class="form-label">
                {{ lang.t().formLabels.subject }} <span class="req">*</span>
              </label>
              <select 
                id="domain" 
                name="domain" 
                [(ngModel)]="formData.domain" 
                class="form-select"
                required>
                <option value="enterprise-architecture">
                  {{ lang.isArabic() ? 'البنية المعمارية المؤسسية وحلول الربط' : 'Enterprise & Solution Architecture' }}
                </option>
                <option value="ppp-investment">
                  {{ lang.isArabic() ? 'الشراكة الاستثمارية بين القطاعين العام والخاص (PPP)' : 'Public-Private Partnership (PPP) & Investment' }}
                </option>
                <option value="operations-continuity">
                  {{ lang.isArabic() ? 'التشغيل السحابي واستمرارية الأنظمة السيادية' : 'Mission-Critical Cloud Operations & NOC/SOC' }}
                </option>
                <option value="modernization-cx">
                  {{ lang.isArabic() ? 'تحديث الخدمات الحكومية وتجربة المواطن' : 'Digital Service Modernization & CX' }}
                </option>
                <option value="general">
                  {{ lang.isArabic() ? 'استفسار مؤسسي عام' : 'General Institutional Inquiry' }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">
              {{ lang.t().formLabels.message }} <span class="req">*</span>
            </label>
            <textarea 
              id="message" 
              name="message" 
              [(ngModel)]="formData.message" 
              rows="4" 
              class="form-textarea" 
              required 
              [placeholder]="lang.isArabic() ? 'يرجى توضيح نطاق الاستشارة المؤسسية أو الشراكة الاستثمارية أو المتطلبات المعمارية...' : 'Outline your institutional consultation, PPP investment, or architecture requirements...'"></textarea>
          </div>

          <p class="form-note">{{ lang.t().formLabels.requiredNote }}</p>

          <button type="submit" class="btn btn-primary submit-btn" [disabled]="isSubmitting()">
            @if (isSubmitting()) {
              <span>{{ lang.t().formLabels.submitting }}</span>
            } @else {
              <span>{{ lang.isArabic() ? 'إرسال طلب الاستشارة الرسمية' : 'Submit Official Consultation Inquiry' }}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            }
          </button>
        </form>
      }
    </div>
  `,
  styles: [`
    .inquiry-form-wrapper {
      width: 100%;
    }

    /* Light Surface (Default for Architectural Stone Canvas) */
    .surface-light .form-label {
      color: #0A1628;
      font-weight: 700;
      font-size: 0.88rem;
      margin-block-end: 0.45rem;
      display: block;
    }

    .surface-light .form-input,
    .surface-light .form-select,
    .surface-light .form-textarea {
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
      color: #0A1628;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      box-sizing: border-box;
      font-family: inherit;
    }

    .surface-light .form-input:focus,
    .surface-light .form-select:focus,
    .surface-light .form-textarea:focus {
      outline: none;
      border-color: #1E5FD8;
      box-shadow: 0 0 0 3px rgba(30, 95, 216, 0.15);
    }

    .surface-light .form-note {
      color: #64748B;
      font-size: 0.82rem;
      margin-block: 0.25rem 1.25rem;
    }

    /* Dark Surface */
    .surface-dark .form-label {
      color: #F8FAFC;
      font-weight: 700;
      font-size: 0.88rem;
      margin-block-end: 0.45rem;
      display: block;
    }

    .surface-dark .form-input,
    .surface-dark .form-select,
    .surface-dark .form-textarea {
      width: 100%;
      background: rgba(13, 27, 46, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
      color: #FFFFFF;
      box-sizing: border-box;
      font-family: inherit;
    }

    .surface-dark .form-input:focus,
    .surface-dark .form-select:focus,
    .surface-dark .form-textarea:focus {
      outline: none;
      border-color: #38BDF8;
      box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
    }

    .surface-dark .form-note {
      color: #94A3B8;
      font-size: 0.82rem;
      margin-block: 0.25rem 1.25rem;
    }

    .form-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    @media (max-width: 640px) {
      .form-grid-2 {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      margin-block-end: 1.25rem;
    }

    .req {
      color: #EF4444;
      font-weight: 800;
    }

    .submit-btn {
      width: 100%;
      padding: 0.9rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
    }

    .btn-arrow {
      display: inline-block;
      transition: transform 0.2s ease;
    }

    [dir="rtl"] .btn-arrow {
      transform: scaleX(-1);
    }

    .submit-btn:hover .btn-arrow {
      transform: translateX(4px);
    }

    [dir="rtl"] .submit-btn:hover .btn-arrow {
      transform: scaleX(-1) translateX(-4px);
    }

    /* Error Alert */
    .form-alert {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.85rem 1rem;
      border-radius: 8px;
      margin-block-end: 1.25rem;
      font-size: 0.88rem;
    }

    .error-alert {
      background: #FEF2F2;
      border: 1px solid #FECACA;
      color: #991B1B;
    }

    /* Feedback Confirmation Card */
    .form-feedback-card {
      background: #F0FDF4;
      border: 1px solid #BBF7D0;
      border-radius: 12px;
      padding: 2rem;
    }

    .surface-dark .form-feedback-card {
      background: rgba(13, 148, 136, 0.12);
      border-color: rgba(45, 212, 191, 0.3);
    }

    .feedback-badge-row {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-block-end: 1.5rem;
    }

    .status-icon-box {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #0D9488;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .feedback-title {
      display: block;
      font-size: 1.15rem;
      color: #065F46;
      margin-block-end: 0.25rem;
    }

    .surface-dark .feedback-title {
      color: #2DD4BF;
    }

    .feedback-subhead {
      font-size: 0.9rem;
      color: #166534;
      line-height: 1.5;
      margin: 0;
    }

    .surface-dark .feedback-subhead {
      color: #CBD5E1;
    }

    .inquiry-summary-box {
      background: #FFFFFF;
      border: 1px solid #DCFCE7;
      border-radius: 8px;
      padding: 1.25rem;
      margin-block-end: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .surface-dark .inquiry-summary-box {
      background: #071120;
      border-color: rgba(255, 255, 255, 0.12);
    }

    .summary-line {
      display: flex;
      align-items: baseline;
      gap: 0.75rem;
      font-size: 0.88rem;
    }

    .summary-label {
      color: #64748B;
      min-width: 60px;
    }

    .summary-val {
      color: #0A1628;
    }

    .surface-dark .summary-val {
      color: #FFFFFF;
    }

    .feedback-actions {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .action-btn {
      width: 100%;
      text-align: center;
      justify-content: center;
    }

    .btn-text-reset {
      background: none;
      border: none;
      color: #1E5FD8;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      padding: 0.5rem;
      text-align: center;
      text-decoration: underline;
    }

    .btn-text-reset:hover {
      color: #1E40AF;
    }
  `]
})
export class InstitutionalInquiryFormComponent {
  readonly lang = inject(LanguageService);

  @Input() surface: 'light' | 'dark' = 'light';

  formData = {
    fullName: '',
    organization: '',
    email: '',
    domain: 'enterprise-architecture',
    message: ''
  };

  readonly isSubmitting = signal<boolean>(false);
  readonly isSubmitted = signal<boolean>(false);
  readonly formError = signal<string | null>(null);
  readonly copied = signal<boolean>(false);
  readonly mailtoUrl = signal<string>('');

  getDomainLabel(val: string): string {
    const isAr = this.lang.isArabic();
    switch (val) {
      case 'enterprise-architecture':
        return isAr ? 'البنية المعمارية المؤسسية وحلول الربط' : 'Enterprise & Solution Architecture';
      case 'ppp-investment':
        return isAr ? 'الشراكة الاستثمارية بين القطاعين العام والخاص (PPP)' : 'Public-Private Partnership (PPP) & Investment';
      case 'operations-continuity':
        return isAr ? 'التشغيل السحابي واستمرارية الأنظمة السيادية' : 'Mission-Critical Operations & Cloud';
      case 'modernization-cx':
        return isAr ? 'تحديث الخدمات الحكومية وتجربة المواطن' : 'Digital Service Modernization & CX';
      default:
        return isAr ? 'استفسار مؤسسي عام' : 'General Institutional Inquiry';
    }
  }

  onSubmit(): void {
    this.formError.set(null);

    if (!this.formData.fullName || !this.formData.organization || !this.formData.email || !this.formData.message) {
      this.formError.set(
        this.lang.isArabic() 
          ? 'يرجى استيفاء كافة الحقول الإلزامية المحددة بعلامة (*) قبل الإرسال.' 
          : 'Please complete all required fields marked with (*) before submitting.'
      );
      return;
    }

    if (!this.formData.email.includes('@') || !this.formData.email.includes('.')) {
      this.formError.set(
        this.lang.isArabic() 
          ? 'يرجى إدخال بريد إلكتروني رسمي صحيح.' 
          : 'Please enter a valid official institutional email address.'
      );
      return;
    }

    this.isSubmitting.set(true);

    const subject = encodeURIComponent(`[DEFI Consultation] ${this.getDomainLabel(this.formData.domain)}: ${this.formData.organization}`);
    const body = encodeURIComponent(
      `DEFI INSTITUTIONAL CONSULTATION INQUIRY\n` +
      `----------------------------------------\n` +
      `Full Name: ${this.formData.fullName}\n` +
      `Organization / Ministry: ${this.formData.organization}\n` +
      `Official Email: ${this.formData.email}\n` +
      `Inquiry Domain: ${this.getDomainLabel(this.formData.domain)}\n\n` +
      `Transformation Scope & Consultation Details:\n${this.formData.message}\n` +
      `----------------------------------------\n` +
      `Submitted via DEFI Official Portal under Decree No. 132/2020.`
    );
    const url = `mailto:info@defi.com.eg?subject=${subject}&body=${body}`;
    this.mailtoUrl.set(url);

    if (typeof window !== 'undefined') {
      window.location.href = url;
    }

    this.isSubmitting.set(false);
    this.isSubmitted.set(true);
  }

  copyToClipboard(): void {
    const text = 
      `DEFI CONSULTATION INQUIRY\n` +
      `Name: ${this.formData.fullName}\n` +
      `Organization: ${this.formData.organization}\n` +
      `Email: ${this.formData.email}\n` +
      `Domain: ${this.getDomainLabel(this.formData.domain)}\n` +
      `Scope:\n${this.formData.message}`;

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 3000);
      });
    }
  }

  resetForm(): void {
    this.isSubmitted.set(false);
    this.formError.set(null);
    this.copied.set(false);
    this.formData = {
      fullName: '',
      organization: '',
      email: '',
      domain: 'enterprise-architecture',
      message: ''
    };
  }
}
