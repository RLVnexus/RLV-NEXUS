import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = 'https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20services.';

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      <div className="hidden md:flex items-center px-3 py-1.5 rounded-lg bg-neutral-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-md border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp: +91 9304132812
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact +91 9304132812"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </a>
    </aside>
  );
};
