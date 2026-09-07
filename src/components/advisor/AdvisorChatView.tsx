import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  HelpCircle,
  Clock,
  Sprout,
  ShieldCheck
} from 'lucide-react';
import { useFarm } from '../../context/FarmContext';
import { useLanguage } from '../../context/LanguageContext';
import { AiAdvisorService, DEFAULT_SUGGESTED_QUESTIONS } from '../../services/aiAdvisorService';
import { SpeechService } from '../../services/speechService';
import { ChatMessage } from '../../types/chat';

export const AdvisorChatView: React.FC<{ initialPrompt?: string }> = ({ initialPrompt }) => {
  const { farmProfile, weather, scans } = useFarm();
  const { language, setLanguage, t } = useLanguage();

  const [inputQuery, setInputQuery] = useState(initialPrompt || '');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);
  const [speechRecognizer, setSpeechRecognizer] = useState<any>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initial greeting
  useEffect(() => {
    const latestScan = scans.length > 0 ? scans[0] : undefined;
    const initialGreeting: ChatMessage = {
      id: 'greeting-1',
      sender: 'agronomist',
      text: language === 'hi'
        ? `नमस्ते ${farmProfile.farmerName}! मैं आपका एआई कृषि विशेषज्ञ हूँ। मैंने आपके **${farmProfile.location.district}** स्थित **${farmProfile.farmSizeAcres} एकड़** खेत (${farmProfile.primaryCrop} - ${farmProfile.cropStage} अवस्था) और वर्तमान मौसम (${weather.current.temp}°C, ${weather.current.humidity}% नमी) का पूरा संदर्भ लोड कर लिया है। आप बोलकर या लिखकर कोई भी कृषि प्रश्न पूछ सकते हैं।`
        : `Hello ${farmProfile.farmerName}! I am your AI Agronomist. I have loaded context for your **${farmProfile.farmSizeAcres} Acres** of **${farmProfile.primaryCrop}** (${farmProfile.cropStage} stage) in **${farmProfile.location.district}**, alongside current local weather (${weather.current.temp}°C, ${weather.current.humidity}% RH). How can I assist your farming decisions today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language: language === 'hi' ? 'hi' : 'en',
      contextPills: {
        crop: `${farmProfile.primaryCrop} (${farmProfile.cropStage})`,
        weather: `${weather.current.temp}°C · ${weather.current.condition}`,
        risk: weather.current.sprayWindowStatus
      },
      actionableTakeaway: language === 'hi'
        ? 'शुरुआत: नीचे दिए गए त्वरित प्रश्नों में से चुनें या सीधे अपनी समस्या बोलें।'
        : 'Tip: Select a prompt chip below or speak naturally into your microphone.'
    };

    setMessages([initialGreeting]);

    if (initialPrompt) {
      handleSendMessage(initialPrompt);
    }
  }, [language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language: language === 'hi' ? 'hi' : 'en'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    try {
      const latestScan = scans.length > 0 ? scans[0] : undefined;
      const aiReply = await AiAdvisorService.askAdvisor(
        queryText,
        farmProfile,
        weather,
        latestScan,
        language === 'hi' ? 'hi' : 'en'
      );

      setMessages(prev => [...prev, aiReply]);
    } catch (err) {
      console.error('Advisor query error', err);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      if (speechRecognizer) {
        try { speechRecognizer.stop(); } catch (e) {}
      }
      setIsListening(false);
      return;
    }

    setIsListening(true);
    const recognizer = SpeechService.startListening(
      language === 'hi' ? 'hi-IN' : 'en-IN',
      (transcript) => {
        setIsListening(false);
        if (transcript) {
          setInputQuery(transcript);
          handleSendMessage(transcript);
        }
      },
      (error) => {
        setIsListening(false);
        console.warn('Voice recognition error:', error);
      }
    );

    if (!recognizer) {
      setIsListening(false);
      setVoiceSupported(false);
      // Fallback demo simulation
      setTimeout(() => {
        const demoVoiceQuery = language === 'hi'
          ? 'क्या कल की बारिश से पहले टमाटर पर छिड़काव करना सुरक्षित है?'
          : 'Is it safe to spray fungicide on my tomatoes before tomorrow\'s rain?';
        setInputQuery(demoVoiceQuery);
      }, 500);
    } else {
      setSpeechRecognizer(recognizer);
    }
  };

  const handleSpeak = (text: string) => {
    SpeechService.speakText(text, language === 'hi' ? 'hi-IN' : 'en-IN');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-agri-700 mb-1">
            <Bot className="w-4 h-4" />
            <span>Multilingual AI Farm Agronomist</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-forest">
            {t('advisor.title')}
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mt-1">
            {t('advisor.subtitle')}
          </p>
        </div>

        {/* Language selector toggle inside chat */}
        <div className="flex items-center bg-cream-200/80 p-1.5 rounded-2xl border border-cream-300">
          <Globe className="w-4 h-4 text-slate-500 ml-2 mr-1.5" />
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              language === 'en' ? 'bg-forest text-white shadow-xs' : 'text-slate-700 hover:text-forest'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              language === 'hi' ? 'bg-forest text-white shadow-xs' : 'text-slate-700 hover:text-forest'
            }`}
          >
            हिन्दी (Hindi)
          </button>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="rounded-3xl bg-white border border-cream-300 shadow-card flex flex-col h-[640px] overflow-hidden">
        
        {/* Context Strip */}
        <div className="bg-cream-100/80 px-6 py-3 border-b border-cream-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-700">Active Context:</span>
            <span className="px-2 py-0.5 rounded bg-white text-forest border border-cream-300 font-bold">
              {farmProfile.primaryCrop} ({farmProfile.cropStage})
            </span>
            <span className="px-2 py-0.5 rounded bg-white text-forest border border-cream-300 font-bold">
              {farmProfile.location.district} · {weather.current.temp}°C
            </span>
          </div>

          <span className="text-slate-500 text-[11px] hidden sm:inline">
            RAG Agronomic Reasoning Layer Active
          </span>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3.5 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-clay-500 text-white font-bold text-xs'
                    : 'bg-forest text-agri-300'
                }`}
              >
                {msg.sender === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-5 h-5" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-2xl rounded-2xl p-4 sm:p-5 text-sm leading-relaxed shadow-xs space-y-3 ${
                  msg.sender === 'user'
                    ? 'bg-forest text-white'
                    : 'bg-cream-50/90 text-slate-800 border border-cream-300'
                }`}
              >
                {/* Main Text with Markdown-like bold formatting */}
                <div className="whitespace-pre-line text-xs sm:text-sm">
                  {msg.text.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} className="mb-2 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Highlighted Actionable Takeaway */}
                {msg.actionableTakeaway && (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-clay-50 to-agri-50 border border-clay-200 text-xs text-slate-800 font-semibold space-y-1">
                    <div className="flex items-center space-x-1 text-clay-700 text-[10px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Single Actionable Takeaway</span>
                    </div>
                    <p>{msg.actionableTakeaway}</p>
                  </div>
                )}

                {/* Bubble Footer & Audio Read */}
                <div className="flex items-center justify-between text-[10px] opacity-75 pt-1 border-t border-black/5">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'agronomist' && (
                    <button
                      onClick={() => handleSpeak(msg.text)}
                      className="flex items-center space-x-1 hover:text-agri-700 transition-colors"
                      title="Listen to audio response"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Audio</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center space-x-3 text-xs text-slate-500">
              <div className="w-8 h-8 rounded-xl bg-forest text-agri-300 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-cream-100 px-4 py-2.5 rounded-2xl border border-cream-200 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-agri-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-agri-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-agri-600 animate-bounce [animation-delay:0.4s]"></span>
                <span className="ml-2 font-medium">Agronomist synthesizing recommendations...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Prompt Chips */}
        <div className="px-6 py-2.5 bg-cream-50/70 border-t border-cream-200">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
            {t('advisor.suggested')}
          </span>
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            {DEFAULT_SUGGESTED_QUESTIONS.map((sq) => (
              <button
                key={sq.id}
                onClick={() => handleSendMessage(language === 'hi' ? sq.queryHi : sq.queryEn)}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-agri-50 border border-cream-300 hover:border-agri-400 text-xs font-medium text-slate-700 whitespace-nowrap transition-all shadow-2xs"
              >
                {language === 'hi' ? sq.labelHi : sq.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-cream-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputQuery);
            }}
            className="flex items-center space-x-2"
          >
            {/* Voice Input Button */}
            <button
              type="button"
              onClick={toggleVoiceInput}
              className={`p-3 rounded-2xl flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-rose-500 text-white animate-pulse shadow-glow-md'
                  : 'bg-cream-100 hover:bg-cream-200 text-slate-700 border border-cream-300'
              }`}
              title={isListening ? 'Stop listening' : 'Start voice input'}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-agri-700" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={isListening ? t('advisor.listening') : t('advisor.placeholder')}
              className="flex-1 px-4 py-3 rounded-2xl border border-cream-300 focus:border-agri-600 focus:ring-2 focus:ring-agri-200 outline-none text-sm text-slate-800 bg-cream-50/50"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className="p-3 rounded-2xl bg-forest hover:bg-agri-900 disabled:bg-slate-300 text-white shadow-sm transition-all flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <span className="flex items-center space-x-1">
          <ShieldCheck className="w-4 h-4 text-agri-600" />
          <span>Responses correlate with local ICAR & KVK agricultural guidelines.</span>
        </span>
        <span>Supports Voice Transcription</span>
      </div>

    </div>
  );
};
