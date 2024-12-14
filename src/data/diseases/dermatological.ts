import { Disease } from '../../types/medical';

export const dermatologicalDiseases: Disease[] = [
  {
    id: 'acne',
    name: 'Acne',
    category: 'Dermatological',
    description: 'A skin condition that occurs when hair follicles become plugged with oil and dead skin cells, leading to pimples, blackheads, and other lesions.',
    symptoms: [
      'Whiteheads',
      'Blackheads',
      'Papules',
      'Pustules',
      'Nodules',
      'Cysts',
      'Oily skin',
      'Scarring',
      'Skin inflammation',
      'Skin redness'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'May be elevated due to inflammatory response'
      },
      {
        id: 'TESTOSTERONE',
        status: 'HIGH',
        description: 'Can be elevated, contributing to increased sebum production'
      },
      {
        id: 'INSULIN',
        status: 'HIGH',
        description: 'May be elevated, affecting hormonal balance'
      }
    ],
    medications: [
      'Topical retinoids',
      'Benzoyl peroxide',
      'Topical antibiotics',
      'Oral antibiotics',
      'Isotretinoin for severe cases',
      'Hormonal treatments'
    ],
    lifestyle: [
      'Regular gentle cleansing',
      'Avoid touching face frequently',
      'Use non-comedogenic products',
      'Stress management',
      'Regular sleep schedule'
    ],
    diet: [
      'Low glycemic foods',
      'Avoid dairy if sensitive',
      'Increase omega-3 fatty acids',
      'Zinc-rich foods',
      'Adequate hydration'
    ]
  },
  {
    id: 'acute-cholecystitis',
    name: 'Acute Cholecystitis',
    category: 'Gastrointestinal',
    description: 'Sudden inflammation of the gallbladder, often caused by gallstones, leading to severe abdominal pain and other complications.',
    symptoms: [
      'Severe upper right abdominal pain',
      'Fever',
      'Nausea',
      'Vomiting',
      'Pain radiating to shoulder',
      'Abdominal tenderness',
      'Loss of appetite',
      'Sweating',
      'Rapid heartbeat'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'Elevated due to acute inflammation'
      },
      {
        id: 'ALP',
        status: 'HIGH',
        description: 'Often elevated due to biliary obstruction'
      },
      {
        id: 'TOTAL_BILIRUBIN',
        status: 'HIGH',
        description: 'May be elevated if bile duct is obstructed'
      },
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Can be elevated due to gallbladder inflammation'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'May be elevated due to inflammation'
      }
    ],
    medications: [
      'Intravenous antibiotics',
      'Pain medications',
      'Anti-inflammatory drugs',
      'Antiemetics for nausea'
    ],
    lifestyle: [
      'Weight management',
      'Regular exercise',
      'Avoid fatty foods during acute phase',
      'Adequate rest during recovery',
      'Stress management'
    ],
    diet: [
      'Low-fat diet',
      'Small, frequent meals',
      'Avoid trigger foods',
      'Increased fiber intake',
      'Adequate hydration'
    ]
  },
  
  
];