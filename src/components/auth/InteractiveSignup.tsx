import React, { useState } from 'react';
import { 
  Sprout, 
  MapPin, 
  Lock, 
  User, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck,
  Droplets,
  Sun,
  X
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface InteractiveSignupProps {
  onComplete: (userData: { name: string; location: string; crop: string }) => void;
  onCancel: () => void;
  onSwitchToLogin: () => void;
  onQuickDemo: () => void;
}

export const InteractiveSignup: React.FC<InteractiveSignupProps> = ({
  onComplete,
  onCancel,
  onSwitchToLogin,
  onQuickDemo
}) => {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [district, setDistrict] = useState('Jaipur');
  const [crop, setCrop] = useState('Tomato');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Growth calculation for dynamic visual
  const passwordStrength = Math.min(100, password.length * 15);
  const isFormValid = name.trim().length >= 2 && password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    onComplete({
      name,
      location: district,
      crop
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-darkest/70 backdrop-blur-md overflow-y-auto">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
          
          {/* LEFT SIDE: Interactive Living Agricultural Ecosystem */}
          <div className="lg:col-span-5 bg-gradient-to-br from-forest-dark via-forest to-agri-900 text-white p-7 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-forest-light/30">
            
            {/* Ambient visual glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-agri-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-clay-500/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-2 text-agri-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-clay-400" />
                <span>Smart Farm Generator</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Enter the AgriVision Ecosystem
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Your farm profile reacts and adapts as you enter your details.
              </p>
            </div>

            {/* REACTIVE VISUAL CANVAS */}
            <div className="my-6 p-4 rounded-2xl bg-black/40 border border-agri-600/30 space-y-4">
              
              {/* Dynamic Farmer Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-agri-800">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-agri-700 flex items-center justify-center text-xs font-bold text-agri-200">
                    {name ? name.charAt(0).toUpperCase() : '🌿'}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Farmer Profile</span>
                    <span className="font-display font-bold text-xs text-white">
                      {name || 'Prospective Farmer'}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-agri-300 bg-agri-950 px-2 py-0.5 rounded border border-agri-700">
                  {name ? 'Verified' : 'Draft'}
                </span>
              </div>

              {/* Dynamic Location & Weather Map Pin */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-clay-400" />
                  <span>{district}, India</span>
                </div>
                <div className="flex items-center space-x-1.5 text-agri-300">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>32°C · Semi-Arid</span>
                </div>
              </div>

              {/* Dynamic Crop Representation */}
              <div className="p-3 rounded-xl bg-agri-950/70 border border-agri-700/50 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-agri-800 flex items-center justify-center text-base">
                    {crop === 'Tomato' ? '🍅' : crop === 'Cotton' ? '🌱' : crop === 'Rice' ? '🌾' : crop === 'Wheat' ? '🌿' : '🌽'}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Active Crop Layer</span>
                    <span className="font-bold text-xs text-cream-100">{crop} Field Intelligence</span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium">Auto-calibrated</span>
              </div>

              {/* Dynamic Growth / Security Progress */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Farm Security & Root Depth</span>
                  <span className="text-agri-300 font-mono">{passwordStrength}%</span>
                </div>
                <div className="h-2 w-full bg-agri-950 rounded-full overflow-hidden border border-agri-800">
                  <div 
                    className="h-full bg-gradient-to-r from-agri-500 to-clay-400 transition-all duration-300 rounded-full"
                    style={{ width: `${passwordStrength}%` }}
                  />
                </div>
              </div>

            </div>

            {/* Fast Track Shortcut */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onQuickDemo}
                className="w-full py-2 px-3 rounded-xl bg-agri-800/80 hover:bg-agri-700 border border-agri-600/40 text-xs font-semibold text-cream-100 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-clay-400" />
                <span>Skip to Ramesh Kumar Demo Farm</span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: Clean Sign-Up Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-forest">
                    Create Farmer Account
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Step 1 of 2 · Basic profile setup
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-agri-100 text-agri-800 flex items-center justify-center font-bold">
                  <Sprout className="w-5 h-5 text-agri-700" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Farmer Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Farmer / Farm Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar or Green Acres Farm"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                    />
                  </div>
                </div>

                {/* District & Primary Crop Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* District */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Location District *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                      >
                        <option value="Jaipur">Jaipur, Rajasthan</option>
                        <option value="Indore">Indore, Madhya Pradesh</option>
                        <option value="Nashik">Nashik, Maharashtra</option>
                        <option value="Ludhiana">Ludhiana, Punjab</option>
                        <option value="Guntur">Guntur, Andhra Pradesh</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Crop */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Primary Crop *
                    </label>
                    <select
                      value={crop}
                      onChange={(e) => setCrop(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                    >
                      <option value="Tomato">Tomato (टमाटर)</option>
                      <option value="Cotton">Cotton (कपास)</option>
                      <option value="Rice">Paddy / Rice (धान)</option>
                      <option value="Wheat">Wheat (गेहूं)</option>
                      <option value="Corn">Maize / Corn (मक्का)</option>
                      <option value="Chilli">Chilli (मिर्च)</option>
                    </select>
                  </div>

                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Secure Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 text-agri-600 rounded border-cream-300 focus:ring-agri-500"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600">
                    I agree to the contextual agricultural decision support terms.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || !agreeTerms}
                  className="w-full py-3 rounded-xl bg-forest hover:bg-agri-900 disabled:bg-slate-300 text-white font-display font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 mt-2"
                >
                  <span>Continue to Farm Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            </div>

            {/* Bottom Links */}
            <div className="pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-slate-500">
              <span>Already registered?</span>
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-bold text-agri-700 hover:text-agri-900 transition-colors"
              >
                Sign In with Existing Farm
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
