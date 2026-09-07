export interface WeatherCurrent {
  temp: number; // °C
  feelsLike: number;
  humidity: number; // %
  rainProb: number; // %
  windSpeed: number; // km/h
  windDirection: string;
  condition: 'Sunny' | 'Partly Cloudy' | 'Cloudy' | 'Humid & Overcast' | 'Light Rain' | 'Heavy Rain' | 'Thunderstorm';
  uvIndex: number;
  dewPoint: number;
  sprayWindowStatus: 'OPTIMAL' | 'MODERATE' | 'POOR_RAIN_RISK' | 'POOR_HIGH_WIND';
  irrigationRecommendation: {
    status: 'DELAY' | 'PROCEED' | 'REDUCE' | 'CRITICAL_WATER';
    reason: string;
    waterSavedLitersEst?: number;
  };
}

export interface HourlyForecast {
  hour: string; // e.g. "06:00"
  temp: number;
  humidity: number;
  rainProb: number;
  spraySuitability: 'Good' | 'Fair' | 'Avoid';
}

export interface DayForecast {
  day: string; // "Mon", "Tue"
  date: string; // "Sep 8"
  tempMax: number;
  tempMin: number;
  humidityAvg: number;
  rainProb: number;
  condition: string;
  agriImplication: string;
  iconName: string;
}

export interface WeatherIntelligenceData {
  district: string;
  state: string;
  current: WeatherCurrent;
  hourly: HourlyForecast[];
  forecast: DayForecast[];
  agriAdvisories: {
    title: string;
    description: string;
    type: 'SPRAY' | 'IRRIGATION' | 'DISEASE_VULNERABILITY' | 'HEAT_STRESS';
  }[];
}
