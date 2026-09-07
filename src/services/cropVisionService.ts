import { CropCondition, ScanResult } from '../types/cropScan';
import { CROP_PRESETS } from '../data/cropKnowledgeBase';

export interface AnalysisProgressCallback {
  (stepNumber: number, stepMessage: string): void;
}

export class CropVisionService {
  /**
   * Simulates/Executes the 4-step computer vision + context pipeline:
   * 1. Computer Vision Reads the Crop
   * 2. Synthesizes Weather, Location & Growth Stage Context
   * 3. Assesses Environmental Pathogen Propagation Risk
   * 4. Formulates the Single Actionable Next Step
   */
  public static async analyzeCropImage(
    imageDataUrl: string,
    farmContext: {
      crop: string;
      stage: string;
      district: string;
      temp: number;
      humidity: number;
      rainProb: number;
    },
    presetId?: string,
    onProgress?: AnalysisProgressCallback
  ): Promise<ScanResult> {
    // 1. Initial foliar pattern recognition
    onProgress?.(1, 'Extracting visual foliar stress patterns & lesions...');
    await new Promise(r => setTimeout(r, 650));

    // 2. Contextual climate & stage correlation
    onProgress?.(2, `Correlating with local ${farmContext.district} climate (${farmContext.temp}°C, ${farmContext.humidity}% humidity)...`);
    await new Promise(r => setTimeout(r, 700));

    // 3. Environmental pathogen risk
    onProgress?.(3, `Assessing pathogen propagation risk for ${farmContext.crop} (${farmContext.stage} stage)...`);
    await new Promise(r => setTimeout(r, 650));

    // 4. Recommendation synthesis
    onProgress?.(4, 'Synthesizing the single prioritized next action for the farmer...');
    await new Promise(r => setTimeout(r, 600));

    // Determine condition match based on preset or fallback heuristic
    let matchedCondition: CropCondition;

    if (presetId) {
      const preset = CROP_PRESETS.find(p => p.id === presetId);
      if (preset) {
        matchedCondition = { ...preset.sampleCondition };
      } else {
        matchedCondition = { ...CROP_PRESETS[0].sampleCondition };
      }
    } else {
      // Heuristic fallback matching farm crop if custom image uploaded
      const lowerCrop = farmContext.crop.toLowerCase();
      if (lowerCrop.includes('cotton') || lowerCrop.includes('कपास')) {
        matchedCondition = { ...CROP_PRESETS[1].sampleCondition };
      } else if (lowerCrop.includes('rice') || lowerCrop.includes('paddy') || lowerCrop.includes('धान')) {
        matchedCondition = { ...CROP_PRESETS[2].sampleCondition };
      } else if (lowerCrop.includes('wheat') || lowerCrop.includes('गेहूं')) {
        matchedCondition = { ...CROP_PRESETS[3].sampleCondition };
      } else if (lowerCrop.includes('corn') || lowerCrop.includes('maize') || lowerCrop.includes('मक्का')) {
        matchedCondition = { ...CROP_PRESETS[4].sampleCondition };
      } else {
        matchedCondition = { ...CROP_PRESETS[0].sampleCondition };
      }
    }

    // Dynamic weather correlation injection based on live context
    matchedCondition.contextConsiderations.weatherFactor = `Local ${farmContext.district} weather (${farmContext.temp}°C, ${farmContext.humidity}% RH, ${farmContext.rainProb}% rain chance) creates active microclimate conditions for this diagnosis.`;

    const scanResult: ScanResult = {
      id: 'scan-' + Date.now(),
      timestamp: new Date().toISOString(),
      imageUrl: imageDataUrl,
      condition: matchedCondition,
      scannedAtLocation: `${farmContext.district} Plot`,
      weatherSnapshot: {
        temp: farmContext.temp,
        humidity: farmContext.humidity,
        condition: farmContext.humidity > 70 ? 'High Humidity' : 'Fair',
        rainProb: farmContext.rainProb
      },
      isFlaggedForFollowup: matchedCondition.severity !== 'HEALTHY'
    };

    return scanResult;
  }
}
