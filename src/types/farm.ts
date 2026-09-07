export type FarmHealthState = 'GOOD' | 'WATCH' | 'ATTENTION';

export interface FarmProfile {
  id: string;
  farmerName: string;
  phone?: string;
  location: {
    district: string;
    state: string;
    latitude?: number;
    longitude?: number;
  };
  farmSizeAcres: number;
  primaryCrop: string;
  cropVariety?: string;
  cropStage: 'Germination' | 'Vegetative' | 'Flowering' | 'Fruiting' | 'Harvesting';
  sowingDate?: string;
  irrigationMethod: 'Drip Irrigation' | 'Flood / Furrow' | 'Sprinkler' | 'Rainfed';
  soilType: 'Alluvial' | 'Black / Clay' | 'Red / Sandy Loam' | 'Laterite' | 'Loamy';
  language: 'en' | 'hi' | 'mr' | 'pa' | 'te';
  createdAt: string;
  isDemo?: boolean;
}

export interface FarmTelemetry {
  healthScore: number; // 0-100
  status: FarmHealthState;
  whyText: string;
  nextBestAction: {
    title: string;
    action: string;
    urgency: 'HIGH' | 'MEDIUM' | 'LOW';
    dueTimeframe: string;
    category: 'CROP_CARE' | 'IRRIGATION' | 'WEATHER_PREP' | 'PEST_CONTROL';
    completed?: boolean;
  };
  waterEfficiencyScore: number; // 0-100
  diseaseRiskScore: number; // 0-100
  soilMoistureEst: number; // %
  lastScanTimestamp: string;
}

export interface AlertItem {
  id: string;
  type: 'RAIN' | 'DISEASE' | 'WATER' | 'TEMP' | 'FARM';
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  title: string;
  message: string;
  actionableStep: string;
  timestamp: string;
  isRead: boolean;
}

export interface FarmTimelineEntry {
  id: string;
  date: string;
  dayLabel: string;
  type: 'SCAN' | 'WEATHER' | 'ACTION' | 'ALERT';
  title: string;
  description: string;
  badgeText: string;
  status: 'COMPLETED' | 'PENDING' | 'AUTO_LOGGED';
  imagePreview?: string;
}
