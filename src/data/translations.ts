export type SupportedLanguage = 'en' | 'hi' | 'mr' | 'pa' | 'te';

export const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    // Brand & Slogan
    'brand.name': 'AgriVisionAI',
    'brand.tagline': 'Climate-Resilient Farming with AI',
    'brand.subheadline': 'See the crop. Understand the risk. Make a better decision.',
    'brand.heroDescription': 'An AI-powered smart farming advisor that unites computer vision, real-time hyper-local climate intelligence, and voice AI to deliver one clear, actionable next step for smallholder farmers.',
    
    // Core Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.impact': 'Impact & Market',
    'nav.technology': 'Technology',
    'nav.roadmap': 'Roadmap',
    'nav.dashboard': 'Farm Overview',
    'nav.cropScan': 'Scan Crop',
    'nav.aiAdvisor': 'AI Farm Advisor',
    'nav.weather': 'Weather & Spray',
    'nav.timeline': 'Crop Timeline',
    'nav.profile': 'Farm Profile',
    'nav.login': 'Sign In',
    'nav.signup': 'Get Started Free',
    'nav.exploreDemo': 'Explore Demo Farm',
    'nav.logout': 'Sign Out',
    
    // Farm Status & Hero UX
    'status.health': 'Farm Health Status',
    'status.good': 'GOOD (Healthy)',
    'status.watch': 'WATCH (Moderate Risk)',
    'status.attention': 'ATTENTION (Immediate Action Required)',
    'status.whyTitle': 'Why this status?',
    'status.oneNextAction': 'Your One Next Best Action',
    'status.markDone': 'Mark as Completed',
    'status.actionCompleted': 'Action Completed! Farm resilience updated.',
    'status.viewGuidance': 'View Step-by-Step Guidance',
    
    // Quick Actions
    'action.quickActions': 'Quick Farming Actions',
    'action.scanCrop': 'Scan Crop Leaf',
    'action.askAdvisor': 'Ask AI Agronomist',
    'action.checkSpray': 'Check Spray Window',
    'action.viewTimeline': 'View Health Log',
    
    // Telemetry Cards
    'metric.soilMoisture': 'Soil Moisture Est.',
    'metric.diseaseRisk': 'Pathogen Risk Index',
    'metric.waterEfficiency': 'Irrigation Efficiency',
    'metric.rainChance': '24h Rain Probability',
    'metric.tempHumidity': 'Temp & Humidity',
    'metric.spraySuitability': 'Spray Feasibility',
    
    // Scanner
    'scan.title': 'Crop Leaf Scanner',
    'scan.subtitle': 'Capture or upload a leaf photo to diagnose disease, evaluate local weather risks, and receive a single priority action.',
    'scan.dragDrop': 'Drop crop image here or click to browse',
    'scan.supports': 'Supports JPG, PNG, WEBP (Max 10MB)',
    'scan.takePhoto': 'Use Camera',
    'scan.presetSamples': 'Or select a realistic field sample for instant pitch demo:',
    'scan.analyzing': 'AI Agronomist Analyzing...',
    'scan.step1': 'Extracting visual foliar stress patterns...',
    'scan.step2': 'Synthesizing local Jaipur climate & growth stage context...',
    'scan.step3': 'Calculating pathogen propagation risk...',
    'scan.step4': 'Formulating the single next best action...',
    'scan.resultTitle': 'Crop Diagnosis & Context Intelligence',
    'scan.confidence': 'AI Confidence',
    'scan.severity': 'Severity Level',
    'scan.observed': 'Observed Leaf Indicators',
    'scan.contextWhy': 'Contextual Climate Factor',
    'scan.preventive': 'Preventive & Follow-Up Guidance',
    'scan.askAiAbout': 'Ask AI Advisor About This',
    'scan.saveToLog': 'Log Scan to Farm Timeline',
    
    // Advisor
    'advisor.title': 'AI Farm Advisor',
    'advisor.subtitle': 'Speak or text in your preferred language. AgriVisionAI understands your specific crop stage, weather forecast, and recent field scans.',
    'advisor.placeholder': 'Ask any farming question... (e.g. "Should I irrigate before tomorrow\'s rain?")',
    'advisor.listening': 'Listening to your voice... Speak now',
    'advisor.startVoice': 'Voice Input',
    'advisor.suggested': 'Suggested Agronomic Questions:',
    
    // Weather
    'weather.title': 'Hyper-Local Weather & Spray Intelligence',
    'weather.sprayWindow': 'Agricultural Spraying Window',
    'weather.irrigationGuidance': 'Smart Irrigation Recommendation',
    'weather.sevenDay': '7-Day Climate Impact Forecast',
    'weather.rainRisk': 'Hourly Rain Probability & Humidity',
    
    // Disclaimer
    'disclaimer.text': 'AgriVisionAI provides contextual decision support for climate resilience. It does not replace qualified local agricultural authorities.',
    
    // Demo Mode Banner
    'demo.banner': '⚡ DEMO MODE: Viewing Ramesh Kumar\'s Jaipur Tomato Farm (1.8 Hectares, Flowering Stage). All features fully interactive.',
    'demo.switchFarmer': 'Create Custom Farm',
    'demo.reset': 'Reset Demo Data',
  },
  hi: {
    // Brand & Slogan
    'brand.name': 'एग्रीविज़न एआई',
    'brand.tagline': 'एआई के साथ जलवायु-सक्षम आधुनिक खेती',
    'brand.subheadline': 'फसल देखें। जोखिम समझें। बेहतर निर्णय लें।',
    'brand.heroDescription': 'एक एआई-संचालित स्मार्ट कृषि सलाहकार जो कंप्यूटर विज़न, वास्तविक समय के स्थानीय मौसम और आवाज़ आधारित एआई को जोड़कर छोटे और सीमांत किसानों को सिर्फ एक सही और सटीक अगला कदम बताता है।',
    
    // Core Navigation
    'nav.home': 'होम',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.impact': 'प्रभाव और बाजार',
    'nav.technology': 'तकनीक',
    'nav.roadmap': 'रोडमैप',
    'nav.dashboard': 'खेत का अवलोकन',
    'nav.cropScan': 'फसल स्कैन करें',
    'nav.aiAdvisor': 'एआई कृषि सलाहकार',
    'nav.weather': 'मौसम और छिड़काव',
    'nav.timeline': 'फसल स्वास्थ्य टाइमलाइन',
    'nav.profile': 'खेत प्रोफाइल',
    'nav.login': 'लॉग इन करें',
    'nav.signup': 'मुफ्त शुरू करें',
    'nav.exploreDemo': 'डेमो फार्म देखें',
    'nav.logout': 'लॉग आउट',
    
    // Farm Status & Hero UX
    'status.health': 'खेत की स्वास्थ्य स्थिति',
    'status.good': 'उत्तम (स्वस्थ फसल)',
    'status.watch': 'निगरानी (मध्यम जोखिम)',
    'status.attention': 'ध्यान दें (तत्काल कार्रवाई आवश्यक)',
    'status.whyTitle': 'यह स्थिति क्यों है?',
    'status.oneNextAction': 'आपका सबसे महत्वपूर्ण अगला कदम',
    'status.markDone': 'पूरा हुआ चिह्नित करें',
    'status.actionCompleted': 'कार्रवाई पूरी हुई! खेत का स्वास्थ्य स्कोर अपडेट हुआ।',
    'status.viewGuidance': 'विस्तृत मार्गदर्शन देखें',
    
    // Quick Actions
    'action.quickActions': 'त्वरित कृषि कार्य',
    'action.scanCrop': 'पत्ती स्कैन करें',
    'action.askAdvisor': 'एआई कृषि विशेषज्ञ से पूछें',
    'action.checkSpray': 'छिड़काव समय जांचें',
    'action.viewTimeline': 'स्वास्थ्य लॉग देखें',
    
    // Telemetry Cards
    'metric.soilMoisture': 'मिट्टी की नमी अनुमान',
    'metric.diseaseRisk': 'रोग जोखिम सूचकांक',
    'metric.waterEfficiency': 'सिंचाई दक्षता',
    'metric.rainChance': '24 घंटे में बारिश की संभावना',
    'metric.tempHumidity': 'तापमान और आर्द्रता',
    'metric.spraySuitability': 'छिड़काव अनुकूलता',
    
    // Scanner
    'scan.title': 'फसल पत्ती स्कैनर',
    'scan.subtitle': 'रोग की पहचान करने, मौसम के जोखिम को समझने और प्राथमिकता कार्रवाई पाने के लिए पत्ती की तस्वीर अपलोड करें।',
    'scan.dragDrop': 'फसल की तस्वीर यहाँ खींचें या ब्राउज़ करें',
    'scan.supports': 'JPG, PNG, WEBP समर्थित (अधिकतम 10MB)',
    'scan.takePhoto': 'कैमरे का उपयोग करें',
    'scan.presetSamples': 'या डेमो के लिए तैयार नमूना चुनें:',
    'scan.analyzing': 'एआई कृषि विशेषज्ञ विश्लेषण कर रहा है...',
    'scan.step1': 'पत्तियों के तनाव और धब्बों का विश्लेषण...',
    'scan.step2': 'स्थानीय मौसम और फसल की वृद्धि अवस्था की जांच...',
    'scan.step3': 'रोग फैलने के जोखिम का मूल्यांकन...',
    'scan.step4': 'सर्वोत्तम प्राथमिक कार्रवाई तैयार हो रही है...',
    'scan.resultTitle': 'फसल निदान और संदर्भ विश्लेषण',
    'scan.confidence': 'एआई सटीकता विश्वास',
    'scan.severity': 'गंभीरता स्तर',
    'scan.observed': 'देखे गए प्रमुख लक्षण',
    'scan.contextWhy': 'मौसम और वातावरण का प्रभाव',
    'scan.preventive': 'बचाव और आगामी सलाह',
    'scan.askAiAbout': 'इस परिणाम पर एआई से प्रश्न पूछें',
    'scan.saveToLog': 'खेत टाइमलाइन में सुरक्षित करें',
    
    // Advisor
    'advisor.title': 'एआई कृषि सलाहकार',
    'advisor.subtitle': 'अपनी भाषा में बोलें या लिखें। एग्रीविज़न एआई आपकी फसल की अवस्था और मौसम के अनुसार सही जवाब देता है।',
    'advisor.placeholder': 'खेती से जुड़ा कोई भी प्रश्न पूछें... (उदा: "क्या कल की बारिश से पहले दवा छिड़कना सही है?")',
    'advisor.listening': 'आपकी आवाज सुनी जा रही है... बोलिए',
    'advisor.startVoice': 'बोलकर पूछें',
    'advisor.suggested': 'सुझाए गए मुख्य प्रश्न:',
    
    // Weather
    'weather.title': 'सटीक स्थानीय मौसम और छिड़काव सलाह',
    'weather.sprayWindow': 'दवा छिड़काव अनुकूल समय',
    'weather.irrigationGuidance': 'स्मार्ट सिंचाई सलाह',
    'weather.sevenDay': '7-दिवसीय कृषि मौसम पूर्वानुमान',
    'weather.rainRisk': 'घंटेवार वर्षा की संभावना और नमी',
    
    // Disclaimer
    'disclaimer.text': 'एग्रीविज़न एआई जलवायु-अनुकूल निर्णय सहायता प्रदान करता है। यह स्थानीय कृषि वैज्ञानिकों का विकल्प नहीं है।',
    
    // Demo Mode Banner
    'demo.banner': '⚡ डेमो मोड: रमेश कुमार का जयपुर टमाटर फार्म (1.8 हेक्टेयर, फूल आने की अवस्था)। सभी सुविधाएं सक्रिय हैं।',
    'demo.switchFarmer': 'नया फार्म बनाएं',
    'demo.reset': 'डेमो डेटा रीसेट करें',
  },
  mr: {},
  pa: {},
  te: {}
};

// Fallback for languages where full set is being extended
['mr', 'pa', 'te'].forEach(lang => {
  TRANSLATIONS[lang as SupportedLanguage] = { ...TRANSLATIONS.en };
});
