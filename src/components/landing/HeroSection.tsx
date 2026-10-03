import React from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  Code2,
  TrendingUp,
  MessageSquare,
  Video,
  ShieldCheck,
  ArrowRight,
  Database,
  MessageCircle,
  CheckCircle2,
  Zap,
  Award,
  Clock,
  Headphones,
  KeyRound
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setContactModalOpen } = useApp();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
              <span>RLV Nexus &middot; Enterprise Digital Service Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] text-balance">
              Premier digital engineering, high-ROAS marketing & telecom solutions.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              Partner with RLV Nexus for custom software development, dedicated coders, data-driven advertising, high-throughput SMS, WhatsApp & OTP gateways, and commercial video post-production.
            </p>

            {/* Formal Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#order"
                className="px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Place Service Order</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20want%20to%20place%20a%20service%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 rounded-xl border border-emerald-300 dark:border-emerald-800 transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp: +91 9304132812</span>
              </a>
            </div>

            {/* Formal trust & metric markers */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 grid grid-cols-3 gap-4 text-xs">
              <div>
                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="font-mono text-base">420ms</span>
                </div>
                <div className="text-neutral-500">Sub-second OTP Latency</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-mono text-base">4.8x</span>
                </div>
                <div className="text-neutral-500">Avg Ads ROAS Delivered</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold mb-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span className="font-mono text-base">99.98%</span>
                </div>
                <div className="text-neutral-500">Enterprise Service SLA</div>
              </div>
            </div>
          </div>

          {/* Interactive Formal Service Portfolio Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/70 p-5 shadow-2xl backdrop-blur-sm relative">
              {/* Top status bar inside card */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-neutral-900 dark:text-white">RLV Nexus Service Matrix</span>
                </div>
                <div className="text-neutral-500 font-mono text-[11px]">Direct Executive Desk</div>
              </div>

              {/* Service Cards Matrix */}
              <div className="space-y-3">
                {/* Software Dev row */}
                <a
                  href="#software"
                  className="block p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 hover:border-indigo-500/50 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">Software Development & Coders</span>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                      Dedicated
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-8">
                    Custom Web & Mobile Apps, Cloud Microservices, API Integrations
                  </p>
                </a>

                {/* Ads Marketing row */}
                <a
                  href="#marketing"
                  className="block p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 hover:border-purple-500/50 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">Digital Ads & Performance Marketing</span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                      Meta & Google
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-8">
                    Full-funnel PPC, Meta Ads, LinkedIn B2B, Conversion Optimization
                  </p>
                </a>

                {/* Messaging & OTP row */}
                <a
                  href="#telecom"
                  className="block p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 hover:border-emerald-500/50 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">SMS, WhatsApp & OTP Gateways</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Sub-Second
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-8">
                    DLT Transactional SMS, Official WhatsApp Cloud API, 2FA Passcodes
                  </p>
                </a>

                {/* Video Editing row */}
                <a
                  href="#video"
                  className="block p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 hover:border-amber-500/50 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                        <Video className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">Video Editing & Motion Graphics</span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      4K Studio
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-8">
                    Commercial Ads, Social Reels, Tech Demos & Color Grading
                  </p>
                </a>
              </div>

              {/* Bottom quick contact bar */}
              <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <Headphones className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Call / WhatsApp: <strong className="text-neutral-900 dark:text-white font-mono">9304132812</strong></span>
                </div>
                <a
                  href="#order"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
