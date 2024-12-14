import { Disease } from '../../types/medical';

export const kidneyDiseases: Disease[] = [
  {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease',
    category: 'Renal',
    description: 'A progressive condition affecting kidney function and their ability to filter waste from the blood.',
    symptoms: [
      'Fatigue',
      'Decreased urine output',
      'Swelling in legs and ankles',
      'Shortness of breath',
      'Nausea',
      'Sleep problems',
      'Muscle cramps',
      'High blood pressure'
    ],
    relatedParameters: [
      {
        id: 'CREATININE',
        status: 'HIGH',
        description: 'Elevated above 1.2 mg/dL indicating reduced kidney function'
      },
      {
        id: 'BUN',
        status: 'HIGH',
        description: 'BUN levels elevated above 20 mg/dL'
      },
      {
        id: 'GFR',
        status: 'LOW',
        description: 'GFR below 60 mL/min indicating kidney damage'
      },
      {
        id: 'POTASSIUM',
        status: 'HIGH',
        description: 'May be elevated due to reduced excretion'
      },
      {
        id: 'SODIUM',
        status: 'LOW',
        description: 'May be decreased due to retention of water'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'Often decreased due to reduced erythropoietin production'
      }
    ],
    medications: [
      'ACE inhibitors or ARBs',
      'Diuretics',
      'Phosphate binders',
      'Erythropoiesis-stimulating agents',
      'Vitamin D supplements'
    ],
    lifestyle: [
      'Regular blood pressure monitoring',
      'Limiting fluid intake as advised',
      'Regular exercise as tolerated',
      'Smoking cessation',
      'Maintaining healthy weight'
    ],
    diet: [
      'Low sodium diet',
      'Restricted protein intake',
      'Controlled potassium intake',
      'Limited phosphorus-rich foods',
      'Adequate calorie intake',
      'Fluid restriction as advised'
    ]
  }
];