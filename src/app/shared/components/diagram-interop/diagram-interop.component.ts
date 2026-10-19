import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

interface InteropPayload {
  pill: string;
  titleEn: string;
  titleAr: string;
  sec: string;
  latency: string;
  json: string;
}

interface LogEntry {
  text: string;
  type: 'text-muted' | 'text-info' | 'text-success';
}

@Component({
  selector: 'app-diagram-interop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagram-interop.component.html',
  styleUrl: './diagram-interop.component.css'
})
export class DiagramInteropComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  readonly currentStage = signal<number>(1);
  readonly activeStages = signal<number[]>([1]);
  readonly stageBadges = signal<string[]>(['Standby', 'Awaiting', 'Awaiting', 'Awaiting', 'Awaiting']);
  readonly isRunningTest = signal<boolean>(false);
  readonly logs = signal<LogEntry[]>([
    { text: '> System initialized under Prime Minister Decree No. 132/2020.', type: 'text-muted' },
    { text: '> Ready for inter-agency transaction test. Click "Run Interoperability Test" above.', type: 'text-muted' }
  ]);

  private autoCycleTimer: any;
  private userInteracted = false;
  private interactionTimeout: any;

  readonly payloads: Record<number, InteropPayload> = {
    1: {
      pill: 'STAGE 01 PAYLOAD',
      titleEn: 'Citizen Inbound Request',
      titleAr: 'طلب المواطن الوارد عبر البوابة',
      sec: '🔒 mTLS 1.3 · Zero-Trust',
      latency: '0.85 ms',
      json: `{\n  "protocol": "HTTPS/3 (QUIC) · mTLS 1.3",\n  "source_entity": "Digital Egypt Portal / App",\n  "national_id_hash": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4...",\n  "service_requested": "Unified_Health_Insurance_Enrollment",\n  "token_validation": "JWT_VERIFIED_DEFI_HSM",\n  "latency": "0.85 ms",\n  "state_status": "READY_FOR_INTEROP"\n}`
    },
    2: {
      pill: 'STAGE 02 PAYLOAD',
      titleEn: 'DEFI Sovereign Gateway Inspection',
      titleAr: 'فحص بوابة DEFI السيادية وجدار الحماية',
      sec: '🛡️ WAF Cleared · Threat: 0/100',
      latency: '1.15 ms',
      json: `{\n  "gateway": "DEFI Sovereign Edge Cluster (Envoy)",\n  "ddos_inspection": "100 Gbps Mitigated · Clean",\n  "mutual_tls": "TLS_AES_256_GCM_SHA384 Validated",\n  "routing_target": "Civil_Registry_Base_Connector",\n  "inspection_latency": "1.15 ms",\n  "state_status": "GATEWAY_CLEARED"\n}`
    },
    3: {
      pill: 'STAGE 03 PAYLOAD',
      titleEn: 'Civil Registry National ID Verification',
      titleAr: 'التحقق اللحظي عبر مصلحة الأحوال المدنية',
      sec: '🆔 Base Register Match 100%',
      latency: '1.40 ms',
      json: `{\n  "protocol": "gRPC Secure Stream · Base Registry Sync",\n  "civil_registry_authority": "Egyptian Civil Registration Authority",\n  "biometric_verification": "TOKEN_MATCHED_100%",\n  "data_integrity": "Cryptographic Nonce Verified",\n  "target_entity": "MOE_Cabinet_IDSC_Health_Core",\n  "latency": "1.40 ms",\n  "state_status": "ID_CONFIRMED"\n}`
    },
    4: {
      pill: 'STAGE 04 PAYLOAD',
      titleEn: 'Ministerial Core Workflow Execution',
      titleAr: 'تنفيذ الإجراءات بأنظمة الوزارة المركزية',
      sec: '🏛️ Two-Phase Commit OK',
      latency: '2.10 ms',
      json: `{\n  "bus": "Ministerial Enterprise Service Bus",\n  "workflow_id": "WF_MOE_HEALTH_2026_9812",\n  "executing_authority": "Ministry of Health & Public Entities",\n  "state_transition": "PENDING -> APPROVED",\n  "database_transaction": "ACID Committed (Two-Phase Commit)",\n  "latency": "2.10 ms",\n  "state_status": "MINISTERIAL_EXECUTED"\n}`
    },
    5: {
      pill: 'STAGE 05 PAYLOAD',
      titleEn: 'Sovereign Tier IV Cloud Cryptographic Seal',
      titleAr: 'التوثيق الرقمي في السحابة السيادية Tier-IV',
      sec: '☁️ HSM Signed · Immutable',
      latency: '0.65 ms',
      json: `{\n  "datacenter": "Sovereign Gov Data Core (Egypt Tier IV)",\n  "hardware_security_module": "Thales Luna HSM Level 4",\n  "cryptographic_seal": "0x7F2A...9C1D · Immutable Audit Trail",\n  "final_status_code": "200_OK_DELIVERED",\n  "total_pipeline_latency": "5.50 ms",\n  "state_status": "SEALED_AND_DELIVERED"\n}`
    }
  };

  readonly activePayload = computed(() => {
    return this.payloads[this.currentStage()] || this.payloads[1];
  });

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        this.runSimulationCycle();
        this.autoCycleTimer = setInterval(() => {
          if (!this.userInteracted && !this.isRunningTest()) {
            this.runSimulationCycle();
          }
        }, 5500);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.autoCycleTimer) clearInterval(this.autoCycleTimer);
    if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
  }

  selectStage(stageNum: number, manual = false): void {
    this.currentStage.set(stageNum);
    if (manual) {
      this.userInteracted = true;
      if (this.interactionTimeout) clearTimeout(this.interactionTimeout);
      this.interactionTimeout = setTimeout(() => {
        this.userInteracted = false;
      }, 15000);
    }
  }

  triggerTest(): void {
    this.userInteracted = false;
    this.runSimulationCycle();
  }

  private runSimulationCycle(): void {
    this.isRunningTest.set(true);
    const isAr = this.lang.isArabic();

    const steps = [
      {
        idx: 1,
        badgeText: isAr ? 'تم التحقق ✓' : 'Verified ✓',
        log: isAr
          ? '[0.00s] طلب مواطن: تم استقبال المعاملة عبر بوابة مصر الرقمية (الرقم القومي: 29801...)'
          : '[0.00s] Inbound Request: Digital Egypt Portal (Citizen ID: 29801... authenticated)',
        delay: 0
      },
      {
        idx: 2,
        badgeText: isAr ? 'مؤمّن ومشفّر ✓' : 'mTLS / WAF OK ✓',
        log: isAr
          ? '[0.09s] بوابة DEFI السيادية: فحص أمني سيبراني شامل واجتياز جدران الحماية WAF'
          : '[0.09s] DEFI Sovereign Gateway: Mutual TLS handshake validated · Zero-Trust inspection cleared',
        delay: 500
      },
      {
        idx: 3,
        badgeText: isAr ? 'تطابق الهوية ✓' : 'ID Verified ✓',
        log: isAr
          ? '[0.18s] مصلحة الأحوال المدنية: التحقق اللحظي من البصمة والبيانات الحيوية'
          : '[0.18s] Civil Registry Sync: Biometric cryptographic token validated against Base Register',
        delay: 1100
      },
      {
        idx: 4,
        badgeText: isAr ? 'تم التنفيذ الوزاري ✓' : 'Executed ✓',
        log: isAr
          ? '[0.27s] النظام المركزي للوزارة: اعتماد الخدمة الحكومية وتحديث السجل المؤسسي'
          : '[0.27s] Ministerial Core (MOE/IDSC): Inter-agency workflow executed and state updated',
        delay: 1700
      },
      {
        idx: 5,
        badgeText: isAr ? 'معتمد في السحابة ✓' : 'Tier IV Signed ✓',
        log: isAr
          ? '[0.34s] السحابة السيادية Tier-IV: توثيق البصمة الرقمية للمعاملة (رمز الاستجابة 200 بنجاح)'
          : '[0.34s] Sovereign Tier-IV Cloud: Audit trail cryptographically sealed · Status 200 OK Delivered',
        delay: 2300
      }
    ];

    steps.forEach(({ idx, badgeText, log, delay }) => {
      setTimeout(() => {
        this.currentStage.set(idx);
        const newActives: number[] = [];
        for (let i = 1; i <= idx; i++) newActives.push(i);
        this.activeStages.set(newActives);

        const badges = [...this.stageBadges()];
        badges[idx - 1] = badgeText;
        this.stageBadges.set(badges);

        this.appendLog(log, idx === 5 ? 'text-success' : 'text-info');

        if (idx === 5) {
          setTimeout(() => {
            this.isRunningTest.set(false);
          }, 800);
        }
      }, delay);
    });
  }

  private appendLog(text: string, type: 'text-muted' | 'text-info' | 'text-success'): void {
    const current = [...this.logs(), { text, type }];
    if (current.length > 25) current.shift();
    this.logs.set(current);
  }
}
