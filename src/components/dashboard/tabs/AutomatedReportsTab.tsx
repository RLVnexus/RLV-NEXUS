import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import { ReportItem } from '../../../types/index.ts';
import {
  FileSpreadsheet,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  Mail,
  Plus,
  FileText,
  FileCode,
  Sparkles
} from 'lucide-react';

export const AutomatedReportsTab: React.FC = () => {
  const { reports, generateReport, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ReportItem['category']>('Executive Summary');
  const [selectedFormat, setSelectedFormat] = useState<'PDF' | 'CSV'>('PDF');
  const [autoEmailEnabled, setAutoEmailEnabled] = useState(true);

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    generateReport(selectedCategory, selectedFormat);
  };

  const handleDownload = (report: ReportItem) => {
    // Generate real downloadable file for user
    const content = report.fileFormat === 'CSV'
      ? `RLV Nexus Automated Report - ${report.title}\nCategory,${report.category}\nGenerated Date,${report.generatedDate}\nRecipient,rlvnexus.in@gmail.com\nStatus,Verified Operational SLA 99.98%\nSoftware Sprints,42 Active,100% On Time\nAds ROAS,4.82x Blended\nSMS & OTP Latency,420ms Avg Transit`
      : `=== RLV NEXUS EXECUTIVE REPORT ===\nTitle: ${report.title}\nDate: ${report.generatedDate}\nCategory: ${report.category}\nFormat: ${report.fileFormat}\nDispatched to: rlvnexus.in@gmail.com\n\nEXECUTIVE HIGHLIGHTS:\n- 100% Software Sprint Delivery\n- 4.82x Blended Paid Advertising ROAS\n- 99.96% Sub-second OTP Delivery across Indian & Global routes\n- Real-time Remote Team Synchronization Active across 5 edge clusters`;

    const blob = new Blob([content], { type: report.fileFormat === 'CSV' ? 'text/csv' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.id}_${report.category.replace(/\s+/g, '_')}.${report.fileFormat.toLowerCase()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Downloaded ${report.id} (${report.fileFormat})`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-indigo-500" />
          <span>Automated Reporting & Operational Transparency</span>
        </h2>
        <p className="text-xs text-neutral-500 mt-0.5">
          Scheduled and on-demand executive intelligence reports consolidating software engineering, marketing ROAS, and telecom gateways.
        </p>
      </div>

      {/* Report Generator Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-xs">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Generate Instant Operational Audit</h3>
          <p className="text-[11px] text-neutral-500 mb-4">
            Compile fresh data points across all 5 digital service domains into a clean presentation.
          </p>

          <form onSubmit={handleCreateReport} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                Report Scope / Domain
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    'Executive Summary',
                    'Marketing ROAS',
                    'Engineering Velocity',
                    'Gateway SLA'
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-2.5 rounded-lg border text-left font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-700 dark:text-indigo-300'
                        : 'bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:border-neutral-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                File Export Format
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFormat('PDF')}
                  className={`flex-1 py-2 px-3 rounded-lg border font-semibold flex items-center justify-center gap-1.5 ${
                    selectedFormat === 'PDF'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Executive PDF Document</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFormat('CSV')}
                  className={`flex-1 py-2 px-3 rounded-lg border font-semibold flex items-center justify-center gap-1.5 ${
                    selectedFormat === 'CSV'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Raw Telemetry CSV</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Compile & Archive New Report</span>
            </button>
          </form>
        </div>

        {/* Automated Scheduling Dispatch Settings */}
        <div className="lg:col-span-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Automated Dispatch Cadence</h3>
            <p className="text-[11px] text-neutral-500 mb-4">
              Configured recurring digests delivered directly to corporate stakeholders.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Monday Executive Brief</div>
                  <div className="text-[11px] text-neutral-500">Every Monday at 08:00 IST &middot; PDF</div>
                </div>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">Scheduled</span>
              </div>

              <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Daily Ad Spend & Attribution</div>
                  <div className="text-[11px] text-neutral-500">Every midnight 23:59 IST &middot; CSV & Slack</div>
                </div>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">Scheduled</span>
              </div>

              <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Monthly Gateway SLA Compliance</div>
                  <div className="text-[11px] text-neutral-500">1st of month &middot; Carrier verification logs</div>
                </div>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">Scheduled</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs mt-3">
            <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              <span>Primary Recipient: rlvnexus.in@gmail.com</span>
            </div>
            <span className="text-[11px] text-neutral-400 font-mono">TLS Encrypted</span>
          </div>
        </div>
      </div>

      {/* Reports Archive Table */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Generated Reports & Audits Archive</h3>
          <span className="text-xs text-neutral-500 font-mono">{reports.length} reports stored</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-neutral-50 dark:bg-neutral-950/60 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Report ID</th>
                <th className="py-3 px-4 font-semibold">Title</th>
                <th className="py-3 px-4 font-semibold">Cadence</th>
                <th className="py-3 px-4 font-semibold">Domain</th>
                <th className="py-3 px-4 font-semibold">File Format</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
              {reports.map((rpt) => (
                <tr key={rpt.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-400">{rpt.id}</td>
                  <td className="py-3.5 px-4 font-medium text-neutral-900 dark:text-white">
                    <div>{rpt.title}</div>
                    <div className="text-[10px] text-neutral-400">{rpt.generatedDate} &middot; {rpt.fileSize}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-neutral-600 dark:text-neutral-400">{rpt.frequency}</td>
                  <td className="py-3.5 px-4 font-medium text-neutral-800 dark:text-neutral-200">{rpt.category}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {rpt.fileFormat}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDownload(rpt)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 font-semibold transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
