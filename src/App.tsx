import React from 'react';
import { AppProvider, useApp } from './context/AppContext.tsx';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/landing/HeroSection.tsx';
import { ServicesShowcase } from './components/landing/ServicesShowcase.tsx';
import { RecentProjectsSection } from './components/landing/RecentProjectsSection.tsx';
import { ServiceOrderSection } from './components/landing/ServiceOrderSection.tsx';
import { DownloadAppSection } from './components/landing/DownloadAppSection.tsx';
import { AboutFounderSection } from './components/landing/AboutFounderSection.tsx';
import { CodingClassSection } from './components/landing/CodingClassSection.tsx';
import { UnifiedDashboardPreview } from './components/landing/UnifiedDashboardPreview.tsx';
import { PerformanceProof } from './components/landing/PerformanceProof.tsx';
import { ContactSection } from './components/landing/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LeadCaptureModal } from './components/landing/LeadCaptureModal.tsx';
import { BookCodingClassModal } from './components/landing/BookCodingClassModal.tsx';
import { DashboardLayout } from './components/dashboard/DashboardLayout.tsx';
import { ToastContainer } from './components/common/ToastContainer.tsx';
import { FloatingWhatsAppButton } from './components/common/FloatingWhatsAppButton.tsx';

const AppContent: React.FC = () => {
  const { page } = useApp();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 font-sans transition-colors duration-200">
      {page === 'landing' ? (
        <>
          <Header />
          <main>
            <HeroSection />
            <ServicesShowcase />
            <RecentProjectsSection />
            <ServiceOrderSection />
            <DownloadAppSection />
            <AboutFounderSection />
            <CodingClassSection />
            <UnifiedDashboardPreview />
            <PerformanceProof />
            <ContactSection />
          </main>
          <Footer />
        </>
      ) : (
        <DashboardLayout />
      )}

      {/* Floating WhatsApp Quick Action (+91 9304132812) */}
      <FloatingWhatsAppButton />

      {/* Global Modals & Notifications */}
      <LeadCaptureModal />
      <BookCodingClassModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
