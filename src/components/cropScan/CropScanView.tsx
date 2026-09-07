import React, { useState, useRef } from 'react';
import { 
  Scan, 
  UploadCloud, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  Info, 
  RefreshCw,
  ShieldCheck,
  Bot,
  Layers,
  X
} from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';
import { CROP_PRESETS } from '../../data/cropKnowledgeBase';
import { CropVisionService } from '../../services/cropVisionService';
import { ScanResult, PresetCropSample } from '../../types/cropScan';
import { SafetyDisclaimer } from '../common/SafetyDisclaimer';

interface CropScanViewProps {
  onNavigateToAdvisor: (initialPrompt?: string) => void;
  onNavigateToDashboard: () => void;
}

export const CropScanView: React.FC<CropScanViewProps> = ({ onNavigateToAdvisor, onNavigateToDashboard }) => {
  const { farmProfile, weather, addNewScan, activeScan, setActiveScan } = useFarm();
  const { t, language } = useLanguage();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(activeScan ? activeScan.imageUrl : null);
  const [selectedPresetId, setSelectedPresetId] = useState<string | undefined>(undefined);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepMessage, setStepMessage] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  // File upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setSelectedImage(dataUrl);
        setSelectedPresetId(undefined);
        setActiveScan(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // Preset selector
  const handleSelectPreset = (preset: PresetCropSample) => {
    setSelectedImage(preset.imageSvg);
    setSelectedPresetId(preset.id);
    setActiveScan(null);
  };

  // Run the 4-stage AI Agronomist pipeline
  const runAnalysis = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setCurrentStep(1);
    setStepMessage('Extracting visual foliar stress patterns & lesions...');

    try {
      const result = await CropVisionService.analyzeCropImage(
        selectedImage,
        {
          crop: farmProfile.primaryCrop,
          stage: farmProfile.cropStage,
          district: farmProfile.location.district,
          temp: weather.current.temp,
          humidity: weather.current.humidity,
          rainProb: weather.current.rainProb
        },
        selectedPresetId,
        (stepNum, msg) => {
          setCurrentStep(stepNum);
          setStepMessage(msg);
        }
      );

      addNewScan(result);
      setActiveScan(result);
    } catch (err) {
      console.error('Scan error', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Camera Handler
  const startCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn('Camera access error or unsupported:', err);
    }
  };

  const captureCameraSnapshot = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 400;
      canvas.height = videoRef.current.videoHeight || 300;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setSelectedImage(dataUrl);
        setSelectedPresetId(undefined);
        setActiveScan(null);
      }
    }
    stopCamera();
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setShowCamera(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-agri-700 mb-1">
            <Scan className="w-4 h-4" />
            <span>AI Foliar Computer Vision</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-forest">
            {t('scan.title')}
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            {t('scan.subtitle')}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-cream-200 text-forest border border-cream-300">
            Active Context: {farmProfile.location.district} ({farmProfile.primaryCrop} - {farmProfile.cropStage})
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Input & Presets */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Dropzone & Preview Card */}
          <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 space-y-4">
            
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {!selectedImage ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-agri-300 hover:border-agri-500 rounded-2xl p-8 text-center bg-cream-50/50 hover:bg-agri-50/30 transition-all cursor-pointer group flex flex-col items-center justify-center min-h-[260px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-agri-100 text-agri-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-base text-forest mb-1">
                  {t('scan.dragDrop')}
                </h3>
                <p className="text-xs text-slate-500">
                  {t('scan.supports')}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] border border-cream-300 shadow-inner flex items-center justify-center">
                  <img src={selectedImage} alt="Selected crop" className="w-full h-full object-cover" />
                  
                  {/* Overlay scan line effect while analyzing */}
                  {isAnalyzing && (
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-agri-400 to-transparent animate-scan shadow-glow-md" />
                  )}

                  <button
                    onClick={() => { setSelectedImage(null); setActiveScan(null); }}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                    title="Remove image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    Change Image
                  </button>
                  <button
                    onClick={startCamera}
                    className="px-3 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-slate-700 text-xs font-semibold flex items-center space-x-1 transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Camera</span>
                  </button>
                </div>
              </div>
            )}

            {/* Camera Trigger Alternative */}
            {!selectedImage && (
              <div className="pt-2 flex justify-center">
                <button
                  onClick={startCamera}
                  className="w-full py-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-forest text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-cream-300"
                >
                  <Camera className="w-4 h-4 text-agri-700" />
                  <span>{t('scan.takePhoto')}</span>
                </button>
              </div>
            )}

            {/* Run Analysis CTA Button */}
            {selectedImage && !activeScan && (
              <button
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="w-full py-3.5 rounded-2xl bg-forest hover:bg-agri-900 text-white font-display font-bold text-sm shadow-md hover:shadow-glow-sm transition-all flex items-center justify-center space-x-2"
              >
                {isAnalyzing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Analyzing Image & Weather Context...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-clay-400" />
                    <span>Analyze Crop Health & Context</span>
                  </>
                )}
              </button>
            )}

          </div>

          {/* PRESET SAMPLES SECTION FOR INSTANT EVALUATION */}
          <div className="rounded-3xl bg-white border border-cream-300 shadow-sm p-6 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              <Sparkles className="w-4 h-4 text-clay-500" />
              <span>Instant Pitch Demo Presets</span>
            </div>
            <p className="text-xs text-slate-500">
              Click any field sample to immediately test our multi-stage AI Agronomist:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {CROP_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                    selectedPresetId === preset.id
                      ? 'border-agri-600 bg-agri-50/80 shadow-xs'
                      : 'border-cream-300 bg-cream-50/50 hover:bg-cream-100/70'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0 border border-cream-300">
                    <img src={preset.imageSvg} alt={preset.crop} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-display font-bold text-xs text-forest block truncate">
                      {preset.crop}
                    </span>
                    <span className="text-[10px] text-slate-600 block truncate">
                      {preset.conditionName}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Pipeline Progress & Results */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Analysis In-Progress Animation */}
          {isAnalyzing && (
            <div className="rounded-3xl bg-forest text-white p-8 border border-forest-light/40 shadow-xl space-y-6 animate-pulse-subtle">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-agri-700 flex items-center justify-center">
                  <Scan className="w-5 h-5 text-agri-300 animate-spin" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {t('scan.analyzing')}
                  </h3>
                  <p className="text-xs text-slate-300">
                    4-Pillar Pipeline: SEE → UNDERSTAND → COMMUNICATE → ACT
                  </p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3 pt-2">
                {[
                  { step: 1, label: t('scan.step1') },
                  { step: 2, label: t('scan.step2') },
                  { step: 3, label: t('scan.step3') },
                  { step: 4, label: t('scan.step4') }
                ].map((st) => (
                  <div 
                    key={st.step}
                    className={`flex items-center space-x-3 p-3 rounded-xl border text-xs transition-all ${
                      currentStep > st.step 
                        ? 'bg-agri-950 border-emerald-500/50 text-emerald-300' 
                        : currentStep === st.step 
                        ? 'bg-agri-900 border-clay-400 text-white font-bold shadow-xs' 
                        : 'bg-black/20 border-transparent text-slate-500'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] bg-white/10">
                      {currentStep > st.step ? '✓' : st.step}
                    </span>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Diagnosis Result Card */}
          {activeScan && !isAnalyzing && (
            <div className="rounded-3xl bg-white border border-cream-300 shadow-card p-6 sm:p-8 space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-cream-200">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                      activeScan.condition.isHealthy ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-amber-100 text-amber-900 border-amber-300'
                    }`}>
                      {activeScan.condition.isHealthy ? 'Healthy Foliage' : `Severity: ${activeScan.condition.severity}`}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-semibold text-slate-600">
                      Confidence: <strong>{activeScan.condition.confidence}%</strong>
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-forest">
                    {activeScan.condition.conditionName}
                  </h2>
                  <p className="text-xs text-slate-500 italic mt-0.5">
                    {language === 'hi' ? activeScan.condition.conditionHindi : activeScan.condition.cropScientificName}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setActiveScan(null);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-cream-200 text-slate-700 text-xs font-semibold flex items-center space-x-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>New Scan</span>
                  </button>
                </div>
              </div>

              {/* Observed Indicators */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-700 mb-2.5">
                  {t('scan.observed')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeScan.condition.observedIndicators.map((ind, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-cream-50 border border-cream-200 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-forest">
                        <span>{ind.name}</span>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.2 rounded bg-cream-200 text-slate-600">
                          {ind.severity}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Climate Context Consideration */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1 text-xs text-blue-950">
                <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wider text-blue-900 text-[11px]">
                  <Info className="w-3.5 h-3.5 text-blue-700" />
                  <span>{t('scan.contextWhy')}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {activeScan.condition.contextConsiderations.weatherFactor}
                </p>
              </div>

              {/* THE "ONE NEXT BEST ACTION" BANNER */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-clay-50 to-agri-50 border-2 border-clay-300 space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-clay-700">
                    ★ {t('status.oneNextAction')}
                  </span>
                  <span className="text-[10px] font-bold text-clay-700 bg-clay-100 px-2 py-0.5 rounded border border-clay-300">
                    Urgency: {activeScan.condition.oneNextBestAction.urgencyHours} Hours
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-forest">
                  {activeScan.condition.oneNextBestAction.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {language === 'hi' 
                    ? activeScan.condition.oneNextBestAction.stepHindi 
                    : activeScan.condition.oneNextBestAction.step}
                </p>

                <div className="pt-1 text-xs text-rose-800 bg-rose-50/80 p-2 rounded-lg border border-rose-200 font-medium">
                  <strong>Caution:</strong> {activeScan.condition.oneNextBestAction.doNotDo}
                </div>
              </div>

              {/* Preventive Advice & Weather Window */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-700">
                  {t('scan.preventive')}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeScan.condition.preventiveAdvice.map((adv, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 mt-0.5 flex-shrink-0" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-cream-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={onNavigateToDashboard}
                  className="px-5 py-2.5 rounded-xl bg-forest hover:bg-agri-900 text-white text-xs sm:text-sm font-semibold flex items-center space-x-1.5 shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-agri-300" />
                  <span>Return to Farm Overview</span>
                </button>

                <button
                  onClick={() => onNavigateToAdvisor(`I just scanned my crop and diagnosed ${activeScan.condition.conditionName}. What exact chemical or biological dosage should I prepare?`)}
                  className="px-4 py-2.5 rounded-xl bg-agri-100 hover:bg-agri-200 text-agri-900 text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-colors border border-agri-300"
                >
                  <Bot className="w-4 h-4 text-agri-700" />
                  <span>{t('scan.askAiAbout')}</span>
                </button>
              </div>

            </div>
          )}

          {/* Empty State Prompt */}
          {!selectedImage && !activeScan && !isAnalyzing && (
            <div className="rounded-3xl bg-cream-100/50 border border-cream-300 p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white text-agri-700 flex items-center justify-center mx-auto shadow-sm">
                <Scan className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-forest">
                Awaiting Crop Foliar Input
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Upload a field leaf photograph or select one of our pre-calibrated sample conditions on the left to experience the full AI Agronomist diagnosis.
              </p>
            </div>
          )}

          <SafetyDisclaimer />

        </div>

      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl overflow-hidden p-4 space-y-4">
            <div className="flex items-center justify-between text-white pb-2 border-b border-slate-700">
              <span className="font-display font-bold text-sm">Align Crop Leaf in Camera</span>
              <button onClick={stopCamera} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-slate-800">
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center justify-center space-x-4 pt-2">
              <button
                onClick={stopCamera}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={captureCameraSnapshot}
                className="px-6 py-2.5 rounded-xl bg-agri-600 hover:bg-agri-500 text-white font-bold text-sm flex items-center space-x-2 shadow-lg"
              >
                <Camera className="w-4 h-4" />
                <span>Capture Photo</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
