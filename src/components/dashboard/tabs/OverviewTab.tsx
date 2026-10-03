import React from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import {
  Code2,
  TrendingUp,
  MessageSquare,
  KeyRound,
  Video,
  FileSpreadsheet,
  ArrowRight,
  Database,
  Users,
  CheckCircle2,
  Clock,
  RefreshCw
} from 'lucide-react';

export const OverviewTab: React.FC = () => {
  const {
    tasks,
    campaigns,
    messagingMetrics,
    videoProjects,
    syncNodes,
    isSyncing,
    triggerManualSync,
    setDashboardTab
  } = useApp();

  const totalAdSpend = campaigns.reduce((acc, c) => acc + c.spend, 0);
  const totalConversions = campaigns.reduce((acc, c) => acc + c.conversions, 0);
  const avgRoas = (campaigns.reduce((acc, c) => acc + c.roas, 0) / campaigns.length).toFixed(2);
  const totalMessagesSent = messagingMetrics.reduce((acc, m) => acc + m.sentToday, 0);
  const inProgressTasks = tasks.filter((t) => t.status === 'in_progress' || t.status === 'in_review').length;

  return (
    <div className="space-y-6">
      {/* Top Banner: Real-Time Operational Health */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-neutral-900 to-indigo-950 text-white border border-indigo-900/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Unified Production Environment &middot; All 5 Pillars Active</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">RLV Nexus Central Command</h2>
          <p className="text-xs text-neutral-300 mt-1 max-w-xl">
            Live operational intelligence across software development, paid ads, messaging/OTP gateways, and post-production video editing.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={triggerManualSync}
            disabled={isSyncing}
            className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Synchronizing State...' : 'Sync Remote Team'}</span>
          </button>
          <button
            onClick={() => setDashboardTab('reports')}
            className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* KPI Matrix: High Density 4-Card Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Software Velocity */}
        <div
          onClick={() => setDashboardTab('software-dev')}
          className="cursor-pointer p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
        >
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Engineering Sprints</span>
            <Code2 className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
            {inProgressTasks} Active
          </div>
          <div className="mt-2 text-[11px] text-neutral-500 flex items-center justify-between">
            <span>{tasks.length} total sprint tasks</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-0.5">
              Open Board <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* Metric 2: Marketing ROAS */}
        <div
          onClick={() => setDashboardTab('marketing-ads')}
          className="cursor-pointer p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-purple-400 dark:hover:border-purple-600 transition-all"
        >
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Blended Ads ROAS</span>
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
            {avgRoas}x
          </div>
          <div className="mt-2 text-[11px] text-neutral-500 flex items-center justify-between">
            <span className="font-mono text-neutral-700 dark:text-neutral-300 font-medium">
              ${totalAdSpend.toLocaleString()} spend &middot; {totalConversions} conv
            </span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-0.5">
              Campaigns <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* Metric 3: Messaging & OTP Deliverability */}
        <div
          onClick={() => setDashboardTab('messaging-otp')}
          className="cursor-pointer p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all"
        >
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Telecom & OTP Gateway</span>
            <KeyRound className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
            99.96%
          </div>
          <div className="mt-2 text-[11px] text-neutral-500 flex items-center justify-between">
            <span className="font-mono">{totalMessagesSent.toLocaleString()} dispatched</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
              Live Gateway <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* Metric 4: Video Editing Pipeline */}
        <div
          onClick={() => setDashboardTab('video-production')}
          className="cursor-pointer p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-amber-400 dark:hover:border-amber-600 transition-all"
        >
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
            <span>Video Review Pipeline</span>
            <Video className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
            {videoProjects.length} Projects
          </div>
          <div className="mt-2 text-[11px] text-neutral-500 flex items-center justify-between">
            <span>1 awaiting client approval</span>
            <span className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-0.5">
              Review Room <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Split Section: Active Dev Sprint vs Live Messaging Gateway */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Active Engineering Sprints (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Active Software Engineering Sprint</h3>
              <p className="text-[11px] text-neutral-500">Live development commits & status from dedicated coders</p>
            </div>
            <button
              onClick={() => setDashboardTab('software-dev')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Full Kanban
            </button>
          </div>

          <div className="mt-3 divide-y divide-neutral-100 dark:divide-neutral-800/80">
            {tasks.slice(0, 4).map((task) => (
              <div key={task.id} className="py-3 flex items-center justify-between text-xs gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-neutral-400 shrink-0">{task.id}</span>
                    <span className="font-medium text-neutral-900 dark:text-white truncate">{task.title}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-1">
                    <span>{task.category}</span>
                    <span>&middot;</span>
                    <span>{task.assignee.name}</span>
                    {task.commitHash && (
                      <>
                        <span>&middot;</span>
                        <span className="font-mono text-indigo-500">{task.commitHash}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                      task.status === 'deployed'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : task.status === 'in_review'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        : task.status === 'in_progress'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        : 'bg-neutral-500/10 text-neutral-500'
                    }`}
                  >
                    {task.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Real-Time Telecom & OTP Gateway Health (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Direct Messaging Delivery</h3>
                <p className="text-[11px] text-neutral-500">Live throughput across all communication channels</p>
              </div>
              <button
                onClick={() => setDashboardTab('messaging-otp')}
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Send Test OTP
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {messagingMetrics.map((m) => (
                <div key={m.channel} className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-neutral-900 dark:text-white">{m.channel}</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      {m.deliveryRate}% SLA
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden mb-1.5">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${(m.monthlyUsed / m.monthlyQuota) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span>{m.sentToday.toLocaleString()} sent today</span>
                    <span>{m.avgLatencyMs}ms latency</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-4 flex items-center justify-between text-xs">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-neutral-400" />
              <span>Multi-Region Failover Armed</span>
            </span>
            <button
              onClick={() => setDashboardTab('remote-sync')}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-1"
            >
              <span>{syncNodes.length} Nodes Synced</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
