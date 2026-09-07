import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const SafetyDisclaimer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { t } = useLanguage();

  if (compact) {
    return (
      <div className="flex items-center space-x-2 text-[11px] text-slate-500 py-1 px-2 rounded bg-cream-100 border border-cream-200">
        <Info className="w-3.5 h-3.5 text-agri-600 flex-shrink-0" />
        <span>{t('disclaimer.text')}</span>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 rounded-xl bg-agri-50 border border-agri-200/60 flex items-start space-x-3 text-xs text-agri-950">
      <ShieldCheck className="w-5 h-5 text-agri-600 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-agri-900 mb-0.5">Agricultural Advisory & Decision Support</p>
        <p className="text-slate-600 leading-relaxed">
          {t('disclaimer.text')} Recommendations incorporate verified agronomic principles, hyper-local meteorological feeds, and foliar symptom modeling. Always adhere to chemical label application standards and consult local Krishi Vigyan Kendra (KVK) officers for statutory compliance.
        </p>
      </div>
    </div>
  );
};
