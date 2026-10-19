import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  formData = {
    fullName: '',
    organization: '',
    email: '',
    subject: '',
    message: ''
  };

  readonly isSubmitting = signal<boolean>(false);
  readonly isSubmitted = signal<boolean>(false);
  readonly formError = signal<string | null>(null);

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Contact DEFI Leadership | Smart Village Headquarters B145',
      description: 'Official enterprise inquiries and consultation requests for Digital Egypt For Investment Co. (DEFI), located at Building B145, Smart Village, Giza, Egypt.'
    });
  }

  onSubmit(): void {
    this.formError.set(null);

    if (!this.formData.fullName || !this.formData.organization || !this.formData.email || !this.formData.message) {
      this.formError.set(this.lang.isArabic() ? 'يرجى استيفاء كافة الحقول الإلزامية قبل الإرسال.' : 'Please fill in all required fields marked with * before submitting.');
      return;
    }

    if (!this.formData.email.includes('@') || !this.formData.email.includes('.')) {
      this.formError.set(this.lang.isArabic() ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid official work email address.');
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.formData = {
        fullName: '',
        organization: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 1000);
  }
}
