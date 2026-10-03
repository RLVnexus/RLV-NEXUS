import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { submitInquiry } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budgetRange: '$5,000 - $15,000 / mo',
    servicesInterested: ['Software Development', 'SMS & OTP Services'],
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(srv)
        ? prev.servicesInterested.filter((s) => s !== srv)
        : [...prev.servicesInterested, srv]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    submitInquiry(formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
              Start The Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Scale your digital footprint with RLV Nexus.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              Connect directly with our senior architects, growth leads, and infrastructure engineers. We tailor bespoke software, marketing pipelines, and telecom solutions for fast-growing companies.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs">
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Direct WhatsApp / Phone Desk</div>
                  <a
                    href="https://wa.me/919304132812?text=Hello%20RLV%20Nexus%2C%20I%20want%20to%20place%20an%20order%20for%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-mono font-bold hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>+91 9304132812</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 font-sans font-medium">Click to Chat</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Corporate Executive Email</div>
                  <a href="mailto:rlvnexus.in@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    rlvnexus.in@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs">
              <div className="font-bold text-neutral-900 dark:text-white mb-1">What Happens Next?</div>
              <ol className="list-decimal list-inside space-y-1 text-neutral-500">
                <li>Initial technical scope & SLA review within 4 business hours</li>
                <li>Live access credentials provisioned for your test client dashboard</li>
                <li>Tailored sprint roadmap and campaign kickoff</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Inquiry Received</h3>
                  <p className="text-xs text-neutral-500 max-w-md mx-auto">
                    Thank you {formData.name}. Our technical directors will review your requirements and reach out to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Services of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Software Development',
                        'Ads Marketing',
                        'SMS & OTP Services',
                        'WhatsApp API',
                        'Video Editing',
                        'Unified Client Dashboard'
                      ].map((srv) => {
                        const selected = formData.servicesInterested.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-2 text-[11px] font-medium rounded-lg border text-left transition-colors ${
                              selected
                                ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300'
                                : 'bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-400 hover:border-neutral-400'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Outline your timeline, current stack, or monthly messaging volume..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Strategic Proposal Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
