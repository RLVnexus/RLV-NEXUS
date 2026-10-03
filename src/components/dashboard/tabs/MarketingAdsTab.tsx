import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import {
  TrendingUp,
  Target,
  DollarSign,
  MousePointerClick,
  Layers,
  Pause,
  Play,
  ArrowUpRight,
  Filter
} from 'lucide-react';

export const MarketingAdsTab: React.FC = () => {
  const { campaigns, toggleCampaignStatus } = useApp();
  const [platformFilter, setPlatformFilter] = useState<'All' | 'Google Ads' | 'Meta Ads' | 'LinkedIn Ads' | 'YouTube Ads'>('All');

  const filteredCampaigns = platformFilter === 'All'
    ? campaigns
    : campaigns.filter((c) => c.platform === platformFilter);

  const totalBudget = campaigns.reduce((acc, c) => acc + c.budget, 0);
  const totalSpend = campaigns.reduce((acc, c) => acc + c.spend, 0);
  const totalConversions = campaigns.reduce((acc, c) => acc + c.conversions, 0);
  const avgRoas = (campaigns.reduce((acc, c) => acc + c.roas, 0) / campaigns.length).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <span>Digital Ads & Performance Marketing</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Omni-channel advertising engine across Meta, Google, LinkedIn & YouTube with real-time attribution.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg self-start sm:self-auto text-xs overflow-x-auto max-w-full">
          {(['All', 'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads'] as const).map((plat) => (
            <button
              key={plat}
              onClick={() => setPlatformFilter(plat)}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                platformFilter === plat
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {plat}
            </button>
          ))}
        </div>
      </div>

      {/* Aggregate KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Total Monthly Ad Spend</div>
          <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1 tabular-nums">
            ${totalSpend.toLocaleString()}
          </div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Budget: ${totalBudget.toLocaleString()}</div>
        </div>

        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Blended ROAS</div>
          <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1 tabular-nums">
            {avgRoas}x
          </div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Target: 4.0x standard</div>
        </div>

        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Qualified Conversions</div>
          <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1 tabular-nums">
            {totalConversions.toLocaleString()}
          </div>
          <div className="text-[10px] text-neutral-400 mt-0.5">Verified sales & leads</div>
        </div>

        <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="text-[11px] text-neutral-500">Average CPA</div>
          <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 mt-1 tabular-nums">
            $12.78
          </div>
          <div className="text-[10px] text-neutral-400 mt-0.5">-18% vs industry average</div>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Active Ad Campaigns & Channels</h3>
          <span className="text-xs text-neutral-500 font-mono">{filteredCampaigns.length} campaigns listed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-neutral-50 dark:bg-neutral-950/60 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Campaign Name</th>
                <th className="py-3 px-4 font-semibold">Network</th>
                <th className="py-3 px-4 font-semibold text-right">Spend / Budget</th>
                <th className="py-3 px-4 font-semibold text-right">Clicks (CTR)</th>
                <th className="py-3 px-4 font-semibold text-right">Conversions</th>
                <th className="py-3 px-4 font-semibold text-right">ROAS</th>
                <th className="py-3 px-4 font-semibold text-center">Status / Control</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
              {filteredCampaigns.map((camp) => {
                const ctr = ((camp.clicks / camp.impressions) * 100).toFixed(2);
                return (
                  <tr key={camp.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-neutral-900 dark:text-white">
                      <div>{camp.name}</div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">{camp.id}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-[11px]">
                        {camp.platform}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                      <div className="text-neutral-900 dark:text-white">${camp.spend.toLocaleString()}</div>
                      <div className="text-[11px] text-neutral-400">of ${camp.budget.toLocaleString()}</div>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                      <div className="text-neutral-900 dark:text-white">{camp.clicks.toLocaleString()}</div>
                      <div className="text-[11px] text-neutral-400">{ctr}% CTR</div>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                      <div className="text-neutral-900 dark:text-white font-semibold">{camp.conversions}</div>
                      <div className="text-[11px] text-neutral-400">${camp.cpa.toFixed(2)} CPA</div>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                        {camp.roas.toFixed(1)}x
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => toggleCampaignStatus(camp.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                          camp.status === 'active'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20'
                            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {camp.status === 'active' ? (
                          <>
                            <Pause className="w-3 h-3" />
                            <span>Active</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3" />
                            <span>Paused</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
