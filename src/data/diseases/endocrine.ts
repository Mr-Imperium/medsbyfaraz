import { Disease } from '../../types/medical';

export const endocrineDiseases: Disease[] = [
  {
    id: 'hypothyroidism',
    name: 'Hypothyroidism',
    category: 'Endocrine',
    description: 'A condition where the thyroid gland doesn\'t produce enough thyroid hormones, leading to slowed metabolism.',
    symptoms: [
      'Fatigue',
      'Weight gain',
      'Cold sensitivity',
      'Dry skin',
      'Depression',
      'Muscle weakness',
      'Joint pain',
      'Constipation',
      'Hair loss'
    ],
    relatedParameters: [
      {
        id: 'TSH',
        status: 'HIGH',
        description: 'TSH levels typically above 4.5 mIU/L'
      },
      {
        id: 'FREE_T4',
        status: 'LOW',
        description: 'Decreased free T4 levels below 0.8 ng/dL'
      },
      {
        id: 'FREE_T3',
        status: 'LOW',
        description: 'Reduced free T3 levels below 2.3 pg/mL'
      },
      {
        id: 'TOTAL_T4',
        status: 'LOW',
        description: 'Low total T4 levels below 4.5 µg/dL'
      },
      {
        id: 'TOTAL_T3',
        status: 'LOW',
        description: 'Decreased total T3 below 80 ng/dL'
      },
      {
        id: 'CHOLESTEROL',
        status: 'HIGH',
        description: 'Often elevated due to slowed metabolism'
      }
    ],
    medications: [
      'Levothyroxine (T4 replacement)',
      'Liothyronine (T3) in some cases',
      'Regular dose adjustments based on levels'
    ],
    lifestyle: [
      'Regular exercise as tolerated',
      'Consistent sleep schedule',
      'Stress management',
      'Regular thyroid function monitoring',
      'Morning medication on empty stomach'
    ],
    diet: [
      'Iodine-rich foods',
      'Selenium-rich foods',
      'Limited soy intake',
      'Avoid eating within 4 hours of thyroid medication',
      'Adequate protein intake'
    ]
  },
  {
    id: 'addisons-disease',
    name: 'Addison’s Disease',
    category: 'Endocrine',
    description: 'A rare disorder where the adrenal glands do not produce enough cortisol and, in some cases, aldosterone.',
    symptoms: [
      'Fatigue and muscle weakness',
      'Weight loss and decreased appetite',
      'Darkening of the skin (hyperpigmentation)',
      'Low blood pressure, even fainting',
      'Salt craving',
      'Low blood sugar (hypoglycemia)',
      'Nausea, diarrhea, or vomiting',
      'Abdominal pain',
      'Muscle or joint pains',
      'Irritability and depression'
    ],
    relatedParameters: [
      {
        id: 'CORTISOL',
        status: 'LOW',
        description: 'Morning cortisol levels typically below normal range'
      },
      {
        id: 'ACTH',
        status: 'HIGH',
        description: 'Elevated ACTH levels as the pituitary tries to stimulate the adrenal glands'
      },
      {
        id: 'SODIUM',
        status: 'LOW',
        description: 'Often decreased due to lack of aldosterone'
      },
      {
        id: 'POTASSIUM',
        status: 'HIGH',
        description: 'Often elevated due to lack of aldosterone'
      },
      {
        id: 'BUN',
        status: 'HIGH',
        description: 'May be elevated due to dehydration'
      },
      {
        id: 'GLUCOSE',
        status: 'LOW',
        description: 'May be decreased due to lack of cortisol'
      }
    ],
    medications: [
      'Hydrocortisone (cortisol replacement)',
      'Fludrocortisone (aldosterone replacement)',
      'Increased salt intake, especially during hot weather or exercise'
    ],
    lifestyle: [
      'Lifelong hormone replacement therapy',
      'Regular medical check-ups and monitoring',
      'Carry a medical alert card or bracelet',
      'Stress management',
      'Adequate rest and sleep',
      'Extra medication during illness or stress'
    ],
    diet: [
      'Adequate salt intake',
      'Regular meal schedule to maintain blood sugar',
      'Increased fluid intake during hot weather or exercise',
      'High-protein diet',
      'Adequate calcium and vitamin D intake'
    ]
  },
];