import React from 'react';
import { Droplets, CloudRain, Bug, Zap, Wind, ArrowUpRight } from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

export const MetricOverviewGrid: React.FC<{ onNavigateToWeather: () => void }> = ({ onNavigateToWeather }) => {
  const { telemetry, weather } = useFarm();
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      
      {/* 1: 24h Rain Probability */}
      <div 
        onClick={onNavigateToWeather}
        className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm hover:border-agri-400 hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t('metric.rainChance')}
          </span>
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <CloudRain className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline space-x-1.5">
            <span className="font-display font-black text-3xl text-forest">{weather.current.rainProb}%</span>
            <span className="text-xs text-slate-500">within 18h</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">
            {weather.current.condition} · {weather.current.temp}°C
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-cream-200 flex items-center justify-between text-[11px] font-semibold text-agri-700">
          <span>View Hourly Rain</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* 2: Pathogen / Disease Risk */}
      <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t('metric.diseaseRisk')}
          </span>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            telemetry.diseaseRiskScore > 60 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-50 text-emerald-600'
          }`}>
            <Bug className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline space-x-1.5">
            <span className="font-display font-black text-3xl text-forest">{telemetry.diseaseRiskScore}</span>
            <span className="text-xs text-slate-500">/ 100</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1">
            {telemetry.diseaseRiskScore > 60 ? 'Elevated fungal spore risk' : 'Optimal plant resilience'}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-cream-200 text-[11px] text-slate-500">
          Foliar relative humidity: <strong>{weather.current.humidity}%</strong>
        </div>
      </div>

      {/* 3: Spray Feasibility */}
      <div 
        onClick={onNavigateToWeather}
        className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm hover:border-agri-400 hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t('metric.spraySuitability')}
          </span>
          <div className="w-8 h-8 rounded-lg bg-clay-50 text-clay-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Wind className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            {weather.current.sprayWindowStatus === 'POOR_RAIN_RISK' ? 'Avoid Spraying' : 'Moderate'}
          </div>
          <p className="text-[11px] text-slate-600 mt-2 line-clamp-1">
            Wash-off risk due to impending showers
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-cream-200 flex items-center justify-between text-[11px] font-semibold text-clay-700">
          <span>Opens Wed Morning</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* 4: Irrigation / Water Efficiency */}
      <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t('metric.waterEfficiency')}
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Droplets className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline space-x-1.5">
            <span className="font-display font-black text-3xl text-emerald-700">{telemetry.waterEfficiencyScore}%</span>
            <span className="text-xs text-slate-500">high savings</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1">
            ~3,200L saved by rainfall deferral
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-cream-200 text-[11px] text-slate-500">
          Soil moisture level: <strong>{telemetry.soilMoistureEst}%</strong>
        </div>
      </div>

    </div>
  );
};
