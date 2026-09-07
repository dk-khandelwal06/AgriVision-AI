import React from 'react';
import { Layers, Cpu, Database, CheckCircle2, ArrowDown, Sparkles } from 'lucide-react';

export const TechArchSection: React.FC = () => {
  return (
    <section className="py-20 bg-forest text-white border-b border-forest-light/20 relative overflow-hidden" id="technology">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-agri-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-agri-300 bg-agri-950 px-3 py-1 rounded-full border border-agri-700">
            AI / ML Technology Architecture
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Engineered for edge speed & agronomic precision.
          </h2>
          <p className="text-slate-300 text-base mt-2">
            A modular 4-tier pipeline that combines lightweight computer vision with contextual retrieval-augmented intelligence.
          </p>
        </div>

        {/* 4 Architectural Layers Stack (Matching Slide 8) */}
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* 1: Input Layer */}
          <div className="rounded-xl bg-agri-950/80 border border-agri-700/50 p-5 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-agri-800 text-agri-300 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">INPUT LAYER</h4>
                  <p className="text-xs text-slate-400">Multi-modal sensory inputs from smallholder devices</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-agri-900 border border-agri-600/40 text-agri-200">📷 Crop Leaf Image</span>
                <span className="px-2.5 py-1 rounded bg-agri-900 border border-agri-600/40 text-agri-200">🎙 Voice / Text Dialect</span>
                <span className="px-2.5 py-1 rounded bg-agri-900 border border-agri-600/40 text-agri-200">📍 GPS / District Location</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-agri-400 py-0.5">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* 2: AI / ML Layer */}
          <div className="rounded-xl bg-gradient-to-r from-agri-900 via-forest to-agri-900 border-2 border-clay-500/80 p-6 shadow-glow-clay backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-clay-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-display font-bold text-white text-lg">AI / ML CORE ENGINE</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-clay-500/30 text-clay-300 border border-clay-400/40">Core IP</span>
                  </div>
                  <p className="text-xs text-slate-300">Synchronous multi-task inference pipeline</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded bg-black/40 border border-agri-700/50">
                  <span className="font-semibold text-agri-300">Computer Vision:</span> MobileNet / CNN foliar lesion detection
                </div>
                <div className="p-2 rounded bg-black/40 border border-agri-700/50">
                  <span className="font-semibold text-agri-300">Context Intelligence:</span> Weather + crop stage correlator
                </div>
                <div className="p-2 rounded bg-black/40 border border-agri-700/50">
                  <span className="font-semibold text-clay-300">Risk Engine:</span> Pathogen incubation scoring
                </div>
                <div className="p-2 rounded bg-black/40 border border-agri-700/50">
                  <span className="font-semibold text-clay-300">Language AI:</span> LLM + RAG agronomist in Indic dialects
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-agri-400 py-0.5">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* 3: Knowledge & Data Layer */}
          <div className="rounded-xl bg-agri-950/80 border border-agri-700/50 p-5 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-agri-800 text-agri-300 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">KNOWLEDGE & TELEMETRY LAYER</h4>
                  <p className="text-xs text-slate-400">Verified agricultural databases and meteorological stations</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-agri-900 border border-agri-600/40 text-agri-200">📚 ICAR & KVK Package of Practices</span>
                <span className="px-2.5 py-1 rounded bg-agri-900 border border-agri-600/40 text-agri-200">⛅ IMD / Satellite Weather Grid</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-agri-400 py-0.5">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* 4: Output Layer */}
          <div className="rounded-xl bg-gradient-to-r from-clay-900 via-clay-800 to-clay-900 border border-clay-400/60 p-5 text-center shadow-md">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-clay-300 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>DECISIVE OUTPUT</span>
            </div>
            <p className="font-display font-bold text-xl sm:text-2xl text-white">
              One Simple, Plain-Language Actionable Recommendation
            </p>
            <p className="text-xs text-clay-200 mt-1">
              Action + Urgency + Spray Window + Irrigation Directive
            </p>
          </div>

        </div>

        {/* Tech Stack Specs Box */}
        <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-agri-700/40 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-1">Frontend Client:</span>
            <span className="font-semibold text-white">React 18 + TS (Vite) / Flutter Mobile</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">API Backend:</span>
            <span className="font-semibold text-white">Python + FastAPI / Async Microservices</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">CV & LLM Models:</span>
            <span className="font-semibold text-white">PyTorch, MobileNetV3 + Indic LLM RAG</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Deployment:</span>
            <span className="font-semibold text-white">Cloud Edge Backend + Vercel SPA Client</span>
          </div>
        </div>

      </div>
    </section>
  );
};
