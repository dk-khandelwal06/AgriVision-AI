import React from 'react';
import { Camera, Compass, Mic, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      action: 'SEE',
      title: 'AI Crop Vision',
      desc: 'High-resolution feature extraction instantly detects foliar disease, nutrient chlorosis, and insect stress patterns.',
      icon: Camera,
      tag: 'Computer Vision',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      step: '02',
      action: 'UNDERSTAND',
      title: 'Context Intelligence',
      desc: 'Correlates foliar image with hyper-local weather (humidity, temp, rain forecast), crop stage, and soil parameters.',
      icon: Compass,
      tag: 'Climate + Stage Context',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      step: '03',
      action: 'COMMUNICATE',
      title: 'Multilingual Voice AI',
      desc: 'Speaks the farmer\'s language in natural conversational voice or text, answering nuanced farming inquiries.',
      icon: Mic,
      tag: 'Voice/Text LLM',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      step: '04',
      action: 'ACT',
      title: 'One Next Best Action',
      desc: 'Replaces confusing 20-bullet generic articles with one prioritized, step-by-step actionable instruction.',
      icon: CheckCircle2,
      tag: 'Decision Engine',
      color: 'bg-clay-50 text-clay-700 border-clay-200'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-cream-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-agri-700 bg-agri-50 px-3 py-1 rounded-full border border-agri-200">
            Core Product Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest mt-3 tracking-tight">
            An AI agronomist that understands the crop, the context, and the farmer.
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Transforming raw image classification into complete agronomic intelligence through our four-pillar loop.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.step} 
                className="relative rounded-2xl bg-cream-50/70 p-6 border border-cream-300 hover:border-agri-400 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-slate-300 group-hover:text-agri-600 transition-colors">
                      {s.step}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${s.color}`}>
                      {s.action}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-cream-200 flex items-center justify-center text-forest mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-agri-700" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-forest mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-200 text-xs font-semibold text-slate-500">
                  {s.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Worked Example Showcase (Matching Slide 3 of PPT) */}
        <div className="mt-14 rounded-2xl bg-forest text-white p-6 sm:p-8 border border-forest-light/40 shadow-lg">
          <div className="flex items-center space-x-2 text-xs font-bold text-clay-400 uppercase tracking-wider mb-4">
            <span>Worked Example Walkthrough</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            <div className="p-4 rounded-xl bg-agri-950/60 border border-agri-700/40">
              <span className="w-6 h-6 rounded-full bg-agri-700 text-white text-xs font-bold flex items-center justify-center mb-2">1</span>
              <p className="font-semibold text-xs text-cream-100 mb-1">Farmer uploads</p>
              <p className="text-[11px] text-slate-300">Tomato leaf with yellow ring spots</p>
            </div>

            <div className="p-4 rounded-xl bg-agri-950/60 border border-agri-700/40">
              <span className="w-6 h-6 rounded-full bg-agri-700 text-white text-xs font-bold flex items-center justify-center mb-2">2</span>
              <p className="font-semibold text-xs text-cream-100 mb-1">AI flags stress</p>
              <p className="text-[11px] text-slate-300">Early Blight detected (91% confidence)</p>
            </div>

            <div className="p-4 rounded-xl bg-agri-950/60 border border-agri-700/40">
              <span className="w-6 h-6 rounded-full bg-agri-700 text-white text-xs font-bold flex items-center justify-center mb-2">3</span>
              <p className="font-semibold text-xs text-cream-100 mb-1">Weather correlated</p>
              <p className="text-[11px] text-slate-300">68% humidity + rain coming in 18h</p>
            </div>

            <div className="p-4 rounded-xl bg-agri-950/60 border border-agri-700/40">
              <span className="w-6 h-6 rounded-full bg-agri-700 text-white text-xs font-bold flex items-center justify-center mb-2">4</span>
              <p className="font-semibold text-xs text-cream-100 mb-1">Risk assessed</p>
              <p className="text-[11px] text-slate-300">High fungal incubation risk; spray would wash off</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-clay-600 to-clay-700 border border-clay-400 shadow-md">
              <span className="w-6 h-6 rounded-full bg-white text-clay-700 text-xs font-bold flex items-center justify-center mb-2">5</span>
              <p className="font-semibold text-xs text-white mb-1">One clear next step</p>
              <p className="text-[11px] text-white/90">Prune lower leaves & postpone irrigation for 24h</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
