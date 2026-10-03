import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import { DashboardTab } from '../../types/index.ts';
import { OverviewTab } from './tabs/OverviewTab.tsx';
import { SoftwareDevTab } from './tabs/SoftwareDevTab.tsx';
import { MarketingAdsTab } from './tabs/MarketingAdsTab.tsx';
import { MessagingOtpTab } from './tabs/MessagingOtpTab.tsx';
import { VideoProductionTab } from './tabs/VideoProductionTab.tsx';
import { AutomatedReportsTab } from './tabs/AutomatedReportsTab.tsx';
import { RemoteSyncTab } from './tabs/RemoteSyncTab.tsx';
import { TeamManagementTab } from './tabs/TeamManagementTab.tsx';
import {
  LayoutDashboard,
  Code2,
  TrendingUp,
  MessageSquare,
  KeyRound,
  Video,
  FileSpreadsheet,
  Database,
  Users,
  Sun,
  Moon,
  Globe,
  RefreshCw,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const {
    dashboardTab,
    setDashboardTab,
    setPage,
    theme,
    toggleTheme,
    isSyncing,
    triggerManualSync,
    lastSyncedTimestamp
  } = useApp();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: { id: DashboardTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'Central Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'software-dev', label: 'Software & Coders', icon: <Code2 className="w-4 h-4" />, badge: '4 active' },
    { id: 'marketing-ads', label: 'Ads Marketing', icon: <TrendingUp className="w-4 h-4" />, badge: '4.8x' },
    { id: 'messaging-otp', label: 'SMS, WhatsApp & OTP', icon: <KeyRound className="w-4 h-4" />, badge: '99.9%' },
    { id: 'video-production', label: 'Video Production', icon: <Video className="w-4 h-4" /> },
    { id: 'reports', label: 'Automated Reports', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 'remote-sync', label: 'Remote Team Sync', icon: <Database className="w-4 h-4" />, badge: 'Live' },
    { id: 'team-management', label: 'Team & API Access', icon: <Users className="w-4 h-4" /> }
  ];

  const currentItem = navItems.find((item) => item.id === dashboardTab) || navItems[0];

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col transition-colors">
      {/* Top Bar Contract for Dashboard: Breadcrumb left, actions right */}
      <header className="sticky top-0 z-30 h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar navigation"
            className="lg:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setPage('landing')}
              className="font-bold text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              RLV Nexus
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-500 font-medium">Client Hub</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 hidden sm:inline" />
            <span className="font-semibold text-neutral-900 dark:text-white hidden sm:inline">{currentItem.label}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sync status indicator */}
          <button
            onClick={triggerManualSync}
            disabled={isSyncing}
            title={`Last synced: ${lastSyncedTimestamp}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 text-emerald-500 ${isSyncing ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline">5 Nodes Synced</span>
            <span className="text-neutral-400 hidden sm:inline">&middot; 14ms</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Return to Public Website */}
          <button
            onClick={() => setPage('landing')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Website</span>
          </button>
        </div>
      </header>

      {/* Main Body with Sidebar + Viewport */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar (260px) */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-neutral-200 dark:border-neutral-800 p-4 space-y-1">
          <div className="px-3 py-2 text-[10px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
            Command Modules
          </div>

          {navItems.map((item) => {
            const active = dashboardTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setDashboardTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  active
                    ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      active ? 'bg-indigo-700 text-indigo-100' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800/80 px-3">
            <div className="text-[10px] font-mono text-neutral-400 mb-1">Authenticated Account</div>
            <div className="font-semibold text-xs text-neutral-900 dark:text-white truncate">
              rlvnexus.in@gmail.com
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
              Production Admin Level
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay Drawer */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setSidebarOpen(false)} />
            <div className="relative w-72 bg-white dark:bg-neutral-900 h-full p-4 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">RLV Nexus Navigation</span>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 text-neutral-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item) => {
                    const active = dashboardTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setDashboardTab(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                          active
                            ? 'bg-indigo-600 text-white font-semibold'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => {
                    setPage('landing');
                    setSidebarOpen(false);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Return to Public Website</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Viewport Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden min-w-0 pb-20 lg:pb-8">
          {dashboardTab === 'overview' && <OverviewTab />}
          {dashboardTab === 'software-dev' && <SoftwareDevTab />}
          {dashboardTab === 'marketing-ads' && <MarketingAdsTab />}
          {dashboardTab === 'messaging-otp' && <MessagingOtpTab />}
          {dashboardTab === 'video-production' && <VideoProductionTab />}
          {dashboardTab === 'reports' && <AutomatedReportsTab />}
          {dashboardTab === 'remote-sync' && <RemoteSyncTab />}
          {dashboardTab === 'team-management' && <TeamManagementTab />}
        </main>
      </div>

      {/* Mobile Bottom Thumb Navigation Bar (Adheres to 15% mobile sticky cap rule) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 px-2 py-1.5 flex items-center justify-around h-14">
        <button
          onClick={() => setDashboardTab('overview')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded text-[10px] font-medium ${
            dashboardTab === 'overview' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-neutral-500'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setDashboardTab('software-dev')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded text-[10px] font-medium ${
            dashboardTab === 'software-dev' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-neutral-500'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>Coders</span>
        </button>
        <button
          onClick={() => setDashboardTab('marketing-ads')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded text-[10px] font-medium ${
            dashboardTab === 'marketing-ads' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-neutral-500'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Ads</span>
        </button>
        <button
          onClick={() => setDashboardTab('messaging-otp')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded text-[10px] font-medium ${
            dashboardTab === 'messaging-otp' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-neutral-500'
          }`}
        >
          <KeyRound className="w-4 h-4" />
          <span>OTP</span>
        </button>
        <button
          onClick={() => setDashboardTab('reports')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded text-[10px] font-medium ${
            dashboardTab === 'reports' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-neutral-500'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Reports</span>
        </button>
      </nav>
    </div>
  );
};
