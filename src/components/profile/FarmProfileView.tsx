import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Layers, 
  Droplets, 
  Globe, 
  RefreshCw, 
  ShieldCheck, 
  Edit3,
  Check,
  Sparkles,
  Sprout
} from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

export const FarmProfileView: React.FC = () => {
  const { farmProfile, updateFarmProfile, resetDemoFarm, isDemoMode } = useFarm();
  const { language, setLanguage, t } = useLanguage();

  const [isEditing, setIsEditing] = useState(false);
  const [farmerName, setFarmerName] = useState(farmProfile.farmerName);
  const [district, setDistrict] = useState(farmProfile.location.district);
  const [farmSize, setFarmSize] = useState(farmProfile.farmSizeAcres);
  const [crop, setCrop] = useState(farmProfile.primaryCrop);
  const [cropStage, setCropStage] = useState(farmProfile.cropStage);
  const [irrigation, setIrrigation] = useState(farmProfile.irrigationMethod);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateFarmProfile({
      farmerName,
      location: {
        ...farmProfile.location,
        district
      },
      farmSizeAcres: farmSize,
      primaryCrop: crop,
      cropStage: cropStage as any,
      irrigationMethod: irrigation as any
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-agri-700 mb-1">
            <User className="w-4 h-4" />
            <span>Farm Intelligence Profile</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-forest">
            {t('nav.profile')}
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mt-1">
            Manage your land holdings, crop varieties, meteorological pinpoint, and linguistic preference.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2.5 rounded-xl bg-forest hover:bg-agri-900 text-white font-semibold text-xs sm:text-sm flex items-center space-x-1.5 shadow-sm transition-all"
          >
            <Edit3 className="w-4 h-4 text-agri-300" />
            <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
          </button>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Farmer & Location Card */}
        <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-7 space-y-6">
          <div className="flex items-center space-x-3.5 pb-4 border-b border-cream-200">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-agri-700 to-forest text-white flex items-center justify-center font-display font-bold text-xl shadow-glow-sm">
              {farmProfile.farmerName.charAt(0)}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-forest">
                {farmProfile.farmerName}
              </h3>
              <span className="text-xs text-slate-500 block">
                {farmProfile.phone || 'Registered Smallholder'}
              </span>
            </div>
          </div>

          <div className="space-y-3.5 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Location / State:</span>
              <span className="font-bold text-slate-800">{farmProfile.location.district}, {farmProfile.location.state}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Land Area:</span>
              <span className="font-bold text-slate-800">{farmProfile.farmSizeAcres} Acres ({(farmProfile.farmSizeAcres * 0.404686).toFixed(2)} Ha)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Account Type:</span>
              <span className="font-semibold text-agri-800 bg-agri-50 px-2 py-0.5 rounded border border-agri-200">
                {isDemoMode ? 'Judge Demo Tier' : 'Direct Farmer Tier'}
              </span>
            </div>
          </div>

          {/* Reset Demo Farm Button */}
          <div className="pt-4 border-t border-cream-200">
            <button
              onClick={resetDemoFarm}
              className="w-full py-2.5 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-slate-700 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-cream-300"
            >
              <RefreshCw className="w-3.5 h-3.5 text-clay-500" />
              <span>Reset to Ramesh Kumar Demo</span>
            </button>
          </div>
        </div>

        {/* Right Column: Agronomic Operations & Soil (2 Cols) */}
        <div className="md:col-span-2 rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-cream-200">
            <h3 className="font-display font-bold text-base text-forest">
              Agronomic Parameters & Crop Systems
            </h3>
            <span className="text-xs text-agri-700 font-semibold bg-agri-50 px-2.5 py-0.5 rounded-full border border-agri-200">
              Calibrated for Precision
            </span>
          </div>

          {!isEditing ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-cream-50/70 border border-cream-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Primary Crop</span>
                <p className="font-display font-bold text-base text-forest">{farmProfile.primaryCrop}</p>
                <p className="text-xs text-slate-500">{farmProfile.cropVariety || 'Standard Hybrid'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50/70 border border-cream-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Growth Stage</span>
                <p className="font-display font-bold text-base text-forest">{farmProfile.cropStage}</p>
                <p className="text-xs text-slate-500">High vulnerability to foliar pathogens</p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50/70 border border-cream-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Irrigation System</span>
                <p className="font-display font-bold text-base text-forest">{farmProfile.irrigationMethod}</p>
                <p className="text-xs text-slate-500">Automated moisture-saving schedule</p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50/70 border border-cream-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Soil Texture</span>
                <p className="font-display font-bold text-base text-forest">{farmProfile.soilType}</p>
                <p className="text-xs text-slate-500">Good drainage capacity</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Farmer Name</label>
                  <input
                    type="text"
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-cream-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">District</label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-cream-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Land Size (Acres)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={farmSize}
                    onChange={(e) => setFarmSize(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2 rounded-xl border border-cream-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Crop</label>
                  <select
                    value={crop}
                    onChange={(e) => setCrop(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-cream-300 text-sm"
                  >
                    <option value="Tomato">Tomato</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Rice">Rice</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Corn">Corn</option>
                    <option value="Chilli">Chilli</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl bg-cream-100 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-forest text-white text-xs font-bold flex items-center space-x-1"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          )}

          {/* Language Preference Strip */}
          <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-forest block">Interface Language</span>
              <span className="text-[11px] text-slate-500">AgriVisionAI translates advisory into selected dialect</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  language === 'en' ? 'bg-forest text-white shadow-xs' : 'bg-cream-100 text-slate-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  language === 'hi' ? 'bg-forest text-white shadow-xs' : 'bg-cream-100 text-slate-700'
                }`}
              >
                हिन्दी (Hindi)
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
