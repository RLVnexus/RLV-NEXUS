import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  Code,
  Smartphone,
  TrendingUp,
  MessageSquare,
  KeyRound,
  Video,
  Database,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

export const ServicesShowcase: React.FC = () => {
  const { setPage, setDashboardTab } = useApp();
  const [activePillar, setActivePillar] = useState<'software' | 'ads' | 'telecom' | 'video' | 'sync'>('software');

  return (
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Integrated Service Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
            Comprehensive digital services engineered under a single umbrella.
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Eliminate vendor fragmentation. RLV Nexus brings together software engineering, digital performance advertising, direct telecom gateways, and video creative production with centralized client visibility.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Software Development & Coding (Col Span 7) */}
          <div id="software" className="md:col-span-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div>
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
                01. Full-Stack Engineering & Coders
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                Custom Software Engineering & Dedicated Developers
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                From high-concurrency microservices and cloud infrastructure to modern web apps and native mobile platforms. Our dedicated coders build scalable, battle-tested software designed for high enterprise uptime.
              </p>

              {/* Technical Feature Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80">
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Full-Stack Architecture</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">React, TypeScript, Node.js, Python, PostgreSQL, Redis</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80">
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Mobile Applications</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Cross-platform iOS & Android with offline-first state sync</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Live Sprint Kanban & GitHub Webhooks</span>
              <a
                href="#order"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1"
              >
                <span>Order Software Team</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Digital Marketing & Ads Marketing (Col Span 5) */}
          <div id="marketing" className="md:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div>
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
                02. Performance Growth
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                Digital Marketing & High-ROAS Advertising
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Full-funnel campaign management across Google Search & Display, Meta Ads (Facebook & Instagram), LinkedIn B2B, and YouTube programmatic channels with precise multi-touch attribution.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-600 dark:text-neutral-400">Target ROAS Standard</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">4.2x — 5.8x</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-600 dark:text-neutral-400">Supported Ad Networks</span>
                  <span className="font-mono text-neutral-900 dark:text-white">Meta, Google, LinkedIn</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5">
                  <span className="text-neutral-600 dark:text-neutral-400">Automated Bid Optimization</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">Algorithmic</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Live spend & attribution tracker</span>
              <a
                href="#order"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1"
              >
                <span>Order Ads Campaign</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Direct Messaging & High-Volume OTP Gateway (Col Span 6) */}
          <div id="telecom" className="md:col-span-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div>
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
                03. Telecom & Messaging Infrastructure
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                SMS, WhatsApp Business, Email & OTP Gateway
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Enterprise messaging delivery engine. Send mission-critical two-factor authentication OTPs, WhatsApp conversational campaigns, and transactional SMS with sub-second failover routing.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                    <KeyRound className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Instant OTP Service</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-mono">420ms Avg Global Dispatch</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>WhatsApp Cloud API</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Official verified green tick templates</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Live Gateway with Sub-Second Transit</span>
              <a
                href="#order"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1"
              >
                <span>Order Gateway Setup</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 4: Video Editing & Creative Production (Col Span 6) */}
          <div id="video" className="md:col-span-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div>
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
                04. Creative Studio
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                Commercial Video Editing & Motion Graphics
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                High-converting visual assets tailored for social media advertising, product launch films, YouTube explainer videos, and vertical reels with built-in timecoded client review stages.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-600 dark:text-neutral-400">Deliverables</span>
                  <span className="text-neutral-900 dark:text-white font-medium">4K ProRes, 9:16 Reels, WebM</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-600 dark:text-neutral-400">Post-Production Pipeline</span>
                  <span className="text-neutral-900 dark:text-white font-medium">Rough Cut &rarr; Color Grade &rarr; Master</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5">
                  <span className="text-neutral-600 dark:text-neutral-400">Review Room</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">Timecode Revision Tracking</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Commercial & Social Revisions Included</span>
              <a
                href="#order"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1"
              >
                <span>Order Video Package</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 5: Real-Time Remote Team Synchronization & Automated Reporting (Col Span 12) */}
          <div className="md:col-span-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-2">
                  05. Unified Operations & Architecture
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                  Real-Time Database Sync & Automated Executive Reporting
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Keep distributed remote teams perfectly aligned. Our database synchronization engine connects engineering, marketing leads, telecom dispatchers, and creative reviewers with zero latency drift and automated scheduled reporting.
                </p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <Database className="w-4 h-4 text-indigo-500" />
                    <span>Multi-Region Conflict Resolution</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Automated PDF & CSV Summaries</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>End-to-End Audit Logs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-neutral-900 dark:text-white">Active Distributed Sync</span>
                    <span className="font-mono text-emerald-500">5 Nodes Operational</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px] text-neutral-500">
                    <div className="flex justify-between">
                      <span>Bangalore &middot; IN-S1</span>
                      <span className="text-neutral-400">14ms ping</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mumbai &middot; IN-W1</span>
                      <span className="text-neutral-400">18ms ping</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Singapore &middot; SG-E1</span>
                      <span className="text-neutral-400">38ms ping</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#order"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Order Full Digital Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
