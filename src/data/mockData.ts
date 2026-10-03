import {
  SoftwareTask,
  MarketingCampaign,
  MessagingMetric,
  OtpLog,
  VideoProject,
  TeamMember,
  SyncNode,
  ReportItem
} from '../types/index.ts';

export const INITIAL_TASKS: SoftwareTask[] = [
  {
    id: 'TSK-104',
    title: 'Migrate Core Payment API to Distributed Webhooks',
    category: 'Backend API',
    priority: 'high',
    status: 'in_progress',
    assignee: {
      name: 'Arjun Verma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    estimateHours: 14,
    commitHash: 'git:c8f1e29',
    updatedAt: '12m ago'
  },
  {
    id: 'TSK-105',
    title: 'Client Dashboard Real-Time Synchronization Listener',
    category: 'Frontend',
    priority: 'critical',
    status: 'in_review',
    assignee: {
      name: 'Sneha Patel',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80'
    },
    estimateHours: 8,
    commitHash: 'git:7b249a0',
    updatedAt: '28m ago'
  },
  {
    id: 'TSK-102',
    title: 'Automated Multi-Channel OTP Failover Route Engine',
    category: 'Cloud Infra',
    priority: 'high',
    status: 'deployed',
    assignee: {
      name: 'Rohan Deshmukh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    },
    estimateHours: 20,
    commitHash: 'git:4e09f12',
    updatedAt: '2h ago'
  },
  {
    id: 'TSK-108',
    title: 'Implement Dark Mode Optical Contrast & Fluid Layout for Mobile',
    category: 'Frontend',
    priority: 'medium',
    status: 'deployed',
    assignee: {
      name: 'Sneha Patel',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80'
    },
    estimateHours: 6,
    commitHash: 'git:9a12c44',
    updatedAt: '4h ago'
  },
  {
    id: 'TSK-109',
    title: 'High-Volume Video Proxy Transcoding Microservice',
    category: 'DevOps',
    priority: 'medium',
    status: 'backlog',
    assignee: {
      name: 'Dev Team RLV',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
    },
    estimateHours: 16,
    updatedAt: '1d ago'
  }
];

export const INITIAL_CAMPAIGNS: MarketingCampaign[] = [
  {
    id: 'CMP-201',
    name: 'Q4 Enterprise SaaS Lead Gen (High Intent)',
    platform: 'Google Ads',
    budget: 6500,
    spend: 4820,
    impressions: 142800,
    clicks: 6840,
    conversions: 342,
    roas: 4.8,
    cpa: 14.09,
    status: 'active'
  },
  {
    id: 'CMP-202',
    name: 'Direct WhatsApp Retargeting Flow (E-commerce)',
    platform: 'Meta Ads',
    budget: 4200,
    spend: 3190,
    impressions: 289400,
    clicks: 12400,
    conversions: 890,
    roas: 5.6,
    cpa: 3.58,
    status: 'active'
  },
  {
    id: 'CMP-203',
    name: 'B2B Founder & CTO Talent Outreach',
    platform: 'LinkedIn Ads',
    budget: 3500,
    spend: 2940,
    impressions: 64200,
    clicks: 2180,
    conversions: 114,
    roas: 3.9,
    cpa: 25.78,
    status: 'active'
  },
  {
    id: 'CMP-204',
    name: 'Brand Video Launch — 60s High Energy Cut',
    platform: 'YouTube Ads',
    budget: 2000,
    spend: 1850,
    impressions: 412000,
    clicks: 8900,
    conversions: 240,
    roas: 3.2,
    cpa: 7.7,
    status: 'paused'
  }
];

export const INITIAL_MESSAGING_METRICS: MessagingMetric[] = [
  {
    channel: 'SMS Gateway',
    sentToday: 184520,
    deliveryRate: 99.82,
    avgLatencyMs: 1420,
    monthlyQuota: 5000000,
    monthlyUsed: 2140000,
    status: 'healthy'
  },
  {
    channel: 'WhatsApp Business',
    sentToday: 92400,
    deliveryRate: 99.45,
    avgLatencyMs: 680,
    monthlyQuota: 2000000,
    monthlyUsed: 1420000,
    status: 'healthy'
  },
  {
    channel: 'Email Service',
    sentToday: 412900,
    deliveryRate: 98.91,
    avgLatencyMs: 2100,
    monthlyQuota: 10000000,
    monthlyUsed: 4980000,
    status: 'healthy'
  },
  {
    channel: 'OTP Delivery',
    sentToday: 68420,
    deliveryRate: 99.96,
    avgLatencyMs: 420,
    monthlyQuota: 1500000,
    monthlyUsed: 890000,
    status: 'healthy'
  }
];

export const INITIAL_OTP_LOGS: OtpLog[] = [
  {
    id: 'OTP-9081',
    recipient: '+91 98402 •••••',
    service: 'SMS OTP',
    codePreview: '849•••',
    status: 'Verified',
    latencyMs: 380,
    timestamp: 'Just now'
  },
  {
    id: 'OTP-9080',
    recipient: '+91 97110 •••••',
    service: 'WhatsApp OTP',
    codePreview: '512•••',
    status: 'Delivered',
    latencyMs: 410,
    timestamp: '1m ago'
  },
  {
    id: 'OTP-9079',
    recipient: '+1 415 892 ••••',
    service: 'SMS OTP',
    codePreview: '631•••',
    status: 'Verified',
    latencyMs: 520,
    timestamp: '2m ago'
  },
  {
    id: 'OTP-9078',
    recipient: 'founder@scale••••.io',
    service: 'Email OTP',
    codePreview: '990•••',
    status: 'Verified',
    latencyMs: 1120,
    timestamp: '3m ago'
  },
  {
    id: 'OTP-9077',
    recipient: '+44 7911 ••••••',
    service: 'WhatsApp OTP',
    codePreview: '204•••',
    status: 'Delivered',
    latencyMs: 390,
    timestamp: '5m ago'
  }
];

export const INITIAL_VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'VID-01',
    title: 'Apex Mobility — Product Showreel V3',
    client: 'Apex Mobility',
    category: 'Product Showcase',
    duration: '01:15',
    resolution: '4K ProRes 422',
    stage: 'Client Review',
    thumbnailColor: 'from-blue-900 to-indigo-950',
    updatedAt: '15m ago',
    comments: [
      {
        id: 'c1',
        author: 'Marcus Vance',
        timecode: '00:24',
        text: 'Trim the intro transition by 4 frames to hit the bass drop tighter.',
        resolved: true,
        createdAt: '1h ago'
      },
      {
        id: 'c2',
        author: 'Elena Rostova',
        timecode: '00:52',
        text: 'Please enhance color balance on the vehicle interior shot.',
        resolved: false,
        createdAt: '22m ago'
      }
    ]
  },
  {
    id: 'VID-02',
    title: 'Fintech Mobile App Explainer & Walkthrough',
    client: 'Krypton Pay',
    category: 'Commercial Ad',
    duration: '00:45',
    resolution: '1080p 60fps',
    stage: 'Final Delivered',
    thumbnailColor: 'from-emerald-900 to-slate-950',
    updatedAt: '2h ago',
    comments: [
      {
        id: 'c3',
        author: 'Sarah Chen',
        timecode: '00:12',
        text: 'Approved for paid Instagram & TikTok campaign rollout.',
        resolved: true,
        createdAt: '3h ago'
      }
    ]
  },
  {
    id: 'VID-03',
    title: 'OmniChain High-Octane 9:16 Viral Reel',
    client: 'OmniChain Labs',
    category: 'Reel / Short',
    duration: '00:28',
    resolution: '1080x1920 (9:16)',
    stage: 'Color Grade',
    thumbnailColor: 'from-amber-900 to-stone-950',
    updatedAt: '3h ago',
    comments: []
  }
];

