import React from 'react';
import { Check, X, Minus, Sparkles } from 'lucide-react';

type DiffValue = boolean | 'partial';

interface DiffRow {
  feature: string;
  generic: DiffValue;
  imageOnly: DiffValue;
  weatherOnly: DiffValue;
  agriVision: DiffValue;
  agriVisionNote: string;
}

export const DiffMatrix: React.FC = () => {
  const comparisonRows: DiffRow[] = [
    {
      feature: 'Understands the crop image?',
      generic: false,
      imageOnly: true,
      weatherOnly: false,
      agriVision: true,
      agriVisionNote: 'Deep foliar vision with lesion pattern detection'
    },
    {
      feature: 'Understands local weather & stage context?',
      generic: false,
      imageOnly: false,
      weatherOnly: true,
      agriVision: true,
      agriVisionNote: 'Correlates humidity, temp, rain prob & growth stage'
    },
    {
      feature: 'Speaks the farmer\'s language (Voice & Text)?',
      generic: 'partial',
      imageOnly: false,
      weatherOnly: false,
      agriVision: true,
      agriVisionNote: 'Natural conversational Hindi, English & regional dialects'
    },
    {
      feature: 'Gives ONE clear prioritized next action?',
      generic: false,
      imageOnly: 'partial',
      weatherOnly: 'partial',
      agriVision: true,
      agriVisionNote: 'Cuts cognitive overload: Single decisive next best step'
    }
  ];

  const renderIcon = (val: boolean | 'partial', isAgriVision = false) => {
    if (val === true) {
      return (
        <div className={`w-7 h-7 rounded-full flex items-center justify-center mx-auto ${isAgriVision ? 'bg-agri-600 text-white shadow-xs' : 'bg-emerald-100 text-emerald-700'}`}>
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
      );
    }
    if (val === 'partial') {
      return (
        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
          <Minus className="w-4 h-4 stroke-[2.5]" />
        </div>
      );
    }
    return (
      <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
        <X className="w-4 h-4 stroke-[2.5]" />
      </div>
    );
  };

  return (
    <section className="py-20 bg-cream-100/60 border-b border-cream-200" id="diff-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-agri-700 bg-agri-100 px-3 py-1 rounded-full border border-agri-200">
            Why We're Different
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest mt-3 tracking-tight">
            From detecting the problem to helping the farmer decide what to do next.
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Most tools provide isolated data pieces. AgriVisionAI binds vision, climate, and action into a single unified companion.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-2xl bg-white border border-cream-300 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Head */}
              <thead>
                <tr className="border-b border-cream-300 bg-cream-50/80 text-xs sm:text-sm font-display font-bold text-forest">
                  <th className="py-5 px-4 sm:px-6 w-1/3">Capability Matrix</th>
                  <th className="py-5 px-3 text-center text-slate-500 font-medium">Generic Search / Articles</th>
                  <th className="py-5 px-3 text-center text-slate-500 font-medium">Image-Only Apps</th>
                  <th className="py-5 px-3 text-center text-slate-500 font-medium">Weather-Only Apps</th>
                  <th className="py-5 px-4 sm:px-6 text-center bg-agri-900 text-white font-bold tracking-wide relative">
                    <div className="flex items-center justify-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-clay-400" />
                      <span>AgriVisionAI</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-cream-200 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-forest text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-3 text-center">
                      {renderIcon(row.generic)}
                    </td>
                    <td className="py-4 px-3 text-center">
                      {renderIcon(row.imageOnly)}
                    </td>
                    <td className="py-4 px-3 text-center">
                      {renderIcon(row.weatherOnly)}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center bg-agri-50/70 border-l border-r border-agri-200">
                      {renderIcon(row.agriVision, true)}
                      <p className="text-[10px] text-agri-800 font-medium mt-1 max-w-[180px] mx-auto hidden sm:block">
                        {row.agriVisionNote}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="p-4 bg-cream-50 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span>Comparison based on common Indian agricultural mobile applications and search workflows.</span>
            <span className="font-semibold text-agri-800">AgriVisionAI: 100% End-to-End Decision Coverage</span>
          </div>
        </div>

      </div>
    </section>
  );
};
