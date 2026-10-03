import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  Code2,
  TrendingUp,
  MessageSquare,
  KeyRound,
  Video,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers
} from 'lucide-react';

export const RecentProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Ads' | 'Telecom' | 'Video'>('All');

  const clients = [
    { name: 'Apex Mobility', category: 'EV Mobility & IoT', metric: 'Enterprise Web Platform' },
    { name: 'UrbanPulse Retail', category: 'Direct-to-Consumer', metric: '5.4x Ads ROAS' },
    { name: 'Krypton Pay', category: 'Fintech & Banking', metric: '380ms OTP Gateway' },
    { name: 'OmniChain Labs', category: 'Web3 & AI Tech', metric: '4K Commercial Revisions' },
    { name: 'EduVantage Global', category: 'EdTech Institute', metric: 'Coding Curriculum LMS' },
    { name: 'Bharat Logistics', category: 'Supply Chain', metric: 'WhatsApp Tracking API' }
  ];

  const projects = [
    {
      id: 'proj-1',
      title: 'Apex Cloud Fleet Telematics & Driver Portal',
      client: 'Apex Mobility Systems',
      category: 'Software',
      summary: 'High-concurrency fleet management dashboard with live GPS ingestion, automated driver payouts, and offline-first mobile companion app.',
      metrics: ['99.99% Uptime', '15,000+ Connected Vehicles', '40ms API Latency'],
      tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
      color: 'from-blue-600/10 via-indigo-600/10 to-transparent'
    },
    {
      id: 'proj-2',
      title: 'UrbanPulse Full-Funnel Paid Acquisition & Retargeting',
      client: 'UrbanPulse Retail Brands',
      category: 'Ads',
      summary: 'Omni-channel performance marketing scaling monthly ad spend from $8K to $48K while lifting blended return on ad spend.',
      metrics: ['5.4x Blended ROAS', '412,000 Store Visits', '$3.28 Avg CPA'],
      tags: ['Google PPC', 'Meta Ads', 'LinkedIn B2B', 'Attribution Modeling'],
      color: 'from-purple-600/10 via-pink-600/10 to-transparent'
    },
    {
      id: 'proj-3',
      title: 'High-Volume 2FA Passcode Gateway & Carrier Failover',
      client: 'Krypton Pay & Digital Banking',
      category: 'Telecom',
      summary: 'Mission-critical sub-second OTP verification delivery infrastructure with automated fallback across SMS, WhatsApp Cloud API, and Email.',
      metrics: ['380ms Transit Latency', '99.98% DLT Delivery', '12M+ OTPs Dispatched'],
      tags: ['DLT Tier 1 Route', 'WhatsApp Cloud API', 'Zero Failover Drop'],
      color: 'from-emerald-600/10 via-teal-600/10 to-transparent'
    },
    {
      id: 'proj-4',
      title: 'Cinematic 4K Brand Launch & 9:16 Viral Reels Suite',
      client: 'OmniChain Labs',
      category: 'Video',
      summary: 'End-to-end commercial post-production, 3D motion graphics, kinetic typography, and high-conversion social ad cuts.',
      metrics: ['1.4M Organic Views', '14 Social Cuts Delivered', '4K ProRes Mastered'],
      tags: ['DaVinci Color', '4K ProRes', 'Motion Graphics', 'Short Form Reels'],
      color: 'from-amber-600/10 via-orange-600/10 to-transparent'
    },
    {
      id: 'proj-5',
      title: 'Next-Gen Interactive Coding LMS & Student Sandbox',
      client: 'EduVantage Global',
      category: 'Software',
      summary: 'In-browser interactive coding sandbox, automated assignment grading, and live streaming mentorship rooms for 50,000+ developers.',
      metrics: ['50K+ Active Coders', 'Sub-second Code Runner', 'Multi-tenant RBAC'],
      tags: ['Next.js', 'Docker Sandboxes', 'Python', 'Tailwind CSS'],
      color: 'from-indigo-600/10 via-blue-600/10 to-transparent'
    },
    {
      id: 'proj-6',
      title: 'Automated WhatsApp Business Notification Engine',
      client: 'Bharat Logistics Express',
      category: 'Telecom',
      summary: 'Real-time shipment tracking, automated delivery OTPs, and conversational customer support bot handling 400K messages daily.',
      metrics: ['400K Daily Messages', '99.4% Read Rate', 'Official Green Tick'],
      tags: ['WhatsApp Cloud API', 'Automated Bot Flows', 'Webhook Relays'],
      color: 'from-emerald-600/10 via-green-600/10 to-transparent'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Proven Execution & Trusted Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
              Recent Client Deployments & Engineering Success Stories
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Explore how RLV Nexus architects full-stack software, launches high-converting advertising, delivers millions of verified OTPs, and produces commercial visual content.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 self-start text-xs overflow-x-auto max-w-full">
            {(['All', 'Software', 'Ads', 'Telecom', 'Video'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Client Logos & Trust Strip */}
        <div className="mb-14 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono text-center mb-6">
            Trusted by Growing Startups & Enterprise Market Leaders
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clients.map((c) => (
              <div
                key={c.name}
                className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="font-bold text-xs text-neutral-900 dark:text-white">{c.name}</div>
                <div className="text-[10px] text-neutral-400 truncate mt-0.5">{c.category}</div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">{c.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-600 transition-all shadow-xs relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-neutral-400 font-semibold">{p.client}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {p.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {p.summary}
                </p>

                {/* Key Outcome Metrics */}
                <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs">
                  {p.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 font-mono text-[11px] text-neutral-800 dark:text-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order Similar Project Link */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-500 text-[11px]">Ready to replicate this result?</span>
                <a
                  href="#order"
                  className="font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1 transition-colors"
                >
                  <span>Order Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
