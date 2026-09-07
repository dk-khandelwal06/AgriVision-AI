import React, { useState } from 'react';
import { 
  Sprout, 
  MapPin, 
  Layers, 
  Droplets, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Globe
} from 'lucide-react';
import { FarmProfile } from '../../types/farm';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';

interface OnboardingWizardProps {
  initialData?: { name?: string; location?: string; crop?: string };
  onFinish: () => void;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ initialData, onFinish }) => {
  const { updateFarmProfile, setIsDemoMode } = useFarm();
  const { language, setLanguage } = useLanguage();

  const [step, setStep] = useState(1);
  const [farmerName, setFarmerName] = useState(initialData?.name || 'Virendra Singh');
  const [district, setDistrict] = useState(initialData?.location || 'Jaipur');
  const [state, setState] = useState('Rajasthan');
  const [farmSizeAcres, setFarmSizeAcres] = useState<number>(3.5);
  const [primaryCrop, setPrimaryCrop] = useState(initialData?.crop || 'Tomato');
  const [cropVariety, setCropVariety] = useState('Hybrid Gold');
  const [cropStage, setCropStage] = useState<'Germination' | 'Vegetative' | 'Flowering' | 'Fruiting' | 'Harvesting'>('Flowering');
  const [irrigationMethod, setIrrigationMethod] = useState<'Drip Irrigation' | 'Flood / Furrow' | 'Sprinkler' | 'Rainfed'>('Drip Irrigation');
  const [soilType, setSoilType] = useState<'Alluvial' | 'Black / Clay' | 'Red / Sandy Loam' | 'Laterite' | 'Loamy'>('Red / Sandy Loam');

  const [isFinalizing, setIsFinalizing] = useState(false);

  const handleComplete = () => {
    setIsFinalizing(true);
    setTimeout(() => {
      const newProfile: FarmProfile = {
        id: 'farm-' + Date.now(),
        farmerName,
        location: {
          district,
          state
        },
        farmSizeAcres,
        primaryCrop,
        cropVariety,
        cropStage,
        irrigationMethod,
        soilType,
        language,
        createdAt: new Date().toISOString(),
        isDemo: false
      };

      updateFarmProfile(newProfile);
      setIsDemoMode(false);
      onFinish();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-darkest/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-cream-300 p-6 sm:p-10 my-8">
        
        {/* Progress Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            <span>Step {step} of 3</span>
            <span>
              {step === 1 ? 'Farmer & Location' : step === 2 ? 'Farm & Crop Details' : 'Operations & Stage'}
            </span>
          </div>
          <div className="h-2 w-full bg-cream-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-agri-600 to-agri-400 transition-all duration-300 rounded-full"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Farmer & Location */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-2xl text-forest">
                Farmer Identity & Location
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us your name and where your farm is situated so we can calibrate local meteorological feeds.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Farmer / Farm Name
                </label>
                <input
                  type="text"
                  value={farmerName}
                  onChange={(e) => setFarmerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    District
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                  >
                    <option value="Jaipur">Jaipur</option>
                    <option value="Indore">Indore</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="Guntur">Guntur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                  >
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Language / भाषा
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      language === 'en' ? 'border-agri-600 bg-agri-50 text-agri-900 font-bold' : 'border-cream-300 text-slate-600'
                    }`}
                  >
                    English (India)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('hi')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      language === 'hi' ? 'border-agri-600 bg-agri-50 text-agri-900 font-bold' : 'border-cream-300 text-slate-600'
                    }`}
                  >
                    हिन्दी (Hindi)
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl bg-forest hover:bg-agri-900 text-white font-semibold text-sm flex items-center space-x-2 shadow-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Farm & Crop Profile */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-2xl text-forest">
                Farm Acreage & Active Crop
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Specifying crop variety and land size enables precision water-savings and dosage recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Land Holding Size (Acres)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    min="0.5"
                    max="100"
                    step="0.5"
                    value={farmSizeAcres}
                    onChange={(e) => setFarmSizeAcres(parseFloat(e.target.value) || 1)}
                    className="w-32 px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50 font-bold"
                  />
                  <span className="text-xs text-slate-500">
                    ≈ {(farmSizeAcres * 0.404686).toFixed(2)} Hectares (Smallholder tier)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Primary Crop
                  </label>
                  <select
                    value={primaryCrop}
                    onChange={(e) => setPrimaryCrop(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50 font-semibold"
                  >
                    <option value="Tomato">Tomato (टमाटर)</option>
                    <option value="Cotton">Cotton (कपास)</option>
                    <option value="Rice">Paddy / Rice (धान)</option>
                    <option value="Wheat">Wheat (गेहूं)</option>
                    <option value="Corn">Maize / Corn (मक्का)</option>
                    <option value="Chilli">Chilli (मिर्च)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Variety / Hybrid (Optional)
                  </label>
                  <input
                    type="text"
                    value={cropVariety}
                    onChange={(e) => setCropVariety(e.target.value)}
                    placeholder="e.g. Abhinav F1, RCH-659"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-forest flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-xl bg-forest hover:bg-agri-900 text-white font-semibold text-sm flex items-center space-x-2 shadow-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Agronomic Operations & Soil */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-2xl text-forest">
                Crop Stage & Irrigation System
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Finalizing your farm parameters to construct your personalized decision model.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Current Growth Stage
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {(['Germination', 'Vegetative', 'Flowering', 'Fruiting', 'Harvesting'] as const).map((stg) => (
                    <button
                      key={stg}
                      type="button"
                      onClick={() => setCropStage(stg)}
                      className={`py-2 px-2 rounded-xl border text-xs font-semibold text-center transition-all ${
                        cropStage === stg 
                          ? 'border-agri-600 bg-agri-50 text-agri-900 font-bold shadow-xs' 
                          : 'border-cream-300 text-slate-600 hover:bg-cream-100'
                      }`}
                    >
                      {stg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Irrigation Method
                  </label>
                  <select
                    value={irrigationMethod}
                    onChange={(e) => setIrrigationMethod(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                  >
                    <option value="Drip Irrigation">Drip Irrigation</option>
                    <option value="Flood / Furrow">Flood / Furrow</option>
                    <option value="Sprinkler">Sprinkler</option>
                    <option value="Rainfed">Rainfed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Soil Texture / Type
                  </label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                  >
                    <option value="Red / Sandy Loam">Red / Sandy Loam</option>
                    <option value="Black / Clay">Black / Clay Soil</option>
                    <option value="Alluvial">Alluvial Loam</option>
                    <option value="Laterite">Laterite</option>
                    <option value="Loamy">Loamy</option>
                  </select>
                </div>
              </div>

            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-forest flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={handleComplete}
                disabled={isFinalizing}
                className="px-8 py-3 rounded-xl bg-forest hover:bg-agri-900 text-white font-display font-bold text-sm flex items-center space-x-2 shadow-md hover:shadow-glow-sm transition-all"
              >
                {isFinalizing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Building Farm Profile...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-clay-400" />
                    <span>Generate Farm Intelligence Profile</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
