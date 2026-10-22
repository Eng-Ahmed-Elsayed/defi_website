import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { InstitutionalInquiryFormComponent } from '../../shared/components/institutional-inquiry-form/institutional-inquiry-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, InstitutionalInquiryFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  readonly lang = inject(LanguageService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateBilingualTags({
      titleEn: 'Contact DEFI Leadership | Smart Village Headquarters B145',
      titleAr: 'تواصل مع قيادة مصر الرقمية للاستثمار | القرية الذكية مبنى B145',
      descriptionEn: 'Official enterprise inquiries and consultation requests for Digital Egypt For Investment Co. (DEFI), located at Building B145, Smart Village, Giza, Egypt.',
      descriptionAr: 'الاستفسارات المؤسسية الرسمية وطلبات الاستشارة لشركة مصر الرقمية للاستثمار، مبنى B145، القرية الذكية، الجيزة، جمهورية مصر العربية.'
    });
  }
}
