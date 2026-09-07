import React from 'react';
import { Sprout, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest-dark text-slate-300 border-t border-forest-light/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-forest-light/20">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agri-600 to-forest flex items-center justify-center text-white shadow-glow-sm">
                <Sprout className="w-6 h-6 text-agri-300" />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                AgriVision<span className="text-agri-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Climate-resilient smart farming advisor uniting Computer Vision, hyper-local climate intelligence, and voice AI. Designed first for smallholder farmers with the least room for error.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-agri-950/80 border border-agri-600/30 text-xs text-agri-300">
              <Sparkles className="w-3.5 h-3.5 text-clay-400" />
              <span>Developed for StartupX Hackathon 2026 · Gamnexis</span>
            </div>
          </div>

          {/* Col 2: Core Philosophy */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Core Workflow
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-agri-400"></span>
                <span><strong>SEE:</strong> AI Foliar Computer Vision</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-agri-400"></span>
                <span><strong>UNDERSTAND:</strong> Climate & Crop Context</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-agri-400"></span>
                <span><strong>COMMUNICATE:</strong> Multilingual Voice AI</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-clay-400"></span>
                <span><strong>ACT:</strong> One Next Best Action</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Beneficiaries & Architecture */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Who We Serve
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Small & Marginal Farmers (86.2% Indian Base)</li>
              <li>• Agricultural Extension Workers & KVKs</li>
              <li>• Farmer Producer Organizations (FPOs)</li>
              <li>• Agri-insurers & Climate Agencies</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 AgriVisionAI. Built by Daksh Khandelwal & Khushi Kushwah.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-agri-400" />
              <span>Contextual Decision Support System</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>Vercel Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
