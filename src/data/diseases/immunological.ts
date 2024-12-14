import { Disease } from '../../types/medical';

export const immunologicalDiseases: Disease[] = [


  {
    id: 'allergies',
    name: 'Allergies',
    category: 'Immunological',
    description: 'A condition in which the immune system reacts abnormally to a foreign substance (allergen) that is typically harmless to most people.',
    symptoms: [
      'Skin rash or hives (urticaria)',
      'Itching',
      'Sneezing',
      'Runny or stuffy nose',
      'Watery, red, or swollen eyes (conjunctivitis)',
      'Asthma symptoms (wheezing, shortness of breath)',
      'Nausea, vomiting, or diarrhea (especially with food allergies)',
      'Swelling (angioedema) of the lips, tongue, face, or throat',
      'Anaphylaxis (in severe cases)'
    ],
    relatedParameters: [
      {
        id: 'EOSINOPHILS',
        status: 'HIGH',
        description: 'May be elevated, particularly in allergic reactions'
      },
      {
        id: 'IgE',
        status: 'HIGH',
        description: 'Total IgE levels are often elevated in individuals with allergies'
      },
      {
        id: 'HISTAMINE',
        status: 'HIGH',
        description: 'May be elevated during an active allergic reaction'
      }
    ],
    medications: [
      'Antihistamines (block histamine release)',
      'Corticosteroids (reduce inflammation)',
      'Decongestants (relieve nasal congestion)',
      'Mast cell stabilizers (prevent release of allergic mediators)',
      'Epinephrine auto-injector (for emergency treatment of anaphylaxis)',
      'Immunotherapy (allergy shots or sublingual tablets)'
    ],
    lifestyle: [
      'Allergen avoidance',
      'Carrying an epinephrine auto-injector if prescribed',
      'Wearing a medical alert bracelet or necklace',
      'Regular cleaning to reduce dust and mold',
      'Using air purifiers and HEPA filters',
      'Keeping windows closed during high pollen seasons',
      'Bathing and washing clothes after outdoor activities'
    ],
    diet: [
      'Avoidance of known food allergens',
      'Careful reading of food labels',
      'Eating out with caution and communicating allergy needs to restaurant staff',
      'Foods rich in omega-3 fatty acids (may have anti-inflammatory effects)',
      'Probiotic-rich foods (may modulate immune response)'
    ]
  },
]