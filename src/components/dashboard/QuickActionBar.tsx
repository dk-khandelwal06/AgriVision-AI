import React from 'react';
import { Scan, Bot, CloudSun, History, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface QuickActionBarProps {
  onNavigate: (view: string) => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const actions = [
    {
      id: 'scan',
      label: t('action.scanCrop'),
      desc: 'Capture leaf & diagnose disease',
      icon: Scan,
      bg: 'bg-agri-700 hover:bg-agri-800 text-white',
      iconColor: 'text-agri-200'
    },
    {
      id: 'advisor',
      label: t('action.askAdvisor'),
      desc: 'Voice/text agronomic guidance',
      icon: Bot,
      bg: 'bg-forest hover:bg-agri-950 text-white',
      iconColor: 'text-agri-300'
    },
    {
      id: 'weather',
      label: t('action.checkSpray'),
      desc: 'Spray windows & rain timing',
      icon: CloudSun,
      bg: 'bg-white hover:bg-cream-100 text-forest border border-cream-300',
      iconColor: 'text-clay-500'
    },
    {
      id: 'timeline',
      label: t('action.viewTimeline'),
      desc: 'Crop health & action history',
      icon: History,
      bg: 'bg-white hover:bg-cream-100 text-forest border border-cream-300',
      iconColor: 'text-slate-500'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-slate-700">
          {t('action.quickActions')}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              onClick={() => onNavigate(act.id)}
              className={`p-4 rounded-2xl text-left flex items-center justify-between shadow-xs transition-all hover:scale-[1.02] ${act.bg}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-5 h-5 ${act.iconColor}`} />
                </div>
                <div>
                  <span className="font-display font-bold text-sm block leading-snug">
                    {act.label}
                  </span>
                  <span className="text-[11px] opacity-80 block">
                    {act.desc}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
