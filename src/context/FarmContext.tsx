import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FarmProfile, FarmTelemetry, AlertItem, FarmTimelineEntry, FarmHealthState } from '../types/farm';
import { ScanResult } from '../types/cropScan';
import { WeatherIntelligenceData } from '../types/weather';
import { FarmDataService } from '../services/farmDataService';
import { getWeatherDataForLocation } from '../data/weatherData';
import { DEMO_FARM_PROFILE, INITIAL_DEMO_TELEMETRY, DEMO_ALERTS, DEMO_TIMELINE, DEMO_PAST_SCANS } from '../data/mockFarmData';

interface FarmContextType {
  farmProfile: FarmProfile;
  telemetry: FarmTelemetry;
  weather: WeatherIntelligenceData;
  alerts: AlertItem[];
  timeline: FarmTimelineEntry[];
  scans: ScanResult[];
  activeScan: ScanResult | null;
  setActiveScan: (scan: ScanResult | null) => void;
  updateFarmProfile: (profile: Partial<FarmProfile>) => void;
  addNewScan: (scan: ScanResult) => void;
  markActionCompleted: () => void;
  dismissAlert: (alertId: string) => void;
  addTimelineEntry: (entry: Omit<FarmTimelineEntry, 'id'>) => void;
  resetDemoFarm: () => void;
  isDemoMode: boolean;
  setIsDemoMode: (val: boolean) => void;
}

const FarmContext = createContext<FarmContextType | undefined>(undefined);

