import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.tsx';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Code2,
  TrendingUp,
  MessageSquare,
  KeyRound,
  Video,
  Layers,
  Clock,
  ShieldCheck,
  FileCheck,
  Building,
  User,
  Phone,
  Mail
} from 'lucide-react';

export const ServiceOrderSection: React.FC = () => {
  const { showToast } = useApp();

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Software Development & Coding'
  ]);
  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    phone: '',
    email: '',
    timeline: 'Standard (2-4 Weeks)',
    budget: '$3,000 - $10,000 / ₹2.5L - ₹8L',
    projectScope: '',
    urgency: 'Normal'
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const servicesList = [
    {
      id: 'software',
      name: 'Software Development & Coding',
      desc: 'Custom Web Apps, APIs, Mobile Apps & Dedicated Coders',
      icon: <Code2 className="w-4 h-4 text-indigo-500" />
    },
    {
      id: 'ads',
      name: 'Digital Ads & Performance Marketing',
      desc: 'Google PPC, Meta (FB/Insta), LinkedIn & High-ROAS Scaling',
      icon: <TrendingUp className="w-4 h-4 text-purple-500" />
    },
    {
      id: 'messaging',
      name: 'SMS & WhatsApp Business Solutions',
      desc: 'Promotional, Transactional & Verified Cloud API Automations',
      icon: <MessageSquare className="w-4 h-4 text-emerald-500" />
    },
    {
      id: 'otp',
      name: 'Sub-Second OTP Verification Gateway',
      desc: 'High-throughput 2FA OTP with failover & 99.98% delivery rate',
      icon: <KeyRound className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'video',
      name: 'Commercial Video Editing & Motion Graphics',
      desc: 'High-converting 4K Ads, Reels, Product Demos & Post-Production',
      icon: <Video className="w-4 h-4 text-amber-500" />
    },
    {
      id: 'full_suite',
      name: 'Full Integrated Digital Suite',
      desc: 'All services combined with dedicated team and live reporting',
      icon: <Layers className="w-4 h-4 text-indigo-600" />
    }
  ];

  const toggleService = (srvName: string) => {
    if (selectedServices.includes(srvName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srvName));
      }
    } else {
      setSelectedServices([...selectedServices, srvName]);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.phone) {
      showToast('Please provide your name and phone number', 'error');
      return;
    }

    // Construct formal WhatsApp message payload
    const textMessage = `*RLV NEXUS - NEW FORMAL SERVICE ORDER*
=================================
*Client Name:* ${formData.clientName}
*Company / Business:* ${formData.companyName || 'Individual / Startup'}
*WhatsApp / Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
---------------------------------
*Selected Services:*
${selectedServices.map((s) => `• ${s}`).join('\n')}
---------------------------------
*Expected Timeline:* ${formData.timeline}
*Estimated Budget:* ${formData.budget}
*Project Brief & Notes:*
${formData.projectScope || 'Discuss on WhatsApp consultation'}
=================================
_Submitted via RLV Nexus Service Portal_`;

    const encodedMessage = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/919304132812?text=${encodedMessage}`;
    setGeneratedWhatsAppUrl(waUrl);
    setOrderSubmitted(true);
    showToast('Service Order compiled! Redirecting to WhatsApp...', 'success');

    // Trigger WhatsApp in new tab/window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="order" className="py-20 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Order Gateway &middot; +91 9304132812</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
            Place Formal Service Order
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Select your required digital solutions and submit your specifications. Your formal service brief will be instantly dispatched to our principal executive WhatsApp at <strong className="text-neutral-900 dark:text-white font-mono">+91 9304132812</strong> for priority kickoff.
          </p>
        </div>

        {/* Order Form Card */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-10 shadow-xl">
          {orderSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Service Order Prepared Successfully
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                Your formal order details have been formatted and dispatched to WhatsApp number <span className="font-mono font-bold text-neutral-900 dark:text-white">+91 9304132812</span>. If the WhatsApp chat didn't open automatically, click the button below to continue immediately.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order to WhatsApp (+91 9304132812)</span>
                </a>
                <button
                  onClick={() => setOrderSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Create Another Service Order
                </button>
              </div>

              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 font-mono">
                Order reference: RLV-ORD-{Math.floor(100000 + Math.random() * 900000)} &middot; Executive SLA: Under 15 Minutes
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              {/* Step 1: Select Services */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <label className="text-sm font-bold text-neutral-900 dark:text-white">
                    Select Digital Services Needed (Multi-Select)
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {servicesList.map((srv) => {
                    const isSelected = selectedServices.includes(srv.name);
                    return (
                      <div
                        key={srv.id}
                        onClick={() => toggleService(srv.name)}
                        className={`cursor-pointer p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 ring-1 ring-indigo-500'
                            : 'bg-neutral-50/50 dark:bg-neutral-950/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="p-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                            {srv.icon}
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'border-neutral-300 dark:border-neutral-700'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                        <div className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                          {srv.name}
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-snug">
                          {srv.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Client & Business Details */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <label className="text-sm font-bold text-neutral-900 dark:text-white">
                    Client & Corporate Contact Details
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Your Name / Authorized Lead *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Ankit Sharma"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Company / Brand Name</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Nexus Retail or Startup"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      <span>WhatsApp Number (For Direct Order Confirmation) *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 93000 00000"
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Corporate Email</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Scope, Timeline & Budget */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <label className="text-sm font-bold text-neutral-900 dark:text-white">
                    Project Scope, Timeline & Delivery Specifications
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Expected Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                    >
                      <option value="Urgent (1-2 Weeks)">Urgent Sprint (1-2 Weeks)</option>
                      <option value="Standard (2-4 Weeks)">Standard Execution (2-4 Weeks)</option>
                      <option value="Quarterly Scale (1-3 Months)">Quarterly Scale (1-3 Months)</option>
                      <option value="Ongoing Monthly Retainer">Ongoing Monthly Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Budget Allocation
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white"
                    >
                      <option value="Under $1,500 / ₹1 Lakh">Under $1,500 / ₹1 Lakh (Starter)</option>
                      <option value="$1,500 - $5,000 / ₹1L - ₹4L">$1,500 - $5,000 / ₹1L - ₹4L (Growth)</option>
                      <option value="$5,000 - $15,000 / ₹4L - ₹12L">$5,000 - $15,000 / ₹4L - ₹12L (Scale)</option>
                      <option value="Enterprise ($15,000+ / ₹12L+)">Enterprise ($15,000+ / ₹12L+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Project Scope, Deliverables & Any Specific Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Describe your tech stack, marketing targets, monthly SMS/OTP volume, or video requirements..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Submission Button and WhatsApp Guarantee */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Send Service Order to WhatsApp (+91 9304132812)</span>
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Direct line to RLV Nexus Executive Desk: <strong className="font-mono text-neutral-800 dark:text-neutral-200">9304132812</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Instant WhatsApp Reply Guarantee</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
