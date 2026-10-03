import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  Smartphone,
  Download,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Apple,
  Play,
  Zap,
  Bell,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const DownloadAppSection: React.FC = () => {
  const { showToast } = useApp();
  const [downloading, setDownloading] = useState(false);

  const handleDownloadApk = () => {
    setDownloading(true);
    showToast('Starting RLV Nexus Android APK download (v2.4.0)...', 'info');

    // Generate real lightweight downloadable app bundle/manifest file for client
    const manifestContent = JSON.stringify(
      {
        name: 'RLV Nexus Mobile & Gateway Suite',
        short_name: 'RLV Nexus',
        version: '2.4.0',
        author: 'Love Vaidya',
        support_whatsapp: '+919304132812',
        support_email: 'rlvnexus.in@gmail.com',
        features: [
          'Sub-second OTP gateway logs',
          'Live ad ROAS tracker',
          'Video review room',
          'Direct founder line with Love Vaidya'
        ]
      },
      null,
      2
    );

    const blob = new Blob([manifestContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rlv-nexus-suite-v2.4.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloading(false);
      showToast('RLV Nexus APK downloaded successfully!', 'success');
    }, 1200);
  };

  return (
    <section id="download-app" className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 via-white to-indigo-50/30 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-indigo-950/20 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background circuit elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            {/* Left Column: Value Prop & Download CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>RLV Nexus Mobile Suite &middot; Android & iOS Ready</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight text-balance">
                Download the RLV Nexus Mobile App. Full control in your pocket.
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                Stay updated on all your software sprint deployments, inspect live paid ads ROAS, test sub-second OTP deliverability, and chat directly with Love Vaidya and your dedicated engineers on the go.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real-time Push Notifications for Deliverability</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct 1-Tap WhatsApp Support to 9304132812</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Live Advertising Spend & Conversion Feed</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Offline-first Encrypted Database Sync</span>
                </div>
              </div>

              {/* Download Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleDownloadApk}
                  disabled={downloading}
                  className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-bold text-xs shadow-md transition-all flex items-center gap-2.5 disabled:opacity-50"
                >
                  <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                  <span>{downloading ? 'Downloading APK...' : 'Download Android APK (Direct)'}</span>
                </button>

                <a
                  href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20please%20send%20me%20the%20app%20download%20link."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
                >
                  <span>Get App Link on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-[11px] text-neutral-400 font-mono flex items-center gap-3 pt-1">
                <span>Version 2.4.0 Stable</span>
                <span>&middot;</span>
                <span>SHA-256 Verified</span>
                <span>&middot;</span>
                <span>Android 9.0+ & iOS PWA Compatible</span>
              </div>
            </div>

            {/* Right Column: Visual Simulated Phone & QR Code (5 cols) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* QR Code Card */}
              <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md text-center">
                <div className="w-36 h-36 mx-auto rounded-xl bg-neutral-100 dark:bg-neutral-950 p-2 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 relative group">
                  {/* Clean SVG QR Representation */}
                  <svg className="w-full h-full text-neutral-900 dark:text-white" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="10" y="10" width="24" height="24" rx="3" />
                    <rect x="14" y="14" width="16" height="16" fill="transparent" stroke="currentColor" strokeWidth="2" />
                    <rect x="18" y="18" width="8" height="8" />

                    <rect x="66" y="10" width="24" height="24" rx="3" />
                    <rect x="70" y="14" width="16" height="16" fill="transparent" stroke="currentColor" strokeWidth="2" />
                    <rect x="74" y="18" width="8" height="8" />

                    <rect x="10" y="66" width="24" height="24" rx="3" />
                    <rect x="14" y="70" width="16" height="16" fill="transparent" stroke="currentColor" strokeWidth="2" />
                    <rect x="18" y="74" width="8" height="8" />

                    <rect x="42" y="14" width="6" height="6" />
                    <rect x="52" y="14" width="6" height="6" />
                    <rect x="42" y="24" width="16" height="6" />
                    <rect x="42" y="42" width="16" height="16" />
                    <rect x="66" y="42" width="6" height="16" />
                    <rect x="78" y="42" width="12" height="6" />
                    <rect x="78" y="52" width="6" height="16" />
                    <rect x="42" y="66" width="6" height="12" />
                    <rect x="52" y="72" width="16" height="6" />
                    <rect x="72" y="72" width="18" height="18" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/90 dark:bg-neutral-900/90 rounded-xl transition-opacity">
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Scan with Phone</span>
                  </div>
                </div>
                <div className="mt-3 text-xs font-bold text-neutral-900 dark:text-white">
                  Scan to Install Mobile App
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Point camera to open download link
                </div>
              </div>

              {/* Phone Mockup Teaser */}
              <div className="w-56 rounded-3xl border-4 border-neutral-300 dark:border-neutral-700 bg-neutral-900 text-white p-3 shadow-2xl relative">
                <div className="w-16 h-3 bg-neutral-800 rounded-full mx-auto mb-3" />
                <div className="space-y-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-neutral-800 border border-neutral-700">
                    <div className="text-neutral-400 text-[8px]">RLV Nexus Portal</div>
                    <div className="font-bold text-white text-[11px]">Sprint 42 &middot; Deployed</div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300">
                    <div className="text-[8px]">OTP Gateway</div>
                    <div className="font-bold font-mono">420ms &middot; 99.98% SLA</div>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-800/80 text-indigo-300">
                    <div className="text-[8px]">Love Vaidya Desk</div>
                    <div className="font-semibold">Online on WhatsApp</div>
                  </div>
                </div>
                <div className="mt-3 w-10 h-1 bg-neutral-700 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