export const INITIAL_SYNC_NODES: SyncNode[] = [
  {
    id: 'node-blr',
    nodeName: 'Primary Edge — Bangalore (IN-S1)',
    location: 'Bangalore, India',
    status: 'synced',
    latencyMs: 14,
    lastPing: '3s ago',
    activeChanges: 0
  },
  {
    id: 'node-bom',
    nodeName: 'Cluster Gateway — Mumbai (IN-W1)',
    location: 'Mumbai, India',
    status: 'synced',
    latencyMs: 18,
    lastPing: '2s ago',
    activeChanges: 0
  },
  {
    id: 'node-sin',
    nodeName: 'Regional Edge — Singapore (SG-E1)',
    location: 'Singapore',
    status: 'synced',
    latencyMs: 38,
    lastPing: '4s ago',
    activeChanges: 1
  },
  {
    id: 'node-lon',
    nodeName: 'European Node — London (UK-S1)',
    location: 'London, UK',
    status: 'synced',
    latencyMs: 82,
    lastPing: '5s ago',
    activeChanges: 0
  },
  {
    id: 'node-nyc',
    nodeName: 'Americas Hub — New York (US-E1)',
    location: 'New York, USA',
    status: 'synced',
    latencyMs: 118,
    lastPing: '6s ago',
    activeChanges: 0
  }
];

