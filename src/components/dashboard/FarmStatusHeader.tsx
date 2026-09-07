import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Info,
  Clock,
  Check
} from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

export const FarmStatusHeader: React.FC<{ onNavigateToScan: () => void; onNavigateToAdvisor: () => void }> = ({
  onNavigateToScan,
  onNavigateToAdvisor
}) => {
  const { farmProfile, telemetry, markActionCompleted } = useFarm();
  const { t } = useLanguage();

  const getStatusBadge = () => {
    switch (telemetry.status) {
      case 'GOOD':
        return {
          bg: 'bg-emerald-500/15 text-emerald-800 border-emerald-400/50',
          dot: 'bg-emerald-500',
          label: t('status.good'),
          icon: ShieldCheck
        };
      case 'ATTENTION':
        return {
          bg: 'bg-rose-500/15 text-rose-800 border-rose-400/50',
          dot: 'bg-rose-500 animate-ping',
          label: t('status.attention'),
          icon: ShieldAlert
        };
      case 'WATCH':
      default:
        return {
          bg: 'bg-amber-500/15 text-amber-900 border-amber-400/50',
          dot: 'bg-amber-500',
          label: t('status.watch'),
          icon: AlertCircle
        };
    }
  };

  const statusBadge = getStatusBadge();
  const StatusIcon = statusBadge.icon;

  return (
    <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-8 space-y-6 relative overflow-hidden">
      
      {/* Background soft ambient tint */}
      <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10 ${
        telemetry.status === 'GOOD' ? 'bg-emerald-100/40' : telemetry.status === 'ATTENTION' ? 'bg-rose-100/40' : 'bg-amber-100/40'
      }`} />

      {/* Top Farm Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-cream-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Farm Intelligence Layer
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-semibold text-agri-800 bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-200">
              {farmProfile.primaryCrop} · {farmProfile.cropStage} Stage
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-forest mt-1">
            {farmProfile.farmerName}'s Farm
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {farmProfile.location.district}, {farmProfile.location.state} · {farmProfile.farmSizeAcres} Acres ({farmProfile.irrigationMethod})
          </p>
        </div>

        {/* Dynamic Status Badge */}
        <div className={`inline-flex items-center space-x-2.5 px-4 py-2 rounded-2xl border ${statusBadge.bg} shadow-xs`}>
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusBadge.dot}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${statusBadge.dot}`}></span>
          </span>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 block">
              Farm Health State
            </span>
            <span className="font-display font-bold text-sm tracking-tight">
              {statusBadge.label}
            </span>
          </div>
        </div>
      </div>

      {/* WHY SECTION: Explaining the Agronomic Context */}
      <div className="p-4 rounded-2xl bg-cream-100/80 border border-cream-200/80 space-y-1">
        <div className="flex items-center space-x-1.5 text-xs font-bold text-forest uppercase tracking-wider">
          <Info className="w-3.5 h-3.5 text-agri-700" />
          <span>{t('status.whyTitle')}</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          {telemetry.whyText}
        </p>
      </div>

      {/* SIGNATURE ELEMENT: ONE NEXT BEST ACTION */}
      <div className="rounded-2xl bg-gradient-to-r from-clay-50 via-cream-50 to-agri-50 border-2 border-clay-300 p-5 sm:p-6 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-clay-500 text-white flex items-center justify-center font-bold text-xs">
              ★
            </div>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-clay-800">
              {t('status.oneNextAction')}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-clay-700">
            <Clock className="w-3.5 h-3.5 text-clay-600" />
            <span>Timeframe: {telemetry.nextBestAction.dueTimeframe}</span>
          </div>
        </div>

        <h3 className="font-display font-bold text-base sm:text-lg text-forest mb-2">
          {telemetry.nextBestAction.title}
        </h3>

        <p className="text-sm text-slate-700 leading-relaxed mb-5">
          {telemetry.nextBestAction.action}
        </p>

        {/* Action Completion Toggle */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {!telemetry.nextBestAction.completed ? (
            <button
              onClick={markActionCompleted}
              className="px-5 py-2.5 rounded-xl bg-forest hover:bg-agri-900 text-white font-semibold text-xs sm:text-sm flex items-center space-x-2 shadow-sm hover:shadow-glow-sm transition-all"
            >
              <Check className="w-4 h-4 text-agri-300 stroke-[3]" />
              <span>{t('status.markDone')}</span>
            </button>
          ) : (
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs sm:text-sm font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t('status.actionCompleted')}</span>
            </div>
          )}

          <button
            onClick={onNavigateToAdvisor}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-cream-100 text-slate-700 font-semibold text-xs sm:text-sm border border-cream-300 transition-colors flex items-center space-x-1.5"
          >
            <span>Ask AI Why</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
