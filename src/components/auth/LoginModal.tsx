import React, { useState } from 'react';
import { User, Lock, Sparkles, ArrowRight, X, Sprout } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LoginModalProps {
  onLogin: (credentials: { username: string }) => void;
  onCancel: () => void;
  onSwitchToSignup: () => void;
  onQuickDemo: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onLogin,
  onCancel,
  onSwitchToSignup,
  onQuickDemo
}) => {
  const { t } = useLanguage();
  const [username, setUsername] = useState('ramesh.kumar@agrivision.ai');
  const [password, setPassword] = useState('••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ username });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-darkest/70 backdrop-blur-md">
      
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-cream-300 p-7 sm:p-8">
        
        {/* Close */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center shadow-xs">
            <Sprout className="w-5 h-5 text-agri-300" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-forest">
              Welcome Back
            </h3>
            <p className="text-xs text-slate-500">
              Sign in to your farm dashboard
            </p>
          </div>
        </div>

        {/* Demo Shortcut Card */}
        <div className="p-3.5 rounded-xl bg-agri-50 border border-agri-200 mb-5 flex items-center justify-between">
          <div className="text-xs">
            <span className="font-bold text-agri-900 block">Judge / Evaluator?</span>
            <span className="text-slate-600 text-[11px]">Instant login with Ramesh Kumar's farm</span>
          </div>
          <button
            type="button"
            onClick={onQuickDemo}
            className="px-3 py-1.5 rounded-lg bg-forest hover:bg-agri-900 text-white text-xs font-semibold flex items-center space-x-1 shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-clay-400" />
            <span>Use Demo</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Farmer Phone or Email
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-forest hover:bg-agri-900 text-white font-display font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-slate-500">
          <span>New to AgriVisionAI?</span>
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="font-bold text-agri-700 hover:text-agri-900 transition-colors"
          >
            Create New Farm Profile
          </button>
        </div>

      </div>

    </div>
  );
};