export const INITIAL_REPORTS: ReportItem[] = [
  {
    id: 'RPT-2026-W39',
    title: 'Weekly Cross-Service Executive Brief (All Pillars)',
    frequency: 'Weekly',
    category: 'Executive Summary',
    generatedDate: 'Oct 02, 2026',
    fileFormat: 'PDF',
    fileSize: '3.4 MB',
    recipients: ['rlvnexus.in@gmail.com', 'founders@client.com']
  },
  {
    id: 'RPT-2026-M09',
    title: 'Monthly Digital Advertising & ROAS Attribution Model',
    frequency: 'Monthly',
    category: 'Marketing ROAS',
    generatedDate: 'Oct 01, 2026',
    fileFormat: 'CSV',
    fileSize: '1.2 MB',
    recipients: ['growth@client.com']
  },
  {
    id: 'RPT-2026-DEV',
    title: 'Sprint 42 Software Delivery & Code Velocity Audit',
    frequency: 'Weekly',
    category: 'Engineering Velocity',
    generatedDate: 'Sep 28, 2026',
    fileFormat: 'PDF',
    fileSize: '2.8 MB',
    recipients: ['tech-leads@client.com']
  },
  {
    id: 'RPT-2026-GATEWAY',
    title: 'SMS, WhatsApp & OTP Uptime and SLA Compliance',
    frequency: 'Monthly',
    category: 'Gateway SLA',
    generatedDate: 'Oct 01, 2026',
    fileFormat: 'CSV',
    fileSize: '840 KB',
    recipients: ['infra@client.com']
  }
];

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'usr-1',
    name: 'RLV Nexus Lead Desk',
    email: 'rlvnexus.in@gmail.com',
    role: 'Administrator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    status: 'online',
    location: 'Bengaluru, India',
    assignedServices: ['Software Development', 'Ads Marketing', 'Telecom Gateways', 'Video Production']
  },
  {
    id: 'usr-2',
    name: 'Vikram Seth',
    email: 'vikram@rlvnexus.in',
    role: 'Lead Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    status: 'online',
    location: 'Mumbai, India',
    assignedServices: ['Software Development', 'API Architecture', 'Remote Team Sync']
  },
  {
    id: 'usr-3',
    name: 'Aanya Sharma',
    email: 'aanya@rlvnexus.in',
    role: 'Performance Marketer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    status: 'online',
    location: 'Delhi NCR, India',
    assignedServices: ['Digital Marketing', 'Google Ads', 'Meta Campaigns']
  },
  {
    id: 'usr-4',
    name: 'Karan Mehra',
    email: 'karan@rlvnexus.in',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    status: 'busy',
    location: 'Goa, India',
    assignedServices: ['Video Editing', 'Motion Graphics', 'Short Form Content']
  }
];
