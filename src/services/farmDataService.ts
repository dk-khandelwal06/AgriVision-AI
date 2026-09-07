import { FarmProfile, FarmTelemetry, AlertItem, FarmTimelineEntry } from '../types/farm';
import { ScanResult } from '../types/cropScan';
import { DEMO_FARM_PROFILE, INITIAL_DEMO_TELEMETRY, DEMO_ALERTS, DEMO_TIMELINE, DEMO_PAST_SCANS } from '../data/mockFarmData';

const STORAGE_KEYS = {
  FARM_PROFILE: 'agrivision_farm_profile',
  TELEMETRY: 'agrivision_telemetry',
  ALERTS: 'agrivision_alerts',
  TIMELINE: 'agrivision_timeline',
  SCANS: 'agrivision_scans',
  AUTH_STATE: 'agrivision_auth_state'
};

export class FarmDataService {
  public static getFarmProfile(): FarmProfile {
    const data = localStorage.getItem(STORAGE_KEYS.FARM_PROFILE);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Error parsing stored farm profile', e);
      }
    }
    return DEMO_FARM_PROFILE;
  }

  public static saveFarmProfile(profile: FarmProfile): void {
    localStorage.setItem(STORAGE_KEYS.FARM_PROFILE, JSON.stringify(profile));
  }

  public static getTelemetry(): FarmTelemetry {
    const data = localStorage.getItem(STORAGE_KEYS.TELEMETRY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Error parsing telemetry', e);
      }
    }
    return INITIAL_DEMO_TELEMETRY;
  }

  public static saveTelemetry(telemetry: FarmTelemetry): void {
    localStorage.setItem(STORAGE_KEYS.TELEMETRY, JSON.stringify(telemetry));
  }

  public static getAlerts(): AlertItem[] {
    const data = localStorage.getItem(STORAGE_KEYS.ALERTS);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Error parsing alerts', e);
      }
    }
    return DEMO_ALERTS;
  }

  public static saveAlerts(alerts: AlertItem[]): void {
    localStorage.setItem(STORAGE_KEYS.ALERTS, JSON.stringify(alerts));
  }

  public static getTimeline(): FarmTimelineEntry[] {
    const data = localStorage.getItem(STORAGE_KEYS.TIMELINE);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Error parsing timeline', e);
      }
    }
    return DEMO_TIMELINE;
  }

  public static saveTimeline(timeline: FarmTimelineEntry[]): void {
    localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(timeline));
  }

  public static getScans(): ScanResult[] {
    const data = localStorage.getItem(STORAGE_KEYS.SCANS);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error('Error parsing scans', e);
      }
    }
    return DEMO_PAST_SCANS;
  }

  public static saveScans(scans: ScanResult[]): void {
    localStorage.setItem(STORAGE_KEYS.SCANS, JSON.stringify(scans));
  }

  public static resetToDemo(): void {
    localStorage.setItem(STORAGE_KEYS.FARM_PROFILE, JSON.stringify(DEMO_FARM_PROFILE));
    localStorage.setItem(STORAGE_KEYS.TELEMETRY, JSON.stringify(INITIAL_DEMO_TELEMETRY));
    localStorage.setItem(STORAGE_KEYS.ALERTS, JSON.stringify(DEMO_ALERTS));
    localStorage.setItem(STORAGE_KEYS.TIMELINE, JSON.stringify(DEMO_TIMELINE));
    localStorage.setItem(STORAGE_KEYS.SCANS, JSON.stringify(DEMO_PAST_SCANS));
  }
}
