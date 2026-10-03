import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext.tsx';
import { TeamMember } from '../../../types/index.ts';
import {
  Users,
  UserPlus,
  Shield,
  Key,
  Mail,
  MapPin,
  CheckCircle2,
  X,
  Copy,
  Sparkles
} from 'lucide-react';

export const TeamManagementTab: React.FC = () => {
  const { teamMembers, inviteTeamMember, showToast } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<TeamMember['role']>('Client Stakeholder');
  const [location, setLocation] = useState('Remote');

  // Simulated API Keys
  const [apiKeyCopied, setApiKeyCopied] = useState(false);
  const apiKey = 'rlv_live_9f82d1c93847e0a2938471b6';

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    inviteTeamMember({
      name: name.trim(),
      email: email.trim(),
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      status: 'online',
      location,
      assignedServices: ['Dashboard Viewer', 'Reporting Access']
    });
    setName('');
    setEmail('');
    setModalOpen(false);
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setApiKeyCopied(true);
    showToast('API Key copied to clipboard');
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-500" />
            <span>User Management & Team Permissions</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Streamlined access control for client executives, marketing managers, and dedicated engineering leads.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" />
          <span>Invite Team Member</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Active Authorized Users</h3>
          <span className="text-xs text-neutral-500 font-mono">{teamMembers.length} active seats</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-neutral-50 dark:bg-neutral-950/60 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="py-3 px-4 font-semibold">User</th>
                <th className="py-3 px-4 font-semibold">Role</th>
                <th className="py-3 px-4 font-semibold">Location</th>
                <th className="py-3 px-4 font-semibold">Assigned Capabilities</th>
                <th className="py-3 px-4 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900 dark:text-white">{member.name}</div>
                        <div className="text-[11px] text-neutral-400">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded font-medium text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {member.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-neutral-600 dark:text-neutral-300">
                    {member.location}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {member.assignedServices.map((srv) => (
                        <span key={srv} className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 font-mono text-emerald-600 dark:text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{member.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Developer API Credentials & Webhook Tokens */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800 mb-4">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-500" />
              <span>Production API & Gateway Credentials</span>
            </h3>
            <p className="text-[11px] text-neutral-500">
              Integrate your internal systems directly with the RLV Nexus software and OTP delivery engine.
            </p>
          </div>
          <span className="font-mono text-xs text-neutral-400">Environment: Live</span>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-semibold">
              Live Secret Gateway Token (Bearer)
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                readOnly
                value={apiKey}
                className="flex-1 px-3 py-2 font-mono text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white"
              />
              <button
                onClick={copyApiKey}
                className="px-3.5 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold flex items-center gap-1.5 hover:bg-neutral-800 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{apiKeyCopied ? 'Copied!' : 'Copy Key'}</span>
              </button>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-500">
            Send requests to <code className="text-indigo-600 dark:text-indigo-400 font-mono">https://api.rlvnexus.in/v1/dispatch</code> with header <code className="text-neutral-700 dark:text-neutral-300 font-mono">Authorization: Bearer rlv_live_...</code>.
          </div>
        </div>
      </div>

      {/* Invite Member Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Invite Team Member</h3>
              <button onClick={() => setModalOpen(false)} className="text-neutral-400 hover:text-neutral-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleInvite} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Nair"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="priya@company.com"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as TeamMember['role'])}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                  >
                    <option value="Administrator">Administrator</option>
                    <option value="Lead Architect">Lead Architect</option>
                    <option value="Performance Marketer">Performance Marketer</option>
                    <option value="Creative Director">Creative Director</option>
                    <option value="Client Stakeholder">Client Stakeholder</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Mumbai, India"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-3 py-1.5 text-xs rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
