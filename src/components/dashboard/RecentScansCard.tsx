import React from 'react';
import { Scan, AlertTriangle, CheckCircle2, ChevronRight, Calendar } from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { ScanResult } from '../../types/cropScan';

interface RecentScansCardProps {
  onSelectScan: (scan: ScanResult) => void;
  onNavigateToScan: () => void;
}

export const RecentScansCard: React.FC<RecentScansCardProps> = ({ onSelectScan, onNavigateToScan }) => {
  const { scans } = useFarm();

  return (
    <div className="rounded-3xl bg-white border border-cream-300 shadow-sm p-6 space-y-4">
      
      <div className="flex items-center justify-between pb-3 border-b border-cream-200">
        <div>
          <h3 className="font-display font-bold text-base text-forest">
            Recent Crop Scans
          </h3>
          <p className="text-xs text-slate-500">
            Foliar health diagnoses logged for your fields
          </p>
        </div>

        <button
          onClick={onNavigateToScan}
          className="text-xs font-bold text-agri-700 hover:text-agri-900 flex items-center space-x-1"
        >
          <span>New Scan</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="divide-y divide-cream-200">
        {scans.slice(0, 3).map((scan) => (
          <div
            key={scan.id}
            onClick={() => onSelectScan(scan)}
            className="py-3.5 flex items-center justify-between gap-3 hover:bg-cream-50 rounded-xl px-2 transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0 border border-cream-300 relative">
                <img src={scan.imageUrl} alt={scan.condition.cropName} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-white font-mono text-center">
                  {scan.condition.confidence}%
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-display font-bold text-sm text-forest group-hover:text-agri-700 transition-colors">
                    {scan.condition.conditionName}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full ${
                    scan.condition.isHealthy ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {scan.condition.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {scan.scannedAtLocation} · {scan.weatherSnapshot.temp}°C ({scan.weatherSnapshot.humidity}% RH)
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-forest transition-transform group-hover:translate-x-1" />
          </div>
        ))}
      </div>

    </div>
  );
};
