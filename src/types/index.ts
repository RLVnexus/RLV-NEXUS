export type NavigationPage = 'landing' | 'dashboard';

export type DashboardTab =
  | 'overview'
  | 'software-dev'
  | 'marketing-ads'
  | 'messaging-otp'
  | 'video-production'
  | 'reports'
  | 'remote-sync'
  | 'team-management';

export type TaskStatus = 'backlog' | 'in_progress' | 'in_review' | 'deployed';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';

export interface SoftwareTask {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend API' | 'Mobile App' | 'Cloud Infra' | 'DevOps';
  priority: TaskPriority;
  status: TaskStatus;
  assignee: {
    name: string;
    avatar: string;
  };
  estimateHours: number;
  commitHash?: string;
  updatedAt: string;
}

export interface MarketingCampaign {
  id: string;
  name: string;
  platform: 'Meta Ads' | 'Google Ads' | 'LinkedIn Ads' | 'YouTube Ads';
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roas: number;
  cpa: number;
  status: 'active' | 'paused' | 'scheduled';
}

export interface MessagingMetric {
  channel: 'SMS Gateway' | 'WhatsApp Business' | 'Email Service' | 'OTP Delivery';
  sentToday: number;
  deliveryRate: number;
  avgLatencyMs: number;
  monthlyQuota: number;
  monthlyUsed: number;
  status: 'healthy' | 'degraded' | 'maintenance';
}

export interface OtpLog {
  id: string;
  recipient: string;
  service: 'SMS OTP' | 'WhatsApp OTP' | 'Email OTP';
  codePreview: string;
  status: 'Delivered' | 'Verified' | 'Pending' | 'Failed';
  latencyMs: number;
  timestamp: string;
}

export interface VideoComment {
  id: string;
  author: string;
  timecode: string;
  text: string;
  resolved: boolean;
  createdAt: string;
}

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  category: 'Commercial Ad' | 'Reel / Short' | 'Product Showcase' | 'Brand Story';
  duration: string;
  resolution: string;
  stage: 'Scripting' | 'Rough Cut' | 'Color Grade' | 'Client Review' | 'Final Delivered';
  thumbnailColor: string;
  comments: VideoComment[];
  videoUrl?: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Administrator' | 'Lead Architect' | 'Performance Marketer' | 'Creative Director' | 'Client Stakeholder';
  avatar: string;
  status: 'online' | 'busy' | 'offline';
  location: string;
  assignedServices: string[];
}

export interface SyncNode {
  id: string;
  nodeName: string;
  location: string;
  status: 'synced' | 'syncing' | 'standby';
  latencyMs: number;
  lastPing: string;
  activeChanges: number;
}

export interface ReportItem {
  id: string;
  title: string;
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'On-Demand';
  category: 'Executive Summary' | 'Marketing ROAS' | 'Engineering Velocity' | 'Gateway SLA';
  generatedDate: string;
  fileFormat: 'PDF' | 'CSV';
  fileSize: string;
  recipients: string[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  phone: string;
  servicesInterested: string[];
  budgetRange: string;
  notes: string;
}
