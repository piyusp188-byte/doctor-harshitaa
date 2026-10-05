export interface FAQItem {
  id: string;
  category: "General" | "Consultations" | "Conditions" | "Functional Medicine";
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: "what-is-functional-medicine",
    category: "Functional Medicine",
    question: "What is Functional Medicine and how does it differ from conventional medicine?",
    answer: "Functional Medicine is an evidence-grounded approach that focuses on identifying and addressing the root causes of disease rather than solely suppressing symptoms. While conventional medicine is invaluable for acute emergencies and acute infections, functional medicine takes a systems-biology perspective—examining how gut health, hormone balance, nutritional status, lifestyle, and stress intersect to produce chronic symptoms."
  },
  {
    id: "evidence-based",
    category: "Functional Medicine",
    question: "Is Functional Medicine science-backed?",
    answer: "Yes. Dr. Harshitha Jain is an MBBS gold medalist who grounds her practice in rigorous medical science, physiology, biochemistry, and peer-reviewed clinical research. Functional medicine utilizes validated laboratory assessments, clinical biomarker testing, and scientifically studied nutritional and lifestyle interventions."
  },
  {
    id: "continue-other-doctors",
    category: "Functional Medicine",
    question: "Can I continue seeing my regular specialists or physician while working with Dr. Harshitha?",
    answer: "Absolutely. Dr. Harshitha practices integrative medicine, which works collaboratively alongside your existing healthcare providers, specialists, and necessary conventional medical treatments. We believe coordinated, respectful medical care produces the best patient outcomes."
  },
  {
    id: "consultation-length",
    category: "Consultations",
    question: "How long does a consultation take and what should I expect?",
    answer: "Initial consultations typically range between 45 to 60 minutes. During this dedicated time, Dr. Harshitha takes an in-depth clinical history spanning your symptom timeline, diet, sleep, digestive habits, stress history, and previous treatments. Follow-up reviews typically last 25 to 30 minutes to evaluate your progress and adjust recommendations."
  },
  {
    id: "what-to-bring",
    category: "Consultations",
    question: "What should I bring to my first appointment?",
    answer: "Please bring all past blood test results, ultrasound or imaging reports from the last 1–2 years, a list of current medications and supplements with exact dosages, and a brief written timeline of your key health concerns."
  },
  {
    id: "online-teleconsultation",
    category: "Consultations",
    question: "Are online / video consultations available?",
    answer: "Yes, teleconsultations are available for patients residing outside Bengaluru or those unable to visit the clinic in person. An in-person visit is encouraged whenever possible for comprehensive physical evaluation. Please enquire via our booking form to confirm teleconsultation availability."
  },
  {
    id: "consultation-fee",
    category: "Consultations",
    question: "What is the consultation fee structure?",
    answer: "Consultation fees are transparent and communicated directly by our clinic coordinator when scheduling your appointment. Please reach out through our appointment request form or via WhatsApp at +91 99012 44674 for current consultation rates."
  },
  {
    id: "normal-tests-still-unwell",
    category: "Conditions",
    question: "My lab reports all say 'normal', but I still feel exhausted and unwell. Can functional medicine help?",
    answer: "This is one of the most common reasons patients consult Dr. Harshitha. Standard laboratory reference ranges are often broad and designed to detect acute pathology rather than sub-clinical imbalance. Functional medicine analyzes optimal functional ranges, alongside overlooked biomarkers (such as full thyroid panels, ferritin, vitamin D3, B12, and gut microbiome health) to uncover what is holding your vitality back."
  },
  {
    id: "treat-children",
    category: "Conditions",
    question: "Does Dr. Harshitha treat children or teenagers?",
    answer: "Dr. Harshitha evaluates adolescent and pediatric patients on a case-by-case basis (such as for digestive issues, allergies, or metabolic concerns). Please mention the patient's age in your appointment request form so we can confirm suitability before booking."
  },
  {
    id: "prescribe-medication",
    category: "Conditions",
    question: "Does Dr. Harshitha prescribe conventional prescription drugs when necessary?",
    answer: "Yes. As a registered MBBS physician, Dr. Harshitha is fully qualified to prescribe pharmaceutical medications when clinically indicated. However, she focuses on minimizing unnecessary pharmacological dependence wherever lifestyle modifications, nutritional therapy, and root-cause interventions can safely resolve the condition."
  },
  {
    id: "clinic-location",
    category: "General",
    question: "Where is the clinic located in Bengaluru?",
    answer: "The clinic is located on the First Floor, Meridian Medical Centre, 3/4, Armugam Circle, directly above Shah Medicals, in Basavanagudi, Bengaluru, Karnataka 560004 (Plus Code: WHQH+X4 Bengaluru). It is centrally accessible from South Bengaluru, Jayanagar, Gandhi Bazaar, and Lalbagh."
  },
  {
    id: "clinic-hours",
    category: "General",
    question: "What are the clinic working hours?",
    answer: "Consultations are by prior appointment. Clinic hours are Monday to Friday from 5:30 PM to 8:00 PM, and Saturday from 10:00 AM to 2:00 PM (Sundays closed). We advise booking in advance to secure your preferred consultation slot."
  }
];
