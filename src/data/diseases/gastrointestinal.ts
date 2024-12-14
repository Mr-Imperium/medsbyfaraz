import { Disease } from '../../types/medical';

export const gastrointestinalDiseases: Disease[] = [
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
  {
    id: 'acute-pancreatitis',
    name: 'Acute Pancreatitis',
    category: 'Gastrointestinal',
    description: 'Sudden inflammation of the pancreas, often caused by gallstones or heavy alcohol use, leading to severe abdominal pain.',
    symptoms: [
      'Severe upper abdominal pain radiating to the back',
      'Nausea and vomiting',
      'Fever',
      'Rapid pulse',
      'Abdominal tenderness',
      'Swollen abdomen',
      'Indigestion',
      'Clay-colored stools',
      'Jaundice (yellowing of the skin and eyes)',
      'Pain that worsens after eating'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'Elevated due to inflammation'
      },
      {
        id: 'AMYLASE',
        status: 'VERY_HIGH',
        description: 'Significantly elevated, often 3 times the upper limit of normal'
      },
      {
        id: 'LIPASE',
        status: 'VERY_HIGH',
        description: 'Significantly elevated, more specific for pancreatitis than amylase'
      },
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'May be elevated due to pancreatic dysfunction'
      },
      {
        id: 'CALCIUM',
        value: 7.5,
        unit: 'mg/dL',
        normalRange: {min: 8.5, max: 10.5},
        status: 'LOW',
        description: 'May be decreased in severe cases'
      },
      {
        id: 'TRIGLYCERIDES',
        status: 'HIGH',
        description: 'May be elevated, especially if hypertriglyceridemia is the cause'
      }
    ],
    medications: [
      'Intravenous fluids',
      'Pain medications (e.g., opioids)',
      'Antibiotics if infection is present',
      'Medications to reduce stomach acid',
      'Enzyme supplements if needed'
    ],
    lifestyle: [
      'Abstinence from alcohol if alcohol-induced',
      'Weight management if gallstone-related',
      'Rest during the acute phase',
      'Gradual reintroduction of oral intake',
      'Stress management'
    ],
    diet: [
      'Clear liquid diet initially',
      'Low-fat diet once oral intake is resumed',
      'Small, frequent meals',
      'Avoidance of trigger foods (fatty foods, alcohol)',
      'Adequate hydration',
      'High-protein, low-fat foods as tolerated'
    ]
  }
];
