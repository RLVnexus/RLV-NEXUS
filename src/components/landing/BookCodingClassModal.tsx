import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import { X, Send, BookOpen, MessageCircle, CheckCircle2, User, Phone, Mail, Terminal } from 'lucide-react';

export const BookCodingClassModal: React.FC = () => {
  const { codingClassModalOpen, setCodingClassModalOpen, showToast } = useApp();

  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    email: '',
    courseTrack: 'Full-Stack Web Engineering',
    format: '1-on-1 Mentorship with Love Vaidya',
    level: 'Beginner (Starting from scratch)',
    preferredTiming: 'Weekends (Saturday & Sunday)',
    goals: ''
  });

  if (!codingClassModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) {
      showToast('Please provide your name and WhatsApp number', 'error');
      return;
    }

    const messageText = `*RLV NEXUS - CODING CLASS ENROLLMENT*
=================================
*Student Name:* ${formData.studentName}
*WhatsApp / Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
---------------------------------
*Selected Course:* ${formData.courseTrack}
*Format:* ${formData.format}
*Current Level:* ${formData.level}
*Preferred Timing:* ${formData.preferredTiming}
*Student Goals & Background:*
${formData.goals || 'Looking to learn clean modern coding'}
=================================
_Sent via RLV Nexus Academy (Mentor: Love Vaidya)_`;

    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/919304132812?text=${encoded}`;

    showToast('Redirecting to WhatsApp to confirm your class booking...', 'success');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setCodingClassModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Book Coding Class with Love Vaidya
              </h3>
              <p className="text-xs text-neutral-500">RLV Nexus Academy &middot; 1-on-1 & Live Mentorship</p>
            </div>
          </div>
          <button
            onClick={() => setCodingClassModalOpen(false)}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="e.g. Aman Gupta"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 93000 00000"
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="aman@example.com"
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Course Track
              </label>
              <select
                value={formData.courseTrack}
                onChange={(e) => setFormData({ ...formData, courseTrack: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
              >
                <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                <option value="Python Backend & Microservices">Python Backend & Microservices</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="1-on-1 Elite Mentorship with Love Vaidya">1-on-1 Mentorship with Love Vaidya</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                Learning Format
              </label>
              <select
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
              >
                <option value="1-on-1 Mentorship with Love Vaidya">1-on-1 Private Mentorship</option>
                <option value="Weekend Intensive Bootcamp">Weekend Intensive Bootcamp</option>
                <option value="Small Interactive Cohort">Small Interactive Cohort</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
              Your Goals & Current Coding Background
            </label>
            <textarea
              rows={2}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="e.g. Want to switch career into full-stack development, build my startup MVP, or learn React 19..."
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-neutral-500 flex items-center gap-1 font-mono">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Direct WhatsApp: 9304132812</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setCodingClassModalOpen(false)}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Confirm on WhatsApp</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
