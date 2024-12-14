import { Disease } from '../../types/medical';

export const metabolicDiseases: Disease[] = [
  {
    id: 'type2-diabetes',
    name: 'Type 2 Diabetes',
    category: 'Metabolic',
    description: 'A chronic metabolic disorder characterized by high blood sugar levels due to insulin resistance or insufficient insulin production.',
    symptoms: [
      'Increased thirst',
      'Frequent urination',
      'Increased hunger',
      'Unintended weight loss',
      'Fatigue',
      'Blurred vision',
      'Slow-healing sores',
      'Frequent infections'
    ],
    relatedParameters: [
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'Fasting blood glucose typically elevated above 126 mg/dL'
      },
      {
        id: 'HBA1C',
        status: 'HIGH',
        description: 'HbA1c levels above 6.5% indicating long-term high blood sugar'
      },
      {
        id: 'TRIGLYCERIDES',
        status: 'HIGH',
        description: 'Often elevated due to metabolic disturbances'
      },
      {
        id: 'HDL',
        status: 'LOW',
        description: 'Reduced HDL cholesterol levels'
      }
    ],
    medications: [
      'Metformin (first-line treatment)',
      'Sulfonylureas',
      'DPP-4 inhibitors',
      'GLP-1 receptor agonists',
      'SGLT2 inhibitors'
    ],
    lifestyle: [
      'Regular physical activity (30 minutes daily)',
      'Weight management',
      'Blood sugar monitoring',
      'Regular medical check-ups',
      'Proper foot care'
    ],
    diet: [
      'Low glycemic index foods',
      'Controlled portion sizes',
      'Limited refined carbohydrates',
      'Increased fiber intake',
      'Regular meal timing'
    ]
  }
];