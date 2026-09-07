import React from 'react';
import { Milestone, Radio, Satellite, BarChart3, CheckCircle2 } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      timeline: '0 – 3 Months',
      current: true,
      title: 'MVP & Core Advisory Engine',
      items: [
        'Crop foliar image analysis pipeline',
        'Weather-aware micro-climate recommendations',
        'Basic multilingual voice & text advisor (Hindi & English)',
        'Mobile-first responsive farmer web interface'
      ]
    },
    {
      phase: 'Phase 2',
      timeline: '3 – 6 Months',
      current: false,
      title: 'Cohort Pilots & Model Refinement',
      items: [
        'Smallholder cohort field testing across Rajasthan & MP',
        'Direct farmer feedback loop integration',
        'Computer vision fine-tuning on regional field anomalies',
        'Expansion to 8 additional commercial crops & Marathi/Punjabi'
      ]
    },
    {
      phase: 'Phase 3',
      timeline: '6 – 12 Months',
      current: false,
      title: 'Institutional Scale & Extension Hub',
      items: [
        'Dedicated Extension Worker & FPO cluster dashboard',
        'Multi-plot enterprise farm management',
        'Deeper historical soil-weather personalization',
        'Integration with state agricultural universities (SAUs)'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-cream-200" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-forest bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
            Roadmap & Vision
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest mt-3 tracking-tight">
            Where this goes from here.
          </h2>
          <p className="text-slate-600 text-base mt-2">
            A disciplined, milestone-driven trajectory from hackathon prototype to scalable agrarian intelligence network.
          </p>
        </div>

        {/* 3 Main Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, idx) => (
            <div 
              key={p.phase}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all ${
                p.current 
                  ? 'bg-gradient-to-b from-agri-50 to-white border-agri-400 shadow-md ring-1 ring-agri-400' 
                  : 'bg-cream-50/50 border-cream-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-lg text-forest">{p.phase}</span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    p.current ? 'bg-agri-700 text-white' : 'bg-cream-200 text-slate-700'
                  }`}>
                    {p.timeline}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-forest mb-4">
                  {p.title}
                </h3>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  {p.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.current ? 'text-agri-600' : 'text-slate-400'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.current && (
                <div className="mt-6 pt-4 border-t border-agri-200 text-xs font-semibold text-agri-800 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-agri-500 animate-pulse"></span>
                  <span>Currently Live in Demo App</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Future Horizon Banner (Matching Slide 10) */}
        <div className="mt-8 p-6 rounded-2xl bg-forest text-white border border-forest-light/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-agri-800 text-agri-300 flex items-center justify-center flex-shrink-0">
              <Satellite className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-agri-300">Long-Term Horizon</span>
              <h4 className="font-display font-bold text-sm sm:text-base text-white">
                IoT Soil Sensors · Satellite Remote Sensing · Yield Forecasting · Parametric Insurance
              </h4>
            </div>
          </div>
          <div className="text-xs text-clay-300 font-semibold italic flex-shrink-0">
            "See the crop. Understand the risk. Make a better decision."
          </div>
        </div>

      </div>
    </section>
  );
};
