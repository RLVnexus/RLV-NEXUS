import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  Code2,
  BookOpen,
  Terminal,
  Laptop,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Users,
  Award
} from 'lucide-react';

export const CodingClassSection: React.FC = () => {
  const { setCodingClassModalOpen } = useApp();

  const courses = [
    {
      title: 'Full-Stack Web Engineering',
      instructor: 'Love Vaidya & Senior Coders',
      duration: '8 Weeks &middot; Live Hands-on',
      level: 'Beginner to Advanced',
      desc: 'Build production-ready web apps from scratch with React 19, TypeScript, Node.js, PostgreSQL, and modern styling.',
      topics: ['React 19 & Next.js', 'TypeScript & Hooks', 'Express & REST APIs', 'PostgreSQL & Drizzle ORM', 'CI/CD Cloud Deployment']
    },
    {
      title: 'Python Backend & Microservices',
      instructor: 'Love Vaidya',
      duration: '6 Weeks &middot; Project-Driven',
      level: 'Intermediate to Pro',
      desc: 'Master scalable backend architectures, high-concurrency APIs, asynchronous task workers, and database optimization.',
      topics: ['Python 3 & Asynchronous IO', 'FastAPI & Microservices', 'Redis Caching & Pub/Sub', 'Celery Background Tasks', 'Docker Containerization']
    },
    {
      title: 'Mobile App Development',
      instructor: 'RLV Nexus Mobile Team',
      duration: '6 Weeks &middot; Cross-Platform',
      level: 'Intermediate',
      desc: 'Design and deploy native iOS & Android applications with shared codebases, offline sync, and push notifications.',
      topics: ['React Native / Flutter', 'State Management', 'Offline SQLite Cache', 'Push Gateway Integrations', 'Play Store Publishing']
    },
    {
      title: '1-on-1 Elite Mentorship with Love Vaidya',
      instructor: 'Love Vaidya (Founder)',
      duration: 'Custom Schedule &middot; Private',
      level: 'All Experience Levels',
      desc: 'Dedicated private mentorship session tailored to your career goals, portfolio building, system design, or company tech stacks.',
      topics: ['Personalized Curriculum', 'Direct Live Code Reviews', 'Real Enterprise Projects', 'Career & Interview Prep', 'Direct WhatsApp Access']
    }
  ];

  return (
    <section id="coding-classes" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
              <Terminal className="w-3.5 h-3.5 text-indigo-500" />
              <span>RLV Nexus Academy &middot; Mentored by Love Vaidya</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
              Book Your Coding Class & Learn Real Industry Engineering
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Don't just watch recorded videos. Learn live with Love Vaidya and senior RLV Nexus engineers. Write clean, production-grade code on real projects with real code reviews.
            </p>
          </div>

          <button
            onClick={() => setCodingClassModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2 self-start whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4" />
            <span>Book A Class Now</span>
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-600 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{course.instructor}</span>
                  <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-[10px]">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {course.desc}
                </p>

                {/* Topics list */}
                <div className="space-y-1.5 mb-6 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs">
                  <div className="text-[11px] font-bold text-neutral-900 dark:text-white mb-1">Key Curriculum Pillars:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {course.topics.map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400" dangerouslySetInnerHTML={{ __html: course.duration }} />
                <button
                  onClick={() => setCodingClassModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center gap-1.5"
                >
                  <span>Book Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout for Coding Class */}
        <div className="mt-10 p-5 rounded-2xl border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/60 dark:bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900 dark:text-white">
                Have specific coding questions or need a custom syllabus?
              </div>
              <p className="text-xs text-neutral-500">
                Talk directly to Love Vaidya on WhatsApp: <strong className="font-mono text-neutral-800 dark:text-neutral-200">+91 9304132812</strong>
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919304132812?text=Hello%20Love%20Vaidya%2C%20I%20want%20to%20know%20more%20about%20your%20Coding%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat with Love Vaidya</span>
          </a>
        </div>
      </div>
    </section>
  );
};
