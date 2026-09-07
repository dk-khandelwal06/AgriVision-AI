import React from 'react';
import { Sparkles, RefreshCw, UserPlus } from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

interface DemoBannerProps {
  onOpenCustomOnboarding: () => void;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ onOpenCustomOnboarding }) => {
  const { isDemoMode, farmProfile, resetDemoFarm } = useFarm();
  const { t } = useLanguage();

  if (!isDemoMode) return null;

  return (
    <div className="bg-gradient-to-r from-forest-dark via-forest to-agri-900 text-white text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-agri-500/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-center sm:text-left">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-clay-500"></span>
          </span>
          <span className="font-medium text-cream-100">
            <strong>Judge Demo Mode:</strong> Viewing <strong>{farmProfile.farmerName}</strong> ({farmProfile.location.district}, {farmProfile.farmSizeAcres} Acres, {farmProfile.primaryCrop} - {farmProfile.cropStage} Stage)
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={resetDemoFarm}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-cream-100 text-xs font-semibold flex items-center space-x-1 transition-colors"
            title="Reset telemetry & scans to original state"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
          <button
            onClick={onOpenCustomOnboarding}
            className="px-2.5 py-1 rounded bg-clay-500 hover:bg-clay-600 text-white text-xs font-semibold flex items-center space-x-1 shadow-xs transition-colors"
          >
            <UserPlus className="w-3 h-3" />
            <span>Create My Farm</span>
          </button>
        </div>
      </div>
    </div>
  );
};
