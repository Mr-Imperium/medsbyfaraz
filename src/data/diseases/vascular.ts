import { Disease } from '../../types/medical';

export const vascularDiseases: Disease[] = [
  {
    id: 'abdominal-aortic-aneurysm',
    name: 'Abdominal Aortic Aneurysm',
    category: 'Vascular',
    description: 'A condition where the aorta, the main blood vessel that delivers blood from the heart to the body, becomes enlarged in the abdomen.',
    symptoms: [
      'Abdominal pain',
      'Back pain',
      'Deep constant pain in abdomen or side of abdomen',
      'Pulsating feeling near navel',
      'Nausea',
      'Vomiting',
      'Clammy skin',
      'Rapid heart rate',
      'Shock'
    ],
    relatedParameters: [
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'May be decreased due to chronic blood loss or anemia'
      },
      {
        id: 'PLATELETS',
        status: 'LOW',
        description: 'May be decreased due to consumption in clot formation'
      },
      {
        id: 'CREATININE',
        status: 'HIGH',
        description: 'May be elevated due to reduced kidney perfusion'
      },
      {
        id: 'BUN',
        status: 'HIGH',
        description: 'Often elevated due to decreased kidney function'
      }
    ],
    medications: [
      'Beta blockers to lower blood pressure',
      'ACE inhibitors',
      'Statins to reduce cholesterol',
      'Pain medications as needed'
    ],
    lifestyle: [
      'Regular blood pressure monitoring',
      'Smoking cessation',
      'Regular exercise as tolerated',
      'Stress management',
      'Regular medical check-ups'
    ],
    diet: [
      'Low sodium diet',
      'Heart-healthy diet',
      'Limited alcohol consumption',
      'Increased fiber intake',
      'Adequate hydration'
    ]
  }
];