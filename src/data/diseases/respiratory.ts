import { Disease } from '../../types/medical';

export const respiratoryDiseases: Disease[] = [
  {
    id: 'allergic-rhinitis',
    name: 'Allergic Rhinitis',
    category: 'Respiratory',
    description: 'Inflammation of the nasal passages caused by an allergic reaction to airborne substances like pollen, dust mites, or pet dander.',
    symptoms: [
      'Sneezing',
      'Runny or stuffy nose',
      'Itchy or watery eyes',
      'Itchy nose, mouth, or throat',
      'Postnasal drip',
      'Cough',
      'Fatigue',
      'Headache',
      'Dark circles under the eyes (allergic shiners)',
      'Decreased sense of smell'
    ],
    relatedParameters: [
      {
        id: 'EOSINOPHILS',
        status: 'HIGH',
        description: 'May be elevated in allergic conditions'
      },
      {
        id: 'IgE',
        status: 'HIGH',
        description: 'Often elevated in allergic reactions'
      },
      {
        id: 'WBC',
        status: 'NORMAL',
        description: 'Usually normal in uncomplicated allergic rhinitis'
      }
    ],
    medications: [
      'Antihistamines (e.g., cetirizine, loratadine)',
      'Nasal corticosteroids (e.g., fluticasone, mometasone)',
      'Decongestants (e.g., pseudoephedrine)',
      'Leukotriene modifiers (e.g., montelukast)',
      'Immunotherapy (allergy shots or sublingual tablets)'
    ],
    lifestyle: [
      'Allergen avoidance (e.g., staying indoors when pollen counts are high)',
      'Use of air purifiers and HEPA filters',
      'Regular cleaning to reduce dust mites',
      'Keeping pets out of bedrooms',
      'Nasal irrigation with saline solution',
      'Wearing sunglasses and a hat outdoors'
    ],
    diet: [
      'Foods rich in omega-3 fatty acids (may have anti-inflammatory effects)',
      'Local honey (may help desensitize to local pollen, but evidence is limited)',
      'Probiotic-rich foods (may modulate immune response)',
      'Adequate hydration',
      'Spicy foods (may help clear nasal passages temporarily)'
    ]
  }