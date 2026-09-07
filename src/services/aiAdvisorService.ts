import { ChatMessage, SuggestedQuestion } from '../types/chat';
import { FarmProfile } from '../types/farm';
import { ScanResult } from '../types/cropScan';
import { WeatherIntelligenceData } from '../types/weather';

export const DEFAULT_SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: 'sq-1',
    category: 'IRRIGATION',
    labelEn: 'When should I irrigate?',
    labelHi: 'मुझे सिंचाई कब करनी चाहिए?',
    queryEn: 'Based on my current crop stage and weather forecast, when is the optimal time to irrigate?',
    queryHi: 'मेरी फसल की वर्तमान अवस्था और मौसम के पूर्वानुमान के अनुसार मुझे सिंचाई कब करनी चाहिए?'
  },
  {
    id: 'sq-2',
    category: 'DISEASE',
    labelEn: 'Why are leaves developing spots?',
    labelHi: 'पत्तियों पर धब्बे क्यों आ रहे हैं?',
    queryEn: 'Why are my crop leaves developing circular brown spots and how can I stop it naturally?',
    queryHi: 'मेरी फसल की पत्तियों पर गोल भूरे धब्बे क्यों आ रहे हैं और मैं इसे प्राकृतिक रूप से कैसे रोक सकता हूँ?'
  },
  {
    id: 'sq-3',
    category: 'WEATHER',
    labelEn: 'Can I spray before the rain?',
    labelHi: 'क्या बारिश से पहले दवा छिड़क सकते हैं?',
    queryEn: 'Rain is forecasted with 65% probability. Is it safe to spray fungicide today or should I wait?',
    queryHi: '65% बारिश का अनुमान है। क्या आज फफूंदनाशक का छिड़काव करना सुरक्षित है या मुझे रुकना चाहिए?'
  },
  {
    id: 'sq-4',
    category: 'NUTRITION',
    labelEn: 'Flowering stage nutrient needs?',
    labelHi: 'फूल आते समय कौन सा खाद दें?',
    queryEn: 'What fertilizers or micronutrients are most critical during the current flowering stage?',
    queryHi: 'वर्तमान में फूल आने की अवस्था में कौन से पोषक तत्व और खाद सबसे अधिक आवश्यक हैं?'
  }
];

