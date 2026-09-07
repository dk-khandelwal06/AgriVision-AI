import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Scan, 
  CloudSun, 
  AlertTriangle, 
  ShieldCheck,
  ChevronRight,
  Droplets,
  Wind
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CROP_PRESETS } from '../../data/cropKnowledgeBase';

interface HeroSectionProps {
  onExploreDemo: () => void;
  onGetStarted: () => void;
  onSelectScanPreset?: (presetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDemo,
  onGetStarted,
}) => {
  const { t } = useLanguage();
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const sample = CROP_PRESETS[selectedSampleIndex];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28 agricultural-gradient-bg border-b border-cream-200">
      
      {/* Decorative leaf blur elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-agri-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-clay-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-agri-100 border border-agri-200 text-agri-900 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-agri-500 animate-pulse"></span>
            <span>AI-Powered Smart Farming Advisor</span>
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-cream-300 text-slate-700 text-xs font-medium">
            <span>Built for Small & Marginal Farmers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.12]">
              See the crop. <br className="hidden sm:inline" />
              <span className="text-agri-700">Understand the risk.</span> <br className="hidden sm:inline" />
              <span className="relative">
                Make a better decision.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-clay-400 opacity-70" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9C70 3 230 3 298 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {t('brand.heroDescription')} An AI agronomist that understands the crop, the context, and the farmer — converting disease scans and hyper-local weather into <strong>one prioritized next best action</strong>.
            </p>

            {/* Core Value Props Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-cream-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-agri-600 flex-shrink-0" />
                <span>Context-Aware AI</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-cream-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-agri-600 flex-shrink-0" />
                <span>Single Next Action</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-cream-200 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-agri-600 flex-shrink-0" />
                <span>Multilingual Voice</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={onExploreDemo}
                className="px-6 py-3.5 rounded-xl bg-forest hover:bg-agri-900 text-white font-display font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-md hover:shadow-glow-sm transition-all"
              >
                <Sparkles className="w-5 h-5 text-clay-400" />
                <span>Explore Live Demo Farm</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onGetStarted}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-cream-100 text-forest font-semibold text-sm sm:text-base border border-cream-300 shadow-xs flex items-center justify-center space-x-2 transition-all"
              >
                <span>Set Up My Farm Profile</span>
              </button>
            </div>

            {/* Social Trust Stat */}
            <div className="flex items-center space-x-3 pt-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-agri-600" />
              <span>Tested on 6+ major Kharif/Rabi crops across arid & semi-arid pilot zones</span>
            </div>

          </div>

          {/* Right Column: Interactive Live Simulator Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/90 backdrop-blur-md p-5 sm:p-6 border border-agri-200/80 shadow-card hover:shadow-card-hover transition-all">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 border-b border-cream-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-forest">
                    Live Context Simulator
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-agri-700 bg-agri-50 px-2 py-0.5 rounded border border-agri-200">
                  Jaipur · 32°C · 68% RH
                </span>
              </div>

              {/* Sample Switcher Tabs */}
              <div className="py-3">
                <label className="text-[11px] font-medium text-slate-500 block mb-1.5">
                  Select sample leaf condition to test pipeline:
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {CROP_PRESETS.slice(0, 3).map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedSampleIndex(idx)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold text-left transition-all ${
                        selectedSampleIndex === idx
                          ? 'bg-forest text-white shadow-xs'
                          : 'bg-cream-100 text-slate-700 hover:bg-cream-200'
                      }`}
                    >
                      <div className="truncate">{p.crop.split(' ')[0]}</div>
                      <div className="text-[10px] opacity-75 truncate">{p.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Leaf Visual & Context Synthesis Grid */}
              <div className="grid grid-cols-12 gap-3 bg-cream-50 p-3 rounded-xl border border-cream-200 my-2">
                
                {/* Visual */}
                <div className="col-span-5 relative rounded-lg overflow-hidden border border-slate-200 bg-slate-900 aspect-square flex items-center justify-center">
                  <img 
                    src={sample.imageSvg} 
                    alt={sample.crop} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 text-[10px] text-white px-1.5 py-0.5 rounded backdrop-blur-xs font-mono">
                    {sample.sampleCondition.confidence}% match
                  </div>
                </div>

                {/* Analysis Snippet */}
                <div className="col-span-7 flex flex-col justify-between text-xs space-y-1.5">
                  <div>
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className={`w-3.5 h-3.5 ${sample.sampleCondition.isHealthy ? 'text-emerald-600' : 'text-amber-600'}`} />
                      <span className="font-bold text-forest text-xs">{sample.sampleCondition.conditionName}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                      {sample.sampleCondition.observedIndicators[0]?.description}
                    </p>
                  </div>

                  <div className="bg-white p-1.5 rounded border border-cream-200 text-[10px] text-slate-600 space-y-0.5">
                    <div className="flex items-center justify-between text-slate-500 font-medium">
                      <span>Climate Correlation:</span>
                      <span className="text-agri-700 font-bold">High Pathogen Risk</span>
                    </div>
                    <p className="text-[10px] text-slate-500 italic">
                      68% humidity + flowering stage accelerates spread.
                    </p>
                  </div>
                </div>

              </div>

              {/* The "ONE NEXT BEST ACTION" Highlight Banner */}
              <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-clay-50 to-agri-50 border border-clay-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-clay-700">
                    ★ Your One Next Best Action
                  </span>
                  <span className="text-[10px] font-semibold text-clay-600 bg-clay-100 px-1.5 py-0.2 rounded">
                    Within 24 Hours
                  </span>
                </div>
                <p className="font-display font-bold text-xs text-forest">
                  {sample.sampleCondition.oneNextBestAction.title}
                </p>
                <p className="text-[11px] text-slate-700 line-clamp-2">
                  {sample.sampleCondition.oneNextBestAction.step}
                </p>
              </div>

              {/* Bottom Simulator Action */}
              <button
                onClick={onExploreDemo}
                className="w-full mt-3 py-2 text-xs font-semibold text-agri-800 hover:text-agri-950 bg-agri-100 hover:bg-agri-200 rounded-lg transition-colors flex items-center justify-center space-x-1"
              >
                <span>Launch Full Agronomist Workflow</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
