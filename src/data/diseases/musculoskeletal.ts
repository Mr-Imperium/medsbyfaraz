import { Disease } from '../../types/medical';

export const musculoskeletalDiseases: Disease[] = [
  {
    id: 'achilles-tendinopathy',
    name: 'Achilles Tendinopathy',
    category: 'Musculoskeletal',
    description: 'A condition that causes pain, swelling, and stiffness of the Achilles tendon that connects your heel bone to your calf muscles.',
    symptoms: [
      'Pain above heel',
      'Stiffness in ankle',
      'Reduced strength in ankle',
      'Morning pain and stiffness',
      'Pain after exercise',
      'Swelling in tendon area',
      'Tenderness to touch',
      'Decreased flexibility'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'May be elevated due to inflammation'
      },
      {
        id: 'PLATELETS',
        status: 'HIGH',
        description: 'Can be elevated due to repair processes'
      },
      {
        id: 'URIC_ACID',
        status: 'NORMAL',
        description: 'Usually normal unless gout is present'
      }
    ],
    medications: [
      'NSAIDs for pain and inflammation',
      'Topical anti-inflammatory gels',
      'Corticosteroid injections in severe cases'
    ],
    lifestyle: [
      'Gradual return to activity',
      'Regular stretching exercises',
      'Proper footwear',
      'Cross-training to reduce impact',
      'Ice therapy after activity',
      'Adequate rest between activities'
    ],
    diet: [
      'Anti-inflammatory foods',
      'Adequate protein intake',
      'Foods rich in vitamin C',
      'Foods rich in collagen',
      'Proper hydration'
    ]
  }
];