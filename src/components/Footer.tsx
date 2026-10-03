import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setPage, setContactModalOpen } = useApp();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-3">
          <div className="text-base font-bold text-neutral-900 dark:text-white">RLV Nexus</div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
            Unified digital execution partner delivering enterprise software engineering, high-ROAS advertising, direct messaging gateways, and video creative production.
          </p>
          <div className="space-y-1.5 text-xs text-neutral-500 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <a
                href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 font-mono font-bold text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                WhatsApp: +91 9304132812
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:rlvnexus.in@gmail.com" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                rlvnexus.in@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider mb-3">
            Core Solutions
          </div>
          <ul className="space-y-2 text-xs">
            <li><a href="#software" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Software Engineering & Coders</a></li>
            <li><a href="#marketing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Digital Ads & ROAS Optimization</a></li>
            <li><a href="#telecom" className="hover:text-neutral-900 dark:hover:text-white transition-colors">High-Throughput SMS & WhatsApp</a></li>
            <li><a href="#telecom" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Sub-Second OTP Verification Gateway</a></li>
            <li><a href="#video" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Commercial & Social Video Production</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider mb-3">
            Service Orders
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#order" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Place Service Order</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20want%20to%20order%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Send Order on WhatsApp (9304132812)
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                Service Catalog & SLAs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                Enterprise Quote Request
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider mb-3">
            Immediate Kickoff
          </div>
          <p className="text-xs text-neutral-500 mb-3">
            Ready to integrate full-stack digital solutions under a single contract?
          </p>
          <a
            href="#order"
            className="block text-center w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            Order Services Online
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-neutral-200 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>
          &copy; {new Date().getFullYear()} RLV Nexus. All digital infrastructure and rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-neutral-700 dark:hover:text-neutral-300">ISO 27001 Aligned</span>
          <span>&middot;</span>
          <span className="hover:text-neutral-700 dark:hover:text-neutral-300">DLT Telecom Certified</span>
          <span>&middot;</span>
          <span className="hover:text-neutral-700 dark:hover:text-neutral-300">99.98% Service SLA</span>
        </div>
      </div>
    </footer>
  );
};
