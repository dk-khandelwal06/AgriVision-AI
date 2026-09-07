import { FarmProfile, FarmTelemetry, AlertItem, FarmTimelineEntry } from '../types/farm';
import { ScanResult } from '../types/cropScan';
import { CROP_PRESETS } from './cropKnowledgeBase';

export const DEMO_FARM_PROFILE: FarmProfile = {
  id: 'demo-farm-jaipur',
  farmerName: 'Ramesh Kumar (रमेश कुमार)',
  phone: '+91 98290 12345',
  location: {
    district: 'Jaipur',
    state: 'Rajasthan',
    latitude: 26.9124,
    longitude: 75.7873
  },
  farmSizeAcres: 4.5, // ~1.82 Hectares (Matches the 86.2% smallholder criteria < 2 ha)
  primaryCrop: 'Tomato',
  cropVariety: 'Abhinav Hybrid (F1)',
  cropStage: 'Flowering',
  sowingDate: '2026-07-15',
  irrigationMethod: 'Drip Irrigation',
  soilType: 'Red / Sandy Loam',
  language: 'en',
  createdAt: '2026-08-01T08:00:00Z',
  isDemo: true
};

export const INITIAL_DEMO_TELEMETRY: FarmTelemetry = {
  healthScore: 68,
  status: 'WATCH',
  whyText: 'High relative humidity (68%) during delicate Flowering stage + early foliar spot detected in lower canopy.',
  nextBestAction: {
    title: 'Prune Lower Foliage & Delay Overhead Spray',
    action: 'Sanitize and prune the lowest 4-6 inches of infected leaves to stop soil splash, and delay evening watering while humidity remains above 65%.',
    urgency: 'HIGH',
    dueTimeframe: 'Next 24 Hours',
    category: 'CROP_CARE',
    completed: false
  },
  waterEfficiencyScore: 84,
  diseaseRiskScore: 58,
  soilMoistureEst: 64,
  lastScanTimestamp: '2026-09-07T08:30:00Z'
};

export const DEMO_ALERTS: AlertItem[] = [
  {
    id: 'alert-1',
    type: 'RAIN',
    severity: 'WARNING',
    title: 'Rain Expected This Evening (65% Probability)',
    message: 'Postpone planned foliar nutrient sprays. Natural rainfall will meet moisture needs for the next 48 hours.',
    actionableStep: 'Turn off automated drip pump for tomorrow morning.',
    timestamp: '2 hours ago',
    isRead: false
  },
  {
    id: 'alert-2',
    type: 'DISEASE',
    severity: 'WARNING',
    title: 'Elevated Early Blight Risk Detected',
    message: 'Recent leaf scan identified early Alternaria signs. Micro-climate humidity is currently accelerating spore growth.',
    actionableStep: 'Inspect bottom tier leaves and remove yellowing foliage.',
    timestamp: '4 hours ago',
    isRead: false
  },
  {
    id: 'alert-3',
    type: 'WATER',
    severity: 'INFO',
    title: 'Irrigation Efficiency Alert',
    message: 'By skipping tomorrow\'s scheduled irrigation cycle, you will save approximately 3,200 liters of ground water.',
    actionableStep: 'Keep soil moisture sensor monitored.',
    timestamp: '1 day ago',
    isRead: true
  }
];

export const DEMO_TIMELINE: FarmTimelineEntry[] = [
  {
    id: 'tl-1',
    date: 'Mon, Sep 1',
    dayLabel: 'MON',
    type: 'SCAN',
    title: 'Routine Vegetative Crop Scan',
    description: 'Foliage healthy and vigorous. Chlorophyll index normal.',
    badgeText: 'Status: HEALTHY',
    status: 'AUTO_LOGGED'
  },
  {
    id: 'tl-2',
    date: 'Wed, Sep 3',
    dayLabel: 'WED',
    type: 'WEATHER',
    title: 'Relative Humidity Spike (+28%)',
    description: 'Monsoon clouds rolled in. Atmospheric humidity reached 82%. Soil moisture high.',
    badgeText: 'Climate Shift',
    status: 'AUTO_LOGGED'
  },
  {
    id: 'tl-3',
    date: 'Thu, Sep 4',
    dayLabel: 'THU',
    type: 'ALERT',
    title: 'Early Foliar Stress Detected',
    description: 'Computer vision identified initial target rings on lower foliage (91% confidence).',
    badgeText: 'Status: WATCH',
    status: 'PENDING'
  },
  {
    id: 'tl-4',
    date: 'Fri, Sep 5',
    dayLabel: 'FRI',
    type: 'ACTION',
    title: 'Preventive Pruning & Spray Delay Followed',
    description: 'Farmer removed infected lower leaves. Suspended sprinkler watering to stop spore splash.',
    badgeText: 'Action Verified',
    status: 'COMPLETED'
  }
];

export const DEMO_PAST_SCANS: ScanResult[] = [
  {
    id: 'scan-demo-1',
    timestamp: '2026-09-07T08:30:00Z',
    imageUrl: CROP_PRESETS[0].imageSvg,
    condition: CROP_PRESETS[0].sampleCondition,
    scannedAtLocation: 'Plot 2 - Jaipur North',
    weatherSnapshot: {
      temp: 32,
      humidity: 68,
      condition: 'Humid & Overcast',
      rainProb: 65
    }
  },
  {
    id: 'scan-demo-2',
    timestamp: '2026-09-01T10:15:00Z',
    imageUrl: CROP_PRESETS[4].imageSvg,
    condition: CROP_PRESETS[4].sampleCondition,
    scannedAtLocation: 'Plot 1 - Jaipur East',
    weatherSnapshot: {
      temp: 29,
      humidity: 48,
      condition: 'Sunny',
      rainProb: 10
    }
  }
];
