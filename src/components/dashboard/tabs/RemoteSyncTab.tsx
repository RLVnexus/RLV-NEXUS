import React from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import {
  Database,
  RefreshCw,
  Server,
  Activity,
  ShieldCheck,
  Globe2,
  HardDrive,
  Cpu,
  Wifi,
  Users
} from 'lucide-react';

export const RemoteSyncTab: React.FC = () => {
  const { syncNodes, isSyncing, lastSyncedTimestamp, triggerManualSync, teamMembers } = useApp();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-500" />
            <span>Distributed Database Architecture & Real-Time Sync</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            CRDT-powered multi-region synchronization engine ensuring zero data loss and sub-50ms consistency for distributed remote teams.
          </p>
        </div>

        <button
          onClick={triggerManualSync}
          disabled={isSyncing}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 transition-all disabled:opacity-50 self-start sm:self-auto shadow-sm"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
          <span>{isSyncing ? 'Synchronizing Mesh...' : 'Force Full Mesh Sync'}</span>
        </button>
      </div>

      {/* Sync Status Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <Wifi className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Active Distributed Mesh</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              All 5 remote cloud database clusters synchronized. Last handshake: <span className="font-mono text-neutral-700 dark:text-neutral-300 font-semibold">{lastSyncedTimestamp}</span>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono self-start md:self-auto">
          <div>
            <div className="text-neutral-400 text-[10px]">Conflict Resolution</div>
            <div className="text-neutral-900 dark:text-white font-bold">LWW-CRDT Matrix</div>
          </div>
          <div>
            <div className="text-neutral-400 text-[10px]">Offline Cache</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold">Encrypted IndexedDB</div>
          </div>
        </div>
      </div>

      {/* Distributed Edge Node Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {syncNodes.map((node) => (
          <div
            key={node.id}
            className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-xs"
          >
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-500" />
                <span className="font-bold text-neutral-900 dark:text-white font-mono">{node.id.toUpperCase()}</span>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                  node.status === 'syncing'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                }`}
              >
                {node.status === 'syncing' ? 'Replicating...' : 'Synchronized'}
              </span>
            </div>

            <div>
              <div className="font-semibold text-neutral-800 dark:text-neutral-200">{node.nodeName}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5 flex items-center gap-1">
                <Globe2 className="w-3 h-3" />
                <span>{node.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between font-mono text-[11px]">
              <span className="text-neutral-500">Latency: <span className="text-neutral-900 dark:text-white font-bold">{node.latencyMs}ms</span></span>
              <span className="text-neutral-400">Ping: {node.lastPing}</span>
            </div>
          </div>
        ))}

        {/* Global Cluster Summary Card */}
        <div className="p-4 rounded-xl border border-dashed border-indigo-300 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 text-xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-indigo-950 dark:text-indigo-200 mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
              <span>Enterprise Data Sovereignty</span>
            </div>
            <p className="text-[11px] text-indigo-800/80 dark:text-indigo-300/80 leading-relaxed">
              Every remote team interaction is cryptographically hashed with row-level tenant security rules before replicating across regional borders.
            </p>
          </div>

          <div className="mt-4 pt-2 border-t border-indigo-200 dark:border-indigo-900/40 font-mono text-[11px] text-indigo-700 dark:text-indigo-400">
            TLS 1.3 &middot; Zero Stale Read Guarantee
          </div>
        </div>
      </div>

      {/* Remote Team Members Connected Node Mapping */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-xs mb-4">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-neutral-500" />
              <span>Remote Team Members & Assigned Regional Node Relays</span>
            </h3>
            <p className="text-[11px] text-neutral-500">Real-time team presence connected to low-latency edge gateways</p>
          </div>
          <span className="font-mono text-emerald-600 dark:text-emerald-400">{teamMembers.length} Members Active</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {teamMembers.map((member, i) => (
            <div
              key={member.id}
              className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {member.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-neutral-900 dark:text-white truncate">{member.name}</div>
                  <div className="text-[10px] text-neutral-400 truncate">{member.role}</div>
                </div>
              </div>
              <div className="text-[11px] text-neutral-500 flex justify-between font-mono pt-1.5 border-t border-neutral-200/60 dark:border-neutral-800">
                <span>{member.location}</span>
                <span className="text-emerald-600 dark:text-emerald-400">Online</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
