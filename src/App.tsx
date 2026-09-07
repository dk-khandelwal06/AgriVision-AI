import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { DemoBanner } from './components/common/DemoBanner';
import { HeroSection } from './components/landing/HeroSection';
import { ProblemSection } from './components/landing/ProblemSection';
import { WorkflowSection } from './components/landing/WorkflowSection';
import { DiffMatrix } from './components/landing/DiffMatrix';
import { TechArchSection } from './components/landing/TechArchSection';
import { MarketImpactSection } from './components/landing/MarketImpactSection';
import { RoadmapSection } from './components/landing/RoadmapSection';
import { CTASection } from './components/landing/CTASection';

import { InteractiveSignup } from './components/auth/InteractiveSignup';
import { LoginModal } from './components/auth/LoginModal';
import { OnboardingWizard } from './components/auth/OnboardingWizard';

import { FarmStatusHeader } from './components/dashboard/FarmStatusHeader';
import { MetricOverviewGrid } from './components/dashboard/MetricOverviewGrid';
import { QuickActionBar } from './components/dashboard/QuickActionBar';
import { AlertsFeed } from './components/dashboard/AlertsFeed';
import { RecentScansCard } from './components/dashboard/RecentScansCard';

import { CropScanView } from './components/cropScan/CropScanView';
import { AdvisorChatView } from './components/advisor/AdvisorChatView';
import { WeatherIntelligenceView } from './components/weather/WeatherIntelligenceView';
import { FarmTimelineView } from './components/timeline/FarmTimelineView';
import { FarmProfileView } from './components/profile/FarmProfileView';

import { useFarm } from './context/FarmContext';
import { ScanResult } from './types/cropScan';

export const App: React.FC = () => {
  const { setActiveScan, setIsDemoMode } = useFarm();

  const [currentView, setCurrentView] = useState<string>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [onboardingData, setOnboardingData] = useState<{ name?: string; location?: string; crop?: string }>({});
  const [advisorInitialPrompt, setAdvisorInitialPrompt] = useState<string | undefined>(undefined);

  // Navigation controller
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // One-click demo launch for judges & pitch evaluators
  const handleExploreDemo = () => {
    setIsAuthenticated(true);
    setIsDemoMode(true);
    setAuthModal(null);
    setShowOnboarding(false);
    handleNavigate('dashboard');
  };

  // Sign up flow
  const handleSignupSubmit = (data: { name: string; location: string; crop: string }) => {
    setOnboardingData(data);
    setAuthModal(null);
    setShowOnboarding(true);
  };

  // Onboarding completed
  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setIsAuthenticated(true);
    handleNavigate('dashboard');
  };

  // Direct scan review
  const handleSelectRecentScan = (scan: ScanResult) => {
    setActiveScan(scan);
    handleNavigate('scan');
  };

  // Navigate to advisor with context
  const handleOpenAdvisorWithPrompt = (prompt?: string) => {
    setAdvisorInitialPrompt(prompt);
    handleNavigate('advisor');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    handleNavigate('landing');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-slate-900 selection:bg-agri-500 selection:text-white">
      
      {/* Demo Mode Banner (Visible when authenticated in Demo Mode) */}
      {isAuthenticated && (
        <DemoBanner onOpenCustomOnboarding={() => setShowOnboarding(true)} />
      )}

      {/* Main Sticky Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onOpenAuth={(mode) => setAuthModal(mode)}
        onLogout={handleLogout}
      />

      {/* Main View Router */}
      <main className="flex-1">
        
        {/* VIEW 1: PUBLIC STARTUP LANDING EXPERIENCE */}
        {currentView === 'landing' && (
          <div>
            <HeroSection
              onExploreDemo={handleExploreDemo}
              onGetStarted={() => setAuthModal('signup')}
            />
            <ProblemSection />
            <WorkflowSection />
            <DiffMatrix />
            <TechArchSection />
            <MarketImpactSection />
            <RoadmapSection />
            <CTASection
              onExploreDemo={handleExploreDemo}
              onGetStarted={() => setAuthModal('signup')}
            />
          </div>
        )}

        {/* VIEW 2: AUTHENTICATED FARMER DASHBOARD */}
        {currentView === 'dashboard' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <FarmStatusHeader
              onNavigateToScan={() => handleNavigate('scan')}
              onNavigateToAdvisor={() => handleOpenAdvisorWithPrompt()}
            />
            <QuickActionBar onNavigate={handleNavigate} />
            <MetricOverviewGrid onNavigateToWeather={() => handleNavigate('weather')} />
            <AlertsFeed onNavigateToAdvisor={() => handleOpenAdvisorWithPrompt()} />
            <RecentScansCard
              onSelectScan={handleSelectRecentScan}
              onNavigateToScan={() => handleNavigate('scan')}
            />
          </div>
        )}

        {/* VIEW 3: CROP SCAN EXPERIENCE (WOW MOMENT) */}
        {currentView === 'scan' && (
          <CropScanView
            onNavigateToAdvisor={handleOpenAdvisorWithPrompt}
            onNavigateToDashboard={() => handleNavigate('dashboard')}
          />
        )}

        {/* VIEW 4: AI FARM ADVISOR */}
        {currentView === 'advisor' && (
          <AdvisorChatView initialPrompt={advisorInitialPrompt} />
        )}

        {/* VIEW 5: WEATHER & SPRAY INTELLIGENCE */}
        {currentView === 'weather' && (
          <WeatherIntelligenceView onNavigateToAdvisor={() => handleOpenAdvisorWithPrompt()} />
        )}

        {/* VIEW 6: FARM HEALTH TIMELINE */}
        {currentView === 'timeline' && (
          <FarmTimelineView />
        )}

        {/* VIEW 7: FARM PROFILE & SETTINGS */}
        {currentView === 'profile' && (
          <FarmProfileView />
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* AUTH MODALS & ONBOARDING WIZARD */}
      {authModal === 'signup' && (
        <InteractiveSignup
          onComplete={handleSignupSubmit}
          onCancel={() => setAuthModal(null)}
          onSwitchToLogin={() => setAuthModal('login')}
          onQuickDemo={handleExploreDemo}
        />
      )}

      {authModal === 'login' && (
        <LoginModal
          onLogin={() => {
            setIsAuthenticated(true);
            setAuthModal(null);
            handleNavigate('dashboard');
          }}
          onCancel={() => setAuthModal(null)}
          onSwitchToSignup={() => setAuthModal('signup')}
          onQuickDemo={handleExploreDemo}
        />
      )}

      {showOnboarding && (
        <OnboardingWizard
          initialData={onboardingData}
          onFinish={handleOnboardingComplete}
        />
      )}

    </div>
  );
};
