import React, { useState } from 'react';
import { 
  History, 
  Calendar, 
  PlusCircle, 
  CheckCircle2, 
  Scan, 
  CloudRain, 
  AlertTriangle, 
  Check,
  Sparkles,
  X
} from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

export const FarmTimelineView: React.FC = () => {
  const { timeline, addTimelineEntry, telemetry } = useFarm();
  const { t } = useLanguage();

  const [showLogModal, setShowLogModal] = useState(false);
  const [actionTitle, setActionTitle] = useState('');
  const [actionDesc, setActionDesc] = useState('');

  const handleCreateAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!actionTitle.trim()) return;

    addTimelineEntry({
      date: 'Today',
      dayLabel: 'TODAY',
      type: 'ACTION',
      title: actionTitle,
      description: actionDesc || 'Manual action logged by farmer.',
      badgeText: 'Manual Log',
      status: 'COMPLETED'
    });

    setActionTitle('');
    setActionDesc('');
    setShowLogModal(false);
  };

  const getEntryIcon = (type: string) => {
    switch (type) {
      case 'SCAN': return Scan;
      case 'WEATHER': return CloudRain;
      case 'ALERT': return AlertTriangle;
      case 'ACTION': return CheckCircle2;
      default: return Calendar;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-agri-700 mb-1">
            <History className="w-4 h-4" />
            <span>Farm Companion Log</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-forest">
            {t('nav.timeline')}
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mt-1">
            A chronological timeline tracking disease detections, climate events, farmer interventions, and farm resilience progression.
          </p>
        </div>

        <button
          onClick={() => setShowLogModal(true)}
          className="px-4 py-2.5 rounded-xl bg-forest hover:bg-agri-900 text-white font-semibold text-xs sm:text-sm flex items-center space-x-1.5 shadow-sm transition-all"
        >
          <PlusCircle className="w-4 h-4 text-agri-300" />
          <span>Log Farmer Action</span>
        </button>
      </div>

      {/* Resilience Summary Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-forest to-agri-900 text-white p-6 sm:p-7 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs text-agri-300 font-bold uppercase tracking-wider">
            Cumulative Resilience Index
          </span>
          <h3 className="font-display font-bold text-2xl text-white mt-1">
            {telemetry.healthScore}% Farm Protection Rating
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Based on completed preventive pruning, spray window compliance, and irrigation deferrals.
          </p>
        </div>

        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 text-xs font-bold text-cream-100">
          <Sparkles className="w-4 h-4 text-clay-400" />
          <span>High Decision Discipline</span>
        </div>
      </div>

      {/* Timeline Feed */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-cream-300 space-y-8 my-8 ml-3 sm:ml-4">
        {timeline.map((item, idx) => {
          const Icon = getEntryIcon(item.type);
          return (
            <div key={item.id} className="relative group">
              
              {/* Bullet Node */}
              <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-white shadow-xs transition-transform group-hover:scale-110 ${
                item.status === 'COMPLETED'
                  ? 'bg-agri-700 text-white'
                  : item.type === 'ALERT'
                  ? 'bg-amber-500 text-white'
                  : 'bg-cream-200 text-slate-700'
              }`}>
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Event Card */}
              <div className="rounded-2xl bg-white border border-cream-300 shadow-xs p-5 hover:border-agri-300 transition-all space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="font-display font-bold text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-cream-100 text-slate-700">
                      {item.dayLabel}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{item.date}</span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    item.status === 'COMPLETED'
                      ? 'bg-emerald-100 text-emerald-800'
                      : item.status === 'PENDING'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-cream-100 text-slate-600'
                  }`}>
                    {item.badgeText}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-forest">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.imagePreview && (
                  <div className="pt-2">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-cream-300">
                      <img src={item.imagePreview} alt="Scan preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-cream-300 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-cream-200">
              <h3 className="font-display font-bold text-lg text-forest">
                Log Farming Action
              </h3>
              <button onClick={() => setShowLogModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAction} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Action Performed *
                </label>
                <input
                  type="text"
                  required
                  value={actionTitle}
                  onChange={(e) => setActionTitle(e.target.value)}
                  placeholder="e.g. Applied Copper Oxychloride preventative spray"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 outline-none text-sm text-slate-800 bg-cream-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Observations / Details
                </label>
                <textarea
                  rows={3}
                  value={actionDesc}
                  onChange={(e) => setActionDesc(e.target.value)}
                  placeholder="e.g. Sprayed early morning with Knapsack pump. Lower canopy wetness dried quickly."
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 outline-none text-sm text-slate-800 bg-cream-50/50 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="px-4 py-2 rounded-xl bg-cream-100 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-forest hover:bg-agri-900 text-white text-xs font-bold shadow-sm"
                >
                  Save to Log
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
