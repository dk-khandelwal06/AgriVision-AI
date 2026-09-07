import { WeatherIntelligenceData } from '../types/weather';

export const DISTRICT_WEATHER_DATA: Record<string, WeatherIntelligenceData> = {
  'Jaipur, Rajasthan': {
    district: 'Jaipur',
    state: 'Rajasthan',
    current: {
      temp: 32,
      feelsLike: 35,
      humidity: 68,
      rainProb: 65,
      windSpeed: 11,
      windDirection: 'SW',
      condition: 'Humid & Overcast',
      uvIndex: 6,
      dewPoint: 22,
      sprayWindowStatus: 'POOR_RAIN_RISK',
      irrigationRecommendation: {
        status: 'DELAY',
        reason: 'Rain probability is 65% in next 18 hours. Delaying irrigation saves ~3,200 liters/acre and prevents waterlogging.',
        waterSavedLitersEst: 3200
      }
    },
    hourly: [
      { hour: '06:00', temp: 26, humidity: 82, rainProb: 20, spraySuitability: 'Good' },
      { hour: '09:00', temp: 29, humidity: 74, rainProb: 30, spraySuitability: 'Good' },
      { hour: '12:00', temp: 33, humidity: 62, rainProb: 45, spraySuitability: 'Fair' },
      { hour: '15:00', temp: 34, humidity: 59, rainProb: 60, spraySuitability: 'Avoid' },
      { hour: '18:00', temp: 31, humidity: 68, rainProb: 75, spraySuitability: 'Avoid' },
      { hour: '21:00', temp: 28, humidity: 79, rainProb: 65, spraySuitability: 'Avoid' },
      { hour: '00:00', temp: 27, humidity: 84, rainProb: 50, spraySuitability: 'Avoid' },
    ],
    forecast: [
      { day: 'Today', date: 'Sep 7', tempMax: 34, tempMin: 26, humidityAvg: 68, rainProb: 65, condition: 'Scattered Showers', agriImplication: 'Rain likely by evening. Postpone scheduled foliar pesticide spray.', iconName: 'cloud-rain' },
      { day: 'Tue', date: 'Sep 8', tempMax: 31, tempMin: 24, humidityAvg: 78, rainProb: 70, condition: 'Moderate Rain', agriImplication: 'High fungal incubation risk for tomato and chilli. Keep drainage open.', iconName: 'cloud-lightning' },
      { day: 'Wed', date: 'Sep 9', tempMax: 32, tempMin: 25, humidityAvg: 70, rainProb: 35, condition: 'Partly Cloudy', agriImplication: 'Morning spray window opens between 07:00 AM - 10:00 AM.', iconName: 'cloud-sun' },
      { day: 'Thu', date: 'Sep 10', tempMax: 34, tempMin: 25, humidityAvg: 60, rainProb: 15, condition: 'Sunny & Clear', agriImplication: 'Optimal day for field inspection and preventative biological spray.', iconName: 'sun' },
      { day: 'Fri', date: 'Sep 11', tempMax: 35, tempMin: 26, humidityAvg: 54, rainProb: 10, condition: 'Sunny', agriImplication: 'Normal drip irrigation cycle can resume if topsoil is dry.', iconName: 'sun' },
      { day: 'Sat', date: 'Sep 12', tempMax: 35, tempMin: 27, humidityAvg: 52, rainProb: 10, condition: 'Clear Skies', agriImplication: 'Standard harvesting or trellis staking work.', iconName: 'sun' },
      { day: 'Sun', date: 'Sep 13', tempMax: 36, tempMin: 27, humidityAvg: 50, rainProb: 15, condition: 'Warm & Dry', agriImplication: 'Check soil moisture sensors or perform manual root check.', iconName: 'sun' },
    ],
    agriAdvisories: [
      {
        title: 'High Pathogen Humidity Alert',
        description: 'Consecutive days with humidity > 68% significantly favor early blight on solanaceous crops.',
        type: 'DISEASE_VULNERABILITY'
      },
      {
        title: 'Postpone Overhead Watering',
        description: 'Imminent rainfall provides natural soil moisture. Avoid unnecessary electric pump usage.',
        type: 'IRRIGATION'
      },
      {
        title: 'Optimal Spray Window Opens Wednesday',
        description: 'Fungicidal application will experience lowest wash-off risk after Tuesday evening showers clear.',
        type: 'SPRAY'
      }
    ]
  },
  'Indore, Madhya Pradesh': {
    district: 'Indore',
    state: 'Madhya Pradesh',
    current: {
      temp: 29,
      feelsLike: 31,
      humidity: 72,
      rainProb: 40,
      windSpeed: 8,
      windDirection: 'W',
      condition: 'Partly Cloudy',
      uvIndex: 7,
      dewPoint: 20,
      sprayWindowStatus: 'MODERATE',
      irrigationRecommendation: {
        status: 'REDUCE',
        reason: 'Soil holds residual moisture from weekend showers. Reduce drip duration by 30%.',
        waterSavedLitersEst: 1800
      }
    },
    hourly: [
      { hour: '06:00', temp: 24, humidity: 85, rainProb: 15, spraySuitability: 'Good' },
      { hour: '09:00', temp: 27, humidity: 75, rainProb: 20, spraySuitability: 'Good' },
      { hour: '12:00', temp: 30, humidity: 65, rainProb: 35, spraySuitability: 'Fair' },
      { hour: '15:00', temp: 31, humidity: 62, rainProb: 40, spraySuitability: 'Fair' },
      { hour: '18:00', temp: 28, humidity: 70, rainProb: 30, spraySuitability: 'Good' },
      { hour: '21:00', temp: 26, humidity: 80, rainProb: 25, spraySuitability: 'Good' },
      { hour: '00:00', temp: 25, humidity: 85, rainProb: 20, spraySuitability: 'Good' },
    ],
    forecast: [
      { day: 'Today', date: 'Sep 7', tempMax: 31, tempMin: 24, humidityAvg: 72, rainProb: 40, condition: 'Partly Cloudy', agriImplication: 'Safe for morning spray before 11:00 AM.', iconName: 'cloud-sun' },
      { day: 'Tue', date: 'Sep 8', tempMax: 32, tempMin: 24, humidityAvg: 68, rainProb: 25, condition: 'Scattered Clouds', agriImplication: 'Good weather for inter-cultivation and weeding.', iconName: 'cloud-sun' },
      { day: 'Wed', date: 'Sep 9', tempMax: 33, tempMin: 25, humidityAvg: 62, rainProb: 20, condition: 'Sunny', agriImplication: 'Optimal day for foliar micronutrient application.', iconName: 'sun' },
      { day: 'Thu', date: 'Sep 10', tempMax: 33, tempMin: 25, humidityAvg: 58, rainProb: 15, condition: 'Sunny', agriImplication: 'Normal farm operations clear.', iconName: 'sun' },
      { day: 'Fri', date: 'Sep 11', tempMax: 34, tempMin: 26, humidityAvg: 55, rainProb: 10, condition: 'Clear', agriImplication: 'Maintain standard irrigation intervals.', iconName: 'sun' },
      { day: 'Sat', date: 'Sep 12', tempMax: 34, tempMin: 26, humidityAvg: 53, rainProb: 10, condition: 'Clear', agriImplication: 'Ideal field conditions.', iconName: 'sun' },
      { day: 'Sun', date: 'Sep 13', tempMax: 35, tempMin: 27, humidityAvg: 50, rainProb: 10, condition: 'Warm', agriImplication: 'Monitor for sucking pest activity.', iconName: 'sun' },
    ],
    agriAdvisories: [
      {
        title: 'Soybean Pod Borer Vigilance',
        description: 'Moderate temperatures and alternating sunshine favor pod borer egg hatching.',
        type: 'DISEASE_VULNERABILITY'
      }
    ]
  }
};

export function getWeatherDataForLocation(district: string, state: string): WeatherIntelligenceData {
  const key = `${district}, ${state}`;
  if (DISTRICT_WEATHER_DATA[key]) {
    return DISTRICT_WEATHER_DATA[key];
  }
  // Default to Jaipur data if unknown location
  return DISTRICT_WEATHER_DATA['Jaipur, Rajasthan'];
}
