import { Disease } from '../../types/medical';

export const liverDiseases: Disease[] = [
  {
    id: 'fatty-liver',
    name: 'Fatty Liver Disease',
    category: 'Hepatic',
    description: 'A condition characterized by excessive fat accumulation in the liver, often associated with metabolic syndrome.',
    symptoms: [
      'Fatigue',
      'Pain in upper right abdomen',
      'Enlarged liver',
      'Unexplained weight loss',
      'Weakness',
      'Loss of appetite',
      'Nausea',
      'Yellow skin and eyes (in advanced cases)'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'ALT levels typically elevated above 35 U/L'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'AST levels elevated above 33 U/L'
      },
      {
        id: 'ALP',
        status: 'HIGH',
        description: 'ALP may be elevated above 147 U/L'
      },
      {
        id: 'TOTAL_BILIRUBIN',
        status: 'HIGH',
        description: 'May be elevated in advanced cases'
      },
      {
        id: 'ALBUMIN',
        status: 'LOW',
        description: 'May be decreased in advanced liver disease'
      },
      {
        id: 'TRIGLYCERIDES',
        status: 'HIGH',
        description: 'Often elevated due to metabolic disturbances'
      },
      {
        id: 'HDL',
        status: 'LOW',
        description: 'Typically reduced in metabolic syndrome'
      }
    ],
    medications: [
      'Vitamin E supplements',
      'Pioglitazone in specific cases',
      'Medications for underlying conditions',
      'Statins if indicated for high cholesterol'
    ],
    lifestyle: [
      'Weight loss if overweight',
      'Regular exercise (at least 150 minutes weekly)',
      'Avoiding alcohol completely',
      'Regular liver function monitoring',
      'Vaccination against hepatitis'
    ],
    diet: [
      'Mediterranean diet pattern',
      'Reduced saturated fat intake',
      'Limited added sugars',
      'Increased fiber intake',
      'Adequate protein from lean sources',
      'Avoiding processed foods'
    ]
  },
  {
    id: 'alcohol-related-liver-disease',
    name: 'Alcohol-Related Liver Disease',
    category: 'Hepatic',
    description: 'Liver damage caused by excessive alcohol consumption, ranging from fatty liver to cirrhosis.',
    symptoms: [
      'Fatigue and weakness',
      'Loss of appetite and weight loss',
      'Nausea and vomiting',
      'Abdominal pain and swelling',
      'Jaundice (yellowing of the skin and eyes)',
      'Swelling in the legs and ankles (edema)',
      'Itchy skin',
      'Dark urine',
      'Pale stools',
      'Easy bruising or bleeding'
    ],
    relatedParameters: [
      {
        id: 'AST',
        status: 'HIGH',
        description: 'Often elevated, usually higher than ALT in alcoholic liver disease'
      },
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Elevated, but typically to a lesser extent than AST'
      },
      {
        id: 'GGT',
        status: 'VERY_HIGH',
        description: 'Significantly elevated, often a marker of alcohol use'
      },
      {
        id: 'TOTAL_BILIRUBIN',
        status: 'HIGH',
        description: 'Elevated as liver function declines'
      },
      {
        id: 'ALBUMIN',
        status: 'LOW',
        description: 'Decreased as liver\'s synthetic function declines'
      },
      {
        id: 'PT',
        status: 'HIGH',
        description: 'Prolonged as liver\'s ability to produce clotting factors decreases'
      }
    ],
    medications: [
      'Corticosteroids (in severe cases of alcoholic hepatitis)',
      'Pentoxifylline (may improve blood flow)',
      'Diuretics for fluid retention',
      'Beta-blockers for portal hypertension',
      'Vitamin and mineral supplements'
    ],
    lifestyle: [
      'Complete abstinence from alcohol',
      'Regular medical check-ups and monitoring',
      'Weight management',
      'Regular exercise as tolerated',
      'Hepatitis A and B vaccinations'
    ],
    diet: [
      'High-calorie, high-protein diet (unless encephalopathy is present)',
      'Low-sodium diet if fluid retention is present',
      'Vitamin supplementation (especially thiamine)',
      'Small, frequent meals',
      'Adequate hydration'
    ]
  },
];