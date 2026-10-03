import React from 'react';
import { ShieldCheck, CheckCircle2, Star, Building2 } from 'lucide-react';

export const PerformanceProof: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/40 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Verified Operational Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
            Rigorous performance standards across every digital engagement.
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every metric we track in the RLV Nexus client dashboard is backed by audited delivery logs, verified carrier routes, and production commitments.
          </p>
        </div>

        {/* Quantified Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-900 dark:text-white tracking-tight tabular-nums">
              420ms
            </div>
            <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-2">
              Global OTP Delivery Latency
            </div>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Sub-second SMS and WhatsApp OTP transit across Indian and international tier-1 telecom operators.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-900 dark:text-white tracking-tight tabular-nums">
              4.6x
            </div>
            <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-2">
              Average Blended ROAS
            </div>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Measured across Google Search and Meta Ads campaigns over 12 consecutive enterprise marketing sprints.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-900 dark:text-white tracking-tight tabular-nums">
              99.82%
            </div>
            <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-2">
              Carrier Deliverability SLA
            </div>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              DLT-compliant direct routes with automated multi-channel failover to WhatsApp and Email.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-900 dark:text-white tracking-tight tabular-nums">
              100%
            </div>
            <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-2">
              Code & Sprint Visibility
            </div>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Every pull request, commit hash, and ticket update synchronizes live with your client dashboard.
            </p>
          </div>
        </div>

        {/* Attributable Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 italic">
              "Before RLV Nexus, our engineering was in Jira, our paid ads in three different dashboards, and our OTP delivery issues were a black box. Having everything under one roof with real-time sync dropped our operational overhead by 40% in our first quarter."
            </p>
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-neutral-900 dark:text-white">Vikram Malhotra</div>
                <div className="text-[11px] text-neutral-500">VP of Technology &middot; Credence Health Systems</div>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">Software & OTP Client</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 italic">
              "The video production review room alone saved our marketing team dozens of Slack back-and-forths. We reviewed 4K ad cuts frame-by-frame, approved revisions, and immediately synced the creative directly into our live Meta and YouTube ad sets."
            </p>
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-neutral-900 dark:text-white">Sunaina Rao</div>
                <div className="text-[11px] text-neutral-500">Chief Marketing Officer &middot; UrbanPulse Direct</div>
              </div>
              <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">Ads & Video Client</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
