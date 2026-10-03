import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { Sun, Moon, LayoutDashboard, Globe, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { page, setPage, theme, toggleTheme, setContactModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            setPage('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-85 transition-opacity"
        >
          RLV Nexus
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <a
            href="#services"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Projects & Clients
          </a>
          <a
            href="#download-app"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Download App
          </a>
          <a
            href="#about"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            About Love Vaidya
          </a>
          <a
            href="#coding-classes"
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-500 transition-colors"
          >
            Coding Classes
          </a>
          <a
            href="#order"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-500 transition-colors"
          >
            Order Service
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20want%20to%20place%20a%20service%20order."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp +91 9304132812"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp: 9304132812</span>
          </a>

          <a
            href="#order"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <span>Order Services</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 space-y-3">
          <button
            onClick={() => {
              setPage('landing');
              setMobileMenuOpen(false);
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Services Overview
          </button>
          <button
            onClick={() => {
              setPage('landing');
              setMobileMenuOpen(false);
              document.getElementById('software')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Software Development
          </button>
          <button
            onClick={() => {
              setPage('landing');
              setMobileMenuOpen(false);
              document.getElementById('marketing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Ads & Digital Marketing
          </button>
          <button
            onClick={() => {
              setPage('landing');
              setMobileMenuOpen(false);
              document.getElementById('telecom')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            SMS, WhatsApp & OTP
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Video Editing & Coders
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400"
          >
            Order Services Online
          </button>
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            <a
              href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20want%20to%20place%20a%20service%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-emerald-600 rounded-lg flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp: +91 9304132812</span>
            </a>
            <button
              onClick={() => {
                setContactModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 text-center text-xs font-semibold text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg"
            >
              Request Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
