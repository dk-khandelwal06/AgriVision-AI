// Web Speech API interface definitions for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export class SpeechService {
  public static isSpeechSupported(): boolean {
    return typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }

  public static isSynthesisSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public static startListening(
    lang: 'en-IN' | 'hi-IN' = 'en-IN',
    onResult: (text: string) => void,
    onError: (err: string) => void
  ): any {
    if (!this.isSpeechSupported()) {
      onError('Speech recognition is not supported in this browser.');
      return null;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = lang;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        onError(event.error);
      };

      recognition.start();
      return recognition;
    } catch (e: any) {
      onError(e.message || 'Error starting speech service');
      return null;
    }
  }

  public static speakText(text: string, lang: 'en-IN' | 'hi-IN' = 'en-IN'): void {
    if (!this.isSynthesisSupported()) return;

    window.speechSynthesis.cancel(); // Stop any previous speech
    const cleanText = text.replace(/[*_#`]/g, ''); // strip markdown
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}
