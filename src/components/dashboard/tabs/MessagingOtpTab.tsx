import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import {
  MessageSquare,
  KeyRound,
  Send,
  Smartphone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Zap,
  ShieldCheck,
  Server
} from 'lucide-react';

export const MessagingOtpTab: React.FC = () => {
  const { messagingMetrics, otpLogs, sendTestOtp } = useApp();
  const [recipient, setRecipient] = useState('+91 98402 12345');
  const [selectedService, setSelectedService] = useState<'SMS OTP' | 'WhatsApp OTP' | 'Email OTP'>('SMS OTP');
  const [isSending, setIsSending] = useState(false);

  // WhatsApp Campaign preview state
  const [templateType, setTemplateType] = useState<'transactional' | 'marketing' | 'otp'>('otp');

  const handleDispatchOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient.trim()) return;
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 450));
    await sendTestOtp(recipient.trim(), selectedService);
    setIsSending(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-emerald-500" />
          <span>SMS, WhatsApp, Email & Sub-Second OTP Gateway</span>
        </h2>
        <p className="text-xs text-neutral-500 mt-0.5">
          Enterprise direct communication infrastructure with 99.98% delivery rate and automated multi-channel failover routing.
        </p>
      </div>

      {/* SLA Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {messagingMetrics.map((metric) => (
          <div
            key={metric.channel}
            className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          >
            <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
              <span>{metric.channel}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              {metric.deliveryRate}%
            </div>
            <div className="mt-2 text-[11px] text-neutral-500 flex items-center justify-between font-mono">
              <span>{metric.avgLatencyMs}ms avg latency</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tier 1 Route</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Split: Interactive OTP Dispatcher Sandbox vs WhatsApp Template Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Live Gateway Sandbox (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Live OTP & SMS Gateway Dispatcher Sandbox</h3>
              <p className="text-[11px] text-neutral-500">Test live packet transit and measure carrier delivery latency in real time.</p>
            </div>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              Carrier Nodes Ready
            </span>
          </div>

          <form onSubmit={handleDispatchOtp} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Target Gateway Channel
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['SMS OTP', 'WhatsApp OTP', 'Email OTP'] as const).map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      selectedService === service
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                        : 'bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:border-neutral-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Recipient Destination (Mobile / Email)
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="+91 98402 12345 or client@enterprise.com"
                  className="w-full px-3 py-2.5 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Submits high-priority transactional payload through RLV Nexus routing cluster.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs">
              <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">
                <span>Payload: 6-Digit Dynamic Cryptographic Hash</span>
                <span className="text-emerald-600 dark:text-emerald-400">TTL: 300s</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                "Your RLV Nexus verification security code is <span className="font-mono font-bold text-neutral-900 dark:text-white">849201</span>. Valid for 5 minutes. Do not share."
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSending ? 'Transmitting via Carrier...' : `Dispatch Live ${selectedService}`}</span>
            </button>
          </form>
        </div>

        {/* Right: WhatsApp Business Verified Preview (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">WhatsApp Cloud API Preview</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Meta Verified Template
              </span>
            </div>

            {/* Simulated WhatsApp Phone Screen */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 max-w-sm mx-auto shadow-inner">
              <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-neutral-200 dark:border-neutral-800">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  RN
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                    <span>RLV Nexus Verified</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 fill-emerald-500 text-white" />
                  </div>
                  <div className="text-[10px] text-neutral-400">Official Business Account</div>
                </div>
              </div>

              {/* Message Bubble */}
              <div className="p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs shadow-xs space-y-2">
                <div className="text-[11px] font-bold text-neutral-900 dark:text-white">
                  Security Authentication Code
                </div>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Your one-time verification passcode is:
                </p>
                <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-950 text-center font-mono font-bold text-sm tracking-widest text-emerald-600 dark:text-emerald-400">
                  849 201
                </div>
                <div className="text-[10px] text-neutral-400 text-right font-mono">19:42 &middot; Sent</div>
              </div>

              {/* Quick Reply Button */}
              <div className="mt-2 text-center">
                <div className="py-1.5 px-3 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 shadow-xs">
                  Copy Verification Code
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 flex items-center justify-between">
            <span>DLT Principal Entity ID: 170115982001</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Active</span>
          </div>
        </div>
      </div>

      {/* Real-Time OTP & Messaging Audit Log Table */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Real-Time Gateway Transaction & SLA Log</h3>
          <span className="text-xs text-neutral-500 font-mono">Live WebSocket Ingestion</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-neutral-50 dark:bg-neutral-950/60 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Message ID</th>
                <th className="py-3 px-4 font-semibold">Channel</th>
                <th className="py-3 px-4 font-semibold">Masked Recipient</th>
                <th className="py-3 px-4 font-semibold">Code Preview</th>
                <th className="py-3 px-4 font-semibold">Latency</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
              {otpLogs.map((log) => (
                <tr key={log.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3 px-4 font-mono text-[11px] text-neutral-400">{log.id}</td>
                  <td className="py-3 px-4 font-medium text-neutral-900 dark:text-white">{log.service}</td>
                  <td className="py-3 px-4 font-mono text-neutral-600 dark:text-neutral-300">{log.recipient}</td>
                  <td className="py-3 px-4 font-mono text-neutral-500">{log.codePreview}</td>
                  <td className="py-3 px-4 font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                    {log.latencyMs}ms
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {log.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-neutral-400 text-[11px]">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
