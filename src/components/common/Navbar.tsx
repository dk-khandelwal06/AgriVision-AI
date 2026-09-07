import React, { useState } from 'react';
import { 
  Sprout, 
  Scan, 
  Bot, 
  CloudSun, 
  History, 
  User, 
  Globe, 
  Menu, 
  X, 
  Sparkles,
  Home,
  Layers
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useFarm } from '../../context/FarmContext';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isAuthenticated: boolean;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onLogout: () => void;
}

interface NavLinkItem {
  id: string;
  label: string;
  icon?: any;
  isAnchor?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  isAuthenticated,
  onOpenAuth,
  onLogout
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { farmProfile, isDemoMode } = useFarm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const publicNavLinks: NavLinkItem[] = [
    { id: 'landing', label: t('nav.home'), icon: Home },
    { id: 'how-it-works', label: t('nav.howItWorks'), isAnchor: true },
    { id: 'diff-matrix', label: 'Why AgriVisionAI', isAnchor: true },
    { id: 'technology', label: t('nav.technology'), isAnchor: true },
    { id: 'roadmap', label: t('nav.roadmap'), isAnchor: true },
  ];

  const appNavLinks: NavLinkItem[] = [
    { id: 'dashboard', label: t('nav.dashboard'), icon: Layers, isAnchor: false },
    { id: 'scan', label: t('nav.cropScan'), icon: Scan, isAnchor: false },
    { id: 'advisor', label: t('nav.aiAdvisor'), icon: Bot, isAnchor: false },
    { id: 'weather', label: t('nav.weather'), icon: CloudSun, isAnchor: false },
    { id: 'timeline', label: t('nav.timeline'), icon: History, isAnchor: false },
    { id: 'profile', label: t('nav.profile'), icon: User, isAnchor: false },
  ];

  const handleLinkClick = (id: string, isAnchor?: boolean) => {
    setMobileMenuOpen(false);
    if (isAnchor) {
      if (currentView !== 'landing') {
        onNavigate('landing');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(id);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-forest-light/10 bg-cream-50/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate(isAuthenticated ? 'dashboard' : 'landing')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agri-700 to-forest flex items-center justify-center text-white shadow-glow-sm group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-agri-300" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-bold text-xl sm:text-2xl text-forest tracking-tight">
                  AgriVision<span className="text-agri-600">AI</span>
                </span>
                {isAuthenticated && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-agri-100 text-agri-800 border border-agri-200">
                    {isDemoMode ? 'Demo Farm' : 'Active'}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                Climate-Resilient Farming with AI
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {(isAuthenticated ? appNavLinks : publicNavLinks).map((link) => {
              const Icon = link.icon;
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id, link.isAnchor)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-agri-800 text-white shadow-sm' 
                      : 'text-slate-700 hover:text-agri-800 hover:bg-cream-200/60'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-agri-300' : 'text-slate-500'}`} />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-cream-200/70 p-1 rounded-lg border border-cream-300">
              <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${
                  language === 'en' ? 'bg-white text-forest shadow-xs' : 'text-slate-600 hover:text-forest'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${
                  language === 'hi' ? 'bg-white text-forest shadow-xs' : 'text-slate-600 hover:text-forest'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Auth / Demo Action Buttons */}
            {!isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-3.5 py-2 text-xs lg:text-sm font-semibold text-forest bg-cream-200/80 hover:bg-cream-300 rounded-lg border border-cream-300 transition-all flex items-center space-x-1.5"
                >
                  <Sparkles className="w-4 h-4 text-clay-500" />
                  <span>{t('nav.exploreDemo')}</span>
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-forest hover:bg-agri-900 rounded-lg shadow-sm hover:shadow-glow-sm transition-all"
                >
                  {t('nav.signup')}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('scan')}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-agri-700 hover:bg-agri-800 rounded-lg flex items-center space-x-1.5 shadow-sm transition-all"
                >
                  <Scan className="w-3.5 h-3.5" />
                  <span>Scan Crop</span>
                </button>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                >
                  {t('nav.logout')}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-2 py-1 rounded bg-cream-200 text-xs font-semibold text-forest"
            >
              {language === 'en' ? 'हिन्दी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-cream-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-forest-light/10 bg-cream-50 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {(isAuthenticated ? appNavLinks : publicNavLinks).map((link) => {
              const Icon = link.icon;
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id, link.isAnchor)}
                  className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-lg text-base font-medium text-left transition-all ${
                    isActive 
                      ? 'bg-forest text-white' 
                      : 'text-slate-800 hover:bg-cream-200'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 text-agri-400" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-cream-300 space-y-2">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigate('dashboard'); }}
                  className="w-full py-2.5 px-4 rounded-lg bg-cream-200 font-semibold text-forest text-sm flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-clay-500" />
                  <span>{t('nav.exploreDemo')}</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                  className="w-full py-2.5 px-4 rounded-lg bg-forest text-white font-semibold text-sm text-center"
                >
                  {t('nav.signup')}
                </button>
              </>
            ) : (
              <button
                onClick={() => { setMobileMenuOpen(false); onLogout(); }}
                className="w-full py-2 px-4 rounded-lg text-rose-600 bg-rose-50 font-medium text-sm text-center"
              >
                {t('nav.logout')}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
