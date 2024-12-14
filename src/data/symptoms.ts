import { Symptom } from '../types/medical';
import { diseases } from './diseases';

// Helper function to get a detailed description for a symptom
const getSymptomDescription = (symptom: string): string => {
  const descriptions: { [key: string]: string } = {
    // Metabolic & Endocrine Symptoms
    'Increased thirst': 'Persistent feeling of thirst despite adequate fluid intake, often accompanied by dry mouth',
    'Frequent urination': 'Need to urinate more often than usual, particularly at night (nocturia)',
    'Increased hunger': 'Excessive hunger or appetite, even shortly after meals',
    'Unintended weight loss': 'Losing weight without trying through diet or exercise',
    'Fatigue': 'Persistent tiredness and lack of energy that interferes with daily activities',
    'Blurred vision': 'Difficulty focusing or seeing clearly, with objects appearing fuzzy or hazy',
    'Slow-healing sores': 'Wounds, cuts, or bruises that take longer than usual to heal',
    'Weight gain': 'Unexplained increase in body weight not related to dietary changes',
    'Cold sensitivity': 'Feeling unusually cold when others are comfortable',
    'Dry skin': 'Skin that feels rough, scaly, or itchy despite moisturizing',
    'Depression': 'Persistent feelings of sadness, loss of interest, and low energy',
    'Muscle weakness': 'Reduced strength or difficulty performing usual physical activities',
    'Joint pain': 'Aching, stiffness, or swelling in joints',
    'Constipation': 'Infrequent or difficult bowel movements',
    'Hair loss': 'Increased hair shedding or thinning of hair',

    // Liver Symptoms
    'Pain in upper right abdomen': 'Discomfort or pain in the upper right side of the abdomen, below the ribs',
    'Enlarged liver': 'Swelling or enlargement of the liver, which may cause abdominal discomfort',
    'Loss of appetite': 'Reduced desire to eat, often accompanied by nausea',
    'Nausea': 'Feeling of sickness in the stomach with an urge to vomit',
    'Yellow skin and eyes': 'Yellowing of skin and whites of eyes (jaundice) due to liver problems',

    // Kidney Symptoms
    'Decreased urine output': 'Producing less urine than usual or having dark-colored urine',
    'Swelling in legs and ankles': 'Fluid retention causing puffiness in lower extremities',
    'Shortness of breath': 'Difficulty breathing or feeling breathless, especially during physical activity',
    'Sleep problems': 'Difficulty falling asleep or staying asleep through the night',
    'Muscle cramps': 'Sudden, painful muscle contractions, especially in legs',
    'High blood pressure': 'Elevated blood pressure readings above normal range',

    // Vascular Symptoms
    'Abdominal pain': 'Severe pain in the abdomen that may radiate to back or legs',
    'Back pain': 'Pain in the lower back that may be constant or come and go',
    'Deep constant pain in abdomen': 'Persistent, severe pain in the abdomen that doesn\'t go away',
    'Pulsating feeling near navel': 'Sensation of throbbing or pulsing around the belly button area',
    'Vomiting': 'Forceful emptying of stomach contents through the mouth',
    'Clammy skin': 'Cold, moist, and pale skin, often associated with shock',
    'Rapid heart rate': 'Heart beating faster than normal, often felt as palpitations',
    'Shock': 'Life-threatening condition with very low blood pressure and organ failure',

    // Musculoskeletal Symptoms
    'Pain above heel': 'Sharp or aching pain in the area just above the heel bone',
    'Stiffness in ankle': 'Reduced flexibility and difficulty moving the ankle freely',
    'Reduced strength in ankle': 'Weakness when pushing off or standing on tiptoes',
    'Morning pain and stiffness': 'Increased pain and stiffness in the heel area upon waking',
    'Pain after exercise': 'Discomfort or pain that worsens following physical activity',
    'Swelling in tendon area': 'Visible swelling or thickening around the Achilles tendon',
    'Tenderness to touch': 'Pain when pressing on or touching the affected area',
    'Decreased flexibility': 'Reduced range of motion in the ankle joint'
  };

  return descriptions[symptom] || `Common symptom that may indicate various medical conditions including ${
    diseases
      .filter(d => d.symptoms.includes(symptom))
      .map(d => d.name)
      .join(', ')
  }`;
};

// Generate symptoms from all diseases with detailed descriptions
const generateSymptomsFromDiseases = (): Symptom[] => {
  const uniqueSymptoms = new Set<string>();
  
  // Collect all unique symptoms from diseases
  diseases.forEach(disease => {
    disease.symptoms.forEach(symptom => {
      uniqueSymptoms.add(symptom);
    });
  });

  // Convert to Symptom objects with unique IDs and detailed descriptions
  return Array.from(uniqueSymptoms).map(symptom => ({
    id: symptom.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: symptom,
    description: getSymptomDescription(symptom)
  }));
};

export const symptoms: Symptom[] = generateSymptomsFromDiseases();