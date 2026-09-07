import React from 'react';
import { CloudRain, Bug, Droplets, AlertTriangle, X, ArrowRight } from 'lucide-react';
import { useFarm } from '../../context/FarmContext';

export const AlertsFeed: React.FC<{ onNavigateToAdvisor: () => void }> = ({ onNavigateToAdvisor }) => {
  const { alerts, dismissAlert } = useFarm();

  if (alerts.length === 0) return null;

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'RAIN': return CloudRain;
      case 'DISEASE': return Bug;
      case 'WATER': return Droplets;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-slate-700 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Active Farm Advisories & Alerts</span>
        </h3>
        <span className="text-xs text-slate-500 font-medium">
          {alerts.length} Pending
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {alerts.map((alert) => {
          const Icon = getAlertIcon(alert.type);
          return (
            <div
              key={alert.id}
              className={`p-4 rounded-2xl border transition-all relative flex flex-col justify-between ${
                alert.severity === 'WARNING'
                  ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                  : 'bg-blue-50/70 border-blue-200 text-blue-950'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`p-1.5 rounded-lg ${alert.severity === 'WARNING' ? 'bg-amber-200/80 text-amber-900' : 'bg-blue-200/80 text-blue-900'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm">
                      {alert.title}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => dismissAlert(alert.id)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-black/5"
                    title="Dismiss alert"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  {alert.message}
                </p>
              </div>

              <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs">
                <span className="font-semibold text-agri-900 text-[11px]">
                  Action: {alert.actionableStep}
                </span>
                <button
                  onClick={onNavigateToAdvisor}
                  className="text-[11px] font-bold text-agri-800 hover:text-forest flex items-center space-x-1"
                >
                  <span>Ask AI</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
