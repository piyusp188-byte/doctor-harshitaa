export interface Condition {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconSvg: string;
  badge: string;
  overview: string;
  commonSymptoms: string[];
  rootCauseApproach: string[];
  whatToExpect: string;
}

export const conditionsData: Condition[] = [
  {
    id: "thyroid-hormonal-health",
    slug: "thyroid-hormonal-health",
    title: "Thyroid & Hormonal Imbalances",
    badge: "Endocrine & Metabolism",
    shortDescription: "In-depth investigation of thyroid panels, adrenal function, cortisol rhythms, and cycle regularity beyond standard TSH tests.",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"></path><path d="M18 10a6 6 0 0 1-12 0"></path><line x1="12" y1="16" x2="12" y2="22"></line><line x1="8" y1="22" x2="16" y2="22"></line></svg>`,
    overview: "Your thyroid regulates metabolism, cellular energy, heart rate, mood, and body temperature. Many individuals continue to experience persistent fatigue, unexplained weight changes, or hair thinning even when standard basic tests are labeled 'normal'. A functional approach examines full panels—including Free T3, Free T4, Reverse T3, and thyroid antibodies—alongside nutrient co-factors and gut conversion pathways.",
    commonSymptoms: [
      "Persistent fatigue, sluggishness, and morning exhaustion",
      "Unexplained weight fluctuations or difficulty losing weight",
      "Cold intolerance, dry skin, and hair thinning",
      "Brain fog, memory lapses, and cyclical mood dips",
      "Menstrual cycle irregularities or PMS exacerbations"
    ],
    rootCauseApproach: [
      "Full thyroid axis assessment (Free T3, Free T4, Reverse T3, Anti-TPO, Anti-Tg)",
      "Screening for micronutrient cofactors (Selenium, Zinc, Ferritin, Vitamin D)",
      "Addressing gut microbiome health necessary for active T3 conversion",
      "Evaluating adrenal stress hormones and cortisol diurnal curve"
    ],
    whatToExpect: "An unhurried clinical history reviewing when symptoms began, comprehensive blood panel analysis, dietary strategy for metabolic support, and targeted natural or conventional therapy tailored to your biology."
  },
  {
    id: "gut-health",
    slug: "gut-health",
    title: "Gut Health & Digestive Wellness",
    badge: "Microbiome & Digestion",
    shortDescription: "Addressing chronic constipation, bloating, indigestion, acidity, and intestinal barrier integrity through microbiome restoration.",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 0 0 8 0"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
    overview: "The digestive system is the cornerstone of systemic health, influencing nutrient absorption, immune defense, neurotransmitter production, and inflammation. Rather than relying solely on antacids or laxatives, functional medicine investigates food sensitivities, enzyme insufficiency, dysbiosis, and gut motility.",
    commonSymptoms: [
      "Chronic constipation, incomplete evacuation, or irregular bowel movements",
      "Post-meal bloating, gas, and abdominal discomfort",
      "Acid reflux, heartburn, and slow gastric emptying",
      "Food intolerances and unexplained reactions to everyday meals",
      "Skin flare-ups and lethargy tied to digestive distress"
    ],
    rootCauseApproach: [
      "Evaluating stomach acid production, biliary output, and digestive enzyme adequacy",
      "Assessing gut motility and autonomic nervous system tone (vagus nerve function)",
      "Systematic elimination and reintroduction protocols to identify dietary triggers",
      "Nourishing the gut mucosal barrier with therapeutic foods and targeted botanicals"
    ],
    whatToExpect: "A clear step-by-step restoration plan focusing on soothing irritation, enhancing digestion, rebalancing gut flora, and re-establishing natural peristalsis."
  },
  {
    id: "sinus-allergies",
    slug: "sinus-allergies",
    title: "Chronic Sinus & Allergic Tendencies",
    badge: "Immune Regulation",
    shortDescription: "Targeting underlying immune hyper-reactivity, histamine load, and chronic mucosal inflammation without endless symptomatic syrups.",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>`,
    overview: "Frequent sinus congestion, recurrent post-nasal drip, sneezing fits, and seasonal allergies often indicate an over-stimulated immune system or elevated histamine burden. A functional strategy looks upstream at gut permeability, environmental air quality, lymphatic drainage, and systemic inflammation.",
    commonSymptoms: [
      "Recurrent sinus congestion, facial pressure, and headache",
      "Morning sneezing bouts and chronic post-nasal drip",
      "Frequent throat clearing and mucosal irritation",
      "Dependence on nasal sprays, antihistamines, or decongestants",
      "Fatigue associated with constant low-grade allergic responses"
    ],
    rootCauseApproach: [
      "Analyzing potential food triggers and high-histamine dietary items",
      "Evaluating immune modulation and gut-barrier competence",
      "Supporting natural detoxification, liver clearance, and lymphatic drainage",
      "Environmental assessment including dust, mold, and indoor air considerations in Bengaluru"
    ],
    whatToExpect: "Evidence-grounded immune soothing protocols, anti-inflammatory dietary guidance, mucosal barrier support, and a pathway to reduce reliance on daily antihistamine syrups."
  },
  {
    id: "mood-hormonal-wellbeing",
    slug: "mood-hormonal-wellbeing",
    title: "Mood, Brain Fog & Neuro-Endocrine Care",
    badge: "Brain-Body Connection",
    shortDescription: "Exploring the physiological roots of low mood, irritability, fatigue, and low self-esteem connected to endocrine imbalances.",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path><line x1="9" y1="21" x2="15" y2="21"></line></svg>`,
    overview: "Mood and emotional vitality are deeply anchored in biological biochemistry. Deficiencies in active B-vitamins, sub-optimal thyroid activity, progesterone/estrogen imbalances, and gut inflammation directly alter neurotransmitter synthesis (serotonin, dopamine, GABA), leading to feelings of overwhelm or low confidence.",
    commonSymptoms: [
      "Unexplained low mood, cyclical emotional sensitivity, or apathy",
      "Brain fog, sluggish processing speed, and decreased focus",
      "Feeling emotionally overwhelmed despite routine daily demands",
      "Fluctuating self-confidence correlated with hormonal shifts",
      "Sleep disruptions, early morning waking, or unrefreshing sleep"
    ],
    rootCauseApproach: [
      "Mapping the gut-brain axis and neuro-inflammatory markers",
      "Checking vitamin D3, B12, folate methylation, and iron/ferritin stores",
      "Evaluating sex hormone balance and menstrual cycle interplay",
      "Balancing blood sugar stability to prevent energy and mood crashes"
    ],
    whatToExpect: "Compassionate, non-judgmental medical listening, scientific biochemistry evaluation, and lifestyle/nutritional therapies that restore brain-body harmony."
  },
  {
    id: "stress-nervous-system",
    slug: "stress-nervous-system",
    title: "Nervous System & Stress Regulation",
    badge: "Autonomic Health",
    shortDescription: "Down-regulating chronic fight-or-flight states, calming sympathetic overload, and restoring restorative parasympathetic recovery.",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
    overview: "Urban living, demanding work hours, and chronic life pressures keep the autonomic nervous system locked in a hyper-aroused sympathetic state. Over time, high cortisol and adrenaline exhaust metabolic reserves, impair immune defense, and trigger physical restlessness.",
    commonSymptoms: [
      "Constant internal tension, shallow breathing, and 'wired but tired' feeling",
      "Heart palpitations under mild pressure or nocturnal awakening with anxiety",
      "Digestive slowdown and muscle tightness in the neck, jaw, and shoulders",
      "Chronic mid-afternoon energy crashes and reliance on stimulants",
      "Reduced emotional bandwidth and prolonged stress recovery time"
    ],
    rootCauseApproach: [
      "Assessing hypothalamic-pituitary-adrenal (HPA) axis balance",
      "Vagal nerve stimulation practices and heart-rate variability (HRV) awareness",
      "Sleep hygiene and circadian rhythm reset protocols",
      "Supportive adaptogenic botanicals, magnesium forms, and calming amino acids"
    ],
    whatToExpect: "Tangible nervous system calming practices, clinical biomarker tracking, restorative sleep architecture guidance, and sustainable lifestyle pacing."
  },
  {
    id: "holistic-healing",
    slug: "holistic-healing",
    title: "Integrative Health & Medical Counselling",
    badge: "Whole-Person Care",
    shortDescription: "Unhurried, compassionate clinical consultations uniting conventional medical diagnostics with lifestyle and preventive medicine.",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    overview: "True healing cannot occur in a hurried 5-minute consultation. Dr. Harshitha takes time to understand your complete life trajectory—from early childhood health, family history, and nutritional background to current stressors, relationships, and health objectives.",
    commonSymptoms: [
      "Feeling dismissed or told 'everything is fine' while health declines",
      "Managing multiple disjointed prescriptions without an overarching plan",
      "Desire for preventive, longevity-focused health optimization",
      "Seeking a science-based doctor who also values natural healing",
      "Need for ongoing guidance through complex health transitions"
    ],
    rootCauseApproach: [
      "In-depth 45–60 minute initial medical history mapping",
      "Unified analysis connecting multiple organ systems together",
      "Empathetic medical counselling addressing emotional and behavioral drivers",
      "Clear, collaborative action plan that fits into your actual daily life"
    ],
    whatToExpect: "A genuine partnership where you are thoroughly heard, provided with clear scientific reasoning, and guided with compassion toward renewed wellbeing."
  }
];
