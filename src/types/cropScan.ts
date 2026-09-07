export type DiseaseSeverity = 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' | 'HEALTHY';

export interface ObservedIndicator {
  name: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
}

export interface CropCondition {
  id: string;
  cropName: string;
  cropScientificName?: string;
  conditionName: string;
  conditionHindi: string;
  isHealthy: boolean;
  confidence: number; // e.g. 89%
  severity: DiseaseSeverity;
  observedIndicators: ObservedIndicator[];
  possibleCauses: string[];
  contextConsiderations: {
    weatherFactor: string;
    stageFactor: string;
    soilFactor?: string;
  };
  oneNextBestAction: {
    title: string;
    step: string;
    stepHindi: string;
    urgencyHours: number;
    doNotDo: string;
  };
  preventiveAdvice: string[];
  reassessSchedule: string;
  suitableWeatherWindow: string;
}

export interface ScanResult {
  id: string;
  timestamp: string;
  imageUrl: string;
  thumbnailUrl?: string;
  condition: CropCondition;
  scannedAtLocation: string;
  weatherSnapshot: {
    temp: number;
    humidity: number;
    condition: string;
    rainProb: number;
  };
  isFlaggedForFollowup?: boolean;
}

export interface PresetCropSample {
  id: string;
  crop: string;
  conditionName: string;
  category: 'FUNGAL' | 'VIRAL' | 'BACTERIAL' | 'PEST' | 'HEALTHY';
  badgeColor: string;
  description: string;
  imageSvg: string;
  sampleCondition: CropCondition;
}
