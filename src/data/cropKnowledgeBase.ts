import { PresetCropSample } from '../types/cropScan';

// Embedded SVGs for realistic leaf condition representations
export const CROP_PRESETS: PresetCropSample[] = [
  {
    id: 'preset-tomato-early-blight',
    crop: 'Tomato (टमाटर)',
    conditionName: 'Early Blight (अगेती झुलसा)',
    category: 'FUNGAL',
    badgeColor: 'amber',
    description: 'Concentric brown target rings on lower foliage; elevated by current high humidity.',
    imageSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%231a3b2b"/><path d="M200 40 C140 100 80 180 120 260 C160 290 240 290 280 260 C320 180 260 100 200 40 Z" fill="%23438a5e"/><path d="M200 40 Q200 160 200 280" stroke="%232c6340" stroke-width="4" fill="none"/><path d="M200 120 Q160 100 130 110" stroke="%232c6340" stroke-width="2.5" fill="none"/><path d="M200 170 Q240 150 270 160" stroke="%232c6340" stroke-width="2.5" fill="none"/><path d="M200 220 Q150 210 135 230" stroke="%232c6340" stroke-width="2.5" fill="none"/><circle cx="155" cy="140" r="24" fill="%236e4b27" opacity="0.9"/><circle cx="155" cy="140" r="16" fill="%23452d16" stroke="%23a8864c" stroke-width="2"/><circle cx="155" cy="140" r="8" fill="%23241508"/><circle cx="240" cy="190" r="30" fill="%236e4b27" opacity="0.88"/><circle cx="240" cy="190" r="20" fill="%23452d16" stroke="%23a8864c" stroke-width="2"/><circle cx="240" cy="190" r="9" fill="%23241508"/><circle cx="170" cy="235" r="18" fill="%2378552e" opacity="0.85"/><circle cx="170" cy="235" r="10" fill="%234a3015"/><path d="M120 180 Q100 220 130 260" fill="%23b89037" opacity="0.45"/></svg>`,
    sampleCondition: {
      id: 'cond-tomato-early-blight',
      cropName: 'Tomato',
      cropScientificName: 'Solanum lycopersicum',
      conditionName: 'Early Blight (Alternaria solani)',
      conditionHindi: 'अगेती झुलसा रोग (अल्टरनेरिया सोलानी)',
      isHealthy: false,
      confidence: 91,
      severity: 'MODERATE',
      observedIndicators: [
        { name: 'Target-board Concentric Rings', description: 'Dark brown to black necrotic spots with concentric ring pattern', severity: 'moderate' },
        { name: 'Chlorotic Yellow Halo', description: 'Yellow tissue boundary surrounding older lesions on lower tier leaves', severity: 'moderate' },
        { name: 'Lower Canopy Concentration', description: 'Symptoms concentrated in dense bottom foliage near soil level', severity: 'mild' }
      ],
      possibleCauses: [
        'Alternaria solani fungal spores splashing from soil surface',
        'Prolonged leaf wetness duration exceeding 6-8 continuous hours',
        'Overhead irrigation or splash during high relative humidity (>75%)'
      ],
      contextConsiderations: {
        weatherFactor: 'Current 68% relative humidity combined with 32°C daytime temperatures accelerates Alternaria spore germination within 18-24 hours.',
        stageFactor: 'Flowering Stage: Vulnerable period where foliar loss directly reduces flower set and final fruit weight.',
        soilFactor: 'High soil surface moisture present from recent furrow cycle.'
      },
      oneNextBestAction: {
        title: 'Prune Lower Foliage & Avoid Overhead Sprinklers',
        step: 'Immediately sanitize and prune the bottom 4-6 inches of infected yellowing leaves, dispose away from the field, and suspend any overhead watering for the next 48 hours to halt spore dispersal.',
        stepHindi: 'तुरंत नीचे की 4-6 इंच की संक्रमित व पीली पत्तियों को काटकर खेत से दूर नष्ट करें, और बीजाणु फैलने से रोकने के लिए अगले 48 घंटों तक ऊपर से पानी देने से बचें।',
        urgencyHours: 24,
        doNotDo: 'Do NOT irrigate foliage directly in late afternoon or apply nitrogen fertilizer while lesions are active.'
      },
      preventiveAdvice: [
        'Apply copper oxychloride (2.5g/L) or Mancozeb preventative spray during tomorrow morning\'s low-wind window (06:30 - 09:30 AM).',
        'Maintain clean mulch around root zone to prevent soil-to-leaf rain splash.',
        'Ensure 45-60cm plant spacing for adequate aeration in humid weather.'
      ],
      reassessSchedule: 'Inspect underside of mid-canopy leaves in 3 days (Thursday morning).',
      suitableWeatherWindow: 'Optimal spray window: Tomorrow 06:30 AM - 09:00 AM (Wind < 7 km/h, Rain probability < 15%).'
    }
  },
  {
    id: 'preset-cotton-leaf-curl',
    crop: 'Cotton (कपास)',
    conditionName: 'Cotton Leaf Curl Virus (पत्ता मरोड़ वायरस)',
    category: 'VIRAL',
    badgeColor: 'red',
    description: 'Upward curling of leaf margins with vein thickening; transmitted by whitefly vectors.',
    imageSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%231a3b2b"/><path d="M200 50 C130 90 90 170 110 240 C140 275 260 275 290 240 C310 170 270 90 200 50 Z" fill="%23489e65"/><path d="M200 50 Q200 160 200 270" stroke="%239de0a8" stroke-width="6" fill="none"/><path d="M200 110 Q140 85 110 100" stroke="%239de0a8" stroke-width="5" fill="none"/><path d="M200 160 Q260 135 290 150" stroke="%239de0a8" stroke-width="5" fill="none"/><path d="M200 210 Q130 195 105 215" stroke="%239de0a8" stroke-width="4" fill="none"/><path d="M100 120 C100 180 120 220 140 200 C120 160 110 140 100 120 Z" fill="%232b613e"/><path d="M300 140 C300 190 280 230 260 210 C280 170 290 150 300 140 Z" fill="%232b613e"/><circle cx="170" cy="130" r="3" fill="%23fef3c7"/><circle cx="230" cy="180" r="3" fill="%23fef3c7"/><circle cx="180" cy="220" r="3" fill="%23fef3c7"/></svg>`,
    sampleCondition: {
      id: 'cond-cotton-leaf-curl',
      cropName: 'Cotton',
      cropScientificName: 'Gossypium hirsutum',
      conditionName: 'Cotton Leaf Curl Virus (CLCuV)',
      conditionHindi: 'कपास पत्ता मरोड़ वायरस (CLCuV)',
      isHealthy: false,
      confidence: 88,
      severity: 'HIGH',
      observedIndicators: [
        { name: 'Upward Leaf Curling & Cupping', description: 'Marginal curling of upper canopy leaves resembling inverted cup', severity: 'severe' },
        { name: 'Thickened & Darkened Primary Veins', description: 'Abnormal green vein swelling on leaf undersides (enation formation)', severity: 'severe' },
        { name: 'Stunted Internodal Growth', description: 'Reduced vegetative node elongation at terminal shoots', severity: 'moderate' }
      ],
      possibleCauses: [
        'Bemisia tabaci (Whitefly) insect vector feeding and virus transmission',
        'Presence of susceptible weed hosts (Parthenium, Abutilon) along field bunds',
        'Warm dry weather following monsoon showers favoring whitefly population spikes'
      ],
      contextConsiderations: {
        weatherFactor: 'Temperatures above 33°C with intermittent dry spells create peak multiplication conditions for whitefly vectors.',
        stageFactor: 'Vegetative to Square Formation: Critical window before boll development where vector control prevents yield loss.',
        soilFactor: 'Sandy loam soil requires careful moisture balance to avoid plant stress.'
      },
      oneNextBestAction: {
        title: 'Deploy Yellow Sticky Traps & Vector Management',
        step: 'Install 8-10 yellow sticky traps per acre immediately to monitor whitefly count, and apply Neem oil formulation (1500 ppm @ 5ml/L) or systemic vector deterrent in the early morning.',
        stepHindi: 'सफेद मक्खी की निगरानी के लिए तुरंत प्रति एकड़ 8-10 पीले चिपचिपे ट्रैप लगाएं, और सुबह के समय नीम तेल (1500 ppm @ 5ml/L) का छिड़काव करें।',
        urgencyHours: 12,
        doNotDo: 'Do NOT apply synthetic pyrethroids as they trigger secondary whitefly resurgence.'
      },
      preventiveAdvice: [
        'Clear all broadleaf weed hosts within 5 meters of farm perimeter.',
        'Use resistant/tolerant hybrid seeds in subsequent sowing cycles.',
        'Scout 20 random plants across the diagonal of your plot twice a week.'
      ],
      reassessSchedule: 'Re-evaluate whitefly trap density in 48 hours.',
      suitableWeatherWindow: 'Apply spray today between 05:00 PM and 07:00 PM when wind velocity drops below 8 km/h.'
    }
  },
  {
    id: 'preset-rice-blast',
    crop: 'Paddy / Rice (धान)',
    conditionName: 'Rice Blast (धान का ब्लास्ट / झोंका रोग)',
    category: 'FUNGAL',
    badgeColor: 'rose',
    description: 'Diamond spindle-shaped lesions with gray-white centers and reddish-brown borders.',
    imageSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%23143324"/><path d="M120 290 Q170 150 200 30 Q220 150 270 290 Z" fill="%23439b61"/><path d="M200 30 Q195 160 195 290" stroke="%2324633b" stroke-width="3" fill="none"/><path d="M185 90 C175 100 175 110 185 120 C195 110 195 100 185 90 Z" fill="%23e2e8f0" stroke="%237f1d1d" stroke-width="2.5"/><path d="M210 150 C198 165 198 180 210 195 C222 180 222 165 210 150 Z" fill="%23e2e8f0" stroke="%237f1d1d" stroke-width="3"/><path d="M180 210 C170 220 170 230 180 240 C190 230 190 220 180 210 Z" fill="%23e2e8f0" stroke="%237f1d1d" stroke-width="2.5"/></svg>`,
    sampleCondition: {
      id: 'cond-rice-blast',
      cropName: 'Paddy / Rice',
      cropScientificName: 'Oryza sativa',
      conditionName: 'Rice Blast (Magnaporthe oryzae)',
      conditionHindi: 'धान का झोंका रोग (मैग्नापोर्थे ओराइज़ी)',
      isHealthy: false,
      confidence: 94,
      severity: 'HIGH',
      observedIndicators: [
        { name: 'Spindle/Eye-Shaped Lesions', description: 'Elliptical spots with pointed ends, gray center, and dark brown margin', severity: 'severe' },
        { name: 'Leaf Blade Necrosis', description: 'Lesions coalescing causing leaf blade tip desiccation', severity: 'moderate' },
        { name: 'Dew-Drop Spore Aggregation', description: 'Fungal conidia visible under high relative humidity', severity: 'mild' }
      ],
      possibleCauses: [
        'Magnaporthe oryzae airborne conidia',
        'Excessive early-season chemical Nitrogen top-dressing',
        'Extended dew periods (>10 hours) coupled with cool nights (18-22°C)'
      ],
      contextConsiderations: {
        weatherFactor: 'Cloudy weather with high relative humidity (>85%) and impending rain forecast elevates blast incubation rate significantly.',
        stageFactor: 'Tillering to Panicle Initiation: Yield loss potential up to 40% if neck blast develops.',
        soilFactor: 'Flooded paddy condition requires strict water management to check fungal mobility.'
      },
      oneNextBestAction: {
        title: 'Maintain 3-5cm Water Depth & Suspend Nitrogen Urea Top-Dressing',
        step: 'Stop any planned urea/nitrogen application immediately, ensure a steady 3-5 cm standing water layer in the field, and apply Tricyclazole 75% WP @ 0.6g/L before rain sets in.',
        stepHindi: 'यूरिया (नाइट्रोजन) का उपयोग तुरंत रोकें, खेत में 3-5 सेमी पानी का स्तर बनाए रखें, और बारिश से पहले ट्राइसाइक्लाज़ोल 75% WP (0.6 ग्राम/लीटर) का छिड़काव करें।',
        urgencyHours: 18,
        doNotDo: 'Do NOT allow paddy field to dry out completely, as water stress worsens blast vulnerability.'
      },
      preventiveAdvice: [
        'Apply balanced potassium (MOP) to strengthen leaf silica epidermal layer.',
        'Drain field for 24 hours only if root rot symptoms coexist.',
        'Scout outer bund margins where blast usually initiates.'
      ],
      reassessSchedule: 'Review new tiller leaves in 4 days.',
      suitableWeatherWindow: 'Spray window: Today before 04:00 PM or early tomorrow morning.'
    }
  },
  {
    id: 'preset-wheat-rust',
    crop: 'Wheat (गेहूं)',
    conditionName: 'Yellow Stripe Rust (पीला रतुआ)',
    category: 'FUNGAL',
    badgeColor: 'amber',
    description: 'Parallel yellow-orange pustule stripes along leaf veins in cool humid weather.',
    imageSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%23173828"/><path d="M150 280 L180 30 L220 30 L250 280 Z" fill="%23488f5f"/><path d="M185 40 L185 270" stroke="%23d97706" stroke-width="4" stroke-dasharray="4 6"/><path d="M195 40 L195 270" stroke="%23f59e0b" stroke-width="4" stroke-dasharray="3 5"/><path d="M205 40 L205 270" stroke="%23fbbf24" stroke-width="3.5" stroke-dasharray="2 4"/><path d="M215 40 L215 270" stroke="%23d97706" stroke-width="4" stroke-dasharray="4 7"/></svg>`,
    sampleCondition: {
      id: 'cond-wheat-rust',
      cropName: 'Wheat',
      cropScientificName: 'Triticum aestivum',
      conditionName: 'Yellow / Stripe Rust (Puccinia striiformis)',
      conditionHindi: 'पीला रतुआ रोग (पक्सीनिया स्ट्राइफॉर्मिस)',
      isHealthy: false,
      confidence: 93,
      severity: 'HIGH',
      observedIndicators: [
        { name: 'Linear Yellow Pustule Stripes', description: 'Bright yellow powdery urediniospore pustules arranged in parallel linear stripes', severity: 'severe' },
        { name: 'Chlorotic Leaf Streaking', description: 'Early chlorosis running along vascular veins before eruption', severity: 'moderate' },
        { name: 'Dusting on Touch', description: 'Yellow powder easily dislodges on fingertip contact', severity: 'mild' }
      ],
      possibleCauses: [
        'Puccinia striiformis fungal spores carried by northern winds',
        'Cool temperatures (10-18°C) with persistent morning dew and fog'
      ],
      contextConsiderations: {
        weatherFactor: 'Dense morning fog and temperatures under 20°C provide ideal spore germination environment.',
        stageFactor: 'Jointing to Booting stage: Threatens flag leaf which provides 70% of grain filling photosynthetic capacity.',
        soilFactor: 'Adequate soil moisture present.'
      },
      oneNextBestAction: {
        title: 'Spot Spray Propiconazole 25% EC on Identified Focus Patches',
        step: 'Locate initial infection focal points in field depressions and spray Propiconazole 25% EC (Tilt @ 1ml/L) targeting both sides of the leaf surface during afternoon sunshine.',
        stepHindi: 'खेत में रोग के शुरुआती धब्बों पर ध्यान दें और दोपहर की धूप में प्रोपिकोनाज़ोल 25% EC (1 मिली/लीटर) का पत्तों के दोनों तरफ छिड़काव करें।',
        urgencyHours: 24,
        doNotDo: 'Do NOT walk through infected wet fields in morning to prevent spore transmission across healthy areas.'
      },
      preventiveAdvice: [
        'Monitor flag leaf emergence closely over the next 7 days.',
        'Ensure proper field drainage to reduce micro-climate relative humidity.',
        'Plan for second booster spray after 12-14 days if cool cloudy weather persists.'
      ],
      reassessSchedule: 'Re-examine 5-meter radius around focal patches in 5 days.',
      suitableWeatherWindow: 'Best spray time: 11:00 AM to 03:00 PM once morning dew has evaporated.'
    }
  },
  {
    id: 'preset-healthy-corn',
    crop: 'Maize / Corn (मक्का)',
    conditionName: 'Healthy Vigorous Crop (स्वस्थ फसल)',
    category: 'HEALTHY',
    badgeColor: 'emerald',
    description: 'Deep vibrant green foliage with robust venation and zero active pathogen lesions.',
    imageSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%"><rect width="400" height="300" fill="%23102a1d"/><path d="M200 30 C130 90 70 180 100 270 C150 290 250 290 300 270 C330 180 270 90 200 30 Z" fill="%2322c55e"/><path d="M200 30 Q200 160 200 280" stroke="%2315803d" stroke-width="5" fill="none"/><path d="M200 100 Q150 70 110 90" stroke="%2316a34a" stroke-width="3" fill="none"/><path d="M200 150 Q250 120 290 140" stroke="%2316a34a" stroke-width="3" fill="none"/><path d="M200 200 Q140 180 110 210" stroke="%2316a34a" stroke-width="3" fill="none"/><circle cx="200" cy="140" r="80" fill="%2386efac" opacity="0.15"/></svg>`,
    sampleCondition: {
      id: 'cond-healthy-corn',
      cropName: 'Maize / Corn',
      cropScientificName: 'Zea mays',
      conditionName: 'Healthy Foliage — Optimal Growth (स्वस्थ पौधा)',
      conditionHindi: 'स्वस्थ फसल — उत्तम विकास',
      isHealthy: true,
      confidence: 97,
      severity: 'HEALTHY',
      observedIndicators: [
        { name: 'Uniform Deep Green Coloration', description: 'High chlorophyll index across upper and middle leaf whorls', severity: 'mild' },
        { name: 'Turgid Leaf Architecture', description: 'No signs of moisture stress, wilting, or necrotic margins', severity: 'mild' },
        { name: 'Intact Cuticle Barrier', description: 'Zero pest puncture marks or fungal lesions detected', severity: 'mild' }
      ],
      possibleCauses: [
        'Optimal soil nutrient balance',
        'Effective irrigation timing and good root aeration',
        'Favorable sunshine and temperate thermal units'
      ],
      contextConsiderations: {
        weatherFactor: 'Current sunny conditions with moderate 45% humidity support rapid photosynthetic biomass accumulation.',
        stageFactor: 'Knee-High to Tasseling Stage: High nutrient uptake window.',
        soilFactor: 'Well-drained soil with adequate nitrogen availability.'
      },
      oneNextBestAction: {
        title: 'Maintain Current Drip Schedule & Apply Potassium Top-Dressing',
        step: 'Continue existing 45-minute drip irrigation every alternate day and apply light Potassium sulfate (0.5%) before tasseling to support upcoming ear filling.',
        stepHindi: 'हर दूसरे दिन 45 मिनट की ड्रिप सिंचाई जारी रखें और भुट्टा बनने से पहले पोटाश की हल्की खुराक दें।',
        urgencyHours: 48,
        doNotDo: 'Do NOT over-irrigate if soil is already moist at 4-inch depth.'
      },
      preventiveAdvice: [
        'Place pheromone traps for Fall Armyworm (FAW) monitoring at 4 per acre.',
        'Ensure soil is weed-free around base to prevent nutrient competition.',
        'Next routine field scan recommended in 7 days.'
      ],
      reassessSchedule: 'Routine scan in 7 days (next Monday).',
      suitableWeatherWindow: 'All farming operations clear for the next 5 days.'
    }
  }
];

export function getCropPresetById(id: string): PresetCropSample | undefined {
  return CROP_PRESETS.find(p => p.id === id);
}
