import React from 'react';
import { TrendingUp, Landmark, HeartHandshake, DollarSign, ArrowRight, Shield } from 'lucide-react';

export const MarketImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream-50 border-b border-cream-200" id="market-impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-agri-800 bg-agri-100 px-3 py-1 rounded-full border border-agri-200">
            Market & Opportunity
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest mt-3 tracking-tight">
            A large market, moving in our direction.
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Tailwinds across policy, mobile penetration, and climate adaptation make AI-driven agronomy the fastest growing agri-segment.
          </p>
        </div>

        {/* Market Stats Grid (Matching Slide 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* India Smart Agri Growth Chart Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white p-6 sm:p-7 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-agri-700">
                  India Smart Agriculture Market (USD)
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  +20.54% CAGR
                </span>
              </div>

              {/* Visual Bar Comparison */}
              <div className="flex items-end justify-around h-44 pt-6 pb-2 border-b border-cream-200">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-700 mb-1">$714M</span>
                  <div className="w-16 bg-agri-300 rounded-t-lg h-16 transition-all"></div>
                  <span className="text-xs font-semibold text-slate-500 mt-2">2024</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-forest mb-1">$3,838M</span>
                  <div className="w-16 bg-forest rounded-t-lg h-36 shadow-sm transition-all relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-clay-400"></span>
                  </div>
                  <span className="text-xs font-bold text-forest mt-2">2033</span>
                </div>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-slate-500">
              Source: <em>IMARC Group AgriTech Forecasting Report</em>
            </div>
          </div>

          {/* Right Stat Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* 46.1% Workforce */}
            <div className="p-6 rounded-2xl bg-forest text-white flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-agri-300">
                  Employment Scale
                </span>
                <div className="font-display font-black text-5xl text-agri-300 mt-2">
                  46.1%
                </div>
                <p className="text-cream-100 text-sm mt-2 font-medium">
                  of India's total workforce is employed in agriculture (2024).
                </p>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 pt-3 border-t border-forest-light/40">
                Govt. of India, Lok Sabha official reply, Feb 2025
              </p>
            </div>

            {/* Global Market */}
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clay-600">
                  Global Opportunity
                </span>
                <div className="font-display font-black text-3xl sm:text-4xl text-forest mt-2">
                  $14.4B → $23.4B
                </div>
                <p className="text-slate-600 text-sm mt-2">
                  Global smart agriculture market by 2029 (10.2% CAGR).
                </p>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 pt-3 border-t border-cream-200">
                Source: <em>MarketsandMarkets</em>
              </p>
            </div>

            {/* Government Momentum Banner */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-agri-50 border border-agri-200 flex items-start space-x-3">
              <Landmark className="w-6 h-6 text-agri-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-agri-950 mb-1">
                  Government & DPI Policy Momentum
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Union Budget & Digital Public Infrastructure (DPI) for Agriculture initiatives are standardizing farmer registry data, enabling instant API integrations for weather, crop insurance, and climate-resilient programs.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Business Model & Social Impact (Matching Slide 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Business Model Card */}
          <div className="p-7 rounded-2xl bg-white border border-cream-300 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5 text-agri-300" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-forest">Business Model</h3>
                <p className="text-xs text-slate-500">Multiple revenue monetization vectors</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-agri-600 mt-1.5 flex-shrink-0"></span>
                <span><strong>B2C Freemium:</strong> Free basic crop scans & weather; premium voice agronomist & custom soil alerts for farmers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-agri-600 mt-1.5 flex-shrink-0"></span>
                <span><strong>B2B Subscriptions:</strong> Dashboards for Farmer Producer Organizations (FPOs), cooperatives, and input retailers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-agri-600 mt-1.5 flex-shrink-0"></span>
                <span><strong>B2G & NGO Deployments:</strong> Institutional public health and climate adaptation contracts.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-agri-600 mt-1.5 flex-shrink-0"></span>
                <span><strong>Premium Analytics Tier:</strong> Anonymized regional disease spread indices for crop insurers.</span>
              </li>
            </ul>
          </div>

          {/* Social Impact Card */}
          <div className="p-7 rounded-2xl bg-white border border-cream-300 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-agri-700 text-white flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5 text-cream-100" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-forest">Social Impact</h3>
                <p className="text-xs text-slate-500">Measurable climate resilience for smallholders</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-clay-500 mt-1.5 flex-shrink-0"></span>
                <span><strong>Better-Informed Decisions:</strong> Elimination of guesswork in pesticide and irrigation schedules.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-clay-500 mt-1.5 flex-shrink-0"></span>
                <span><strong>Reduced Chemical Overuse:</strong> Prevents unnecessary foliar spraying before rainfall wash-off.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-clay-500 mt-1.5 flex-shrink-0"></span>
                <span><strong>Vernacular Inclusion:</strong> Farmers receive expert agronomy in their mother tongue.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-clay-500 mt-1.5 flex-shrink-0"></span>
                <span><strong>Climate Resilience:</strong> Stronger farm-level buffers against erratic monsoon patterns.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 5-Step Measurement Flow (Slide 9) */}
        <div className="mt-10 p-6 rounded-2xl bg-cream-200/60 border border-cream-300">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
            Impact Measurement Framework (Intended Metric Progression)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
            <div className="p-3 bg-white rounded-lg border border-cream-300 font-semibold text-forest">
              1. Farmers Reached
            </div>
            <div className="p-3 bg-white rounded-lg border border-cream-300 font-semibold text-forest">
              2. Recommendations Followed
            </div>
            <div className="p-3 bg-white rounded-lg border border-cream-300 font-semibold text-forest">
              3. Input Efficiency Gained
            </div>
            <div className="p-3 bg-white rounded-lg border border-cream-300 font-semibold text-forest">
              4. Crop Health Protected
            </div>
            <div className="p-3 bg-agri-700 text-white rounded-lg font-semibold shadow-xs col-span-2 sm:col-span-1">
              5. Farmer Income Resilience
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