export class AiAdvisorService {
  /**
   * Generates a context-aware agronomist response based on the active farm state
   */
  public static async askAdvisor(
    question: string,
    farm: FarmProfile,
    weather: WeatherIntelligenceData,
    latestScan?: ScanResult,
    lang: 'en' | 'hi' = 'en'
  ): Promise<ChatMessage> {
    await new Promise(r => setTimeout(r, 600)); // natural streaming feel

    const lowerQ = question.toLowerCase();
    let replyText = '';
    let takeaway = '';

    const isHindi = lang === 'hi' || /[\u0900-\u097F]/.test(question);

    if (lowerQ.includes('irrigate') || lowerQ.includes('water') || lowerQ.includes('सिंचाई') || lowerQ.includes('पानी')) {
      if (isHindi) {
        replyText = `आपके **${farm.location.district}** क्षेत्र में अगले 24 घंटों में **${weather.current.rainProb}% वर्षा** की संभावना है और आर्द्रता ${weather.current.humidity}% है।\n\nचूँकि आपकी **${farm.primaryCrop}** की फसल **${farm.cropStage}** अवस्था में है, इस समय अधिक पानी से जड़ सड़न और फंगस का खतरा बढ़ सकता है।`;
        takeaway = 'सिफारिश: अगले 36 घंटों तक सिंचाई टालें। बारिश के बाद ही मिट्टी की नमी जांचकर ड्रिप चालू करें।';
      } else {
        replyText = `Based on your **${farm.primaryCrop}** in the **${farm.cropStage}** stage in **${farm.location.district}**, the upcoming weather shows a **${weather.current.rainProb}% rain probability** with ${weather.current.humidity}% humidity.\n\nOver-irrigating right now will saturate the root zone and accelerate fungal spore germination.`;
        takeaway = 'Next Best Action: Postpone scheduled irrigation for 36 hours until the rain passes, saving water and preventing root stress.';
      }
    } else if (lowerQ.includes('spray') || lowerQ.includes('छिड़काव') || lowerQ.includes('दवा') || lowerQ.includes('बारिश')) {
      if (isHindi) {
        replyText = `मौसम विश्लेषण के अनुसार वर्तमान में **छिड़काव अनुकूल नहीं है**।\n\nहवा की गति और शाम को बारिश की संभावना के कारण दवा बह (wash-off) जाएगी, जिससे आपका खर्च व्यर्थ होगा।`;
        takeaway = 'सिफारिश: छिड़काव को बुधवार सुबह (07:00 - 09:30 AM) तक टालें जब मौसम साफ और हवा शांत होगी।';
      } else {
        replyText = `The current Agricultural Spray Index indicates a **HIGH RAIN RISK** in ${farm.location.district}.\n\nApplying foliar treatments today will result in immediate chemical run-off and wasted input costs due to the ${weather.current.rainProb}% rain probability.`;
        takeaway = 'Next Best Action: Delay foliar spraying until Wednesday morning (07:00 AM - 09:30 AM) when winds are under 7 km/h and skies clear.';
      }
    } else if (lowerQ.includes('spot') || lowerQ.includes('yellow') || lowerQ.includes('leaf') || lowerQ.includes('धब्बे') || lowerQ.includes('पीली') || lowerQ.includes('रोग')) {
      const scanInfo = latestScan ? latestScan.condition.conditionName : 'Early Blight';
      if (isHindi) {
        replyText = `आपके हालिया स्कैन में **${scanInfo}** के लक्षण देखे गए हैं। उच्च आर्द्रता (${weather.current.humidity}%) में फंगल बीजाणु तेजी से निचली पत्तियों से ऊपर फैलते हैं।`;
        takeaway = 'सिफारिश: नीचे की पीली व प्रभावित पत्तियों को काटकर खेत से दूर फेंकें और दोपहर में धूप खिलने पर ही जैविक नीम स्प्रे करें।';
      } else {
        replyText = `Your recent foliar scan detected **${scanInfo}**. The persistent ${weather.current.humidity}% humidity in ${farm.location.district} is creating micro-climate pockets in your lower canopy where fungal spores thrive.`;
        takeaway = 'Next Best Action: Sanitize and prune the bottom 4-6 inches of yellowing foliage today to improve air circulation, and spray Copper Oxychloride (2.5g/L) during the clear morning window.';
      }
    } else if (lowerQ.includes('fertilizer') || lowerQ.includes('nutrient') || lowerQ.includes('खाद') || lowerQ.includes('फूल')) {
      if (isHindi) {
        replyText = `आपकी फसल **फूल आने (Flowering)** की संवेदनशील अवस्था में है। इस समय अतिरिक्त यूरिया (नाइट्रोजन) देने से बचें क्योंकि इससे फूल गिर सकते हैं और रोग बढ़ सकते हैं।`;
        takeaway = 'सिफारिश: पोटाश (0:0:50) और बोरॉन (1 ग्राम/लीटर) का हल्का पर्णीय छिड़काव करें जिससे फलों की संख्या और गुणवत्ता में वृद्धि हो।';
      } else {
        replyText = `For **${farm.primaryCrop}** during the **${farm.cropStage}** phase, avoid heavy Nitrogen top-dressing as it promotes excessive vegetative foliage at the expense of flower set and attracts sucking pests.`;
        takeaway = 'Next Best Action: Apply water-soluble Potassium (0:0:50 @ 5g/L) combined with Boron (20% @ 1g/L) to enhance pollination and fruit setting.';
      }
    } else {
      if (isHindi) {
        replyText = `नमस्ते! मैंने आपके **${farm.location.district}** के **${farm.farmSizeAcres} एकड़** खेत (फसल: ${farm.primaryCrop}, अवस्था: ${farm.cropStage}) और वर्तमान मौसम (${weather.current.temp}°C, ${weather.current.humidity}% नमी) का पूरा संदर्भ समझ लिया है।`;
        takeaway = `सिफारिश: आप फसल की तस्वीर स्कैन करके या सिंचाई, दवा छिड़काव और कीट नियंत्रण से जुड़े विशिष्ट प्रश्न पूछ सकते हैं।`;
      } else {
        replyText = `Hello! I have loaded your farm context for **${farm.farmSizeAcres} Acres** of **${farm.primaryCrop}** (${farm.cropStage} stage) in **${farm.location.district}**, alongside current local telemetry (${weather.current.temp}°C, ${weather.current.humidity}% RH).`;
        takeaway = 'Next Best Action: Upload a crop leaf photo to run a full disease risk assessment, or ask specific questions regarding spray timing and irrigation.';
      }
    }

    return {
      id: 'msg-' + Date.now(),
      sender: 'agronomist',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language: isHindi ? 'hi' : 'en',
      voiceAudioSimulated: true,
      contextPills: {
        crop: `${farm.primaryCrop} (${farm.cropStage})`,
        weather: `${weather.current.temp}°C · ${weather.current.humidity}% RH`,
        risk: weather.current.sprayWindowStatus
      },
      actionableTakeaway: takeaway
    };
  }
}
