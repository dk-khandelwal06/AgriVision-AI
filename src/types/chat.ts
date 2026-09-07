export interface ChatMessage {
  id: string;
  sender: 'user' | 'agronomist';
  text: string;
  timestamp: string;
  language: 'en' | 'hi';
  voiceAudioSimulated?: boolean;
  contextPills?: {
    crop?: string;
    weather?: string;
    risk?: string;
  };
  actionableTakeaway?: string;
  isStreaming?: boolean;
}

export interface SuggestedQuestion {
  id: string;
  category: 'IRRIGATION' | 'DISEASE' | 'WEATHER' | 'NUTRITION' | 'PEST';
  labelEn: string;
  labelHi: string;
  queryEn: string;
  queryHi: string;
}
