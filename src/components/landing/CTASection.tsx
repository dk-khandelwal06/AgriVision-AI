import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Sprout } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CTASectionProps {
  onExploreDemo: () => void;
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onExploreDemo, onGetStarted }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-agri-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-agri-100 border border-agri-200 text-agri-900 text-xs font-semibold mb-6">
          <Sprout className="w-4 h-4 text-agri-600" />
          <span>Empowering Climate-Resilient Agriculture</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-5xl text-forest tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to experience the future of AI-driven farm guidance?
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Test our full diagnostic loop, local weather intelligence, and conversational agronomist right now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
          <button
            onClick={onExploreDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-forest hover:bg-agri-900 text-white font-display font-semibold text-base flex items-center justify-center space-x-2 shadow-md hover:shadow-glow-sm transition-all"
          >
            <Sparkles className="w-5 h-5 text-clay-400" />
            <span>Launch Live Demo Farm</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-cream-100 text-forest font-semibold text-base border border-cream-300 shadow-xs flex items-center justify-center transition-all"
          >
            <span>Create Custom Farm Profile</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-slate-500">
          <span>✓ Instant judge evaluation</span>
          <span>✓ Zero setup required</span>
          <span>✓ Offline-ready demo presets</span>
        </div>

      </div>
    </section>
  );
};
