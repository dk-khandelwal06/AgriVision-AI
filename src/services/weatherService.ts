import { WeatherIntelligenceData } from '../types/weather';
import { getWeatherDataForLocation } from '../data/weatherData';

export class WeatherService {
  /**
   * Retrieves weather intelligence with agricultural implications.
   * Architecture supports seamless drop-in of OpenWeather / IMD Weather APIs.
   */
  public static async getWeatherData(district: string, state: string): Promise<WeatherIntelligenceData> {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 100));
    return getWeatherDataForLocation(district, state);
  }

  /**
   * Evaluates current atmospheric parameters to determine spray feasibility
   */
  public static evaluateSprayWindow(temp: number, humidity: number, rainProb: number, windSpeed: number): {
    status: 'OPTIMAL' | 'MODERATE' | 'POOR_RAIN_RISK' | 'POOR_HIGH_WIND';
    recommendation: string;
    suitableHours: string;
  } {
    if (rainProb > 50) {
      return {
        status: 'POOR_RAIN_RISK',
        recommendation: 'High risk of chemical wash-off due to imminent rain. Postpone all foliar spraying.',
        suitableHours: 'Wait until weather clears (Estimated: 24-36 hrs)'
      };
    }
    if (windSpeed > 15) {
      return {
        status: 'POOR_HIGH_WIND',
        recommendation: 'High wind speed will cause severe pesticide drift to non-target areas.',
        suitableHours: 'Early morning (06:00 - 08:30 AM) when winds calm down'
      };
    }
    if (humidity > 80 || temp > 35) {
      return {
        status: 'MODERATE',
        recommendation: 'Thermal evaporation or high humidity may reduce absorption efficiency.',
        suitableHours: 'Late afternoon (05:00 - 07:00 PM)'
      };
    }
    return {
      status: 'OPTIMAL',
      recommendation: 'Ideal calm conditions for maximum foliar absorption and zero drift.',
      suitableHours: 'Current window is clear (Next 4 hours)'
    };
  }
}
