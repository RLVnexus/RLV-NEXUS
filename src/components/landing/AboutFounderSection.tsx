import React from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  User,
  ShieldCheck,
  Code2,
  TrendingUp,
  MessageSquare,
  Award,
  BookOpen,
  ArrowRight,
  MessageCircle,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Twitter,
  Globe2,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export const AboutFounderSection: React.FC = () => {
  const { setCodingClassModalOpen } = useApp();

  const socialLinks = [
    {
      name: 'WhatsApp',
      handle: '+91 9304132812',
      url: 'https://wa.me/919304132812?text=Hello%20Love%20Vaidya%2C%20I%20would%20like%20to%20connect%20with%20you%20regarding%20RLV%20Nexus.',
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      color: 'hover:text-emerald-500'
    },
    {
      name: 'LinkedIn',
      handle: 'in/love-vaidya',
      url: 'https://linkedin.com/in/love-vaidya',
      icon: <Linkedin className="w-4 h-4 text-blue-500" />,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      handle: '@rlvnexus',
      url: 'https://instagram.com/rlvnexus',
      icon: <Instagram className="w-4 h-4 text-pink-500" />,
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      handle: '@rlvnexus & Coding Classes',
      url: 'https://youtube.com/@rlvnexus',
      icon: <Youtube className="w-4 h-4 text-red-500" />,
      color: 'hover:text-red-500'
    },
    {
      name: 'GitHub',
      handle: 'github.com/rlvnexus',
      url: 'https://github.com/rlvnexus',
      icon: <Github className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />,
      color: 'hover:text-indigo-400'
    },
    {
      name: 'Twitter / X',
      handle: '@rlvnexus',
      url: 'https://x.com/rlvnexus',
      icon: <Twitter className="w-4 h-4 text-sky-400" />,
      color: 'hover:text-sky-400'
    },
    {
      name: 'Official Email',
      handle: 'rlvnexus.in@gmail.com',
      url: 'mailto:rlvnexus.in@gmail.com',
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      color: 'hover:text-indigo-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Visual & Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Background architectural glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Founder Avatar Banner */}
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-600 text-white flex items-center justify-center font-bold text-3xl sm:text-4xl shadow-lg ring-4 ring-white dark:ring-neutral-900">
                  LV
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-white font-mono text-[11px] font-bold shadow-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Founder Active</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                  Love Vaidya
                </h3>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mt-1">
                  Founder & Creator of RLV Nexus
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
                  Senior Full-Stack Architect, Digital Growth Engineer & Tech Educator. Pioneering consolidated digital execution ecosystems for modern businesses and mentoring ambitious coders.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Chief Architect behind RLV Nexus Core Gateway</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>10M+ Transactional OTPs & Messages Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Lead Instructor for 1-on-1 Coding Masterclasses</span>
                </div>
              </div>

              {/* Founder Direct CTA */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row gap-2">
                <a
                  href="https://wa.me/919304132812?text=Hello%20Love%20Vaidya%2C%20I%20want%20to%20consult%20with%20you%20directly."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Love (+91 9304132812)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Founder Vision, Story & Social Media (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <User className="w-3.5 h-3.5" />
              <span>Leadership & Core Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
              "We built RLV Nexus to give businesses total engineering clarity and unstoppable scale."
            </h2>

            <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                As founder and creator of <strong>RLV Nexus</strong>, <strong>Love Vaidya</strong> envisioned a single powerhouse agency where founders and corporate leaders don't have to scramble between disjointed web developers, isolated marketing agencies, unreliable telecom SMS vendors, and freelance video editors.
              </p>
              <p>
                Under Love's leadership, RLV Nexus unites full-stack software development, high-ROAS advertising pipelines, sub-second OTP gateways, and commercial motion editing under one seamless client relationship. In addition to enterprise contracts, Love personally leads the <strong>RLV Nexus Coding Academy</strong>, helping students and professionals master modern web, mobile, and cloud engineering.
              </p>
            </div>

            {/* Coding Class Callout Box */}
            <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/80 to-purple-50/50 dark:from-indigo-950/40 dark:to-purple-950/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Book Your Coding Class with Love Vaidya</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Master React 19, TypeScript, Backend APIs, or Python through live 1-on-1 and cohort sessions.
                </p>
              </div>
              <button
                onClick={() => setCodingClassModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs whitespace-nowrap shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Book Coding Class</span>
              </button>
            </div>

            {/* All Social Media Links Matrix */}
            <div>
              <div className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">
                Official Founder & RLV Nexus Social Channels
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 ${s.color}`}
                  >
                    <div className="p-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-neutral-900 dark:text-white text-[11px] truncate">{s.name}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
