import React from 'react';
import { CloudRain, Bug, Clock, Users, ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream-100/70 border-b border-cream-200" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-clay-600 bg-clay-100 px-3 py-1 rounded-full border border-clay-200">
            The Problem
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest mt-3 tracking-tight">
            Farming decisions are getting harder — not easier.
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Smallholder agriculture faces escalating climate volatility, rapid pathogen spread, and a severe shortage of localized, timely agronomic advice.
          </p>
        </div>

        {/* 3 Problem Cards + 1 Massive Stat Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 3 Cards Left */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* 1: Unpredictable Weather */}
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between hover:border-agri-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-agri-100 text-agri-700 flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-forest mb-2">
                  Unpredictable Weather & Water Scarcity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Erratic rainfall and intense heatwaves turn sowing, irrigation, and spraying into high-risk gambles with zero margin for error.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-cream-200 text-xs font-semibold text-agri-700">
                Direct crop stress
              </div>
            </div>

            {/* 2: Crop Disease */}
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between hover:border-agri-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Bug className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-forest mb-2">
                  Pests & Pathogens Spread Fast
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Foliar blights, viruses, and insect vectors can devastate 40–80% of crop yield before a smallholder farmer realizes what has gone wrong.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-cream-200 text-xs font-semibold text-amber-700">
                Rapid yield collapse
              </div>
            </div>

            {/* 3: Advisory Gap */}
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between hover:border-agri-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-clay-100 text-clay-700 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-forest mb-2">
                  Expert Advice Rarely Arrives in Time
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Traditional agronomic extension services are understaffed, slow, and rarely communicate in the farmer's dialect with contextual precision.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-cream-200 text-xs font-semibold text-clay-700">
                Language & timing gap
              </div>
            </div>

          </div>

          {/* 1 Massive 86.2% Stat Box Right (Matching Slide 2) */}
          <div className="lg:col-span-4 rounded-2xl bg-forest text-white p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-agri-600/20 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs text-agri-300 font-semibold uppercase tracking-wider mb-3">
                <Users className="w-4 h-4" />
                <span>Primary Target Demographic</span>
              </div>
              <div className="font-display font-black text-6xl sm:text-7xl text-agri-300 tracking-tight">
                86.2%
              </div>
              <p className="text-cream-100 text-lg font-medium mt-2 leading-snug">
                of Indian farmers hold less than 2 hectares of land.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-forest-light/40">
              <p className="text-xs text-slate-400">
                Source: <em>Agriculture Census 2015–16, Ministry of Agriculture & Farmers Welfare, Govt. of India</em>
              </p>
              <div className="mt-3 p-2.5 rounded-lg bg-agri-950/60 border border-agri-700/40 text-xs text-agri-200">
                <strong>Why them first?</strong> Highest vulnerability to climate shock, tightest input constraints, and desperate need for simple, mobile-first tools.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
