import React from 'react';
import { 
  CloudSun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Sun, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Info,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

export const WeatherIntelligenceView: React.FC<{ onNavigateToAdvisor: () => void }> = ({ onNavigateToAdvisor }) => {
  const { farmProfile, weather } = useFarm();
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-agri-700 mb-1">
            <CloudSun className="w-4 h-4" />
            <span>Hyper-Local Climate Intelligence</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-forest">
            {t('weather.title')}
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            Connecting real-time atmospheric metrics directly to pesticide spraying windows, irrigation timing, and pathogen incubation risks.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-cream-200 text-forest border border-cream-300">
            Station: {weather.district}, {weather.state}
          </span>
        </div>
      </div>

      {/* Top 2 Crucial Agronomic Decision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1: Agricultural Spraying Window Card */}
        <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-clay-100 text-clay-700 flex items-center justify-center font-bold">
                  <Wind className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-base text-forest">
                  {t('weather.sprayWindow')}
                </h3>
              </div>

              <span className={`text-xs font-bold uppercase px-2.5 py-1 rounded-full border ${
                weather.current.sprayWindowStatus === 'POOR_RAIN_RISK'
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-emerald-100 text-emerald-800 border-emerald-300'
              }`}>
                {weather.current.sprayWindowStatus === 'POOR_RAIN_RISK' ? 'Avoid Spraying' : 'Favorable'}
              </span>
            </div>

            <h4 className="font-display font-bold text-lg text-forest mb-2">
              High Wash-Off Risk (Rain Expected within 18h)
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Applying fungicides or foliar nutrients today will lead to significant chemical runoff and financial loss. Wind speed is <strong>{weather.current.windSpeed} km/h ({weather.current.windDirection})</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-cream-100/80 border border-cream-200 text-xs flex items-center justify-between">
            <span className="text-slate-600">
              <strong>Next Optimal Spray Window:</strong> Wednesday 07:00 – 10:00 AM
            </span>
            <button
              onClick={onNavigateToAdvisor}
              className="font-bold text-agri-700 hover:text-agri-900 flex items-center space-x-1"
            >
              <span>Ask AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2: Smart Irrigation Recommendation Card */}
        <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Droplets className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-base text-forest">
                  {t('weather.irrigationGuidance')}
                </h3>
              </div>

              <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300">
                Delay Cycle
              </span>
            </div>

            <h4 className="font-display font-bold text-lg text-forest mb-2">
              Postpone Irrigation for Next 36 Hours
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {weather.current.irrigationRecommendation.reason}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between text-emerald-950">
            <span className="font-semibold">
              💧 Estimated Water Saved: ~{weather.current.irrigationRecommendation.waterSavedLitersEst} Liters
            </span>
            <span className="text-[11px] bg-white px-2 py-0.5 rounded font-bold border border-emerald-300">
              High Efficiency
            </span>
          </div>
        </div>

      </div>

      {/* Hourly Forecast Strip */}
      <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 space-y-4">
        <h3 className="font-display font-bold text-base text-forest">
          {t('weather.rainRisk')}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {weather.hourly.map((h, idx) => (
            <div 
              key={idx}
              className={`p-3.5 rounded-2xl border text-center flex flex-col justify-between space-y-2 ${
                h.rainProb > 50 ? 'bg-blue-50/60 border-blue-200' : 'bg-cream-50/60 border-cream-200'
              }`}
            >
              <span className="text-xs font-bold text-slate-500">{h.hour}</span>
              
              <div>
                <span className="font-display font-bold text-xl text-forest block">{h.temp}°C</span>
                <span className="text-[11px] text-blue-700 font-semibold block">{h.rainProb}% rain</span>
              </div>

              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                h.spraySuitability === 'Good' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : h.spraySuitability === 'Fair' 
                  ? 'bg-amber-100 text-amber-800' 
                  : 'bg-rose-100 text-rose-800'
              }`}>
                Spray: {h.spraySuitability}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Day Agricultural Forecast Table */}
      <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-cream-200">
          <h3 className="font-display font-bold text-lg text-forest">
            {t('weather.sevenDay')}
          </h3>
          <span className="text-xs text-slate-500">Includes Agronomic Implications</span>
        </div>

        <div className="divide-y divide-cream-200">
          {weather.forecast.map((day, idx) => (
            <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-4 min-w-[160px]">
                <span className="font-display font-bold text-base text-forest w-14">{day.day}</span>
                <span className="text-xs text-slate-500">{day.date}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cream-100 text-slate-700">
                  {day.condition}
                </span>
              </div>

              <div className="flex items-center space-x-4 text-xs font-semibold text-slate-700">
                <span>{day.tempMax}° / {day.tempMin}°C</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-700">{day.rainProb}% Rain</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{day.humidityAvg}% RH</span>
              </div>

              <div className="flex-1 max-w-md text-xs text-slate-600 bg-cream-50 p-2 rounded-xl border border-cream-200">
                <span className="font-semibold text-agri-900">Agri Implication: </span>
                {day.agriImplication}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