export const FarmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [farmProfile, setFarmProfile] = useState<FarmProfile>(FarmDataService.getFarmProfile);
  const [telemetry, setTelemetry] = useState<FarmTelemetry>(FarmDataService.getTelemetry);
  const [alerts, setAlerts] = useState<AlertItem[]>(FarmDataService.getAlerts);
  const [timeline, setTimeline] = useState<FarmTimelineEntry[]>(FarmDataService.getTimeline);
  const [scans, setScans] = useState<ScanResult[]>(FarmDataService.getScans);
  const [activeScan, setActiveScan] = useState<ScanResult | null>(null);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true);

  // Derive active weather intelligence from farm profile location
  const weather = getWeatherDataForLocation(farmProfile.location.district, farmProfile.location.state);

  const updateFarmProfile = (updatedFields: Partial<FarmProfile>) => {
    const newProfile = { ...farmProfile, ...updatedFields };
    setFarmProfile(newProfile);
    FarmDataService.saveFarmProfile(newProfile);
  };

  const addNewScan = (newScan: ScanResult) => {
    const updatedScans = [newScan, ...scans];
    setScans(updatedScans);
    setActiveScan(newScan);
    FarmDataService.saveScans(updatedScans);

    // Dynamically adjust telemetry based on scan severity
    let newHealthScore = telemetry.healthScore;
    let newStatus: FarmHealthState = 'WATCH';
    let why = '';

    if (newScan.condition.isHealthy) {
      newHealthScore = Math.min(95, telemetry.healthScore + 15);
      newStatus = 'GOOD';
      why = 'Latest leaf scan confirmed vigorous healthy foliage with zero pathogen lesions.';
    } else if (newScan.condition.severity === 'HIGH' || newScan.condition.severity === 'CRITICAL') {
      newHealthScore = Math.max(42, telemetry.healthScore - 20);
      newStatus = 'ATTENTION';
      why = `Urgent: ${newScan.condition.conditionName} identified with ${newScan.condition.confidence}% confidence. Risk elevated by current weather.`;
    } else {
      newHealthScore = Math.max(55, Math.min(75, telemetry.healthScore));
      newStatus = 'WATCH';
      why = `${newScan.condition.conditionName} detected. Weather conditions require preventive action within 24 hours.`;
    }

    const updatedTelemetry: FarmTelemetry = {
      ...telemetry,
      healthScore: newHealthScore,
      status: newStatus,
      whyText: why,
      diseaseRiskScore: newScan.condition.isHealthy ? 15 : 72,
      lastScanTimestamp: new Date().toISOString(),
      nextBestAction: {
        title: newScan.condition.oneNextBestAction.title,
        action: newScan.condition.oneNextBestAction.step,
        urgency: newScan.condition.severity === 'HIGH' ? 'HIGH' : 'MEDIUM',
        dueTimeframe: `Next ${newScan.condition.oneNextBestAction.urgencyHours} Hours`,
        category: 'CROP_CARE',
        completed: false
      }
    };

    setTelemetry(updatedTelemetry);
    FarmDataService.saveTelemetry(updatedTelemetry);

    // Also add to timeline automatically
    const newTimelineItem: FarmTimelineEntry = {
      id: 'tl-' + Date.now(),
      date: 'Today',
      dayLabel: 'TODAY',
      type: 'SCAN',
      title: `Scan: ${newScan.condition.conditionName}`,
      description: `Identified on ${newScan.condition.cropName}. Next Action: ${newScan.condition.oneNextBestAction.title}`,
      badgeText: newScan.condition.isHealthy ? 'Healthy Leaf' : `Risk: ${newScan.condition.severity}`,
      status: 'AUTO_LOGGED',
      imagePreview: newScan.imageUrl
    };

    const updatedTimeline = [newTimelineItem, ...timeline];
    setTimeline(updatedTimeline);
    FarmDataService.saveTimeline(updatedTimeline);
  };

  const markActionCompleted = () => {
    if (telemetry.nextBestAction.completed) return;

    // Trigger visual confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#349b74', '#4eb992', '#d97736', '#f6d3af']
      });
    } catch (e) {
      console.log('Confetti trigger');
    }

    const updatedTelemetry: FarmTelemetry = {
      ...telemetry,
      healthScore: Math.min(96, telemetry.healthScore + 18),
      status: telemetry.healthScore + 18 >= 80 ? 'GOOD' : 'WATCH',
      nextBestAction: {
        ...telemetry.nextBestAction,
        completed: true
      }
    };

    setTelemetry(updatedTelemetry);
    FarmDataService.saveTelemetry(updatedTelemetry);

    // Add action completion log
    const actionLog: FarmTimelineEntry = {
      id: 'tl-' + Date.now(),
      date: 'Just Now',
      dayLabel: 'NOW',
      type: 'ACTION',
      title: `Action Completed: ${telemetry.nextBestAction.title}`,
      description: `Farmer executed recommendation: "${telemetry.nextBestAction.action}". Farm resilience index increased to ${updatedTelemetry.healthScore}%.`,
      badgeText: 'Action Verified',
      status: 'COMPLETED'
    };

    const updatedTimeline = [actionLog, ...timeline];
    setTimeline(updatedTimeline);
    FarmDataService.saveTimeline(updatedTimeline);
  };

  const dismissAlert = (alertId: string) => {
    const updated = alerts.filter(a => a.id !== alertId);
    setAlerts(updated);
    FarmDataService.saveAlerts(updated);
  };

  const addTimelineEntry = (entry: Omit<FarmTimelineEntry, 'id'>) => {
    const newEntry: FarmTimelineEntry = {
      ...entry,
      id: 'tl-' + Date.now()
    };
    const updated = [newEntry, ...timeline];
    setTimeline(updated);
    FarmDataService.saveTimeline(updated);
  };

  const resetDemoFarm = () => {
    FarmDataService.resetToDemo();
    setFarmProfile(DEMO_FARM_PROFILE);
    setTelemetry(INITIAL_DEMO_TELEMETRY);
    setAlerts(DEMO_ALERTS);
    setTimeline(DEMO_TIMELINE);
    setScans(DEMO_PAST_SCANS);
    setActiveScan(null);
    setIsDemoMode(true);
  };

  return (
    <FarmContext.Provider
      value={{
        farmProfile,
        telemetry,
        weather,
        alerts,
        timeline,
        scans,
        activeScan,
        setActiveScan,
        updateFarmProfile,
        addNewScan,
        markActionCompleted,
        dismissAlert,
        addTimelineEntry,
        resetDemoFarm,
        isDemoMode,
        setIsDemoMode
      }}
    >
      {children}
    </FarmContext.Provider>
  );
};

export const useFarm = (): FarmContextType => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error('useFarm must be used within a FarmProvider');
  }
  return context;
};
