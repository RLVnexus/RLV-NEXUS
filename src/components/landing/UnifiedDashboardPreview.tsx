import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  LayoutDashboard,
  Code2,
  TrendingUp,
  MessageSquare,
  Video,
  FileText,
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export const UnifiedDashboardPreview: React.FC = () => {
  const { setPage, setDashboardTab } = useApp();
  const [activePreview, setActivePreview] = useState<'metrics' | 'reporting' | 'sync'>('metrics');

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Single Pane of Glass
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
            Consolidate fragmented workflows into one intuitive client dashboard.
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Stop juggling 6 different SaaS tools and communication channels. Track software sprints, live advertising spend, OTP deliverability rates, and video approvals in one unified workspace.
          </p>

          {/* Interactive Preview Switcher (Buttons with click handlers) */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setActivePreview('metrics')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activePreview === 'metrics'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Real-Time Performance
            </button>
            <button
              onClick={() => setActivePreview('reporting')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activePreview === 'reporting'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Automated Reporting
            </button>
            <button
              onClick={() => setActivePreview('sync')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activePreview === 'sync'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Remote Team Sync
            </button>
          </div>
        </div>

        {/* Dashboard Preview Shell */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-4 sm:p-6 shadow-xl backdrop-blur-md">
          {/* Header of preview shell */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-neutral-200 dark:border-neutral-800 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-neutral-900 dark:text-white">Client Portal &middot; RLV Nexus</span>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-500 font-mono">Real-Time Production Feed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Sync: All Systems Operational
              </span>
              <a
                href="#order"
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-colors flex items-center gap-1"
              >
                <span>Order Services</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Dynamic Content based on active preview */}
          {activePreview === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-[11px] text-neutral-500 mb-1">Active Sprints</div>
                  <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">12 Tasks</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">4 In Code Review</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-[11px] text-neutral-500 mb-1">Blended ROAS (Q4)</div>
                  <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">4.82x</div>
                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400 mt-1">+$42.4K Net Pipeline</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-[11px] text-neutral-500 mb-1">OTP Success Rate</div>
                  <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">99.96%</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">420ms Avg Latency</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-[11px] text-neutral-500 mb-1">Video Deliverables</div>
                  <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">3 In Pipeline</div>
                  <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">1 Awaiting Approval</div>
                </div>
              </div>

              {/* Sample Activity Feed */}
              <div className="rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="text-xs font-semibold text-neutral-900 dark:text-white mb-3">Live Service Activity Stream</div>
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80 text-xs">
                  <div className="py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-indigo-500" />
                      <span className="text-neutral-700 dark:text-neutral-300">Software PR #105 merged: "Client Dashboard Sync Engine"</span>
                    </div>
                    <span className="text-neutral-400 font-mono text-[11px]">12m ago</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-500" />
                      <span className="text-neutral-700 dark:text-neutral-300">SMS & WhatsApp Batch 9042 delivered to 14,200 recipients (99.8% success)</span>
                    </div>
                    <span className="text-neutral-400 font-mono text-[11px]">34m ago</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-amber-500" />
                      <span className="text-neutral-700 dark:text-neutral-300">Commercial Cut V3 uploaded to Review Room for client feedback</span>
                    </div>
                    <span className="text-neutral-400 font-mono text-[11px]">1h ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePreview === 'reporting' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white mb-1">Executive Weekly Brief</div>
                  <p className="text-[11px] text-neutral-500 mb-3">Consolidates dev velocity, marketing ROAS, and gateway deliverability.</p>
                  <span className="text-[11px] font-mono text-indigo-500">Auto-generated every Monday 08:00 AM</span>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white mb-1">Daily Marketing Attribution</div>
                  <p className="text-[11px] text-neutral-500 mb-3">Ad spend vs conversions across Google, Meta and LinkedIn.</p>
                  <span className="text-[11px] font-mono text-emerald-500">Dispatched directly to Slack / Email</span>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white mb-1">Telecom Gateway SLA Log</div>
                  <p className="text-[11px] text-neutral-500 mb-3">Full carrier latency logs, DLT status, and OTP verification rates.</p>
                  <span className="text-[11px] font-mono text-amber-500">Real-time CSV & PDF generation</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-white">Export on-demand operational audit reports anytime</span>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Download full CSV raw telemetry or branded PDF executive presentations.</p>
                </div>
                <a
                  href="#order"
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs whitespace-nowrap"
                >
                  Order Custom Audit
                </a>
              </div>
            </div>
          )}

          {activePreview === 'sync' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">Distributed Database Synchronization</div>
                    <p className="text-[11px] text-neutral-500">CRDT-based conflict-free state distribution across remote regional edge nodes.</p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                    0 Conflict State
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <div className="text-neutral-500 text-[11px]">Primary Region</div>
                    <div className="font-bold text-neutral-900 dark:text-white font-mono">Bangalore (IN-S1)</div>
                    <div className="text-emerald-500 text-[11px] font-mono mt-1">14ms latency</div>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <div className="text-neutral-500 text-[11px]">Secondary Gateway</div>
                    <div className="font-bold text-neutral-900 dark:text-white font-mono">Mumbai (IN-W1)</div>
                    <div className="text-emerald-500 text-[11px] font-mono mt-1">18ms latency</div>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <div className="text-neutral-500 text-[11px]">International Relay</div>
                    <div className="font-bold text-neutral-900 dark:text-white font-mono">Singapore (SG-E1)</div>
                    <div className="text-emerald-500 text-[11px] font-mono mt-1">38ms latency</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
