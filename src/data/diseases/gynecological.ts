import { Disease } from '../../types/medical';

export const gynecologicalDiseases: Disease[] = [
  {
    id: 'adenomyosis',
    name: 'Adenomyosis',
    category: 'Gynecological',
    description: 'A condition where the tissue that normally lines the uterus (endometrium) grows into the muscular wall of the uterus.',
    symptoms: [
      'Heavy or prolonged menstrual bleeding',
      'Severe menstrual cramps (dysmenorrhea)',
      'Painful intercourse (dyspareunia)',
      'Chronic pelvic pain',
      'Enlarged uterus',
      'Bloating or feeling of fullness in the abdomen',
      'Painful bowel movements',
      'Passing blood clots during menstruation'
    ],
    relatedParameters: [
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'May be decreased due to heavy menstrual bleeding'
      },
      {
        id: 'CA125',
        status: 'HIGH',
        description: 'Sometimes elevated, but not specific for adenomyosis'
      },
      {
        id: 'ESTRADIOL',
        status: 'NORMAL',
        description: 'Usually within normal ranges, can vary'
      }
    ],
    medications: [
      'NSAIDs for pain relief',
      'Hormonal therapy (e.g., birth control pills, progestins)',
      'GnRH agonists to suppress menstruation',
      'Tranexamic acid to reduce heavy bleeding'
    ],
    lifestyle: [
      'Regular exercise',
      'Heat therapy for pain relief (e.g., heating pad)',
      'Stress management',
      'Adequate rest',
      'Regular gynecological check-ups'
    ],
    diet: [
      'Iron-rich foods to prevent or treat anemia',
      'Anti-inflammatory diet',
      'Adequate fiber intake',
      'Limited caffeine and alcohol',
      'Proper hydration'
    ]
  },
]

