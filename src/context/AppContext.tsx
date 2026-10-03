import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  NavigationPage,
  DashboardTab,
  SoftwareTask,
  MarketingCampaign,
  MessagingMetric,
  OtpLog,
  VideoProject,
  SyncNode,
  ReportItem,
  TeamMember,
  TaskStatus,
  ContactInquiry
} from '../types/index.ts';
import {
  INITIAL_TASKS,
  INITIAL_CAMPAIGNS,
  INITIAL_MESSAGING_METRICS,
  INITIAL_OTP_LOGS,
  INITIAL_VIDEO_PROJECTS,
  INITIAL_SYNC_NODES,
  INITIAL_REPORTS,
  INITIAL_TEAM_MEMBERS
} from '../data/mockData.ts';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  page: NavigationPage;
  setPage: (page: NavigationPage) => void;
  dashboardTab: DashboardTab;
  setDashboardTab: (tab: DashboardTab) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  // Software Tasks
  tasks: SoftwareTask[];
  moveTask: (taskId: string, newStatus: TaskStatus) => void;
  addTask: (task: Omit<SoftwareTask, 'id' | 'updatedAt'>) => void;
  // Marketing Campaigns
  campaigns: MarketingCampaign[];
  toggleCampaignStatus: (id: string) => void;
  // Messaging & OTP
  messagingMetrics: MessagingMetric[];
  otpLogs: OtpLog[];
  sendTestOtp: (recipient: string, service: 'SMS OTP' | 'WhatsApp OTP' | 'Email OTP') => Promise<void>;
  // Video Projects
  videoProjects: VideoProject[];
  addVideoComment: (projectId: string, text: string, timecode: string) => void;
  updateVideoStage: (projectId: string, stage: VideoProject['stage']) => void;
  // Remote Synchronization
  syncNodes: SyncNode[];
  isSyncing: boolean;
  lastSyncedTimestamp: string;
  triggerManualSync: () => void;
  // Automated Reports
  reports: ReportItem[];
  generateReport: (category: ReportItem['category'], format: 'PDF' | 'CSV') => void;
  // Team Management
  teamMembers: TeamMember[];
  inviteTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  // Contact & Modals
  contactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
  submitInquiry: (inquiry: ContactInquiry) => void;
  // Toasts
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  // Coding Class Modal
  codingClassModalOpen: boolean;
  setCodingClassModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<NavigationPage>('landing');
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>('overview');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rlv_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  // Core Data States
  const [tasks, setTasks] = useState<SoftwareTask[]>(INITIAL_TASKS);
  const [campaigns, setCampaigns] = useState<MarketingCampaign[]>(INITIAL_CAMPAIGNS);
  const [messagingMetrics, setMessagingMetrics] = useState<MessagingMetric[]>(INITIAL_MESSAGING_METRICS);
  const [otpLogs, setOtpLogs] = useState<OtpLog[]>(INITIAL_OTP_LOGS);
  const [videoProjects, setVideoProjects] = useState<VideoProject[]>(INITIAL_VIDEO_PROJECTS);
  const [syncNodes, setSyncNodes] = useState<SyncNode[]>(INITIAL_SYNC_NODES);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncedTimestamp, setLastSyncedTimestamp] = useState<string>('Just now');
  const [reports, setReports] = useState<ReportItem[]>(INITIAL_REPORTS);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [codingClassModalOpen, setCodingClassModalOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Dark mode setup on mount & toggle
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('rlv_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Software Tasks Actions
  const moveTask = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus, updatedAt: 'Just now' } : t))
    );
    showToast(`Task updated to ${newStatus.replace('_', ' ')}`);
  };

  const addTask = (newTask: Omit<SoftwareTask, 'id' | 'updatedAt'>) => {
    const id = `TSK-${Math.floor(100 + Math.random() * 900)}`;
    const task: SoftwareTask = {
      ...newTask,
      id,
      updatedAt: 'Just now'
    };
    setTasks((prev) => [task, ...prev]);
    showToast(`New task ${id} created`);
  };

  // Campaigns Actions
  const toggleCampaignStatus = (id: string) => {
    setCampaigns((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextStatus = c.status === 'active' ? 'paused' : 'active';
          showToast(`Campaign ${c.name.substring(0, 20)}... is now ${nextStatus}`);
          return { ...c, status: nextStatus };
        }
        return c;
      })
    );
  };

  // Messaging & OTP Actions
  const sendTestOtp = async (recipient: string, service: 'SMS OTP' | 'WhatsApp OTP' | 'Email OTP') => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    const mockLatency = Math.floor(280 + Math.random() * 220);

    const newLog: OtpLog = {
      id: `OTP-${Math.floor(9100 + Math.random() * 900)}`,
      recipient,
      service,
      codePreview: `${randomCode.substring(0, 3)}•••`,
      status: 'Delivered',
      latencyMs: mockLatency,
      timestamp: 'Just now'
    };

    setOtpLogs((prev) => [newLog, ...prev]);

    // Update real-time metric counter
    setMessagingMetrics((prev) =>
      prev.map((m) => {
        if (m.channel === 'OTP Delivery') {
          return { ...m, sentToday: m.sentToday + 1 };
        }
        if (service === 'SMS OTP' && m.channel === 'SMS Gateway') {
          return { ...m, sentToday: m.sentToday + 1 };
        }
        if (service === 'WhatsApp OTP' && m.channel === 'WhatsApp Business') {
          return { ...m, sentToday: m.sentToday + 1 };
        }
        if (service === 'Email OTP' && m.channel === 'Email Service') {
          return { ...m, sentToday: m.sentToday + 1 };
        }
        return m;
      })
    );

    showToast(`Test OTP dispatched to ${recipient} via ${service} (${mockLatency}ms)`);
  };

  // Video Actions
  const addVideoComment = (projectId: string, text: string, timecode: string) => {
    setVideoProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const newComment = {
            id: `c-${Date.now()}`,
            author: 'Client Reviewer',
            timecode,
            text,
            resolved: false,
            createdAt: 'Just now'
          };
          return {
            ...proj,
            comments: [...proj.comments, newComment],
            updatedAt: 'Just now'
          };
        }
        return proj;
      })
    );
    showToast(`Feedback note attached at ${timecode}`);
  };

  const updateVideoStage = (projectId: string, stage: VideoProject['stage']) => {
    setVideoProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, stage, updatedAt: 'Just now' } : p))
    );
    showToast(`Video project stage updated to "${stage}"`);
  };

  // Remote Team Synchronization
  const triggerManualSync = () => {
    setIsSyncing(true);
    setSyncNodes((prev) =>
      prev.map((node) => ({
        ...node,
        status: 'syncing',
        latencyMs: Math.max(12, Math.floor(node.latencyMs * (0.8 + Math.random() * 0.4)))
      }))
    );

    setTimeout(() => {
      setIsSyncing(false);
      const now = new Date();
      setLastSyncedTimestamp(`${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
      setSyncNodes((prev) =>
        prev.map((node) => ({
          ...node,
          status: 'synced',
          lastPing: '1s ago',
          activeChanges: 0
        }))
      );
      showToast('All 5 distributed remote nodes synchronized state with 0 merge conflicts.');
    }, 1200);
  };

  // Automated Reports Actions
  const generateReport = (category: ReportItem['category'], format: 'PDF' | 'CSV') => {
    const id = `RPT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReport: ReportItem = {
      id,
      title: `${category} Instant Snapshot (${format})`,
      frequency: 'On-Demand',
      category,
      generatedDate: 'Today',
      fileFormat: format,
      fileSize: format === 'PDF' ? '2.1 MB' : '450 KB',
      recipients: ['rlvnexus.in@gmail.com', 'team@client.com']
    };
    setReports((prev) => [newReport, ...prev]);
    showToast(`Automated report ${id} generated successfully.`);
  };

  // Team Management
  const inviteTeamMember = (newMember: Omit<TeamMember, 'id'>) => {
    const id = `usr-${Date.now()}`;
    setTeamMembers((prev) => [...prev, { ...newMember, id }]);
    showToast(`Invitation sent to ${newMember.email}`);
  };

  // Contact modal inquiry submission
  const submitInquiry = (inquiry: ContactInquiry) => {
    showToast(`Thank you ${inquiry.name}! RLV Nexus team will contact ${inquiry.email} shortly.`);
    setContactModalOpen(false);
  };

  // Periodic subtle background sync simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncNodes((prev) =>
        prev.map((node) => ({
          ...node,
          latencyMs: Math.max(10, Math.floor(node.latencyMs + (Math.random() * 4 - 2)))
        }))
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        dashboardTab,
        setDashboardTab,
        theme,
        toggleTheme,
        tasks,
        moveTask,
        addTask,
        campaigns,
        toggleCampaignStatus,
        messagingMetrics,
        otpLogs,
        sendTestOtp,
        videoProjects,
        addVideoComment,
        updateVideoStage,
        syncNodes,
        isSyncing,
        lastSyncedTimestamp,
        triggerManualSync,
        reports,
        generateReport,
        teamMembers,
        inviteTeamMember,
        contactModalOpen,
        setContactModalOpen,
        codingClassModalOpen,
        setCodingClassModalOpen,
        submitInquiry,
        toasts,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
