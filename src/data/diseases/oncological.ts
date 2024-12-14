import { Disease } from '../../types/medical';

export const oncologicalDiseases: Disease[] = [
  {
    id: 'acute-lymphoblastic-leukemia',
    name: 'Acute Lymphoblastic Leukemia',
    category: 'Oncological',
    description: 'A type of blood and bone marrow cancer that affects lymphoid cells, progressing rapidly without treatment.',
    symptoms: [
      'Fatigue',
      'Fever',
      'Easy bruising',
      'Frequent infections',
      'Bone pain',
      'Night sweats',
      'Enlarged lymph nodes',
      'Pale skin',
      'Shortness of breath',
      'Unexplained weight loss'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'VERY_HIGH',
        description: 'Significantly elevated with abnormal lymphoblasts'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'VERY_LOW',
        description: 'Severely decreased due to bone marrow infiltration'
      },
      {
        id: 'PLATELETS',
        status: 'VERY_LOW',
        description: 'Markedly decreased due to bone marrow failure'
      },
      {
        id: 'LDH',
        status: 'HIGH',
        description: 'Elevated due to rapid cell turnover'
      },
      {
        id: 'URIC_ACID',
        status: 'HIGH',
        description: 'Elevated due to increased cell breakdown'
      }
    ],
    medications: [
      'Chemotherapy combinations',
      'Targeted therapy',
      'Immunotherapy',
      'Steroids',
      'Supportive medications'
    ],
    lifestyle: [
      'Infection prevention measures',
      'Regular medical monitoring',
      'Adequate rest',
      'Gentle exercise as tolerated',
      'Emotional support'
    ],
    diet: [
      'High-calorie, high-protein diet',
      'Neutropenic diet when required',
      'Safe food handling practices',
      'Small, frequent meals',
      'Adequate hydration'
    ]
  },
  {
    id: 'acute-myeloid-leukemia',
    name: 'Acute Myeloid Leukemia',
    category: 'Oncological',
    description: 'A type of cancer that starts in the blood-forming cells of the bone marrow, characterized by the rapid growth of abnormal myeloid cells.',
    symptoms: [
      'Fatigue and weakness',
      'Fever and night sweats',
      'Easy bruising or bleeding',
      'Frequent infections',
      'Bone or joint pain',
      'Shortness of breath',
      'Pale skin',
      'Loss of appetite and weight loss',
      'Enlarged spleen or liver',
      'Tiny red spots on the skin (petechiae)'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'VERY_HIGH',
        description: 'Often significantly elevated with abnormal myeloblasts'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'VERY_LOW',
        description: 'Severely decreased due to bone marrow infiltration'
      },
      {
        id: 'PLATELETS',
        status: 'VERY_LOW',
        description: 'Markedly decreased due to bone marrow failure'
      },
      {
        id: 'LDH',
        status: 'HIGH',
        description: 'Elevated due to rapid cell turnover'
      },
      {
        id: 'URIC_ACID',
        status: 'HIGH',
        description: 'Elevated due to increased cell breakdown'
      },
      {
        id: 'BUN',
        status: 'HIGH',
        description: 'May be elevated due to kidney damage from high cell turnover'
      }
    ],
    medications: [
      'Chemotherapy combinations (e.g., cytarabine, daunorubicin)',
      'Targeted therapy (e.g., FLT3 inhibitors, IDH inhibitors)',
      'Stem cell transplant',
      'Supportive medications (e.g., antibiotics, blood transfusions)'
    ],
    lifestyle: [
      'Infection prevention measures',
      'Regular medical monitoring and follow-ups',
      'Adequate rest and sleep',
      'Gentle exercise as tolerated',
      'Emotional and psychological support',
      'Avoiding exposure to sick individuals'
    ],
    diet: [
      'High-calorie, high-protein diet to maintain weight',
      'Neutropenic diet when required (low-bacteria diet)',
      'Safe food handling and preparation practices',
      'Small, frequent meals to combat nausea',
      'Adequate hydration',
      'Avoiding raw or undercooked foods'
    ]
  }
];