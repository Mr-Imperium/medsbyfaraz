import { Disease } from '../types/medical';

export const diseases: Disease[] = [
  {
    id: 'abdominal-aortic-aneurysm',
    name: 'Abdominal Aortic Aneurysm',
    category: 'Cardiovascular',
    description: 'A condition where the aorta, the main blood vessel that delivers blood from the heart to the body, becomes enlarged in the abdomen.',
    symptoms: [
      'Abdominal pain',
      'Back pain',
      'Deep constant pain in abdomen',
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
  },
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
  },
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
  },
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
  {
    id: 'alzheimers-disease',
    name: 'Alzheimer\'s Disease',
    category: 'Neurological',
    description: 'A progressive neurodegenerative disease that affects memory, thinking, and behavior, ultimately leading to severe cognitive impairment.',
    symptoms: [
      'Memory loss that disrupts daily life',
      'Challenges in planning or solving problems',
      'Difficulty completing familiar tasks',
      'Confusion with time or place',
      'Trouble understanding visual images and spatial relationships',
      'New problems with words in speaking or writing',
      'Misplacing things and losing the ability to retrace steps',
      'Decreased or poor judgment',
      'Withdrawal from work or social activities',
      'Changes in mood and personality'
    ],
    relatedParameters: [
      {
        id: 'BETA_AMYLOID_42',
        status: 'LOW',
        description: 'Often decreased in cerebrospinal fluid (CSF) in Alzheimer\'s disease'
      },
      {
        id: 'TAU_PROTEIN',
        status: 'HIGH',
        description: 'Often elevated in CSF in Alzheimer\'s disease'
      },
    ],
    medications: [
      'Cholinesterase inhibitors (e.g., donepezil, rivastigmine, galantamine)',
      'Memantine (an NMDA receptor antagonist)',
      'Aducanumab (targets beta-amyloid plaques, use is controversial)',
      'Antidepressants or anti-anxiety medications if needed for mood symptoms'
    ],
    lifestyle: [
      'Regular cognitive stimulation (e.g., reading, puzzles)',
      'Physical exercise',
      'Social engagement',
      'Maintaining a structured routine',
      'Adequate sleep',
      'Support for caregivers',
      'Safety measures in the home environment'
    ],
    diet: [
      'Mediterranean diet or MIND diet (may have neuroprotective effects)',
      'Foods rich in antioxidants (e.g., fruits, vegetables)',
      'Omega-3 fatty acids (e.g., fish, flaxseed)',
      'Limited saturated and trans fats',
      'Adequate hydration'
    ]
  },
  {
    id: 'anal-cancer',
    name: 'Anal Cancer',
    category: 'Oncological',
    description: 'A type of cancer that forms in the tissues of the anus, often associated with human papillomavirus (HPV) infection.',
    symptoms: [
      'Rectal bleeding',
      'Anal pain or pressure',
      'A lump or mass near the anus',
      'Itching around the anus',
      'Changes in bowel habits',
      'Narrowing of stools',
      'Discharge from the anus',
      'Swollen lymph nodes in the anal or groin area'
    ],
    relatedParameters: [
      {
        id: 'CEA',
        status: 'HIGH',
        description: 'May be elevated in some cases, but not a specific marker for anal cancer'
      },
      {
        id: 'SQUAMOUS_CELL_CARCINOMA_ANTIGEN',
        status: 'HIGH',
        description: 'May be elevated, particularly in squamous cell carcinoma of the anus'
      }
    ],
    medications: [
      'Chemotherapy (e.g., 5-fluorouracil, mitomycin C, cisplatin)',
      'Radiation therapy',
      'Targeted therapy (e.g., cetuximab in some cases)',
      'Immunotherapy (e.g., nivolumab, pembrolizumab in some cases)'
    ],
    lifestyle: [
      'HPV vaccination (ideally before sexual activity begins)',
      'Safe sex practices (condom use)',
      'Smoking cessation',
      'Regular anal cancer screening for high-risk individuals (e.g., those with HIV)',
      'Regular medical check-ups'
    ],
    diet: [
      'High-fiber diet to promote regular bowel movements',
      'Adequate hydration',
      'Diet rich in fruits and vegetables (may have protective effects)',
      'Limited processed and red meat consumption',
      'Maintaining a healthy weight'
    ]
  },
  {
    id: 'anaphylaxis',
    name: 'Anaphylaxis',
    category: 'Immunological',
    description: 'A severe, life-threatening allergic reaction that can occur within seconds or minutes of exposure to an allergen.',
    symptoms: [
      'Skin reactions (hives, itching, flushing)',
      'Swelling of the tongue, lips, or throat',
      'Difficulty breathing, wheezing',
      'Rapid pulse',
      'Dizziness or fainting',
      'Nausea, vomiting, or diarrhea',
      'Drop in blood pressure (hypotension)',
      'Loss of consciousness',
      'Feeling of impending doom'
    ],
    relatedParameters: [
      {
        id: 'TRYPTASE',
        status: 'VERY_HIGH',
        description: 'Elevated within hours of anaphylaxis, helps confirm the diagnosis'
      },
      {
        id: 'HISTAMINE',
        status: 'VERY_HIGH',
        description: 'Significantly elevated during anaphylaxis'
      },
      {
        id: 'IgE',
        status: 'HIGH',
        description: 'May be elevated, indicating an allergic sensitization'
      }
    ],
    medications: [
      'Epinephrine (adrenaline) - the primary and most important treatment',
      'Antihistamines (e.g., diphenhydramine)',
      'Corticosteroids (e.g., prednisone)',
      'Bronchodilators (e.g., albuterol) if wheezing is present',
      'Intravenous fluids for hypotension'
    ],
    lifestyle: [
      'Strict allergen avoidance',
      'Carrying an epinephrine auto-injector at all times',
      'Wearing a medical alert bracelet or necklace',
      'Educating family, friends, and colleagues about anaphylaxis and epinephrine use',
      'Developing an anaphylaxis action plan with a doctor',
      'Knowing the signs and symptoms of anaphylaxis and seeking immediate medical help if they occur'
    ],
    diet: [
      'Strict avoidance of known food allergens',
      'Careful reading of food labels',
      'Caution when eating out and clear communication of allergies to restaurant staff',
      'Avoiding cross-contamination of foods'
    ]
  },
  {
    id: 'angina',
    name: 'Angina',
    category: 'Cardiovascular',
    description: 'Chest pain or discomfort caused when the heart muscle doesn\'t get enough oxygen-rich blood, often a symptom of coronary artery disease.',
    symptoms: [
      'Chest pain or pressure (often described as squeezing, tightness, or heaviness)',
      'Pain that may radiate to the neck, jaw, shoulders, or arms (especially the left arm)',
      'Shortness of breath',
      'Sweating',
      'Nausea',
      'Dizziness or lightheadedness',
      'Fatigue',
      'Pain that is often triggered by exertion and relieved by rest (stable angina)',
      'Pain that can occur at rest and be more severe (unstable angina)'
    ],
    relatedParameters: [
      {
        id: 'TROPONIN',
        status: 'NORMAL',
        description: 'May be normal or slightly elevated in stable angina, significantly elevated in unstable angina or heart attack'
      },
      {
        id: 'CK_MB',
        status: 'HIGH',
        description: 'May be normal in stable angina, elevated in unstable angina or heart attack'
      },
    ],
    medications: [
      'Nitroglycerin (relieves acute angina episodes)',
      'Beta-blockers (reduce heart rate and blood pressure)',
      'Calcium channel blockers (relax blood vessels)',
      'Aspirin (antiplatelet therapy)',
      'Statins (lower cholesterol)',
      'ACE inhibitors or ARBs (for blood pressure control and other benefits)'
    ],
    lifestyle: [
      'Regular exercise (as recommended by a doctor)',
      'Heart-healthy diet',
      'Weight management',
      'Smoking cessation',
      'Stress management',
      'Regular medical check-ups',
      'Knowing the warning signs of a heart attack'
    ],
    diet: [
      'Low in saturated and trans fats',
      'Low in cholesterol',
      'Low in sodium',
      'Rich in fruits, vegetables, and whole grains',
      'Lean protein sources (fish, poultry, legumes)',
      'Limited alcohol consumption'
    ]
  },
  {
    id: 'angioedema',
    name: 'Angioedema',
    category: 'Immunological',
    description: 'Swelling beneath the skin, often around the eyes and lips, that can be triggered by an allergic reaction, medication, or hereditary condition.',
    symptoms: [
      'Swelling (often sudden) of the face, lips, tongue, throat, hands, or feet',
      'Difficulty breathing if the throat is affected',
      'Abdominal pain if the intestines are involved',
      'Itching (may or may not be present)',
      'Skin redness (may or may not be present)',
      'Hives (may or may not be present)',
      'C1 Esterase Inhibitor Level is low in Hereditary Type I',
      'C1 Esterase Inhibitor Function is low in Hereditary Type II',
      'C4 Level is low in Hereditary Angioedema'
    ],
    relatedParameters: [
      
    ],
    medications: [
      'Antihistamines (for allergic angioedema)',
      'Corticosteroids (reduce inflammation)',
      'Epinephrine (for severe allergic reactions, including anaphylaxis)',
      'C1 esterase inhibitor concentrate (for hereditary angioedema)',
      'Icatibant (a bradykinin B2 receptor antagonist for hereditary angioedema)',
      'Ecallantide (a kallikrein inhibitor for hereditary angioedema)'
    ],
    lifestyle: [
      'Allergen avoidance if the cause is allergic',
      'Avoidance of known triggers (e.g., certain medications, foods)',
      'Carrying an epinephrine auto-injector if prescribed for severe allergic reactions',
      'Wearing a medical alert bracelet or necklace',
      'Having an action plan for acute attacks (especially for hereditary angioedema)'
    ],
    diet: [
      'Avoidance of known food allergens if the cause is allergic',
      'Careful reading of food labels',
      'Caution when eating out and communicating allergy needs to restaurant staff'
    ]
  },
  {
    id: 'ankle-sprain',
    name: 'Ankle Sprain',
    category: 'Musculoskeletal',
    description: 'An injury to the ligaments that support the ankle joint, usually caused by a sudden twisting or rolling motion.',
    symptoms: [
      'Pain in the ankle, especially when bearing weight',
      'Swelling around the ankle',
      'Bruising',
      'Tenderness to the touch',
      'Stiffness and limited range of motion',
      'Instability or a feeling of the ankle "giving way" (in severe sprains)'
    ],
    relatedParameters: [
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'May be slightly elevated due to inflammation'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'May be slightly elevated due to inflammation'
      },
    ],
    medications: [
      'NSAIDs (e.g., ibuprofen, naproxen) for pain and inflammation',
      'Pain relievers (e.g., acetaminophen)'
    ],
    lifestyle: [
      'RICE (Rest, Ice, Compression, Elevation)',
      'Immobilization with a brace or splint if needed',
      'Gradual return to activity as tolerated',
      'Physical therapy to restore strength, flexibility, and balance',
      'Proper footwear and ankle support during sports and activities'
    ],
    diet: [
      'Anti-inflammatory foods (e.g., fruits, vegetables, omega-3 fatty acids)',
      'Adequate protein intake for tissue repair',
      'Foods rich in vitamin C and zinc for healing',
      'Proper hydration'
    ]
  },
  {
    id: 'ankle-avulsion-fracture',
    name: 'Ankle Avulsion Fracture',
    category: 'Musculoskeletal',
    description: 'A type of fracture where a small piece of bone attached to a ligament or tendon is pulled away from the main part of the bone.',
    symptoms: [
      'Sudden, sharp pain in the ankle',
      'Swelling around the ankle',
      'Bruising',
      'Tenderness to the touch',
      'Difficulty or inability to bear weight on the injured ankle',
      'Deformity may be present in some cases'
    ],
    relatedParameters: [
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'Elevated due to inflammation from the fracture'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Elevated due to inflammation from the fracture'
      },
    ],
    medications: [
      'NSAIDs (e.g., ibuprofen, naproxen) for pain and inflammation',
      'Pain relievers (e.g., acetaminophen, or stronger opioids if needed)'
    ],
    lifestyle: [
      'Immobilization with a cast, boot, or splint',
      'Non-weight-bearing or limited weight-bearing with crutches',
      'Elevation to reduce swelling',
      'Physical therapy after the fracture has healed to restore range of motion, strength, and function',
      'Gradual return to activity'
    ],
    diet: [
      'Adequate calcium and vitamin D intake for bone healing',
      'Adequate protein intake for tissue repair',
      'Anti-inflammatory foods (e.g., fruits, vegetables, omega-3 fatty acids)',
      'Proper hydration'
    ]
  },
  {
    id: 'ankylosing-spondylitis',
    name: 'Ankylosing Spondylitis',
    category: 'Musculoskeletal',
    description: 'A type of inflammatory arthritis that primarily affects the spine, causing inflammation of the spinal joints (vertebrae) that can lead to severe, chronic pain and discomfort.',
    symptoms: [
      'Pain and stiffness in the lower back and hips, especially in the morning or after periods of inactivity',
      'Neck pain and fatigue',
      'Pain and swelling in other joints, such as the shoulders, knees, or ankles',
      'Limited range of motion in the spine',
      'Eye inflammation (uveitis or iritis)',
      'Bony fusion, leading to a rigid spine in advanced cases',
      'Pain in ligaments and tendons, especially where they attach to bone (enthesitis)'
    ],
    relatedParameters: [
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'Often elevated, indicating inflammation'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Often elevated, indicating inflammation'
      },
      
    ],
    medications: [
      'NSAIDs (e.g., ibuprofen, naproxen, indomethacin)',
      'TNF inhibitors (e.g., etanercept, infliximab, adalimumab)',
      'IL-17 inhibitors (e.g., secukinumab, ixekizumab)',
      'JAK inhibitors (e.g., tofacitinib)',
      'Sulfasalazine (may be used for peripheral joint involvement)',
      'Corticosteroids (for short-term use during flares)'
    ],
    lifestyle: [
      'Regular exercise, including stretching and range-of-motion exercises',
      'Physical therapy',
      'Maintaining good posture',
      'Applying heat or cold to affected areas',
      'Smoking cessation',
      'Weight management',
      'Assistive devices if needed'
    ],
    diet: [
      'Anti-inflammatory diet (e.g., Mediterranean diet)',
      'Foods rich in omega-3 fatty acids',
      'Adequate calcium and vitamin D intake',
      'Limited processed foods, sugar, and saturated fats',
      'Proper hydration'
    ]
  },
  {
    id: 'anorexia-nervosa',
    name: 'Anorexia Nervosa',
    category: 'Neurological',
    description: 'An eating disorder characterized by an intense fear of gaining weight, a distorted body image, and severe food restriction, leading to significantly low body weight.',
    symptoms: [
      'Extremely restricted eating',
      'Intense fear of gaining weight or becoming fat, even when underweight',
      'Distorted body image or self-perception of body weight or shape',
      'Refusal to maintain body weight at or above a minimally normal weight for age and height',
      'Excessive exercise',
      'Use of laxatives, diuretics, or enemas for weight control',
      'Amenorrhea (loss of menstrual periods) in females',
      'Thinning of bones (osteopenia or osteoporosis)',
      'Brittle hair and nails',
      'Dry and yellowish skin',
      'Growth of fine hair all over the body (lanugo)',
      'Anemia and muscle wasting and weakness',
      'Severe constipation',
      'Low blood pressure, slowed breathing and pulse',
      'Damage to the structure and function of the heart',
      'Brain damage',
      'Multiorgan failure'
    ],
    relatedParameters: [
      {
        id: 'BMI',
        status: 'VERY_LOW',
        description: 'Body Mass Index typically below 17.5'
      },
      {
        id: 'ALBUMIN',
        status: 'LOW',
        description: 'May be decreased due to malnutrition'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'May be decreased due to anemia'
      },
      {
        id: 'BUN',
        status: 'HIGH',
        description: 'May be elevated due to dehydration'
      },
      {
        id: 'ESTROGEN',
        status: 'LOW',
        description: 'Often low in females, leading to amenorrhea'
      }
    ],
    medications: [
      'Antidepressants (e.g., SSRIs) - may be helpful for co-occurring depression or anxiety',
      'Antipsychotics (e.g., olanzapine) - may be used in some cases to help with weight gain and distorted thinking',
      'Hormone therapy (e.g., estrogen) - may be used to help restore menstrual cycles and bone health'
    ],
    lifestyle: [
      'Psychotherapy (e.g., cognitive-behavioral therapy, family-based therapy)',
      'Nutritional counseling and weight restoration',
      'Medical monitoring to address physical health complications',
      'Support groups',
      'Hospitalization or residential treatment in severe cases'
    ],
    diet: [
      'Gradual increase in caloric intake under medical supervision',
      'Regular meal schedule',
      'Balanced diet with a variety of foods',
      'Nutritional supplements if needed',
      'Focus on restoring a healthy relationship with food'
    ]
  },
  {
    id: 'anxiety',
    name: 'Anxiety',
    category: 'Neurological',
    description: 'A mental health condition characterized by persistent and excessive worry, fear, or nervousness that can interfere with daily activities.',
    symptoms: [
      'Excessive worry or fear',
      'Restlessness or feeling on edge',
      'Difficulty concentrating',
      'Irritability',
      'Muscle tension',
      'Sleep disturbances (difficulty falling asleep or staying asleep)',
      'Fatigue',
      'Panic attacks (sudden episodes of intense fear with physical symptoms like rapid heartbeat, sweating, trembling, shortness of breath)',
      'Avoidance of situations that trigger anxiety',
      'Physical symptoms like stomachaches, headaches, or other unexplained pains'
    ],
    relatedParameters: [
      {
        id: 'CORTISOL',
        status: 'HIGH',
        description: 'May be elevated in some individuals with anxiety disorders'
      },
      {
        id: 'TSH',
        status: 'NORMAL',
        description: 'Usually normal, but thyroid function tests may be done to rule out thyroid problems'
      },
    ],
    medications: [
      'SSRIs (selective serotonin reuptake inhibitors)',
      'SNRIs (serotonin-norepinephrine reuptake inhibitors)',
      'Benzodiazepines (for short-term use due to dependence risk)',
      'Buspirone',
      'Tricyclic antidepressants',
      'Beta-blockers (for physical symptoms like rapid heartbeat)'
    ],
    lifestyle: [
      'Regular exercise',
      'Relaxation techniques (e.g., deep breathing, meditation, yoga)',
      'Mindfulness',
      'Adequate sleep',
      'Stress management',
      'Limiting caffeine and alcohol',
      'Social support',
      'Psychotherapy (e.g., cognitive-behavioral therapy)'
    ],
    diet: [
      'Balanced diet with regular meals',
      'Limited caffeine and processed foods',
      'Foods rich in omega-3 fatty acids',
      'Complex carbohydrates (e.g., whole grains) to stabilize blood sugar',
      'Adequate hydration',
      'Some evidence for magnesium and B vitamins'
    ]
  },
  {
    id: 'appendicitis',
    name: 'Appendicitis',
    category: 'Gastrointestinal',
    description: 'Inflammation of the appendix, a small, finger-shaped pouch that projects from the colon on the lower right side of the abdomen.',
    symptoms: [
      'Sudden pain that begins around the navel and often shifts to the lower right abdomen',
      'Pain that worsens with movement, coughing, or sneezing',
      'Nausea and vomiting',
      'Loss of appetite',
      'Low-grade fever that may worsen as the illness progresses',
      'Abdominal bloating',
      'Constipation or diarrhea',
      'Tenderness in the lower right abdomen (especially at McBurney\'s point)'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'Often elevated, indicating infection'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'Elevated, indicating inflammation'
      },
      {
        id: 'NEUTROPHILS',
        status: 'HIGH',
        description: 'Often a higher percentage of neutrophils (neutrophilia) in bacterial infections'
      },
    ],
    medications: [
      'Antibiotics (to treat infection, may be used before surgery or, in some cases, as the primary treatment)',
      'Pain medications'
    ],
    lifestyle: [
      'Surgery (appendectomy) is the standard treatment in most cases',
      'Rest and recovery after surgery',
      'Gradual return to normal activities as tolerated',
      'Wound care if surgery was performed'
    ],
    diet: [
      'Clear liquids initially after surgery',
      'Advancing to a regular diet as tolerated',
      'Adequate hydration'
    ]
  },
  {
    id: 'arterial-thrombosis',
    name: 'Arterial Thrombosis',
    category: 'Cardiovascular',
    description: 'Formation of a blood clot (thrombus) within an artery, which can block blood flow and lead to serious complications like heart attack or stroke.',
    symptoms: [
      'Pain in the affected area (e.g., chest pain in heart attack, leg pain in peripheral artery disease)',
      'Numbness or weakness (e.g., one-sided weakness in stroke)',
      'Coldness in the affected limb',
      'Pale or bluish skin discoloration',
      'Loss of pulse in the affected limb',
      'Difficulty breathing (if the clot is in the lungs)',
      'Sudden, severe headache (in some types of stroke)'
    ],
    relatedParameters: [
      
      {
        id: 'PLATELETS',
        status: 'LOW',
        description: 'May be decreased in some cases, as platelets are consumed in clot formation'
      },
      {
        id: 'PT',
        status: 'HIGH',
        description: 'May be prolonged if the patient is on anticoagulant therapy'
      },
      
    ],
    medications: [
      'Anticoagulants (e.g., heparin, warfarin, direct oral anticoagulants)',
      'Antiplatelet agents (e.g., aspirin, clopidogrel)',
      'Thrombolytics ("clot-busting" drugs, e.g., tPA) - used in some cases to dissolve the clot',
      'Pain medications'
    ],
    lifestyle: [
      'Regular exercise (as recommended by a doctor)',
      'Heart-healthy diet',
      'Weight management',
      'Smoking cessation',
      'Management of underlying conditions (e.g., high blood pressure, high cholesterol, diabetes)',
      'Regular medical check-ups'
    ],
    diet: [
      'Low in saturated and trans fats',
      'Low in cholesterol',
      'Low in sodium',
      'Rich in fruits, vegetables, and whole grains',
      'Lean protein sources (fish, poultry, legumes)',
      'Limited alcohol consumption',
      'If on warfarin, maintain a consistent intake of vitamin K'
    ]
  },
  {
    id: 'arthritis',
    name: 'Arthritis',
    category: 'Musculoskeletal',
    description: 'Inflammation of one or more joints, causing pain, stiffness, and swelling. There are many types of arthritis, with osteoarthritis and rheumatoid arthritis being the most common.',
    symptoms: [
      'Joint pain',
      'Joint stiffness, especially in the morning or after periods of inactivity',
      'Swelling around the joints',
      'Redness of the skin around a joint',
      'Decreased range of motion',
      'Warmth around a joint',
      'In some types of arthritis, other symptoms like fatigue, fever, or rash may occur'
    ],
    relatedParameters: [
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'May be elevated, especially in inflammatory types of arthritis like rheumatoid arthritis'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'May be elevated, especially in inflammatory types of arthritis'
      },
      
    ],
    medications: [
      'NSAIDs (for pain and inflammation)',
      'Analgesics (for pain relief)',
      'Corticosteroids (for inflammation, used cautiously)',
      'DMARDs (disease-modifying antirheumatic drugs, for rheumatoid arthritis and other inflammatory types)',
      'Biologic agents (for rheumatoid arthritis and other inflammatory types)',
      'JAK inhibitors (for rheumatoid arthritis and other inflammatory types)'
    ],
    lifestyle: [
      'Regular exercise (low-impact exercises like swimming, walking, or cycling are often recommended)',
      'Physical therapy',
      'Occupational therapy',
      'Weight management',
      'Assistive devices if needed',
      'Joint protection techniques',
      'Heat or cold therapy'
    ],
    diet: [
      'Anti-inflammatory diet (e.g., Mediterranean diet)',
      'Foods rich in omega-3 fatty acids',
      'Adequate calcium and vitamin D intake (especially important if on corticosteroids)',
      'Limited processed foods, sugar, and saturated fats',
      'Proper hydration'
    ]
  },
  {
    id: 'asbestosis',
    name: 'Asbestosis',
    category: 'Respiratory',
    description: 'A chronic lung disease caused by inhaling asbestos fibers, leading to scarring of the lung tissue and shortness of breath.',
    symptoms: [
      'Shortness of breath, especially with exertion',
      'Persistent dry cough',
      'Chest tightness or pain',
      'Loss of appetite and weight loss',
      'Fingertips and toes that appear wider and rounder than normal (clubbing)',
      'Crackling sound when inhaling (heard with a stethoscope)'
    ],
    relatedParameters: [
      
    ],
    medications: [
      'There is no cure for asbestosis, treatment focuses on relieving symptoms',
      'Supplemental oxygen',
      'Bronchodilators (to help open airways)',
      'Pulmonary rehabilitation',
      'Medications for respiratory infections as needed'
    ],
    lifestyle: [
      'Smoking cessation (very important as smoking significantly increases the risk of lung cancer in people with asbestosis)',
      'Avoiding further exposure to asbestos',
      'Vaccinations against influenza and pneumococcal disease',
      'Regular medical check-ups',
      'Pulmonary rehabilitation'
    ],
    diet: [
      'Maintaining a healthy weight',
      'Adequate hydration',
      'Nutrient-rich diet to support overall health',
      'Small, frequent meals if shortness of breath makes eating difficult'
    ]
  },
  {
    id: 'asthma',
    name: 'Asthma',
    category: 'Respiratory',
    description: 'A chronic respiratory disease characterized by inflammation and narrowing of the airways, leading to wheezing, shortness of breath, chest tightness, and coughing.',
    symptoms: [
      'Wheezing (a whistling sound when breathing)',
      'Shortness of breath',
      'Chest tightness or pain',
      'Coughing, especially at night or early in the morning',
      'Difficulty talking',
      'Anxiety or panic',
      'Fatigue',
      'Symptoms that worsen with exercise, cold air, allergens, or respiratory infections'
    ],
    relatedParameters: [
      
      {
        id: 'EOSINOPHILS',
        status: 'HIGH',
        description: 'May be elevated in some types of asthma, particularly allergic asthma'
      }
    ],
    medications: [
      'Inhaled corticosteroids (reduce inflammation)',
      'Short-acting beta-agonists (SABAs) (relievers or rescue inhalers, provide quick relief of symptoms)',
      'Long-acting beta-agonists (LABAs) (used in combination with inhaled corticosteroids for long-term control)',
      'Leukotriene modifiers (e.g., montelukast)',
      'Theophylline (a bronchodilator, less commonly used now)',
      'Immunomodulators (e.g., omalizumab) for severe allergic asthma',
      'Oral corticosteroids (for short-term use during severe exacerbations)'
    ],
    lifestyle: [
      'Avoiding asthma triggers (e.g., allergens, irritants, smoke)',
      'Regular monitoring of asthma symptoms and peak flow readings',
      'Having an asthma action plan',
      'Regular exercise (with appropriate precautions)',
      'Maintaining a healthy weight',
      'Influenza and pneumococcal vaccinations'
    ],
    diet: [
      'Foods rich in omega-3 fatty acids (may have anti-inflammatory effects)',
      'Fruits and vegetables (rich in antioxidants)',
      'Adequate hydration',
      'Limited processed foods, sugar, and saturated fats',
      'Some evidence for vitamin D'
    ]
  },
  {
    id: 'ataxia',
    name: 'Ataxia',
    category: 'Neurological',
    description: 'A group of neurological disorders that affect balance, coordination, and speech, often resulting from damage to the cerebellum.',
    symptoms: [
      'Poor coordination and balance (often the first symptom)',
      'Unsteady gait (walking with feet wide apart)',
      'Difficulty with fine motor tasks (e.g., writing, buttoning clothes)',
      'Slurred speech (dysarthria)',
      'Difficulty swallowing (dysphagia)',
      'Abnormal eye movements (nystagmus)',
      'Tremors',
      'Fatigue'
    ],
    relatedParameters: [
      
    ],
    medications: [
      'There is no cure for most ataxias, treatment is aimed at managing symptoms',
      'Medications for tremor (e.g., propranolol, primidone)',
      'Medications for muscle stiffness or spasticity (e.g., baclofen)',
      'Medications for dizziness or vertigo',
      'Coenzyme Q10 or vitamin E (may be helpful in some specific types of ataxia)'
    ],
    lifestyle: [
      'Physical therapy to improve balance and coordination',
      'Occupational therapy to help with daily living skills',
      'Speech therapy for speech and swallowing difficulties',
      'Assistive devices (e.g., canes, walkers) as needed',
      'Home safety modifications',
      'Regular exercise as tolerated'
    ],
    diet: [
      'Healthy, balanced diet',
      'Adequate hydration',
      'Soft diet or thickened liquids if swallowing is difficult',
      'High-fiber diet to prevent constipation'
    ]
  },
  {
    id: 'atopic-eczema',
    name: 'Atopic Eczema',
    category: 'Dermatological',
    description: 'A chronic, inflammatory skin disease characterized by dry, itchy, and inflamed skin, often associated with allergies and asthma.',
    symptoms: [
      'Dry, itchy skin',
      'Red, inflamed patches of skin',
      'Small, raised bumps that may leak fluid and crust over',
      'Thickened, cracked, or scaly skin',
      'Raw, sensitive skin from scratching',
      'Rashes that often appear in the creases of the elbows or knees, or on the face, neck, and hands'
    ],
    relatedParameters: [
      {
        id: 'IgE',
        status: 'HIGH',
        description: 'Total serum IgE levels are often elevated'
      },
      {
        id: 'EOSINOPHILS',
        status: 'HIGH',
        description: 'May be elevated'
      },
      
    ],
    medications: [
      'Topical corticosteroids (reduce inflammation and itching)',
      'Topical calcineurin inhibitors (e.g., tacrolimus, pimecrolimus)',
      'Topical PDE4 inhibitors (e.g. crisaborole)',
      'Moisturizers (emollients) to keep the skin hydrated',
      'Antihistamines (may help relieve itching, especially at night)',
      'Antibiotics (if a bacterial skin infection is present)',
      'Systemic corticosteroids (for short-term use in severe cases)',
      'Immunosuppressants (e.g., cyclosporine) for severe, refractory cases',
      'Biologics (e.g., dupilumab) for moderate-to-severe atopic dermatitis'
    ],
    lifestyle: [
      'Regular moisturizing',
      'Identifying and avoiding triggers (e.g., allergens, irritants, certain fabrics)',
      'Lukewarm baths or showers',
      'Using mild soaps and detergents',
      'Keeping fingernails short to minimize scratching',
      'Stress management',
      'Wearing soft, breathable fabrics'
    ],
    diet: [
      'Identifying and avoiding any food allergens that may trigger eczema flares',
      'Some evidence for probiotics and omega-3 fatty acids',
      'Anti-inflammatory diet'
    ]
  },
  {
    id: 'atrial-fibrillation',
    name: 'Atrial Fibrillation',
    category: 'Cardiovascular',
    description: 'An irregular and often rapid heart rhythm that originates in the atria (the upper chambers of the heart), increasing the risk of stroke and heart failure.',
    symptoms: [
      'Heart palpitations (a sensation of a racing, fluttering, or irregular heartbeat)',
      'Shortness of breath',
      'Fatigue',
      'Dizziness or lightheadedness',
      'Chest pain or discomfort',
      'Weakness',
      'Fainting (syncope)',
      'Some people with atrial fibrillation have no symptoms'
    ],
    relatedParameters: [
      
      {
        id: 'HEART_RATE',
        status: 'HIGH',
        description: 'Often rapid (tachycardia), but can also be normal or slow'
      },
      
    ],
    medications: [
      'Rate control medications (e.g., beta-blockers, calcium channel blockers, digoxin) to slow the heart rate',
      'Rhythm control medications (e.g., amiodarone, flecainide, propafenone) to restore and maintain normal sinus rhythm',
      'Anticoagulants (e.g., warfarin, direct oral anticoagulants) to reduce the risk of stroke'
    ],
    lifestyle: [
      'Regular exercise (as recommended by a doctor)',
      'Heart-healthy diet',
      'Weight management',
      'Smoking cessation',
      'Limiting alcohol and caffeine intake',
      'Managing stress',
      'Regular medical check-ups, including monitoring of heart rhythm and anticoagulation if needed'
    ],
    diet: [
      'Low in saturated and trans fats',
      'Low in cholesterol',
      'Low in sodium',
      'Rich in fruits, vegetables, and whole grains',
      'Lean protein sources (fish, poultry, legumes)',
      'Limited alcohol and caffeine consumption',
      'If on warfarin, maintain a consistent intake of vitamin K'
    ]
  },
  {
    id: 'attention-deficit-hyperactivity-disorder',
    name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
    category: 'Neurological',
    description: 'A neurodevelopmental disorder characterized by a persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development.',
    symptoms: [
      'Inattention:',
      'Difficulty sustaining attention in tasks or play activities',
      'Easily distracted',
      'Does not seem to listen when spoken to directly',
      'Does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace',
      'Difficulty organizing tasks and activities',
      'Avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort',
      'Loses things necessary for tasks or activities',
      'Forgetful in daily activities',
      'Hyperactivity and Impulsivity:',
      'Fidgets with or taps hands or feet or squirms in seat',
      'Leaves seat in situations when remaining seated is expected',
      'Runs about or climbs in situations where it is inappropriate',
      'Unable to play or engage in leisure activities quietly',
      '"On the go" acting as if "driven by a motor"',
      'Talks excessively',
      'Blurts out answers before questions have been completed',
      'Difficulty waiting for their turn',
      'Interrupts or intrudes on others'
    ],
    relatedParameters: [
      
    ],
    medications: [
      'Stimulants (e.g., methylphenidate, amphetamines) - first-line treatment for many individuals',
      'Non-stimulants (e.g., atomoxetine, guanfacine, clonidine)'
    ],
    lifestyle: [
      'Behavioral therapy (for both children and adults)',
      'Parent training in behavior management',
      'Educational support and accommodations',
      'Regular exercise',
      'Consistent daily routines',
      'Organizational strategies',
      'Mindfulness and relaxation techniques',
      'Social skills training'
    ],
    diet: [
      'Balanced diet with regular meals',
      'Limiting processed foods and artificial additives (some evidence suggests they may worsen symptoms in some children)',
      'Adequate protein intake',
      'Omega-3 fatty acids (may have some benefit, but more research is needed)',
      'Some studies suggest that a healthy diet can improve overall well-being and potentially reduce ADHD symptoms'
    ]
  },
  {
    id: 'autism',
    name: 'Autism',
    category: 'Neurological',
    description: 'A neurodevelopmental disorder characterized by persistent deficits in social communication and social interaction, and restricted, repetitive patterns of behavior, interests, or activities.',
    symptoms: [
      'Social Communication and Interaction Deficits:',
      'Difficulty with social-emotional reciprocity',
      'Difficulty with nonverbal communication',
      'Insistence on sameness, inflexible adherence to routines, or ritualized patterns of verbal or nonverbal behavior',
      'Highly restricted, fixated interests that are abnormal in intensity or focus',
      'Hyper- or hyporeactivity to sensory input'
    ],
    relatedParameters: [],
      
    medications: [
      'There are no medications that cure autism, but some medications can help manage associated symptoms',
      'Antipsychotics (e.g., risperidone, aripiprazole) for irritability, aggression, and self-injurious behavior',
      'SSRIs for anxiety, depression, and repetitive behaviors',
      'Stimulants for inattention and hyperactivity if ADHD is also present',
      'Melatonin for sleep difficulties'
    ],
    lifestyle: [
      'Early intervention services',
      'Applied Behavior Analysis (ABA)',
      'Speech and language therapy',
      'Occupational therapy',
      'Social skills training',
      'Special education services',
      'Parent training and support',
      'Sensory integration therapy',
      'Visual supports and structured environments'
    ],
    diet: [
      'Some individuals with autism have food sensitivities or allergies',
      'Gluten-free/casein-free diets (some anecdotal reports of benefit, but scientific evidence is limited)',
      'Addressing nutritional deficiencies if present',
      'Some studies suggest that a healthy, balanced diet can support overall well-being in individuals with autism'
    ]
  },
  {
    id: 'bacterial-vaginosis',
    name: 'Bacterial Vaginosis',
    category: 'Gynecological',
    description: 'A common vaginal infection caused by an overgrowth of certain types of bacteria, disrupting the natural balance of the vaginal flora.',
    symptoms: [
      'Thin, white or gray vaginal discharge',
      'Strong fishy odor, especially after intercourse',
      'Vaginal itching or burning',
      'Pain, itching, or burning during urination'
    ],
    relatedParameters: [
      
    ],
    medications: [
      'Metronidazole (oral or vaginal gel)',
      'Clindamycin (oral or vaginal cream)',
      'Tinidazole (oral)'
    ],
    lifestyle: [
      'Avoid douching',
      'Limit the number of sex partners',
      'Use condoms consistently',
      'Avoid using scented soaps or feminine hygiene products in the vaginal area',
      'Wear breathable cotton underwear'
    ],
    diet: [
      'Some studies suggest that a diet rich in probiotics (e.g., yogurt with live cultures) may help maintain a healthy vaginal flora, but more research is needed',
      'Adequate hydration'
    ]
  },
  {
    id: 'benign-prostate-enlargement',
    name: 'Benign Prostate Enlargement',
    category: 'Urological',
    description: 'A noncancerous enlargement of the prostate gland that commonly occurs in older men, which can cause urinary symptoms.',
    symptoms: [
      'Frequent or urgent need to urinate',
      'Difficulty starting urination',
      'Weak urine stream',
      'Dribbling at the end of urination',
      'Incomplete emptying of the bladder',
      'Nocturia (frequent urination at night)',
      'Urinary tract infections',
      'Urinary retention (inability to urinate)'
    ],
    relatedParameters: [
      
    ],
    medications: [
      'Alpha-blockers (e.g., tamsulosin, alfuzosin, doxazosin) - relax the muscles of the prostate and bladder neck',
      '5-alpha-reductase inhibitors (e.g., finasteride, dutasteride) - shrink the size of the prostate',
      'Combination therapy (alpha-blocker and 5-alpha-reductase inhibitor)',
      'Phosphodiesterase-5 inhibitors (e.g. tadalafil) - can also be used to treat erectile dysfunction'
    ],
    lifestyle: [
      'Regular exercise',
      'Weight management',
      'Limiting fluid intake in the evening',
      'Avoiding or limiting caffeine and alcohol',
      'Double voiding (urinating, waiting a few moments, and then urinating again) to help empty the bladder more completely',
      'Regular medical check-ups to monitor prostate health'
    ],
    diet: [
      'Maintaining a healthy weight through a balanced diet',
      'Limited intake of red meat and saturated fats',
      'Some evidence suggests that a diet rich in fruits, vegetables, and whole grains may be beneficial for prostate health'
    ]
  },
  {
    id: 'cholangiocarcinoma',
    name: 'Cholangiocarcinoma',
    category: 'Oncological',
    description: 'A type of cancer that forms in the bile ducts, the tubes that carry bile from the liver to the gallbladder and small intestine.',
    symptoms: [
      'Jaundice (yellowing of skin and eyes)',
      'Itching',
      'Abdominal pain (especially upper right)',
      'Unexplained weight loss',
      'Loss of appetite',
      'Fever',
      'Pale stools',
      'Dark urine'
    ],
    relatedParameters: [
      {
        id: 'BILIRUBIN',
        status: 'HIGH',
        description: 'Total and direct bilirubin levels are often elevated'
      },
      {
        id: 'ALP',
        status: 'HIGH',
        description: 'Alkaline phosphatase is often significantly elevated'
      },
      {
        id: 'GGT',
        status: 'HIGH',
        description: 'Gamma-glutamyl transferase is often elevated'
      },
      
      {
        id: 'CEA',
        status: 'HIGH',
        description: 'Carcinoembryonic antigen (CEA) may also be elevated'
      },
    ],
    medications: [
      'Chemotherapy (e.g., gemcitabine, cisplatin, 5-fluorouracil)',
      'Targeted therapy (e.g., pemigatinib, infigratinib for tumors with specific genetic alterations)',
      'Immunotherapy (e.g., pembrolizumab) - may be used in some cases',
      'Pain medications',
      'Medications to relieve itching'
    ],
    lifestyle: [
      'Surgery, if possible, is the main potentially curative treatment',
      'Biliary stenting or drainage to relieve bile duct obstruction',
      'Radiation therapy',
      'Liver transplantation in select cases',
      'Palliative care to manage symptoms and improve quality of life',
      'Participation in clinical trials'
    ],
    diet: [
      'Maintaining adequate nutrition can be challenging due to symptoms like loss of appetite and weight loss',
      'Small, frequent meals may be easier to tolerate',
      'High-calorie, high-protein foods if tolerated',
      'Nutritional supplements may be needed',
      'Working with a registered dietitian can be helpful'
    ]
  },
  {
    id: 'binge-eating',
    name: 'Binge Eating',
    category: 'Neurological',
    description: 'An eating disorder characterized by recurrent episodes of eating large quantities of food, accompanied by a feeling of loss of control.',
    symptoms: [
      'Recurrent binge eating episodes',
      'Eating rapidly during binges',
      'Eating until uncomfortably full',
      'Eating large amounts when not hungry',
      'Eating alone due to embarrassment',
      'Feeling disgusted, depressed, or guilty after binges',
      'Marked distress regarding binge eating',
      'No regular compensatory behaviors (like purging)'
    ],
    relatedParameters: [
      {
        id: 'BMI',
        status: 'HIGH',
        description: 'Individuals with binge eating disorder are often overweight or obese, although it can occur in people of normal weight as well'
      },
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'May be elevated, especially if there is co-occurring insulin resistance or type 2 diabetes'
      },
      {
        id: 'TRIGLYCERIDES',
        status: 'HIGH',
        description: 'May show elevated cholesterol and triglycerides'
      },
      {
        id: 'TOTAL_CHOLESTEROL',
        status: 'HIGH',
        description: 'May show elevated cholesterol and triglycerides'
      }
    ],
    medications: [
      'Lisdexamfetamine (Vyvanse) - a stimulant approved for the treatment of moderate to severe binge eating disorder',
      'SSRIs (selective serotonin reuptake inhibitors) - may help reduce binge eating episodes and improve mood',
      'Topiramate (an anticonvulsant) - may help reduce binge eating episodes, but can have significant side effects'
    ],
    lifestyle: [
      'Psychotherapy (e.g., cognitive-behavioral therapy, dialectical behavior therapy, interpersonal therapy)',
      'Nutritional counseling',
      'Weight-loss programs if indicated and desired (but with a focus on healthy eating habits rather than restrictive dieting)',
      'Support groups',
      'Regular exercise'
    ],
    diet: [
      'Developing a healthy relationship with food',
      'Learning to identify and manage triggers for binge eating',
      'Eating regular, balanced meals',
      'Avoiding restrictive dieting',
      'Focusing on mindful eating',
      'Working with a registered dietitian can be helpful'
    ]
  },
  {
    id: 'bipolar-disorder',
    name: 'Bipolar Disorder',
    category: 'Psychiatric',
    description: 'A mental health condition with extreme mood shifts, from manic highs to depressive lows.',
    symptoms: [
      'Elevated mood (mania or hypomania)',
      'Increased energy and activity',
      'Inflated self-esteem',
      'Decreased need for sleep',
      'Talkativeness and racing thoughts',
      'Distractibility and impulsivity',
      'Depressed mood',
      'Loss of interest or pleasure'
    ],
    relatedParameters: [
      {
        id: 'TSH',
        status: 'NORMAL',
        description: 'Thyroid function tests are often done to rule out thyroid disorders, which can mimic symptoms of bipolar disorder'
      },
    ],
    medications: [
      'Mood stabilizers (e.g., lithium, valproic acid, lamotrigine)',
      'Antipsychotics (e.g., quetiapine, risperidone, aripiprazole, lurasidone)',
      'Antidepressants (used cautiously and often in combination with a mood stabilizer to avoid triggering a manic episode)',
      'Anti-anxiety medications (e.g., benzodiazepines) - for short-term use'
    ],
    lifestyle: [
      'Psychotherapy (e.g., cognitive-behavioral therapy, family-focused therapy, interpersonal and social rhythm therapy)',
      'Regular sleep schedule',
      'Stress management',
      'Regular exercise',
      'Avoiding alcohol and recreational drugs',
      'Mood charting to track symptoms and identify triggers',
      'Support groups',
      'Education about the illness for the individual and their family'
    ],
    diet: [
      'Maintaining a healthy, balanced diet',
      'Regular meal times',
      'Adequate hydration',
      'Some evidence suggests that omega-3 fatty acids may have mood-stabilizing effects, but more research is needed'
    ]
  },
  {
    id: 'bladder-cancer',
    name: 'Bladder Cancer',
    category: 'Oncological',
    description: 'A type of cancer that begins in the cells of the bladder, most commonly in the urothelial cells that line the inside of the bladder.',
    symptoms: [
      'Blood in urine (hematuria)',
      'Frequent urination',
      'Painful urination (dysuria)',
      'Urgency to urinate',
      'Lower back pain',
      'Pelvic pain',
      'Unexplained weight loss',
      'Fatigue'
    ],
    relatedParameters: [
      {
        id: 'URINALYSIS',
        value: 'Hematuria present',
        unit: '',
        normalRange: { min: 'No hematuria', max: 'No hematuria' },
        status: 'Hematuria',
        description: 'Microscopic or gross hematuria (blood in the urine) is a common finding'
      },
      {
        id: 'CYTOLOGY',
        value: 'Atypical cells present',
        unit: '',
        normalRange: { min: 'No atypical cells', max: 'No atypical cells' },
        status: 'Atypical cells present',
        description: 'Urine cytology may reveal abnormal cells shed from the bladder lining'
      },
      {
        id: 'CYSTOSCOPY',
        value: 'Tumor visualized',
        unit: '',
        normalRange: { min: 'Normal bladder', max: 'Normal bladder' },
        status: 'Tumor visualized',
        description: 'Cystoscopy allows direct visualization of the bladder lining and biopsy of suspicious areas'
      },
      {
        id: 'IMAGING',
        value: 'Mass in bladder',
        unit: '',
        normalRange: { min: 'Normal bladder', max: 'Normal bladder' },
        status: 'Mass in bladder',
        description: 'Imaging tests (e.g., CT, MRI, ultrasound) may show a mass or thickening of the bladder wall'
      }
    ],
    medications: [
      'Chemotherapy (intravesical or systemic)',
      'Immunotherapy (e.g., BCG for intravesical therapy, immune checkpoint inhibitors for advanced disease)',
      'Targeted therapy (e.g., erdafitinib for tumors with specific genetic alterations)',
      'Pain medications'
    ],
    lifestyle: [
      'Surgery (e.g., transurethral resection of bladder tumor (TURBT), cystectomy)',
      'Radiation therapy',
      'Bladder reconstruction or urinary diversion if the bladder is removed',
      'Regular follow-up with cystoscopy and imaging to monitor for recurrence',
      'Smoking cessation (smoking is a major risk factor for bladder cancer)'
    ],
    diet: [
      'Maintaining a healthy, balanced diet',
      'Adequate hydration',
      'Some studies suggest that a diet rich in fruits and vegetables may be beneficial'
    ]
  },
  {
    id: 'blood-poisoning',
    name: 'Blood Poisoning (Sepsis)',
    category: 'Infectious',
    description: 'A life-threatening condition that arises when the body\'s response to an infection damages its own tissues, potentially leading to shock, organ failure, and death.',
    symptoms: [
      'High heart rate (tachycardia)',
      'Fever or low body temperature (hypothermia)',
      'Rapid breathing (tachypnea)',
      'Confusion or altered mental status',
      'Extreme pain or discomfort',
      'Clammy or sweaty skin',
      'Decreased urine output',
      'Low blood pressure'
    ],
    relatedParameters: [
      {
        id: 'LACTATE',
        value: 4.0, // Assuming an elevated value for demonstration
        unit: 'mmol/L',
        normalRange: { min: 0.5, max: 2.2 },
        status: 'HIGH',
        description: 'Elevated lactate levels indicate tissue hypoperfusion (lack of oxygen)'
      },
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'White blood cell count may be elevated (or low in some cases)'
      },
      {
        id: 'BLOOD_CULTURES',
        value: 'Positive for bacteria', // Placeholder for blood culture results
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'Positive for bacteria',
        description: 'Blood cultures may identify the causative organism'
      },
      {
        id: 'PROCALCITONIN',
        value: 5.0,
        unit: 'ng/mL',
        normalRange: {min: 0.0, max: 0.5},
        status: 'HIGH',
        description: 'Procalcitonin is a marker of bacterial infection and may be elevated in sepsis'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'C-reactive protein is often elevated'
      }
    ],
    medications: [
      'Antibiotics (broad-spectrum initially, then tailored to the specific organism if identified)',
      'Intravenous fluids',
      'Vasopressors (to raise blood pressure)',
      'Oxygen therapy',
      'Inotropes (to support heart function)',
      'Corticosteroids (in some cases)'
    ],
    lifestyle: [
      'Early recognition and prompt treatment are crucial',
      'Hospitalization, often in an intensive care unit (ICU)',
      'Mechanical ventilation if respiratory failure occurs',
      'Source control (e.g., surgical drainage of an abscess)',
      'Supportive care for organ dysfunction'
    ],
    diet: [
      'Nutritional support is important, often via enteral or parenteral nutrition in critically ill patients',
      'Adequate hydration'
    ]
  },
  {
    id: 'bone-cancer',
    name: 'Bone Cancer',
    category: 'Oncological',
    description: 'Cancer that begins in the cells of a bone. It can be primary (originating in the bone) or secondary (metastasized from another part of the body).',
    symptoms: [
      'Bone pain',
      'Swelling or tenderness near the affected area',
      'A lump or mass that can be felt',
      'Unexplained weight loss',
      'Fatigue',
      'Fractures (in weakened bones)',
      'Limited range of motion',
      'Numbness or tingling'
    ],
    relatedParameters: [
      {
        id: 'ALP',
        status: 'HIGH',
        description: 'Alkaline phosphatase may be elevated, especially in osteosarcoma'
      },
      {
        id: 'CALCIUM',
        status: 'HIGH',
        description: 'May be elevated, especially if there is bone destruction'
      },
      {
        id: 'LDH',
        status: 'HIGH',
        description: 'Lactate dehydrogenase may be elevated'
      },
      {
        id: 'IMAGING',
        value: 'Bone lesion', // Placeholder for imaging findings
        unit: '',
        normalRange: { min: 'Normal bone', max: 'Normal bone' },
        status: 'Bone lesion',
        description: 'X-rays, CT scans, MRI, and bone scans can help identify bone lesions'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells', // Placeholder for biopsy results
        unit: '',
        normalRange: { min: 'Normal bone tissue', max: 'Normal bone tissue' },
        status: 'Malignant cells',
        description: 'A biopsy is necessary to confirm the diagnosis and determine the type of bone cancer'
      }
    ],
    medications: [
      'Chemotherapy',
      'Targeted therapy (e.g., denosumab for giant cell tumor of bone)',
      'Pain medications',
      'Bisphosphonates (to help strengthen bones and reduce pain)'
    ],
    lifestyle: [
      'Surgery (e.g., limb-sparing surgery, amputation)',
      'Radiation therapy',
      'Rehabilitation (physical therapy, occupational therapy)',
      'Assistive devices if needed',
      'Emotional and psychological support'
    ],
    diet: [
      'Maintaining a healthy, balanced diet',
      'Adequate calcium and vitamin D intake',
      'High-protein diet to support healing and recovery',
      'Nutritional counseling if needed'
    ]
  },
  {
    id: 'bowel-cancer',
    name: 'Bowel Cancer',
    category: 'Oncological',
    description: 'Cancer that develops in the large bowel, which includes the colon and rectum. Also known as colorectal cancer.',
    symptoms: [
      'Change in bowel habits',
      'Rectal bleeding or blood in stools',
      'Abdominal pain or cramping',
      'Unexplained weight loss',
      'Fatigue',
      'A feeling of incomplete bowel emptying',
      'Weakness',
      'Iron deficiency anemia'
    ],
    relatedParameters: [
      {
        id: 'CBC',
        value: 'Anemia',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Anemia',
        description: 'A complete blood count may show anemia (low red blood cell count or hemoglobin)'
      },
      {
        id: 'CEA',
        value: 10, // Assuming an elevated value for demonstration
        unit: 'ng/mL',
        normalRange: { min: 0, max: 5 },
        status: 'HIGH',
        description: 'Carcinoembryonic antigen (CEA) may be elevated, but it is not specific for bowel cancer'
      },
      {
        id: 'FOBT',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Fecal occult blood test (FOBT) may be positive, indicating blood in the stool'
      },
      {
        id: 'COLONOSCOPY',
        value: 'Tumor found',
        unit: '',
        normalRange: { min: 'Normal colon', max: 'Normal colon' },
        status: 'Tumor found',
        description: 'Colonoscopy allows direct visualization of the colon and rectum and biopsy of suspicious areas'
      },
      {
        id: 'IMAGING',
        value: 'Mass or thickening',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass or thickening',
        description: 'CT scans, MRI, or ultrasound may show a mass or thickening of the bowel wall'
      }
    ],
    medications: [
      'Chemotherapy (e.g., 5-fluorouracil, oxaliplatin, irinotecan)',
      'Targeted therapy (e.g., bevacizumab, cetuximab, panitumumab)',
      'Immunotherapy (e.g., pembrolizumab, nivolumab) - for certain types of advanced bowel cancer',
      'Pain medications'
    ],
    lifestyle: [
      'Surgery (e.g., colectomy, polypectomy)',
      'Radiation therapy',
      'Colostomy or ileostomy if needed',
      'Regular follow-up with colonoscopy and imaging to monitor for recurrence',
      'Lifestyle changes to reduce risk factors (e.g., diet, exercise, weight management)'
    ],
    diet: [
      'High-fiber diet (fruits, vegetables, whole grains)',
      'Limited intake of red and processed meats',
      'Maintaining a healthy weight',
      'Limiting alcohol consumption',
      'Adequate hydration'
    ]
  },
  {
    id: 'bowel-polyps',
    name: 'Bowel Polyps',
    category: 'Gastrointestinal',
    description: 'Small clumps of cells that form on the lining of the colon or rectum. Most are harmless, but some can develop into cancer over time.',
    symptoms: [
      'Rectal bleeding',
      'Change in stool color',
      'Change in bowel habits',
      'Abdominal pain',
      'Iron deficiency anemia',
      'Often asymptomatic'
    ],
    relatedParameters: [
      {
        id: 'FOBT',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Fecal occult blood test (FOBT) may be positive, indicating blood in the stool'
      },
      {
        id: 'COLONOSCOPY',
        value: 'Polyps found',
        unit: '',
        normalRange: { min: 'No polyps', max: 'No polyps' },
        status: 'Polyps found',
        description: 'Colonoscopy is the gold standard for detecting and removing polyps'
      },
      {
        id: 'SIGMOIDOSCOPY',
        value: 'Polyps found',
        unit: '',
        normalRange: { min: 'No polyps', max: 'No polyps' },
        status: 'Polyps found',
        description: 'Flexible sigmoidoscopy can detect polyps in the lower part of the colon'
      },
      {
        id: 'CT_COLONOGRAPHY',
        value: 'Polyps detected',
        unit: '',
        normalRange: { min: 'No polyps', max: 'No polyps' },
        status: 'Polyps detected',
        description: 'CT colonography (virtual colonoscopy) can also detect polyps'
      }
    ],
    medications: [
      'Generally not treated with medication, removal is the primary approach',
      'Aspirin or other NSAIDs may reduce the risk of new polyps in some people (but discuss with a doctor due to potential side effects)'
    ],
    lifestyle: [
      'Polypectomy (removal of polyps during colonoscopy or surgery)',
      'Regular screening colonoscopies, especially for people with a history of polyps or other risk factors',
      'Lifestyle changes to reduce risk factors (e.g., diet, exercise, weight management)'
    ],
    diet: [
      'High-fiber diet (fruits, vegetables, whole grains)',
      'Limited intake of red and processed meats',
      'Maintaining a healthy weight',
      'Limiting alcohol consumption',
      'Adequate calcium and vitamin D intake'
    ]
  },
  {
    id: 'brain-stem-death',
    name: 'Brain Stem Death',
    category: 'Neurological',
    description: 'The irreversible cessation of all functions of the brainstem, which controls essential life functions like breathing and consciousness. Considered a legal definition of death in many countries.',
    symptoms: [
      'Unresponsiveness to all external stimuli',
      'Absence of brainstem reflexes',
      'No spontaneous breathing',
      'Fixed and dilated pupils',
      'No response to pain',
      'No gag or cough reflex',
      'No eye movements'
    ],
    relatedParameters: [
      {
        id: 'APNEA_TEST',
        value: 'No respiratory effort',
        unit: '',
        normalRange: { min: 'Respiratory effort', max: 'Respiratory effort' },
        status: 'No respiratory effort',
        description: 'The apnea test confirms the absence of spontaneous breathing'
      },
      {
        id: 'EEG',
        value: 'Electrocerebral silence',
        unit: '',
        normalRange: { min: 'Brain activity', max: 'Brain activity' },
        status: 'Electrocerebral silence',
        description: 'An electroencephalogram (EEG) may show electrocerebral silence (no electrical activity in the brain), but it is not always required for diagnosis'
      },
      {
        id: 'CEREBRAL_BLOOD_FLOW_STUDY',
        value: 'No blood flow',
        unit: '',
        normalRange: { min: 'Blood flow present', max: 'Blood flow present' },
        status: 'No blood flow',
        description: 'Tests like cerebral angiography or nuclear brain scans may be used to confirm the absence of blood flow to the brain'
      },
      {
        id: 'CLINICAL_EXAM',
        value: 'Consistent with brainstem death',
        unit: '',
        normalRange: { min: 'Normal neurological function', max: 'Normal neurological function' },
        status: 'Consistent with brainstem death',
        description: 'The diagnosis is primarily based on a thorough clinical examination by trained physicians'
      }
    ],
    medications: [
      'No medications can reverse brainstem death',
      'Medications may be used to support organ function if organ donation is being considered'
    ],
    lifestyle: [
      'Brainstem death is irreversible and incompatible with life',
      'Life support is withdrawn after the diagnosis is confirmed',
      'Organ donation may be considered'
    ],
    diet: [
      'Not applicable'
    ]
  },
  {
    id: 'brain-tumours',
    name: 'Brain Tumours',
    category: 'Oncological',
    description: 'Masses or growths of abnormal cells in the brain. They can be benign (noncancerous) or malignant (cancerous) and can originate in the brain (primary) or spread from elsewhere (secondary).',
    symptoms: [
      'Headaches',
      'Seizures',
      'Nausea and vomiting',
      'Vision problems',
      'Weakness or numbness',
      'Difficulty with speech',
      'Cognitive changes',
      'Personality changes'
    ],
    relatedParameters: [
      {
        id: 'MRI_BRAIN',
        value: 'Mass or lesion present',
        unit: '',
        normalRange: { min: 'Normal brain', max: 'Normal brain' },
        status: 'Mass or lesion present',
        description: 'MRI is the primary imaging test for detecting and characterizing brain tumors'
      },
      {
        id: 'CT_SCAN',
        value: 'Mass or lesion may be seen',
        unit: '',
        normalRange: { min: 'Normal brain', max: 'Normal brain' },
        status: 'Mass or lesion may be seen',
        description: 'CT scans can also be used, especially in emergency situations'
      },
      {
        id: 'BIOPSY',
        value: 'Tumor type identified',
        unit: '',
        normalRange: { min: 'Normal brain tissue', max: 'Normal brain tissue' },
        status: 'Tumor type identified',
        description: 'A biopsy (often performed during surgery) is necessary to determine the type and grade of the tumor'
      },
      {
        id: 'CSF_ANALYSIS',
        value: 'Abnormal cells or protein',
        unit: '',
        normalRange: { min: 'Normal CSF', max: 'Normal CSF' },
        status: 'Abnormal cells or protein',
        description: 'Cerebrospinal fluid (CSF) analysis may be performed in some cases'
      }
    ],
    medications: [
      'Corticosteroids (to reduce swelling)',
      'Anticonvulsants (to prevent or control seizures)',
      'Chemotherapy',
      'Targeted therapy',
      'Pain medications'
    ],
    lifestyle: [
      'Surgery',
      'Radiation therapy',
      'Radiosurgery',
      'Rehabilitation (physical, occupational, and speech therapy)',
      'Supportive care',
      'Clinical trials'
    ],
    diet: [
      'Maintaining a healthy, balanced diet',
      'Nutritional counseling if needed',
      'Some specific dietary recommendations may be made depending on the type of treatment and side effects'
    ]
  },
  {
    id: 'breast-cancer',
    name: 'Breast Cancer',
    category: 'Oncological',
    description: 'Cancer that forms in the cells of the breasts. It is most common in women but can also occur in men.',
    symptoms: [
      'Breast lump or thickening',
      'Change in breast size or shape',
      'Nipple discharge',
      'Nipple inversion',
      'Skin dimpling or puckering',
      'Redness or scaling of breast skin',
      'Swollen lymph nodes in armpit',
      'Breast pain'
    ],
    relatedParameters: [
      {
        id: 'MAMMOGRAM',
        value: 'Suspicious mass or calcifications',
        unit: '',
        normalRange: { min: 'Normal breast tissue', max: 'Normal breast tissue' },
        status: 'Suspicious mass or calcifications',
        description: 'Mammography is a primary screening and diagnostic tool for breast cancer'
      },
      {
        id: 'ULTRASOUND',
        value: 'Mass or abnormal area',
        unit: '',
        normalRange: { min: 'Normal breast tissue', max: 'Normal breast tissue' },
        status: 'Mass or abnormal area',
        description: 'Breast ultrasound can further evaluate abnormalities seen on mammography'
      },
      {
        id: 'MRI_BREAST',
        value: 'Suspicious area',
        unit: '',
        normalRange: { min: 'Normal breast tissue', max: 'Normal breast tissue' },
        status: 'Suspicious area',
        description: 'Breast MRI may be used in certain cases, such as for women at high risk'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal breast tissue', max: 'Normal breast tissue' },
        status: 'Malignant cells',
        description: 'A biopsy (e.g., fine-needle aspiration, core needle biopsy, surgical biopsy) is necessary to confirm the diagnosis'
      },
      {
        id: 'HORMONE_RECEPTOR_STATUS',
        value: 'ER+ and/or PR+',
        unit: '',
        normalRange: { min: 'ER- and PR-', max: 'ER- and PR-' },
        status: 'ER+ and/or PR+',
        description: 'Tests for estrogen receptor (ER) and progesterone receptor (PR) status help guide treatment decisions'
      },
      {
        id: 'HER2_STATUS',
        value: 'HER2+',
        unit: '',
        normalRange: { min: 'HER2-', max: 'HER2-' },
        status: 'HER2+',
        description: 'Tests for HER2 (human epidermal growth factor receptor 2) status also guide treatment'
      }
    ],
    medications: [
      'Chemotherapy',
      'Hormonal therapy (e.g., tamoxifen, aromatase inhibitors)',
      'Targeted therapy (e.g., trastuzumab, pertuzumab for HER2+ cancers)',
      'Immunotherapy (e.g., pembrolizumab) - for certain types of advanced breast cancer',
      'Pain medications'
    ],
    lifestyle: [
      'Surgery (e.g., lumpectomy, mastectomy)',
      'Radiation therapy',
      'Breast reconstruction',
      'Lymph node removal or biopsy',
      'Physical therapy for lymphedema',
      'Emotional and psychological support'
    ],
    diet: [
      'Maintaining a healthy weight',
      'Limiting alcohol consumption',
      'Eating a diet rich in fruits, vegetables, and whole grains',
      'Limiting red and processed meats',
      'Some studies suggest that a healthy diet may improve outcomes after a breast cancer diagnosis'
    ]
  },
  {
    id: 'bronchiectasis',
    name: 'Bronchiectasis',
    category: 'Respiratory',
    description: 'A chronic lung condition where the airways (bronchi) become widened and damaged, leading to a buildup of mucus and recurrent infections.',
    symptoms: [
      'Chronic cough',
      'Production of large amounts of sputum',
      'Shortness of breath',
      'Wheezing',
      'Recurrent respiratory infections',
      'Chest pain',
      'Fatigue',
      'Coughing up blood (hemoptysis)'
    ],
    relatedParameters: [
      {
        id: 'CHEST_X_RAY',
        value: 'Abnormal findings',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal findings',
        description: 'May show bronchial wall thickening or dilated airways, but often not diagnostic'
      },
      {
        id: 'CT_CHEST',
        value: 'Bronchial wall thickening, dilated airways',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bronchial wall thickening, dilated airways',
        description: 'High-resolution CT scan is the gold standard for diagnosing bronchiectasis'
      },
      {
        id: 'SPUTUM_CULTURE',
        value: 'Bacterial growth',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'Bacterial growth',
        description: 'Sputum culture can identify bacteria causing infections'
      },
      {
        id: 'PFTs',
        value: 'Obstructive or restrictive pattern',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Obstructive or restrictive pattern',
        description: 'Pulmonary function tests (PFTs) may show airflow obstruction or a restrictive pattern'
      }
    ],
    medications: [
      'Antibiotics (to treat and prevent infections)',
      'Bronchodilators (to help open airways)',
      'Mucolytics (to thin mucus)',
      'Inhaled corticosteroids (to reduce inflammation in some cases)',
      'Expectorants (to help loosen mucus)'
    ],
    lifestyle: [
      'Airway clearance techniques (e.g., chest physiotherapy, postural drainage)',
      'Regular exercise',
      'Vaccinations (influenza, pneumococcal)',
      'Avoiding respiratory irritants (e.g., smoke, pollution)',
      'Prompt treatment of respiratory infections',
      'Pulmonary rehabilitation'
    ],
    diet: [
      'Maintaining a healthy, balanced diet',
      'Adequate hydration to help thin mucus',
      'Nutritional support if needed due to increased energy expenditure from chronic cough and infections'
    ]
  },
  {
    id: 'bronchitis',
    name: 'Bronchitis',
    category: 'Respiratory',
    description: 'Inflammation of the lining of the bronchial tubes, which carry air to and from the lungs. It can be acute (short-term) or chronic (long-lasting).',
    symptoms: [
      'Cough',
      'Production of mucus (sputum)',
      'Shortness of breath',
      'Wheezing',
      'Chest discomfort',
      'Fatigue',
      'Low-grade fever (in acute bronchitis)',
      'Sore throat'
    ],
    relatedParameters: [
      {
        id: 'CHEST_X_RAY',
        value: 'Usually normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'NORMAL',
        description: 'Chest X-ray is usually normal in acute bronchitis but may be done to rule out pneumonia'
      },
      {
        id: 'SPUTUM_CULTURE',
        value: 'May show bacteria or virus',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'May show bacteria or virus',
        description: 'Sputum culture is not usually necessary for acute bronchitis but may be done in chronic bronchitis'
      },
      {
        id: 'PFTs',
        value: 'Usually normal in acute bronchitis',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Usually normal in acute bronchitis',
        description: 'Pulmonary function tests may be done in chronic bronchitis and may show airflow limitation'
      }
    ],
    medications: [
      'Usually not antibiotics for acute bronchitis (as it is often viral)',
      'Cough suppressants (use with caution)',
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Bronchodilators (for wheezing)',
      'Inhaled corticosteroids (for chronic bronchitis)'
    ],
    lifestyle: [
      'Rest',
      'Drinking plenty of fluids',
      'Using a humidifier or taking hot showers',
      'Avoiding smoke and other irritants',
      'Over-the-counter pain relievers',
      'Smoking cessation (for chronic bronchitis)'
    ],
    diet: [
      'Adequate hydration',
      'Warm fluids (e.g., tea, soup) may help soothe a sore throat and loosen mucus',
      'Honey may help relieve cough (but do not give to children under 1 year old)'
    ]
  },
  {
    id: 'bulimia',
    name: 'Bulimia Nervosa',
    category: 'Psychiatric',
    description: 'An eating disorder characterized by recurrent binge eating followed by compensatory behaviors such as self-induced vomiting, laxative misuse, or excessive exercise.',
    symptoms: [
      'Recurrent binge eating episodes',
      'Recurrent inappropriate compensatory behavior',
      'Self-evaluation unduly influenced by body shape and weight',
      'Binge eating and compensatory behaviors occur at least once a week for 3 months',
      'Feeling a lack of control over eating during binges',
      'Normal weight or overweight'
    ],
    relatedParameters: [
      {
        id: 'ELECTROLYTES',
        value: 'Imbalances',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'LOW',
        description: 'Electrolyte imbalances (e.g., low potassium, low chloride) can occur due to purging behaviors'
      },
      {
        id: 'AMYLASE',
        status: 'HIGH',
        description: 'Serum amylase may be elevated due to salivary gland enlargement from frequent vomiting'
      },
      {
        id: 'CBC',
        status: 'NORMAL',
        description: 'Complete blood count is usually normal, but anemia may be present in some cases'
      },
      {
        id: 'EKG',
        value: 'Abnormalities',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Abnormalities',
        description: 'May be abnormal due to electrolyte imbalances'
      }
    ],
    medications: [
      'SSRIs (selective serotonin reuptake inhibitors, e.g., fluoxetine) - may help reduce binge-purge cycles and improve mood'
    ],
    lifestyle: [
      'Psychotherapy (e.g., cognitive-behavioral therapy, family therapy, interpersonal therapy)',
      'Nutritional counseling',
      'Medical monitoring to address physical health complications',
      'Support groups',
      'Hospitalization or residential treatment in severe cases'
    ],
    diet: [
      'Developing a healthy relationship with food',
      'Learning to identify and manage triggers for binge eating and purging',
      'Eating regular, balanced meals',
      'Avoiding restrictive dieting',
      'Focusing on mindful eating',
      'Working with a registered dietitian can be helpful'
    ]
  },
  {
    id: 'bunion',
    name: 'Bunion',
    category: 'Musculoskeletal',
    description: 'A bony bump that forms on the joint at the base of the big toe, often caused by the big toe pushing against the next toe, forcing the joint of the big toe to get bigger and stick out.',
    symptoms: [
      'A bulging bump on the outside of the base of the big toe',
      'Pain, soreness, or inflammation around the big toe joint',
      'Swelling, redness, or warmth around the joint',
      'Corns or calluses where the first and second toes overlap',
      'Limited movement of the big toe',
      'Difficulty wearing shoes'
    ],
    relatedParameters: [
      {
        id: 'X_RAY',
        value: 'Bony deformity',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bony deformity',
        description: 'X-rays of the foot can show the bony deformity and assess the severity of the bunion'
      },
      {
        id: 'PHYSICAL_EXAM',
        value: 'Visible bump, tenderness',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Visible bump, tenderness',
        description: 'A physical exam can usually diagnose a bunion based on the visible bump and tenderness'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Cortisone injections (to reduce inflammation, but not a long-term solution)'
    ],
    lifestyle: [
      'Wearing comfortable shoes with a wide toe box',
      'Using bunion pads or cushions',
      'Applying ice to the affected area',
      'Orthotics (shoe inserts)',
      'Maintaining a healthy weight',
      'Surgery (bunionectomy) in severe cases'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight can help reduce stress on the feet'
    ]
  },
  {
    id: 'carcinoid-syndrome',
    name: 'Carcinoid Syndrome',
    category: 'Oncological',
    description: 'A group of symptoms associated with carcinoid tumors, which are slow-growing neuroendocrine tumors that can release hormones such as serotonin into the bloodstream.',
    symptoms: [
      'Skin flushing',
      'Diarrhea',
      'Wheezing or difficulty breathing',
      'Rapid heartbeat',
      'Abdominal cramping',
      'Facial telangiectasias (spider veins)',
      'Heart valve damage (in advanced cases)'
    ],
    relatedParameters: [
      {
        id: '5_HIAA',
        value: 50, // Assuming an elevated value for demonstration
        unit: 'mg/day',
        normalRange: { min: 2, max: 8 },
        status: 'HIGH',
        description: '24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA) is often elevated'
      },
      {
        id: 'CHROMOGRANIN_A',
        value: 200,
        unit: 'ng/mL',
        normalRange: {min: 0, max: 100},
        status: 'HIGH',
        description: 'Serum chromogranin A may be elevated'
      },
      {
        id: 'SEROTONIN',
        status: 'HIGH',
        description: 'Blood serotonin levels may be elevated'
      },
      {
        id: 'IMAGING',
        value: 'Tumor found',
        unit: '',
        normalRange: { min: 'No tumor', max: 'No tumor' },
        status: 'Tumor found',
        description: 'Imaging tests (e.g., CT, MRI, Octreoscan) can help locate the carcinoid tumor'
      }
    ],
    medications: [
      'Somatostatin analogs (e.g., octreotide, lanreotide) - to reduce hormone release and control symptoms',
      'Interferon-alpha - may help control tumor growth and symptoms',
      'Telotristat ethyl - inhibits serotonin synthesis and is used to treat diarrhea',
      'Chemotherapy - for advanced or metastatic disease',
      'Targeted therapy - for advanced or metastatic disease'
    ],
    lifestyle: [
      'Surgery to remove the carcinoid tumor, if possible',
      'Liver-directed therapy (e.g., embolization, radiofrequency ablation) for liver metastases',
      'Avoiding triggers that worsen flushing (e.g., alcohol, stress, certain foods)',
      'Regular follow-up with imaging and biochemical tests'
    ],
    diet: [
      'Avoiding foods that trigger flushing (e.g., alcohol, spicy foods, large meals, certain cheeses, chocolate, foods high in tyramine)',
      'Small, frequent meals may be better tolerated than large meals',
      'Adequate hydration, especially if diarrhea is present',
      'Nutritional counseling may be helpful'
    ]
  },
  {
    id: 'cardiovascular-disease',
    name: 'Cardiovascular Disease',
    category: 'Cardiovascular',
    description: 'A group of disorders of the heart and blood vessels, including coronary artery disease, heart failure, stroke, and peripheral artery disease. It is a leading cause of death worldwide.',
    symptoms: [
      'Chest pain or discomfort (angina)',
      'Shortness of breath',
      'Pain, numbness, weakness, or coldness in the legs or arms',
      'Pain in the neck, jaw, throat, upper abdomen, or back',
      'Fluttering in the chest',
      'Dizziness or lightheadedness',
      'Fatigue',
      'Swelling in the legs, ankles, or feet'
    ],
    relatedParameters: [
      {
        id: 'TOTAL_CHOLESTEROL',
        status: 'HIGH',
        description: 'Elevated total cholesterol is a risk factor'
      },
      {
        id: 'LDL',
        status: 'HIGH',
        description: 'Elevated low-density lipoprotein (LDL) cholesterol ("bad" cholesterol) is a major risk factor'
      },
      {
        id: 'HDL',
        status: 'LOW',
        description: 'Low high-density lipoprotein (HDL) cholesterol ("good" cholesterol) is a risk factor'
      },
      {
        id: 'TRIGLYCERIDES',
        status: 'HIGH',
        description: 'Elevated triglycerides are a risk factor'
      },
      {
        id: 'BLOOD_PRESSURE',
        status: 'HIGH',
        description: 'High blood pressure (hypertension) is a major risk factor'
      },
      {
        id: 'hs_CRP',
        value: 4.0,
        unit: 'mg/L',
        normalRange: {min: 0.0, max: 3.0},
        status: 'HIGH',
        description: 'High-sensitivity C-reactive protein (hs-CRP) may be elevated, indicating inflammation'
      },
      {
        id: 'ECG',
        value: 'Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormalities',
        description: 'Electrocardiogram (ECG) may show abnormalities depending on the specific type of cardiovascular disease'
      }
    ],
    medications: [
      'Statins (to lower cholesterol)',
      'Aspirin or other antiplatelet agents (to prevent blood clots)',
      'Beta-blockers (to lower blood pressure and heart rate)',
      'ACE inhibitors or ARBs (to lower blood pressure and have other benefits)',
      'Calcium channel blockers (to lower blood pressure and treat angina)',
      'Diuretics (to reduce fluid buildup and lower blood pressure)',
      'Nitrates (to treat angina)',
      'Anticoagulants (to prevent blood clots in certain conditions)'
    ],
    lifestyle: [
      'Heart-healthy diet',
      'Regular physical activity',
      'Maintaining a healthy weight',
      'Smoking cessation',
      'Limiting alcohol consumption',
      'Managing stress',
      'Regular medical check-ups and blood pressure monitoring'
    ],
    diet: [
      'Low in saturated and trans fats',
      'Low in cholesterol',
      'Low in sodium',
      'Rich in fruits, vegetables, and whole grains',
      'Lean protein sources (fish, poultry, legumes)',
      'Limited intake of added sugars',
      'Portion control'
    ]
  },
  {
    id: 'carpal-tunnel-syndrome',
    name: 'Carpal Tunnel Syndrome',
    category: 'Musculoskeletal',
    description: 'A condition caused by compression of the median nerve as it travels through the carpal tunnel in the wrist, leading to numbness, tingling, and pain in the hand and arm.',
    symptoms: [
      'Numbness or tingling in the hand and fingers (especially the thumb, index, middle, and part of the ring finger)',
      'Pain in the wrist, hand, or forearm',
      'Weakness in the hand',
      'Difficulty gripping or holding objects',
      'Symptoms often worse at night',
      'Burning sensation in the fingers'
    ],
    relatedParameters: [
      {
        id: 'NERVE_CONDUCTION_STUDIES',
        value: 'Slowed conduction velocity',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Slowed conduction velocity',
        description: 'Nerve conduction studies can show slowed conduction velocity across the carpal tunnel'
      },
      {
        id: 'EMG',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Electromyography (EMG) may show signs of nerve damage'
      },
      {
        id: 'TINEL_SIGN',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'TINEL_SIGN',
        description: 'Tapping over the median nerve at the wrist may reproduce symptoms (positive Tinel\'s sign)'
      },
      {
        id: 'PHALEN_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Holding the wrists in a flexed position for 60 seconds may reproduce symptoms (positive Phalen\'s test)'
      }
    ],
    medications: [
      'NSAIDs (e.g., ibuprofen, naproxen) - to reduce pain and inflammation',
      'Corticosteroid injections - to reduce inflammation and relieve pressure on the median nerve'
    ],
    lifestyle: [
      'Wrist splinting (especially at night)',
      'Avoiding activities that worsen symptoms',
      'Ergonomic adjustments to workstations',
      'Stretching exercises',
      'Surgery (carpal tunnel release) in severe cases or when conservative treatments fail'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight and reducing inflammation through diet may be beneficial'
    ]
  },
  {
    id: 'catarrh',
    name: 'Catarrh',
    category: 'Respiratory',
    description: 'Excessive buildup of mucus in the nose or throat, often associated with inflammation of the mucous membranes.',
    symptoms: [
      'Runny or stuffy nose',
      'Postnasal drip',
      'Throat clearing',
      'Cough',
      'Headache',
      'Facial pain or pressure',
      'Reduced sense of smell or taste',
      'Feeling of fullness in ears'
    ],
    relatedParameters: [
      {
        id: 'NASAL_ENDOSCOPY',
        value: 'Inflammation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation',
        description: 'May show inflammation or swelling of the nasal passages'
      },
      {
        id: 'SINUS_CT',
        value: 'Mucosal thickening',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mucosal thickening',
        description: 'May reveal mucosal thickening or fluid in the sinuses if sinusitis is present'
      }
    ],
    medications: [
      'Decongestants (e.g., pseudoephedrine, oxymetazoline)',
      'Nasal saline irrigation or sprays',
      'Antihistamines (if allergy-related)',
      'Nasal corticosteroids (for inflammation)',
      'Expectorants (e.g., guaifenesin) to help loosen mucus'
    ],
    lifestyle: [
      'Drinking plenty of fluids',
      'Using a humidifier',
      'Avoiding irritants (e.g., smoke, fumes)',
      'Steam inhalation',
      'Elevating the head during sleep',
      'Nasal saline irrigation'
    ],
    diet: [
      'Warm fluids (e.g., soup, tea) may help soothe and loosen mucus',
      'Spicy foods may temporarily clear nasal passages',
      'Adequate hydration'
    ]
  },
  {
    id: 'cellulitis',
    name: 'Cellulitis',
    category: 'Dermatological',
    description: 'A common and potentially serious bacterial skin infection that affects the deeper layers of skin and the tissues underneath.',
    symptoms: [
      'Redness of skin',
      'Swelling',
      'Pain or tenderness',
      'Warmth',
      'Skin tightness or glossiness',
      'Fever',
      'Chills',
      'Red streaking from affected area'
    ],
    relatedParameters: [
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'White blood cell count may be elevated'
      },
      {
        id: 'BLOOD_CULTURES',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'May be positive if the infection has spread to the bloodstream'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'C-reactive protein is usually elevated'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Erythrocyte sedimentation rate may be elevated'
      },
      {
        id: 'SKIN_BIOPSY',
        value: 'Inflammation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation',
        description: 'May show inflammation and bacteria in the deeper layers of skin, but not routinely needed'
      }
    ],
    medications: [
      'Antibiotics (oral or intravenous, depending on severity)',
      'Pain relievers (e.g., acetaminophen, ibuprofen)'
    ],
    lifestyle: [
      'Rest',
      'Elevating the affected limb',
      'Keeping the area clean and covered',
      'Hospitalization for severe cases or if systemic symptoms are present',
      'Completing the full course of antibiotics'
    ],
    diet: [
      'Generally not directly related to diet, but adequate hydration and nutrition are important for healing'
    ]
  },
  {
    id: 'cerebral-palsy',
    name: 'Cerebral Palsy',
    category: 'Neurological',
    description: 'A group of disorders that affect a person\'s ability to move and maintain balance and posture, caused by abnormal brain development or damage to the developing brain.',
    symptoms: [
      'Muscle stiffness or floppiness',
      'Muscle weakness',
      'Tremors or involuntary movements',
      'Delays in motor skill milestones',
      'Difficulty walking',
      'Difficulty with fine motor tasks',
      'Excessive drooling or swallowing problems',
      'Speech delays or difficulties'
    ],
    relatedParameters: [
      {
        id: 'MRI_BRAIN',
        value: 'Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormalities',
        description: 'May show brain abnormalities, such as periventricular leukomalacia or brain malformations'
      },
      {
        id: 'GENETIC_TESTING',
        value: 'Genetic variants',
        unit: '',
        normalRange: { min: 'No variants', max: 'No variants' },
        status: 'Genetic variants',
        description: 'May be considered in some cases to identify underlying genetic causes'
      },
      {
        id: 'DEVELOPMENTAL_ASSESSMENT',
        value: 'Delays',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Delays',
        description: 'Standardized developmental assessments can identify delays in motor, cognitive, and other domains'
      }
    ],
    medications: [
      'Muscle relaxants (e.g., baclofen, diazepam)',
      'Botulinum toxin injections (for localized spasticity)',
      'Anticonvulsants (for seizures)',
      'Anticholinergics (to help with drooling)'
    ],
    lifestyle: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Assistive devices (e.g., braces, wheelchairs)',
      'Recreational therapy',
      'Early intervention services',
      'Special education'
    ],
    diet: [
      'Generally not directly related to diet, but adequate nutrition and hydration are important',
      'Some individuals may have feeding difficulties and require specialized diets or feeding tubes'
    ]
  },
  {
    id: 'cervical-cancer',
    name: 'Cervical Cancer',
    category: 'Oncological',
    description: 'A type of cancer that occurs in the cells of the cervix, the lower part of the uterus that connects to the vagina. Most cases are caused by human papillomavirus (HPV) infection.',
    symptoms: [
      'Abnormal vaginal bleeding',
      'Unusual vaginal discharge',
      'Pelvic pain',
      'Pain during intercourse',
      'Often asymptomatic in early stages'
    ],
    relatedParameters: [
      {
        id: 'PAP_TEST',
        value: 'Abnormal cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal cells',
        description: 'Pap test (Pap smear) may show abnormal cervical cells'
      },
      {
        id: 'HPV_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'HPV test may detect high-risk HPV types'
      },
      {
        id: 'COLPOSCOPY',
        value: 'Abnormal findings',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal findings',
        description: 'Colposcopy with biopsy can confirm the diagnosis and determine the stage of cancer'
      },
      {
        id: 'IMAGING',
        value: 'Tumor or spread',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor or spread',
        description: 'Imaging tests (e.g., CT, MRI, PET) may be used to assess the extent of the cancer'
      }
    ],
    medications: [
      'Chemotherapy',
      'Targeted therapy (e.g., bevacizumab)',
      'Immunotherapy (e.g., pembrolizumab)',
      'Pain medications'
    ],
    lifestyle: [
      'Surgery (e.g., hysterectomy, trachelectomy)',
      'Radiation therapy',
      'HPV vaccination (prevention)',
      'Regular cervical cancer screening',
      'Smoking cessation'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy diet is important during and after treatment'
    ]
  },
  {
    id: 'cervical-spondylosis',
    name: 'Cervical Spondylosis',
    category: 'Musculoskeletal',
    description: 'Age-related wear and tear affecting the spinal disks in the neck, leading to neck pain, stiffness, and other symptoms.',
    symptoms: [
      'Neck pain and stiffness',
      'Headache',
      'Pain radiating to shoulders or arms',
      'Numbness or tingling in arms or hands',
      'Muscle weakness',
      'Difficulty walking',
      'Loss of balance',
      'Grinding sensation'
    ],
    relatedParameters: [
      {
        id: 'X_RAY',
        value: 'Degenerative changes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Degenerative changes',
        description: 'X-rays may show bone spurs, loss of disk height, and other degenerative changes'
      },
      {
        id: 'MRI',
        value: 'Disk herniation or spinal cord compression',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Disk herniation or spinal cord compression',
        description: 'MRI can assess disk herniation, spinal cord compression, and nerve root impingement'
      },
      {
        id: 'CT',
        value: 'Bone spurs or narrowing of spinal canal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bone spurs or narrowing of spinal canal',
        description: 'CT scans provide detailed images of bone and can show bone spurs or narrowing of the spinal canal'
      },
      {
        id: 'EMG',
        value: 'Nerve damage',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Nerve damage',
        description: 'May show abnormalities indicating nerve damage'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'NSAIDs',
      'Muscle relaxants',
      'Corticosteroid injections',
      'Antidepressants (for chronic pain)'
    ],
    lifestyle: [
      'Physical therapy',
      'Neck exercises',
      'Posture improvement',
      'Heat or cold therapy',
      'Neck collar (for short-term use)',
      'Ergonomic adjustments',
      'Surgery in severe cases'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight and reducing inflammation through diet may be beneficial'
    ]
  },
  {
    id: 'chest-and-rib-injury',
    name: 'Chest and Rib Injury',
    category: 'Trauma',
    description: 'Injuries to the chest wall, including the ribs, muscles, and underlying organs, often caused by blunt or penetrating trauma.',
    symptoms: [
      'Chest pain',
      'Difficulty breathing',
      'Shortness of breath',
      'Pain with movement or breathing',
      'Bruising or swelling',
      'Tenderness',
      'Crepitus (grating sound)',
      'Coughing up blood'
    ],
    relatedParameters: [
      {
        id: 'CHEST_X_RAY',
        value: 'Fractures or pneumothorax',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Fractures or pneumothorax',
        description: 'May show rib fractures, pneumothorax (collapsed lung), or hemothorax (blood in the chest cavity)'
      },
      {
        id: 'CT_CHEST',
        value: 'Detailed assessment',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Detailed assessment',
        description: 'Provides more detailed images of the chest wall and underlying organs'
      },
      {
        id: 'ULTRASOUND',
        value: 'Pneumothorax or hemothorax',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Pneumothorax or hemothorax',
        description: 'Can be used to quickly assess for pneumothorax or hemothorax'
      },
      {
        id: 'ABG',
        value: 'Abnormal',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Abnormal',
        description: 'May be abnormal if there is impaired gas exchange'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, ibuprofen, opioids)',
      'Nerve blocks (for severe pain)'
    ],
    lifestyle: [
      'Rest',
      'Avoiding activities that worsen pain',
      'Incentive spirometry (to prevent pneumonia)',
      'Chest tube insertion (for pneumothorax or hemothorax)',
      'Surgery in some cases (e.g., for flail chest or penetrating injuries)'
    ],
    diet: [
      'Generally not directly related to diet, but adequate nutrition is important for healing'
    ]
  },
  {
    id: 'chest-infection',
    name: 'Chest Infection',
    category: 'Respiratory',
    description: 'An infection of the lungs or airways, including bronchitis and pneumonia. Can be caused by viruses, bacteria, or fungi.',
    symptoms: [
      'Cough',
      'Sputum production',
      'Shortness of breath',
      'Chest pain or discomfort',
      'Fever',
      'Chills',
      'Fatigue',
      'Wheezing'
    ],
    relatedParameters: [
      {
        id: 'CHEST_X_RAY',
        value: 'Infiltrates or consolidation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Infiltrates or consolidation',
        description: 'May show infiltrates or consolidation in pneumonia'
      },
      {
        id: 'SPUTUM_CULTURE',
        value: 'Pathogen identified',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'Pathogen identified',
        description: 'Can identify the causative organism (bacterial, viral, or fungal)'
      },
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'White blood cell count may be elevated, especially in bacterial infections'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'C-reactive protein may be elevated'
      },
      {
        id: 'BLOOD_GASES',
        value: 'Hypoxemia',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Hypoxemia',
        description: 'May show low oxygen levels in severe cases'
      }
    ],
    medications: [
      'Antibiotics (for bacterial infections)',
      'Antivirals (for some viral infections)',
      'Antifungals (for fungal infections)',
      'Cough suppressants or expectorants',
      'Pain relievers (e.g., acetaminophen, ibuprofen)'
    ],
    lifestyle: [
      'Rest',
      'Drinking plenty of fluids',
      'Using a humidifier',
      'Avoiding smoke and other irritants',
      'Oxygen therapy in severe cases',
      'Hospitalization for severe infections or complications'
    ],
    diet: [
      'Adequate hydration',
      'Nutritious foods to support the immune system',
      'Warm fluids may help soothe a sore throat and loosen mucus'
    ]
  },
  {
    id: 'chickenpox',
    name: 'Chickenpox',
    category: 'Infectious',
    description: 'A highly contagious viral infection caused by the varicella-zoster virus, characterized by an itchy, blister-like rash.',
    symptoms: [
      'Itchy, blister-like rash',
      'Fever',
      'Fatigue',
      'Headache',
      'Loss of appetite',
      'Rash progresses through stages: raised spots, fluid filled blisters, then scabs',
      'More severe in adults'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_APPEARANCE',
        value: 'Characteristic rash',
        unit: '',
        normalRange: { min: 'No rash', max: 'No rash' },
        status: 'Characteristic rash',
        description: 'Diagnosis is usually based on the characteristic appearance of the rash'
      },
      {
        id: 'PCR',
        value: 'VZV detected',
        unit: '',
        normalRange: { min: 'Not detected', max: 'Not detected' },
        status: 'VZV detected',
        description: 'Polymerase chain reaction (PCR) test on vesicle fluid can confirm the presence of varicella-zoster virus (VZV)'
      },
      {
        id: 'ANTIBODY_TEST',
        value: 'VZV antibodies',
        unit: '',
        normalRange: { min: 'No antibodies', max: 'No antibodies' },
        status: 'VZV antibodies',
        description: 'Antibody tests can show past or recent infection but are not usually used for diagnosis'
      }
    ],
    medications: [
      'Antiviral medications (e.g., acyclovir) - may be used in severe cases or for those at high risk of complications',
      'Pain relievers (e.g., acetaminophen)',
      'Calamine lotion or antihistamines for itching'
    ],
    lifestyle: [
      'Isolation to prevent spread',
      'Rest',
      'Keeping fingernails trimmed to reduce scratching',
      'Cool baths',
      'Loose, comfortable clothing',
      'Vaccination (prevention)'
    ],
    diet: [
      'Adequate hydration',
      'Soft, bland foods if mouth sores are present',
      'Generally not directly related to diet, but a healthy diet supports the immune system'
    ]
  },
  {
    id: 'chilblains',
    name: 'Chilblains',
    category: 'Dermatological',
    description: 'Painful inflammation of small blood vessels in the skin that occur in response to repeated exposure to cold but not freezing air.',
    symptoms: [
      'Small, itchy, red patches on skin',
      'Burning or stinging sensation',
      'Swelling',
      'Blistering in severe cases',
      'Usually on extremities (toes, fingers, ears, nose)',
      'Symptoms worsen with sudden temperature changes'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_APPEARANCE',
        value: 'Typical lesions',
        unit: '',
        normalRange: { min: 'Normal skin', max: 'Normal skin' },
        status: 'Typical lesions',
        description: 'Diagnosis is usually based on the clinical appearance and history of cold exposure'
      },
      {
        id: 'SKIN_BIOPSY',
        value: 'Inflammation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation',
        description: 'Rarely needed, but may show inflammation of small blood vessels'
      }
    ],
    medications: [
      'Topical corticosteroids (to reduce inflammation)',
      'Nifedipine (a calcium channel blocker) - may be used in severe or recurrent cases to improve blood flow',
      'Pain relievers (e.g., acetaminophen, ibuprofen)'
    ],
    lifestyle: [
      'Keeping the affected areas warm',
      'Avoiding cold exposure',
      'Gradual warming of affected areas',
      'Wearing warm clothing (gloves, socks, etc.)',
      'Gentle exercise to improve circulation',
      'Smoking cessation'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy diet and adequate hydration are important for overall health'
    ]
  },
  {
    id: 'chlamydia',
    name: 'Chlamydia',
    category: 'Infectious',
    description: 'A common sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It can cause serious complications if left untreated.',
    symptoms: [
      'Often asymptomatic',
      'Painful urination',
      'Abnormal vaginal discharge',
      'Testicular pain or swelling',
      'Pain during intercourse',
      'Lower abdominal pain',
      'Rectal pain or discharge'
    ],
    relatedParameters: [
      {
        id: 'NAAT',
        value: 'C. trachomatis detected',
        unit: '',
        normalRange: { min: 'Not detected', max: 'Not detected' },
        status: 'C. trachomatis detected',
        description: 'Nucleic acid amplification tests (NAATs) on urine or swab samples are the gold standard for diagnosis'
      },
      {
        id: 'CULTURE',
        value: 'C. trachomatis isolated',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'C. trachomatis isolated',
        description: 'Bacterial culture can be performed but is less sensitive than NAATs'
      }
    ],
    medications: [
      'Antibiotics (e.g., azithromycin, doxycycline)'
    ],
    lifestyle: [
      'Safe sex practices (condom use)',
      'Regular STI testing, especially for sexually active individuals',
      'Partner notification and treatment',
      'Abstinence from sexual intercourse until treatment is completed'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'chronic-fatigue-syndrome',
    name: 'Chronic Fatigue Syndrome',
    category: 'Miscellaneous',
    description: 'A complex disorder characterized by extreme fatigue that lasts for at least six months and that can\'t be fully explained by an underlying medical condition. The fatigue worsens with physical or mental activity but doesn\'t improve with rest.',
    symptoms: [
      'Severe, debilitating fatigue',
      'Post-exertional malaise (worsening of symptoms after activity)',
      'Unrefreshing sleep',
      'Cognitive difficulties (problems with memory, concentration)',
      'Muscle pain',
      'Joint pain',
      'Headaches',
      'Sore throat',
      'Tender lymph nodes'
    ],
    relatedParameters: [
      {
        id: 'NO_SPECIFIC_TEST',
        value: 'Diagnosis of exclusion',
        unit: '',
        normalRange: { min: 'N/A', max: 'N/A' },
        status: 'Diagnosis of exclusion',
        description: 'There is no single diagnostic test for CFS; diagnosis is based on symptoms and ruling out other conditions'
      },
      {
        id: 'OTHER_TESTS',
        value: 'Rule out other conditions',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Rule out other conditions',
        description: 'Various tests may be done to rule out other conditions that can cause fatigue'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Antidepressants (for pain, sleep, and mood symptoms)',
      'Sleep aids (if needed)',
      'Low-dose corticosteroids (used cautiously, as long-term use can have side effects)'
    ],
    lifestyle: [
      'Activity management (pacing)',
      'Cognitive behavioral therapy (CBT)',
      'Graded exercise therapy (GET) - controversial, some patients do not tolerate',
      'Stress management',
      'Sleep hygiene',
      'Support groups'
    ],
    diet: [
      'Healthy, balanced diet',
      'Adequate hydration',
      'Some individuals may find it helpful to avoid caffeine, alcohol, or certain foods that seem to worsen symptoms',
      'Nutritional supplements (e.g., NADH, coenzyme Q10) - limited evidence of benefit'
    ]
  },
  {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease',
    category: 'Renal',
    description: 'A long-term condition where the kidneys do not work as well as they should, leading to a gradual loss of kidney function over time.',
    symptoms: [
      'Often asymptomatic in early stages',
      'Fatigue',
      'Swelling in legs, ankles, or feet',
      'Shortness of breath',
      'Nausea',
      'Loss of appetite',
      'Changes in urination frequency',
      'Muscle cramps',
      'Itching'
    ],
    relatedParameters: [
      {
        id: 'GFR',
        status: 'LOW',
        description: 'Glomerular filtration rate (GFR) is decreased'
      },
      {
        id: 'CREATININE',
        status: 'HIGH',
        description: 'Serum creatinine is elevated'
      },
      {
        id: 'BUN',
        status: 'HIGH',
        description: 'Blood urea nitrogen (BUN) is elevated'
      },
      {
        id: 'ALBUMINURIA',
        value: 'Increased',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Increased',
        description: 'Increased albumin in the urine (albuminuria or proteinuria)'
      },
      {
        id: 'POTASSIUM',
        status: 'HIGH',
        description: 'Hyperkalemia (high potassium) may occur in later stages'
      }
    ],
    medications: [
      'ACE inhibitors or ARBs (to lower blood pressure and reduce proteinuria)',
      'Diuretics (to reduce fluid buildup)',
      'Statins (to lower cholesterol)',
      'Erythropoiesis-stimulating agents (to treat anemia)',
      'Phosphate binders (to lower phosphate levels)',
      'Vitamin D supplements',
      'Sodium bicarbonate (to correct metabolic acidosis)'
    ],
    lifestyle: [
      'Blood pressure control',
      'Blood sugar control (if diabetic)',
      'Weight management',
      'Regular exercise',
      'Smoking cessation',
      'Regular monitoring of kidney function',
      'Avoidance of nephrotoxic drugs (e.g., NSAIDs)'
    ],
    diet: [
      'Low-protein diet (in some cases, to reduce workload on kidneys)',
      'Low-sodium diet',
      'Low-potassium diet (if potassium levels are high)',
      'Low-phosphorus diet',
      'Fluid restriction (in later stages)',
      'Working with a renal dietitian is important'
    ]
  },
  {
    id: 'chronic-lymphocytic-leukaemia',
    name: 'Chronic Lymphocytic Leukaemia',
    category: 'Oncological',
    description: 'A type of cancer that affects the lymphocytes (a type of white blood cell) in the bone marrow and blood. It typically progresses slowly.',
    symptoms: [
      'Often asymptomatic in early stages',
      'Fatigue',
      'Swollen lymph nodes',
      'Frequent infections',
      'Unexplained weight loss',
      'Night sweats',
      'Easy bruising or bleeding',
      'Enlarged spleen or liver'
    ],
    relatedParameters: [
      {
        id: 'CBC',
        value: 'Lymphocytosis',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Lymphocytosis',
        description: 'Complete blood count shows an increased number of lymphocytes'
      },
      {
        id: 'FLOW_CYTOMETRY',
        value: 'Clonal B-cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Clonal B-cells',
        description: 'Flow cytometry of blood or bone marrow shows a clonal population of B lymphocytes with characteristic markers (e.g., CD5, CD19, CD20, CD23)'
      },
      {
        id: 'BONE_MARROW_BIOPSY',
        value: 'Lymphoid infiltration',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Lymphoid infiltration',
        description: 'Bone marrow biopsy may show infiltration with small, mature-appearing lymphocytes'
      },
      {
        id: 'GENETIC_TESTING',
        value: 'Specific mutations',
        unit: '',
        normalRange: { min: 'No mutations', max: 'No mutations' },
        status: 'Specific mutations',
        description: 'Cytogenetic or molecular testing may reveal specific genetic abnormalities (e.g., del(13q), del(11q), del(17p), trisomy 12)'
      }
    ],
    medications: [
      'Chemotherapy (e.g., fludarabine, cyclophosphamide, chlorambucil)',
      'Targeted therapy (e.g., ibrutinib, idelalisib, venetoclax)',
      'Monoclonal antibodies (e.g., rituximab, obinutuzumab)',
      'Immunotherapy',
      'Stem cell transplantation (in select cases)'
    ],
    lifestyle: [
      'Watch and wait (for early-stage, asymptomatic disease)',
      'Regular monitoring of blood counts and clinical status',
      'Infection prevention measures',
      'Vaccinations',
      'Emotional and psychological support'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy diet is important for overall health and well-being'
    ]
  },
  {
    id: 'chronic-myeloid-leukaemia',
    name: 'Chronic Myeloid Leukaemia',
    category: 'Oncological',
    description: 'A type of cancer that starts in the blood-forming cells of the bone marrow and invades the blood. It is characterized by the presence of the Philadelphia chromosome.',
    symptoms: [
      'Often asymptomatic in early stages',
      'Fatigue',
      'Unexplained weight loss',
      'Night sweats',
      'Enlarged spleen (splenomegaly)',
      'Abdominal fullness or discomfort',
      'Easy bruising or bleeding',
      'Bone pain',
      'Frequent infections'
    ],
    relatedParameters: [
      {
        id: 'CBC',
        value: 'Leukocytosis with myeloid cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Leukocytosis with myeloid cells',
        description: 'Complete blood count shows an increased number of white blood cells, particularly myeloid cells at various stages of maturation'
      },
      {
        id: 'BCR_ABL1',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Genetic testing (e.g., PCR or FISH) detects the BCR-ABL1 fusion gene, which is the hallmark of CML'
      },
      {
        id: 'BONE_MARROW_BIOPSY',
        value: 'Hypercellular with myeloid hyperplasia',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Hypercellular with myeloid hyperplasia',
        description: 'Bone marrow biopsy shows a hypercellular marrow with an increased number of myeloid cells'
      },
      {
        id: 'PHILADELPHIA_CHROMOSOME',
        value: 'Present',
        unit: '',
        normalRange: { min: 'Absent', max: 'Absent' },
        status: 'Present',
        description: 'Cytogenetic analysis may reveal the Philadelphia chromosome, a translocation between chromosomes 9 and 22'
      }
    ],
    medications: [
      'Tyrosine kinase inhibitors (TKIs) (e.g., imatinib, dasatinib, nilotinib, bosutinib, ponatinib) - the primary treatment for most patients',
      'Chemotherapy (e.g., hydroxyurea) - may be used to control high white blood cell counts before starting TKIs',
      'Stem cell transplantation - considered in select cases, especially if resistant to TKIs'
    ],
    lifestyle: [
      'Regular monitoring of blood counts and response to treatment',
      'Adherence to TKI therapy',
      'Monitoring for and managing side effects of treatment',
      'Emotional and psychological support'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy diet is important for overall health and well-being'
    ]
  },
  {
    id: 'chronic-obstructive-pulmonary-disease',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    category: 'Respiratory',
    description: 'A group of progressive lung diseases that block airflow and make it difficult to breathe. The most common are emphysema and chronic bronchitis. Smoking is the leading cause.',
    symptoms: [
      'Chronic cough',
      'Sputum production',
      'Shortness of breath (dyspnea)',
      'Wheezing',
      'Chest tightness',
      'Frequent respiratory infections',
      'Fatigue',
      'Difficulty performing daily activities'
    ],
    relatedParameters: [
      {
        id: 'SPIROMETRY',
        value: 'FEV1/FVC < 0.70',
        unit: '',
        normalRange: { min: '> 0.70', max: '> 0.70' },
        status: 'FEV1/FVC < 0.70',
        description: 'Spirometry shows airflow limitation, with a reduced FEV1/FVC ratio (forced expiratory volume in one second divided by forced vital capacity)'
      },
      {
        id: 'FEV1',
        value: 'Reduced',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Reduced',
        description: 'FEV1 is reduced, and the degree of reduction helps determine the severity of COPD'
      },
      {
        id: 'CHEST_X_RAY',
        value: 'Hyperinflation or bullae',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Hyperinflation or bullae',
        description: 'Chest X-ray may show hyperinflation, flattened diaphragm, or bullae (in emphysema)'
      },
      {
        id: 'CT_CHEST',
        value: 'Emphysema or airway changes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Emphysema or airway changes',
        description: 'High-resolution CT scan can assess the extent of emphysema and airway changes'
      },
      {
        id: 'ABG',
        value: 'Hypoxemia or hypercapnia',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Hypoxemia or hypercapnia',
        description: 'Arterial blood gases may show low oxygen levels (hypoxemia) and/or high carbon dioxide levels (hypercapnia) in advanced disease'
      }
    ],
    medications: [
      'Bronchodilators (e.g., short-acting beta-agonists, long-acting beta-agonists, anticholinergics)',
      'Inhaled corticosteroids',
      'Combination inhalers (bronchodilator + corticosteroid)',
      'Phosphodiesterase-4 inhibitors (e.g., roflumilast)',
      'Theophylline',
      'Antibiotics (for exacerbations)',
      'Oxygen therapy'
    ],
    lifestyle: [
      'Smoking cessation (the most important intervention)',
      'Pulmonary rehabilitation',
      'Regular exercise',
      'Avoiding respiratory irritants',
      'Vaccinations (influenza, pneumococcal)',
      'Nutritional counseling',
      'Managing exacerbations promptly'
    ],
    diet: [
      'Maintaining a healthy weight',
      'Eating a balanced diet with adequate protein',
      'Small, frequent meals may be better tolerated than large meals',
      'Adequate hydration to help thin mucus',
      'Some individuals may need nutritional supplements'
    ]
  },
  {
    id: 'chronic-pain',
    name: 'Chronic Pain',
    category: 'Miscellaneous',
    description: 'Pain that lasts for more than 3 to 6 months, or beyond the normal time of healing. It can be caused by an underlying condition, injury, or unknown factors.',
    symptoms: [
      'Persistent pain',
      'Pain described as aching, burning, shooting, or stabbing',
      'Stiffness',
      'Fatigue',
      'Sleep disturbances',
      'Mood changes (e.g., depression, anxiety)',
      'Difficulty with daily activities',
      'Pain disproportionate to physical findings'
    ],
    relatedParameters: [
      {
        id: 'NO_SINGLE_TEST',
        value: 'Diagnosis based on history and exam',
        unit: '',
        normalRange: { min: 'N/A', max: 'N/A' },
        status: 'Diagnosis based on history and exam',
        description: 'There is no single test to diagnose chronic pain; it is based on the patient\'s history, physical examination, and ruling out other conditions'
      },
      {
        id: 'IMAGING',
        value: 'May show underlying cause',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'May show underlying cause',
        description: 'Imaging tests (e.g., X-ray, MRI, CT) may be done to identify an underlying cause, but often no specific cause is found'
      },
      {
        id: 'PAIN_SCALES',
        value: 'Quantify pain',
        unit: '',
        normalRange: {min: 'No pain', max: 'No pain'},
        status: 'Quantify pain',
        description: 'Various pain scales (e.g., numeric rating scale, visual analog scale) can be used to quantify pain intensity and monitor response to treatment'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, NSAIDs)',
      'Opioids (used cautiously and with close monitoring)',
      'Antidepressants (e.g., tricyclic antidepressants, SNRIs)',
      'Anticonvulsants (e.g., gabapentin, pregabalin)',
      'Topical agents (e.g., lidocaine patches, capsaicin cream)',
      'Muscle relaxants'
    ],
    lifestyle: [
      'Physical therapy',
      'Exercise',
      'Cognitive behavioral therapy (CBT)',
      'Mindfulness and relaxation techniques',
      'Stress management',
      'Occupational therapy',
      'Interventional procedures (e.g., injections, nerve blocks)',
      'Complementary therapies (e.g., acupuncture, massage)'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy, anti-inflammatory diet may be beneficial',
      'Adequate hydration'
    ]
  },
  {
    id: 'chronic-pancreatitis',
    name: 'Chronic Pancreatitis',
    category: 'Gastrointestinal',
    description: 'A long-standing inflammation of the pancreas that alters the organ\'s normal structure and functions. It can lead to permanent damage.',
    symptoms: [
      'Upper abdominal pain (may radiate to the back)',
      'Nausea and vomiting',
      'Unexplained weight loss',
      'Steatorrhea (fatty, foul-smelling stools)',
      'Diabetes',
      'Pain that worsens after eating',
      'Malnutrition',
      'Jaundice'
    ],
    relatedParameters: [
      {
        id: 'FECAL_ELASTASE',
        value: 'Low',
        unit: '',
        normalRange: { min: '>200', max: '>200' },
        status: 'Low',
        description: 'Fecal elastase-1 is low, indicating pancreatic exocrine insufficiency'
      },
      {
        id: 'FECAL_FAT',
        value: 'Increased',
        unit: '',
        normalRange: { min: '<7g/day', max: '<7g/day' },
        status: 'Increased',
        description: 'Increased fecal fat indicates fat malabsorption'
      },
      {
        id: 'IMAGING',
        value: 'Pancreatic calcifications or ductal changes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Pancreatic calcifications or ductal changes',
        description: 'Imaging tests (e.g., CT, MRI, MRCP, endoscopic ultrasound) may show pancreatic calcifications, ductal changes, or atrophy'
      },
      {
        id: 'AMYLASE_LIPASE',
        value: 'Normal or mildly elevated',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Normal or mildly elevated',
        description: 'Amylase and lipase are often normal or only mildly elevated in chronic pancreatitis'
      }
    ],
    medications: [
      'Pain medications (e.g., NSAIDs, opioids)',
      'Pancreatic enzyme replacement therapy (PERT)',
      'Insulin (if diabetes develops)',
      'Antidepressants (for chronic pain and mood symptoms)',
      'Medications to treat complications (e.g., steatorrhea, malnutrition)'
    ],
    lifestyle: [
      'Abstinence from alcohol (very important)',
      'Smoking cessation',
      'Small, frequent meals',
      'Pain management',
      'Endoscopic therapy (e.g., stenting, stone removal)',
      'Surgery in select cases (e.g., for severe pain or complications)'
    ],
    diet: [
      'Low-fat diet',
      'Small, frequent meals',
      'Adequate hydration',
      'Nutritional supplements if needed',
      'Vitamin supplementation (especially fat-soluble vitamins A, D, E, and K)',
      'Working with a registered dietitian is recommended'
    ]
  },
  {
    id: 'cirrhosis',
    name: 'Cirrhosis',
    category: 'Liver',
    description: 'A late stage of scarring (fibrosis) of the liver caused by many forms of liver diseases and conditions, such as chronic alcoholism and hepatitis.',
    symptoms: [
      'Fatigue',
      'Jaundice (yellowing of skin and eyes)',
      'Easy bruising or bleeding',
      'Swelling in legs, ankles, or feet (edema)',
      'Ascites (fluid buildup in the abdomen)',
      'Itching',
      'Loss of appetite',
      'Weight loss',
      'Confusion, drowsiness, or slurred speech (hepatic encephalopathy)',
      'Spider angiomas (spider-like blood vessels on the skin)'
    ],
    relatedParameters: [
      {
        id: 'ALT_AST',
        status: 'Elevated',
        description: 'Liver enzymes (ALT and AST) may be elevated, but can be normal in advanced cirrhosis'
      },
      {
        id: 'BILIRUBIN',
        status: 'HIGH',
        description: 'Bilirubin is often elevated'
      },
      {
        id: 'ALBUMIN',
        status: 'LOW',
        description: 'Serum albumin is often low'
      },
      {
        id: 'PT',
        value: 'Prolonged',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Prolonged',
        description: 'Prothrombin time (PT) is often prolonged'
      },
      {
        id: 'PLATELETS',
        status: 'LOW',
        description: 'Platelet count may be low (thrombocytopenia)'
      },
      {
        id: 'LIVER_BIOPSY',
        value: 'Fibrosis/cirrhosis',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Fibrosis/cirrhosis',
        description: 'Liver biopsy can confirm the diagnosis and assess the severity of fibrosis'
      },
      {
        id: 'IMAGING',
        value: 'Nodular liver, signs of portal hypertension',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Nodular liver, signs of portal hypertension',
        description: 'Imaging tests (e.g., ultrasound, CT, MRI) may show a nodular liver, signs of portal hypertension (e.g., splenomegaly, ascites), or hepatocellular carcinoma'
      }
    ],
    medications: [
      'Diuretics (for ascites and edema)',
      'Beta-blockers (to reduce portal hypertension)',
      'Lactulose and/or rifaximin (for hepatic encephalopathy)',
      'Vitamins and mineral supplements',
      'Medications to treat underlying causes (e.g., antivirals for viral hepatitis)'
    ],
    lifestyle: [
      'Abstinence from alcohol (if alcohol-related)',
      'Treatment of underlying liver disease',
      'Low-sodium diet (for ascites)',
      'Regular monitoring for complications',
      'Liver transplantation in select cases',
      'Vaccinations (e.g., hepatitis A and B, pneumococcal, influenza)'
    ],
    diet: [
      'Low-sodium diet (to manage ascites)',
      'Adequate protein intake (unless hepatic encephalopathy is present)',
      'Small, frequent meals',
      'Nutritional supplements if needed',
      'Working with a registered dietitian is recommended'
    ]
  },
  {
    id: 'clostridium-difficile',
    name: 'Clostridium Difficile Infection',
    category: 'Infectious',
    description: 'A bacterial infection that causes inflammation of the colon, often occurring after antibiotic use. It can cause severe diarrhea and other intestinal complications.',
    symptoms: [
      'Watery diarrhea (often frequent)',
      'Abdominal cramps and pain',
      'Fever',
      'Nausea',
      'Loss of appetite',
      'Dehydration',
      'Rapid heart rate',
      'Swollen abdomen',
      'Blood or pus in the stool'
    ],
    relatedParameters: [
      {
        id: 'STOOL_TEST_CDIFF_TOXIN',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Stool tests detect C. difficile toxins (toxin A and/or B) or the C. difficile toxin gene (e.g., PCR)'
      },
      {
        id: 'STOOL_CULTURE',
        value: 'C. difficile isolated',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'C. difficile isolated',
        description: 'Stool culture can isolate C. difficile, but is less commonly used for diagnosis'
      },
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'White blood cell count may be elevated'
      },
      {
        id: 'IMAGING',
        value: 'Colitis',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Colitis',
        description: 'May be used in severe cases'
      }
    ],
    medications: [
      'Stopping the causative antibiotic (if possible)',
      'Oral vancomycin',
      'Fidaxomicin',
      'Metronidazole (in some cases)',
      'Fecal microbiota transplantation (FMT) for recurrent infections'
    ],
    lifestyle: [
      'Isolation precautions to prevent spread',
      'Hand hygiene (soap and water are more effective than alcohol-based hand sanitizers against C. difficile spores)',
      'Thorough cleaning of environment with sporicidal agents',
      'Judicious use of antibiotics'
    ],
    diet: [
      'Adequate hydration (oral or intravenous fluids)',
      'Bland, easily digestible foods',
      'Probiotics (may be helpful, but discuss with a doctor)',
      'Avoiding foods that worsen diarrhea'
    ]
  },
  {
    id: 'coeliac-disease',
    name: 'Coeliac Disease',
    category: 'Gastrointestinal',
    description: 'An immune-mediated disorder triggered by gluten consumption in genetically predisposed individuals, leading to damage to the small intestine and malabsorption.',
    symptoms: [
      'Diarrhea',
      'Abdominal pain and bloating',
      'Weight loss',
      'Fatigue',
      'Iron deficiency anemia',
      'Osteoporosis or osteopenia',
      'Dermatitis herpetiformis (itchy, blistering skin rash)',
      'Failure to thrive (in children)',
      'Delayed puberty',
      'Infertility'
    ],
    relatedParameters: [
      {
        id: 'TTG_IGA',
        value: 'Elevated',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Elevated',
        description: 'Tissue transglutaminase (tTG) IgA antibodies are usually elevated'
      },
      {
        id: 'EMA_IGA',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Endomysial (EMA) IgA antibodies are also highly specific for coeliac disease'
      },
      {
        id: 'TOTAL_IGA',
        value: 'Normal',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Normal',
        description: 'Checking for IgA deficiency is important'
      },
      {
        id: 'SMALL_BOWEL_BIOPSY',
        value: 'Villous atrophy',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Villous atrophy',
        description: 'Small bowel biopsy shows characteristic changes, such as villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes'
      }
    ],
    medications: [
      'No specific medication to cure the disease',
      'Treatment is primarily dietary'
    ],
    lifestyle: [
      'Strict adherence to a gluten-free diet (lifelong)',
      'Reading food labels carefully',
      'Avoiding cross-contamination',
      'Regular follow-up with a doctor and dietitian',
      'Monitoring for and managing complications (e.g., osteoporosis, nutrient deficiencies)',
      'Joining a coeliac support group'
    ],
    diet: [
      'Gluten-free diet (avoiding wheat, barley, rye, and their derivatives)',
      'Consulting with a registered dietitian who specializes in coeliac disease',
      'Supplementation with vitamins and minerals if deficiencies are present (e.g., iron, calcium, vitamin D, B vitamins)',
      'Naturally gluten-free foods (e.g., fruits, vegetables, meat, fish, rice, potatoes) are safe'
    ]
  },
  {
    id: 'cold-sore',
    name: 'Cold Sore',
    category: 'Dermatological',
    description: 'Small, fluid-filled blisters that commonly appear on or around the lips, caused by the herpes simplex virus type 1 (HSV-1).',
    symptoms: [
      'Tingling or itching sensation (prodrome)',
      'Painful blisters on or around lips',
      'Blisters that rupture and form a crust',
      'Burning sensation',
      'Redness around the blisters',
      'Fever in some cases'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_APPEARANCE',
        value: 'Characteristic lesions',
        unit: '',
        normalRange: { min: 'No lesions', max: 'No lesions' },
        status: 'Characteristic lesions',
        description: 'Diagnosis is usually based on the clinical appearance'
      },
      {
        id: 'VIRAL_CULTURE',
        value: 'HSV-1 isolated',
        unit: '',
        normalRange: { min: 'No virus', max: 'No virus' },
        status: 'HSV-1 isolated',
        description: 'Viral culture of the blister fluid can confirm the presence of HSV-1, but is not always necessary'
      },
      {
        id: 'PCR',
        value: 'HSV-1 DNA',
        unit: '',
        normalRange: { min: 'Not detected', max: 'Not detected' },
        status: 'HSV-1 DNA',
        description: 'Polymerase chain reaction (PCR) test can detect HSV-1 DNA, but is not always necessary'
      }
    ],
    medications: [
      'Topical antiviral creams (e.g., acyclovir, penciclovir) - may reduce healing time and symptoms if applied early',
      'Oral antiviral medications (e.g., acyclovir, valacyclovir, famciclovir) - may be used for severe or frequent outbreaks',
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Topical anesthetics (e.g., lidocaine, benzocaine) - to relieve pain'
    ],
    lifestyle: [
      'Avoiding triggers (e.g., stress, sunlight, illness)',
      'Applying antiviral cream at the first sign of tingling or itching',
      'Keeping the affected area clean and dry',
      'Avoiding touching the cold sore and then touching other parts of the body or other people',
      'Not sharing items that come into contact with the cold sore (e.g., utensils, towels)'
    ],
    diet: [
      'Generally not directly related to diet, but some people find that certain foods (e.g., those high in arginine) may trigger outbreaks',
      'A healthy diet supports the immune system'
    ]
  },
  {
    id: 'coma',
    name: 'Coma',
    category: 'Neurological',
    description: 'A state of prolonged unconsciousness in which a person is unresponsive to their environment. The person is alive but cannot be awakened and shows no signs of awareness.',
    symptoms: [
      'Unresponsiveness to external stimuli',
      'Lack of awareness',
      'No purposeful movements',
      'Irregular breathing',
      'Closed eyes',
      'No sleep-wake cycle',
      'Depressed brainstem reflexes'
    ],
    relatedParameters: [
      {
        id: 'GLASGOW_COMA_SCALE',
        value: 'Score of 8 or less',
        unit: '',
        normalRange: { min: '15', max: '15' },
        status: 'Score of 8 or less',
        description: 'Glasgow Coma Scale (GCS) score of 8 or less typically indicates coma'
      },
      {
        id: 'NEUROIMAGING',
        value: 'Brain injury or abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Brain injury or abnormalities',
        description: 'Neuroimaging (e.g., CT, MRI) may reveal the underlying cause of coma, such as brain injury, stroke, or hemorrhage'
      },
      {
        id: 'EEG',
        value: 'Abnormal brain activity',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal brain activity',
        description: 'Electroencephalogram (EEG) may show abnormal brain activity patterns'
      },
      {
        id: 'BLOOD_TESTS',
        value: 'Metabolic abnormalities or infection',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Metabolic abnormalities or infection',
        description: 'Various blood tests may be done to identify metabolic abnormalities, infection, or drug intoxication'
      }
    ],
    medications: [
      'Treatment depends on the underlying cause of the coma',
      'Medications to treat infection, reduce brain swelling, control seizures, or reverse drug overdose may be used',
      'Supportive medications to maintain blood pressure, breathing, and other vital functions'
    ],
    lifestyle: [
      'Life support in an intensive care unit (ICU)',
      'Treatment of the underlying cause',
      'Prevention of complications (e.g., bedsores, pneumonia)',
      'Nutritional support',
      'Rehabilitation if the person emerges from the coma'
    ],
    diet: [
      'Nutritional support is provided via enteral feeding (tube feeding) or parenteral nutrition (intravenous feeding)'
    ]
  },
  {
    id: 'common-cold',
    name: 'Common Cold',
    category: 'Respiratory',
    description: 'A viral infection of the upper respiratory tract, primarily affecting the nose and throat. It is usually harmless and resolves on its own.',
    symptoms: [
      'Runny or stuffy nose',
      'Sore throat',
      'Cough',
      'Sneezing',
      'Mild headache',
      'Body aches',
      'Low-grade fever',
      'Generally feeling unwell'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_SYMPTOMS',
        value: 'Typical presentation',
        unit: '',
        normalRange: { min: 'No symptoms', max: 'No symptoms' },
        status: 'Typical presentation',
        description: 'Diagnosis is usually based on clinical symptoms'
      },
      {
        id: 'VIRAL_CULTURE_OR_PCR',
        value: 'Virus identified',
        unit: '',
        normalRange: { min: 'No virus', max: 'No virus' },
        status: 'Virus identified',
        description: 'Viral culture or PCR of nasal secretions can identify the causative virus but is usually not necessary'
      }
    ],
    medications: [
      'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen)',
      'Decongestants (e.g., pseudoephedrine, oxymetazoline)',
      'Cough suppressants (e.g., dextromethorphan)',
      'Expectorants (e.g., guaifenesin)',
      'Antihistamines (may help with runny nose and sneezing)'
    ],
    lifestyle: [
      'Rest',
      'Drinking plenty of fluids',
      'Using a humidifier',
      'Gargling with salt water',
      'Avoiding smoke and other irritants',
      'Hand hygiene to prevent spread'
    ],
    diet: [
      'Adequate hydration',
      'Warm fluids (e.g., soup, tea) may help soothe symptoms',
      'Honey may help relieve cough (but not for children under 1 year old)',
      'Nutrient-rich foods to support the immune system'
    ]
  },
  {
    id: 'concussion',
    name: 'Concussion',
    category: 'Neurological',
    description: 'A type of traumatic brain injury caused by a bump, blow, or jolt to the head, or by a hit to the body that causes the head and brain to move rapidly back and forth.',
    symptoms: [
      'Headache',
      'Dizziness',
      'Nausea or vomiting',
      'Confusion',
      'Amnesia (memory loss)',
      'Difficulty concentrating',
      'Sensitivity to light or noise',
      'Balance problems',
      'Ringing in the ears',
      'Slowed reaction time',
      'Changes in mood'
    ],
    relatedParameters: [
      {
        id: 'NEUROLOGICAL_EXAM',
        value: 'May be normal or show deficits',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'May be normal or show deficits',
        description: 'A thorough neurological examination is important to assess for cognitive and neurological deficits'
      },
      {
        id: 'CT_HEAD',
        value: 'Usually normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Usually normal',
        description: 'CT scan of the head is usually normal in concussion but may be done to rule out more serious injuries (e.g., bleeding in the brain)'
      },
      {
        id: 'IMPACT_TEST',
        value: 'Cognitive deficits',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Cognitive deficits',
        description: 'Neuropsychological testing may reveal subtle cognitive deficits'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen - avoid NSAIDs initially as they may increase bleeding risk)',
      'Antiemetics (for nausea and vomiting)'
    ],
    lifestyle: [
      'Rest (both physical and cognitive)',
      'Gradual return to activity',
      'Avoiding activities that worsen symptoms',
      'Monitoring for worsening symptoms',
      'Avoiding a second head injury before fully recovered',
      'Cognitive rehabilitation if needed'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy diet and adequate hydration are important for recovery'
    ]
  },
  {
    id: 'congenital-heart-disease',
    name: 'Congenital Heart Disease',
    category: 'Cardiovascular',
    description: 'One or more structural abnormalities of the heart that are present at birth. They can affect the heart walls, valves, or blood vessels.',
    symptoms: [
      'Cyanosis (bluish discoloration of skin)',
      'Rapid breathing',
      'Difficulty feeding',
      'Poor weight gain',
      'Fatigue',
      'Heart murmur',
      'Swelling in legs or abdomen',
      'Shortness of breath during exercise',
      'Some are asymptomatic'
    ],
    relatedParameters: [
      {
        id: 'ECHOCARDIOGRAM',
        value: 'Structural abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Structural abnormalities',
        description: 'Echocardiography is the primary diagnostic tool for visualizing the heart\'s structure and function'
      },
      {
        id: 'CHEST_X_RAY',
        value: 'Abnormal heart size or shape',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal heart size or shape',
        description: 'Chest X-ray may show an enlarged heart or abnormal pulmonary vasculature'
      },
      {
        id: 'EKG',
        value: 'Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormalities',
        description: 'Electrocardiogram (ECG) may show arrhythmias or other abnormalities'
      },
      {
        id: 'CARDIAC_CATHETERIZATION',
        value: 'Abnormal pressures or oxygen levels',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal pressures or oxygen levels',
        description: 'Cardiac catheterization can provide detailed information about pressures and oxygen levels in the heart chambers and blood vessels'
      }
    ],
    medications: [
      'Depends on the specific defect and symptoms',
      'Diuretics (to reduce fluid buildup)',
      'ACE inhibitors or ARBs (to reduce workload on the heart)',
      'Beta-blockers (to slow heart rate and reduce blood pressure)',
      'Digoxin (to improve heart contractility)',
      'Antiarrhythmics (to control irregular heart rhythms)',
      'Prostaglandin E1 (to keep the ductus arteriosus open in certain defects)'
    ],
    lifestyle: [
      'Regular follow-up with a cardiologist',
      'Surgery or interventional catheterization to repair or palliate the defect',
      'Endocarditis prophylaxis (antibiotics before certain procedures) in some cases',
      'Exercise restrictions may be necessary depending on the severity of the defect',
      'Lifelong cardiac care for many individuals'
    ],
    diet: [
      'Generally not directly related to diet, but a heart-healthy diet is recommended',
      'Some infants with congenital heart disease may have feeding difficulties and require specialized formulas or feeding tubes'
    ]
  },
  {
    id: 'conjunctivitis',
    name: 'Conjunctivitis',
    category: 'Ophthalmological',
    description: 'Inflammation or infection of the conjunctiva, the thin, clear membrane that lines the inside of the eyelid and covers the white part of the eye. Also known as "pink eye".',
    symptoms: [
      'Redness in the white of the eye',
      'Itching or burning sensation',
      'Watery eyes',
      'Discharge (pus or mucus)',
      'Crusting of eyelids or lashes',
      'Sensitivity to light',
      'Gritty feeling in the eye',
      'Blurred vision'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_APPEARANCE',
        value: 'Redness, discharge',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Redness, discharge',
        description: 'Diagnosis is usually based on the clinical appearance and symptoms'
      },
      {
        id: 'CONJUNCTIVAL_SWAB',
        value: 'Pathogen identified',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'Pathogen identified',
        description: 'A conjunctival swab for culture or PCR can identify the causative organism (bacterial, viral, or chlamydial) but is not always necessary'
      }
    ],
    medications: [
      'Antibiotic eye drops or ointment (for bacterial conjunctivitis)',
      'Antiviral eye drops (for some types of viral conjunctivitis)',
      'Artificial tears (for lubrication and comfort)',
      'Antihistamine eye drops (for allergic conjunctivitis)',
      'Mast cell stabilizer eye drops (for allergic conjunctivitis)'
    ],
    lifestyle: [
      'Frequent hand washing',
      'Avoiding touching or rubbing eyes',
      'Not sharing towels, washcloths, or eye makeup',
      'Disposing of contact lenses or thoroughly cleaning them',
      'Warm or cool compresses',
      'Staying home from school or work if contagious'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'constipation',
    name: 'Constipation',
    category: 'Gastrointestinal',
    description: 'A condition characterized by infrequent bowel movements, difficulty passing stools, or a sensation of incomplete evacuation.',
    symptoms: [
      'Fewer than three bowel movements per week',
      'Hard, dry, or lumpy stools',
      'Difficulty or straining during bowel movements',
      'Feeling of incomplete evacuation',
      'Abdominal pain or discomfort',
      'Bloating',
      'Loss of appetite',
      'Feeling sluggish'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_HISTORY',
        value: 'Infrequent stools, straining',
        unit: '',
        normalRange: { min: 'Regular bowel movements', max: 'Regular bowel movements' },
        status: 'Infrequent stools, straining',
        description: 'Diagnosis is primarily based on the patient\'s history and symptoms'
      },
      {
        id: 'PHYSICAL_EXAM',
        value: 'Abdominal distension or tenderness',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abdominal distension or tenderness',
        description: 'A physical exam may reveal abdominal distension or tenderness'
      },
      {
        id: 'COLON_TRANSIT_STUDY',
        value: 'Slow transit',
        unit: '',
        normalRange: { min: 'Normal transit', max: 'Normal transit' },
        status: 'Slow transit',
        description: 'Colon transit studies can assess the movement of contents through the colon but are not routinely needed'
      }
    ],
    medications: [
      'Fiber supplements (e.g., psyllium, methylcellulose)',
      'Osmotic laxatives (e.g., polyethylene glycol, lactulose)',
      'Stimulant laxatives (e.g., bisacodyl, senna)',
      'Stool softeners (e.g., docusate)',
      'Lubiprostone or linaclotide (for chronic idiopathic constipation or IBS-C)'
    ],
    lifestyle: [
      'Increasing dietary fiber intake',
      'Drinking plenty of fluids',
      'Regular exercise',
      'Establishing a regular bowel routine',
      'Responding to the urge to defecate promptly',
      'Pelvic floor physical therapy (for dyssynergic defecation)'
    ],
    diet: [
      'High-fiber diet (fruits, vegetables, whole grains, legumes, nuts, seeds)',
      'Adequate hydration',
      'Prunes or prune juice',
      'Limiting processed foods, low-fiber foods, and dairy products (in some individuals)'
    ]
  },
  {
    id: 'coronary-heart-disease',
    name: 'Coronary Heart Disease',
    category: 'Cardiovascular',
    description: 'A type of heart disease caused by the buildup of plaque in the coronary arteries, the blood vessels that supply oxygen-rich blood to the heart muscle. Also known as coronary artery disease (CAD).',
    symptoms: [
      'Chest pain or discomfort (angina)',
      'Shortness of breath',
      'Pain or discomfort in the arms or shoulder',
      'Fatigue',
      'Nausea',
      'Lightheadedness',
      'Cold sweats',
      'May be asymptomatic'
    ],
    relatedParameters: [
      {
        id: 'ECG',
        value: 'ST-segment changes or other abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'ST-segment changes or other abnormalities',
        description: 'Electrocardiogram (ECG) may show signs of ischemia (reduced blood flow), such as ST-segment depression or elevation, or other abnormalities'
      },
      {
        id: 'STRESS_TEST',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Exercise stress test or nuclear stress test may reveal reduced blood flow to the heart muscle during exertion'
      },
      {
        id: 'CORONARY_ANGIOGRAPHY',
        value: 'Stenosis or blockage',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Stenosis or blockage',
        description: 'Coronary angiography can visualize narrowing or blockages in the coronary arteries'
      },
      {
        id: 'CARDIAC_BIOMARKERS',
        value: 'Elevated',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Elevated',
        description: 'Cardiac biomarkers (e.g., troponin) may be elevated if there is damage to the heart muscle (e.g., during a heart attack)'
      },
      {
        id: 'LDL',
        status: 'HIGH',
        description: 'Elevated low-density lipoprotein (LDL) cholesterol ("bad" cholesterol) is a major risk factor'
      }
    ],
    medications: [
      'Statins (to lower cholesterol)',
      'Aspirin or other antiplatelet agents (to prevent blood clots)',
      'Beta-blockers (to reduce heart rate and blood pressure)',
      'ACE inhibitors or ARBs (to lower blood pressure and have other benefits)',
      'Nitrates (to treat angina)',
      'Calcium channel blockers (to lower blood pressure and treat angina)'
    ],
    lifestyle: [
      'Heart-healthy diet',
      'Regular physical activity',
      'Maintaining a healthy weight',
      'Smoking cessation',
      'Managing stress',
      'Controlling blood pressure and diabetes',
      'Regular medical check-ups'
    ],
    diet: [
      'Low in saturated and trans fats',
      'Low in cholesterol',
      'Low in sodium',
      'Rich in fruits, vegetables, and whole grains',
      'Lean protein sources (fish, poultry, legumes)',
      'Limited intake of added sugars',
      'Portion control'
    ]
  },
  {
    id: 'coronavirus',
    name: 'Coronavirus (COVID-19)',
    category: 'Infectious',
    description: 'An infectious disease caused by the SARS-CoV-2 virus. It primarily affects the respiratory system but can also impact other organs. The severity of COVID-19 varies widely, from asymptomatic cases to severe illness and death.',
    symptoms: [
      'Fever',
      'Cough',
      'Fatigue',
      'Shortness of breath',
      'Loss of taste or smell',
      'Sore throat',
      'Muscle aches',
      'Headache',
      'Nasal congestion',
      'Nausea or vomiting',
      'Diarrhea'
    ],
    relatedParameters: [
      {
        id: 'PCR_TEST',
        value: 'SARS-CoV-2 detected',
        unit: '',
        normalRange: { min: 'Not detected', max: 'Not detected' },
        status: 'SARS-CoV-2 detected',
        description: 'Polymerase chain reaction (PCR) test on a nasal or throat swab is the gold standard for diagnosing active infection'
      },
      {
        id: 'ANTIGEN_TEST',
        value: 'SARS-CoV-2 antigen detected',
        unit: '',
        normalRange: { min: 'Not detected', max: 'Not detected' },
        status: 'SARS-CoV-2 antigen detected',
        description: 'Rapid antigen tests can also detect SARS-CoV-2 but are generally less sensitive than PCR'
      },
      {
        id: 'CHEST_X_RAY_OR_CT',
        value: 'Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormalities',
        description: 'Chest X-ray or CT scan may show abnormalities (e.g., ground-glass opacities) in the lungs, especially in severe cases'
      },
      {
        id: 'WBC',
        value: 'Normal or decreased',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Normal or decreased',
        description: 'White blood cell count may be normal or decreased, lymphopenia (low lymphocyte count) is common'
      }
    ],
    medications: [
      'Antiviral drugs (e.g., remdesivir, nirmatrelvir/ritonavir (Paxlovid))',
      'Monoclonal antibodies (e.g., casirivimab/imdevimab, sotrovimab) - for high-risk individuals with mild to moderate COVID-19',
      'Corticosteroids (e.g., dexamethasone) - for hospitalized patients requiring supplemental oxygen or mechanical ventilation',
      'Immunomodulators (e.g., baricitinib, tocilizumab) - for hospitalized patients with severe COVID-19',
      'Pain relievers (e.g., acetaminophen, ibuprofen)'
    ],
    lifestyle: [
      'Isolation to prevent spread',
      'Rest',
      'Drinking plenty of fluids',
      'Monitoring symptoms',
      'Seeking medical care if symptoms worsen',
      'Vaccination (prevention)',
      'Wearing masks in public',
      'Hand hygiene',
      'Physical distancing'
    ],
    diet: [
      'Adequate hydration',
      'Nutritious foods to support the immune system',
      'Generally not directly related to diet, but a healthy diet is important for overall health and recovery'
    ]
  },
  {
    id: 'costochondritis',
    name: 'Costochondritis',
    category: 'Musculoskeletal',
    description: 'An inflammation of the cartilage that connects the ribs to the breastbone (sternum). It typically causes chest pain that can mimic a heart attack.',
    symptoms: [
      'Sharp chest pain',
      'Pain that worsens with movement or deep breaths',
      'Tenderness when pressing on the affected area',
      'Pain may radiate to back or abdomen',
      'Typically localized'
    ],
    relatedParameters: [
      {
        id: 'PHYSICAL_EXAM',
        value: 'Tenderness over costochondral junctions',
        unit: '',
        normalRange: { min: 'No tenderness', max: 'No tenderness' },
        status: 'Tenderness over costochondral junctions',
        description: 'Diagnosis is usually based on the physical exam, with tenderness over the affected costochondral junctions'
      },
      {
        id: 'IMAGING',
        value: 'Usually normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Usually normal',
        description: 'Imaging tests (e.g., chest X-ray, CT) are usually normal but may be done to rule out other conditions'
      }
    ],
    medications: [
      'NSAIDs (e.g., ibuprofen, naproxen)',
      'Pain relievers (e.g., acetaminophen)',
      'Topical analgesics (e.g., capsaicin cream)',
      'Corticosteroid injections (in some cases)'
    ],
    lifestyle: [
      'Rest',
      'Avoiding activities that worsen pain',
      'Heat or cold therapy',
      'Stretching exercises',
      'Posture improvement'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'crohns-disease',
    name: 'Crohn\'s Disease',
    category: 'Gastrointestinal',
    description: 'A type of inflammatory bowel disease (IBD) that causes chronic inflammation of the gastrointestinal tract. It can affect any part of the GI tract, from the mouth to the anus.',
    symptoms: [
      'Abdominal pain and cramping',
      'Diarrhea',
      'Weight loss',
      'Fatigue',
      'Rectal bleeding',
      'Fever',
      'Mouth sores',
      'Reduced appetite',
      'Perianal disease (fistulas, abscesses)'
    ],
    relatedParameters: [
      {
        id: 'COLONOSCOPY',
        value: 'Inflammation, ulceration, or strictures',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation, ulceration, or strictures',
        description: 'Colonoscopy with biopsy can show characteristic features of Crohn\'s disease, such as skip lesions, cobblestoning, and granulomas'
      },
      {
        id: 'IMAGING',
        value: 'Bowel wall thickening or strictures',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bowel wall thickening or strictures',
        description: 'Imaging tests (e.g., CT enterography, MR enterography) can assess the extent and severity of disease'
      },
      {
        id: 'FECAL_CALPROTECTIN',
        value: 'Elevated',
        unit: '',
        normalRange: { min: '<50', max: '<50' },
        status: 'Elevated',
        description: 'Fecal calprotectin is a marker of intestinal inflammation and is often elevated in active Crohn\'s disease'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'C-reactive protein (CRP) may be elevated, especially during active disease'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Erythrocyte sedimentation rate (ESR) may be elevated'
      }
    ],
    medications: [
      'Aminosalicylates (e.g., mesalamine, sulfasalazine) - for mild to moderate disease',
      'Corticosteroids (e.g., prednisone, budesonide) - for moderate to severe disease or flares',
      'Immunomodulators (e.g., azathioprine, 6-mercaptopurine, methotrexate)',
      'Biologics (e.g., infliximab, adalimumab, vedolizumab, ustekinumab)',
      'Antibiotics (e.g., metronidazole, ciprofloxacin) - for perianal disease or bacterial overgrowth',
      'Pain relievers (e.g., acetaminophen)'
    ],
    lifestyle: [
      'Smoking cessation (smoking worsens Crohn\'s disease)',
      'Stress management',
      'Regular exercise',
      'Regular follow-up with a gastroenterologist',
      'Surgery (in some cases, to remove affected sections of the bowel or to treat complications)'
    ],
    diet: [
      'No specific diet has been proven to treat Crohn\'s disease, but some individuals find that certain foods worsen symptoms',
      'During flares, a low-fiber, low-residue diet may be recommended',
      'Adequate hydration',
      'Nutritional supplements if needed (e.g., iron, vitamin B12, calcium, vitamin D)',
      'Working with a registered dietitian can be helpful',
      'Some individuals may benefit from an elemental or polymeric diet during flares'
    ]
  },
  {
    id: 'croup',
    name: 'Croup',
    category: 'Respiratory',
    description: 'An upper respiratory infection that causes swelling in the upper airway, leading to a characteristic barking cough and difficulty breathing. It mainly affects young children.',
    symptoms: [
      'Barking cough',
      'Stridor (high-pitched breathing sound)',
      'Hoarseness',
      'Difficulty breathing',
      'Fever',
      'Symptoms often worse at night',
      'Runny nose',
      'Retractions (chest pulling in with breathing)'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_EXAM',
        value: 'Barking cough, stridor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Barking cough, stridor',
        description: 'Diagnosis is usually based on the characteristic barking cough and stridor'
      },
      {
        id: 'NECK_X_RAY',
        value: '"Steeple sign"',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: '"Steeple sign"',
        description: 'A neck X-ray may show subglottic narrowing ("steeple sign"), but is not always necessary'
      },
      {
        id: 'PULSE_OXIMETRY',
        value: 'Normal or decreased oxygen saturation',
        unit: '',
        normalRange: {min: '95-100%', max: '95-100%'},
        status: 'Normal or decreased oxygen saturation',
        description: 'Pulse oximetry may be used to assess oxygen levels'
      }
    ],
    medications: [
      'Corticosteroids (e.g., dexamethasone)',
      'Nebulized epinephrine (for moderate to severe cases)',
      'Oxygen (if needed)'
    ],
    lifestyle: [
      'Cool, humidified air',
      'Keeping the child calm and comfortable',
      'Monitoring for worsening respiratory distress',
      'Hospitalization for severe cases'
    ],
    diet: [
      'Adequate hydration',
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'cystic-fibrosis',
    name: 'Cystic Fibrosis',
    category: 'Genetic',
    description: 'A genetic disorder that causes thick, sticky mucus to build up in the lungs, digestive tract, and other organs. It leads to recurrent respiratory infections, digestive problems, and other complications.',
    symptoms: [
      'Persistent cough with thick mucus',
      'Wheezing',
      'Recurrent lung infections',
      'Shortness of breath',
      'Poor weight gain',
      'Bulky, greasy stools',
      'Salty-tasting skin',
      'Nasal polyps',
      'Clubbing of fingers and toes'
    ],
    relatedParameters: [
      {
        id: 'SWEAT_CHLORIDE_TEST',
        value: 'Elevated',
        unit: '',
        normalRange: { min: '<30 mmol/L', max: '<30 mmol/L' },
        status: 'Elevated',
        description: 'A sweat chloride test is the primary diagnostic test, with elevated sweat chloride levels (>60 mmol/L) being diagnostic'
      },
      {
        id: 'GENETIC_TESTING',
        value: 'CFTR mutations',
        unit: '',
        normalRange: { min: 'No mutations', max: 'No mutations' },
        status: 'CFTR mutations',
        description: 'Genetic testing can identify mutations in the CFTR gene'
      },
      {
        id: 'CHEST_X_RAY_OR_CT',
        value: 'Bronchiectasis, hyperinflation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bronchiectasis, hyperinflation',
        description: 'Chest X-ray or CT scan may show bronchiectasis, hyperinflation, or other lung abnormalities'
      },
      {
        id: 'PFTs',
        value: 'Obstructive pattern',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Obstructive pattern',
        description: 'Pulmonary function tests (PFTs) often show an obstructive pattern'
      },
      {
        id: 'FECAL_ELASTASE',
        status: 'LOW',
        description: 'May be measured to assess pancreatic function'
      }
    ],
    medications: [
      'Bronchodilators',
      'Mucolytics (e.g., dornase alfa)',
      'Inhaled hypertonic saline',
      'Antibiotics (for respiratory infections)',
      'Pancreatic enzyme replacement therapy (PERT)',
      'CFTR modulators (e.g., ivacaftor, lumacaftor/ivacaftor, tezacaftor/ivacaftor, elexacaftor/tezacaftor/ivacaftor)',
      'Fat-soluble vitamin supplements (A, D, E, K)'
    ],
    lifestyle: [
      'Airway clearance techniques (e.g., chest physiotherapy, postural drainage)',
      'Regular exercise',
      'Nutritional counseling',
      'Regular follow-up with a CF care team',
      'Lung transplantation in select cases',
      'Avoiding exposure to respiratory infections',
      'Genetic counseling'
    ],
    diet: [
      'High-calorie, high-fat diet',
      'Pancreatic enzyme replacement therapy (PERT) with meals and snacks',
      'Fat-soluble vitamin supplementation',
      'Nutritional supplements if needed',
      'Salt supplementation (especially in hot weather or during exercise)',
      'Working with a registered dietitian is important'
    ]
  },
  {
    id: 'cystitis',
    name: 'Cystitis',
    category: 'Urological',
    description: 'Inflammation of the bladder, usually caused by a bacterial infection. It is a type of urinary tract infection (UTI).',
    symptoms: [
      'Painful urination (dysuria)',
      'Frequent urination',
      'Urgency to urinate',
      'Lower abdominal pain or pressure',
      'Cloudy or strong-smelling urine',
      'Blood in urine (hematuria)',
      'Low-grade fever',
      'Feeling unwell'
    ],
    relatedParameters: [
      {
        id: 'URINALYSIS',
        value: 'Pyuria, bacteriuria, +/- hematuria',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Pyuria, bacteriuria, +/- hematuria',
        description: 'Urinalysis may show pyuria (white blood cells in urine), bacteriuria (bacteria in urine), and possibly hematuria (red blood cells in urine)'
      },
      {
        id: 'URINE_CULTURE',
        value: 'Bacterial growth',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'Bacterial growth',
        description: 'Urine culture can identify the causative bacteria and guide antibiotic selection'
      }
    ],
    medications: [
      'Antibiotics (e.g., trimethoprim-sulfamethoxazole, nitrofurantoin, fosfomycin, cephalosporins, fluoroquinolones)',
      'Pain relievers (e.g., phenazopyridine)'
    ],
    lifestyle: [
      'Drinking plenty of fluids',
      'Cranberry products (may help prevent recurrent UTIs, but evidence is mixed)',
      'Wiping from front to back after using the toilet',
      'Urinating after sexual intercourse',
      'Avoiding potentially irritating feminine products',
      'Completing the full course of antibiotics'
    ],
    diet: [
      'Adequate hydration',
      'Cranberry juice or supplements (may help prevent recurrent UTIs, but evidence is mixed)',
      'Avoiding bladder irritants (e.g., caffeine, alcohol, spicy foods) if they worsen symptoms'
    ]
  },
  {
    id: 'deep-vein-thrombosis',
    name: 'Deep Vein Thrombosis',
    category: 'Cardiovascular',
    description: 'A blood clot (thrombus) that forms in a deep vein, usually in the leg. It can cause pain and swelling and can lead to serious complications, such as pulmonary embolism.',
    symptoms: [
      'Swelling in the affected leg',
      'Pain or tenderness in the leg',
      'Redness or discoloration of the skin',
      'Warmth over the affected area',
      'May be asymptomatic',
      'Calf pain on dorsiflexion of foot'
    ],
    relatedParameters: [
      {
        id: 'D_DIMER',
        value: 'Elevated',
        unit: '',
        normalRange: { min: '<500 ng/mL', max: '<500 ng/mL' },
        status: 'Elevated',
        description: 'D-dimer is often elevated but is not specific for DVT'
      },
      {
        id: 'COMPRESSION_ULTRASOUND',
        value: 'Non-compressible vein',
        unit: '',
        normalRange: { min: 'Compressible vein', max: 'Compressible vein' },
        status: 'Non-compressible vein',
        description: 'Compression ultrasonography is the primary imaging test for diagnosing DVT'
      },
      {
        id: 'VENOGRAPHY',
        value: 'Filling defect',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Filling defect',
        description: 'Contrast venography is less commonly used but can be helpful in some cases'
      }
    ],
    medications: [
      'Anticoagulants (e.g., heparin, low-molecular-weight heparin, warfarin, direct oral anticoagulants)',
      'Thrombolytics (in select cases, to dissolve the clot)',
      'Pain relievers (e.g., acetaminophen, NSAIDs)'
    ],
    lifestyle: [
      'Early mobilization after starting anticoagulation',
      'Compression stockings',
      'Elevation of the affected leg',
      'Regular exercise',
      'Avoiding prolonged sitting or standing',
      'Inferior vena cava (IVC) filter placement (in select cases, if anticoagulation is contraindicated or if recurrent clots occur despite anticoagulation)'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight and staying hydrated are important',
      'If taking warfarin, maintain a consistent intake of vitamin K'
    ]
  },
  {
    id: 'degenerative-cervical-myelopathy',
    name: 'Degenerative Cervical Myelopathy',
    category: 'Neurological',
    description: 'A condition where degenerative changes in the cervical spine lead to compression of the spinal cord, causing neck pain, stiffness, and neurological symptoms.',
    symptoms: [
      'Neck pain and stiffness',
      'Numbness or tingling in arms or hands',
      'Weakness in arms or hands',
      'Difficulty with fine motor tasks',
      'Gait disturbances',
      'Loss of balance',
      'Bowel or bladder dysfunction',
      'Loss of coordination'
    ],
    relatedParameters: [
      {
        id: 'MRI',
        value: 'Spinal cord compression',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Spinal cord compression',
        description: 'MRI of the cervical spine is the gold standard for diagnosis, showing spinal cord compression, degenerative changes, and signal changes within the cord'
      },
      {
        id: 'X_RAY',
        value: 'Degenerative changes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Degenerative changes',
        description: 'X-rays may show degenerative changes, such as loss of disk height, osteophytes, and narrowing of the spinal canal, but are less sensitive than MRI'
      },
      {
        id: 'CT',
        value: 'Bone spurs, narrowing of spinal canal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bone spurs, narrowing of spinal canal',
        description: 'CT scans can provide detailed images of bone and may show bone spurs or narrowing of the spinal canal'
      },
      {
        id: 'NERVE_CONDUCTION_STUDIES_AND_EMG',
        value: 'Abnormal',
        unit: '',
        normalRange: {min: 'Normal', max: 'Normal'},
        status: 'Abnormal',
        description: 'Nerve conduction studies and electromyography (EMG) may show abnormalities but are not always necessary for diagnosis'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, NSAIDs)',
      'Muscle relaxants',
      'Neuropathic pain agents (e.g., gabapentin, pregabalin)',
      'Corticosteroids (in some cases, for short-term use)'
    ],
    lifestyle: [
      'Physical therapy',
      'Neck exercises',
      'Posture improvement',
      'Cervical collar (for short-term use or specific activities)',
      'Surgical decompression in moderate to severe cases or with progressive neurological deficits',
      'Occupational therapy',
      'Assistive devices if needed'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight and reducing inflammation through diet may be beneficial'
    ]
  },
  {
    id: 'dementia',
    name: 'Dementia',
    category: 'Neurological',
    description:
      'A group of conditions characterized by a decline in cognitive function, affecting memory, thinking, language, judgment, and behavior. It is severe enough to interfere with daily life and is not a normal part of aging.',
    symptoms: [
      'Memory loss, especially recent events',
      'Difficulty with problem-solving and planning',
      'Challenges with language and communication',
      'Confusion about time and place',
      'Impaired judgment and decision-making',
      'Changes in mood and personality',
      'Difficulty performing familiar tasks',
      'Misplacing things',
      'Withdrawal from social activities',
    ],
    relatedParameters: [
      {
        id: 'COGNITIVE_TESTS',
        value: 'Impaired performance',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Impaired performance',
        description:
          'Cognitive tests (e.g., Mini-Mental State Examination, Montreal Cognitive Assessment) show impaired performance in multiple cognitive domains',
      },
      {
        id: 'BRAIN_IMAGING',
        value: 'Atrophy, other changes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Atrophy, other changes',
        description:
          'Brain imaging (e.g., MRI, CT) may show brain atrophy, vascular changes, or other abnormalities depending on the type of dementia',
      },
      {
        id: 'BLOOD_TESTS',
        value: 'Variable',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description:
          'Blood tests are used to rule out other treatable causes of cognitive impairment (e.g., thyroid disorders, vitamin deficiencies)',
      },
    ],
    medications: [
      'Cholinesterase inhibitors (e.g., donepezil, rivastigmine, galantamine) - for Alzheimer\'s disease',
      'Memantine - for moderate to severe Alzheimer\'s disease',
      'Antidepressants - for mood symptoms',
      'Antipsychotics - for behavioral symptoms (use with caution)',
    ],
    lifestyle: [
      'Cognitive stimulation and engagement',
      'Regular physical activity',
      'Social interaction',
      'Maintaining a safe and structured environment',
      'Support for caregivers',
    ],
    diet: [
      'A healthy, balanced diet (e.g., Mediterranean diet) may be beneficial',
      'Adequate hydration',
    ],
  },
  {
    id: 'dental-abscess',
    name: 'Dental Abscess',
    category: 'Dental',
    description:
      'A localized collection of pus that forms in the tissues surrounding a tooth, usually due to a bacterial infection. It can cause severe pain and swelling and may spread to other areas if left untreated.',
    symptoms: [
      'Severe, throbbing toothache',
      'Swelling in the face, cheek, or jaw',
      'Pain that radiates to the ear, jaw, or neck',
      'Sensitivity to hot or cold',
      'Foul taste in the mouth',
      'Fever',
      'Difficulty swallowing or breathing (in severe cases)',
      'Swollen lymph nodes in the neck',
    ],
    relatedParameters: [
      {
        id: 'DENTAL_EXAM',
        value: 'Swelling, tenderness',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Swelling, tenderness',
        description:
          'A dental exam will reveal swelling, tenderness, and often a visible abscess around the affected tooth',
      },
      {
        id: 'DENTAL_X_RAYS',
        value: 'Radiolucent area',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Radiolucent area',
        description:
          'Dental X-rays can show a radiolucent (dark) area at the root of the tooth or in the surrounding bone, indicating bone loss due to infection',
      },
    ],
    medications: [
      'Antibiotics (e.g., amoxicillin, clindamycin) - to treat the infection',
      'Pain relievers (e.g., ibuprofen, acetaminophen) - to manage pain',
    ],
    lifestyle: [
      'Prompt dental treatment to drain the abscess and address the underlying cause',
      'Good oral hygiene (brushing, flossing, regular dental check-ups)',
      'Rinsing with warm salt water to help relieve pain and promote drainage',
      'Avoiding chewing on the affected side',
    ],
    diet: [
      'Soft foods that are easy to chew',
      'Avoiding very hot or cold foods and drinks',
      'Adequate hydration',
    ],
  },
  {
    id: 'depression',
    name: 'Depression',
    category: 'Psychiatric',
    description:
      'A mood disorder characterized by persistent sadness, loss of interest or pleasure, and a range of emotional and physical symptoms. It can significantly impact daily functioning and quality of life.',
    symptoms: [
      'Persistent sad, anxious, or "empty" mood',
      'Loss of interest or pleasure in activities',
      'Changes in appetite or weight',
      'Sleep disturbances (insomnia or hypersomnia)',
      'Fatigue or loss of energy',
      'Feelings of worthlessness or excessive guilt',
      'Difficulty concentrating or making decisions',
      'Restlessness or slowed movements',
      'Recurrent thoughts of death or suicide',
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_EVALUATION',
        value: 'Depressed mood, other symptoms',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Depressed mood, other symptoms',
        description:
          'Diagnosis is based on a clinical evaluation, including assessment of symptoms, medical history, and mental status exam',
      },
      {
        id: 'RATING_SCALES',
        value: 'Elevated scores',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Elevated scores',
        description:
          'Depression rating scales (e.g., PHQ-9, Beck Depression Inventory) can be used to assess symptom severity and monitor treatment response',
      },
      {
        id: 'BLOOD_TESTS',
        value: 'Variable',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description:
          'Blood tests may be done to rule out other medical conditions that can cause similar symptoms (e.g., hypothyroidism)',
      },
    ],
    medications: [
      'Selective serotonin reuptake inhibitors (SSRIs) (e.g., fluoxetine, sertraline, escitalopram)',
      'Serotonin-norepinephrine reuptake inhibitors (SNRIs) (e.g., venlafaxine, duloxetine)',
      'Tricyclic antidepressants (TCAs) (e.g., amitriptyline, nortriptyline)',
      'Monoamine oxidase inhibitors (MAOIs) (e.g., phenelzine, tranylcypromine)',
      'Atypical antidepressants (e.g., bupropion, mirtazapine)',
    ],
    lifestyle: [
      'Psychotherapy (e.g., cognitive-behavioral therapy, interpersonal therapy)',
      'Regular exercise',
      'Healthy diet',
      'Adequate sleep',
      'Stress management',
      'Social support',
      'Avoiding alcohol and substance use',
    ],
    diet: [
      'A balanced diet with plenty of fruits, vegetables, whole grains, and lean protein',
      'Limiting processed foods, sugary drinks, and excessive caffeine',
      'Omega-3 fatty acids may be beneficial',
    ],
  },
  {
    id: 'dermatitis-herpetiformis',
    name: 'Dermatitis Herpetiformis',
    category: 'Dermatological',
    description:
      'A chronic, intensely itchy skin condition associated with celiac disease. It is characterized by clusters of small blisters and bumps, primarily on the elbows, knees, buttocks, and scalp.',
    symptoms: [
      'Intensely itchy, burning rash',
      'Clusters of small blisters and bumps',
      'Symmetrical distribution on elbows, knees, buttocks, and scalp',
      'Erosions and excoriations from scratching',
      'Symptoms may fluctuate over time',
      'Gastrointestinal symptoms (in some cases) similar to celiac disease',
    ],
    relatedParameters: [
      {
        id: 'SKIN_BIOPSY',
        value: 'Granular IgA deposits',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Granular IgA deposits',
        description:
          'A skin biopsy from perilesional skin shows granular IgA deposits in the dermal papillae on direct immunofluorescence',
      },
      {
        id: 'SERUM_ANTIBODIES',
        value: 'Elevated IgA anti-tissue transglutaminase or IgA anti-endomysial antibodies',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Elevated IgA anti-tissue transglutaminase or IgA anti-endomysial antibodies',
        description:
          'Blood tests may show elevated IgA anti-tissue transglutaminase (IgA anti-tTG) or IgA anti-endomysial antibodies (IgA EMA), similar to celiac disease',
      },
    ],
    medications: [
      'Dapsone - to control itching and rash',
      'Topical corticosteroids - for temporary relief of itching',
    ],
    lifestyle: [
      'Strict gluten-free diet (lifelong) - this is the primary treatment and can lead to resolution of the rash',
      'Avoiding iodine-rich foods may help in some cases',
      'Regular follow-up with a dermatologist and gastroenterologist',
    ],
    diet: [
      'Strict gluten-free diet (avoiding wheat, barley, rye, and related grains)',
      'Careful label reading and avoiding cross-contamination',
      'Working with a registered dietitian experienced in celiac disease is essential',
    ],
  },
  {
    id: 'diabetes-mellitus-type1',
    name: 'Diabetes Mellitus Type 1',
    category: 'Endocrine',
    description: 'An autoimmune disease where the immune system attacks the insulin-producing cells in the pancreas, resulting in little to no insulin production and high blood sugar levels.',
    symptoms: [
      'Frequent urination, especially at night (nocturia)',
      'Excessive thirst (polydipsia)',
      'Unexplained weight loss',
      'Increased hunger (polyphagia)',
      'Blurry vision',
      'Numbness or tingling in hands or feet',
      'Fatigue',
      'Slow-healing sores',
      'Frequent infections',
      'Fruity smelling breath (ketoacidosis)'
    ],
    relatedParameters: [
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'Fasting blood glucose typically above 126 mg/dL'
      },
      {
        id: 'HBA1C',
        status: 'HIGH',
        description: 'HbA1c levels above 6.5%, indicating long-term high blood sugar'
      },
      {
        id: 'C_PEPTIDE',
        status: 'LOW',
        description: 'Low or undetectable levels indicate minimal insulin production'
      },
      {
        id: 'ISLET_AUTOANTIBODIES',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence of autoantibodies (e.g., GAD, IA-2) confirms autoimmune process'
      }
    ],
    medications: [
      'Insulin (essential for survival)',
      'Rapid-acting insulin',
      'Short-acting insulin',
      'Intermediate-acting insulin',
      'Long-acting insulin',
      'Insulin pump therapy'
    ],
    lifestyle: [
      'Blood sugar monitoring multiple times daily',
      'Insulin administration via injections or pump',
      'Carbohydrate counting',
      'Regular physical activity',
      'Regular medical check-ups and monitoring for complications',
      'Diabetic education and support'
    ],
    diet: [
      'Consistent carbohydrate intake at each meal',
      'Balanced diet with protein, healthy fats, and fiber',
      'Limit refined carbohydrates and sugary drinks',
      'Meal planning and timing coordinated with insulin dosing'
    ]
  },
  {
    id: 'diabetes-mellitus-type2',
    name: 'Diabetes Mellitus Type 2',
    category: 'Metabolic',
    description: 'A chronic metabolic disorder characterized by high blood sugar levels due to insulin resistance or insufficient insulin production.',
    symptoms: [
      'Increased thirst (polydipsia)',
      'Frequent urination (polyuria)',
      'Increased hunger (polyphagia)',
      'Unintended weight loss',
      'Fatigue',
      'Blurred vision',
      'Slow-healing sores',
      'Frequent infections',
      'Darkened skin in body folds (acanthosis nigricans)'
    ],
    relatedParameters: [
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'Fasting blood glucose typically elevated above 126 mg/dL'
      },
      {
        id: 'HBA1C',
        status: 'HIGH',
        description: 'HbA1c levels above 6.5% indicating long-term high blood sugar'
      },
      {
        id: 'TRIGLYCERIDES',
        status: 'HIGH',
        description: 'Often elevated due to metabolic disturbances'
      },
      {
        id: 'HDL',
        status: 'LOW',
        description: 'Reduced HDL cholesterol levels'
      }
    ],
    medications: [
      'Metformin (first-line treatment)',
      'Sulfonylureas',
      'DPP-4 inhibitors',
      'GLP-1 receptor agonists',
      'SGLT2 inhibitors',
      'Insulin (in some cases)'
    ],
    lifestyle: [
      'Regular physical activity (at least 150 minutes per week)',
      'Weight management (loss of 5-10% body weight if overweight)',
      'Blood sugar monitoring',
      'Regular medical check-ups',
      'Proper foot care',
      'Stress management'
    ],
    diet: [
      'Low glycemic index foods',
      'Controlled portion sizes',
      'Limited refined carbohydrates and added sugars',
      'Increased fiber intake',
      'Regular meal timing',
      'Heart-healthy fats in moderation'
    ]
  },
  {
    id: 'diabetes-insipidus',
    name: 'Diabetes Insipidus',
    category: 'Endocrine',
    description: 'A rare disorder characterized by the inability to properly regulate the body\'s fluid balance, leading to excessive thirst and urination. This is not related to blood sugar levels.',
    symptoms: [
      'Extreme thirst (polydipsia)',
      'Excessive urination of dilute urine (polyuria), often more than 3 liters per day',
      'Nocturia (frequent urination at night)',
      'Dehydration',
      'Dry skin',
      'Constipation',
      'Muscle weakness',
      'In children, may present as bedwetting, poor growth, or unexplained fevers'
    ],
    relatedParameters: [
      {
        id: 'URINE_OSMOLALITY',
        status: 'LOW',
        description: 'Urine osmolality is typically low (less than 300 mOsm/kg) even with fluid restriction'
      },
      {
        id: 'SERUM_OSMOLALITY',
        status: 'HIGH',
        description: 'Serum osmolality may be normal or high (above 295 mOsm/kg)'
      },
      {
        id: 'SODIUM',
        status: 'HIGH',
        description: 'Serum sodium may be elevated due to water loss'
      },
      {
        id: 'ADH',
        value: 'Low or Normal',
        unit: 'pg/mL',
        normalRange: { min: 0, max: 2 },
        status: 'Variable',
        description: 'ADH levels may be low in central DI or normal/high in nephrogenic DI'
      },
      {
        id: 'WATER_DEPRIVATION_TEST',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal response', max: 'Normal response' },
        status: 'Abnormal',
        description: 'Inability to concentrate urine after water deprivation is diagnostic'
      }
    ],
    medications: [
      'Desmopressin (synthetic ADH) for central diabetes insipidus',
      'Thiazide diuretics (paradoxically reduce urine output in nephrogenic DI)',
      'Indomethacin (can reduce urine output in some cases)',
      'Low-sodium diet (for nephrogenic DI)'
    ],
    lifestyle: [
      'Drinking plenty of fluids to prevent dehydration',
      'Monitoring fluid intake and urine output',
      'Regular medical follow-up',
      'Carrying medical identification (e.g., bracelet)'
    ],
    diet: [
      'Generally not directly related to diet, but adequate hydration is crucial',
      'Low-sodium diet may be recommended for nephrogenic DI'
    ]
  },
  {
    id: 'diabetic-retinopathy',
    name: 'Diabetic Retinopathy',
    category: 'Ophthalmological',
    description: 'A diabetes complication that affects the eyes, caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).',
    symptoms: [
      'Blurred vision',
      'Fluctuating vision',
      'Floaters (spots or dark strings floating in the field of vision)',
      'Dark or empty areas in vision',
      'Impaired color vision',
      'Difficulty seeing at night',
      'Vision loss (in advanced stages)',
      'May be asymptomatic in early stages'
    ],
    relatedParameters: [
      {
        id: 'FUNDOSCOPY',
        value: 'Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormalities',
        description: 'May show microaneurysms, hemorrhages, exudates, neovascularization'
      },
      {
        id: 'FLUORESCEIN_ANGIOGRAPHY',
        value: 'Leakage/Neovascularization',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Leakage/Neovascularization',
        description: 'Can reveal areas of leakage, blockage, or new blood vessel growth'
      },
      {
        id: 'OCT',
        value: 'Retinal thickening/Edema',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Retinal thickening/Edema',
        description: 'Optical coherence tomography can detect retinal thickening or macular edema'
      },
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'Poorly controlled blood sugar levels are a major risk factor'
      },
      {
        id: 'HBA1C',
        status: 'HIGH',
        description: 'Elevated HbA1c indicates long-term poor blood sugar control'
      }
    ],
    medications: [
      'Anti-VEGF injections (e.g., ranibizumab, bevacizumab)',
      'Corticosteroid injections or implants',
      'Laser photocoagulation (focal or panretinal)',
      'Vitrectomy (for severe cases)'
    ],
    lifestyle: [
      'Strict blood sugar control',
      'Blood pressure control',
      'Cholesterol management',
      'Regular dilated eye exams (at least annually)',
      'Smoking cessation',
      'Prompt treatment of any vision changes'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy diet to manage diabetes is important',
      'Diet rich in antioxidants and omega-3 fatty acids may be beneficial'
    ]
  },
  {
    id: 'diarrhoea',
    name: 'Diarrhoea',
    category: 'Gastrointestinal',
    description: 'A condition characterized by loose, watery stools occurring three or more times in a day. It can be acute or chronic and has various causes.',
    symptoms: [
      'Loose, watery stools',
      'Abdominal cramps or pain',
      'Bloating',
      'Nausea',
      'Urgent need to have a bowel movement',
      'Fever (in some cases)',
      'Dehydration (in severe cases)',
      'Blood or mucus in stool (in some cases)',
      'Weight loss (in chronic cases)'
    ],
    relatedParameters: [
      {
        id: 'STOOL_CULTURE',
        value: 'Positive or Negative',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'May identify bacterial or parasitic infections'
      },
      {
        id: 'STOOL_OVA_PARASITES',
        value: 'Positive or Negative',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'Can detect parasitic infections'
      },
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'May be elevated in infectious diarrhoea'
      },
      {
        id: 'ELECTROLYTES',
        status: 'IMBALANCED',
        description: 'May show imbalances (e.g., low potassium, low sodium) in severe cases due to fluid loss'
      },
      {
        id: 'CLOSTRIDIUM_DIFFICILE_TOXIN',
        value: 'Positive or Negative',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'Detects C. difficile infection, a common cause of antibiotic-associated diarrhea'
      }
    ],
    medications: [
      'Rehydration solutions (e.g., oral rehydration salts)',
      'Antidiarrheal agents (e.g., loperamide, bismuth subsalicylate) - use with caution',
      'Antibiotics (if bacterial infection is confirmed)',
      'Antiparasitic drugs (if parasitic infection is confirmed)',
      'Probiotics (may help restore gut flora balance)'
    ],
    lifestyle: [
      'Drinking plenty of clear fluids to prevent dehydration',
      'Rest',
      'Good hygiene (handwashing) to prevent spread',
      'Avoiding foods that may worsen diarrhea (e.g., caffeine, dairy, fatty foods)',
      'Gradual reintroduction of solid foods'
    ],
    diet: [
      'BRAT diet (bananas, rice, applesauce, toast) - may be helpful in acute cases',
      'Clear broths',
      'Plain yogurt with live cultures (probiotics)',
      'Avoidance of dairy, caffeine, alcohol, and greasy foods until resolved'
    ]
  },
  {
    id: 'discoid-eczema',
    name: 'Discoid Eczema',
    category: 'Dermatological',
    description: 'A type of eczema characterized by distinct, coin-shaped patches of inflamed skin. Also known as nummular eczema.',
    symptoms: [
      'Coin-shaped, red, itchy patches on the skin',
      'Patches may be dry, cracked, or oozing',
      'Burning or stinging sensation',
      'Crusting or scaling of the patches',
      'Patches may become thickened over time',
      'Often occurs on the limbs, but can appear anywhere',
      'Can be triggered by dry skin, skin injuries, or insect bites',
      'More common in winter months'
    ],
    relatedParameters: [
      {
        id: 'SKIN_BIOPSY',
        value: 'Inflammation/Spongiosis',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation/Spongiosis',
        description: 'May show characteristic features of eczema, but not usually needed for diagnosis'
      },
      {
        id: 'PATCH_TESTING',
        value: 'Positive or Negative',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'May be considered to identify potential allergens if contact allergy is suspected'
      },
      {
        id: 'IgE',
        status: 'NORMAL',
        description: 'Serum IgE is typically normal or only mildly elevated'
      },
    ],
    medications: [
      'Topical corticosteroids (for inflammation)',
      'Emollients (moisturizers)',
      'Topical calcineurin inhibitors (e.g., tacrolimus, pimecrolimus)',
      'Antihistamines (for itching)',
      'Antibiotics (if secondary bacterial infection is present)',
      'Phototherapy (in severe cases)'
    ],
    lifestyle: [
      'Regular moisturization with emollients',
      'Avoiding known triggers (e.g., harsh soaps, irritants)',
      'Lukewarm baths or showers',
      'Using mild, fragrance-free laundry detergents',
      'Wearing soft, breathable fabrics',
      'Keeping fingernails short to minimize scratching',
      'Stress management'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is beneficial for overall skin health',
      'Some individuals may find that certain foods (e.g., dairy, nuts) exacerbate their eczema, but this varies'
    ]
  },
  {
    id: 'diverticular-disease',
    name: 'Diverticular Disease',
    category: 'Gastrointestinal',
    description: 'A condition characterized by small, bulging pouches (diverticula) that can form in the lining of the digestive system, most commonly in the colon. Diverticulitis occurs when these pouches become inflamed or infected.',
    symptoms: [
      'Abdominal pain, often in the lower left side',
      'Changes in bowel habits (constipation or diarrhea)',
      'Bloating',
      'Flatulence',
      'Fever (in diverticulitis)',
      'Nausea and vomiting (in diverticulitis)',
      'Rectal bleeding (in some cases)',
      'May be asymptomatic in many cases (diverticulosis)'
    ],
    relatedParameters: [
      {
        id: 'CT_ABDOMEN',
        value: 'Diverticula/Inflammation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Diverticula/Inflammation',
        description: 'Can identify diverticula and signs of inflammation or complications (e.g., abscess, perforation)'
      },
      {
        id: 'COLONOSCOPY',
        value: 'Diverticula',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Diverticula',
        description: 'May visualize diverticula, but is usually avoided during acute diverticulitis'
      },
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'May be elevated in diverticulitis due to infection'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'May be elevated in diverticulitis due to inflammation'
      },
      {
        id: 'FECAL_CALPROTECTIN',
        status: 'HIGH',
        description: 'May be elevated in diverticulitis, indicating intestinal inflammation'
      }
    ],
    medications: [
      'Antibiotics (for diverticulitis)',
      'Pain relievers (e.g., acetaminophen)',
      'Antispasmodics (may help with abdominal cramps)',
      'Fiber supplements (for diverticulosis)',
    ],
    lifestyle: [
      'High-fiber diet (for diverticulosis, once inflammation has resolved)',
      'Adequate fluid intake',
      'Regular exercise',
      'Weight management',
      'Avoiding smoking',
      'Bowel rest (clear liquid diet) during acute diverticulitis'
    ],
    diet: [
      'High-fiber diet (fruits, vegetables, whole grains) for diverticulosis',
      'Low-fiber diet or clear liquid diet during acute diverticulitis',
      'Gradual increase in fiber intake after diverticulitis episode',
      'Adequate hydration'
    ]
  },
  {
    id: 'downs-syndrome',
    name: 'Down\'s Syndrome',
    category: 'Genetic',
    description: 'A genetic disorder caused by the presence of all or part of a third copy of chromosome 21. It is typically associated with physical growth delays, characteristic facial features, and mild to moderate intellectual disability.',
    symptoms: [
      'Flattened face, especially the bridge of the nose',
      'Almond-shaped eyes that slant up',
      'Short neck',
      'Small ears',
      'A tongue that tends to stick out of the mouth',
      'Tiny white spots on the iris (colored part) of the eye (Brushfield spots)',
      'Small hands and feet',
      'A single line across the palm of the hand (palmar crease)',
      'Poor muscle tone or loose joints',
      'Shorter in height as children and adults'
    ],
    relatedParameters: [
      {
        id: 'KARYOTYPE',
        value: 'Trisomy 21',
        unit: '',
        normalRange: { min: '46, XX or 46, XY', max: '46, XX or 46, XY' },
        status: 'Trisomy 21',
        description: 'Confirms the presence of an extra copy of chromosome 21'
      },
      {
        id: 'PRENATAL_SCREENING',
        value: 'Increased risk',
        unit: '',
        normalRange: { min: 'Low risk', max: 'Low risk' },
        status: 'Increased risk',
        description: 'Non-invasive prenatal tests (NIPT) or combined first-trimester screening may indicate increased risk'
      },
      {
        id: 'ECHOCARDIOGRAM',
        value: 'Cardiac defects',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May reveal congenital heart defects, which are common in Down syndrome'
      },
      {
        id: 'THYROID_FUNCTION_TESTS',
        status: 'ABNORMAL',
        description: 'Hypothyroidism is more common in individuals with Down syndrome'
      }
    ],
    medications: [
      'No specific medication to treat Down syndrome itself',
      'Medications to treat associated conditions (e.g., thyroid hormone for hypothyroidism, antibiotics for infections)',
      'Early intervention therapies (speech, physical, occupational)'
    ],
    lifestyle: [
      'Early intervention programs',
      'Special education',
      'Regular medical check-ups to monitor for associated health conditions',
      'Supportive therapies (speech, physical, occupational)',
      'Inclusion in community and social activities',
      'Healthy lifestyle (diet, exercise)'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is important for overall health',
      'Some individuals may have feeding difficulties or require dietary modifications due to associated conditions (e.g., celiac disease)'
    ]
  },
  {
    id: 'dystonia',
    name: 'Dystonia',
    category: 'Neurological',
    description: 'A movement disorder characterized by sustained or intermittent muscle contractions causing twisting and repetitive movements or abnormal fixed postures.',
    symptoms: [
      'Involuntary muscle contractions',
      'Twisting or repetitive movements',
      'Abnormal postures',
      'Tremor',
      'Pain',
      'Symptoms may worsen with stress or fatigue',
      'Can affect various body parts (e.g., neck, limbs, eyelids, vocal cords)',
      'Symptoms may be task-specific (e.g., writer\'s cramp)'
    ],
    relatedParameters: [
      {
        id: 'NEUROLOGICAL_EXAM',
        value: 'Abnormal movements/postures',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal movements/postures',
        description: 'Can identify characteristic features of dystonia'
      },
      {
        id: 'GENETIC_TESTING',
        value: 'Genetic mutations',
        unit: '',
        normalRange: { min: 'No mutations', max: 'No mutations' },
        status: 'Variable',
        description: 'May be considered in some cases to identify specific genetic causes (e.g., DYT1)'
      },
      {
        id: 'MRI_BRAIN',
        value: 'Normal or Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'Usually normal, but may be helpful to rule out other conditions or identify structural abnormalities in some cases'
      },
      {
        id: 'EMG',
        value: 'Abnormal muscle activity',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal muscle activity',
        description: 'Electromyography can demonstrate abnormal patterns of muscle activation'
      }
    ],
    medications: [
      'Botulinum toxin injections (for focal dystonia)',
      'Anticholinergics (e.g., trihexyphenidyl)',
      'Muscle relaxants (e.g., baclofen)',
      'Dopaminergic agents (e.g., levodopa) - in some cases',
      'Deep brain stimulation (DBS) - for severe, treatment-refractory cases'
    ],
    lifestyle: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy (for laryngeal dystonia)',
      'Stress management',
      'Use of sensory tricks (e.g., touching the affected body part) to alleviate symptoms',
      'Assistive devices (e.g., specialized writing tools)'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is beneficial for overall health'
    ]
  },
  {
    id: 'ebola-virus-disease',
    name: 'Ebola Virus Disease',
    category: 'Infectious',
    description: 'A rare and deadly disease caused by infection with one of the Ebola virus species. It is transmitted through direct contact with the blood or body fluids of an infected person or animal.',
    symptoms: [
      'Fever',
      'Severe headache',
      'Muscle pain and weakness',
      'Fatigue',
      'Sore throat',
      'Vomiting',
      'Diarrhea',
      'Abdominal pain',
      'Unexplained hemorrhage (bleeding or bruising)',
      'Rash'
    ],
    relatedParameters: [
      {
        id: 'RT_PCR',
        value: 'Positive for Ebola virus',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Reverse transcriptase-polymerase chain reaction detects the presence of Ebola virus RNA in the blood'
      },
      {
        id: 'ELISA',
        value: 'Positive for Ebola virus antigens or antibodies',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Enzyme-linked immunosorbent assay can detect Ebola virus antigens or antibodies'
      },
      {
        id: 'WBC',
        status: 'LOW',
        description: 'White blood cell count may initially be low, followed by an increase'
      },
      {
        id: 'PLATELETS',
        status: 'LOW',
        description: 'Platelet count is often low'
      },
      {
        id: 'LFTs',
        status: 'ABNORMAL',
        description: 'Liver function tests may show elevated liver enzymes (AST, ALT)'
      }
    ],
    medications: [
      'Supportive care (e.g., intravenous fluids, electrolytes, oxygen)',
      'Antiviral medications (e.g., Inmazeb, Ebanga) - recently approved',
      'Convalescent plasma (containing antibodies from recovered patients) - used in some cases',
      'Management of complications (e.g., organ failure, shock)'
    ],
    lifestyle: [
      'Strict isolation of infected individuals',
      'Use of personal protective equipment (PPE) by healthcare workers and caregivers',
      'Safe burial practices',
      'Intensive supportive care in specialized treatment centers',
      'Public health measures to prevent and control outbreaks (e.g., contact tracing, quarantine)'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining nutrition and hydration is crucial for supportive care'
    ]
  },
  {
    id: 'ectopic-pregnancy',
    name: 'Ectopic Pregnancy',
    category: 'Obstetric',
    description: 'A pregnancy in which the fertilized egg implants outside the uterus, most commonly in a fallopian tube. It is a potentially life-threatening condition that requires prompt treatment.',
    symptoms: [
      'Abdominal or pelvic pain, often one-sided',
      'Vaginal bleeding or spotting',
      'Missed menstrual period',
      'Shoulder pain (referred pain from internal bleeding)',
      'Dizziness or fainting (due to internal bleeding)',
      'Low blood pressure',
      'Symptoms of shock (in cases of rupture and severe bleeding)',
      'May be asymptomatic in early stages'
    ],
    relatedParameters: [
      {
        id: 'BETA_HCG',
        value: 'Abnormal rise',
        unit: 'mIU/mL',
        normalRange: { min: 'Doubles every 48-72h', max: 'Doubles every 48-72h' },
        status: 'Abnormal rise',
        description: 'Serum beta-hCG levels rise slower than expected in a normal intrauterine pregnancy'
      },
      {
        id: 'TRANSVAGINAL_ULTRASOUND',
        value: 'Empty uterus/Adnexal mass',
        unit: '',
        normalRange: { min: 'Intrauterine pregnancy', max: 'Intrauterine pregnancy' },
        status: 'Empty uterus/Adnexal mass',
        description: 'May show an empty uterus with a gestational sac or mass in the fallopian tube or elsewhere'
      },
      {
        id: 'PROGESTERONE',
        status: 'LOW',
        description: 'Serum progesterone levels may be lower than expected for a viable intrauterine pregnancy'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'May be decreased in cases of significant internal bleeding'
      }
    ],
    medications: [
      'Methotrexate (to terminate the pregnancy) - in selected cases',
      'Expectant management (close monitoring) - in some cases with declining hCG levels',
      'Surgery (laparoscopy or laparotomy) - to remove the ectopic pregnancy',
      'Blood transfusion (if significant blood loss)'
    ],
    lifestyle: [
      'Prompt medical attention for any signs or symptoms of ectopic pregnancy',
      'Emotional support and counseling',
      'Follow-up with healthcare provider after treatment',
      'Discussion of future pregnancy risks and contraception'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy diet is important for overall health and recovery'
    ]
  },
  {
    id: 'edwards-syndrome',
    name: 'Edwards\' Syndrome',
    category: 'Genetic',
    description: 'A genetic disorder caused by the presence of all or part of a third copy of chromosome 18. It is associated with severe developmental delays and multiple congenital anomalies.',
    symptoms: [
        'Intrauterine growth restriction (IUGR)',
        'Low birth weight',
        'Small, abnormally shaped head (microcephaly)',
        'Small jaw and mouth (micrognathia)',
        'Clenched fists with overlapping fingers',
        'Rocker-bottom feet',
        'Heart defects (e.g., VSD, PDA)',
        'Kidney malformations',
        'Severe intellectual disability',
        'Many infants do not survive beyond the first year of life'
    ],
    relatedParameters: [
      {
        id: 'KARYOTYPE',
        value: 'Trisomy 18',
        unit: '',
        normalRange: { min: '46, XX or 46, XY', max: '46, XX or 46, XY' },
        status: 'Trisomy 18',
        description: 'Confirms the presence of an extra copy of chromosome 18'
      },
      {
        id: 'PRENATAL_ULTRASOUND',
        value: 'Multiple anomalies',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Multiple anomalies',
        description: 'May show characteristic features such as IUGR, clenched fists, heart defects, and other structural abnormalities'
      },
      {
        id: 'PRENATAL_SCREENING',
        value: 'Increased risk',
        unit: '',
        normalRange: { min: 'Low risk', max: 'Low risk' },
        status: 'Increased risk',
        description: 'Non-invasive prenatal tests (NIPT) or maternal serum screening may indicate increased risk'
      },
      {
            id: 'AMNIOCENTESIS_OR_CVS',
            value: 'Trisomy 18',
            unit: '',
            normalRange: { min: 'Normal chromosomes', max: 'Normal chromosomes' },
            status: 'Trisomy 18',
            description: 'Confirmatory diagnostic tests that can detect trisomy 18 prenatally'
          }
    ],
    medications: [
      'No specific treatment for Edwards syndrome itself',
      'Supportive care to manage symptoms and complications',
      'Medications to treat associated conditions (e.g., heart failure, infections)',
      'Palliative care to provide comfort and support'
    ],
    lifestyle: [
      'Multidisciplinary care involving specialists (e.g., geneticists, cardiologists, neonatologists)',
      'Early intervention services (if applicable)',
      'Genetic counseling for parents',
      'Emotional support for families',
      'Decisions regarding life-sustaining interventions',
      'Respite care for caregivers'
    ],
    diet: [
      'Generally not directly related to diet, but infants may have feeding difficulties and require specialized feeding approaches or nutritional support'
    ]
  },
  {
    id: 'endometriosis',
    name: 'Endometriosis',
    category: 'Gynecological',
    description: 'A disorder in which tissue similar to the lining of the uterus (endometrium) grows outside the uterus, often causing pain and fertility issues.',
    symptoms: [
      'Pelvic pain, especially during menstruation',
      'Painful periods (dysmenorrhea)',
      'Pain during or after intercourse (dyspareunia)',
      'Heavy menstrual bleeding',
      'Infertility',
      'Pain with bowel movements or urination',
      'Fatigue',
      'Bloating',
      'Nausea',
      'Symptoms may vary depending on the location of endometrial implants'
    ],
    relatedParameters: [
      {
        id: 'LAPAROSCOPY',
        value: 'Endometrial implants',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Endometrial implants',
        description: 'The gold standard for diagnosis; can visualize and biopsy endometrial implants'
      },
      {
        id: 'CA125',
        status: 'ELEVATED',
        description: 'May be elevated, but not specific for endometriosis'
      },
      {
        id: 'TRANSVAGINAL_ULTRASOUND',
        value: 'Endometriomas/Adhesions',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Endometriomas/Adhesions',
        description: 'May show ovarian cysts (endometriomas) or adhesions, but cannot definitively diagnose endometriosis'
      },
      {
        id: 'MRI',
        value: 'Endometrial implants/Adhesions',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Endometrial implants/Adhesions',
        description: 'Can be helpful in detecting deep infiltrating endometriosis or planning surgery'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs)',
      'Hormonal contraceptives (e.g., birth control pills, patches, IUDs)',
      'Gonadotropin-releasing hormone (GnRH) agonists or antagonists',
      'Progestin therapy',
      'Aromatase inhibitors',
      'Surgical treatment (laparoscopic excision or ablation of implants, hysterectomy in severe cases)'
    ],
    lifestyle: [
      'Regular exercise',
      'Stress management',
      'Heat therapy (e.g., heating pads) for pain relief',
      'Support groups',
      'Adequate rest',
      'Complementary therapies (e.g., acupuncture, dietary changes) - may help some individuals'
    ],
    diet: [
      'Generally not directly related to diet, but some women find that certain dietary changes may help manage symptoms',
      'Anti-inflammatory diet (e.g., rich in fruits, vegetables, omega-3 fatty acids)',
      'Limited evidence for gluten-free or low-FODMAP diets'
    ]
  },
  {
    id: 'epilepsy',
    name: 'Epilepsy',
    category: 'Neurological',
    description: 'A chronic neurological disorder characterized by recurrent, unprovoked seizures due to abnormal electrical activity in the brain.',
    symptoms: [
      'Recurrent seizures (various types, including focal and generalized)',
      'Temporary confusion',
      'Staring spells',
      'Uncontrollable jerking movements of the arms and legs',
      'Loss of consciousness or awareness',
      'Psychic symptoms (e.g., fear, anxiety, déjà vu)',
      'Auras (sensory warning signs before some seizures)'
    ],
    relatedParameters: [
      {
        id: 'EEG',
        value: 'Abnormal electrical activity',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal electrical activity',
        description: 'Electroencephalogram can detect abnormal brain waves associated with seizures'
      },
      {
        id: 'MRI_BRAIN',
        value: 'Structural abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May reveal underlying causes such as brain tumors, scars, or malformations'
      },
      {
        id: 'VIDEO_EEG_MONITORING',
        value: 'Seizure recordings',
        unit: '',
        normalRange: { min: 'No seizures', max: 'No seizures' },
        status: 'Seizure recordings',
        description: 'Simultaneous video and EEG recording can help characterize seizure types and localize seizure onset'
      },
      {
        id: 'BLOOD_TESTS',
        status: 'VARIABLE',
        description: 'May be used to rule out metabolic causes or identify genetic factors'
      }
    ],
    medications: [
      'Antiepileptic drugs (AEDs) - various types, chosen based on seizure type and individual factors',
      'Vagus nerve stimulation (VNS)',
      'Responsive neurostimulation (RNS)',
      'Ketogenic diet (in some cases, especially for drug-resistant epilepsy in children)',
      'Epilepsy surgery (in selected cases)'
    ],
    lifestyle: [
      'Seizure precautions (e.g., avoiding heights, swimming alone)',
      'Medication adherence',
      'Adequate sleep',
      'Stress management',
      'Avoiding known seizure triggers (e.g., flashing lights, alcohol)',
      'Medical identification (e.g., bracelet)',
      'Driving restrictions (depending on seizure control and local laws)'
    ],
    diet: [
      'Generally not directly related to diet, except for the ketogenic diet which is a specialized high-fat, low-carbohydrate diet used in some cases of drug-resistant epilepsy'
    ]
  },
  {
    id: 'erectile-dysfunction',
    name: 'Erectile Dysfunction',
    category: 'Urological',
    description: 'The inability to get or maintain an erection firm enough for satisfactory sexual intercourse. It can have physical or psychological causes.',
    symptoms: [
      'Difficulty getting an erection',
      'Difficulty maintaining an erection',
      'Reduced sexual desire',
      'Premature or delayed ejaculation',
      'Anxiety related to sexual performance'
    ],
    relatedParameters: [
      {
        id: 'TESTOSTERONE',
        status: 'LOW',
        description: 'Low testosterone levels can contribute to ED'
      },
      {
        id: 'GLUCOSE',
        status: 'HIGH',
        description: 'Diabetes is a common risk factor for ED'
      },
      {
        id: 'LIPID_PROFILE',
        status: 'ABNORMAL',
        description: 'High cholesterol and other lipid abnormalities can contribute to ED'
      },
      {
        id: 'NOCTURNAL_PENILE_TUMESCENCE_TEST',
        value: 'Reduced or absent erections',
        unit: '',
        normalRange: { min: 'Normal erections', max: 'Normal erections' },
        status: 'Reduced or absent erections',
        description: 'Can help differentiate between physical and psychological causes'
      },
      {
        id: 'DUPLEX_ULTRASOUND',
        value: 'Reduced blood flow',
        unit: '',
        normalRange: { min: 'Normal blood flow', max: 'Normal blood flow' },
        status: 'Reduced blood flow',
        description: 'Can assess penile blood flow and identify vascular causes'
      }
    ],
    medications: [
      'Phosphodiesterase-5 (PDE5) inhibitors (e.g., sildenafil, tadalafil, vardenafil)',
      'Alprostadil (intraurethral or injectable)',
      'Testosterone replacement therapy (if low testosterone is present)',
      'Vacuum erection devices',
      'Penile implants (in severe cases)'
    ],
    lifestyle: [
      'Regular exercise',
      'Weight management',
      'Healthy diet',
      'Smoking cessation',
      'Limiting alcohol consumption',
      'Stress management',
      'Psychological counseling (if psychological factors are contributing)'
    ],
    diet: [
      'Generally not directly related to diet, but a heart-healthy diet can improve overall vascular health and may benefit ED'
    ]
  },
  {
    id: 'escherichia-coli',
    name: 'Escherichia coli (E. coli)',
    category: 'Infectious',
    description: 'A type of bacteria that normally lives in the intestines of people and animals. Most strains are harmless, but some can cause illness, ranging from diarrhea to severe infections.',
    symptoms: [
      'Diarrhea (often watery, may be bloody)',
      'Abdominal cramping and pain',
      'Nausea and vomiting',
      'Fever',
      'Fatigue',
      'Symptoms vary depending on the specific strain and type of infection',
      'Some strains can cause urinary tract infections (UTIs) or other extraintestinal infections'
    ],
    relatedParameters: [
      {
        id: 'STOOL_CULTURE',
        value: 'Positive for pathogenic E. coli',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify pathogenic strains of E. coli in stool samples'
      },
      {
        id: 'SHIGA_TOXIN_TEST',
        value: 'Positive or Negative',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'Detects Shiga toxin produced by certain strains of E. coli (e.g., O157:H7)'
      },
      {
        id: 'URINE_CULTURE',
        value: 'Positive for E. coli',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify E. coli as the cause of a urinary tract infection'
      },
      {
        id: 'BLOOD_CULTURE',
        value: 'Positive for E. coli',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'May be positive in cases of severe infection that has spread to the bloodstream'
      }
    ],
    medications: [
      'Antibiotics (for certain types of E. coli infections, but not usually recommended for Shiga toxin-producing E. coli)',
      'Rehydration therapy (oral or intravenous fluids)',
      'Supportive care',
      'Antidiarrheal agents (generally avoided in Shiga toxin-producing E. coli infections)'
    ],
    lifestyle: [
      'Proper hand hygiene (especially after using the bathroom and before handling food)',
      'Safe food handling practices (e.g., cooking meat thoroughly, avoiding cross-contamination)',
      'Drinking clean water',
      'Avoiding unpasteurized milk and juices',
      'Rest',
      'Fluid intake to prevent dehydration'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but focus on bland, easily digestible foods during recovery from diarrheal illness',
      'Avoidance of potentially contaminated food and water sources'
    ]
  },
  {
    id: 'ewing-sarcoma',
    name: 'Ewing Sarcoma',
    category: 'Oncological',
    description: 'A type of cancer that occurs in bones or in the soft tissue around the bones. It most commonly affects children and young adults.',
    symptoms: [
      'Pain in the area of the tumor',
      'Swelling or a lump',
      'Bone fractures without a clear cause',
      'Fever',
      'Weight loss',
      'Fatigue',
      'Symptoms may vary depending on the location and size of the tumor'
    ],
    relatedParameters: [
      {
        id: 'IMAGING_TESTS',
        value: 'Bone or soft tissue mass',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Bone or soft tissue mass',
        description: 'X-rays, MRI, CT scans can reveal characteristic bone lesions or soft tissue masses'
      },
      {
        id: 'BIOPSY',
        value: 'Small, round, blue cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Small, round, blue cells',
        description: 'Histopathological examination of a biopsy sample shows characteristic features of Ewing sarcoma'
      },
      {
        id: 'GENETIC_TESTING',
        value: 'EWSR1-FLI1 fusion',
        unit: '',
        normalRange: { min: 'No fusion', max: 'No fusion' },
        status: 'EWSR1-FLI1 fusion',
        description: 'Detects the presence of specific chromosomal translocations (e.g., EWSR1-FLI1 fusion) characteristic of Ewing sarcoma'
      },
      {
        id: 'LDH',
        status: 'ELEVATED',
        description: 'Lactate dehydrogenase (LDH) may be elevated'
      },
      {
            id: 'BONE_MARROW_ASPIRATION_BIOPSY',
            value: 'Presence of tumor cells',
            unit: '',
            normalRange: { min: 'Normal', max: 'Normal' },
            status: 'Variable',
            description: 'May be performed to determine if the cancer has spread to the bone marrow'
      }
    ],
    medications: [
      'Chemotherapy (combination of drugs)',
      'Surgery to remove the tumor',
      'Radiation therapy',
      'Targeted therapy (in some cases)',
      'Stem cell transplant (in some cases)'
    ],
    lifestyle: [
      'Multidisciplinary care involving oncologists, surgeons, radiation oncologists, and other specialists',
      'Physical therapy and rehabilitation',
      'Emotional and psychological support for the patient and family',
      'Nutritional support',
      'Pain management',
      'Palliative care (for advanced cases)'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but maintaining good nutrition is important during cancer treatment'
    ]
  },
  {
    id: 'eye-cancer',
    name: 'Eye Cancer',
    category: 'Oncological',
    description: 'A general term for various types of cancer that can occur in different parts of the eye. The most common type in adults is melanoma, while retinoblastoma is the most common type in children.',
    symptoms: [
      'Changes in vision (e.g., blurred vision, loss of vision)',
      'Floaters (spots or squiggles drifting in the field of vision)',
      'Flashes of light',
      'A growing dark spot on the iris',
      'Change in the size or shape of the pupil',
      'Pain in or around the eye (rare in early stages)',
      'Bulging of the eye',
      'Loss of peripheral vision',
      'Symptoms vary depending on the type and location of the cancer'
    ],
    relatedParameters: [
      {
        id: 'OPHTHALMOSCOPY',
        value: 'Abnormal mass or pigmentation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal mass or pigmentation',
        description: 'Examination of the inside of the eye may reveal an abnormal mass, changes in pigmentation, or other abnormalities'
      },
      {
        id: 'ULTRASOUND',
        value: 'Mass or lesion',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass or lesion',
        description: 'Ocular ultrasound can help characterize the size, shape, and location of a tumor'
      },
      {
        id: 'FLUORESCEIN_ANGIOGRAPHY',
        value: 'Abnormal blood vessels',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal blood vessels',
        description: 'Can help visualize abnormal blood vessels in the eye'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'A biopsy may be performed to confirm the diagnosis and determine the type of cancer'
      },
      {
            id: 'GENETIC_TESTING_RB1_GENE',
            value: 'Mutation in RB1 gene',
            unit: '',
            normalRange: { min: 'No mutation', max: 'No mutation' },
            status: 'Mutation',
            description: 'For retinoblastoma, genetic testing may reveal mutations in the RB1 gene'
      }
    ],
    medications: [
      'Chemotherapy (systemic or intra-arterial)',
      'Radiation therapy (external beam or brachytherapy)',
      'Laser therapy',
      'Cryotherapy',
      'Targeted therapy (in some cases)',
      'Enucleation (surgical removal of the eye) - in some cases'
    ],
    lifestyle: [
      'Multidisciplinary care involving ophthalmologists, oncologists, radiation oncologists, and other specialists',
      'Regular eye exams to monitor for recurrence or new tumors',
      'Emotional and psychological support',
      'Low vision rehabilitation (if vision is affected)',
      'Genetic counseling (for retinoblastoma)'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but maintaining good nutrition is important during cancer treatment'
    ]
  },
  {
    id: 'febrile-seizures',
    name: 'Febrile Seizures',
    category: 'Neurological',
    description: 'Seizures or convulsions that occur in young children and are triggered by a fever, typically above 100.4°F (38°C). They are usually not a sign of epilepsy.',
    symptoms: [
      'Loss of consciousness',
      'Stiffening of the body',
      'Jerking movements of the arms and legs',
      'Eye rolling',
      'Usually last for a few minutes',
      'Occur in children between 6 months and 5 years of age',
      'Associated with a fever'
    ],
    relatedParameters: [
      {
        id: 'TEMPERATURE',
        status: 'HIGH',
        description: 'Fever is present, usually above 100.4°F (38°C)'
      },
      {
        id: 'EEG',
        value: 'Usually normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Usually normal',
        description: 'Electroencephalogram (EEG) is typically normal, especially if performed after the seizure'
      },
      {
        id: 'BLOOD_TESTS',
        status: 'VARIABLE',
        description: 'May be performed to identify the cause of the fever (e.g., infection)'
      },
      {
        id: 'LUMBAR_PUNCTURE',
        value: 'Normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal',
        description: 'May be considered in certain cases to rule out meningitis or encephalitis'
      }
    ],
    medications: [
      'Antipyretics (e.g., acetaminophen, ibuprofen) to reduce fever',
      'No specific medication to prevent febrile seizures',
      'Antiepileptic drugs are generally not indicated',
      'In rare cases of prolonged febrile seizures, rescue medications (e.g., rectal diazepam) may be prescribed'
    ],
    lifestyle: [
      'Monitoring the child\'s temperature during febrile illnesses',
      'Prompt treatment of fever with antipyretics',
      'Keeping the child cool',
      'Reassurance and education for parents',
      'Knowing what to do during a seizure (e.g., placing the child on their side, protecting them from injury)'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'fibroids',
    name: 'Fibroids',
    category: 'Gynecological',
    description: 'Noncancerous growths that develop in or around the uterus (womb). Also known as uterine leiomyomas or myomas.',
    symptoms: [
      'Heavy menstrual bleeding',
      'Prolonged menstrual periods',
      'Pelvic pain or pressure',
      'Frequent urination',
      'Difficulty emptying the bladder',
      'Constipation',
      'Backache or leg pains',
      'May be asymptomatic in many cases'
    ],
    relatedParameters: [
      {
        id: 'TRANSVAGINAL_ULTRASOUND',
        value: 'Uterine masses',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Uterine masses',
        description: 'Can identify the presence, size, and location of fibroids'
      },
      {
        id: 'MRI',
        value: 'Uterine masses',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Uterine masses',
        description: 'May be used to further characterize fibroids and surrounding structures, especially before surgery or other procedures'
      },
      {
        id: 'HYSTEROSCOPY',
        value: 'Submucosal fibroids',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Submucosal fibroids',
        description: 'Can visualize fibroids that are bulging into the uterine cavity'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'May be decreased due to heavy menstrual bleeding'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs)',
      'Hormonal contraceptives (e.g., birth control pills, IUDs)',
      'Gonadotropin-releasing hormone (GnRH) agonists',
      'Tranexamic acid (to reduce heavy menstrual bleeding)',
      'Uterine artery embolization (UAE)',
      'Myomectomy (surgical removal of fibroids)',
      'Hysterectomy (in severe cases)'
    ],
    lifestyle: [
      'Regular exercise',
      'Weight management',
      'Stress management',
      'Monitoring of symptoms',
      'Regular follow-up with healthcare provider'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy diet rich in fruits, vegetables, and whole grains may be beneficial for overall health'
    ]
  },
  {
    id: 'fibromyalgia',
    name: 'Fibromyalgia',
    category: 'Musculoskeletal',
    description: 'A chronic disorder characterized by widespread musculoskeletal pain, fatigue, and tenderness in localized areas. The exact cause is unknown, but it is thought to involve abnormal pain processing in the brain.',
    symptoms: [
      'Widespread pain (often described as a constant dull ache)',
      'Fatigue',
      'Sleep disturbances',
      'Cognitive difficulties ("fibro fog")',
      'Headaches',
      'Depression',
      'Anxiety',
      'Irritable bowel syndrome (IBS)',
      'Painful bladder syndrome',
      'Restless legs syndrome'
    ],
    relatedParameters: [
      {
        id: 'TENDER_POINT_EXAM',
        value: 'Tenderness in multiple points',
        unit: '',
        normalRange: { min: 'No tenderness', max: 'No tenderness' },
        status: 'Tenderness',
        description: 'Although no longer required for diagnosis, a tender point exam may reveal tenderness in specific areas'
      },
      {
        id: 'BLOOD_TESTS',
        status: 'NORMAL',
        description: 'Routine blood tests are typically normal and are used to rule out other conditions'
      },
      {
        id: 'SLEEP_STUDY',
        value: 'Abnormal sleep patterns',
        unit: '',
        normalRange: { min: 'Normal sleep', max: 'Normal sleep' },
        status: 'Abnormal sleep patterns',
        description: 'May be performed to assess for sleep disorders, which are common in fibromyalgia'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, NSAIDs, tramadol)',
      'Antidepressants (e.g., duloxetine, milnacipran, amitriptyline)',
      'Antiseizure drugs (e.g., pregabalin, gabapentin)',
      'Muscle relaxants',
      'Sleep aids'
    ],
    lifestyle: [
      'Regular low-impact exercise (e.g., walking, swimming, tai chi)',
      'Stress management techniques (e.g., meditation, yoga)',
      'Good sleep hygiene',
      'Cognitive behavioral therapy (CBT)',
      'Pacing of activities',
      'Support groups',
      'Complementary therapies (e.g., acupuncture, massage) - may help some individuals'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is recommended',
      'Some individuals may find that certain foods (e.g., caffeine, alcohol, processed foods) worsen their symptoms'
    ]
  },
  {
    id: 'flu',
    name: 'Flu (Influenza)',
    category: 'Infectious',
    description: 'A contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness, and at times can lead to death.',
    symptoms: [
      'Fever',
      'Cough',
      'Sore throat',
      'Runny or stuffy nose',
      'Muscle or body aches',
      'Headache',
      'Fatigue',
      'Vomiting and diarrhea (more common in children)',
      'Symptoms usually come on suddenly'
    ],
    relatedParameters: [
      {
        id: 'RAPID_INFLUENZA_DIAGNOSTIC_TESTS',
        value: 'Positive for influenza A or B',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can provide results quickly, but may not be as accurate as other tests'
      },
      {
        id: 'RT_PCR',
        value: 'Positive for influenza A or B',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'More accurate than rapid tests and can identify specific strains of influenza'
      },
      {
        id: 'VIRAL_CULTURE',
        value: 'Positive for influenza virus',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Takes longer to get results, but can provide detailed information about the virus'
      },
      {
        id: 'CHEST_X_RAY',
        value: 'Normal or signs of pneumonia',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May be performed if complications such as pneumonia are suspected'
      }
    ],
    medications: [
      'Antiviral drugs (e.g., oseltamivir, zanamivir, baloxavir) - most effective when started within 48 hours of symptom onset',
      'Rest',
      'Fluids',
      'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen) for symptom relief'
    ],
    lifestyle: [
      'Annual influenza vaccination',
      'Staying home when sick',
      'Covering coughs and sneezes',
      'Frequent handwashing',
      'Avoiding close contact with sick individuals',
      'Rest',
      'Adequate fluid intake'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but focus on easily digestible foods and maintaining hydration during illness'
    ]
  },
  {
    id: 'foetal-alcohol-syndrome',
    name: 'Foetal Alcohol Syndrome',
    category: 'Developmental',
    description: 'A condition in a child that results from alcohol exposure during the mother\'s pregnancy. It causes brain damage and growth problems, and the effects are irreversible.',
    symptoms: [
      'Small head size (microcephaly)',
      'Smooth ridge between the nose and upper lip (philtrum)',
      'Thin upper lip',
      'Small and widely spaced eyes',
      'Slow physical growth (before and after birth)',
      'Vision or hearing problems',
      'Heart defects',
      'Kidney problems',
      'Intellectual disability',
      'Learning disabilities',
      'Poor memory',
      'Difficulty with attention',
      'Trouble with reasoning and problem-solving',
      'Poor coordination',
      'Hyperactivity',
      'Behavioral problems'
    ],
    relatedParameters: [
      {
        id: 'MATERNAL_ALCOHOL_HISTORY',
        value: 'Alcohol consumption during pregnancy',
        unit: '',
        normalRange: { min: 'No alcohol', max: 'No alcohol' },
        status: 'Alcohol consumption',
        description: 'A history of alcohol consumption during pregnancy is a key factor in the diagnosis'
      },
      {
        id: 'PHYSICAL_EXAM',
        value: 'Characteristic facial features/growth delays',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Characteristic features/growth delays',
        description: 'Can reveal characteristic facial features, small head size, and slow growth'
      },
      {
        id: 'BRAIN_IMAGING',
        value: 'Structural abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'MRI or CT scans may show structural abnormalities in the brain'
      },
      {
        id: 'DEVELOPMENTAL_ASSESSMENT',
        value: 'Delays in development',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Delays',
        description: 'Standardized developmental assessments can identify delays in cognitive, motor, and social-emotional domains'
      }
    ],
    medications: [
      'No specific medication to treat foetal alcohol syndrome itself',
      'Medications to help manage specific symptoms (e.g., ADHD medications, antidepressants, anti-anxiety medications)',
      'Early intervention services (speech therapy, physical therapy, occupational therapy, special education)'
    ],
    lifestyle: [
      'No alcohol consumption during pregnancy',
      'Early diagnosis and intervention',
      'Special education and support services',
      'Stable and nurturing home environment',
      'Behavioral interventions and therapies',
      'Parent training and support',
      'Medical care for associated health problems'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but a healthy, balanced diet is important for overall health and development'
    ]
  },
  {
    id: 'food-allergy',
    name: 'Food Allergy',
    category: 'Immunological',
    description: 'An immune system reaction that occurs soon after eating a certain food. Even a tiny amount of the allergy-causing food can trigger signs and symptoms, which can be severe or life-threatening.',
    symptoms: [
      'Skin reactions (e.g., hives, itching, eczema)',
      'Swelling of the lips, face, tongue, or throat',
      'Wheezing or difficulty breathing',
      'Runny nose',
      'Nausea, vomiting, or diarrhea',
      'Abdominal pain',
      'Dizziness, lightheadedness, or fainting',
      'Anaphylaxis (a severe, life-threatening reaction)'
    ],
    relatedParameters: [
      {
        id: 'SKIN_PRICK_TEST',
        value: 'Positive reaction to specific food allergens',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify specific food allergens by observing skin reactions to small amounts of allergens'
      },
      {
        id: 'FOOD_SPECIFIC_IgE',
        value: 'Elevated levels for specific foods',
        unit: 'kU/L',
        normalRange: { min: '<0.35', max: '<0.35' },
        status: 'Elevated',
        description: 'Blood tests can measure levels of IgE antibodies to specific food allergens'
      },
      {
        id: 'ORAL_FOOD_CHALLENGE',
        value: 'Reaction to specific food',
        unit: '',
        normalRange: { min: 'No reaction', max: 'No reaction' },
        status: 'Reaction',
        description: 'Considered the gold standard for diagnosis; involves consuming gradually increasing amounts of the suspected food allergen under medical supervision'
      },
      {
        id: 'COMPONENT_RESOLVED_DIAGNOSTICS',
        value: 'Specific allergen components',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'Can help identify specific allergenic components within a food and may help predict the severity of reactions'
      }
    ],
    medications: [
      'Epinephrine auto-injector (e.g., EpiPen) - for emergency treatment of anaphylaxis',
      'Antihistamines (to relieve mild symptoms)',
      'Corticosteroids (to reduce inflammation)',
      'Avoidance of the specific food allergen is the primary treatment'
    ],
    lifestyle: [
      'Strict avoidance of the specific food allergen(s)',
      'Careful reading of food labels',
      'Educating family, friends, and caregivers about the allergy',
      'Carrying an epinephrine auto-injector at all times',
      'Wearing a medical alert bracelet or necklace',
      'Developing an anaphylaxis action plan',
      'Informing schools and restaurants about the allergy'
    ],
    diet: [
      'Strict avoidance of the specific food allergen(s) and any foods that may contain them',
      'May require working with a registered dietitian to ensure a balanced diet while avoiding allergens'
    ]
  },
  {
    id: 'food-poisoning',
    name: 'Food Poisoning',
    category: 'Gastrointestinal',
    description: 'An illness caused by eating contaminated food or beverages. Infectious organisms — including bacteria, viruses and parasites — or their toxins are the most common causes.',
    symptoms: [
      'Nausea',
      'Vomiting',
      'Diarrhea (may be watery or bloody)',
      'Abdominal pain and cramps',
      'Fever',
      'Weakness',
      'Headache',
      'Symptoms usually develop within hours to days after eating contaminated food'
    ],
    relatedParameters: [
      {
        id: 'STOOL_CULTURE',
        value: 'Positive for specific pathogen',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify the specific bacteria, virus, or parasite causing the illness'
      },
      {
        id: 'STOOL_OVA_AND_PARASITES',
        value: 'Positive for parasites',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can detect parasites in the stool'
      },
      {
        id: 'BLOOD_TESTS',
        status: 'VARIABLE',
        description: 'May show signs of dehydration or infection (e.g., elevated white blood cell count) in severe cases'
      }
    ],
    medications: [
      'Rehydration solutions (oral or intravenous)',
      'Antiemetics (to control nausea and vomiting)',
      'Antidiarrheal medications (use with caution)',
      'Antibiotics (in specific cases, depending on the causative organism)',
      'Rest'
    ],
    lifestyle: [
      'Proper food handling and preparation practices',
      'Washing hands thoroughly before handling food',
      'Cooking foods to safe temperatures',
      'Avoiding cross-contamination',
      'Proper storage of food',
      'Drinking clean water',
      'Rest',
      'Fluid intake to prevent dehydration'
    ],
    diet: [
      'Clear liquids (e.g., water, broth, clear sodas) initially',
      'Gradual reintroduction of bland foods (e.g., BRAT diet - bananas, rice, applesauce, toast)',
      'Avoidance of dairy, caffeine, alcohol, and fatty foods until recovered'
    ]
  },
  {
    id: 'fragility-fracture-of-the-hip',
    name: 'Fragility Fracture of the Hip',
    category: 'Orthopedic',
    description: 'A hip fracture that occurs from a low-energy trauma, such as a fall from standing height or less, often due to underlying osteoporosis.',
    symptoms: [
      'Pain in the hip or groin',
      'Inability to bear weight on the affected leg',
      'Difficulty walking or moving the leg',
      'Affected leg may appear shorter or rotated outward',
      'Bruising or swelling around the hip',
      'Stiffness'
    ],
    relatedParameters: [
      {
        id: 'X_RAY_HIP',
        value: 'Fracture',
        unit: '',
        normalRange: { min: 'No fracture', max: 'No fracture' },
        status: 'Fracture',
        description: 'Can reveal the presence and type of hip fracture'
      },
      {
        id: 'BONE_DENSITY_SCAN_DXA',
        value: 'Low bone mineral density',
        unit: 'T-score',
        normalRange: { min: '>-1.0', max: '>2.5' },
        status: 'Low',
        description: 'Dual-energy X-ray absorptiometry (DXA) scan can assess bone density and diagnose osteoporosis'
      },
      {
        id: 'BLOOD_TESTS',
        status: 'VARIABLE',
        description: 'May be performed to assess calcium, vitamin D, and other factors related to bone health'
      }
    ],
    medications: [
      'Pain relievers (e.g., opioids, NSAIDs)',
      'Bisphosphonates (to treat underlying osteoporosis)',
      'Other osteoporosis medications (e.g., denosumab, teriparatide)',
      'Calcium and vitamin D supplements',
      'Surgical repair of the fracture (e.g., internal fixation, hemiarthroplasty, total hip replacement)'
    ],
    lifestyle: [
      'Fall prevention strategies (e.g., home safety modifications, assistive devices)',
      'Physical therapy and rehabilitation',
      'Weight-bearing exercise (as tolerated)',
      'Adequate calcium and vitamin D intake',
      'Smoking cessation',
      'Limiting alcohol consumption',
      'Regular monitoring of bone density'
    ],
    diet: [
      'Adequate calcium and vitamin D intake through diet and/or supplements',
      'A balanced diet to support bone health and overall health'
    ]
  },
  {
    id: 'frozen-shoulder',
    name: 'Frozen Shoulder (Adhesive Capsulitis)',
    category: 'Orthopedic',
    description: 'A condition characterized by stiffness and pain in the shoulder joint, often leading to a significant loss of range of motion. The exact cause is unknown, but it may be associated with diabetes or prolonged immobilization.',
    symptoms: [
      'Shoulder pain, often worse at night',
      'Stiffness in the shoulder joint',
      'Gradual loss of range of motion in the shoulder',
      'Difficulty performing everyday activities (e.g., reaching overhead, dressing)',
      'Symptoms typically progress through three stages: freezing, frozen, and thawing'
    ],
    relatedParameters: [
      {
        id: 'PHYSICAL_EXAM',
        value: 'Limited range of motion',
        unit: '',
        normalRange: { min: 'Full range of motion', max: 'Full range of motion' },
        status: 'Limited',
        description: 'Can reveal restricted active and passive range of motion in the shoulder'
      },
      {
        id: 'X_RAY_SHOULDER',
        value: 'Usually normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Usually normal',
        description: 'X-rays are typically normal but may be used to rule out other conditions'
      },
      {
        id: 'MRI_SHOULDER',
        value: 'Thickened joint capsule',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May show thickening of the joint capsule or other subtle changes, but not always necessary for diagnosis'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs, acetaminophen)',
      'Corticosteroid injections (into the joint)',
      'Physical therapy',
      'Hydrodilatation (injection of fluid into the joint to stretch the capsule)',
      'Manipulation under anesthesia (in some cases)',
      'Arthroscopic surgery (in some cases)'
    ],
    lifestyle: [
      'Physical therapy exercises to improve range of motion and strength',
      'Regular stretching',
      'Heat or ice therapy for pain relief',
      'Avoiding activities that worsen pain',
      'Patience, as the condition can take months to years to resolve'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'functional-neurological-disorder-fnd',
    name: 'Functional Neurological Disorder (FND)',
    category: 'Neurological',
    description: 'A disorder characterized by neurological symptoms, such as movement disorders or sensory problems, that are not explained by a structural neurological disease or other medical condition. The symptoms are real and cause distress or impairment.',
    symptoms: [
      'Weakness or paralysis',
      'Abnormal movements (e.g., tremors, dystonia, gait problems)',
      'Sensory disturbances (e.g., numbness, tingling, pain)',
      'Non-epileptic seizures',
      'Speech difficulties (e.g., stuttering, slurred speech)',
      'Visual disturbances (e.g., blurred vision, double vision)',
      'Cognitive difficulties (e.g., memory problems, concentration difficulties)',
      'Symptoms are often inconsistent and may vary over time'
    ],
    relatedParameters: [
      {
        id: 'NEUROLOGICAL_EXAM',
        value: 'Inconsistent findings',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inconsistent',
        description: 'May reveal inconsistencies or non-physiological patterns in the symptoms'
      },
      {
        id: 'EEG',
        value: 'Normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal',
        description: 'Electroencephalogram (EEG) is typically normal, even during non-epileptic seizures'
      },
      {
        id: 'MRI_BRAIN',
        value: 'Normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal',
        description: 'Brain imaging is usually normal and is used to rule out other conditions'
      },
      {
        id: 'EMG',
        value: 'Normal or inconsistent',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'Electromyography (EMG) may be normal or show non-physiological patterns'
      }
    ],
    medications: [
      'No specific medications for FND itself',
      'Medications to treat associated conditions (e.g., antidepressants or anti-anxiety medications for comorbid depression or anxiety)',
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Cognitive behavioral therapy (CBT)',
      'Psychotherapy'
    ],
    lifestyle: [
      'Multidisciplinary approach involving neurologists, psychiatrists, psychologists, and therapists',
      'Education about FND',
      'Stress management techniques',
      'Regular exercise',
      'Good sleep hygiene',
      'Avoiding triggers that worsen symptoms',
      'Support groups'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'fungal-nail-infection',
    name: 'Fungal Nail Infection (Onychomycosis)',
    category: 'Dermatological',
    description: 'A fungal infection of the nail, typically caused by dermatophytes, yeasts, or molds. It can affect fingernails or toenails, but is more common in toenails.',
    symptoms: [
      'Thickened nail',
      'Discoloration of the nail (yellow, brown, or white)',
      'Brittle or crumbly nail',
      'Distorted nail shape',
      'Nail separation from the nail bed (onycholysis)',
      'Debris under the nail',
      'Foul odor',
      'May be asymptomatic in early stages'
    ],
    relatedParameters: [
      {
        id: 'KOH_PREPARATION',
        value: 'Positive for fungal elements',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Microscopic examination of nail scrapings with potassium hydroxide (KOH) can reveal fungal hyphae or spores'
      },
      {
        id: 'FUNGAL_CULTURE',
        value: 'Positive for specific fungus',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify the specific fungus causing the infection'
      },
      {
        id: 'NAIL_BIOPSY',
        value: 'Fungal elements',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Fungal elements',
        description: 'May be performed in some cases to confirm the diagnosis and identify the fungus'
      }
    ],
    medications: [
      'Oral antifungal medications (e.g., terbinafine, itraconazole)',
      'Topical antifungal medications (e.g., ciclopirox, efinaconazole, tavaborole)',
      'Laser treatment (in some cases)',
      'Surgical removal of the nail (in severe cases)'
    ],
    lifestyle: [
      'Keeping nails clean and dry',
      'Wearing well-fitting shoes',
      'Avoiding walking barefoot in public places',
      'Treating athlete\'s foot promptly (if present)',
      'Disinfecting nail clippers and other tools',
      'Wearing breathable socks',
      'Patience, as treatment can take several months'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'gallbladder-cancer',
    name: 'Gallbladder Cancer',
    category: 'Oncological',
    description: 'A type of cancer that begins in the gallbladder. It is relatively rare and often diagnosed at an advanced stage, as it typically does not cause specific signs or symptoms early on.',
    symptoms: [
      'Abdominal pain, especially in the upper right side',
      'Jaundice (yellowing of the skin and eyes)',
      'Nausea and vomiting',
      'Loss of appetite',
      'Unexplained weight loss',
      'Bloating',
      'Fever',
      'Itchy skin',
      'Lumps in the abdomen'
    ],
    relatedParameters: [
      {
        id: 'IMAGING_TESTS_CT_MRI_ULTRASOUND',
        value: 'Gallbladder mass or thickening',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass/Thickening',
        description: 'Can reveal a mass or thickening of the gallbladder wall'
      },
      {
        id: 'CA_19_9',
        status: 'ELEVATED',
        description: 'Tumor marker CA 19-9 may be elevated'
      },
      {
        id: 'CEA',
        status: 'ELEVATED',
        description: 'Carcinoembryonic antigen (CEA) may be elevated'
      },
      {
        id: 'LFTs',
        status: 'ABNORMAL',
        description: 'Liver function tests may be abnormal, especially if the cancer has spread to the liver or blocked the bile ducts'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'A biopsy (usually obtained through endoscopic ultrasound-guided fine-needle aspiration or during surgery) can confirm the diagnosis'
      }
    ],
    medications: [
      'Chemotherapy',
      'Radiation therapy',
      'Surgery (cholecystectomy, extended cholecystectomy, or palliative surgery)',
      'Targeted therapy (in some cases)',
      'Immunotherapy (in some cases)',
      'Palliative care to manage symptoms and improve quality of life'
    ],
    lifestyle: [
      'Multidisciplinary care involving surgeons, oncologists, radiation oncologists, gastroenterologists, and palliative care specialists',
      'Emotional and psychological support',
      'Nutritional support',
      'Pain management',
      'Participation in clinical trials (if eligible)'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but maintaining good nutrition is important, especially during cancer treatment'
    ]
  },
  {
    id: 'gallstones',
    name: 'Gallstones',
    category: 'Gastrointestinal',
    description: 'Hardened deposits of digestive fluid that can form in the gallbladder. They can range in size from as small as a grain of sand to as large as a golf ball.',
    symptoms: [
      'Sudden and intense pain in the upper right abdomen (biliary colic)',
      'Pain between the shoulder blades',
      'Pain in the right shoulder',
      'Nausea and vomiting',
      'Indigestion',
      'May be asymptomatic in many cases',
      'Symptoms often occur after eating fatty foods'
    ],
    relatedParameters: [
      {
        id: 'ULTRASOUND_ABDOMEN',
        value: 'Gallstones',
        unit: '',
        normalRange: { min: 'No gallstones', max: 'No gallstones' },
        status: 'Gallstones',
        description: 'The most common test used to diagnose gallstones; can visualize gallstones in the gallbladder'
      },
      {
        id: 'CT_ABDOMEN',
        value: 'Gallstones',
        unit: '',
        normalRange: { min: 'No gallstones', max: 'No gallstones' },
        status: 'Gallstones',
        description: 'May be used to detect gallstones, especially if complications are suspected'
      },
      {
        id: 'HIDA_SCAN',
        value: 'Abnormal gallbladder emptying',
        unit: '',
        normalRange: { min: 'Normal emptying', max: 'Normal emptying' },
        status: 'Abnormal',
        description: 'A nuclear medicine scan that can assess gallbladder function and detect blockage of the bile ducts'
      },
      {
        id: 'MRCP',
        value: 'Gallstones in bile ducts',
        unit: '',
        normalRange: { min: 'No gallstones', max: 'No gallstones' },
        status: 'Gallstones',
        description: 'Magnetic resonance cholangiopancreatography (MRCP) can visualize gallstones in the bile ducts'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs)',
      'Ursodeoxycholic acid (can dissolve small cholesterol gallstones in some cases, but takes a long time and is not always effective)',
      'Cholecystectomy (surgical removal of the gallbladder) - the most common treatment for symptomatic gallstones',
      'Endoscopic retrograde cholangiopancreatography (ERCP) - to remove stones from the bile duct'
    ],
    lifestyle: [
      'Low-fat diet',
      'Weight management',
      'Regular exercise',
      'Avoidance of rapid weight loss',
      'For asymptomatic gallstones, watchful waiting may be an option'
    ],
    diet: [
      'Low-fat diet, especially avoiding high-fat meals that can trigger symptoms',
      'High-fiber diet',
      'Maintaining a healthy weight'
    ]
  },
  {
    id: 'ganglion-cyst',
    name: 'Ganglion Cyst',
    category: 'Orthopedic',
    description: 'A noncancerous, fluid-filled lump that typically develops along the tendons or joints of the wrists or hands. They can also occur in the ankles or feet.',
    symptoms: [
      'A visible lump',
      'Pain or tenderness (in some cases)',
      'Dull ache or discomfort',
      'Tingling or numbness (if the cyst presses on a nerve)',
      'Difficulty moving the affected joint (in some cases)',
      'May fluctuate in size or disappear and reappear'
    ],
    relatedParameters: [
      {
        id: 'PHYSICAL_EXAM',
        value: 'Visible/palpable cyst',
        unit: '',
        normalRange: { min: 'No cyst', max: 'No cyst' },
        status: 'Cyst present',
        description: 'Can often reveal a firm, smooth, round or oval lump'
      },
      {
        id: 'ULTRASOUND',
        value: 'Cystic mass',
        unit: '',
        normalRange: { min: 'No cyst', max: 'No cyst' },
        status: 'Cystic mass',
        description: 'Can confirm that the lump is fluid-filled and not solid'
      },
      {
        id: 'MRI',
        value: 'Cystic mass',
        unit: '',
        normalRange: { min: 'No cyst', max: 'No cyst' },
        status: 'Cystic mass',
        description: 'May be used to further evaluate the cyst and its relationship to surrounding structures, especially if surgery is being considered'
      }
    ],
    medications: [
      'No specific medications to treat ganglion cysts',
      'Pain relievers (e.g., NSAIDs) for symptom relief',
      'Immobilization with a splint or brace (may help in some cases)',
      'Aspiration (draining the fluid from the cyst with a needle)',
      'Surgical excision (if the cyst is painful, interferes with function, or recurs after aspiration)'
    ],
    lifestyle: [
      'Observation (if the cyst is not causing symptoms)',
      'Avoiding activities that worsen symptoms',
      'Using wrist or hand supports (if applicable)',
      'Reassurance that the cyst is not cancerous'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'gastroenteritis',
    name: 'Gastroenteritis',
    category: 'Gastrointestinal',
    description: 'An inflammation of the lining of the stomach and intestines, typically caused by a viral or bacterial infection. It is often referred to as the "stomach flu," but it is not related to influenza.',
    symptoms: [
      'Diarrhea (usually watery)',
      'Nausea and vomiting',
      'Abdominal cramps and pain',
      'Fever',
      'Headache',
      'Muscle aches',
      'Dehydration',
      'Symptoms usually develop within 1-3 days after exposure to the virus or bacteria'
    ],
    relatedParameters: [
      {
        id: 'STOOL_CULTURE',
        value: 'Positive for specific pathogen',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'Can identify the specific bacteria or virus causing the illness, although not always necessary'
      },
      {
        id: 'STOOL_OVA_AND_PARASITES',
        value: 'Positive for parasites',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Variable',
        description: 'Can detect parasites in the stool'
      },
      {
        id: 'BLOOD_TESTS',
        status: 'VARIABLE',
        description: 'May show signs of dehydration or infection (e.g., elevated white blood cell count) in severe cases'
      }
    ],
    medications: [
      'Rehydration solutions (oral or intravenous)',
      'Antiemetics (to control nausea and vomiting)',
      'Antidiarrheal medications (use with caution, especially in children)',
      'Antibiotics (only if a bacterial cause is confirmed and if indicated)',
      'Rest'
    ],
    lifestyle: [
      'Frequent handwashing, especially after using the bathroom and before eating',
      'Proper food handling and preparation practices',
      'Avoiding close contact with individuals who are ill',
      'Staying home when sick',
      'Drinking clean water',
      'Rest',
      'Fluid intake to prevent dehydration'
    ],
    diet: [
      'Clear liquids (e.g., water, broth, clear sodas) initially',
      'Gradual reintroduction of bland foods (e.g., BRAT diet - bananas, rice, applesauce, toast)',
      'Avoidance of dairy, caffeine, alcohol, and fatty foods until recovered'
    ]
  },
  {
    id: 'gastro-oesophageal-reflux-disease-gerd',
    name: 'Gastro-oesophageal Reflux Disease (GERD)',
    category: 'Gastrointestinal',
    description: 'A chronic digestive disease in which stomach acid or, occasionally, bile flows back (refluxes) into the esophagus, irritating the lining of the esophagus.',
    symptoms: [
      'Heartburn (a burning sensation in the chest)',
      'Regurgitation (the sensation of acid backing up into the throat or mouth)',
      'Chest pain',
      'Difficulty swallowing (dysphagia)',
      'Feeling of a lump in the throat (globus sensation)',
      'Chronic cough',
      'Laryngitis',
      'New or worsening asthma',
      'Disrupted sleep'
    ],
    relatedParameters: [
      {
        id: 'UPPER_ENDOSCOPY',
        value: 'Esophagitis/Erosions/Barretts',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'Can visualize inflammation, erosions, or other changes in the esophageal lining, such as Barrett\'s esophagus'
      },
      {
        id: 'ESOPHAGEAL_PH_MONITORING',
        value: 'Increased acid exposure',
        unit: '',
        normalRange: { min: 'Normal acid exposure', max: 'Normal acid exposure' },
        status: 'Increased',
        description: 'Measures the amount of acid refluxing into the esophagus over a 24-hour period'
      },
      {
        id: 'ESOPHAGEAL_MANOMETRY',
        value: 'Abnormal LES pressure/motility',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Measures the pressure and function of the lower esophageal sphincter (LES) and esophageal muscles'
      },
      {
            id: 'BARIUM_SWALLOW',
            value: 'Reflux/Hiatal hernia',
            unit: '',
            normalRange: { min: 'Normal', max: 'Normal' },
            status: 'Variable',
            description: 'Can show reflux of barium from the stomach into the esophagus or the presence of a hiatal hernia'
      }
    ],
    medications: [
      'Antacids (to neutralize stomach acid)',
      'H2-receptor blockers (e.g., famotidine, cimetidine) - to reduce acid production',
      'Proton pump inhibitors (PPIs) (e.g., omeprazole, lansoprazole) - to block acid production',
      'Prokinetic agents (e.g., metoclopramide) - to help empty the stomach faster (used less commonly)',
      'Surgery (e.g., fundoplication) - in some cases'
    ],
    lifestyle: [
      'Weight loss (if overweight or obese)',
      'Elevating the head of the bed',
      'Avoiding lying down within 3 hours after eating',
      'Eating smaller, more frequent meals',
      'Avoiding trigger foods (e.g., fatty foods, spicy foods, chocolate, caffeine, alcohol, citrus fruits, tomatoes)',
      'Smoking cessation',
      'Wearing loose-fitting clothing'
    ],
    diet: [
      'Low-fat diet',
      'Avoiding trigger foods',
      'Eating smaller, more frequent meals'
    ]
  },
  {
    id: 'genital-herpes',
    name: 'Genital Herpes',
    category: 'Infectious',
    description: 'A common sexually transmitted infection (STI) caused by the herpes simplex virus (HSV), usually HSV-2. It can cause painful blisters or sores in the genital area.',
    symptoms: [
        'Pain, itching, or tingling in the genital area',
        'Small red bumps or white blisters',
        'Ulcers that form when the blisters rupture and ooze or bleed',
        'Scabs that form as the ulcers heal',
        'Painful urination',
        'Flu-like symptoms (e.g., fever, headache, muscle aches) during the initial outbreak',
        'Swollen lymph nodes in the groin',
        'Many people with genital herpes have no symptoms or very mild symptoms'
    ],
    relatedParameters: [
      {
        id: 'VIRAL_CULTURE',
        value: 'Positive for HSV',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can detect HSV in fluid from a sore, but is less sensitive than PCR tests'
      },
      {
        id: 'PCR_TEST',
        value: 'Positive for HSV DNA',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can detect HSV DNA in fluid from a sore or in blood; more sensitive than viral culture'
      },
      {
        id: 'BLOOD_TEST_FOR_HSV_ANTIBODIES',
        value: 'Positive for HSV-1 or HSV-2 antibodies',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can detect antibodies to HSV-1 or HSV-2, indicating past or present infection, but cannot determine the location of the infection'
      }
    ],
    medications: [
      'Antiviral medications (e.g., acyclovir, valacyclovir, famciclovir)',
      'Episodic therapy (taking medication at the first sign of an outbreak to shorten its duration)',
      'Suppressive therapy (taking medication daily to reduce the frequency and severity of outbreaks and the risk of transmission)',
      'Pain relievers (e.g., acetaminophen, ibuprofen) for symptom relief'
    ],
    lifestyle: [
      'Safe sex practices (e.g., using condoms, limiting the number of sexual partners)',
      'Avoiding sexual contact during outbreaks',
      'Open communication with sexual partners',
      'Stress management',
      'Good hygiene',
      'Education about the condition and its transmission'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy diet can support overall immune function'
    ]
  },
  {
    id: 'genital-warts',
    name: 'Genital Warts',
    category: 'Infectious',
    description: 'A common sexually transmitted infection (STI) caused by the human papillomavirus (HPV), usually types 6 and 11. They appear as small, flesh-colored or gray swellings in the genital area.',
    symptoms: [
      'Small, flesh-colored, gray, or pink swellings in the genital area',
      'Several warts close together that take on a cauliflower-like shape',
      'Itching or discomfort in the genital area',
      'Bleeding with intercourse',
      'May be asymptomatic in some cases'
    ],
    relatedParameters: [
      {
        id: 'VISUAL_INSPECTION',
        value: 'Characteristic warts',
        unit: '',
        normalRange: { min: 'No warts', max: 'No warts' },
        status: 'Warts present',
        description: 'Genital warts can often be diagnosed based on their appearance'
      },
      {
        id: 'BIOPSY',
        value: 'Koilocytes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Koilocytes present',
        description: 'A biopsy may be performed if the diagnosis is uncertain; may show characteristic changes (koilocytes) caused by HPV infection'
      },
      {
        id: 'PAP_TEST',
        value: 'Abnormal cervical cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'In women, a Pap test may detect cervical changes caused by high-risk HPV types, but it does not specifically test for genital warts'
      },
      {
        id: 'HPV_DNA_TEST',
        value: 'Positive for HPV',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can detect the presence of HPV DNA, but is not routinely used for the diagnosis of genital warts'
      }
    ],
    medications: [
      'Patient-applied treatments (e.g., imiquimod, podofilox, sinecatechins)',
      'Provider-administered treatments (e.g., cryotherapy, trichloroacetic acid, surgical excision, laser therapy, electrosurgery)',
      'No single treatment is best for all cases; choice of treatment depends on the size, number, and location of the warts, as well as patient preference'
    ],
    lifestyle: [
      'HPV vaccination (ideally before becoming sexually active)',
      'Safe sex practices (e.g., using condoms, limiting the number of sexual partners)',
      'Avoiding sexual contact during treatment',
      'Open communication with sexual partners',
      'Smoking cessation (smoking may increase the risk of recurrence)',
      'Regular Pap tests for women to screen for cervical cancer'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'germ-cell-tumours',
    name: 'Germ Cell Tumours',
    category: 'Oncological',
    description: 'A diverse group of tumours that arise from germ cells, the cells that normally develop into eggs or sperm. They can be cancerous or noncancerous and most commonly occur in the testes or ovaries, but can also occur in other locations.',
    symptoms: [
      'A lump or swelling in the testicle or ovary',
      'Pain or discomfort in the testicle or lower abdomen',
      'A feeling of heaviness in the scrotum',
      'Breast growth or soreness (in males with certain types of germ cell tumours)',
      'Early puberty (in children with certain types of germ cell tumours)',
      'Symptoms related to the location of the tumour (e.g., back pain, cough, shortness of breath if the tumour is in the chest)',
      'May be asymptomatic in some cases'
    ],
    relatedParameters: [
      {
        id: 'TUMOR_MARKERS_AFP_BETA_HCG_LDH',
        status: 'ELEVATED',
        description: 'Alpha-fetoprotein (AFP), beta-human chorionic gonadotropin (beta-hCG), and lactate dehydrogenase (LDH) may be elevated in certain types of germ cell tumours'
      },
      {
        id: 'IMAGING_TESTS_ULTRASOUND_CT_MRI',
        value: 'Mass',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass',
        description: 'Can reveal the presence, size, and location of the tumour'
      },
      {
        id: 'BIOPSY',
        value: 'Specific type of germ cell tumour',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Specific type',
        description: 'A biopsy (usually obtained during surgery) can confirm the diagnosis and determine the specific type of germ cell tumour (e.g., seminoma, nonseminoma, teratoma)'
      }
    ],
    medications: [
      'Chemotherapy (combination of drugs, often including cisplatin)',
      'Surgery (e.g., orchiectomy, oophorectomy, retroperitoneal lymph node dissection)',
      'Radiation therapy (for some types of germ cell tumours, such as seminoma)',
      'High-dose chemotherapy with stem cell transplant (in some cases)'
    ],
    lifestyle: [
      'Multidisciplinary care involving urologists, oncologists, radiation oncologists, and other specialists',
      'Emotional and psychological support',
      'Fertility preservation counseling (if applicable)',
      'Regular follow-up to monitor for recurrence',
      'Participation in clinical trials (if eligible)'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but maintaining good nutrition is important during cancer treatment'
    ]
  },
  {
    id: 'glandular-fever',
    name: 'Glandular Fever (Infectious Mononucleosis)',
    category: 'Infectious',
    description: 'An infectious illness usually caused by the Epstein-Barr virus (EBV). It is often called the "kissing disease" because it can be spread through saliva.',
    symptoms: [
      'Fatigue',
      'Sore throat',
      'Fever',
      'Swollen lymph nodes, especially in the neck',
      'Swollen tonsils',
      'Headache',
      'Skin rash',
      'Soft, swollen spleen',
      'Loss of appetite',
      'Symptoms may last for several weeks or longer'
    ],
    relatedParameters: [
      {
        id: 'MONOSPOT_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'A rapid test that can detect heterophile antibodies, which are often present in infectious mononucleosis'
      },
      {
        id: 'EBV_ANTIBODY_TEST',
        value: 'Specific pattern of antibodies',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Specific pattern',
        description: 'Can detect antibodies to EBV and help determine if the infection is recent or past'
      },
      {
        id: 'WBC',
        status: 'ELEVATED',
        description: 'White blood cell count may be elevated, with an increase in lymphocytes'
      },
      {
        id: 'ATYPICAL_LYMPHOCYTES',
        value: 'Present',
        unit: '',
        normalRange: { min: 'Absent', max: 'Absent' },
        status: 'Present',
        description: 'A blood smear may show the presence of atypical lymphocytes'
      },
      {
        id: 'LFTs',
        status: 'MILDLY ELEVATED',
        description: 'Liver function tests may be mildly elevated in some cases'
      }
    ],
    medications: [
      'Rest',
      'Fluids',
      'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen) for symptom relief',
      'Corticosteroids (in some cases, to reduce swelling of the throat or tonsils)',
      'Avoidance of contact sports to prevent splenic rupture'
    ],
    lifestyle: [
      'Plenty of rest',
      'Adequate fluid intake',
      'Avoiding close contact with others to prevent spread',
      'Good hygiene',
      'Gradual return to activities as tolerated',
      'Avoiding alcohol (if liver function tests are elevated)'
    ],
    diet: [
      'Generally not directly related to diet in terms of treatment, but focus on easily digestible foods and maintaining hydration'
    ]
  },
  {
    id: 'golfers-elbow',
    name: 'Golfer\'s Elbow (Medial Epicondylitis)',
    category: 'Orthopedic',
    description: 'A condition that causes pain on the inner side of the elbow, where the tendons of the forearm muscles attach to the bony bump on the inside of the elbow. The pain may spread into the forearm and wrist.',
    symptoms: [
      'Pain on the inner side of the elbow',
      'Pain that may radiate into the forearm and wrist',
      'Stiffness in the elbow',
      'Weakness in the hand or wrist',
      'Numbness or tingling in the fingers (usually the ring and little fingers)',
      'Pain may worsen with certain movements, such as gripping or lifting'
    ],
    relatedParameters: [
      {
        id: 'PHYSICAL_EXAM',
        value: 'Tenderness over medial epicondyle',
        unit: '',
        normalRange: { min: 'No tenderness', max: 'No tenderness' },
        status: 'Tenderness',
        description: 'Can reveal tenderness over the medial epicondyle and pain with resisted wrist flexion and pronation'
      },
      {
        id: 'X_RAY_ELBOW',
        value: 'Usually normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Usually normal',
        description: 'X-rays are typically normal but may be used to rule out other conditions'
      },
      {
        id: 'MRI_ELBOW',
        value: 'Tendon changes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May show changes in the common flexor tendon, but not always necessary for diagnosis'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs, acetaminophen)',
      'Corticosteroid injections (in some cases, but used cautiously)',
      'Physical therapy',
      'Bracing or splinting',
      'Platelet-rich plasma (PRP) injections (in some cases)',
      'Surgery (rarely needed)'
    ],
    lifestyle: [
      'Rest and avoiding activities that aggravate the pain',
      'Ice therapy',
      'Stretching and strengthening exercises for the forearm muscles',
      'Proper technique and equipment when playing sports or performing repetitive activities',
      'Gradual return to activities',
      'Use of a counterforce brace or elbow strap'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'gonorrhoea',
    name: 'Gonorrhoea',
    category: 'Infectious',
    description: 'A sexually transmitted infection (STI) caused by the bacterium Neisseria gonorrhoeae. It can infect the genitals, rectum, and throat.',
    symptoms: [
      'Painful urination',
      'Increased vaginal discharge',
      'Vaginal bleeding between periods',
      'Penile discharge (often thick and yellow or green)',
      'Testicular pain or swelling',
      'Rectal pain, discharge, or bleeding',
      'Sore throat',
      'May be asymptomatic, especially in women'
    ],
    relatedParameters: [
      {
        id: 'NUCLEIC_ACID_AMPLIFICATION_TESTS_NAATS',
        value: 'Positive for Neisseria gonorrhoeae',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'The most sensitive tests for detecting gonorrhoea; can be performed on urine samples or swabs from the affected area'
      },
      {
        id: 'GRAM_STAIN',
        value: 'Gram-negative intracellular diplococci',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Microscopic examination of a sample (e.g., urethral or cervical swab) may reveal characteristic Gram-negative intracellular diplococci'
      },
      {
        id: 'BACTERIAL_CULTURE',
        value: 'Positive for Neisseria gonorrhoeae',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can confirm the diagnosis and allow for antibiotic susceptibility testing'
      }
    ],
    medications: [
      'Dual antibiotic therapy (e.g., ceftriaxone injection plus oral azithromycin) - recommended treatment due to increasing antibiotic resistance',
      'Treatment of sexual partners',
      'Test of cure (repeat testing after treatment) in certain cases'
    ],
    lifestyle: [
      'Safe sex practices (e.g., using condoms, limiting the number of sexual partners)',
      'Regular STI testing, especially for individuals with multiple partners',
      'Open communication with sexual partners',
      'Avoiding sexual contact until treatment is completed and symptoms have resolved',
      'Prompt treatment to prevent complications and further transmission'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'gout',
    name: 'Gout',
    category: 'Musculoskeletal',
    description: 'A form of inflammatory arthritis characterized by sudden, severe attacks of pain, redness, and tenderness in joints, often the joint at the base of the big toe. It is caused by a buildup of uric acid in the blood.',
    symptoms: [
      'Intense joint pain, often in the big toe, but can affect other joints',
      'Inflammation and redness of the affected joint',
      'Swelling of the affected joint',
      'Warmth over the affected joint',
      'Limited range of motion in the affected joint',
      'Attacks often occur suddenly, at night',
      'Tophi (deposits of urate crystals under the skin) in chronic cases'
    ],
    relatedParameters: [
      {
        id: 'JOINT_FLUID_ANALYSIS',
        value: 'Urate crystals',
        unit: '',
        normalRange: { min: 'No crystals', max: 'No crystals' },
        status: 'Crystals present',
        description: 'Examination of fluid aspirated from the affected joint can reveal the presence of needle-shaped, negatively birefringent urate crystals'
      },
      {
        id: 'URIC_ACID',
        status: 'ELEVATED',
        description: 'Serum uric acid levels are often elevated, but can be normal during an acute attack'
      },
      {
        id: 'X_RAYS',
        value: 'Joint damage/Tophi',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May be normal in early gout, but can show joint damage or tophi in chronic cases'
      }
    ],
    medications: [
      'NSAIDs (to relieve pain and inflammation during acute attacks)',
      'Colchicine (to relieve pain and inflammation during acute attacks and can also be used for prevention)',
      'Corticosteroids (to reduce inflammation)',
      'Xanthine oxidase inhibitors (e.g., allopurinol, febuxostat) - to lower uric acid levels and prevent attacks',
      'Uricosurics (e.g., probenecid) - to help the kidneys remove uric acid from the body'
    ],
    lifestyle: [
      'Weight management',
      'Limiting alcohol consumption, especially beer',
      'Avoiding high-purine foods (e.g., red meat, organ meats, seafood)',
      'Staying well-hydrated',
      'Regular exercise',
      'Dietary changes to lower uric acid levels'
    ],
    diet: [
      'Low-purine diet',
      'Increased intake of low-fat dairy products',
      'Increased intake of fruits and vegetables',
      'Adequate hydration',
      'Limiting or avoiding alcohol'
    ]
  },
  {
    id: 'haemorrhoids-piles',
    name: 'Haemorrhoids (Piles)',
    category: 'Gastrointestinal',
    description: 'Swollen veins in the anus and rectum, similar to varicose veins. They can be internal (inside the rectum) or external (around the anus).',
    symptoms: [
      'Painless bleeding during bowel movements (bright red blood)',
      'Itching or irritation in the anal region',
      'Pain or discomfort',
      'Swelling around the anus',
      'A lump near the anus, which may be sensitive or painful (thrombosed external haemorrhoid)',
      'Leakage of faeces'
    ],
    relatedParameters: [
      {
        id: 'ANOSCOPY',
        value: 'Internal haemorrhoids',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Haemorrhoids present',
        description: 'A procedure to visualize the anal canal and lower rectum; can identify internal haemorrhoids'
      },
      {
        id: 'DIGITAL_RECTAL_EXAM',
        value: 'External or prolapsed haemorrhoids',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Can detect external haemorrhoids or prolapsed internal haemorrhoids'
      },
      {
        id: 'SIGMOIDOSCOPY_OR_COLONOSCOPY',
        value: 'Internal haemorrhoids',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Haemorrhoids present',
        description: 'May be performed to rule out other causes of rectal bleeding'
      }
    ],
    medications: [
      'Over-the-counter creams, ointments, or suppositories containing hydrocortisone or other ingredients to relieve pain and itching',
      'Stool softeners',
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Rubber band ligation',
      'Sclerotherapy',
      'Infrared coagulation',
      'Surgical removal (haemorrhoidectomy) - in severe cases',
      'Stapled haemorrhoidopexy'
    ],
    lifestyle: [
      'High-fiber diet',
      'Adequate fluid intake',
      'Avoiding straining during bowel movements',
      'Regular exercise',
      'Good anal hygiene',
      'Not delaying the urge to have a bowel movement',
      'Sitz baths (sitting in a few inches of warm water) several times a day'
    ],
    diet: [
      'High-fiber diet (fruits, vegetables, whole grains)',
      'Adequate hydration'
    ]
  },
  {
    id: 'hay-fever',
    name: 'Hay Fever (Allergic Rhinitis)',
    category: 'Immunological',
    description: 'An allergic response to allergens such as pollen, dust mites, or pet dander, causing cold-like signs and symptoms, such as a runny nose, itchy eyes, congestion, sneezing and sinus pressure.',
    symptoms: [
      'Runny nose',
      'Nasal congestion',
      'Sneezing',
      'Itchy or watery eyes',
      'Itchy nose, roof of mouth or throat',
      'Postnasal drip',
      'Cough',
      'Sinus pressure and pain',
      'Fatigue',
      'Symptoms may be seasonal (e.g., due to pollen) or year-round (e.g., due to dust mites or pet dander)'
    ],
    relatedParameters: [
      {
        id: 'SKIN_PRICK_TEST',
        value: 'Positive reaction to specific allergens',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify specific allergens by observing skin reactions to small amounts of allergens'
      },
      {
        id: 'ALLERGEN_SPECIFIC_IgE_BLOOD_TEST',
        value: 'Elevated levels for specific allergens',
        unit: 'kU/L',
        normalRange: { min: '<0.35', max: '<0.35' },
        status: 'Elevated',
        description: 'Blood tests can measure levels of IgE antibodies to specific allergens'
      },
      {
        id: 'NASAL_ENDOSCOPY',
        value: 'Nasal inflammation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation',
        description: 'May show signs of inflammation in the nasal passages, but not usually necessary for diagnosis'
      }
    ],
    medications: [
      'Antihistamines (e.g., cetirizine, loratadine, fexofenadine)',
      'Nasal corticosteroids (e.g., fluticasone, mometasone)',
      'Decongestants (e.g., pseudoephedrine) - use with caution and for short periods only',
      'Leukotriene modifiers (e.g., montelukast)',
      'Nasal saline irrigation',
      'Allergen immunotherapy (allergy shots or sublingual tablets)'
    ],
    lifestyle: [
      'Avoiding exposure to known allergens as much as possible',
      'Keeping windows closed during high pollen seasons',
      'Using air conditioning with HEPA filters',
      'Bathing and changing clothes after being outdoors',
      'Regularly cleaning the house to reduce dust mites and pet dander',
      'Using dust mite-proof covers on bedding',
      'Monitoring pollen counts and planning outdoor activities accordingly'
    ],
    diet: [
      'Generally not directly related to diet, although some people may find that certain foods exacerbate their symptoms'
    ]
  },
  {
    id: 'heart-attack',
    name: 'Heart Attack (Myocardial Infarction)',
    category: 'Cardiovascular',
    description: 'A life-threatening condition that occurs when blood flow to a part of the heart is blocked, usually by a blood clot, causing damage or death to the heart muscle.',
    symptoms: [
      'Chest pain or discomfort (often described as pressure, tightness, squeezing, or aching)',
      'Pain or discomfort that radiates to the shoulder, arm, back, neck, jaw, teeth, or upper abdomen',
      'Shortness of breath',
      'Sweating',
      'Nausea or vomiting',
      'Lightheadedness or dizziness',
      'Fatigue',
      'Indigestion or heartburn-like pain',
      'Women may experience atypical symptoms such as only shortness of breath, nausea/vomiting, back or jaw pain'
    ],
    relatedParameters: [
      {
        id: 'ECG',
        value: 'ST elevation, T wave inversion, Q waves',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Electrocardiogram (ECG) may show characteristic changes such as ST segment elevation, T wave inversion, or pathological Q waves, depending on the location and timing of the heart attack'
      },
      {
        id: 'TROPONIN',
        status: 'ELEVATED',
        description: 'Cardiac troponin levels are elevated in the blood due to heart muscle damage'
      },
      {
        id: 'CK_MB',
        status: 'ELEVATED',
        description: 'Creatine kinase-MB (CK-MB) may also be elevated, but is less specific than troponin'
      },
      {
        id: 'CORONARY_ANGIOGRAPHY',
        value: 'Coronary artery blockage',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Blockage',
        description: 'Can visualize the location and extent of coronary artery blockage'
      }
    ],
    medications: [
      'Aspirin (to reduce blood clotting)',
      'Nitroglycerin (to improve blood flow and relieve chest pain)',
      'Thrombolytic therapy ("clot busters") - to dissolve the blood clot (if given within a certain time window)',
      'Beta blockers (to reduce heart rate and blood pressure)',
      'ACE inhibitors (to lower blood pressure and reduce strain on the heart)',
      'Statins (to lower cholesterol)',
      'Antiplatelet agents (e.g., clopidogrel, ticagrelor) - to prevent further clot formation',
      'Percutaneous coronary intervention (PCI) - to open blocked arteries',
      'Coronary artery bypass graft (CABG) surgery - in some cases'
    ],
    lifestyle: [
      'Cardiac rehabilitation',
      'Regular exercise (as recommended by a healthcare provider)',
      'Heart-healthy diet',
      'Weight management',
      'Smoking cessation',
      'Stress management',
      'Regular medical check-ups',
      'Medication adherence'
    ],
    diet: [
      'Heart-healthy diet (e.g., Mediterranean diet) - low in saturated and trans fats, cholesterol, and sodium; rich in fruits, vegetables, whole grains, and lean protein'
    ]
  },
  {
    id: 'heart-block',
    name: 'Heart Block',
    category: 'Cardiovascular',
    description: 'A type of arrhythmia in which the electrical signals that control the heartbeat are partially or completely blocked from traveling from the atria (upper chambers of the heart) to the ventricles (lower chambers of the heart).',
    symptoms: [
      'Slow heart rate (bradycardia)',
      'Lightheadedness or dizziness',
      'Fainting (syncope)',
      'Shortness of breath',
      'Chest pain',
      'Fatigue',
      'Palpitations',
      'May be asymptomatic in some cases',
      'Symptoms vary depending on the degree of heart block'
    ],
    relatedParameters: [
      {
        id: 'ECG',
        value: 'Specific patterns based on the degree of block',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Electrocardiogram (ECG) can identify the type and degree of heart block (first-degree, second-degree [Mobitz I or II], or third-degree)'
      },
      {
        id: 'HOLTER_MONITOR',
        value: 'Episodes of heart block',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'A 24-hour or longer ECG recording can detect intermittent episodes of heart block'
      },
      {
        id: 'ELECTROPHYSIOLOGY_STUDY',
        value: 'Abnormal conduction',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'May be performed in some cases to further evaluate the conduction system and determine the site of the block'
      }
    ],
    medications: [
      'No specific medication to treat heart block itself',
      'Treatment of underlying causes (e.g., medications that may be contributing to the block, treatment of Lyme disease or other infections)',
      'Atropine (to temporarily increase heart rate in emergency situations)',
      'Pacemaker implantation (for symptomatic or high-grade heart block)'
    ],
    lifestyle: [
      'Regular monitoring with ECGs',
      'Avoiding medications that may worsen heart block (if applicable)',
      'Prompt treatment of underlying conditions',
      'Pacemaker follow-up (if a pacemaker is implanted)',
      'Education about symptoms that require medical attention'
    ],
    diet: [
      'Generally not directly related to diet, although a heart-healthy diet is recommended for overall cardiovascular health'
    ]
  },
  {
    id: 'heart-failure',
    name: 'Heart Failure',
    category: 'Cardiovascular',
    description: 'A chronic, progressive condition in which the heart muscle is unable to pump enough blood to meet the body\'s needs for blood and oxygen. It can be caused by various conditions that damage or weaken the heart.',
    symptoms: [
      'Shortness of breath (dyspnea) during activity or at rest',
      'Fatigue and weakness',
      'Swelling (edema) in the legs, ankles, and feet',
      'Rapid or irregular heartbeat',
      'Reduced ability to exercise',
      'Persistent cough or wheezing with white or pink blood-tinged phlegm',
      'Increased need to urinate at night (nocturia)',
      'Swelling of the abdomen (ascites)',
      'Sudden weight gain from fluid retention',
      'Lack of appetite or nausea',
      'Difficulty concentrating or decreased alertness'
    ],
    relatedParameters: [
      {
        id: 'ECHOCARDIOGRAM',
        value: 'Reduced ejection fraction/Wall motion abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Can assess the heart\'s pumping function (ejection fraction) and identify structural abnormalities or problems with heart valve function'
      },
      {
        id: 'BNP_OR_NT_PROBNP',
        status: 'ELEVATED',
        description: 'B-type natriuretic peptide (BNP) or N-terminal pro-BNP levels are elevated in the blood due to heart failure'
      },
      {
        id: 'CHEST_X_RAY',
        value: 'Cardiomegaly/Pulmonary congestion',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'May show an enlarged heart (cardiomegaly) or signs of fluid in the lungs (pulmonary congestion)'
      },
      {
        id: 'ECG',
        value: 'Arrhythmias/Evidence of prior heart attack',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Variable',
        description: 'May show abnormal heart rhythms or evidence of a prior heart attack'
      }
    ],
    medications: [
      'ACE inhibitors or angiotensin II receptor blockers (ARBs)',
      'Beta blockers',
      'Diuretics',
      'Aldosterone antagonists',
      'Sacubitril/valsartan (Entresto)',
      'SGLT2 inhibitors (e.g., dapagliflozin, empagliflozin)',
      'Digoxin',
      'Hydralazine and isosorbide dinitrate (in some cases)',
      'Ivabradine (in some cases)',
      'Implantable cardioverter-defibrillator (ICD) - in some cases',
      'Cardiac resynchronization therapy (CRT) - in some cases',
      'Left ventricular assist device (LVAD) or heart transplant - in advanced cases'
    ],
    lifestyle: [
      'Regular exercise (as recommended by a healthcare provider)',
      'Heart-healthy diet (low sodium, low saturated and trans fats)',
      'Weight management',
      'Fluid restriction (in some cases)',
      'Smoking cessation',
      'Limiting alcohol consumption',
      'Stress management',
      'Regular medical check-ups',
      'Medication adherence',
      'Daily weight monitoring to detect fluid retention'
    ],
    diet: [
      'Low-sodium diet (usually less than 2 grams of sodium per day)',
      'Heart-healthy diet (e.g., Mediterranean diet)',
      'Fluid restriction (if recommended by a healthcare provider)'
    ]
  },
  {
    id: 'hepatitis-a',
    name: 'Hepatitis A',
    category: 'Hepatic',
    description: 'A highly contagious liver infection caused by the hepatitis A virus, typically spread through contaminated food or water.',
    symptoms: [
      'Fatigue',
      'Sudden nausea and vomiting',
      'Abdominal pain, especially near liver',
      'Clay-colored bowel movements',
      'Loss of appetite',
      'Low-grade fever',
      'Dark urine',
      'Joint pain',
      'Jaundice (yellowing of skin and eyes)',
      'Intense itching'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Often markedly elevated, may be >1000 U/L'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'Usually elevated, may be >1000 U/L'
      },
      {
        id: 'TOTAL_BILIRUBIN',
        status: 'HIGH',
        description: 'Elevated, especially in cases with jaundice'
      },
      {
        id: 'HAV_IGM',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence of IgM antibodies to HAV indicates acute infection'
      }
    ],
    medications: [
      'No specific treatment, supportive care',
      'Rest',
      'Adequate hydration'
    ],
    lifestyle: [
      'Good hygiene practices',
      'Handwashing',
      'Avoiding contaminated food and water',
      'Vaccination for prevention'
    ],
    diet: [
      'Well-balanced diet',
      'Adequate fluid intake'
    ]
  },
  {
    id: 'hepatitis-b',
    name: 'Hepatitis B',
    category: 'Hepatic',
    description: 'A serious liver infection caused by the hepatitis B virus, spread through blood and bodily fluids. Can be acute or chronic.',
    symptoms: [
      'Abdominal pain',
      'Dark urine',
      'Fever',
      'Joint pain',
      'Loss of appetite',
      'Nausea and vomiting',
      'Weakness and fatigue',
      'Jaundice'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Elevated in acute and chronic hepatitis B'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'Elevated, but usually lower than ALT'
      },
      {
        id: 'HBSAG',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence indicates active hepatitis B infection'
      },
      {
        id: 'HBV_DNA',
        value: 'High',
        unit: 'IU/mL',
        normalRange: { min: 'Undetectable', max: 'Undetectable' },
        status: 'High',
        description: 'Viral load indicates active viral replication'
      }
    ],
    medications: [
      'Antiviral medications (e.g., tenofovir, entecavir)',
      'Interferon injections (for some cases)'
    ],
    lifestyle: [
      'Avoiding alcohol',
      'Safe sex practices',
      'Vaccination for prevention',
      'Regular monitoring for liver health'
    ],
    diet: [
      'Healthy, balanced diet',
      'Limiting alcohol consumption'
    ]
  },
  {
    id: 'hepatitis-c',
    name: 'Hepatitis C',
    category: 'Hepatic',
    description: 'A viral infection that causes liver inflammation, spread through contact with contaminated blood. Often chronic.',
    symptoms: [
      'Fatigue',
      'Jaundice',
      'Easy bleeding or bruising',
      'Loss of appetite',
      'Pale-colored stools',
      'Dark-colored urine',
      'Itchy skin',
      'Fluid buildup in abdomen (ascites)'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Often elevated, but can fluctuate'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'May be elevated, usually lower than ALT'
      },
      {
        id: 'HCV_RNA',
        value: 'Positive',
        unit: 'IU/mL',
        normalRange: { min: 'Undetectable', max: 'Undetectable' },
        status: 'Positive',
        description: 'Presence of HCV RNA indicates active infection'
      },
      {
        id: 'ANTI_HCV',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence of antibodies to HCV'
      }
    ],
    medications: [
      'Direct-acting antiviral (DAA) medications (e.g., sofosbuvir, ledipasvir)'
    ],
    lifestyle: [
      'Avoiding alcohol',
      'Safe injection practices',
      'Regular monitoring for liver health',
      'No sharing of needles'
    ],
    diet: [
      'Healthy, balanced diet',
      'Limiting alcohol consumption'
    ]
  },
  {
    id: 'hepatitis-d',
    name: 'Hepatitis D',
    category: 'Hepatic',
    description: 'A serious liver disease caused by the hepatitis D virus (HDV), which requires the hepatitis B virus to replicate. Spread through blood.',
    symptoms: [
      'Jaundice',
      'Fatigue',
      'Abdominal pain',
      'Loss of appetite',
      'Nausea',
      'Joint pain',
      'Dark urine',
      'Worsening of existing hepatitis B symptoms'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Elevated'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'Elevated'
      },
      {
        id: 'HDV_RNA',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence indicates active HDV infection'
      },
      {
        id: 'HBSAG',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Must be positive for HDV to replicate'
      }
    ],
    medications: [
      'Pegylated interferon alfa (limited effectiveness)'
    ],
    lifestyle: [
      'Preventing hepatitis B infection',
      'Avoiding alcohol',
      'Safe sex practices'
    ],
    diet: [
      'Healthy, balanced diet'
    ]
  },
  {
    id: 'hepatitis-e',
    name: 'Hepatitis E',
    category: 'Hepatic',
    description: 'A liver infection caused by the hepatitis E virus (HEV), usually spread through contaminated water. Generally acute and self-limiting.',
    symptoms: [
      'Mild fever',
      'Reduced appetite',
      'Nausea and vomiting',
      'Abdominal pain',
      'Jaundice',
      'Dark urine',
      'Pale-colored stools',
      'Enlarged, tender liver'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Elevated during acute infection'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'Elevated'
      },
      {
        id: 'HEV_IGM',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence of IgM antibodies to HEV indicates acute infection'
      }
    ],
    medications: [
      'No specific treatment, supportive care',
      'Rest',
      'Adequate hydration'
    ],
    lifestyle: [
      'Good hygiene practices',
      'Safe drinking water',
      'Proper sanitation'
    ],
    diet: [
      'Well-balanced diet',
      'Adequate fluid intake'
    ]
  },
  {
    id: 'hiatus-hernia',
    name: 'Hiatus Hernia',
    category: 'Gastrointestinal',
    description: 'A condition where a portion of the stomach pushes upward through the diaphragm, the muscle that separates the chest from the abdomen.',
    symptoms: [
      'Heartburn',
      'Regurgitation of food or liquid',
      'Acid reflux',
      'Difficulty swallowing',
      'Chest pain',
      'Abdominal pain',
      'Shortness of breath',
      'Feeling full quickly after eating'
    ],
    relatedParameters: [
      {
        id: 'UPPER_GI_ENDOSCOPY',
        value: 'Herniation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Herniation',
        description: 'Can visualize the hernia'
      },
      {
        id: 'BARIUM_SWALLOW',
        value: 'Hernia',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Hernia',
        description: 'Can show the hernia on X-ray'
      }
    ],
    medications: [
      'Antacids',
      'H2-receptor blockers',
      'Proton pump inhibitors (PPIs)',
      'Prokinetic agents'
    ],
    lifestyle: [
      'Eating smaller, more frequent meals',
      'Avoiding trigger foods (e.g., spicy, fatty foods)',
      'Not lying down after eating',
      'Weight management',
      'Elevating the head of the bed'
    ],
    diet: [
      'Smaller, more frequent meals',
      'Avoiding trigger foods',
      'Low-fat diet'
    ]
  },
  {
    id: 'hiv',
    name: 'HIV',
    category: 'Immunological',
    description: 'Human Immunodeficiency Virus, a virus that attacks the body\'s immune system, specifically CD4 cells. Can lead to AIDS if not treated.',
    symptoms: [
      'Fever',
      'Chills',
      'Rash',
      'Night sweats',
      'Muscle aches',
      'Sore throat',
      'Fatigue',
      'Swollen lymph nodes',
      'Mouth ulcers'
    ],
    relatedParameters: [
      {
        id: 'CD4_COUNT',
        status: 'LOW',
        description: 'Reduced number of CD4 cells'
      },
      {
        id: 'HIV_RNA',
        value: 'High',
        unit: 'copies/mL',
        normalRange: { min: 'Undetectable', max: 'Undetectable' },
        status: 'High',
        description: 'Viral load indicates the amount of virus in the blood'
      },
      {
        id: 'WBC',
        status: 'LOW',
        description: 'May be decreased due to immune system suppression'
      }
    ],
    medications: [
      'Antiretroviral therapy (ART) - combination of drugs'
    ],
    lifestyle: [
      'Safe sex practices',
      'Regular HIV testing',
      'Adherence to ART',
      'Healthy lifestyle'
    ],
    diet: [
      'Balanced diet to support immune system',
      'Good food safety practices'
    ]
  },
  {
    id: 'hives',
    name: 'Hives (Urticaria)',
    category: 'Dermatological',
    description: 'A skin rash triggered by a reaction to food, medicine, or other irritants. Characterized by itchy, raised welts.',
    symptoms: [
      'Itchy, raised welts on skin',
      'Welts that vary in size and shape',
      'Welts that appear and fade repeatedly',
      'Skin swelling (angioedema)',
      'Burning or stinging sensation'
    ],
    relatedParameters: [
      {
        id: 'IgE',
        status: 'HIGH',
        description: 'May be elevated if hives are allergy-related'
      },
      {
        id: 'EOSINOPHILS',
        status: 'HIGH',
        description: 'May be elevated in some cases'
      },
      {
        id: 'SKIN_PRICK_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Can identify allergens if hives are allergy-related'
      }
    ],
    medications: [
      'Antihistamines (e.g., cetirizine, loratadine)',
      'Corticosteroids (for severe cases)',
      'Omalizumab (for chronic hives)'
    ],
    lifestyle: [
      'Avoiding triggers',
      'Cool compresses',
      'Loose-fitting clothing'
    ],
    diet: [
      'Identifying and avoiding food triggers'
    ]
  },
  {
    id: 'hodgkin-lymphoma',
    name: 'Hodgkin Lymphoma',
    category: 'Oncological',
    description: 'A type of cancer that affects the lymphatic system, part of the body\'s germ-fighting network.',
    symptoms: [
      'Painless swelling of lymph nodes',
      'Persistent fatigue',
      'Fever',
      'Night sweats',
      'Unexplained weight loss',
      'Itchy skin',
      'Increased sensitivity to alcohol',
      'Pain in lymph nodes after drinking alcohol'
    ],
    relatedParameters: [
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Often elevated'
      },
      {
        id: 'LDH',
        status: 'HIGH',
        description: 'May be elevated'
      },
      {
        id: 'LYMPH_NODE_BIOPSY',
        value: 'Reed-Sternberg cells',
        unit: '',
        normalRange: { min: 'No abnormal cells', max: 'No abnormal cells' },
        status: 'Reed-Sternberg cells',
        description: 'Presence of Reed-Sternberg cells confirms diagnosis'
      }
    ],
    medications: [
      'Chemotherapy',
      'Radiation therapy',
      'Immunotherapy',
      'Stem cell transplant'
    ],
    lifestyle: [
      'Rest',
      'Healthy diet',
      'Support groups'
    ],
    diet: [
      'Nutritious diet to support treatment and recovery'
    ]
  },
  {
    id: 'huntingtons-disease',
    name: 'Huntington’s Disease',
    category: 'Neurological',
    description: 'An inherited disease that causes the progressive breakdown (degeneration) of nerve cells in the brain.',
    symptoms: [
      'Involuntary jerking or writhing movements (chorea)',
      'Muscle rigidity or contracture',
      'Slow or abnormal eye movements',
      'Impaired gait, posture, and balance',
      'Difficulty with speech or swallowing',
      'Cognitive impairments',
      'Depression',
      'Insomnia'
    ],
    relatedParameters: [
      {
        id: 'GENETIC_TESTING',
        value: 'HTT gene mutation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'HTT gene mutation',
        description: 'Presence of expanded CAG repeat in HTT gene confirms diagnosis'
      },
      {
        id: 'MRI_BRAIN',
        value: 'Caudate atrophy',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Caudate atrophy',
        description: 'May show atrophy of the caudate nucleus'
      }
    ],
    medications: [
      'Tetrabenazine, deutetrabenazine (for chorea)',
      'Antipsychotic drugs',
      'Antidepressants'
    ],
    lifestyle: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Support groups'
    ],
    diet: [
      'High-calorie diet to maintain weight',
      'Assistance with eating if needed'
    ]
  },
  {
    id: 'hydrocephalus',
    name: 'Hydrocephalus',
    category: 'Neurological',
    description: 'A buildup of fluid in the cavities (ventricles) deep within the brain, increasing the size of the ventricles and putting pressure on the brain.',
    symptoms: [
      'Unusually large head (in infants)',
      'Bulging soft spot on head (in infants)',
      'Vomiting',
      'Sleepiness',
      'Irritability',
      'Poor feeding',
      'Seizures',
      'Headache',
      'Blurred or double vision',
      'Difficulty walking'
    ],
    relatedParameters: [
      {
        id: 'CT_BRAIN',
        value: 'Enlarged ventricles',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Enlarged ventricles',
        description: 'Shows enlarged ventricles'
      },
      {
        id: 'MRI_BRAIN',
        value: 'Ventricular dilation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Ventricular dilation',
        description: 'Confirms enlarged ventricles and may show cause'
      },
      {
        id: 'ICP',
        status: 'HIGH',
        description: 'May be elevated in some cases'
      }
    ],
    medications: [
      'No specific drug treatment, surgical management'
    ],
    lifestyle: [
      'Regular neurological evaluations',
      'Physical and occupational therapy'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'hyperhidrosis',
    name: 'Hyperhidrosis',
    category: 'Dermatological',
    description: 'A condition characterized by abnormally excessive sweating that\'s not necessarily related to heat or exercise.',
    symptoms: [
      'Frequent sweating',
      'Sweating that soaks through clothing',
      'Clammy or wet palms of the hands',
      'Clammy or wet soles of the feet',
      'Noticeable sweating that interferes with daily activities',
      'Sweating on one or both sides of the body'
    ],
    relatedParameters: [
      {
        id: 'STARCH_IODINE_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Highlights areas of excessive sweating'
      },
      {
        id: 'PAPER_TEST',
        value: 'Increased weight',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Increased weight',
        description: 'Quantifies sweat production'
      }
    ],
    medications: [
      'Antiperspirants (containing aluminum chloride)',
      'Prescription-strength antiperspirants',
      'Anticholinergic drugs',
      'Botulinum toxin injections'
    ],
    lifestyle: [
      'Wearing loose-fitting, breathable clothing',
      'Using absorbent underarm pads',
      'Bathing daily',
      'Iontophoresis'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'idiopathic-pulmonary-fibrosis',
    name: 'Idiopathic Pulmonary Fibrosis',
    category: 'Respiratory',
    description: 'A chronic, progressive lung disease characterized by scarring (fibrosis) of the lungs, with no identifiable cause.',
    symptoms: [
      'Shortness of breath',
      'Dry, hacking cough',
      'Gradual, unintended weight loss',
      'Fatigue',
      'Aching muscles and joints',
      'Clubbing (widening and rounding) of the tips of the fingers or toes'
    ],
    relatedParameters: [
      {
        id: 'PULMONARY_FUNCTION_TESTS',
        value: 'Restrictive pattern',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Restrictive pattern',
        description: 'Show reduced lung volumes and capacities'
      },
      {
        id: 'HRCT_CHEST',
        value: 'Honeycombing',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Honeycombing',
        description: 'Shows characteristic pattern of fibrosis'
      },
      {
        id: 'DLCO',
        status: 'LOW',
        description: 'Reduced diffusion capacity for carbon monoxide'
      }
    ],
    medications: [
      'Pirfenidone',
      'Nintedanib',
      'Oxygen therapy'
    ],
    lifestyle: [
      'Pulmonary rehabilitation',
      'Smoking cessation',
      'Flu and pneumonia vaccinations',
      'Regular exercise as tolerated'
    ],
    diet: [
      'Nutritious diet to maintain weight and energy'
    ]
  },
  {
    id: 'impetigo',
    name: 'Impetigo',
    category: 'Dermatological',
    description: 'A highly contagious bacterial skin infection that mainly affects infants and children. Characterized by red sores that can rupture, ooze, and form a yellowish-brown crust.',
    symptoms: [
      'Red sores, often around nose and mouth',
      'Fluid-filled blisters',
      'Itching',
      'Sores that rupture and ooze',
      'Honey-colored crusts',
      'Swollen lymph nodes near the infection'
    ],
    relatedParameters: [
      {
        id: 'BACTERIAL_CULTURE',
        value: 'Staphylococcus aureus or Streptococcus pyogenes',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Identifies the causative bacteria'
      }
    ],
    medications: [
      'Topical antibiotics (e.g., mupirocin)',
      'Oral antibiotics (e.g., dicloxacillin, cephalexin)'
    ],
    lifestyle: [
      'Good hygiene',
      'Keeping the affected area clean',
      'Avoiding close contact with others',
      'Not sharing towels or personal items'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'infertility',
    name: 'Infertility',
    category: 'Reproductive',
    description: 'The inability to conceive after one year of regular, unprotected intercourse (or six months for women over 35).',
    symptoms: [
      'Inability to get pregnant',
      'Irregular or absent menstrual periods (in women)',
      'Erectile dysfunction (in men)',
      'Painful periods (in women)',
      'Hormonal imbalances'
    ],
    relatedParameters: [
      {
        id: 'SEMEN_ANALYSIS',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'May show low sperm count, poor motility, or abnormal morphology'
      },
      {
        id: 'FSH',
        status: 'HIGH or LOW',
        description: 'Can indicate ovarian reserve issues or other hormonal imbalances'
      },
      {
        id: 'LH',
        status: 'HIGH or LOW',
        description: 'Can indicate ovulatory dysfunction'
      },
      {
        id: 'ESTRADIOL',
        status: 'HIGH or LOW',
        description: 'May be abnormal in cases of ovarian dysfunction'
      },
      {
        id: 'PROGESTERONE',
        status: 'LOW',
        description: 'May indicate lack of ovulation'
      },
      {
        id: 'TESTOSTERONE',
        status: 'LOW',
        description: 'May be low in men with infertility'
      }
    ],
    medications: [
      'Clomiphene citrate',
      'Gonadotropins',
      'Metformin (for PCOS)',
      'Letrozole',
      'Bromocriptine'
    ],
    lifestyle: [
      'Maintaining a healthy weight',
      'Avoiding smoking and excessive alcohol',
      'Stress management',
      'Timed intercourse'
    ],
    diet: [
      'Healthy, balanced diet'
    ]
  },
  {
    id: 'inflammatory-bowel-disease',
    name: 'Inflammatory Bowel Disease (IBD)',
    category: 'Gastrointestinal',
    description: 'A group of chronic inflammatory conditions affecting the digestive tract, primarily including Crohn\'s disease and ulcerative colitis.',
    symptoms: [
      'Diarrhea',
      'Abdominal pain and cramping',
      'Rectal bleeding',
      'Weight loss',
      'Fatigue',
      'Fever',
      'Reduced appetite',
      'Mouth sores'
    ],
    relatedParameters: [
      {
        id: 'FECAL_CALPROTECTIN',
        status: 'HIGH',
        description: 'Elevated in active IBD'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'Elevated during inflammation'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Elevated during inflammation'
      },
      {
        id: 'COLONOSCOPY',
        value: 'Inflammation, ulcers',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflammation, ulcers',
        description: 'Shows characteristic features of IBD'
      }
    ],
    medications: [
      'Aminosalicylates (e.g., mesalamine)',
      'Corticosteroids',
      'Immunomodulators (e.g., azathioprine, mercaptopurine)',
      'Biologics (e.g., infliximab, adalimumab)'
    ],
    lifestyle: [
      'Stress management',
      'Regular exercise',
      'Smoking cessation'
    ],
    diet: [
      'Low-residue diet during flares',
      'Identifying and avoiding trigger foods',
      'Adequate hydration',
      'Nutritional supplements if needed'
    ]
  },
  {
    id: 'iron-deficiency-anemia',
    name: 'Iron Deficiency Anemia (IDA)',
    category: 'Hematological',
    description: 'A condition characterized by a lack of healthy red blood cells due to insufficient iron in the body.',
    symptoms: [
      'Fatigue',
      'Weakness',
      'Pale skin',
      'Shortness of breath',
      'Dizziness',
      'Headache',
      'Cold hands and feet',
      'Brittle nails',
      'Pica (unusual cravings for non-food items)'
    ],
    relatedParameters: [
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'Decreased hemoglobin levels'
      },
      {
        id: 'HEMATOCRIT',
        status: 'LOW',
        description: 'Reduced percentage of red blood cells'
      },
      {
        id: 'SERUM_IRON',
        status: 'LOW',
        description: 'Decreased iron levels in the blood'
      },
      {
        id: 'FERRITIN',
        status: 'LOW',
        description: 'Low ferritin indicates depleted iron stores'
      },
      {
        id: 'TIBC',
        status: 'HIGH',
        description: 'Increased total iron-binding capacity'
      }
    ],
    medications: [
      'Iron supplements (e.g., ferrous sulfate, ferrous gluconate)',
      'Intravenous iron (in severe cases)'
    ],
    lifestyle: [
      'Treating underlying causes of blood loss',
      'Regular monitoring of iron levels'
    ],
    diet: [
      'Iron-rich foods (e.g., red meat, beans, leafy greens)',
      'Foods rich in vitamin C to enhance iron absorption'
    ]
  },
  {
    id: 'irritable-bowel-syndrome',
    name: 'Irritable Bowel Syndrome (IBS)',
    category: 'Gastrointestinal',
    description: 'A common disorder that affects the large intestine, causing cramping, abdominal pain, bloating, gas, diarrhea, and/or constipation. It is a chronic condition that needs to be managed long term.',
    symptoms: [
      'Abdominal pain or cramping, often related to bowel movements',
      'Changes in bowel habits (diarrhea, constipation, or alternating)',
      'Bloating',
      'Gas',
      'Mucus in the stool',
      'Feeling of incomplete bowel movement'
    ],
    relatedParameters: [
      {
        id: 'STOOL_TESTS',
        value: 'Normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal',
        description: 'Used to rule out other conditions'
      },
      {
        id: 'COLONOSCOPY',
        value: 'Normal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal',
        description: 'Usually normal in IBS, used to rule out other conditions'
      }
    ],
    medications: [
      'Antidiarrheals (e.g., loperamide)',
      'Laxatives (e.g., polyethylene glycol)',
      'Antispasmodics (e.g., dicyclomine)',
      'Antidepressants (e.g., tricyclic antidepressants, SSRIs)',
      'Lubiprostone',
      'Linaclotide'
    ],
    lifestyle: [
      'Stress management',
      'Regular exercise',
      'Adequate sleep',
      'Identifying and avoiding trigger foods'
    ],
    diet: [
      'Low-FODMAP diet',
      'Increased fiber intake (gradually)',
      'Adequate hydration'
    ]
  },
  {
    id: 'joint-hypermobility',
    name: 'Joint Hypermobility',
    category: 'Musculoskeletal',
    description: 'A condition where joints can move beyond the normal range of motion. May occur on its own or as part of a syndrome.',
    symptoms: [
      'Joint pain',
      'Joint clicking or popping',
      'Easy bruising',
      'Fatigue',
      'Recurrent joint dislocations or subluxations',
      'Soft, stretchy skin',
      'Digestive problems',
      'Dizziness or fainting'
    ],
    relatedParameters: [
      {
        id: 'BEIGHTON_SCORE',
        value: '≥ 4/9',
        unit: '',
        normalRange: { min: '< 4/9', max: '< 4/9' },
        status: '≥ 4/9',
        description: 'A scoring system used to assess joint hypermobility'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs, acetaminophen)'
    ],
    lifestyle: [
      'Physical therapy',
      'Low-impact exercise',
      'Joint protection strategies',
      'Pacing activities'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'kaposi-sarcoma',
    name: 'Kaposi’s Sarcoma',
    category: 'Oncological',
    description: 'A type of cancer that forms in the lining of blood and lymph vessels. Often associated with HIV/AIDS.',
    symptoms: [
      'Red, purple, or brown skin lesions',
      'Lesions on the legs, feet, or face',
      'Lesions in the mouth or throat',
      'Swollen lymph nodes',
      'Shortness of breath (if in lungs)',
      'Abdominal pain (if in digestive tract)',
      'Weight loss'
    ],
    relatedParameters: [
      {
        id: 'SKIN_BIOPSY',
        value: 'Abnormal spindle cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal spindle cells',
        description: 'Confirms the presence of Kaposi sarcoma'
      },
      {
        id: 'HHV8_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects human herpesvirus 8, which is associated with KS'
      }
    ],
    medications: [
      'Antiretroviral therapy (ART) for HIV-associated KS',
      'Chemotherapy',
      'Radiation therapy',
      'Immunotherapy'
    ],
    lifestyle: [
      'Managing HIV infection if present',
      'Wound care for skin lesions'
    ],
    diet: [
      'Nutritious diet to support immune system'
    ]
  },
    {
    id: 'renal-cancer',
    name: 'Renal Cancer',
    category: 'Oncological',
    description: 'Cancer that originates in the kidneys. Renal cell carcinoma is the most common type.',
    symptoms: [
      'Blood in urine (hematuria)',
      'Lower back pain on one side',
      'A mass or lump in the abdomen',
      'Unexplained weight loss',
      'Fatigue',
      'Fever',
      'Loss of appetite'
    ],
    relatedParameters: [
      {
        id: 'CT_SCAN',
        value: 'Renal mass',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Renal mass',
        description: 'Can detect the presence of a tumor'
      },
      {
        id: 'MRI',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Provides detailed images of the kidneys'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Confirms the diagnosis of cancer'
      }
    ],
    medications: [
      'Targeted therapy (e.g., sunitinib, pazopanib)',
      'Immunotherapy (e.g., nivolumab, pembrolizumab)',
      'Chemotherapy (less common)'
    ],
    lifestyle: [
      'Regular follow-up with a specialist',
      'Healthy lifestyle choices'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'renal-infection',
    name: 'Renal Infection (Pyelonephritis)',
    category: 'Nephrological',
    description: 'A type of urinary tract infection (UTI) that generally begins in the urethra or bladder and travels to one or both kidneys.',
    symptoms: [
      'Fever',
      'Frequent urination',
      'Pain in the back, side, or groin',
      'Nausea and vomiting',
      'Cloudy or foul-smelling urine',
      'Pus or blood in urine',
      'Burning sensation when urinating'
    ],
    relatedParameters: [
      {
        id: 'URINALYSIS',
        value: 'Positive for WBCs, bacteria',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Indicates infection'
      },
      {
        id: 'URINE_CULTURE',
        value: 'Bacterial growth',
        unit: '',
        normalRange: { min: 'No growth', max: 'No growth' },
        status: 'Bacterial growth',
        description: 'Identifies the causative organism'
      },
      {
        id: 'WBC',
        status: 'HIGH',
        description: 'Often elevated due to infection'
      }
    ],
    medications: [
      'Antibiotics (e.g., ciprofloxacin, levofloxacin, ceftriaxone)'
    ],
    lifestyle: [
      'Drinking plenty of fluids',
      'Completing the full course of antibiotics',
      'Hospitalization in severe cases'
    ],
    diet: [
      'Adequate hydration'
    ]
  },
  {
    id: 'renal-stones',
    name: 'Renal Stones (Nephrolithiasis)',
    category: 'Nephrological',
    description: 'Hard deposits made of minerals and salts that form inside the kidneys.',
    symptoms: [
      'Severe pain in the side and back, below the ribs',
      'Pain that radiates to the lower abdomen and groin',
      'Pain that comes in waves and fluctuates in intensity',
      'Pain on urination',
      'Pink, red, or brown urine',
      'Cloudy or foul-smelling urine',
      'Nausea and vomiting',
      'Frequent urination'
    ],
    relatedParameters: [
      {
        id: 'URINALYSIS',
        value: 'Hematuria, crystals',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Hematuria, crystals',
        description: 'May show blood and/or crystals'
      },
      {
        id: 'CT_SCAN',
        value: 'Stone present',
        unit: '',
        normalRange: { min: 'No stones', max: 'No stones' },
        status: 'Stone present',
        description: 'Detects the presence and location of stones'
      },
      {
        id: 'KUB_XRAY',
        value: 'Radiopaque stone',
        unit: '',
        normalRange: { min: 'No stones', max: 'No stones' },
        status: 'Radiopaque stone',
        description: 'May show radiopaque stones'
      }
    ],
    medications: [
      'Pain relievers (e.g., NSAIDs, opioids)',
      'Alpha-blockers (e.g., tamsulosin)',
      'Potassium citrate',
      'Thiazide diuretics'
    ],
    lifestyle: [
      'Drinking plenty of water',
      'Dietary changes depending on stone type',
      'Physical activity'
    ],
    diet: [
      'Increased fluid intake',
      'Low-sodium diet',
      'Limited animal protein intake',
      'Depending on stone type: low-oxalate diet, normal calcium intake'
    ]
  },
  {
    id: 'labyrinthitis',
    name: 'Labyrinthitis',
    category: 'Otolaryngological',
    description: 'An inner ear disorder characterized by inflammation of the labyrinth, a structure in the inner ear that helps control balance.',
    symptoms: [
      'Vertigo (sensation of spinning)',
      'Dizziness',
      'Loss of balance',
      'Nausea and vomiting',
      'Hearing loss',
      'Tinnitus (ringing in the ears)',
      'Difficulty focusing eyes'
    ],
    relatedParameters: [
      {
        id: 'HEARING_TEST',
        value: 'Hearing loss',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Hearing loss',
        description: 'May show hearing loss, especially in high frequencies'
      },
      {
        id: 'CALORIC_TESTING',
        value: 'Abnormal response',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal response',
        description: 'May show reduced or absent response to caloric stimulation'
      }
    ],
    medications: [
      'Antihistamines (e.g., meclizine)',
      'Antiemetics (e.g., prochlorperazine)',
      'Corticosteroids',
      'Benzodiazepines (e.g., diazepam)'
    ],
    lifestyle: [
      'Rest',
      'Vestibular rehabilitation exercises',
      'Avoiding sudden movements'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'lactose-intolerance',
    name: 'Lactose Intolerance',
    category: 'Gastrointestinal',
    description: 'The inability to fully digest lactose, the sugar found in milk and dairy products, due to a deficiency of the enzyme lactase.',
    symptoms: [
      'Diarrhea',
      'Nausea',
      'Abdominal cramps',
      'Bloating',
      'Gas',
      'Vomiting'
    ],
    relatedParameters: [
      {
        id: 'HYDROGEN_BREATH_TEST',
        value: 'High hydrogen levels',
        unit: '',
        normalRange: { min: 'Low', max: 'Low' },
        status: 'High',
        description: 'Indicates malabsorption of lactose'
      },
      {
        id: 'LACTOSE_TOLERANCE_TEST',
        value: 'Flat blood glucose curve',
        unit: '',
        normalRange: { min: 'Normal rise', max: 'Normal rise' },
        status: 'Flat',
        description: 'Shows little or no rise in blood glucose after lactose ingestion'
      }
    ],
    medications: [
      'Lactase enzyme supplements'
    ],
    lifestyle: [
      'Avoiding lactose-containing foods',
      'Using lactose-free dairy products',
      'Reading food labels carefully'
    ],
    diet: [
      'Lactose-free or low-lactose diet',
      'Calcium and vitamin D supplementation if needed'
    ]
  },
  {
    id: 'laryngeal-cancer',
    name: 'Laryngeal Cancer',
    category: 'Oncological',
    description: 'Cancer that forms in the tissues of the larynx (voice box).',
    symptoms: [
      'Hoarseness or voice changes',
      'Sore throat',
      'Persistent cough',
      'Difficulty swallowing',
      'Ear pain',
      'Lump in the neck',
      'Difficulty breathing',
      'Unexplained weight loss'
    ],
    relatedParameters: [
      {
        id: 'LARYNGOSCOPY',
        value: 'Abnormal growth',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal growth',
        description: 'Allows visualization of the larynx and any abnormal growths'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Confirms the diagnosis of cancer'
      },
      {
        id: 'CT_SCAN',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Helps determine the extent of the cancer'
      }
    ],
    medications: [
      'Chemotherapy',
      'Targeted therapy (e.g., cetuximab)'
    ],
    lifestyle: [
      'Smoking cessation',
      'Avoiding alcohol',
      'Speech therapy after surgery'
    ],
    diet: [
      'Soft or liquid diet if difficulty swallowing',
      'Nutritional support if needed'
    ]
  },
  {
    id: 'laryngitis',
    name: 'Laryngitis',
    category: 'Respiratory',
    description: 'Inflammation of the larynx (voice box), typically resulting in hoarseness or loss of voice.',
    symptoms: [
      'Hoarseness',
      'Weak voice or voice loss',
      'Tickling sensation in throat',
      'Sore throat',
      'Dry throat',
      'Dry cough'
    ],
    relatedParameters: [
      {
        id: 'LARYNGOSCOPY',
        value: 'Red, inflamed vocal cords',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Inflamed',
        description: 'Shows inflammation of the vocal cords'
      }
    ],
    medications: [
      'Corticosteroids (in some cases)',
      'Antibiotics (if bacterial infection)'
    ],
    lifestyle: [
      'Voice rest',
      'Humidifying the air',
      'Drinking plenty of fluids',
      'Avoiding irritants (e.g., smoke, fumes)'
    ],
    diet: [
      'Warm fluids',
      'Avoiding caffeine and alcohol'
    ]
  },
  {
    id: 'lichen-planus',
    name: 'Lichen Planus',
    category: 'Dermatological',
    description: 'An inflammatory condition that can affect the skin, hair, nails, and mucous membranes. Appears as purplish, itchy, flat-topped bumps on skin, or lacy white patches in the mouth.',
    symptoms: [
      'Purplish, flat-topped bumps on skin',
      'Itching',
      'Lacy white patches in mouth',
      'Painful sores in mouth or genitals',
      'Blisters',
      'Hair loss',
      'Nail damage or loss'
    ],
    relatedParameters: [
      {
        id: 'SKIN_BIOPSY',
        value: 'Characteristic features of lichen planus',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Characteristic',
        description: 'Shows a band-like infiltrate of lymphocytes in the upper dermis'
      }
    ],
    medications: [
      'Corticosteroids (topical, oral, or injected)',
      'Retinoids (topical or oral)',
      'Antihistamines',
      'Immunosuppressants (e.g., cyclosporine)',
      'Phototherapy'
    ],
    lifestyle: [
      'Avoiding injury to the skin',
      'Managing stress',
      'Good oral hygiene'
    ],
    diet: [
      'Generally not directly related to diet, but avoiding spicy or acidic foods may help with oral lichen planus'
    ]
  },
  {
    id: 'lipoedema',
    name: 'Lipoedema',
    category: 'Vascular',
    description: 'A chronic condition characterized by a symmetrical buildup of fatty tissue, usually in the legs and thighs, often resulting in pain and easy bruising.',
    symptoms: [
      'Symmetrical swelling of legs, thighs, and/or arms',
      'Pain and tenderness in affected areas',
      'Easy bruising',
      'Skin feels soft and cool',
      'Swelling does not improve with elevation or diuretics',
      '"Cuffing" at the ankles or wrists (fat stops abruptly)'
    ],
    relatedParameters: [
      {
        id: 'STEMMER_SIGN',
        value: 'Negative',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Negative',
        description: 'Distinguishes lipoedema from lymphedema (usually negative in lipoedema)'
      }
    ],
    medications: [
      'No specific drug treatment, management focuses on symptoms'
    ],
    lifestyle: [
      'Manual lymphatic drainage',
      'Compression therapy',
      'Exercise (e.g., swimming, walking)',
      'Weight management'
    ],
    diet: [
      'Healthy, balanced diet',
      'Low-sodium diet may help reduce swelling'
    ]
  },
  {
    id: 'hepatic-cancer',
    name: 'Hepatic Cancer (Hepatocellular Carcinoma)',
    category: 'Oncological',
    description: 'Cancer that originates in the liver cells. Hepatocellular carcinoma (HCC) is the most common type of primary liver cancer.',
    symptoms: [
      'Unexplained weight loss',
      'Loss of appetite',
      'Upper abdominal pain',
      'Nausea and vomiting',
      'General weakness and fatigue',
      'Abdominal swelling',
      'Jaundice',
      'White, chalky stools'
    ],
    relatedParameters: [
      {
        id: 'AFP',
        status: 'HIGH',
        description: 'Alpha-fetoprotein may be elevated in HCC'
      },
      {
        id: 'LIVER_BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Confirms diagnosis of cancer'
      },
      {
        id: 'CT_SCAN_ABDOMEN',
        value: 'Liver mass',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Liver mass',
        description: 'Detects the presence of a tumor'
      }
    ],
    medications: [
      'Sorafenib',
      'Lenalidomide',
      'Regorafenib',
      'Immunotherapy (e.g., nivolumab, pembrolizumab)',
      'Chemotherapy'
    ],
    lifestyle: [
      'Avoiding alcohol',
      'Treating underlying liver disease',
      'Regular monitoring for recurrence'
    ],
    diet: [
      'Generally not directly related to diet, but a nutritious diet is important'
    ]
  },
  {
    id: 'hepatic-tumours',
    name: 'Hepatic Tumours (Benign)',
    category: 'Hepatic',
    description: 'Abnormal growths in the liver that are non-cancerous. Examples include hemangiomas, adenomas, and focal nodular hyperplasia.',
    symptoms: [
      'Often asymptomatic',
      'Abdominal pain (if large)',
      'Feeling of fullness',
      'Rarely, bleeding or rupture'
    ],
    relatedParameters: [
      {
        id: 'IMAGING_STUDIES',
        value: 'Mass',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass',
        description: 'Ultrasound, CT, or MRI can detect liver masses'
      },
      {
        id: 'LIVER_BIOPSY',
        value: 'Benign cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Benign cells',
        description: 'May be needed to differentiate from cancer'
      }
    ],
    medications: [
      'Usually none needed, may require surgery if symptomatic or risk of complications'
    ],
    lifestyle: [
      'Regular monitoring with imaging studies'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'lumbar-stenosis',
    name: 'Lumbar Stenosis',
    category: 'Musculoskeletal',
    description: 'A narrowing of the spinal canal in the lower back (lumbar spine), which can put pressure on the spinal cord and nerves.',
    symptoms: [
      'Pain in the lower back and legs',
      'Numbness or tingling in the legs and feet',
      'Weakness in the legs and feet',
      'Pain that worsens with standing or walking',
      'Pain that improves with leaning forward or sitting',
      'Difficulty with balance',
      'Rarely, loss of bowel or bladder control'
    ],
    relatedParameters: [
      {
        id: 'MRI_LUMBAR_SPINE',
        value: 'Narrowing of spinal canal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Narrowing',
        description: 'Shows the narrowed spinal canal and nerve compression'
      },
      {
        id: 'CT_MYELOGRAM',
        value: 'Compression',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Compression',
        description: 'Can show nerve root compression'
      }
    ],
    medications: [
      'NSAIDs',
      'Muscle relaxants',
      'Gabapentin or pregabalin',
      'Epidural steroid injections'
    ],
    lifestyle: [
      'Physical therapy',
      'Maintaining a healthy weight',
      'Using a cane or walker if needed',
      'Avoiding activities that worsen pain'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'lung-cancer',
    name: 'Lung Cancer',
    category: 'Oncological',
    description: 'Cancer that begins in the lungs. Two main types are small cell lung cancer and non-small cell lung cancer.',
    symptoms: [
      'Persistent cough',
      'Coughing up blood',
      'Shortness of breath',
      'Chest pain',
      'Hoarseness',
      'Unexplained weight loss',
      'Bone pain',
      'Headache'
    ],
    relatedParameters: [
      {
        id: 'CHEST_XRAY',
        value: 'Mass or nodule',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass or nodule',
        description: 'May show an abnormal mass or nodule'
      },
      {
        id: 'CT_SCAN_CHEST',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Provides detailed images of the lungs and can detect tumors'
      },
      {
        id: 'SPUTUM_CYTOLOGY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Can detect cancer cells in coughed-up sputum'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Confirms the diagnosis of lung cancer'
      }
    ],
    medications: [
      'Chemotherapy',
      'Radiation therapy',
      'Targeted therapy (e.g., erlotinib, gefitinib, afatinib)',
      'Immunotherapy (e.g., pembrolizumab, nivolumab)'
    ],
    lifestyle: [
      'Smoking cessation',
      'Avoiding exposure to secondhand smoke and other carcinogens',
      'Palliative care'
    ],
    diet: [
      'Nutritious diet to maintain strength and energy'
    ]
  },
  {
    id: 'lupus',
    name: 'Lupus (Systemic Lupus Erythematosus)',
    category: 'Immunological',
    description: 'A chronic autoimmune disease that can cause inflammation and damage to various parts of the body, including the joints, skin, kidneys, heart, lungs, blood vessels, and brain.',
    symptoms: [
      'Fatigue',
      'Joint pain and swelling',
      'Butterfly-shaped rash on the face',
      'Skin rashes',
      'Fever',
      'Sensitivity to sunlight',
      'Mouth sores',
      'Hair loss',
      'Raynaud\'s phenomenon (fingers and toes turning white or blue in the cold)'
    ],
    relatedParameters: [
      {
        id: 'ANA',
        status: 'HIGH',
        description: 'Antinuclear antibodies are often present'
      },
      {
        id: 'ANTI_DS_DNA',
        status: 'HIGH',
        description: 'Antibodies to double-stranded DNA are specific for lupus'
      },
      {
        id: 'ESR',
        status: 'HIGH',
        description: 'Often elevated'
      },
      {
        id: 'CRP',
        status: 'HIGH',
        description: 'May be elevated'
      },
      {
        id: 'COMPLEMENT_LEVELS',
        status: 'LOW',
        description: 'C3 and C4 may be low'
      }
    ],
    medications: [
      'NSAIDs',
      'Antimalarial drugs (e.g., hydroxychloroquine)',
      'Corticosteroids',
      'Immunosuppressants (e.g., methotrexate, azathioprine, mycophenolate mofetil)',
      'Belimumab'
    ],
    lifestyle: [
      'Sun protection',
      'Regular exercise',
      'Stress management',
      'Adequate rest',
      'Avoiding infections'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is important'
    ]
  },
  {
    id: 'lyme-disease',
    name: 'Lyme Disease',
    category: 'Infectious',
    description: 'A bacterial infection transmitted to humans through the bite of infected blacklegged ticks. Caused by the bacterium Borrelia burgdorferi.',
    symptoms: [
      'Erythema migrans rash (bull\'s-eye rash)',
      'Fever',
      'Chills',
      'Headache',
      'Fatigue',
      'Muscle and joint aches',
      'Swollen lymph nodes',
      'Facial palsy (drooping on one or both sides of the face)',
      'Arthritis'
    ],
    relatedParameters: [
      {
        id: 'ELISA',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects antibodies to Borrelia burgdorferi'
      },
      {
        id: 'WESTERN_BLOT',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Confirmatory test for Lyme disease'
      }
    ],
    medications: [
      'Doxycycline',
      'Amoxicillin',
      'Cefuroxime',
      'Ceftriaxone (for late-stage or neurological Lyme disease)'
    ],
    lifestyle: [
      'Tick bite prevention',
      'Early removal of ticks',
      'Completing the full course of antibiotics'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'lymphoedema',
    name: 'Lymphoedema',
    category: 'Vascular',
    description: 'A condition characterized by swelling in an arm or leg caused by a lymphatic system blockage. It is most commonly caused by lymph node removal or damage due to cancer treatment.',
    symptoms: [
      'Swelling in part or all of an arm or leg, including fingers or toes',
      'Feeling of heaviness or tightness',
      'Restricted range of motion',
      'Aching or discomfort',
      'Recurring infections',
      'Hardening and thickening of the skin (fibrosis)',
      'Stemmer sign is present'
    ],
    relatedParameters: [
      {
        id: 'LYMPHOSCINTIGRAPHY',
        value: 'Abnormal lymphatic flow',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Can show lymphatic obstruction or dysfunction'
      },
      {
        id: 'STEMMER_SIGN',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Inability to pinch a skinfold at base of the second toe or middle finger'
      }
    ],
    medications: [
      'No specific drug treatment, management focuses on reducing swelling and preventing complications'
    ],
    lifestyle: [
      'Manual lymphatic drainage',
      'Compression bandages or garments',
      'Exercise',
      'Skin care to prevent infections',
      'Weight management'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy diet is important'
    ]
  },
  {
    id: 'lymphogranuloma-venereum',
    name: 'Lymphogranuloma Venereum (LGV)',
    category: 'Infectious',
    description: 'A sexually transmitted infection caused by specific strains of Chlamydia trachomatis. Characterized by genital ulcers and swollen lymph nodes in the groin.',
    symptoms: [
      'Painless sore on the genitals, rectum, or mouth',
      'Swollen and tender lymph nodes in the groin (buboes)',
      'Rectal pain, discharge, or bleeding',
      'Constipation',
      'Fever',
      'Malaise',
      'If left untreated, can lead to chronic inflammation and scarring'
    ],
    relatedParameters: [
      {
        id: 'NAAT_FOR_CHLAMYDIA_TRACHOMATIS',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects C. trachomatis from swabs of lesions or lymph node aspirates'
      },
      {
        id: 'LGV_SEROTYPING',
        value: 'L1, L2, or L3',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Identifies the specific C. trachomatis serovars that cause LGV'
      }
    ],
    medications: [
      'Doxycycline',
      'Erythromycin',
      'Azithromycin'
    ],
    lifestyle: [
      'Safe sex practices',
      'Partner notification and treatment',
      'Avoiding sexual contact until treatment is completed'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'malaria',
    name: 'Malaria',
    category: 'Infectious',
    description: 'A life-threatening disease caused by Plasmodium parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes.',
    symptoms: [
      'Fever',
      'Chills',
      'Sweats',
      'Headache',
      'Nausea and vomiting',
      'Muscle pain and fatigue',
      'Anemia',
      'Jaundice',
      'In severe cases: seizures, coma, organ failure'
    ],
    relatedParameters: [
      {
        id: 'BLOOD_SMEAR',
        value: 'Plasmodium parasites',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Identifies the presence of malaria parasites in the blood'
      },
      {
        id: 'RAPID_DIAGNOSTIC_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects malaria antigens'
      }
    ],
    medications: [
      'Artemisinin-based combination therapies (ACTs)',
      'Chloroquine',
      'Quinine',
      'Mefloquine',
      'Doxycycline',
      'Atovaquone-proguanil'
    ],
    lifestyle: [
      'Mosquito bite prevention (nets, repellents)',
      'Antimalarial prophylaxis for travelers',
      'Prompt diagnosis and treatment'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'malignant-brain-tumour',
    name: 'Malignant Brain Tumour',
    category: 'Oncological',
    description: 'A cancerous mass or growth of abnormal cells in the brain. Can be primary (originating in the brain) or secondary (metastasized from another part of the body).',
    symptoms: [
      'Headache',
      'Seizures',
      'Nausea and vomiting',
      'Changes in vision, hearing, or speech',
      'Difficulty with balance or walking',
      'Weakness or numbness on one side of the body',
      'Changes in personality or behavior',
      'Cognitive impairments'
    ],
    relatedParameters: [
      {
        id: 'MRI_BRAIN',
        value: 'Mass lesion',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Mass lesion',
        description: 'Detects the presence of a tumor and its location'
      },
      {
        id: 'CT_SCAN_BRAIN',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Can show the tumor and surrounding edema'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Confirms the diagnosis of a malignant brain tumor'
      }
    ],
    medications: [
      'Chemotherapy (e.g., temozolomide)',
      'Targeted therapy (e.g., bevacizumab)',
      'Corticosteroids (to reduce swelling)',
      'Anticonvulsants (to prevent seizures)'
    ],
    lifestyle: [
      'Regular neurological evaluations',
      'Physical, occupational, and speech therapy',
      'Palliative care',
      'Support groups'
    ],
    diet: [
      'Generally not directly related to diet, but a nutritious diet is important'
    ]
  },
  {
    id: 'malnutrition',
    name: 'Malnutrition',
    category: 'Nutritional',
    description: 'A condition that results from eating a diet in which nutrients are either not enough or are too much such that it causes health problems. It involves both undernutrition and overnutrition.',
    symptoms: [
      'Underweight or overweight',
      'Fatigue',
      'Dizziness',
      'Muscle weakness',
      'Poor wound healing',
      'Increased susceptibility to infections',
      'Dry skin and hair',
      'Growth problems in children'
    ],
    relatedParameters: [
      {
        id: 'ALBUMIN',
        status: 'LOW',
        description: 'May be low in protein-energy malnutrition'
      },
      {
        id: 'HEMOGLOBIN',
        status: 'LOW',
        description: 'May be low in iron deficiency anemia'
      },
      {
        id: 'VITAMIN_LEVELS',
        status: 'LOW',
        description: 'Deficiencies of specific vitamins (e.g., vitamin D, B12, folate)'
      }
    ],
    medications: [
      'Nutritional supplements',
      'Vitamin and mineral supplementation',
      'Treatment of underlying conditions'
    ],
    lifestyle: [
      'Dietary counseling',
      'Nutrition education',
      'Addressing underlying causes (e.g., poverty, food insecurity)'
    ],
    diet: [
      'Balanced diet tailored to individual needs',
      'High-protein, high-calorie diet for undernutrition',
      'Weight management for overnutrition'
    ]
  },
  {
    id: 'measles',
    name: 'Measles',
    category: 'Infectious',
    description: 'A highly contagious viral infection that is preventable by a vaccine. Characterized by fever, cough, runny nose, inflamed eyes, and a characteristic rash.',
    symptoms: [
      'High fever',
      'Cough',
      'Runny nose',
      'Conjunctivitis (inflamed eyes)',
      'Koplik\'s spots (small white spots inside the mouth)',
      'Maculopapular rash that spreads from head to toe',
      'Malaise'
    ],
    relatedParameters: [
      {
        id: 'MEASLES_IGM',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence of IgM antibodies indicates acute measles infection'
      },
      {
        id: 'MEASLES_PCR',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects measles virus RNA'
      }
    ],
    medications: [
      'No specific antiviral treatment, supportive care',
      'Vitamin A supplementation'
    ],
    lifestyle: [
      'Isolation to prevent spread',
      'Rest',
      'Adequate hydration',
      'Vaccination to prevent measles'
    ],
    diet: [
      'Generally not directly related to diet, but adequate fluid and nutrient intake is important'
    ]
  },
  {
    id: 'meningitis',
    name: 'Meningitis',
    category: 'Neurological',
    description: 'Inflammation of the protective membranes covering the brain and spinal cord (meninges). Can be caused by bacteria, viruses, fungi, or parasites.',
    symptoms: [
      'Sudden high fever',
      'Severe headache',
      'Stiff neck',
      'Nausea and vomiting',
      'Confusion or difficulty concentrating',
      'Sensitivity to light',
      'Seizures',
      'Skin rash (in some cases, e.g., meningococcal meningitis)'
    ],
    relatedParameters: [
      {
        id: 'CSF_ANALYSIS',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Elevated WBC, elevated protein, low glucose in bacterial meningitis'
      },
      {
        id: 'CSF_CULTURE',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Identifies the causative organism in bacterial or fungal meningitis'
      },
      {
        id: 'BLOOD_CULTURES',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'May be positive in bacterial meningitis'
      }
    ],
    medications: [
      'Antibiotics (for bacterial meningitis)',
      'Antiviral drugs (for some cases of viral meningitis)',
      'Antifungal drugs (for fungal meningitis)',
      'Corticosteroids'
    ],
    lifestyle: [
      'Immediate medical attention',
      'Hospitalization for bacterial meningitis',
      'Rest',
      'Vaccination to prevent some types of meningitis'
    ],
    diet: [
      'Generally not directly related to diet, but adequate fluid intake is important'
    ]
  },
  {
    id: 'menieres-disease',
    name: 'Meniere’s Disease',
    category: 'Otolaryngological',
    description: 'An inner ear disorder that can cause vertigo, fluctuating hearing loss, tinnitus, and a feeling of fullness in the ear. Thought to be related to abnormal fluid buildup in the inner ear.',
    symptoms: [
      'Recurrent episodes of vertigo',
      'Fluctuating hearing loss',
      'Tinnitus (ringing in the ear)',
      'Feeling of fullness or pressure in the ear',
      'Nausea and vomiting during vertigo attacks',
      'Imbalance'
    ],
    relatedParameters: [
      {
        id: 'AUDIOMETRY',
        value: 'Low-frequency hearing loss',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'May show fluctuating, low-frequency sensorineural hearing loss'
      },
      {
        id: 'ECOG',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Electrocochleography may show increased summating potential/action potential ratio'
      }
    ],
    medications: [
      'Diuretics (e.g., hydrochlorothiazide)',
      'Antiemetics (e.g., prochlorperazine)',
      'Antihistamines (e.g., meclizine)',
      'Betahistine',
      'Intratympanic gentamicin (in severe cases)'
    ],
    lifestyle: [
      'Low-salt diet',
      'Avoiding caffeine and alcohol',
      'Stress management',
      'Vestibular rehabilitation'
    ],
    diet: [
      'Low-salt diet to help reduce fluid retention in the inner ear'
    ]
  },
  {
    id: 'menopause',
    name: 'Menopause',
    category: 'Endocrine',
    description: 'The natural decline in reproductive hormones when a woman reaches her 40s or 50s, marking the end of menstrual cycles. Diagnosed after 12 months without a menstrual period.',
    symptoms: [
      'Irregular periods',
      'Hot flashes',
      'Night sweats',
      'Sleep problems',
      'Mood changes',
      'Vaginal dryness',
      'Thinning hair',
      'Dry skin',
      'Loss of breast fullness'
    ],
    relatedParameters: [
      {
        id: 'FSH',
        status: 'HIGH',
        description: 'Elevated FSH levels are consistent with menopause'
      },
      {
        id: 'ESTRADIOL',
        status: 'LOW',
        description: 'Decreased estradiol levels'
      }
    ],
    medications: [
      'Hormone therapy (estrogen, progestin)',
      'Low-dose antidepressants (e.g., SSRIs, SNRIs)',
      'Gabapentin',
      'Clonidine',
      'Vaginal estrogen'
    ],
    lifestyle: [
      'Regular exercise',
      'Healthy diet',
      'Stress management',
      'Staying cool and dressing in layers'
    ],
    diet: [
      'Calcium and vitamin D supplementation',
      'Phytoestrogen-rich foods (e.g., soy, flaxseed)'
    ]
  },
  {
    id: 'mesothelioma',
    name: 'Mesothelioma',
    category: 'Oncological',
    description: 'A type of cancer that develops in the thin layer of tissue that covers many of the internal organs (mesothelium). Most commonly affects the lining of the lungs (pleura) or the abdomen (peritoneum).',
    symptoms: [
      'Chest pain (pleural mesothelioma)',
      'Painful coughing',
      'Shortness of breath',
      'Unusual lumps of tissue under the skin on chest',
      'Unexplained weight loss',
      'Abdominal pain (peritoneal mesothelioma)',
      'Abdominal swelling',
      'Nausea'
    ],
    relatedParameters: [
      {
        id: 'IMAGING_TESTS',
        value: 'Abnormalities',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormalities',
        description: 'Chest X-ray, CT scan, or PET scan may show pleural thickening, effusion, or masses'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant mesothelioma cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant',
        description: 'Confirms the diagnosis of mesothelioma'
      }
    ],
    medications: [
      'Chemotherapy (e.g., pemetrexed, cisplatin)',
      'Immunotherapy (e.g., pembrolizumab, nivolumab)',
    ],
    lifestyle: [
      'Palliative care to manage symptoms and improve quality of life',
      'Avoiding further asbestos exposure'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight is important'
    ]
  },
  {
    id: 'middle-ear-infection',
    name: 'Middle Ear Infection (Otitis Media)',
    category: 'Otolaryngological',
    description: 'An infection of the air-filled space behind the eardrum (middle ear). Usually caused by bacteria or viruses.',
    symptoms: [
      'Ear pain',
      'Fussiness or irritability (in children)',
      'Difficulty sleeping',
      'Fever',
      'Fluid drainage from the ear',
      'Temporary hearing loss',
      'Feeling of fullness in the ear'
    ],
    relatedParameters: [
      {
        id: 'OTIS_MEDIA',
        status: 'POSITIVE',
        description: 'Otoscopic examination reveals a red, bulging eardrum'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Antibiotics (e.g., amoxicillin)',
      'Wait and see approach for some cases'
    ],
    lifestyle: [
      'Pain management',
      'Warm compress',
      'Keeping ears dry'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'migraine',
    name: 'Migraine',
    category: 'Neurological',
    description: 'A type of headache characterized by severe throbbing pain, usually on one side of the head, often accompanied by nausea, vomiting, and sensitivity to light and sound.',
    symptoms: [
      'Moderate to severe headache, often on one side',
      'Throbbing or pulsating pain',
      'Sensitivity to light (photophobia)',
      'Sensitivity to sound (phonophobia)',
      'Nausea and vomiting',
      'Aura (visual disturbances, tingling sensations, or speech problems) in some cases',
      'Blurred vision',
      'Lightheadedness'
    ],
    relatedParameters: [
        {
          id: 'NEUROLOGICAL_EXAM',
          value: 'Normal',
          unit: '',
          normalRange: { min: 'Normal', max: 'Normal' },
          status: 'Normal',
          description: 'Usually normal in migraine, used to rule out other conditions'
        }
      ],
    medications: [
      'Pain relievers (e.g., NSAIDs, acetaminophen)',
      'Triptans (e.g., sumatriptan, rizatriptan)',
      'Ergotamines',
      'Antiemetics',
      'Preventive medications (e.g., beta-blockers, antidepressants, anticonvulsants, CGRP monoclonal antibodies)'
    ],
    lifestyle: [
      'Identifying and avoiding triggers',
      'Stress management',
      'Regular exercise',
      'Consistent sleep schedule',
      'Headache diary'
    ],
    diet: [
      'Avoiding trigger foods (e.g., aged cheese, chocolate, caffeine)',
      'Regular meal schedule',
      'Adequate hydration'
    ]
  },
  {
    id: 'miscarriage',
    name: 'Miscarriage',
    category: 'Obstetrical',
    description: 'The spontaneous loss of a pregnancy before the 20th week. Most miscarriages occur because the fetus isn\'t developing normally.',
    symptoms: [
      'Vaginal bleeding or spotting',
      'Abdominal pain or cramping',
      'Passage of tissue or fluid from the vagina',
      'Loss of pregnancy symptoms (e.g., breast tenderness, nausea)'
    ],
    relatedParameters: [
      {
        id: 'BHCG',
        status: 'LOWER_THAN_EXPECTED',
        description: 'Beta-hCG levels may be lower than expected for gestational age or may decline'
      },
      {
        id: 'ULTRASOUND',
        value: 'No fetal heartbeat',
        unit: '',
        normalRange: { min: 'Fetal heartbeat', max: 'Fetal heartbeat' },
        status: 'No fetal heartbeat',
        description: 'May show an empty gestational sac or no fetal heartbeat'
      }
    ],
    medications: [
      'Misoprostol (to help expel tissue)',
      'Pain relievers'
    ],
    lifestyle: [
      'Emotional support and counseling',
      'Rest',
      'Avoiding intercourse until bleeding stops',
      'Follow-up with healthcare provider'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy diet is important for future pregnancies'
    ]
  },
  {
    id: 'motor-neurone-disease',
    name: 'Motor Neurone Disease (MND)',
    category: 'Neurological',
    description: 'A group of progressive neurological disorders that destroy motor neurons, the cells that control essential voluntary muscle activity such as speaking, walking, breathing, and swallowing. Also known as Amyotrophic Lateral Sclerosis (ALS).',
    symptoms: [
      'Muscle weakness',
      'Muscle cramps and twitches',
      'Difficulty with speaking, swallowing, or breathing',
      'Tripping and falling',
      'Difficulty with fine motor tasks',
      'Slurred speech',
      'Fatigue',
      'Weight loss'
    ],
    relatedParameters: [
      {
        id: 'EMG',
        value: 'Denervation',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Denervation',
        description: 'Electromyography shows signs of denervation and reinnervation'
      },
      {
        id: 'NERVE_CONDUCTION_STUDIES',
        value: 'Normal or mildly abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal/Abnormal',
        description: 'Usually normal or mildly abnormal, helping to differentiate from other conditions'
      }
    ],
    medications: [
      'Riluzole',
      'Edaravone',
      'Medications to manage symptoms (e.g., muscle cramps, spasticity, excessive saliva)'
    ],
    lifestyle: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Respiratory therapy',
      'Assistive devices (e.g., braces, wheelchairs, communication devices)',
      'Palliative care'
    ],
    diet: [
      'High-calorie, high-protein diet',
      'Soft or pureed foods if difficulty swallowing',
      'Feeding tube if needed'
    ]
  },
  {
    id: 'mouth-cancer',
    name: 'Mouth Cancer',
    category: 'Oncological',
    description: 'Cancer that develops in any of the parts that make up the mouth (oral cavity), including the lips, gums, tongue, inner lining of the cheeks, roof of the mouth, and floor of the mouth.',
    symptoms: [
      'A sore in the mouth that doesn\'t heal',
      'A lump or thickening in the cheek',
      'A white or reddish patch on the gums, tongue, tonsil, or lining of the mouth',
      'Persistent mouth pain',
      'Difficulty chewing or swallowing',
      'Difficulty moving the jaw or tongue',
      'Numbness in the mouth',
      'Loosening of teeth',
      'Voice changes'
    ],
    relatedParameters: [
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant cells',
        description: 'Confirms the diagnosis of cancer'
      },
      {
        id: 'CT_SCAN',
        value: 'Tumour',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumour',
        description: 'Helps determine the size and location of the tumour'
      },
      {
        id: 'MRI',
        value: 'Tumour',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumour',
        description: 'Provides detailed images of the mouth and surrounding tissues'
      }
    ],
    medications: [
      'Chemotherapy',
      'Targeted therapy (e.g., cetuximab)',
      'Immunotherapy'
    ],
    lifestyle: [
      'Smoking cessation',
      'Avoiding alcohol',
      'Regular dental checkups',
      'Oral hygiene'
    ],
    diet: [
      'Soft or liquid diet if difficulty chewing or swallowing',
      'Nutritional support if needed'
    ]
  },
  {
    id: 'mouth-ulcer',
    name: 'Mouth Ulcer',
    category: 'Oral',
    description: 'A sore that develops on the mucous membrane of the oral cavity. Also known as an aphthous ulcer or canker sore.',
    symptoms: [
      'Painful sore inside the mouth',
      'Round or oval sore with a white or yellow center and a red border',
      'Burning or tingling sensation before the ulcer appears',
      'Difficulty eating or talking'
    ],
    relatedParameters: [
        {
          id: 'CLINICAL_EXAMINATION',
          value: 'Visible ulcer',
          unit: '',
          normalRange: { min: 'No ulcer', max: 'No ulcer' },
          status: 'Visible ulcer',
          description: 'Diagnosis is usually made based on clinical appearance'
        }
      ],
    medications: [
      'Topical corticosteroids (e.g., triamcinolone paste)',
      'Antimicrobial mouthwashes (e.g., chlorhexidine)',
      'Pain relievers (e.g., benzocaine)'
    ],
    lifestyle: [
      'Avoiding trigger foods (e.g., acidic, spicy foods)',
      'Good oral hygiene',
      'Stress management',
      'Using a soft-bristled toothbrush'
    ],
    diet: [
      'Soft, bland diet',
      'Avoiding acidic, spicy, or salty foods that can irritate the ulcer'
    ]
  },
  {
    id: 'multiple-myeloma',
    name: 'Multiple Myeloma',
    category: 'Oncological',
    description: 'A cancer of plasma cells, a type of white blood cell that produces antibodies. Abnormal plasma cells accumulate in the bone marrow, where they crowd out healthy blood cells and produce abnormal proteins.',
    symptoms: [
      'Bone pain, especially in the spine or chest',
      'Nausea',
      'Constipation',
      'Loss of appetite',
      'Mental fogginess or confusion',
      'Fatigue',
      'Frequent infections',
      'Weight loss',
      'Weakness or numbness in the legs',
      'Excessive thirst'
    ],
    relatedParameters: [
      {
        id: 'SERUM_PROTEIN_ELECTROPHORESIS',
        value: 'Monoclonal protein (M protein)',
        unit: '',
        normalRange: { min: 'No M protein', max: 'No M protein' },
        status: 'M protein',
        description: 'Detects the presence of a monoclonal protein (M protein) in the blood'
      },
      {
        id: 'URINE_PROTEIN_ELECTROPHORESIS',
        value: 'Bence Jones protein',
        unit: '',
        normalRange: { min: 'No Bence Jones protein', max: 'No Bence Jones protein' },
        status: 'Bence Jones protein',
        description: 'Detects the presence of Bence Jones protein (light chains) in the urine'
      },
      {
        id: 'SERUM_FREE_LIGHT_CHAIN_ASSAY',
        value: 'Abnormal ratio',
        unit: '',
        normalRange: { min: 'Normal ratio', max: 'Normal ratio' },
        status: 'Abnormal ratio',
        description: 'Shows an abnormal ratio of kappa to lambda light chains'
      },
      {
        id: 'BONE_MARROW_BIOPSY',
        value: 'Increased plasma cells',
        unit: '',
        normalRange: { min: '< 5% plasma cells', max: '< 5% plasma cells' },
        status: '> 10% plasma cells',
        description: 'Shows an increased percentage of plasma cells in the bone marrow'
      },
      {
        id: 'CALCIUM',
        status: 'HIGH',
        description: 'Hypercalcemia may be present due to bone destruction'
      },
      {
        id: 'CREATININE',
        status: 'HIGH',
        description: 'May be elevated due to kidney damage'
      }
    ],
    medications: [
      'Proteasome inhibitors (e.g., bortezomib, carfilzomib)',
      'Immunomodulatory drugs (e.g., lenalidomide, pomalidomide)',
      'Corticosteroids',
      'Monoclonal antibodies (e.g., daratumumab, elotuzumab)',
      'Chemotherapy'
    ],
    lifestyle: [
      'Regular follow-up with a hematologist/oncologist',
      'Bone health management (e.g., bisphosphonates)',
      'Infection prevention',
      'Pain management'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining adequate hydration is important, especially with kidney involvement'
    ]
  },
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis (MS)',
    category: 'Neurological',
    description: 'A chronic, autoimmune disease of the central nervous system (brain and spinal cord). The immune system attacks the protective sheath (myelin) that covers nerve fibers, causing communication problems between the brain and the rest of the body.',
    symptoms: [
      'Numbness or weakness in one or more limbs',
      'Tingling or pain',
      'Electric-shock sensations with certain neck movements',
      'Tremor, lack of coordination, or unsteady gait',
      'Vision problems (e.g., blurred vision, double vision, optic neuritis)',
      'Fatigue',
      'Dizziness',
      'Slurred speech',
      'Bowel and bladder problems'
    ],
    relatedParameters: [
      {
        id: 'MRI_BRAIN_AND_SPINAL_CORD',
        value: 'Multiple lesions',
        unit: '',
        normalRange: { min: 'No lesions', max: 'No lesions' },
        status: 'Multiple lesions',
        description: 'Shows characteristic lesions (plaques) in the brain and spinal cord'
      },
      {
        id: 'CSF_ANALYSIS',
        value: 'Oligoclonal bands',
        unit: '',
        normalRange: { min: 'No bands', max: 'No bands' },
        status: 'Oligoclonal bands',
        description: 'May show oligoclonal bands and/or elevated IgG index'
      },
      {
        id: 'EVOKED_POTENTIALS',
        value: 'Delayed responses',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Delayed',
        description: 'May show delayed responses in visual, auditory, or somatosensory evoked potentials'
      }
    ],
    medications: [
      'Interferon beta medications',
      'Glatiramer acetate',
      'Dimethyl fumarate',
      'Fingolimod',
      'Teriflunomide',
      'Natalizumab',
      'Alemtuzumab',
      'Ocrelizumab',
      'Mitoxantrone',
      'Corticosteroids (for acute exacerbations)'
    ],
    lifestyle: [
      'Regular exercise',
      'Stress management',
      'Avoiding heat exposure',
      'Physical therapy',
      'Occupational therapy',
      'Support groups'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is important'
    ]
  },
  {
    id: 'multiple-system-atrophy',
    name: 'Multiple System Atrophy (MSA)',
    category: 'Neurological',
    description: 'A rare, degenerative neurological disorder affecting the body\'s autonomic functions (e.g., blood pressure, heart rate, digestion) and movement. Shares some symptoms with Parkinson\'s disease.',
    symptoms: [
      'Orthostatic hypotension (low blood pressure upon standing)',
      'Impotence',
      'Loss of bladder or bowel control',
      'Reduced sweating',
      'Sleep disturbances',
      'Movement problems (e.g., slowness, stiffness, tremor, impaired balance)',
      'Difficulty with speech or swallowing',
      'Abnormal posture'
    ],
    relatedParameters: [
      {
        id: 'AUTONOMIC_TESTING',
        value: 'Abnormal',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Shows evidence of autonomic dysfunction'
      },
      {
        id: 'MRI_BRAIN',
        value: '"Hot cross bun" sign',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'May show atrophy of the pons and cerebellum, with a "hot cross bun" sign in some cases'
      }
    ],
    medications: [
      'Fludrocortisone',
      'Midodrine',
      'Pyridostigmine',
      'Levodopa/carbidopa (may have limited effectiveness)',
      'Medications to manage specific symptoms (e.g., constipation, sleep problems)'
    ],
    lifestyle: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Supportive care',
      'Measures to manage orthostatic hypotension (e.g., increased salt and fluid intake, compression stockings, elevating the head of the bed)'
    ],
    diet: [
      'Increased salt and fluid intake to help manage orthostatic hypotension'
    ]
  },
  {
    id: 'mumps',
    name: 'Mumps',
    category: 'Infectious',
    description: 'A contagious viral infection that primarily affects the salivary glands. Preventable by vaccination.',
    symptoms: [
      'Swollen, painful salivary glands (parotitis)',
      'Fever',
      'Headache',
      'Muscle aches',
      'Weakness and fatigue',
      'Loss of appetite',
      'Pain while chewing or swallowing'
    ],
    relatedParameters: [
      {
        id: 'MUMPS_IGM',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Presence of IgM antibodies indicates acute mumps infection'
      },
      {
        id: 'MUMPS_PCR',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects mumps virus RNA'
      },
      {
        id: 'AMYLASE',
        status: 'HIGH',
        description: 'May be elevated due to parotitis'
      }
    ],
    medications: [
      'No specific antiviral treatment, supportive care',
      'Pain relievers (e.g., acetaminophen, ibuprofen)'
    ],
    lifestyle: [
      'Isolation to prevent spread',
      'Rest',
      'Adequate hydration',
      'Soft diet if chewing is painful',
      'Vaccination to prevent mumps'
    ],
    diet: [
      'Generally not directly related to diet, but adequate fluid intake is important'
    ]
  },
  {
    id: 'munchausens-syndrome',
    name: 'Munchausen’s Syndrome',
    category: 'Psychiatric',
    description: 'A factitious disorder, where a person repeatedly and deliberately acts as if they have a physical or mental illness when they are not really sick. Now known as Factitious Disorder Imposed on Self in the DSM-5.',
    symptoms: [
      'Fabricating or exaggerating symptoms',
      'Inducing physical symptoms (e.g., self-harm, taking medications to produce symptoms)',
      'Extensive knowledge of medical terms and diseases',
      'Frequent hospitalizations',
      'Seeking treatment from many different doctors or hospitals',
      'Reluctance to allow doctors to talk to family or friends',
      'Eagerness to undergo frequent testing or risky procedures'
    ],
    relatedParameters: [
      {
        id: 'MEDICAL_RECORDS',
        value: 'Inconsistencies',
        unit: '',
        normalRange: { min: 'Consistent', max: 'Consistent' },
        status: 'Inconsistencies',
        description: 'May reveal inconsistencies or contradictions between reported symptoms and objective findings'
      }
    ],
    medications: [
      'No specific medications, treatment focuses on psychotherapy'
    ],
    lifestyle: [
      'Psychotherapy (e.g., cognitive-behavioral therapy)',
      'Family therapy',
      'Establishing a strong doctor-patient relationship with a primary care physician',
      'Addressing underlying psychological issues'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'muscular-dystrophy',
    name: 'Muscular Dystrophy',
    category: 'Neuromuscular',
    description: 'A group of genetic diseases that cause progressive weakness and loss of muscle mass. Abnormal genes interfere with the production of proteins needed to form healthy muscle.',
    symptoms: [
      'Progressive muscle weakness',
      'Frequent falls',
      'Difficulty rising from a lying or sitting position',
      'Trouble running and jumping',
      'Waddling gait',
      'Walking on the toes',
      'Muscle pain and stiffness',
      'Learning disabilities (in some types)',
      'Gower\'s sign (using hands to push on thighs to stand up)'
    ],
    relatedParameters: [
      {
        id: 'CK',
        status: 'HIGH',
        description: 'Creatine kinase levels are often very elevated'
      },
      {
        id: 'MUSCLE_BIOPSY',
        value: 'Abnormal muscle fibers',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Shows characteristic features of muscular dystrophy (e.g., variation in fiber size, fibrosis)'
      },
      {
        id: 'GENETIC_TESTING',
        value: 'Specific gene mutation',
        unit: '',
        normalRange: { min: 'No mutation', max: 'No mutation' },
        status: 'Mutation',
        description: 'Can identify the specific gene mutation causing the disease'
      }
    ],
    medications: [
      'Corticosteroids (e.g., prednisone, deflazacort)',
      'Eteplirsen (for some cases of Duchenne muscular dystrophy)',
      'Golodirsen',
      'Viltolarsen',
      'Casimersen',
      'Creatine supplements',
      'Heart medications (e.g., ACE inhibitors, beta-blockers)'
    ],
    lifestyle: [
      'Physical therapy',
      'Occupational therapy',
      'Respiratory therapy',
      'Assistive devices (e.g., braces, wheelchairs)',
      'Regular exercise as tolerated',
      'Monitoring for cardiac and respiratory complications'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy weight is important'
    ]
  },
  {
    id: 'myalgic-encephalomyelitis',
    name: 'Myalgic Encephalomyelitis (ME) or Chronic Fatigue Syndrome (CFS)',
    category: 'Miscellaneous',
    description: 'A complex, debilitating, long-term illness characterized by profound fatigue that is not improved by rest and that is worsened by physical or mental activity (post-exertional malaise).',
    symptoms: [
      'Severe fatigue that interferes with daily activities',
      'Post-exertional malaise (worsening of symptoms after physical or mental exertion)',
      'Unrefreshing sleep',
      'Cognitive difficulties (e.g., problems with memory, concentration, and information processing)',
      'Muscle pain',
      'Joint pain',
      'Headaches',
      'Sore throat',
      'Tender lymph nodes',
      'Dizziness or lightheadedness'
    ],
    relatedParameters: [
      {
        id: 'CLINICAL_DIAGNOSIS',
        value: 'Meets diagnostic criteria',
        unit: '',
        normalRange: { min: 'No ME/CFS', max: 'No ME/CFS' },
        status: 'Meets criteria',
        description: 'Diagnosis is based on specific symptom criteria, as there are no diagnostic lab tests'
      }
    ],
    medications: [
      'Low-dose antidepressants (e.g., amitriptyline, duloxetine)',
      'Pain relievers',
      'Sleep aids',
      'Rintatolimod (in some countries)'
    ],
    lifestyle: [
      'Pacing (balancing activity and rest to avoid post-exertional malaise)',
      'Cognitive behavioral therapy (CBT)',
      'Graded exercise therapy (GET) - controversial',
      'Stress management',
      'Sleep management'
    ],
    diet: [
      'Generally not directly related to diet, but a healthy, balanced diet is recommended'
    ]
  },
  {
    id: 'myasthenia-gravis',
    name: 'Myasthenia Gravis',
    category: 'Neuromuscular',
    description: 'A chronic autoimmune neuromuscular disease that causes weakness in the skeletal muscles, which are responsible for breathing and moving parts of the body, including the arms and legs.',
    symptoms: [
      'Weakness of the eye muscles (ocular myasthenia)',
      'Drooping of one or both eyelids (ptosis)',
      'Double vision (diplopia)',
      'Weakness in the arms, hands, fingers, legs, and neck',
      'Difficulty swallowing (dysphagia)',
      'Slurred speech (dysarthria)',
      'Shortness of breath',
      'Fatigue',
      'Weakness that worsens with activity and improves with rest'
    ],
    relatedParameters: [
      {
        id: 'ACHR_ANTIBODIES',
        status: 'POSITIVE',
        description: 'Presence of acetylcholine receptor antibodies'
      },
      {
        id: 'MUSK_ANTIBODIES',
        status: 'POSITIVE',
        description: 'Presence of muscle-specific kinase antibodies (in some cases)'
      },
      {
        id: 'EDROPHONIUM_TEST',
        value: 'Temporary improvement',
        unit: '',
        normalRange: { min: 'No improvement', max: 'No improvement' },
        status: 'Improvement',
        description: 'Brief improvement in muscle strength after edrophonium injection'
      },
      {
        id: 'EMG',
        value: 'Decremental response',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Decremental',
        description: 'Repetitive nerve stimulation shows a decremental response'
      }
    ],
    medications: [
      'Cholinesterase inhibitors (e.g., pyridostigmine, neostigmine)',
      'Corticosteroids',
      'Immunosuppressants (e.g., azathioprine, cyclosporine, mycophenolate mofetil, tacrolimus)',
      'Eculizumab',
      'Ravulizumab',
      'Thymectomy (surgical removal of the thymus gland)'
    ],
    lifestyle: [
      'Rest periods',
      'Avoiding strenuous activity',
      'Stress management',
      'Eye protection if double vision or ptosis is present'
    ],
    diet: [
      'Generally not directly related to diet, but eating smaller, more frequent meals may help with fatigue'
    ]
  },
  {
    id: 'nasal-and-sinus-cancer',
    name: 'Nasal and Sinus Cancer',
    category: 'Oncological',
    description: 'Cancer that forms in the tissues of the nasal cavity (the space inside the nose) and the paranasal sinuses (hollow spaces in the bones of the head surrounding the nose).',
    symptoms: [
      'Nasal congestion or blockage that doesn\'t go away',
      'Pain or pressure in the face or around the eyes',
      'Runny nose',
      'Postnasal drip',
      'Nosebleeds',
      'Decreased sense of smell',
      'Numbness or tingling in the face',
      'Loosening or numbness of teeth',
      'A lump or sore inside the nose that doesn\'t heal',
      'Watery eyes',
      'Changes in vision'
    ],
    relatedParameters: [
      {
        id: 'ENDOSCOPY',
        value: 'Abnormal growth',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Allows visualization of the nasal cavity and sinuses'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant',
        description: 'Confirms the diagnosis of cancer'
      },
      {
        id: 'CT_SCAN',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Helps determine the size and location of the tumor'
      },
      {
        id: 'MRI',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Provides detailed images of the nasal cavity, sinuses, and surrounding tissues'
      }
    ],
    medications: [
      'Chemotherapy',
      'Radiation therapy',
      'Targeted therapy (e.g., cetuximab)'
    ],
    lifestyle: [
      'Avoiding exposure to wood dust, leather dust, and certain chemicals',
      'Using appropriate protective equipment in occupational settings',
      'Smoking cessation'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'nasopharyngeal-cancer',
    name: 'Nasopharyngeal Cancer',
    category: 'Oncological',
    description: 'Cancer that forms in the nasopharynx, the upper part of the throat behind the nose.',
    symptoms: [
      'Lump in the neck',
      'Hearing loss, ringing in the ears, or ear pain (usually on one side)',
      'Nasal congestion or blockage',
      'Nosebleeds',
      'Headache',
      'Facial pain or numbness',
      'Difficulty opening the mouth',
      'Blurred or double vision',
      'Difficulty breathing or speaking'
    ],
    relatedParameters: [
      {
        id: 'NASOPHARYNGOSCOPY',
        value: 'Abnormal growth',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Allows visualization of the nasopharynx'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant',
        description: 'Confirms the diagnosis of cancer'
      },
      {
        id: 'CT_SCAN',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Helps determine the size and location of the tumor'
      },
      {
        id: 'MRI',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Provides detailed images of the nasopharynx and surrounding tissues'
      },
      {
        id: 'EBV_TEST',
        value: 'Positive',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Epstein-Barr virus is associated with nasopharyngeal cancer'
      }
    ],
    medications: [
      'Chemotherapy',
      'Radiation therapy',
      'Chemoradiation',
      'Immunotherapy'
    ],
    lifestyle: [
      'Avoiding salted fish and preserved foods',
      'Limiting alcohol consumption',
      'Smoking cessation'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'neuroendocrine-tumours',
    name: 'Neuroendocrine Tumours',
    category: 'Oncological',
    description: 'Tumours that arise from neuroendocrine cells, which are cells that receive neuronal input and release hormones into the blood in response. Can occur in many parts of the body, most often in the digestive tract, lungs, or pancreas.',
    symptoms: [
      'Vary depending on the location and type of tumour',
      'Flushing of the skin',
      'Diarrhea',
      'Abdominal pain',
      'Wheezing or shortness of breath',
      'Rapid heartbeat',
      'Weight loss',
      'Fatigue',
      'High blood sugar or low blood sugar'
    ],
    relatedParameters: [
      {
        id: 'CHROMOGRANIN_A',
        status: 'HIGH',
        description: 'May be elevated in neuroendocrine tumors'
      },
      {
        id: 'URINARY_5_HIAA',
        status: 'HIGH',
        description: 'May be elevated in carcinoid tumors that produce serotonin'
      },
      {
        id: 'IMAGING_TESTS',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'CT, MRI, or octreotide scan can detect the presence of a tumor'
      },
      {
        id: 'BIOPSY',
        value: 'Neuroendocrine cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Neuroendocrine',
        description: 'Confirms the diagnosis of a neuroendocrine tumor'
      }
    ],
    medications: [
      'Somatostatin analogs (e.g., octreotide, lanreotide)',
      'Targeted therapy (e.g., everolimus, sunitinib)',
      'Chemotherapy',
      'Interferon therapy'
    ],
    lifestyle: [
      'Regular follow-up with a specialist',
      'Managing symptoms related to hormone overproduction'
    ],
    diet: [
      'Generally not directly related to diet, but avoiding foods that trigger symptoms (e.g., alcohol, spicy foods) may be helpful'
    ]
  },
  {
    id: 'non-alcoholic-fatty-liver-disease',
    name: 'Non-Alcoholic Fatty Liver Disease (NAFLD)',
    category: 'Hepatic',
    description: 'A range of conditions characterized by the buildup of extra fat in liver cells that is not caused by alcohol. Includes non-alcoholic fatty liver (NAFL) and non-alcoholic steatohepatitis (NASH).',
    symptoms: [
      'Often asymptomatic',
      'Fatigue',
      'Pain or discomfort in the upper right abdomen',
      'Enlarged liver',
      'In advanced stages (NASH with cirrhosis): jaundice, ascites, variceal bleeding, hepatic encephalopathy'
    ],
    relatedParameters: [
      {
        id: 'ALT',
        status: 'HIGH',
        description: 'Often mildly to moderately elevated'
      },
      {
        id: 'AST',
        status: 'HIGH',
        description: 'May be elevated, usually lower than ALT'
      },
      {
        id: 'IMAGING_TESTS',
        value: 'Fatty liver',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Fatty liver',
        description: 'Ultrasound, CT, or MRI can show increased fat in the liver'
      },
      {
        id: 'LIVER_BIOPSY',
        value: 'Steatosis, inflammation, fibrosis',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Steatosis',
        description: 'May be needed to distinguish NAFL from NASH and assess the degree of liver damage'
      }
    ],
    medications: [
      'Vitamin E (in non-diabetic adults with biopsy-proven NASH)',
      'Pioglitazone (in patients with biopsy-proven NASH)',
      'Treatment of underlying conditions (e.g., obesity, diabetes, dyslipidemia)'
    ],
    lifestyle: [
      'Weight loss',
      'Regular exercise',
      'Healthy diet',
      'Avoiding alcohol',
      'Managing diabetes and dyslipidemia'
    ],
    diet: [
      'Reduced-calorie diet for weight loss',
      'Mediterranean diet',
      'Limited intake of fructose and saturated fats'
    ]
  },
  {
    id: 'non-hodgkin-lymphoma',
    name: 'Non-Hodgkin Lymphoma',
    category: 'Oncological',
    description: 'A diverse group of blood cancers that develop in the lymphatic system. Characterized by the abnormal growth of lymphocytes (a type of white blood cell).',
    symptoms: [
      'Painless, swollen lymph nodes in the neck, armpits, or groin',
      'Fever',
      'Night sweats',
      'Unexplained weight loss',
      'Fatigue',
      'Itchy skin',
      'Shortness of breath',
      'Chest pain or pressure'
    ],
    relatedParameters: [
      {
        id: 'LYMPH_NODE_BIOPSY',
        value: 'Malignant lymphocytes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant',
        description: 'Confirms the diagnosis of lymphoma and determines the specific type'
      },
      {
        id: 'LDH',
        status: 'HIGH',
        description: 'May be elevated'
      },
      {
        id: 'CT_SCAN',
        value: 'Lymphadenopathy',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Lymphadenopathy',
        description: 'Can show enlarged lymph nodes and other areas of involvement'
      },
      {
        id: 'PET_SCAN',
        value: 'Increased uptake',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Increased uptake',
        description: 'Can help determine the extent of the disease'
      },
      {
        id: 'BONE_MARROW_BIOPSY',
        value: 'Lymphoma involvement',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Involvement',
        description: 'May show lymphoma cells in the bone marrow'
      }
    ],
    medications: [
      'Chemotherapy',
      'Immunotherapy (e.g., rituximab, obinutuzumab)',
      'Targeted therapy (e.g., ibrutinib, idelalisib)',
      'Radiation therapy',
      'Stem cell transplant'
    ],
    lifestyle: [
      'Regular follow-up with an oncologist',
      'Infection prevention',
      'Support groups'
    ],
    diet: [
      'Generally not directly related to diet, but maintaining a healthy diet is important during and after treatment'
    ]
  },
  {
    id: 'norovirus',
    name: 'Norovirus',
    category: 'Infectious',
    description: 'A highly contagious virus that causes vomiting and diarrhea. Often referred to as the "stomach flu," but it is not related to influenza.',
    symptoms: [
      'Nausea',
      'Vomiting',
      'Watery diarrhea',
      'Stomach cramps',
      'Low-grade fever',
      'Chills',
      'Headache',
      'Muscle aches'
    ],
    relatedParameters: [
      {
        id: 'STOOL_TEST',
        value: 'Norovirus detected',
        unit: '',
        normalRange: { min: 'Negative', max: 'Negative' },
        status: 'Positive',
        description: 'Detects norovirus antigens or RNA in stool'
      }
    ],
    medications: [
      'No specific antiviral treatment, supportive care',
      'Oral rehydration solutions',
      'Intravenous fluids (in severe cases)'
    ],
    lifestyle: [
      'Frequent handwashing',
      'Isolation of infected individuals',
      'Disinfection of contaminated surfaces',
      'Avoiding contaminated food and water'
    ],
    diet: [
      'Clear liquids',
      'Bland foods (e.g., crackers, toast, rice) as tolerated',
      'Avoiding dairy, caffeine, and alcohol'
    ]
  },
  {
    id: 'obsessive-compulsive-disorder',
    name: 'Obsessive-Compulsive Disorder (OCD)',
    category: 'Psychiatric',
    description: 'A mental disorder characterized by unreasonable thoughts and fears (obsessions) that lead to compulsive behaviors.',
    symptoms: [
      'Obsessions: repeated, unwanted thoughts, images, or urges',
      'Compulsions: repetitive behaviors or mental acts performed in response to obsessions',
      'Common obsessions: fear of contamination, need for order and symmetry, aggressive or horrific thoughts',
      'Common compulsions: excessive cleaning or handwashing, ordering and arranging, checking, counting',
      'Significant distress or impairment in daily life'
    ],
    relatedParameters: [
      {
        id: 'YALE_BROWN_OBSESSIVE_COMPULSIVE_SCALE',
        value: 'Elevated score',
        unit: '',
        normalRange: { min: 'Low', max: 'Low' },
        status: 'Elevated',
        description: 'A commonly used rating scale to assess the severity of OCD symptoms'
      }
    ],
    medications: [
      'Selective serotonin reuptake inhibitors (SSRIs) (e.g., fluoxetine, sertraline, paroxetine, fluvoxamine)',
      'Clomipramine (a tricyclic antidepressant)'
    ],
    lifestyle: [
      'Cognitive-behavioral therapy (CBT), especially exposure and response prevention (ERP)',
      'Stress management',
      'Support groups',
      'Regular exercise',
      'Mindfulness'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'obstructive-sleep-apnoea',
    name: 'Obstructive Sleep Apnoea (OSA)',
    category: 'Sleep',
    description: 'A sleep disorder characterized by repeated pauses in breathing during sleep due to blockage of the airway, often caused by relaxation of the throat muscles.',
    symptoms: [
      'Loud snoring',
      'Gasping or choking during sleep',
      'Excessive daytime sleepiness',
      'Morning headaches',
      'Difficulty concentrating',
      'Irritability',
      'Dry mouth or sore throat upon awakening',
      'Witnessed apneas (pauses in breathing) during sleep'
    ],
    relatedParameters: [
      {
        id: 'POLYSOMNOGRAPHY',
        value: 'Apnea-Hypopnea Index (AHI) ≥ 5',
        unit: 'events/hour',
        normalRange: { min: '< 5', max: '< 5' },
        status: '≥ 5',
        description: 'Measures the number of apneas and hypopneas per hour of sleep'
      },
      {
        id: 'OXYGEN_SATURATION',
        status: 'LOW',
        description: 'May show drops in oxygen saturation during sleep'
      }
    ],
    medications: [
      'No specific medications, treatment focuses on relieving airway obstruction'
    ],
    lifestyle: [
      'Continuous positive airway pressure (CPAP) therapy',
      'Weight loss',
      'Positional therapy (avoiding sleeping on the back)',
      'Oral appliances',
      'Surgery (in some cases)',
      'Avoiding alcohol and sedatives before sleep'
    ],
    diet: [
      'Weight loss if overweight or obese'
    ]
  },
  {
    id: 'oesophageal-cancer',
    name: 'Oesophageal Cancer',
    category: 'Oncological',
    description: 'Cancer that forms in the tissues of the oesophagus (the muscular tube that connects the throat to the stomach). Two main types are squamous cell carcinoma and adenocarcinoma.',
    symptoms: [
      'Difficulty swallowing (dysphagia)',
      'Weight loss',
      'Chest pain, pressure, or burning',
      'Worsening indigestion or heartburn',
      'Hoarseness',
      'Chronic cough',
      'Vomiting',
      'Bone pain'
    ],
    relatedParameters: [
      {
        id: 'ENDOSCOPY',
        value: 'Abnormal growth',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'Allows visualization of the oesophagus and detection of any abnormal growths'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant cells',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant',
        description: 'Confirms the diagnosis of cancer'
      },
      {
        id: 'CT_SCAN',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Helps determine the size and location of the tumor and whether it has spread'
      },
      {
        id: 'PET_SCAN',
        value: 'Increased uptake',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Increased uptake',
        description: 'Can help determine the extent of the disease'
      }
    ],
    medications: [
      'Chemotherapy',
      'Radiation therapy',
      'Chemoradiation',
      'Targeted therapy (e.g., trastuzumab, ramucirumab)',
      'Immunotherapy (e.g., pembrolizumab)'
    ],
    lifestyle: [
      'Smoking cessation',
      'Limiting alcohol consumption',
      'Maintaining a healthy weight',
      'Treating gastroesophageal reflux disease (GERD)'
    ],
    diet: [
      'Soft or liquid diet if difficulty swallowing',
      'Nutritional support if needed'
    ]
  },
  {
    id: 'osteoarthritis',
    name: 'Osteoarthritis',
    category: 'Musculoskeletal',
    description: 'A degenerative joint disease characterized by the breakdown of joint cartilage and underlying bone. The most common form of arthritis, often affecting the hands, knees, hips, and spine.',
    symptoms: [
      'Joint pain that worsens with activity and improves with rest',
      'Joint stiffness, especially in the morning or after periods of inactivity',
      'Limited range of motion',
      'Swelling around the joint',
      'Grating or creaking sensation (crepitus)',
      'Bone spurs (bony projections that develop along the edges of bones)'
    ],
    relatedParameters: [
      {
        id: 'XRAY',
        value: 'Joint space narrowing, osteophytes',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Abnormal',
        description: 'May show joint space narrowing, osteophytes (bone spurs), and subchondral sclerosis'
      },
      {
        id: 'JOINT_FLUID_ANALYSIS',
        value: 'Normal or mildly inflammatory',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Normal/Inflammatory',
        description: 'Usually normal or mildly inflammatory, helps to rule out other types of arthritis'
      }
    ],
    medications: [
      'Pain relievers (e.g., acetaminophen, NSAIDs)',
      'Topical NSAIDs',
      'Corticosteroid injections',
      'Hyaluronic acid injections',
      'Duloxetine'
    ],
    lifestyle: [
      'Exercise (low-impact activities like swimming, walking, cycling)',
      'Weight management',
      'Physical therapy',
      'Occupational therapy',
      'Assistive devices (e.g., canes, walkers)',
      'Heat and cold therapy'
    ],
    diet: [
      'Maintaining a healthy weight',
      'Anti-inflammatory diet (e.g., Mediterranean diet)'
    ]
  },
  {
    id: 'osteoporosis',
    name: 'Osteoporosis',
    category: 'Musculoskeletal',
    description: 'A disease characterized by low bone mass and deterioration of bone tissue, leading to increased bone fragility and risk of fracture.',
    symptoms: [
      'Often asymptomatic until a fracture occurs',
      'Back pain (caused by a fractured or collapsed vertebra)',
      'Loss of height over time',
      'Stooped posture',
      'Bone fractures that occur more easily than expected'
    ],
    relatedParameters: [
      {
        id: 'BONE_DENSITY_TEST',
        value: 'T-score ≤ -2.5',
        unit: '',
        normalRange: { min: 'T-score > -1.0', max: 'T-score > -1.0' },
        status: 'T-score ≤ -2.5',
        description: 'Dual-energy X-ray absorptiometry (DXA) shows low bone mineral density'
      }
    ],
    medications: [
      'Bisphosphonates (e.g., alendronate, risedronate, ibandronate, zoledronic acid)',
      'Denosumab',
      'Teriparatide',
      'Abaloparatide',
      'Romosozumab',
      'Calcitonin',
      'Hormone therapy (in some cases)'
    ],
    lifestyle: [
      'Weight-bearing exercise',
      'Resistance training',
      'Calcium and vitamin D supplementation',
      'Smoking cessation',
      'Limiting alcohol consumption',
      'Fall prevention'
    ],
    diet: [
      'Adequate calcium and vitamin D intake',
      'Diet rich in fruits, vegetables, and lean protein'
    ]
  },
  {
    id: 'osteosarcoma',
    name: 'Osteosarcoma',
    category: 'Oncological',
    description: 'A type of bone cancer that begins in the cells that form bones. Most common in children and adolescents, often occurring in long bones such as the arms and legs.',
    symptoms: [
      'Bone pain',
      'Swelling and tenderness near the affected area',
      'A lump or mass',
      'Limping',
      'Limited range of motion',
      'Unexplained bone fractures'
    ],
    relatedParameters: [
      {
        id: 'XRAY',
        value: 'Bone lesion',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Lesion',
        description: 'May show a destructive lesion with a "sunburst" appearance'
      },
      {
        id: 'MRI',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Provides detailed images of the bone and surrounding tissues'
      },
      {
        id: 'CT_SCAN',
        value: 'Tumor',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tumor',
        description: 'Helps determine the extent of the tumor and whether it has spread to other areas'
      },
      {
        id: 'BIOPSY',
        value: 'Malignant osteoid',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Malignant osteoid',
        description: 'Confirms the diagnosis of osteosarcoma'
      },
      {
        id: 'ALP',
        status: 'HIGH',
        description: 'Alkaline phosphatase may be elevated'
      }
    ],
    medications: [
      'Chemotherapy',
      'Surgery (limb-sparing surgery or amputation)',
      'Radiation therapy (less common)'
    ],
    lifestyle: [
      'Physical therapy after surgery',
      'Rehabilitation',
      'Support groups'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  {
    id: 'outer-ear-infection',
    name: 'Outer Ear Infection (Otitis Externa)',
    category: 'Otolaryngological',
    description: 'Inflammation or infection of the external ear canal, the passage from the outer ear to the eardrum. Often referred to as "swimmer\'s ear".',
    symptoms: [
      'Ear pain, especially when the outer ear is touched or pulled',
      'Itching in the ear canal',
      'Redness and swelling of the ear canal',
      'Fluid drainage from the ear',
      'Temporary hearing loss',
      'Feeling of fullness in the ear'
    ],
    relatedParameters: [
      {
        id: 'OTIS_EXTERNA',
        status: 'POSITIVE',
        description: 'Otoscopic examination reveals a red, swollen ear canal, often with debris'
      }
    ],
    medications: [
      'Antibiotic ear drops',
      'Corticosteroid ear drops',
      'Acetic acid ear drops',
      'Pain relievers (e.g., acetaminophen, NSAIDs)'
    ],
    lifestyle: [
      'Keeping the ear dry',
      'Avoiding inserting objects into the ear canal',
      'Using earplugs or a swimming cap when swimming',
      'Drying the ears thoroughly after swimming or bathing'
    ],
    diet: [
      'Generally not directly related to diet'
    ]
  },
  
  {
  id: 'ovarian-cancer',
  name: 'Ovarian Cancer',
  category: 'Oncological',
  description: 'A type of cancer that begins in the female organs that produce eggs (ovaries).',
  symptoms: [
    'Abdominal bloating or swelling',
    'Quickly feeling full when eating',
    'Weight loss',
    'Discomfort in the pelvis area',
    'Changes in bowel habits, such as constipation',
    'A frequent need to urinate',
    'Fatigue',
    'Back pain'
  ],
  relatedParameters: [
    {
      id: 'CA125',
      status: 'HIGH',
      description: 'Often elevated in ovarian cancer, but can also be elevated in other conditions'
    },
    {
      id: 'ALBUMIN',
      status: 'LOW',
      description: 'May be decreased in advanced cancer'
    },
    {
      id: 'HE4',
      status: 'HIGH',
      description: 'Another tumor marker that may be elevated'
    },
    {
      id: 'OVA1',
      value: 'Elevated',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated',
      description: 'A multivariable index assay that combines the results of multiple tumor markers'
    }
  ],
  medications: [
    'Chemotherapy (e.g., carboplatin, paclitaxel)',
    'Targeted therapy (e.g., bevacizumab, olaparib)',
    'Hormone therapy (in some cases)'
  ],
  lifestyle: [
    'Regular follow-up with oncologist',
    'Supportive care for side effects of treatment',
    'Emotional support and counseling',
    'Healthy lifestyle after treatment'
  ],
  diet: [
    'Generally not directly related to diet, but maintaining a healthy diet during and after treatment is important for overall health'
  ]
},
{
  id: 'ovarian-cyst',
  name: 'Ovarian Cyst',
  category: 'Gynecological',
  description: 'A solid or fluid-filled sac or pocket (cyst) within or on the surface of an ovary.',
  symptoms: [
    'Pelvic pain',
    'Dull ache in the lower back and thighs',
    'Pain during bowel movements',
    'Painful menstruation',
    'Nausea and vomiting',
    'Breast tenderness',
    'Abnormal vaginal bleeding'
  ],
  relatedParameters: [
    {
      id: 'HCG',
      value: 'Negative',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Negative',
      description: 'To rule out pregnancy'
    },
    {
      id: 'CA125',
      status: 'NORMAL',
      description: 'Usually normal in benign cysts, but may be slightly elevated'
    }
  ],
  medications: [
    'Pain relievers (e.g., ibuprofen)',
    'Hormonal contraceptives (to prevent new cyst formation)'
  ],
  lifestyle: [
    'Watchful waiting (for small, asymptomatic cysts)',
    'Regular monitoring with ultrasound',
    'Surgery for large, persistent, or symptomatic cysts'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pagets-disease-of-the-nipple',
  name: 'Paget’s Disease of the Nipple',
  category: 'Dermatological',
  description: 'A rare form of breast cancer that affects the nipple and areola.',
  symptoms: [
    'Flaking or scaling skin on the nipple',
    'Crusted, oozing, or hardened skin resembling eczema on the nipple, areola, or both',
    'Itching',
    'Redness',
    'A tingling or burning sensation',
    'Straw-colored or bloody nipple discharge',
    'A flattened or inverted nipple',
    'A lump in the breast'
  ],
  relatedParameters: [
    {
      id: 'BIOPSY',
      value: 'Paget cells',
      unit: '',
      normalRange: { min: 'Normal cells', max: 'Normal cells' },
      status: 'Paget cells',
      description: 'Presence of Paget cells on biopsy confirms the diagnosis'
    },
    {
      id: 'ESTROGEN_RECEPTOR',
      status: 'VARIABLE',
      description: 'May be positive or negative'
    },
    {
      id: 'PROGESTERONE_RECEPTOR',
      status: 'VARIABLE',
      description: 'May be positive or negative'
    },
    {
      id: 'HER2',
      status: 'POSITIVE',
      description: 'Often positive in Paget’s disease'
    }
  ],
  medications: [
    'Chemotherapy (depending on the underlying breast cancer)',
    'Hormone therapy (if the underlying cancer is hormone receptor-positive)',
    'Targeted therapy (if the underlying cancer is HER2-positive)'
  ],
  lifestyle: [
    'Surgery (mastectomy or breast-conserving surgery)',
    'Radiation therapy',
    'Regular follow-up with oncologist'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pancreatic-cancer',
  name: 'Pancreatic Cancer',
  category: 'Oncological',
  description: 'A cancer that arises in the pancreas, an organ that produces digestive enzymes and hormones.',
  symptoms: [
    'Abdominal pain that radiates to the back',
    'Loss of appetite or unintended weight loss',
    'Yellowing of the skin and eyes (jaundice)',
    'Light-colored stools',
    'Dark-colored urine',
    'Itchy skin',
    'New-onset diabetes or difficulty controlling existing diabetes',
    'Blood clots',
    'Fatigue'
  ],
  relatedParameters: [
    {
      id: 'CA_19-9',
      status: 'HIGH',
      description: 'A tumor marker that is often elevated in pancreatic cancer'
    },
    {
      id: 'CEA',
      status: 'HIGH',
      description: 'Another tumor marker that may be elevated'
    },
    {
      id: 'BILIRUBIN',
      status: 'HIGH',
      description: 'May be elevated if the tumor blocks the bile duct'
    },
    {
      id: 'ALP',
      status: 'HIGH',
      description: 'May be elevated due to liver involvement'
    },
    {
      id: 'AMYLASE',
      status: 'VARIABLE',
      description: 'May be normal or elevated'
    },
    {
      id: 'LIPASE',
      status: 'VARIABLE',
      description: 'May be normal or elevated'
    }
  ],
  medications: [
    'Chemotherapy (e.g., gemcitabine, FOLFIRINOX)',
    'Targeted therapy (e.g., erlotinib)',
    'Immunotherapy (in some cases)'
  ],
  lifestyle: [
    'Surgery (e.g., Whipple procedure)',
    'Radiation therapy',
    'Palliative care to manage symptoms and improve quality of life',
    'Pain management'
  ],
  diet: [
    'Small, frequent meals',
    'High-calorie, high-protein foods',
    'Pancreatic enzyme supplements to aid digestion',
    'Nutritional counseling'
  ]
},
{
  id: 'parkinsons-disease',
  name: 'Parkinson’s Disease',
  category: 'Neurological',
  description: 'A progressive nervous system disorder that affects movement, often characterized by tremors, stiffness, and slow movement.',
  symptoms: [
    'Tremor',
    'Bradykinesia (slowed movement)',
    'Muscle rigidity',
    'Impaired posture and balance',
    'Loss of automatic movements (e.g., blinking, smiling)',
    'Speech changes (e.g., soft, slurred speech)',
    'Writing changes (e.g., micrographia)',
    'Sleep disturbances',
    'Constipation',
    'Depression'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on symptoms',
      unit: '',
      normalRange: { min: 'No criteria', max: 'No criteria' },
      status: 'Based on symptoms',
      description: 'No specific lab test confirms Parkinson’s disease; diagnosis is based on clinical criteria'
    },
    {
      id: 'DATSCAN',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'May show reduced dopamine transporter uptake in the brain'
    }
  ],
  medications: [
    'Levodopa/carbidopa',
    'Dopamine agonists (e.g., pramipexole, ropinirole)',
    'MAO-B inhibitors (e.g., selegiline, rasagiline)',
    'COMT inhibitors (e.g., entacapone)',
    'Anticholinergics (e.g., benztropine)',
    'Amantadine'
  ],
  lifestyle: [
    'Regular exercise',
    'Physical therapy',
    'Occupational therapy',
    'Speech therapy',
    'Deep brain stimulation (DBS) in some cases',
    'Support groups'
  ],
  diet: [
    'High-fiber diet to prevent constipation',
    'Adequate hydration',
    'Timing of protein intake may need to be adjusted for some individuals taking levodopa'
  ]
},
{
  id: 'pataus-syndrome',
  name: 'Patau’s Syndrome',
  category: 'Genetic',
  description: 'A genetic disorder caused by the presence of an extra copy of chromosome 13, leading to severe intellectual disability and physical abnormalities.',
  symptoms: [
    'Severe intellectual disability',
    'Microcephaly (small head size)',
    'Holoprosencephaly (failure of the forebrain to divide properly)',
    'Cleft lip and palate',
    'Polydactyly (extra fingers or toes)',
    'Heart defects',
    'Kidney defects',
    'Eye abnormalities (e.g., microphthalmia, coloboma)',
    'Weak muscle tone'
  ],
  relatedParameters: [
    {
      id: 'KARYOTYPE',
      value: 'Trisomy 13',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Trisomy 13',
      description: 'Presence of an extra copy of chromosome 13'
    },
    {
      id: 'PRENATAL_ULTRASOUND',
      value: 'Abnormalities',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormalities',
      description: 'May show structural abnormalities'
    }
  ],
  medications: [
    'No specific treatment for the underlying chromosomal abnormality',
    'Management focuses on treating specific symptoms and complications'
  ],
  lifestyle: [
    'Supportive care',
    'Management of medical complications',
    'Respite care for families',
    'Early intervention services'
  ],
  diet: [
    'May require specialized feeding techniques or gastrostomy tube due to feeding difficulties'
  ]
},
{
  id: 'pelvic-inflammatory-disease',
  name: 'Pelvic Inflammatory Disease',
  category: 'Gynecological',
  description: 'An infection of the female reproductive organs, usually caused by sexually transmitted bacteria.',
  symptoms: [
    'Lower abdominal pain',
    'Pelvic pain',
    'Abnormal vaginal discharge',
    'Painful intercourse',
    'Painful urination',
    'Fever',
    'Chills',
    'Nausea and vomiting'
  ],
  relatedParameters: [
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'May be elevated'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'Often elevated'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'Usually elevated'
    },
    {
      id: 'NAAT',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'For Chlamydia trachomatis and Neisseria gonorrhoeae'
    }
  ],
  medications: [
    'Antibiotics (e.g., ceftriaxone plus doxycycline, with or without metronidazole)'
  ],
  lifestyle: [
    'Treatment of sexual partners',
    'Avoidance of sexual intercourse until treatment is completed and symptoms have resolved',
    'Hospitalization for severe cases'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pelvic-organ-prolapse',
  name: 'Pelvic Organ Prolapse',
  category: 'Gynecological',
  description: 'A condition where one or more of the pelvic organs (e.g., uterus, bladder, rectum) drop from their normal position and bulge into the vagina.',
  symptoms: [
    'Feeling of pressure or fullness in the pelvic area',
    'Sensation of something falling out of the vagina',
    'Lower back pain',
    'Urinary problems (e.g., incontinence, frequent urination)',
    'Constipation',
    'Painful intercourse'
  ],
  relatedParameters: [
    {
      id: 'PHYSICAL_EXAM',
      value: 'Prolapse',
      unit: '',
      normalRange: { min: 'No prolapse', max: 'No prolapse' },
      status: 'Prolapse',
      description: 'Diagnosis is usually made based on physical examination'
    }
  ],
  medications: [
    'Generally not treated with medications, although topical estrogen may be used in some cases'
  ],
  lifestyle: [
    'Pelvic floor muscle exercises (Kegel exercises)',
    'Pessary (a device inserted into the vagina to support the pelvic organs)',
    'Surgery in severe cases'
  ],
  diet: [
    'High-fiber diet to prevent constipation'
  ]
},
{
  id: 'penile-cancer',
  name: 'Penile Cancer',
  category: 'Oncological',
  description: 'A rare type of cancer that affects the penis.',
  symptoms: [
    'Changes in skin color of the penis',
    'Thickening of the skin',
    'A lump on the penis',
    'An ulcer (sore) that may bleed',
    'Reddish, velvety rash under the foreskin',
    'Small, crusty bumps',
    'Flat, bluish-brown growths',
    'Foul-smelling discharge under the foreskin',
    'Swelling at the end of the penis'
  ],
  relatedParameters: [
    {
      id: 'BIOPSY',
      value: 'Cancer cells',
      unit: '',
      normalRange: { min: 'Normal cells', max: 'Normal cells' },
      status: 'Cancer cells',
      description: 'Presence of cancer cells on biopsy confirms the diagnosis'
    },
    {
      id: 'SQUAMOUS_CELL_CARCINOMA_ANTIGEN',
      status: 'NORMAL',
      description: 'May be elevated in advanced cases'
    }
  ],
  medications: [
    'Chemotherapy (topical or systemic)',
    'Immunotherapy (topical, in some cases)'
  ],
  lifestyle: [
    'Surgery (e.g., excision, Mohs surgery, penectomy)',
    'Radiation therapy',
    'Laser therapy'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'peripheral-neuropathy',
  name: 'Peripheral Neuropathy',
  category: 'Neurological',
  description: 'A condition resulting from damage to the peripheral nerves, often causing weakness, numbness, and pain, usually in the hands and feet.',
  symptoms: [
    'Numbness, prickling, or tingling in hands or feet',
    'Sharp, jabbing, throbbing, or burning pain',
    'Extreme sensitivity to touch',
    'Lack of coordination and falling',
    'Muscle weakness',
    'Feeling like you’re wearing gloves or socks when you’re not',
    'Paralysis if motor nerves are affected',
    'Heat intolerance',
    'Bowel, bladder, or digestive problems'
  ],
  relatedParameters: [
    {
      id: 'NERVE_CONDUCTION_STUDIES',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'May show reduced nerve conduction velocity or amplitude'
    },
    {
      id: 'EMG',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'May show signs of denervation or reinnervation'
    },
    {
      id: 'GLUCOSE',
      status: 'HIGH',
      description: 'If diabetes is the underlying cause'
    },
    {
      id: 'HBA1C',
      status: 'HIGH',
      description: 'If diabetes is the underlying cause'
    },
    {
      id: 'B12',
      status: 'LOW',
      description: 'If vitamin B12 deficiency is the cause'
    }
  ],
  medications: [
    'Pain relievers (e.g., NSAIDs, opioids)',
    'Anti-seizure medications (e.g., gabapentin, pregabalin)',
    'Antidepressants (e.g., amitriptyline, duloxetine)',
    'Topical treatments (e.g., lidocaine patches, capsaicin cream)'
  ],
  lifestyle: [
    'Treating the underlying cause (e.g., diabetes, vitamin deficiency)',
    'Physical therapy',
    'Occupational therapy',
    'Transcutaneous electrical nerve stimulation (TENS)',
    'Assistive devices (e.g., braces, canes)'
  ],
  diet: [
    'Depends on the underlying cause (e.g., diabetic diet, vitamin B12 supplementation)'
  ]
},
{
  id: 'pims',
  name: 'Paediatric inflammatory multisystem syndrome',
  category: 'Pediatric',
  description: 'PIMS is a rare condition that can develop in children who have had COVID-19, causing inflammation throughout the body.',
  symptoms: [
    'Fever lasting for several days',
    'Rash',
    'Red eyes',
    'Abdominal pain',
    'Diarrhea',
    'Vomiting',
    'Swollen hands and feet',
    'Cracked lips',
    'Headache',
    'Lethargy'
  ],
  relatedParameters: [
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'Elevated marker of inflammation'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'Elevated marker of inflammation'
    },
    {
      id: 'WBC',
      status: 'VARIABLE',
      description: 'May be high, low, or normal'
    },
    {
      id: 'PLATELETS',
      status: 'LOW',
      description: 'May be decreased'
    },
    {
      id: 'FERRITIN',
      status: 'HIGH',
      description: 'Often elevated'
    },
    {
      id: 'D_DIMER',
      status: 'HIGH',
      description: 'May be elevated'
    },
    {
      id: 'TROPONIN',
      status: 'HIGH',
      description: 'May be elevated if there is cardiac involvement'
    },
    {
      id: 'SARS_COV_2_ANTIBODY',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Usually positive, indicating previous COVID-19 infection'
    }
  ],
  medications: [
    'Intravenous immunoglobulin (IVIG)',
    'Corticosteroids (e.g., methylprednisolone)',
    'Aspirin',
    'Biologics (e.g., infliximab, anakinra) in some cases'
  ],
  lifestyle: [
    'Hospitalization',
    'Supportive care',
    'Cardiac monitoring',
    'Close follow-up after discharge'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pleurisy',
  name: 'Pleurisy',
  category: 'Respiratory',
  description: 'Inflammation of the pleura, the membranes that surround the lungs and line the chest cavity, causing chest pain that worsens with breathing.',
  symptoms: [
    'Sharp chest pain that worsens with breathing, coughing, or sneezing',
    'Shortness of breath',
    'Cough',
    'Fever',
    'Rapid, shallow breathing',
    'Tenderness when touching the chest'
  ],
  relatedParameters: [
    {
      id: 'CHEST_X_RAY',
      value: 'Pleural effusion',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Pleural effusion',
      description: 'May show fluid accumulation in the pleural space'
    },
    {
      id: 'PLEURAL_FLUID_ANALYSIS',
      value: 'Inflammatory cells',
      unit: '',
      normalRange: { min: 'Normal fluid', max: 'Normal fluid' },
      status: 'Inflammatory cells',
      description: 'If a thoracentesis is performed, the fluid may show signs of inflammation'
    },
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'May be elevated if there is an underlying infection'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'May be elevated'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'May be elevated'
    }
  ],
  medications: [
    'Pain relievers (e.g., NSAIDs)',
    'Antibiotics (if there is an underlying bacterial infection)',
    'Corticosteroids (in some cases)'
  ],
  lifestyle: [
    'Treating the underlying cause (e.g., infection, autoimmune disease)',
    'Rest',
    'Thoracentesis (to remove fluid from the pleural space) in some cases'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pneumonia',
  name: 'Pneumonia',
  category: 'Respiratory',
  description: 'An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.',
  symptoms: [
    'Cough, which may produce phlegm',
    'Fever',
    'Chills',
    'Shortness of breath',
    'Chest pain that worsens with breathing or coughing',
    'Fatigue',
    'Loss of appetite',
    'Nausea and vomiting',
    'Confusion (especially in older adults)'
  ],
  relatedParameters: [
    {
      id: 'CHEST_X_RAY',
      value: 'Infiltrates',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Infiltrates',
      description: 'May show infiltrates or consolidation in the lungs'
    },
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'Often elevated'
    },
    {
      id: 'SPUTUM_CULTURE',
      value: 'Pathogen',
      unit: '',
      normalRange: { min: 'No growth', max: 'No growth' },
      status: 'Pathogen',
      description: 'May identify the causative organism'
    },
    {
      id: 'BLOOD_CULTURES',
      value: 'Pathogen',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Pathogen',
      description: 'May be positive in some cases'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'Usually elevated'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'Often elevated'
    },
    {
      id: 'PROCALCITONIN',
      status: 'HIGH',
      description: 'May be elevated, particularly in bacterial pneumonia'
    }
  ],
  medications: [
    'Antibiotics (for bacterial pneumonia)',
    'Antiviral medications (for viral pneumonia)',
    'Antifungal medications (for fungal pneumonia)',
    'Oxygen therapy (in some cases)'
  ],
  lifestyle: [
    'Rest',
    'Adequate hydration',
    'Hospitalization for severe cases',
    'Avoiding smoking and exposure to lung irritants'
  ],
  diet: [
    'Nutritious diet to support recovery'
  ]
},
{
  id: 'polio',
  name: 'Polio',
  category: 'Infectious',
  description: 'A contagious viral illness that in its most severe form causes nerve injury leading to paralysis, difficulty breathing, and sometimes death.',
  symptoms: [
    'Fever',
    'Headache',
    'Fatigue',
    'Nausea',
    'Muscle pain and weakness',
    'Stiffness in the neck and back',
    'Paralysis (in severe cases)',
    'Loss of reflexes',
    'Difficulty breathing (in severe cases)'
  ],
  relatedParameters: [
    {
      id: 'STOOL_SAMPLE',
      value: 'Poliovirus',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Poliovirus',
      description: 'May detect poliovirus'
    },
    {
      id: 'CSF_ANALYSIS',
      value: 'Elevated protein, normal glucose',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated protein, normal glucose',
      description: 'May show elevated protein and normal glucose levels in cases of paralytic polio'
    },
    {
      id: 'SEROLOGY',
      value: 'Antibodies to poliovirus',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Antibodies to poliovirus',
      description: 'May show antibodies to poliovirus'
    }
  ],
  medications: [
    'No specific antiviral treatment for polio',
    'Pain relievers',
    'Supportive care'
  ],
  lifestyle: [
    'Vaccination is the most effective way to prevent polio',
    'Physical therapy for individuals with paralysis',
    'Ventilatory support in cases of respiratory failure'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pcos',
  name: 'Polycystic Ovary Syndrome (PCOS)',
  category: 'Endocrine',
  description: 'A hormonal disorder common among women of reproductive age, characterized by irregular periods, excess androgen levels, and polycystic ovaries.',
  symptoms: [
    'Irregular menstrual periods',
    'Prolonged menstrual periods',
    'Excess androgen levels leading to hirsutism (excess hair growth), acne, and male-pattern baldness',
    'Polycystic ovaries (enlarged ovaries containing numerous small follicles)',
    'Weight gain',
    'Difficulty getting pregnant',
    'Skin darkening (acanthosis nigricans)',
    'Skin tags'
  ],
  relatedParameters: [
    {
      id: 'TESTOSTERONE',
      status: 'HIGH',
      description: 'Often elevated'
    },
    {
      id: 'LH',
      status: 'HIGH',
      description: 'May be elevated'
    },
    {
      id: 'FSH',
      status: 'NORMAL',
      description: 'Usually normal or low'
    },
    {
      id: 'LH_FSH_RATIO',
      value: 'Increased',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Increased',
      description: 'Often elevated'
    },
    {
      id: 'INSULIN',
      status: 'HIGH',
      description: 'Often elevated due to insulin resistance'
    },
    {
      id: 'GLUCOSE',
      status: 'HIGH',
      description: 'May be elevated due to insulin resistance'
    },
    {
      id: 'HBA1C',
      status: 'HIGH',
      description: 'May be elevated due to insulin resistance'
    }
  ],
  medications: [
    'Combined oral contraceptives',
    'Progestin therapy',
    'Metformin',
    'Anti-androgens (e.g., spironolactone)',
    'Clomiphene citrate or letrozole (for ovulation induction)'
  ],
  lifestyle: [
    'Weight loss (even a small amount can improve symptoms)',
    'Regular exercise',
    'Healthy diet'
  ],
  diet: [
    'Low glycemic index diet',
    'Reduced intake of refined carbohydrates and processed foods',
    'Increased fiber intake'
  ]
},
{
  id: 'polymyalgia-rheumatica',
  name: 'Polymyalgia Rheumatica',
  category: 'Rheumatological',
  description: 'An inflammatory disorder that causes muscle pain and stiffness, especially in the shoulders and hips.',
  symptoms: [
    'Pain and stiffness in the shoulders, neck, and hip girdle',
    'Stiffness is worse in the morning and after inactivity',
    'Fatigue',
    'Mild fever',
    'Weight loss',
    'Limited range of motion',
    'Depression'
  ],
  relatedParameters: [
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'Usually significantly elevated (often > 50 mm/hr)'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'Usually elevated'
    },
    {
      id: 'WBC',
      status: 'NORMAL',
      description: 'Usually normal or slightly elevated'
    },
    {
      id: 'PLATELETS',
      status: 'HIGH',
      description: 'May be elevated'
    }
  ],
  medications: [
    'Low-dose corticosteroids (e.g., prednisone)'
  ],
  lifestyle: [
    'Regular exercise (as tolerated)',
    'Physical therapy',
    'Gradual tapering of corticosteroid dose under medical supervision'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important for overall health'
  ]
},
{
  id: 'post-concussion-syndrome',
  name: 'Post-Concussion Syndrome',
  category: 'Neurological',
  description: 'A complex disorder in which various symptoms — such as headaches and dizziness — last for weeks and sometimes months after the injury that caused the concussion.',
  symptoms: [
    'Headaches',
    'Dizziness',
    'Fatigue',
    'Irritability',
    'Anxiety',
    'Insomnia',
    'Loss of concentration and memory',
    'Ringing in the ears',
    'Blurry vision',
    'Noise and light sensitivity'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on symptoms',
      unit: '',
      normalRange: { min: 'No criteria', max: 'No criteria' },
      status: 'Based on symptoms',
      description: 'No specific lab test confirms post-concussion syndrome; diagnosis is based on clinical criteria and history of head injury'
    }
  ],
  medications: [
    'Pain relievers (e.g., acetaminophen, amitriptyline)',
    'Antidepressants (e.g., amitriptyline, sertraline)',
    'Anti-anxiety medications (e.g., buspirone)'
  ],
  lifestyle: [
    'Rest',
    'Gradual return to activity',
    'Cognitive rehabilitation',
    'Vestibular rehabilitation',
    'Psychotherapy'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'post-traumatic-stress-disorder',
  name: 'Post-Traumatic Stress Disorder (PTSD)',
  category: 'Psychiatric',
  description: 'A mental health condition that\'s triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares, and severe anxiety, as well as uncontrollable thoughts about the event.',
  symptoms: [
    'Intrusive memories (flashbacks, nightmares)',
    'Avoidance (trying to avoid thinking or talking about the event, avoiding places, activities, or people that remind you of the event)',
    'Negative changes in thinking and mood (negative thoughts about yourself, other people, or the world, hopelessness, memory problems, difficulty maintaining close relationships)',
    'Changes in physical and emotional reactions (being easily startled or frightened, always being on guard for danger, self-destructive behavior, trouble sleeping, trouble concentrating, irritability, angry outbursts, overwhelming guilt or shame)'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on criteria',
      unit: '',
      normalRange: { min: 'No criteria', max: 'No criteria' },
      status: 'Based on criteria',
      description: 'No specific lab test confirms PTSD; diagnosis is based on clinical criteria (DSM-5 or ICD-11)'
    }
  ],
  medications: [
    'Antidepressants (e.g., sertraline, paroxetine, fluoxetine, venlafaxine)',
    'Prazosin (for nightmares)'
  ],
  lifestyle: [
    'Psychotherapy (e.g., cognitive processing therapy, prolonged exposure therapy, eye movement desensitization and reprocessing (EMDR))',
    'Support groups'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pots',
  name: 'Postural Orthostatic Tachycardia Syndrome (PoTS)',
  category: 'Cardiovascular',
  description: 'A condition characterized by an abnormal increase in heart rate that occurs after standing up, often accompanied by dizziness, lightheadedness, and fatigue.',
  symptoms: [
    'Dizziness or lightheadedness upon standing',
    'Rapid heart rate (tachycardia) upon standing',
    'Fatigue',
    'Heart palpitations',
    'Shakiness',
    'Exercise intolerance',
    'Fainting or near-fainting',
    'Headache',
    'Shortness of breath',
    'Chest pain'
  ],
  relatedParameters: [
    {
      id: 'TILT_TABLE_TEST',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'Increase in heart rate of ≥ 30 bpm (≥ 40 bpm in adolescents) within 10 minutes of standing or head-up tilt, in the absence of orthostatic hypotension'
    },
    {
      id: 'HEART_RATE',
      status: 'HIGH',
      description: 'Sustained increase in heart rate upon standing'
    }
  ],
  medications: [
    'Fludrocortisone',
    'Midodrine',
    'Beta-blockers (e.g., propranolol)',
    'Pyridostigmine',
    'Ivabradine'
  ],
  lifestyle: [
    'Increased fluid intake',
    'Increased salt intake',
    'Compression stockings',
    'Graded exercise program',
    'Avoiding triggers (e.g., prolonged standing, heat)'
  ],
  diet: [
    'High-salt diet',
    'Small, frequent meals'
  ]
},
{
  id: 'postnatal-depression',
  name: 'Postnatal Depression',
  category: 'Psychiatric',
  description: 'A type of mood disorder associated with childbirth, which can affect both sexes but is more common in women. Symptoms may include extreme sadness, low energy, anxiety, crying episodes, irritability, and changes in sleeping or eating patterns.',
  symptoms: [
    'Depressed mood',
    'Loss of interest or pleasure in activities',
    'Feelings of guilt or worthlessness',
    'Fatigue',
    'Changes in appetite or weight',
    'Sleep disturbances (insomnia or hypersomnia)',
    'Difficulty bonding with the baby',
    'Thoughts of harming yourself or the baby',
    'Anxiety',
    'Irritability'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on criteria',
      unit: '',
      normalRange: { min: 'No criteria', max: 'No criteria' },
      status: 'Based on criteria',
      description: 'No specific lab test confirms postnatal depression; diagnosis is based on clinical criteria (DSM-5 or ICD-11) and timing in relation to childbirth'
    }
  ],
  medications: [
    'Antidepressants (e.g., sertraline, fluoxetine)'
  ],
  lifestyle: [
    'Psychotherapy (e.g., cognitive behavioral therapy, interpersonal therapy)',
    'Support groups',
    'Social support',
    'Self-care (e.g., exercise, adequate sleep)'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important for overall health'
  ]
},
{
  id: 'pressure-ulcers',
  name: 'Pressure Ulcers',
  category: 'Dermatological',
  description: 'Injuries to the skin and underlying tissue, primarily caused by prolonged pressure on the skin.',
  symptoms: [
    'Stage 1: Reddened area of skin that does not turn white when pressed',
    'Stage 2: Partial-thickness skin loss (blister or shallow open ulcer)',
    'Stage 3: Full-thickness skin loss (deep open wound)',
    'Stage 4: Full-thickness tissue loss with exposed bone, tendon, or muscle',
    'Unstageable: Full-thickness tissue loss where the base of the ulcer is covered by slough or eschar',
    'Pain',
    'Odor (if infected)',
    'Drainage (if infected)'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_ASSESSMENT',
      value: 'Based on staging',
      unit: '',
      normalRange: { min: 'No ulcer', max: 'No ulcer' },
      status: 'Based on staging',
      description: 'Diagnosis and staging are based on clinical assessment of the ulcer'
    },
    {
      id: 'WOUND_CULTURE',
      value: 'Pathogen',
      unit: '',
      normalRange: { min: 'No growth', max: 'No growth' },
      status: 'Pathogen',
      description: 'May be performed if infection is suspected'
    },
    {
      id: 'ALBUMIN',
      status: 'LOW',
      description: 'May be low in individuals with poor nutritional status'
    }
  ],
  medications: [
    'Pain relievers',
    'Antibiotics (if there is an infection)',
    'Topical wound care products'
  ],
  lifestyle: [
    'Regular repositioning to relieve pressure',
    'Pressure-reducing surfaces (e.g., mattresses, cushions)',
    'Wound care',
    'Adequate nutrition and hydration'
  ],
  diet: [
    'High-protein diet',
    'Adequate calorie intake',
    'Vitamins and minerals (especially vitamin C and zinc) to promote wound healing'
  ]
},
{
  id: 'progressive-supranuclear-palsy',
  name: 'Progressive Supranuclear Palsy (PSP)',
  category: 'Neurological',
  description: 'A rare brain disorder that causes problems with movement, walking and balance, and eye movement. It is caused by damage to nerve cells in the brain.',
  symptoms: [
    'Loss of balance',
    'Difficulty walking',
    'Falls',
    'Stiffness (especially in the neck)',
    'Difficulty with eye movements (especially looking down)',
    'Blurred vision',
    'Speech problems (e.g., slurred speech)',
    'Swallowing difficulties',
    'Changes in mood and behavior',
    'Sleep disturbances'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on criteria',
      unit: '',
      normalRange: { min: 'No criteria', max: 'No criteria' },
      status: 'Based on criteria',
      description: 'No specific lab test confirms PSP; diagnosis is based on clinical criteria'
    },
    {
      id: 'MRI_BRAIN',
      value: 'Midbrain atrophy',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Midbrain atrophy',
      description: 'May show midbrain atrophy (“hummingbird sign” or “penguin sign”)'
    }
  ],
  medications: [
    'Levodopa (may provide limited benefit for slowness, stiffness, and balance problems)',
    'Tricyclic antidepressants (e.g., amitriptyline) for pain and sleep disturbances',
    'Botulinum toxin injections for dystonia'
  ],
  lifestyle: [
    'Physical therapy',
    'Occupational therapy',
    'Speech therapy',
    'Assistive devices (e.g., walkers)',
    'Supportive care'
  ],
  diet: [
    'May require dietary modifications or feeding tube due to swallowing difficulties'
  ]
},
{
  id: 'prostate-cancer',
  name: 'Prostate Cancer',
  category: 'Oncological',
  description: 'Cancer that occurs in the prostate — a small walnut-shaped gland in males that produces the seminal fluid that nourishes and transports sperm.',
  symptoms: [
    'Difficulty urinating',
    'Decreased force in the stream of urine',
    'Blood in the urine',
    'Blood in the semen',
    'Bone pain',
    'Erectile dysfunction',
    'Weight loss'
  ],
  relatedParameters: [
    {
      id: 'PSA',
      status: 'HIGH',
      description: 'Often elevated in prostate cancer, but can also be elevated in other conditions (e.g., benign prostatic hyperplasia, prostatitis)'
    },
    {
      id: 'FREE_PSA',
      value: 'Low %',
      unit: '',
      normalRange: { min: 'High %', max: 'High %' },
      status: 'Low %',
      description: 'A lower percentage of free PSA is associated with a higher risk of prostate cancer'
    },
    {
      id: 'PSA_VELOCITY',
      value: 'Rapid increase',
      unit: '',
      normalRange: { min: 'Slow increase', max: 'Slow increase' },
      status: 'Rapid increase',
      description: 'A rapid increase in PSA over time may be suggestive of prostate cancer'
    },
    {
      id: 'PSA_DENSITY',
      value: 'High',
      unit: '',
      normalRange: { min: 'Low', max: 'Low' },
      status: 'High',
      description: 'A higher PSA density (PSA level divided by prostate volume) is associated with a higher risk of prostate cancer'
    },
    {
      id: 'BIOPSY',
      value: 'Cancer cells',
      unit: '',
      normalRange: { min: 'Normal cells', max: 'Normal cells' },
      status: 'Cancer cells',
      description: 'Presence of cancer cells on prostate biopsy confirms the diagnosis'
    }
  ],
  medications: [
    'Hormone therapy (androgen deprivation therapy)',
    'Chemotherapy (e.g., docetaxel)',
    'Immunotherapy (e.g., sipuleucel-T)',
    'Targeted therapy (e.g., abiraterone, enzalutamide)'
  ],
  lifestyle: [
    'Active surveillance (for low-risk cancers)',
    'Surgery (radical prostatectomy)',
    'Radiation therapy',
    'Focal therapy (e.g., cryotherapy, high-intensity focused ultrasound)'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important for overall health'
  ]
},
{
  id: 'psoriasis',
  name: 'Psoriasis',
  category: 'Dermatological',
  description: 'A skin disease that causes red, itchy, scaly patches, most commonly on the knees, elbows, trunk, and scalp.',
  symptoms: [
    'Red patches of skin covered with thick, silvery scales',
    'Small scaling spots (commonly seen in children)',
    'Dry, cracked skin that may bleed',
    'Itching, burning, or soreness',
    'Thickened, pitted, or ridged nails',
    'Swollen and stiff joints (in psoriatic arthritis)'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on appearance',
      unit: '',
      normalRange: { min: 'No psoriasis', max: 'No psoriasis' },
      status: 'Based on appearance',
      description: 'Diagnosis is usually based on the appearance of the skin'
    },
    {
      id: 'SKIN_BIOPSY',
      value: 'Psoriatic changes',
      unit: '',
      normalRange: { min: 'Normal skin', max: 'Normal skin' },
      status: 'Psoriatic changes',
      description: 'May be performed in some cases to confirm the diagnosis'
    }
  ],
  medications: [
    'Topical corticosteroids',
    'Topical retinoids',
    'Vitamin D analogues',
    'Calcineurin inhibitors',
    'Salicylic acid',
    'Coal tar',
    'Anthralin',
    'Systemic medications (e.g., methotrexate, cyclosporine, biologics)'
  ],
  lifestyle: [
    'Phototherapy (light therapy)',
    'Moisturizing regularly',
    'Avoiding triggers (e.g., stress, skin injury)',
    'Managing stress'
  ],
  diet: [
    'Generally not directly related to diet, but some people find that certain foods may trigger flares'
  ]
},
{
  id: 'psoriatic-arthritis',
  name: 'Psoriatic Arthritis',
  category: 'Rheumatological',
  description: 'A form of arthritis that affects some people who have psoriasis. It causes joint pain, stiffness, and swelling.',
  symptoms: [
    'Joint pain, stiffness, and swelling',
    'Swollen fingers and toes (dactylitis)',
    'Foot pain (especially in the heel or sole)',
    'Lower back pain (spondylitis)',
    'Nail changes (pitting, separation from the nail bed)',
    'Eye inflammation (uveitis)',
    'Fatigue'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on criteria',
      unit: '',
      normalRange: { min: 'No arthritis', max: 'No arthritis' },
      status: 'Based on criteria',
      description: 'Diagnosis is based on clinical criteria (CASPAR criteria) and presence of psoriasis'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'May be elevated'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'May be elevated'
    },
    {
      id: 'RF',
      status: 'NEGATIVE',
      description: 'Usually negative'
    },
    {
      id: 'ANTI_CCP',
      status: 'NEGATIVE',
      description: 'Usually negative'
    },
    {
      id: 'X_RAYS',
      value: 'Joint damage',
      unit: '',
      normalRange: { min: 'Normal joints', max: 'Normal joints' },
      status: 'Joint damage',
      description: 'May show characteristic changes (e.g., “pencil-in-cup” deformity)'
    }
  ],
  medications: [
    'NSAIDs',
    'DMARDs (e.g., methotrexate, sulfasalazine, leflunomide)',
    'Biologics (e.g., TNF inhibitors, IL-17 inhibitors, IL-12/23 inhibitors)',
    'JAK inhibitors (e.g., tofacitinib, upadacitinib)'
  ],
  lifestyle: [
    'Regular exercise',
    'Physical therapy',
    'Occupational therapy',
    'Joint protection',
    'Assistive devices'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important for overall health'
  ]
},
{
  id: 'psychosis',
  name: 'Psychosis',
  category: 'Psychiatric',
  description: 'A mental health problem that causes people to perceive or interpret things differently from those around them. This might involve hallucinations or delusions.',
  symptoms: [
    'Hallucinations (seeing, hearing, feeling, smelling, or tasting things that are not there)',
    'Delusions (believing things that are not true)',
    'Disorganized thinking and speech',
    'Lack of motivation',
    'Changes in mood',
    'Difficulty concentrating',
    'Social withdrawal',
    'Neglect of personal hygiene'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_DIAGNOSIS',
      value: 'Based on assessment',
      unit: '',
      normalRange: { min: 'No psychosis', max: 'No psychosis' },
      status: 'Based on assessment',
      description: 'Diagnosis is based on clinical assessment and ruling out other causes'
    }
  ],
  medications: [
    'Antipsychotics (e.g., risperidone, olanzapine, quetiapine, aripiprazole, haloperidol)'
  ],
  lifestyle: [
    'Psychotherapy (e.g., cognitive behavioral therapy for psychosis (CBTp))',
    'Family therapy',
    'Social support',
    'Hospitalization (in some cases)'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'pulmonary-hypertension',
  name: 'Pulmonary Hypertension',
  category: 'Cardiovascular',
  description: 'A type of high blood pressure that affects the arteries in the lungs and the right side of the heart.',
  symptoms: [
    'Shortness of breath (especially with exertion)',
    'Fatigue',
    'Dizziness or fainting',
    'Chest pain or pressure',
    'Swelling in the ankles, legs, and eventually the abdomen (edema)',
    'Bluish color to the lips and skin (cyanosis)',
    'Rapid pulse or heart palpitations'
  ],
  relatedParameters: [
    {
      id: 'RIGHT_HEART_CATHETERIZATION',
      value: 'Elevated mPAP',
      unit: '',
      normalRange: { min: '< 20 mmHg', max: '< 20 mmHg' },
      status: 'Elevated mPAP',
      description: 'Mean pulmonary artery pressure (mPAP) ≥ 20 mmHg at rest'
    },
    {
      id: 'ECHOCARDIOGRAM',
      value: 'Elevated RVSP',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated RVSP',
      description: 'May show elevated right ventricular systolic pressure (RVSP)'
    },
    {
      id: 'PFTs',
      value: 'Reduced DLCO',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Reduced DLCO',
      description: 'Pulmonary function tests may show reduced diffusing capacity of the lung for carbon monoxide (DLCO)'
    },
    {
      id: '6MWT',
      value: 'Reduced distance',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Reduced distance',
      description: 'Six-minute walk test may show reduced distance walked'
    }
  ],
  medications: [
    'Endothelin receptor antagonists (e.g., bosentan, ambrisentan, macitentan)',
    'Phosphodiesterase-5 inhibitors (e.g., sildenafil, tadalafil)',
    'Soluble guanylate cyclase stimulators (e.g., riociguat)',
    'Prostacyclin analogues (e.g., epoprostenol, treprostinil, iloprost)',
    'Calcium channel blockers (in some cases)',
    'Diuretics',
    'Anticoagulants'
  ],
  lifestyle: [
    'Oxygen therapy',
    'Pulmonary rehabilitation',
    'Avoiding strenuous activity',
    'Lung transplantation (in severe cases)'
  ],
  diet: [
    'Low-sodium diet',
    'Fluid restriction (in some cases)'
  ]
  },
  {
  id: 'phobias',
  name: 'Phobias',
  category: 'Psychological',
  description: 'A type of anxiety disorder characterized by an extreme and irrational fear of a specific object, situation, or activity that poses little or no actual danger.',
  symptoms: [
    'Intense fear or anxiety',
    'Avoidance behavior',
    'Panic attacks',
    'Physical symptoms of anxiety (e.g., rapid heartbeat, sweating, trembling)',
    'Anticipatory anxiety',
    'Impairment in daily functioning',
    'Feeling of impending doom',
    'Feeling of loss of control'
  ],
  relatedParameters: [
    {
      id: 'HEART_RATE',
      status: 'HIGH',
      description: 'Often elevated during exposure to the phobic stimulus'
    },
    {
      id: 'BLOOD_PRESSURE',
      status: 'HIGH',
      description: 'May increase during anxiety or panic'
    },
    {
      id: 'CORTISOL',
      status: 'HIGH',
      description: 'Stress hormone levels may be elevated'
    }
  ],
  medications: [
    'Selective serotonin reuptake inhibitors (SSRIs) (e.g., sertraline, paroxetine)',
    'Serotonin-norepinephrine reuptake inhibitors (SNRIs) (e.g., venlafaxine)',
    'Beta-blockers (e.g., propranolol) for physical symptoms',
    'Benzodiazepines (e.g., alprazolam, clonazepam) for short-term relief (use with caution)'
  ],
  lifestyle: [
    'Cognitive behavioral therapy (CBT)',
    'Exposure therapy',
    'Relaxation techniques (e.g., deep breathing, meditation)',
    'Regular exercise',
    'Mindfulness',
    'Support groups',
    'Gradual desensitization',
  ],
  diet: [
    'Generally not directly related to diet, but limiting caffeine and alcohol may help reduce anxiety symptoms',
    'Balanced diet for overall well-being'
  ]
},
{
  id: 'raynauds-phenomenon',
  name: "Raynaud's Phenomenon",
  category: 'Vascular',
  description: "A condition that causes some areas of the body, such as fingers and toes, to feel numb and cold in response to cold temperatures or stress, due to smaller arteries that supply blood to the skin becoming narrow, limiting blood flow.",
  symptoms: [
    'Cold fingers or toes',
    'Color changes in the skin (white, blue, then red)',
    'Numbness, tingling, or prickly feeling',
    'Throbbing or pain upon warming or stress relief',
    'In severe cases, sores or tissue damage',
    'Symptoms triggered by cold or stress'
  ],
  relatedParameters: [
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'May be elevated in secondary Raynaud\'s associated with autoimmune diseases'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'May be elevated in secondary Raynaud\'s associated with autoimmune diseases'
    },
    {
      id: 'ANA',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Antinuclear antibody test may be positive in secondary Raynaud\'s'
    }
  ],
  medications: [
    'Calcium channel blockers (e.g., nifedipine, amlodipine)',
    'Vasodilators (e.g., sildenafil, topical nitroglycerin)',
    'Alpha-blockers (e.g., prazosin) in some cases',
    'Angiotensin receptor blockers (e.g., losartan) may be helpful'
  ],
  lifestyle: [
    'Keeping hands and feet warm',
    'Wearing gloves and warm socks',
    'Avoiding cold exposure',
    'Stress management techniques',
    'Regular exercise',
    'Quitting smoking',
    'Avoiding vasoconstricting medications (e.g., certain decongestants)'
  ],
  diet: [
    'Generally not directly related to diet, but avoiding caffeine may be beneficial',
    'Omega-3 fatty acid supplements may help some individuals'
  ]
},
{
  id: 'reactive-arthritis',
  name: 'Reactive Arthritis',
  category: 'Musculoskeletal',
  description: "A type of arthritis that develops as a reaction to an infection in another part of the body, often affecting the joints, eyes, and urinary tract.",
  symptoms: [
    'Joint pain and swelling',
    'Eye inflammation (conjunctivitis or uveitis)',
    'Urinary problems (e.g., urethritis, frequent urination)',
    'Skin rashes or sores',
    'Mouth ulcers',
    'Heel pain',
    'Swollen fingers or toes ("sausage digits")',
    'Low back pain',
    'Symptoms typically develop 1-4 weeks after infection'
  ],
  relatedParameters: [
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'White blood cell count may be elevated'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'Erythrocyte sedimentation rate is usually elevated'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'C-reactive protein is usually elevated'
    },
    {
      id: 'HLA_B27',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'HLA-B27 genetic marker is often positive'
    },
    {
      id: 'STOOL_CULTURES',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'May be positive for bacteria like Salmonella, Shigella, Yersinia, or Campylobacter'
    },
    {
      id: 'URINE_CULTURES',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'May be positive for Chlamydia trachomatis'
    }
  ],
  medications: [
    'NSAIDs (e.g., ibuprofen, naproxen) for pain and inflammation',
    'Antibiotics for the underlying infection',
    'Corticosteroids (oral or injected) for severe inflammation',
    'Disease-modifying antirheumatic drugs (DMARDs) (e.g., sulfasalazine, methotrexate) for chronic cases'
  ],
  lifestyle: [
    'Rest during flare-ups',
    'Physical therapy',
    'Gentle exercises to maintain joint mobility',
    'Use of assistive devices if needed',
    'Eye drops for eye inflammation',
    'Safe sex practices to prevent sexually transmitted infections'
  ],
  diet: [
    'Generally not directly related to diet, but an anti-inflammatory diet may be helpful',
    'Adequate calcium and vitamin D intake for bone health'
  ]
},
{
  id: 'restless-legs-syndrome',
  name: 'Restless Legs Syndrome',
  category: 'Neurological',
  description: 'A neurological disorder characterized by an irresistible urge to move the legs, often accompanied by uncomfortable sensations, typically worsening during periods of rest or inactivity.',
  symptoms: [
    'Uncomfortable sensations in legs (e.g., creeping, crawling, tingling, itching)',
    'Irresistible urge to move legs',
    'Symptoms worsen at night',
    'Temporary relief with movement',
    'Sleep disturbances',
    'Daytime fatigue',
    'Involuntary leg movements during sleep (periodic limb movements of sleep)'
  ],
  relatedParameters: [
    {
      id: 'FERRITIN',
      status: 'LOW',
      description: 'Low ferritin levels (below 75 µg/L) may be associated with RLS'
    },
    {
      id: 'TRANSFERRIN_SATURATION',
      status: 'LOW',
      description: 'Low transferrin saturation (below 20%) may be associated with RLS'
    },
    {
      id: 'IRON',
      status: 'LOW',
      description: 'Iron deficiency is common with this disease'
    },
    {
      id: 'HEMOGLOBIN',
      status: 'NORMAL',
      description: 'Hemoglobin levels are usually normal, but iron deficiency without anemia can occur'
    },
    {
      id: 'POLYSOMNOGRAPHY',
      value: 'PLMS',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'PLMS',
      description: 'Polysomnography (sleep study) may show periodic limb movements of sleep (PLMS)'
    }
  ],
  medications: [
    'Dopamine agonists (e.g., pramipexole, ropinirole, rotigotine)',
    'Alpha-2-delta ligands (e.g., gabapentin, pregabalin)',
    'Iron supplements if iron deficiency is present',
    'Opioids (e.g., codeine, tramadol) in severe cases (use with caution)',
    'Benzodiazepines (e.g., clonazepam) may help with sleep but not RLS itself'
  ],
  lifestyle: [
    'Regular exercise (but avoid intense exercise close to bedtime)',
    'Good sleep hygiene',
    'Avoiding caffeine, alcohol, and nicotine',
    'Leg massage',
    'Warm baths or heating pads',
    'Stretching exercises',
    'Mental stimulation activities during periods of rest'
  ],
  diet: [
    'Iron-rich foods (if iron deficiency is present)',
    'Avoidance of caffeine and alcohol',
    'Balanced diet for overall health'
  ]
},
{
  id: 'respiratory-syncytial-virus',
  name: 'Respiratory Syncytial Virus (RSV)',
  category: 'Respiratory',
  description: 'A common respiratory virus that usually causes mild, cold-like symptoms but can be serious, especially for infants and older adults, leading to bronchiolitis and pneumonia.',
  symptoms: [
    'Runny nose',
    'Cough',
    'Sneezing',
    'Fever',
    'Wheezing',
    'Difficulty breathing',
    'Decreased appetite',
    'Irritability (in infants)',
    'Rapid breathing',
    'Nasal flaring',
    'Cyanosis (bluish skin color)'
  ],
  relatedParameters: [
    {
      id: 'WBC',
      status: 'NORMAL',
      description: 'White blood cell count may be normal or slightly elevated'
    },
    {
      id: 'RAPID_ANTIGEN_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Rapid antigen test for RSV is often positive'
    },
    {
      id: 'PCR_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Polymerase chain reaction (PCR) test for RSV is highly sensitive and specific'
    },
    {
      id: 'CHEST_X_RAY',
      value: 'Hyperinflation',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Hyperinflation',
      description: 'Chest X-ray may show hyperinflation, peribronchial thickening, or infiltrates in severe cases'
    },
    {
      id: 'OXYGEN_SATURATION',
      status: 'LOW',
      description: 'Oxygen saturation may be decreased (below 90%) in severe cases'
    }
  ],
  medications: [
    'Palivizumab (prophylaxis for high-risk infants)',
    'Ribavirin (antiviral) in severe cases (rarely used)',
    'Supportive care is the mainstay of treatment'
  ],
  lifestyle: [
    'Rest',
    'Fluids to prevent dehydration',
    'Humidified air',
    'Nasal suctioning for infants',
    'Frequent handwashing',
    'Avoiding exposure to smoke',
    'Hospitalization for severe cases with respiratory distress or dehydration'
  ],
  diet: [
    'Generally not directly related to diet, but adequate hydration is important',
    'Small, frequent feedings for infants'
  ]
},
{
  id: 'retinoblastoma',
  name: 'Retinoblastoma',
  category: 'Ophthalmological',
  description: 'A rare form of eye cancer that begins in the retina, the light-sensitive tissue at the back of the eye, primarily affecting young children.',
  symptoms: [
    'White reflex in the pupil (leukocoria)',
    'Crossed eyes (strabismus)',
    'Eye pain or redness',
    'Vision problems',
    'Different colored irises',
    'Enlarged pupil',
    'Bulging of the eye'
  ],
  relatedParameters: [
    {
      id: 'FUNDUS_EXAM',
      value: 'Retinal mass',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Retinal mass',
      description: 'Fundus examination reveals a retinal mass or lesion'
    },
    {
      id: 'ULTRASOUND_EYE',
      value: 'Tumor',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor',
      description: 'Ocular ultrasound shows a solid intraocular tumor'
    },
    {
      id: 'MRI_BRAIN_ORBITS',
      value: 'Tumor',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor',
      description: 'MRI of the brain and orbits defines the extent of the tumor'
    },
    {
      id: 'GENETIC_TESTING',
      value: 'RB1 mutation',
      unit: '',
      normalRange: { min: 'No mutation', max: 'No mutation' },
      status: 'RB1 mutation',
      description: 'Genetic testing may reveal a mutation in the RB1 gene'
    },
    {
      id: 'LDH',
      status: 'HIGH',
      description: 'Lactate dehydrogenase (LDH) may be elevated'
    },
    {
      id: 'ENZYME_LEVELS',
      value: 'Neuron-specific enolase',
      unit: '',
      normalRange: {min: 'Normal', max: 'Normal'},
      status: 'Elevated',
      description: 'Neuron-specific enolase (NSE) may be elevated in some cases'
    }
  ],
  medications: [
    'Chemotherapy (systemic, intra-arterial, or intravitreal)',
    'Focal therapy (laser photocoagulation, cryotherapy)',
    'Enucleation (surgical removal of the eye) in advanced cases',
    'Radiation therapy (external beam or brachytherapy) in select cases'
  ],
  lifestyle: [
    'Regular eye exams',
    'Genetic counseling for affected families',
    'Supportive care during treatment',
    'Low vision rehabilitation if needed',
    'Psychosocial support for child and family'
  ],
  diet: [
    'Generally not directly related to diet, but a balanced diet is important during treatment'
  ]
},
{
  id: 'rhabdomyosarcoma',
  name: 'Rhabdomyosarcoma',
  category: 'Oncological',
  description: 'A rare type of cancer that forms in soft tissue, specifically skeletal muscle tissue or sometimes hollow organs such as the bladder or uterus, and can occur at any age but most often affects children.',
  symptoms: [
    'Lump or swelling that increases in size',
    'Pain in the affected area',
    'Bleeding (e.g., nosebleeds, vaginal bleeding)',
    'Bulging eye or drooping eyelid',
    'Headache',
    'Difficulty urinating or with bowel movements',
    'Symptoms depend on the location of the tumor'
  ],
  relatedParameters: [
    {
      id: 'BIOPSY',
      value: 'Malignant cells',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Malignant cells',
      description: 'Biopsy of the tumor shows characteristic rhabdomyosarcoma cells'
    },
    {
      id: 'IMMUNOHISTOCHEMISTRY',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Immunohistochemistry is positive for muscle markers (e.g., desmin, myogenin)'
    },
    {
      id: 'GENETIC_TESTING',
      value: 'PAX-FOXO1 fusion',
      unit: '',
      normalRange: { min: 'No fusion', max: 'No fusion' },
      status: 'PAX-FOXO1 fusion',
      description: 'Genetic testing may reveal specific translocations (e.g., PAX3-FOXO1, PAX7-FOXO1)'
    },
    {
      id: 'LDH',
      status: 'HIGH',
      description: 'Lactate dehydrogenase (LDH) may be elevated'
    },
    {
      id: 'CK',
      status: 'HIGH',
      description: 'Creatine kinase (CK) may be elevated'
    },
    {
      id: 'IMAGING',
      value: 'Mass',
      unit: '',
      normalRange: {min: 'Normal', max: 'Normal'},
      status: 'Mass',
      description: 'CT, MRI, or PET scans show a soft tissue mass'
    }
  ],
  medications: [
    'Chemotherapy (e.g., vincristine, actinomycin D, cyclophosphamide)',
    'Targeted therapy (e.g., ALK inhibitors if ALK-positive)',
    'Surgery to remove the tumor when possible',
    'Radiation therapy'
  ],
  lifestyle: [
      'Regular follow up with pediatric oncologist',
      'Physical therapy if needed for functional deficits',
      'Emotional and psychological support'
  ],
  diet: [
    'High-calorie, high-protein diet may be needed during treatment to maintain weight and strength',
    'Adequate hydration'
  ]
},
{
  id: 'rheumatoid-arthritis',
  name: 'Rheumatoid Arthritis',
  category: 'Musculoskeletal',
  description: 'A chronic inflammatory disorder affecting many joints, including those in the hands and feet, leading to pain, swelling, stiffness, and potential joint damage and deformity.',
  symptoms: [
    'Joint pain, swelling, and tenderness',
    'Morning stiffness lasting longer than 30 minutes',
    'Symmetrical joint involvement (same joints on both sides of the body)',
    'Fatigue',
    'Low-grade fever',
    'Loss of appetite',
    'Rheumatoid nodules (firm lumps under the skin)',
    'Dry eyes and mouth (Sjögren\'s syndrome)',
    'Anemia'
  ],
  relatedParameters: [
    {
      id: 'RF',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Rheumatoid factor (RF) is positive in most cases'
    },
    {
      id: 'ANTI_CCP',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Anti-cyclic citrullinated peptide (anti-CCP) antibodies are highly specific for RA'
    },
    {
      id: 'ESR',
      status: 'HIGH',
      description: 'Erythrocyte sedimentation rate (ESR) is usually elevated'
    },
    {
      id: 'CRP',
      status: 'HIGH',
      description: 'C-reactive protein (CRP) is usually elevated'
    },
    {
      id: 'HEMOGLOBIN',
      status: 'LOW',
      description: 'Anemia is common'
    },
    {
      id: 'X_RAYS',
      value: 'Joint erosion',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Joint erosion',
      description: 'X-rays may show joint space narrowing, erosions, and soft tissue swelling'
    }
  ],
  medications: [
    'NSAIDs (e.g., ibuprofen, naproxen) for pain and inflammation',
    'Corticosteroids (e.g., prednisone) for short-term flare-ups',
    'Conventional DMARDs (e.g., methotrexate, sulfasalazine, hydroxychloroquine)',
    'Biologic DMARDs (e.g., TNF inhibitors, IL-6 inhibitors, B-cell inhibitors, JAK inhibitors)'
  ],
  lifestyle: [
    'Regular exercise (low-impact)',
    'Joint protection techniques',
    'Assistive devices if needed',
    'Heat and cold therapy',
    'Weight management',
    'Smoking cessation',
    'Stress management',
    'Regular follow up with rheumatologist'
  ],
  diet: [
    'Anti-inflammatory diet (e.g., Mediterranean diet)',
    'Omega-3 fatty acid supplementation may be helpful',
    'Adequate calcium and vitamin D intake for bone health'
  ]
},
{
  id: 'ringworm',
  name: 'Ringworm',
  category: 'Dermatological',
  description: 'A common fungal skin infection that causes a red, circular, itchy rash with clearer skin in the middle, despite its name, it is not caused by a worm.',
  symptoms: [
    'Red, scaly, itchy, circular rash',
    'Clearer skin in the center of the rash',
    'Slightly raised border',
    'Rash may expand in size',
    'Multiple rings may appear',
    'Infection can affect the scalp, body, feet (athlete\'s foot), groin (jock itch), or nails'
  ],
  relatedParameters: [
    {
      id: 'KOH_PREP',
      value: 'Hyphae',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Hyphae',
      description: 'KOH preparation of skin scrapings shows fungal hyphae'
    },
    {
      id: 'FUNGAL_CULTURE',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Fungal culture is positive for dermatophytes (e.g., Trichophyton, Microsporum, Epidermophyton)'
    },
    {
      id: 'WOODS_LAMP',
      value: 'Fluorescence',
      unit: '',
      normalRange: { min: 'No fluorescence', max: 'No fluorescence' },
      status: 'Fluorescence',
      description: 'Wood\'s lamp examination may show fluorescence in some cases (e.g., Microsporum canis)'
    }
  ],
  medications: [
    'Topical antifungals (e.g., clotrimazole, miconazole, terbinafine)',
    'Oral antifungals (e.g., griseofulvin, terbinafine, itraconazole) for severe or widespread infections or nail involvement'
  ],
  lifestyle: [
    'Keeping the affected area clean and dry',
    'Avoiding sharing personal items (e.g., towels, clothing)',
    'Washing clothes and bedding in hot water',
    'Treating infected pets',
    'Wearing loose-fitting clothing'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet supports immune function'
  ]
},
{
  id: 'rosacea',
  name: 'Rosacea',
  category: 'Dermatological',
  description: 'A common chronic skin condition that causes redness and visible blood vessels in the face, and may also produce small, red, pus-filled bumps.',
  symptoms: [
    'Facial redness (erythema)',
    'Visible blood vessels (telangiectasia)',
    'Small, red bumps (papules) and pus-filled bumps (pustules)',
    'Flushing',
    'Skin thickening (especially on the nose - rhinophyma)',
    'Eye irritation (ocular rosacea)',
    'Burning or stinging sensation',
    'Dry, rough skin'
  ],
  relatedParameters: [
    {
      id: 'SKIN_BIOPSY',
      value: 'Inflammation',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Inflammation',
      description: 'Skin biopsy may show nonspecific inflammation, but is not usually necessary for diagnosis'
    },
    {
      id: 'DEMODEX_MITE_COUNT',
      value: 'Increased',
      unit: '',
      normalRange: { min: 'Low', max: 'Low' },
      status: 'Increased',
      description: 'Demodex mite count may be increased in some cases'
    }
  ],
  medications: [
    'Topical metronidazole',
    'Topical azelaic acid',
    'Topical brimonidine or oxymetazoline for redness',
    'Oral antibiotics (e.g., doxycycline, minocycline) for inflammatory lesions',
    'Isotretinoin for severe, refractory cases',
    'Laser or light therapy for telangiectasia and redness'
  ],
  lifestyle: [
    'Identifying and avoiding triggers (e.g., sun exposure, hot beverages, spicy foods, alcohol, stress)',
    'Gentle skin care',
    'Sunscreen use (SPF 30 or higher)',
    'Use of non-irritating cosmetics',
    'Managing stress'
  ],
  diet: [
    'Avoiding trigger foods and beverages (e.g., spicy foods, hot drinks, alcohol)',
    'Anti-inflammatory diet may be helpful for some individuals'
  ]
  },
  {
  id: 'scabies',
  name: 'Scabies',
  category: 'Dermatological',
  description: 'A highly contagious skin infestation caused by the Sarcoptes scabiei mite, which burrows into the skin and lays eggs, leading to intense itching and a pimple-like rash.',
  symptoms: [
    'Intense itching, especially at night',
    'Pimple-like rash',
    'Burrows or tracks on the skin (thin, wavy lines)',
    'Rash often appears between fingers, on wrists, elbows, armpits, waist, buttocks, and genitals',
    'Thick crusts on the skin in severe cases (crusted scabies)',
    'Sores from scratching'
  ],
  relatedParameters: [
    {
      id: 'SKIN_SCRAPING',
      value: 'Mites, eggs, or fecal matter',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Mites, eggs, or fecal matter',
      description: 'Skin scraping examined under a microscope reveals mites, eggs, or fecal matter (scybala)'
    },
    {
      id: 'DERMOSCOPY',
      value: 'Mites or burrows',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Mites or burrows',
      description: 'Dermoscopy may show characteristic features of mites or burrows'
    }
  ],
  medications: [
    'Permethrin cream (5%)',
    'Ivermectin (oral)',
    'Crotamiton cream or lotion',
    'Lindane lotion (less common due to potential side effects)',
    'Sulfur ointment'
  ],
  lifestyle: [
    'Treating all household members and close contacts simultaneously',
    'Washing clothes, bedding, and towels in hot water and drying on high heat',
    'Sealing non-washable items in plastic bags for several days',
    'Vacuuming carpets and furniture',
    'Avoiding skin-to-skin contact until treatment is completed'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'scarlet-fever',
  name: 'Scarlet Fever',
  category: 'Infectious',
  description: 'A bacterial illness that develops in some people who have strep throat, caused by group A Streptococcus bacteria, and characterized by a bright red rash that covers most of the body.',
  symptoms: [
    'Red rash that feels like sandpaper',
    'Bright red skin in the creases of the underarms, elbows, and groin',
    'Strawberry tongue (red and bumpy)',
    'Sore throat',
    'Fever (101°F or higher)',
    'Swollen glands in the neck',
    'Headache',
    'Nausea or vomiting',
    'Flushed face'
  ],
  relatedParameters: [
    {
      id: 'THROAT_CULTURE',
      value: 'Group A Streptococcus',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Group A Streptococcus',
      description: 'Throat culture is positive for group A Streptococcus'
    },
    {
      id: 'RAPID_STREP_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Rapid antigen detection test for group A Streptococcus is positive'
    },
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'White blood cell count may be elevated'
    }
  ],
  medications: [
    'Antibiotics (e.g., penicillin, amoxicillin, cephalexin, azithromycin)'
  ],
  lifestyle: [
    'Rest',
    'Fluids to prevent dehydration',
    'Isolation to prevent spread',
    'Completing the full course of antibiotics',
    'Good hygiene (handwashing, covering coughs and sneezes)'
  ],
  diet: [
    'Soft foods that are easy to swallow',
    'Cold foods and drinks may soothe a sore throat',
    'Adequate hydration'
  ]
},
{
  id: 'schizophrenia',
  name: 'Schizophrenia',
  category: 'Psychiatric',
  description: 'A chronic and severe mental disorder that affects a person\'s ability to think, feel, and behave clearly, characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior.',
  symptoms: [
    'Delusions (fixed false beliefs)',
    'Hallucinations (perceiving things that are not there, often auditory)',
    'Disorganized thinking (speech)',
    'Grossly disorganized or catatonic behavior',
    'Negative symptoms (e.g., reduced emotional expression, avolition, alogia)',
    'Social withdrawal',
    'Impaired cognitive function (e.g., memory, attention, executive function)',
    'Lack of insight'
  ],
  relatedParameters: [
    {
      id: 'MRI_BRAIN',
      value: 'Structural abnormalities',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Structural abnormalities',
      description: 'MRI may show subtle structural abnormalities in some cases (e.g., reduced gray matter volume, enlarged ventricles)'
    },
    {
      id: 'NEUROPSYCHOLOGICAL_TESTING',
      value: 'Cognitive deficits',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Cognitive deficits',
      description: 'Neuropsychological testing may reveal deficits in attention, memory, and executive function'
    }
  ],
  medications: [
    'Second-generation antipsychotics (e.g., risperidone, olanzapine, quetiapine, aripiprazole, ziprasidone, clozapine)',
    'First-generation antipsychotics (e.g., haloperidol, chlorpromazine) (less commonly used due to side effects)',
    'Antidepressants or mood stabilizers may be used for comorbid symptoms'
  ],
  lifestyle: [
    'Psychotherapy (e.g., cognitive behavioral therapy, supportive therapy)',
    'Family therapy',
    'Social skills training',
    'Vocational rehabilitation',
    'Supported employment',
    'Assertive community treatment (ACT)',
    'Case management',
    'Regular follow-up with a psychiatrist and other mental health professionals'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important for overall well-being',
    'Weight management may be important due to potential side effects of medications'
  ]
},
{
  id: 'sciatica',
  name: 'Sciatica',
  category: 'Neurological',
  description: 'Pain that radiates along the path of the sciatic nerve, which branches from the lower back through the hips and buttocks and down each leg, usually caused by compression of a nerve root in the lower spine.',
  symptoms: [
    'Pain radiating from the lower back to the buttock and down the back of the leg',
    'Sharp, shooting, or burning pain',
    'Numbness or tingling in the leg or foot',
    'Muscle weakness in the affected leg or foot',
    'Pain worsens with prolonged sitting or standing',
    'Pain may be aggravated by coughing or sneezing',
    'Loss of bladder or bowel control (rare, but a medical emergency)'
  ],
  relatedParameters: [
    {
      id: 'STRAIGHT_LEG_RAISE_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Straight leg raise test elicits pain along the sciatic nerve distribution'
    },
    {
      id: 'MRI_LUMBAR_SPINE',
      value: 'Disc herniation',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Disc herniation',
      description: 'MRI may show a herniated disc, spinal stenosis, or other cause of nerve compression'
    },
    {
      id: 'EMG_NERVE_CONDUCTION_STUDIES',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'Electromyography (EMG) and nerve conduction studies may show nerve root involvement'
    }
  ],
  medications: [
    'NSAIDs (e.g., ibuprofen, naproxen)',
    'Muscle relaxants (e.g., cyclobenzaprine)',
    'Tricyclic antidepressants (e.g., amitriptyline) for chronic pain',
    'Gabapentin or pregabalin for neuropathic pain',
    'Opioids (short-term use for severe pain, with caution)',
    'Epidural steroid injections in some cases'
  ],
  lifestyle: [
    'Physical therapy',
    'Stretching and strengthening exercises',
    'Proper posture and body mechanics',
    'Heat or cold therapy',
    'Avoiding prolonged sitting or standing',
    'Weight management',
    'Ergonomic workstation setup'
  ],
  diet: [
    'Generally not directly related to diet, but an anti-inflammatory diet may be helpful'
  ]
},
{
  id: 'seasonal-affective-disorder',
  name: 'Seasonal Affective Disorder (SAD)',
  category: 'Psychiatric',
  description: 'A type of depression that is related to changes in seasons, typically starting in the fall and continuing into the winter months, and characterized by symptoms of depression, fatigue, and changes in sleep and appetite.',
  symptoms: [
    'Depressed mood',
    'Fatigue or low energy',
    'Increased sleep',
    'Increased appetite, especially for carbohydrates',
    'Weight gain',
    'Difficulty concentrating',
    'Irritability',
    'Social withdrawal',
    'Loss of interest in activities',
    'Symptoms typically start in the fall and improve in the spring'
  ],
  relatedParameters: [
      {
          id: 'MELATONIN',
          status: 'HIGH',
          description: 'May be elevated during winter months'
      }
  ],
  medications: [
    'Selective serotonin reuptake inhibitors (SSRIs) (e.g., fluoxetine, sertraline, paroxetine)',
    'Bupropion (Wellbutrin XL) may be used preventively',
    'Light therapy is often a first-line treatment'
  ],
  lifestyle: [
    'Light therapy (phototherapy)',
    'Regular exercise',
    'Spending time outdoors, especially in the morning',
    'Maintaining a regular sleep schedule',
    'Cognitive behavioral therapy (CBT)',
    'Stress management techniques',
    'Social interaction',
    'Brightening the home environment'
  ],
  diet: [
    'Balanced diet with adequate vitamin D',
    'Limiting refined carbohydrates',
    'Omega-3 fatty acids may be helpful'
  ]
},
{
  id: 'sepsis',
  name: 'Sepsis',
  category: 'Critical Care',
  description: 'A potentially life-threatening condition that arises when the body\'s response to an infection damages its own tissues, leading to shock, multiple organ failure, and death if not recognized early and treated promptly.',
  symptoms: [
    'Fever or hypothermia',
    'Tachycardia (rapid heart rate)',
    'Tachypnea (rapid breathing)',
    'Altered mental status (confusion, disorientation)',
    'Hypotension (low blood pressure)',
    'Decreased urine output',
    'Cyanosis (bluish skin)',
    'Cool, clammy skin',
    'Signs of infection (e.g., cough, purulent drainage, abdominal pain)'
  ],
  relatedParameters: [
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'White blood cell count may be elevated or decreased'
    },
    {
      id: 'LACTATE',
      status: 'HIGH',
      description: 'Lactate level is often elevated (above 2 mmol/L)'
    },
    {
      id: 'BLOOD_CULTURES',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Blood cultures may be positive for bacteria, fungi, or other pathogens'
    },
    {
      id: 'PLATELETS',
      status: 'LOW',
      description: 'Platelet count may be decreased (thrombocytopenia)'
    },
    {
      id: 'CREATININE',
      status: 'HIGH',
      description: 'Creatinine may be elevated (acute kidney injury)'
    },
    {
      id: 'BILIRUBIN',
      status: 'HIGH',
      description: 'Bilirubin may be elevated (liver dysfunction)'
    },
    {
      id: 'COAGULATION_TESTS',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'Coagulation tests (e.g., PT, INR, aPTT) may be abnormal (disseminated intravascular coagulation)'
    },
    {
      id: 'PROCALCITONIN',
      status: 'HIGH',
      description: 'Procalcitonin may be elevated and helpful in differentiating bacterial infection'
    }
  ],
  medications: [
    'Broad-spectrum antibiotics (administered within 1 hour of diagnosis)',
    'Intravenous fluids',
    'Vasopressors (e.g., norepinephrine, vasopressin) to maintain blood pressure',
    'Inotropes (e.g., dobutamine) to support cardiac function',
    'Oxygen therapy or mechanical ventilation if needed',
    'Corticosteroids in some cases'
  ],
  lifestyle: [
    'Early recognition and prompt treatment of infections',
    'Infection prevention measures (e.g., hand hygiene, vaccination)',
    'Management of underlying conditions',
    'Hospitalization in an intensive care unit (ICU) for close monitoring and organ support'
  ],
  diet: [
    'Generally not directly related to diet, but nutritional support may be needed in the ICU'
  ]
},
{
  id: 'septic-shock',
  name: 'Septic Shock',
  category: 'Critical Care',
  description: 'A subset of sepsis in which underlying circulatory and cellular/metabolic dysfunction is associated with a higher risk of mortality, characterized by persistent hypotension requiring vasopressors to maintain MAP ≥65 mmHg and serum lactate >2 mmol/L despite adequate fluid resuscitation.',
  symptoms: [
    'Persistent hypotension (systolic blood pressure <90 mmHg or MAP <65 mmHg)',
    'Need for vasopressors to maintain MAP ≥65 mmHg',
    'Serum lactate >2 mmol/L (18 mg/dL) despite adequate fluid resuscitation',
    'Signs of organ dysfunction (e.g., altered mental status, decreased urine output, acute lung injury)',
    'Warm, flushed skin initially, followed by cool, clammy skin',
    'Tachycardia',
    'Tachypnea',
    'Fever or hypothermia'
  ],
  relatedParameters: [
    {
      id: 'LACTATE',
      status: 'HIGH',
      description: 'Lactate level is persistently elevated (above 2 mmol/L) despite fluid resuscitation'
    },
    {
      id: 'BLOOD_CULTURES',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Blood cultures may be positive for bacteria, fungi, or other pathogens'
    },
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'White blood cell count may be elevated or decreased'
    },
    {
      id: 'PLATELETS',
      status: 'LOW',
      description: 'Platelet count may be decreased'
    },
    {
      id: 'CREATININE',
      status: 'HIGH',
      description: 'Creatinine may be elevated (acute kidney injury)'
    },
    {
      id: 'BILIRUBIN',
      status: 'HIGH',
      description: 'Bilirubin may be elevated (liver dysfunction)'
    },
    {
      id: 'COAGULATION_TESTS',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'Coagulation tests may be abnormal (disseminated intravascular coagulation)'
    },
    {
      id: 'MIXED_VENOUS_OXYGEN_SATURATION',
      status: 'LOW',
      description: 'Mixed venous oxygen saturation (SvO2) or central venous oxygen saturation (ScvO2) may be low'
    }
  ],
  medications: [
    'Broad-spectrum antibiotics (administered within 1 hour of diagnosis)',
    'Intravenous fluids (crystalloids)',
    'Vasopressors (norepinephrine is first-line)',
    'Inotropes (e.g., dobutamine) if there is evidence of myocardial dysfunction',
    'Oxygen therapy or mechanical ventilation',
    'Corticosteroids (hydrocortisone) in some cases',
    'Blood products (e.g., packed red blood cells, platelets) if indicated'
  ],
  lifestyle: [
      'Requires intensive care unit admission',
      'Source control (e.g surgical intervention) if indicated'
  ],
  diet: [
    'Enteral nutrition should be initiated early if possible'
  ]
},
{
  id: 'sickle-cell-disease',
  name: 'Sickle Cell Disease',
  category: 'Hematological',
  description: 'A group of inherited red blood cell disorders characterized by abnormal hemoglobin, called hemoglobin S, which causes red blood cells to become rigid, sticky, and shaped like sickles or crescent moons, leading to vaso-occlusion, pain crises, anemia, and organ damage.',
  symptoms: [
    'Anemia (fatigue, pale skin, shortness of breath)',
    'Pain crises (vaso-occlusive crises)',
    'Swelling of hands and feet (dactylitis)',
    'Frequent infections',
    'Delayed growth and puberty',
    'Vision problems',
    'Jaundice',
    'Acute chest syndrome (chest pain, fever, cough, difficulty breathing)',
    'Stroke',
    'Splenic sequestration (enlarged spleen)'
  ],
  relatedParameters: [
    {
      id: 'HEMOGLOBIN',
      status: 'LOW',
      description: 'Hemoglobin is often low (anemia)'
    },
    {
      id: 'HEMOGLOBIN_ELECTROPHORESIS',
      value: 'Hemoglobin S',
      unit: '',
      normalRange: { min: 'Hemoglobin A', max: 'Hemoglobin A' },
      status: 'Hemoglobin S',
      description: 'Hemoglobin electrophoresis shows the presence of hemoglobin S'
    },
    {
      id: 'BLOOD_SMEAR',
      value: 'Sickle cells',
      unit: '',
      normalRange: { min: 'Normal red blood cells', max: 'Normal red blood cells' },
      status: 'Sickle cells',
      description: 'Peripheral blood smear shows sickle-shaped red blood cells and Howell-Jolly bodies'
    },
    {
      id: 'RETICULOCYTE_COUNT',
      status: 'HIGH',
      description: 'Reticulocyte count is elevated'
    },
    {
      id: 'BILIRUBIN',
      status: 'HIGH',
      description: 'Indirect bilirubin may be elevated due to hemolysis'
    },
    {
      id: 'LDH',
      status: 'HIGH',
      description: 'Lactate dehydrogenase (LDH) is often elevated due to hemolysis'
    }
  ],
  medications: [
    'Hydroxyurea',
    'L-glutamine oral powder',
    'Crizanlizumab',
    'Voxelotor',
    'Pain medications (e.g., NSAIDs, opioids) during crises',
    'Antibiotics for infections',
    'Blood transfusions in some cases'
  ],
  lifestyle: [
    'Regular follow-up with a hematologist',
    'Preventing infections (e.g., vaccination, prophylactic antibiotics)',
    'Avoiding triggers of pain crises (e.g., dehydration, extreme temperatures, high altitude, stress)',
    'Staying hydrated',
    'Folic acid supplementation',
    'Genetic counseling',
    'Psychosocial support'
  ],
  diet: [
    'Generally not directly related to diet, but adequate hydration is crucial',
    'Healthy diet with sufficient calories, protein, and micronutrients'
  ]
},
{
  id: 'sinusitis',
  name: 'Sinusitis',
  category: 'Respiratory',
  description: 'Inflammation or swelling of the tissue lining the sinuses, often caused by viral or bacterial infection, leading to nasal congestion, facial pain or pressure, headache, and other symptoms.',
  symptoms: [
      'Nasal congestion or obstruction',
      'Thick, discolored nasal discharge',
      'Facial pain or pressure, especially around the eyes, cheeks, and forehead',
      'Headache',
      'Postnasal drip',
      'Cough',
      'Reduced sense of smell or taste',
      'Fever',
      'Toothache',
      'Bad breath (halitosis)'
  ],
  relatedParameters: [
      {
          id: 'NASAL_ENDOSCOPY',
          value: 'Inflammation, polyps',
          unit: '',
          normalRange: { min: 'Normal', max: 'Normal' },
          status: 'Inflammation, polyps',
          description: 'May show inflammation, purulent discharge, or polyps in the nasal passages and sinuses'
      },
      {
          id: 'SINUS_CT',
          value: 'Mucosal thickening, opacification',
          unit: '',
          normalRange: { min: 'Normal', max: 'Normal' },
          status: 'Mucosal thickening, opacification',
          description: 'May show mucosal thickening, air-fluid levels, or opacification of the sinuses'
      },
      {
        id: 'WBC',
        status: 'NORMAL',
        description: 'Usually normal'
      }
  ],
  medications: [
      'Nasal saline irrigation or sprays',
      'Nasal corticosteroids (e.g., fluticasone, mometasone)',
      'Decongestants (oral or topical) (short-term use)',
      'Pain relievers (e.g., acetaminophen, ibuprofen)',
      'Antibiotics if bacterial sinusitis is suspected (e.g., amoxicillin, amoxicillin-clavulanate)',
      'Oral corticosteroids in some cases'
  ],
  lifestyle: [
      'Rest',
      'Humidified air',
      'Warm compresses to the face',
      'Drinking plenty of fluids',
      'Avoiding irritants (e.g., smoke, allergens)',
      'Elevating the head during sleep',
      'Nasal saline irrigation'
  ],
  diet: [
      'Generally not directly related to diet, but adequate hydration is important'
  ]
},
{
  id: 'sjogrens-syndrome',
  name: 'Sjögren’s Syndrome',
  category: 'Rheumatological',
  description: 'An autoimmune disease in which the body\'s immune system attacks the glands that make tears and saliva, leading to dry eyes, dry mouth, and other symptoms, and can also affect other parts of the body, including joints, skin, and internal organs.',
  symptoms: [
    'Dry eyes (keratoconjunctivitis sicca)',
    'Dry mouth (xerostomia)',
    'Difficulty swallowing',
    'Dental decay',
    'Joint pain and swelling',
    'Fatigue',
    'Dry skin',
    'Skin rashes',
    'Vaginal dryness',
    'Swollen salivary glands',
    'Persistent dry cough'
  ],
  relatedParameters: [
    {
      id: 'SCHIRMER_TEST',
      value: 'Decreased tear production',
      unit: '',
      normalRange: { min: 'Normal tear production', max: 'Normal tear production' },
      status: 'Decreased tear production',
      description: 'Schirmer test shows decreased tear production (<5 mm in 5 minutes)'
    },
    {
      id: 'SALIVARY_FLOW_RATE',
      value: 'Decreased',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Decreased',
      description: 'Salivary flow rate is decreased'
    },
    {
      id: 'ANA',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Antinuclear antibodies (ANA) are often positive'
    },
    {
      id: 'RF',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Rheumatoid factor (RF) may be positive'
    },
    {
      id: 'ANTI_SSA_SSB',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Anti-SSA (Ro) and anti-SSB (La) antibodies are often positive'
    },
    {
      id: 'SALIVARY_GLAND_BIOPSY',
      value: 'Lymphocytic infiltration',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Lymphocytic infiltration',
      description: 'Salivary gland biopsy may show lymphocytic infiltration and gland atrophy'
    }
  ],
  medications: [
    'Artificial tears',
    'Artificial saliva',
    'Pilocarpine',
    'Cevimeline',
    'NSAIDs for joint pain',
    'Hydroxychloroquine in some cases',
    'Corticosteroids or immunosuppressants for severe systemic manifestations'
  ],
  lifestyle: [
    'Using a humidifier',
    'Regular eye and dental care',
    'Chewing sugar-free gum or sucking on sugar-free candy',
    'Avoiding medications that can worsen dryness (e.g., antihistamines, decongestants)',
    'Sipping water throughout the day',
    'Using lubricating gels or creams for vaginal dryness',
    'Regular exercise'
  ],
  diet: [
    'Generally not directly related to diet, but avoiding dry, hard-to-chew foods may be helpful',
    'Adequate hydration'
  ]
},
{
  id: 'skin-cancer-melanoma',
  name: 'Skin Cancer (Melanoma)',
  category: 'Oncological',
  description: 'A type of skin cancer that develops in the melanocytes, the cells that produce melanin, and is the most serious type of skin cancer due to its potential to spread to other parts of the body.',
  symptoms: [
    'A change in an existing mole',
    'The development of a new, unusual-looking growth on the skin',
    'Asymmetry (one half of the mole doesn\'t match the other)',
    'Irregular border',
    'Changes in color or multiple colors',
    'Diameter larger than 6 mm (about the size of a pencil eraser)',
    'Evolving (changing in size, shape, or color over time)',
    'Itching, bleeding, or oozing'
  ],
  relatedParameters: [
    {
      id: 'SKIN_BIOPSY',
      value: 'Malignant melanoma cells',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Malignant melanoma cells',
      description: 'Skin biopsy shows malignant melanoma cells'
    },
    {
      id: 'LDH',
      status: 'HIGH',
      description: 'LDH may be elevated in advanced melanoma'
    },
    {
      id: 'SENTINEL_LYMPH_NODE_BIOPSY',
      value: 'Melanoma cells',
      unit: '',
      normalRange: { min: 'No cancer cells', max: 'No cancer cells' },
      status: 'Melanoma cells',
      description: 'Sentinel lymph node biopsy may show the presence of melanoma cells, indicating spread to lymph nodes'
    },
    {
      id: 'BRAF_MUTATION_TESTING',
      value: 'BRAF mutation',
      unit: '',
      normalRange: { min: 'No mutation', max: 'No mutation' },
      status: 'BRAF mutation',
      description: 'Tumor testing may reveal a BRAF mutation (present in about half of melanomas)'
    }
  ],
  medications: [
    'Surgery to remove the melanoma',
    'Immunotherapy (e.g., checkpoint inhibitors like pembrolizumab, nivolumab, ipilimumab)',
    'Targeted therapy (e.g., BRAF inhibitors like vemurafenib, dabrafenib; MEK inhibitors like trametinib, cobimetinib)',
    'Chemotherapy (less commonly used)',
    'Radiation therapy in some cases'
  ],
  lifestyle: [
    'Sun protection (e.g., sunscreen, protective clothing, avoiding peak sun hours)',
    'Regular skin self-exams',
    'Regular follow-up with a dermatologist and oncologist',
    'Avoiding tanning beds',
    'Psychosocial support'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important during treatment'
  ]
},
{
  id: 'skin-cancer-non-melanoma',
  name: 'Skin Cancer (Non-Melanoma)',
  category: 'Oncological',
  description: 'Types of skin cancer that develop in the basal cells or squamous cells of the skin, and are the most common types of skin cancer, generally less likely to spread than melanoma but can still be locally destructive if not treated.',
  symptoms: [
    'Basal cell carcinoma: Pearly or waxy bump, flat flesh-colored or brown scar-like lesion, bleeding or scabbing sore that heals and returns',
    'Squamous cell carcinoma: Firm red nodule, flat lesion with a scaly, crusted surface, new sore or raised area on an old scar or ulcer',
    'Actinic keratosis (precancerous lesion): Rough, scaly patch that may be pink, red, or brown, may be itchy or burning'
  ],
  relatedParameters: [
    {
      id: 'SKIN_BIOPSY',
      value: 'Basal cell or squamous cell carcinoma',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Basal cell or squamous cell carcinoma',
      description: 'Skin biopsy shows basal cell carcinoma or squamous cell carcinoma cells'
    }
  ],
  medications: [
    'Topical treatments (e.g., imiquimod, 5-fluorouracil) for superficial basal cell carcinomas or actinic keratoses',
    'Surgery to remove the cancer (e.g., excision, Mohs surgery)',
    'Cryotherapy',
    'Electrodessication and curettage',
    'Radiation therapy in some cases',
    'Photodynamic therapy'
  ],
  lifestyle: [
    'Sun protection (e.g., sunscreen, protective clothing, avoiding peak sun hours)',
    'Regular skin self-exams',
    'Regular follow-up with a dermatologist',
    'Avoiding tanning beds'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
  },
  {
  id: 'soft-tissue-sarcomas',
  name: 'Soft Tissue Sarcomas',
  category: 'Oncological',
  description: 'A diverse group of rare cancers that develop in the body\'s soft tissues, including muscles, fat, blood vessels, nerves, tendons, and the lining of joints, and can occur anywhere in the body but are most common in the arms, legs, chest, and abdomen.',
  symptoms: [
    'A lump that can be felt through the skin, which may or may not be painful',
    'Pain if the tumor presses on nerves or muscles',
    'Swelling',
    'Limited range of motion',
    'Symptoms depend on the location and size of the tumor',
    'Abdominal pain, constipation, or a feeling of fullness (for abdominal sarcomas)',
    'Cough or shortness of breath (for chest sarcomas)'
  ],
  relatedParameters: [
    {
      id: 'IMAGING',
      value: 'Mass',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Mass',
      description: 'Imaging tests (e.g., MRI, CT, PET) show a soft tissue mass'
    },
    {
      id: 'BIOPSY',
      value: 'Malignant cells',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Malignant cells',
      description: 'Biopsy (needle biopsy or surgical biopsy) shows malignant sarcoma cells'
    },
    {
      id: 'IMMUNOHISTOCHEMISTRY',
      value: 'Specific markers',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Specific markers',
      description: 'Immunohistochemistry may help determine the specific type of sarcoma'
    },
    {
      id: 'GENETIC_TESTING',
      value: 'Specific translocations',
      unit: '',
      normalRange: { min: 'No translocation', max: 'No translocation' },
      status: 'Specific translocations',
      description: 'Genetic testing may reveal specific translocations or mutations associated with certain types of sarcoma'
    }
  ],
  medications: [
    'Chemotherapy (e.g., doxorubicin, ifosfamide, dacarbazine)',
    'Targeted therapy (e.g., pazopanib, imatinib for gastrointestinal stromal tumors)',
    'Immunotherapy (e.g., pembrolizumab) in some cases',
    'Surgery to remove the tumor is the main treatment when possible',
    'Radiation therapy (before or after surgery)'
  ],
  lifestyle: [
    'Regular follow-up with an oncologist',
    'Physical therapy if needed for functional deficits',
    'Psychosocial support'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important during treatment'
  ]
},
{
  id: 'sore-throat',
  name: 'Sore Throat',
  category: 'Respiratory',
  description: 'Pain, scratchiness, or irritation of the throat that often worsens when swallowing, and is usually caused by a viral infection, such as a cold or the flu, but can also be caused by bacterial infections, allergies, or other irritants.',
  symptoms: [
    'Pain or scratchiness in the throat',
    'Pain that worsens when swallowing or talking',
    'Difficulty swallowing',
    'Swollen, red tonsils',
    'White patches or pus on the tonsils',
    'Hoarse or muffled voice',
    'Fever',
    'Cough',
    'Runny nose',
    'Sneezing',
    'Headache',
    'Body aches'
  ],
  relatedParameters: [
    {
      id: 'THROAT_CULTURE',
      value: 'Bacteria',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Bacteria',
      description: 'May be positive for bacterial infection'
    },
    {
      id: 'RAPID_STREP_TEST',
      value: 'Positive/Negative',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive/Negative',
      description: 'Rapid antigen test can detect strep throat'
    },
    {
      id: 'WBC',
      status: 'NORMAL',
      description: 'Usually normal'
    }
  ],
  medications: [
    'Pain relievers (e.g., acetaminophen, ibuprofen)',
    'Throat lozenges or sprays',
    'Antibiotics only if the sore throat is caused by a bacterial infection (e.g., strep throat)'
  ],
  lifestyle: [
    'Rest',
    'Drinking plenty of fluids',
    'Gargling with warm salt water',
    'Using a humidifier',
    'Avoiding irritants (e.g., smoke)',
    'Honey (for individuals over 1 year old)',
    'Cold foods and drinks may soothe the throat'
  ],
  diet: [
    'Soft foods that are easy to swallow',
    'Warm liquids (e.g., soup, tea)',
    'Cold foods (e.g., popsicles) may provide relief'
  ]
},
{
  id: 'spina-bifida',
  name: 'Spina Bifida',
  category: 'Congenital',
  description: 'A birth defect that occurs when the spine and spinal cord don\'t form properly, resulting in a gap in the spine, and can range from mild to severe, with varying degrees of disability.',
  symptoms: [
    'Vary depending on the type and severity',
    'Myelomeningocele (most severe): Open sac on the back with spinal cord and nerves exposed, leg weakness or paralysis, bowel and bladder problems, hydrocephalus, Chiari II malformation',
    'Meningocele: Sac of fluid protruding through an opening in the spine, but spinal cord is not involved, usually less severe symptoms',
    'Spina bifida occulta (mildest): Small gap in the spine, often no symptoms or mild neurological problems',
    'Tethered spinal cord'
  ],
  relatedParameters: [
    {
      id: 'PRENATAL_ULTRASOUND',
      value: 'Spinal defect',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Spinal defect',
      description: 'Prenatal ultrasound may detect a spinal defect'
    },
    {
      id: 'AFP',
      status: 'HIGH',
      description: 'Maternal serum alpha-fetoprotein (AFP) may be elevated during pregnancy'
    },
    {
      id: 'AMNIOCENTESIS',
      value: 'Elevated AFP',
      unit: '',
      normalRange: { min: 'Normal AFP', max: 'Normal AFP' },
      status: 'Elevated AFP',
      description: 'Amniocentesis may show elevated AFP in the amniotic fluid'
    },
    {
      id: 'MRI_SPINE',
      value: 'Spinal cord defect',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Spinal cord defect',
      description: 'Postnatal MRI can define the spinal cord defect and associated abnormalities'
    }
  ],
  medications: [
    'Surgery to close the spinal defect (prenatal or postnatal)',
    'Antibiotics to prevent or treat infections',
    'Medications to manage bowel and bladder problems',
    'Ventriculoperitoneal (VP) shunt for hydrocephalus'
  ],
  lifestyle: [
    'Physical therapy',
    'Occupational therapy',
    'Assistive devices (e.g., braces, crutches, wheelchairs)',
    'Bowel and bladder management programs',
    'Regular follow-up with a multidisciplinary team (e.g., neurosurgeon, urologist, orthopedist, pediatrician)',
    'Special education if needed',
    'Psychosocial support',
    'Prevention with folic acid supplementation before and during pregnancy'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important for overall well-being',
    'Adequate calcium and vitamin D intake for bone health'
  ]
},
{
  id: 'stillbirth',
  name: 'Stillbirth',
  category: 'Obstetrical',
  description: 'The death of a fetus at or after 20 weeks of gestation, and can occur before or during labor.',
  symptoms: [
    'No fetal movement felt',
    'Vaginal bleeding or spotting',
    'Abdominal pain or cramping',
    'Absence of fetal heartbeat on ultrasound'
  ],
  relatedParameters: [
    {
      id: 'ULTRASOUND',
      value: 'No fetal heartbeat',
      unit: '',
      normalRange: { min: 'Fetal heartbeat present', max: 'Fetal heartbeat present' },
      status: 'No fetal heartbeat',
      description: 'Ultrasound confirms the absence of a fetal heartbeat'
    },
    {
      id: 'PLACENTAL_PATHOLOGY',
      value: 'Abnormalities',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormalities',
      description: 'Placental examination may reveal abnormalities (e.g., infarction, abruption)'
    },
    {
      id: 'FETAL_AUTOPSY',
      value: 'Cause of death',
      unit: '',
      normalRange: { min: 'No abnormalities', max: 'No abnormalities' },
      status: 'Cause of death',
      description: 'Fetal autopsy may help determine the cause of death'
    },
    {
      id: 'GENETIC_TESTING',
      value: 'Chromosomal abnormalities',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Chromosomal abnormalities',
      description: 'Genetic testing of the fetus may reveal chromosomal abnormalities or genetic disorders'
    }
  ],
  medications: [
    'Medications may be used to induce labor if it doesn\'t start on its own',
    'Pain relief during labor and delivery'
  ],
  lifestyle: [
    'Emotional and psychological support for the parents and family',
    'Grief counseling',
    'Support groups',
    'Follow-up with an obstetrician to discuss potential causes and future pregnancies',
    'Investigation of potential causes (e.g., infection, placental problems, fetal abnormalities, umbilical cord accidents, maternal health conditions)'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'stomach-ache',
  name: 'Stomach Ache',
  category: 'Gastrointestinal',
  description: 'Pain or discomfort in the abdomen, which can be caused by a variety of factors, including indigestion, gas, food poisoning, viral or bacterial infections, food intolerances, stress, and more serious conditions like ulcers or appendicitis.',
  symptoms: [
    'Abdominal pain or cramping',
    'Nausea',
    'Vomiting',
    'Diarrhea',
    'Bloating',
    'Gas',
    'Indigestion',
    'Heartburn',
    'Loss of appetite'
  ],
  relatedParameters: [
      {
        id: 'STOOL_TEST',
        value: 'Infection',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Infection',
        description: 'May detect bacterial or parasitic infection'
      },
      {
        id: 'ABDOMINAL_EXAM',
        value: 'Tenderness',
        unit: '',
        normalRange: { min: 'Normal', max: 'Normal' },
        status: 'Tenderness',
        description: 'Physical exam may reveal tenderness or other abnormalities'
      },
      {
        id: 'WBC',
        status: 'NORMAL',
        description: 'Usually normal'
      }
  ],
  medications: [
    'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen) (use with caution)',
    'Antacids',
    'H2 blockers or proton pump inhibitors for heartburn',
    'Anti-diarrheal medications (e.g., loperamide) (use with caution)',
    'Antiemetics for nausea and vomiting',
    'Antibiotics if the stomach ache is caused by a bacterial infection'
  ],
  lifestyle: [
    'Rest',
    'Applying heat to the abdomen',
    'Drinking clear fluids',
    'Eating bland foods (e.g., crackers, toast, rice)',
    'Avoiding foods and drinks that trigger symptoms',
    'Identifying and managing stress',
    'Ginger may help with nausea'
  ],
  diet: [
    'BRAT diet (bananas, rice, applesauce, toast) may be helpful for some individuals',
    'Avoiding spicy, greasy, or fatty foods',
    'Limiting caffeine and alcohol',
    'Eating smaller, more frequent meals'
  ]
},
{
  id: 'stomach-cancer',
  name: 'Stomach Cancer',
  category: 'Oncological',
  description: 'Cancer that begins in the cells lining the stomach, also called gastric cancer, and can develop in any part of the stomach and may spread to other organs.',
  symptoms: [
    'Indigestion or heartburn',
    'Abdominal pain or discomfort',
    'Nausea and vomiting',
    'Loss of appetite',
    'Unexplained weight loss',
    'Feeling full after eating small amounts of food',
    'Bloating after meals',
    'Black or bloody stools',
    'Fatigue',
    'Jaundice (if the cancer spreads to the liver)'
  ],
  relatedParameters: [
    {
      id: 'UPPER_ENDOSCOPY',
      value: 'Tumor',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor',
      description: 'Upper endoscopy may reveal a tumor or ulceration in the stomach'
    },
    {
      id: 'BIOPSY',
      value: 'Malignant cells',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Malignant cells',
      description: 'Biopsy of the stomach lesion shows malignant cells (adenocarcinoma in most cases)'
    },
    {
      id: 'CT_SCAN',
      value: 'Tumor',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor',
      description: 'CT scan of the abdomen and pelvis can assess the extent of the tumor and detect metastases'
    },
    {
      id: 'CEA',
      status: 'HIGH',
      description: 'Carcinoembryonic antigen (CEA) may be elevated'
    },
    {
      id: 'CA_19_9',
      status: 'HIGH',
      description: 'Cancer antigen 19-9 (CA 19-9) may be elevated'
    },
    {
      id: 'HER2_TESTING',
      value: 'HER2 positive',
      unit: '',
      normalRange: { min: 'HER2 negative', max: 'HER2 negative' },
      status: 'HER2 positive',
      description: 'Tumor testing may show HER2 overexpression (in about 20% of cases)'
    }
  ],
  medications: [
    'Chemotherapy (e.g., fluorouracil, capecitabine, oxaliplatin, cisplatin, paclitaxel, docetaxel, irinotecan)',
    'Targeted therapy (e.g., trastuzumab for HER2-positive tumors, ramucirumab)',
    'Immunotherapy (e.g., pembrolizumab) in some cases',
    'Surgery to remove the tumor (gastrectomy)',
    'Radiation therapy (often in combination with chemotherapy)'
  ],
  lifestyle: [
    'Regular follow-up with an oncologist and gastroenterologist',
    'Nutritional counseling',
    'Psychosocial support',
    'Palliative care to manage symptoms and improve quality of life'
  ],
  diet: [
    'Small, frequent meals',
    'High-calorie, high-protein diet may be needed if there is weight loss',
    'Nutritional supplements if needed',
    'Avoiding foods that worsen symptoms (e.g., spicy, acidic foods)'
  ]
},
{
  id: 'stomach-ulcer',
  name: 'Stomach Ulcer',
  category: 'Gastrointestinal',
  description: 'A sore that develops on the lining of the stomach or the first part of the small intestine (duodenum), also called a peptic ulcer, and is often caused by infection with Helicobacter pylori bacteria or long-term use of NSAIDs.',
  symptoms: [
    'Burning stomach pain',
    'Pain that may be relieved by eating or taking antacids',
    'Pain that may worsen at night or when the stomach is empty',
    'Bloating',
    'Heartburn',
    'Nausea',
    'Vomiting',
    'Loss of appetite',
    'Unexplained weight loss',
    'Dark or bloody stools'
  ],
  relatedParameters: [
    {
      id: 'UPPER_ENDOSCOPY',
      value: 'Ulcer',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Ulcer',
      description: 'Upper endoscopy reveals an ulcer in the stomach or duodenum'
    },
    {
      id: 'BIOPSY',
      value: 'H. pylori',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'H. pylori',
      description: 'Biopsy of the ulcer may show the presence of H. pylori bacteria'
    },
    {
      id: 'H_PYLORI_TESTING',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'H. pylori testing (e.g., urea breath test, stool antigen test, blood antibody test) may be positive'
    }
  ],
  medications: [
    'Proton pump inhibitors (e.g., omeprazole, lansoprazole, esomeprazole)',
    'H2 blockers (e.g., famotidine, ranitidine)',
    'Antibiotics to eradicate H. pylori (e.g., clarithromycin, amoxicillin, metronidazole)',
    'Bismuth subsalicylate',
    'Antacids for symptom relief'
  ],
  lifestyle: [
    'Avoiding NSAIDs if possible',
    'Quitting smoking',
    'Limiting alcohol consumption',
    'Managing stress',
    'Avoiding foods that worsen symptoms'
  ],
  diet: [
    'Generally not directly related to diet, but avoiding spicy, acidic, or fatty foods may help some individuals',
    'Smaller, more frequent meals may be better tolerated'
  ]
},
{
  id: 'streptococcus-A',
  name: 'Streptococcus A (Strep A)',
  category: 'Infectious',
  description: 'Group A Streptococcus bacteria can cause a wide range of infections, from mild illnesses like strep throat and impetigo to more serious diseases like scarlet fever, rheumatic fever, and necrotizing fasciitis.',
  symptoms: [
      'Strep throat: Sore throat, pain when swallowing, fever, red and swollen tonsils, white patches or streaks of pus on the tonsils, tiny red spots on the area at the back of the roof of the mouth, swollen lymph nodes in the front of the neck',
      'Impetigo: Red sores that rupture, ooze, and form a yellowish-brown crust, usually around the nose and mouth',
      'Scarlet fever: Red rash that feels like sandpaper, bright red skin in the underarm, elbow, and groin creases, strawberry tongue, fever, sore throat',
      'Cellulitis: Red, swollen, tender area of skin that feels hot and may spread rapidly',
      'Necrotizing fasciitis: Rapidly spreading infection of the deeper layers of skin and tissues, causing severe pain, swelling, redness, warmth, blisters, fever, and shock (a medical emergency)',
      'Toxic shock syndrome: Sudden high fever, low blood pressure, vomiting or diarrhea, rash resembling a sunburn, confusion, muscle aches, redness of the eyes, mouth, and throat, seizures, headaches (a medical emergency)'
  ],
  relatedParameters: [
      {
          id: 'THROAT_CULTURE',
          value: 'Group A Streptococcus',
          unit: '',
          normalRange: { min: 'Negative', max: 'Negative' },
          status: 'Group A Streptococcus',
          description: 'Throat culture is positive for group A Streptococcus'
      },
      {
          id: 'RAPID_STREP_TEST',
          value: 'Positive',
          unit: '',
          normalRange: { min: 'Negative', max: 'Negative' },
          status: 'Positive',
          description: 'Rapid antigen detection test for group A Streptococcus is positive'
      },
      {
          id: 'WBC',
          status: 'HIGH',
          description: 'White blood cell count may be elevated'
      },
      {
          id: 'ASO_TITER',
          status: 'HIGH',
          description: 'Antistreptolysin O (ASO) titer may be elevated in recent infection'
      },
      {
          id: 'ANTI_DNASE_B',
          status: 'HIGH',
          description: 'Anti-DNase B titer may be elevated in recent infection'
      }
  ],
  medications: [
      'Antibiotics (e.g., penicillin, amoxicillin, cephalexin, azithromycin)',
      'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen) for fever and pain'
  ],
  lifestyle: [
      'Rest',
      'Fluids to prevent dehydration',
      'Isolation to prevent spread',
      'Completing the full course of antibiotics',
      'Good hygiene (handwashing, covering coughs and sneezes)',
      'Prompt treatment of strep throat to prevent complications like rheumatic fever'
  ],
  diet: [
      'Soft foods that are easy to swallow if strep throat is present',
      'Cold foods and drinks may soothe a sore throat'
  ]
},
{
  id: 'streptococcus-B',
  name: 'Streptococcus B',
  category: 'Infectious',
  description: 'Group B Streptococcus is a type of bacteria that commonly lives in the intestines and genital tract and can be passed from a pregnant woman to her baby during delivery, potentially causing serious infections in newborns, and can also cause infections in adults, particularly older adults and those with underlying health conditions.',
  symptoms: [
    'In newborns: Fever, difficulty feeding, lethargy, irritability, difficulty breathing, grunting, blue skin color, seizures, Early-onset (within the first week of life) is more common and often presents with sepsis, pneumonia, or meningitis, Late-onset (after the first week of life) often presents with meningitis',
    'In pregnant women: Often asymptomatic, Urinary tract infection, Infection of the placenta and amniotic fluid (chorioamnionitis)',
    'In adults: Urinary tract infection, Skin or soft tissue infection, Bloodstream infection (bacteremia), Pneumonia, Bone and joint infections, Meningitis'
  ],
  relatedParameters: [
      {
          id: 'VAGINAL_RECTAL_CULTURE',
          value: 'Group B Streptococcus',
          unit: '',
          normalRange: { min: 'Negative', max: 'Negative' },
          status: 'Group B Streptococcus',
          description: 'Vaginal/rectal culture (obtained at 36-37 weeks of pregnancy) is positive for group B Streptococcus'
      },
      {
          id: 'BLOOD_CULTURES',
          value: 'Group B Streptococcus',
          unit: '',
          normalRange: { min: 'Negative', max: 'Negative' },
          status: 'Group B Streptococcus',
          description: 'Blood cultures may be positive in newborns or adults with invasive infection'
      },
      {
          id: 'CSF_CULTURE',
          value: 'Group B Streptococcus',
          unit: '',
          normalRange: { min: 'Negative', max: 'Negative' },
          status: 'Group B Streptococcus',
          description: 'Cerebrospinal fluid (CSF) culture may be positive in cases of meningitis'
      },
      {
          id: 'WBC',
          status: 'HIGH',
          description: 'White blood cell count may be elevated or decreased in newborns with GBS infection'
      }
  ],
  medications: [
      'Intrapartum antibiotic prophylaxis (IAP) for pregnant women who are GBS carriers (e.g., penicillin, ampicillin)',
      'Antibiotics for newborns with GBS infection (e.g., penicillin, ampicillin, gentamicin)',
      'Antibiotics for adults with GBS infections, depending on the site and severity of infection'
  ],
  lifestyle: [
      'Screening pregnant women for GBS colonization at 36-37 weeks of gestation',
      'Administering IAP to GBS-positive women during labor',
      'Close monitoring of newborns born to GBS-positive mothers',
      'Prompt treatment of GBS infections in adults'
  ],
  diet: [
      'Generally not directly related to diet'
  ]
},
{
  id: 'stroke',
  name: 'Stroke',
  category: 'Neurological',
  description: 'A medical emergency that occurs when blood flow to a part of the brain is interrupted, either by a blockage (ischemic stroke) or by bleeding into the brain (hemorrhagic stroke), leading to brain cell death and potential neurological deficits.',
  symptoms: [
    'Sudden numbness or weakness of the face, arm, or leg, especially on one side of the body',
    'Sudden confusion, trouble speaking or understanding speech',
    'Sudden trouble seeing in one or both eyes',
    'Sudden trouble walking, dizziness, loss of balance or coordination',
    'Sudden severe headache with no known cause',
    'Facial drooping',
    'FAST (Face, Arms, Speech, Time) is a helpful acronym to remember the signs of stroke'
  ],
  relatedParameters: [
    {
      id: 'CT_BRAIN',
      value: 'Infarct or hemorrhage',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Infarct or hemorrhage',
      description: 'Non-contrast CT scan of the brain can identify hemorrhage and may show early signs of ischemic stroke'
    },
    {
      id: 'MRI_BRAIN',
      value: 'Infarct',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Infarct',
      description: 'MRI of the brain (including diffusion-weighted imaging) is more sensitive for detecting acute ischemic stroke'
    },
    {
      id: 'BLOOD_GLUCOSE',
      status: 'HIGH/LOW',
      description: 'Blood glucose should be checked to rule out hypoglycemia or hyperglycemia as a cause of symptoms'
    },
    {
      id: 'COAGULATION_TESTS',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'Coagulation tests (e.g., PT, INR, aPTT) may be abnormal in some cases'
    },
    {
      id: 'ECG',
      value: 'Arrhythmia',
      unit: '',
      normalRange: {min: 'Normal Sinus Rhythm', max: 'Normal Sinus Rhythm'},
      status: 'Arrhythmia',
      description: 'Electrocardiogram (ECG) may reveal atrial fibrillation or other arrhythmias'
    }
  ],
  medications: [
    'tPA (tissue plasminogen activator) for eligible patients with ischemic stroke within 4.5 hours of symptom onset',
    'Aspirin or other antiplatelet agents (e.g., clopidogrel) for ischemic stroke',
    'Anticoagulants (e.g., heparin, warfarin) for stroke prevention in patients with atrial fibrillation',
    'Blood pressure management',
    'Statins for cholesterol management',
    'Surgical interventions (e.g., mechanical thrombectomy, carotid endarterectomy, aneurysm clipping or coiling) in some cases'
  ],
  lifestyle: [
    'Rehabilitation (e.g., physical therapy, occupational therapy, speech therapy)',
    'Management of risk factors (e.g., hypertension, diabetes, hyperlipidemia, smoking, atrial fibrillation)',
    'Regular exercise',
    'Healthy diet',
    'Weight management',
    'Stroke education',
    'Psychosocial support'
  ],
  diet: [
    'Heart-healthy diet (e.g., Mediterranean diet)',
    'Low sodium intake',
    'Limited saturated and trans fats',
    'Adequate fruits, vegetables, and whole grains',
    'Dysphagia diet if needed'
  ]
},
{
  id: 'subacromial-pain-syndrome',
  name: 'Subacromial Pain Syndrome',
  category: 'Musculoskeletal',
  description: 'A common shoulder condition characterized by pain and tenderness in the subacromial space, often caused by rotator cuff tendinopathy, subacromial bursitis, or impingement, and typically presents with pain during overhead activities and difficulty sleeping on the affected side.',
  symptoms: [
    'Shoulder pain, especially with overhead activities',
    'Pain on the outside of the shoulder, which may radiate down the arm',
    'Pain when sleeping on the affected side',
    'Shoulder weakness',
    'Limited range of motion',
    'Clicking or popping sensation in the shoulder',
    'Painful arc of motion (typically between 60-120 degrees of abduction)'
  ],
  relatedParameters: [
    {
      id: 'NEER_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Neer test elicits pain with passive forward flexion of the shoulder'
    },
    {
      id: 'HAWKINS_KENNEDY_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Hawkins-Kennedy test elicits pain with internal rotation of the shoulder'
    },
    {
      id: 'EMPTY_CAN_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Empty can (Jobe) test elicits pain or weakness with resisted abduction and internal rotation'
    },
    {
      id: 'MRI_SHOULDER',
      value: 'Rotator cuff tendinopathy',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Rotator cuff tendinopathy',
      description: 'MRI may show rotator cuff tendinopathy, subacromial bursitis, or a rotator cuff tear'
    }
  ],
  medications: [
    'NSAIDs (e.g., ibuprofen, naproxen)',
    'Corticosteroid injections into the subacromial space',
    'Topical pain relievers (e.g., lidocaine patches)'
  ],
  lifestyle: [
    'Physical therapy (exercises to improve shoulder strength, flexibility, and range of motion)',
    'Activity modification (avoiding aggravating activities)',
    'Rest',
    'Ice or heat therapy',
    'Proper posture',
    'Ergonomic adjustments',
    'Scapular stabilization exercises'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
  },
  {
  id: 'sudden-infant-death-syndrome',
  name: 'Sudden Infant Death Syndrome (SIDS)',
  category: 'Pediatric',
  description: 'The sudden and unexplained death of an infant younger than 1 year old, usually during sleep, and often referred to as crib death. The exact cause is unknown, but it is thought to involve a combination of factors, including underlying vulnerabilities, critical developmental period, and environmental stressors.',
  symptoms: [
    'No warning signs or symptoms',
    'Infant found unresponsive in crib or bed',
    'No evidence of struggle or distress',
    'May be found in a prone (stomach-down) or side-lying position'
  ],
  relatedParameters: [
    {
      id: 'AUTOPSY',
      value: 'No cause of death identified',
      unit: '',
      normalRange: { min: 'Cause of death identified', max: 'Cause of death identified' },
      status: 'No cause of death identified',
      description: 'Autopsy reveals no identifiable cause of death'
    },
    {
      id: 'SCENE_INVESTIGATION',
      value: 'Unsafe sleep environment',
      unit: '',
      normalRange: { min: 'Safe sleep environment', max: 'Safe sleep environment' },
      status: 'Unsafe sleep environment',
      description: 'Death scene investigation may reveal unsafe sleep environment factors (e.g., soft bedding, prone sleeping position, bed-sharing)'
    },
    {
      id: 'MEDICAL_HISTORY_REVIEW',
      value: 'Risk factors',
      unit: '',
      normalRange: { min: 'No risk factors', max: 'No risk factors' },
      status: 'Risk factors',
      description: 'Review of the infant\'s and family\'s medical history may reveal risk factors (e.g., prematurity, low birth weight, respiratory infections, maternal smoking during pregnancy)'
    }
  ],
  medications: [
    'Not applicable, as SIDS is a diagnosis of exclusion after death'
  ],
  lifestyle: [
    'Safe sleep practices to reduce the risk of SIDS:',
    'Back sleeping for every sleep',
    'Firm sleep surface',
    'Room-sharing without bed-sharing',
    'No soft objects or loose bedding in the sleep area',
    'Avoiding overheating',
    'Breastfeeding if possible',
    'Pacifier use at naptime and bedtime',
    'Routine immunizations',
    'Avoiding exposure to smoke',
    'Tummy time when the infant is awake and supervised'
  ],
  diet: [
    'Breastfeeding is associated with a reduced risk of SIDS'
  ]
},
{
  id: 'sunburn',
  name: 'Sunburn',
  category: 'Dermatological',
  description: 'A form of radiation burn that affects living tissue, such as skin, that results from an overexposure to ultraviolet (UV) radiation, commonly from the sun. Symptoms can range from mild redness and tenderness to severe blistering and systemic symptoms.',
  symptoms: [
    'Red, tender skin that is warm to the touch',
    'Pain',
    'Swelling',
    'Blisters',
    'Peeling skin (after a few days)',
    'Itching',
    'Fever, chills, headache, nausea, and fatigue (in severe cases)',
    'Dehydration'
  ],
  relatedParameters: [
      {
          id: 'SKIN_EXAM',
          value: 'Erythema, blisters',
          unit: '',
          normalRange: { min: 'Normal skin', max: 'Normal skin' },
          status: 'Erythema, blisters',
          description: 'Physical examination reveals erythema, edema, and possibly blistering'
      }
  ],
  medications: [
    'Cool compresses or baths',
    'Moisturizing lotions or gels (e.g., aloe vera)',
    'Over-the-counter pain relievers (e.g., ibuprofen, naproxen)',
    'Topical corticosteroids (e.g., hydrocortisone cream) for more severe sunburn',
    'Oral corticosteroids in severe cases (rarely needed)'
  ],
  lifestyle: [
    'Staying out of the sun until the sunburn heals',
    'Wearing loose-fitting, comfortable clothing',
    'Drinking plenty of fluids to prevent dehydration',
    'Avoiding further sun exposure',
    'Prevention: Using sunscreen (SPF 30 or higher), wearing protective clothing, seeking shade, avoiding peak sun hours (10 am to 4 pm)'
  ],
  diet: [
    'Generally not directly related to diet, but adequate hydration is important'
  ]
},
{
  id: 'supraventricular-tachycardia',
  name: 'Supraventricular Tachycardia',
  category: 'Cardiovascular',
  description: 'A rapid heart rhythm that originates above the ventricles, in the atria or the atrioventricular (AV) node, and is characterized by a heart rate typically between 150 and 250 beats per minute. SVT can be paroxysmal (sudden onset and termination) or sustained.',
  symptoms: [
    'Palpitations (a sensation of rapid, fluttering, or pounding heartbeats)',
    'Rapid heart rate',
    'Shortness of breath',
    'Chest pain or discomfort',
    'Dizziness or lightheadedness',
    'Fainting (syncope)',
    'Anxiety',
    'Fatigue',
    'Neck pounding or fluttering'
  ],
  relatedParameters: [
    {
      id: 'ECG',
      value: 'Narrow complex tachycardia',
      unit: '',
      normalRange: { min: 'Normal sinus rhythm', max: 'Normal sinus rhythm' },
      status: 'Narrow complex tachycardia',
      description: 'ECG shows a narrow complex tachycardia with a regular rhythm and a rate typically between 150 and 250 bpm'
    },
    {
      id: 'HOLTER_MONITOR',
      value: 'Episodes of tachycardia',
      unit: '',
      normalRange: { min: 'Normal sinus rhythm', max: 'Normal sinus rhythm' },
      status: 'Episodes of tachycardia',
      description: 'Ambulatory ECG monitoring (e.g., Holter monitor) may capture episodes of SVT'
    },
    {
      id: 'EVENT_MONITOR',
      value: 'Episodes of tachycardia',
      unit: '',
      normalRange: { min: 'Normal sinus rhythm', max: 'Normal sinus rhythm' },
      status: 'Episodes of tachycardia',
      description: 'Event monitor or loop recorder may be used for infrequent episodes'
    },
    {
      id: 'ELECTROPHYSIOLOGY_STUDY',
      value: 'Inducible SVT',
      unit: '',
      normalRange: { min: 'No inducible arrhythmias', max: 'No inducible arrhythmias' },
      status: 'Inducible SVT',
      description: 'Electrophysiology study (EPS) can confirm the diagnosis and identify the mechanism of SVT'
    }
  ],
  medications: [
    'Vagal maneuvers (e.g., Valsalva maneuver, carotid sinus massage) as a first-line treatment to terminate SVT',
    'Adenosine (first-line medication for acute termination)',
    'Beta-blockers (e.g., metoprolol, atenolol)',
    'Calcium channel blockers (e.g., verapamil, diltiazem)',
    'Other antiarrhythmic drugs (e.g., flecainide, propafenone, amiodarone) for recurrent or refractory SVT',
    'Catheter ablation for long-term management in selected patients'
  ],
  lifestyle: [
    'Avoiding triggers (e.g., caffeine, alcohol, stress, certain medications)',
    'Learning vagal maneuvers',
    'Regular exercise',
    'Stress management',
    'Maintaining a healthy weight',
    'Regular follow-up with a cardiologist or electrophysiologist'
  ],
  diet: [
    'Generally not directly related to diet, but limiting caffeine and alcohol may be helpful'
  ]
},
{
  id: 'swollen-glands',
  name: 'Swollen Glands',
  category: 'Immunological',
  description: 'Enlargement of the lymph nodes, which are small, bean-shaped glands that are part of the lymphatic system and play an important role in the body\'s immune response. Swollen glands, also known as lymphadenopathy, are often a sign of an infection, but can also be caused by other conditions, such as autoimmune diseases or cancer.',
  symptoms: [
    'Swollen, tender lymph nodes, usually in the neck, armpits, or groin',
    'Pain or tenderness in the area of the swollen glands',
    'Fever',
    'Night sweats',
    'Weight loss',
    'Fatigue',
    'Symptoms of an underlying infection (e.g., sore throat, cough, runny nose, skin rash)'
  ],
  relatedParameters: [
      {
          id: 'LYMPH_NODE_EXAM',
          value: 'Enlarged, tender nodes',
          unit: '',
          normalRange: { min: 'Normal size, non-tender', max: 'Normal size, non-tender' },
          status: 'Enlarged, tender nodes',
          description: 'Physical examination reveals enlarged, tender lymph nodes'
      },
      {
          id: 'WBC',
          status: 'HIGH',
          description: 'White blood cell count may be elevated in the presence of infection'
      },
      {
          id: 'CRP',
          status: 'HIGH',
          description: 'C-reactive protein (CRP) may be elevated'
      },
      {
          id: 'ESR',
          status: 'HIGH',
          description: 'Erythrocyte sedimentation rate (ESR) may be elevated'
      },
      {
          id: 'IMAGING',
          value: 'Lymphadenopathy',
          unit: '',
          normalRange: { min: 'Normal', max: 'Normal' },
          status: 'Lymphadenopathy',
          description: 'Imaging studies (e.g., ultrasound, CT) may show enlarged lymph nodes'
      },
      {
          id: 'LYMPH_NODE_BIOPSY',
          value: 'Pathology findings',
          unit: '',
          normalRange: { min: 'Normal', max: 'Normal' },
          status: 'Pathology findings',
          description: 'Lymph node biopsy may be performed if the cause is unclear or if malignancy is suspected'
      }
  ],
  medications: [
    'Treatment depends on the underlying cause',
    'Antibiotics for bacterial infections',
    'Antiviral medications for certain viral infections',
    'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen) for pain and fever',
    'Treatment for autoimmune diseases or cancer if those are the underlying cause'
  ],
  lifestyle: [
    'Rest',
    'Warm compresses to the affected area',
    'Drinking plenty of fluids',
    'Treating the underlying infection or condition',
    'Monitoring for any changes in the size or tenderness of the lymph nodes'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet supports immune function'
  ]
},
{
  id: 'syphilis',
  name: 'Syphilis',
  category: 'Infectious',
  description: 'A sexually transmitted infection (STI) caused by the bacterium Treponema pallidum. Syphilis progresses through stages (primary, secondary, latent, and tertiary) and can cause a wide range of symptoms if left untreated. It can also be transmitted from a pregnant woman to her fetus (congenital syphilis).',
  symptoms: [
    'Primary syphilis: Painless sore (chancre) at the site of infection (usually the genitals, rectum, or mouth) that appears 10-90 days after exposure and heals without treatment in 3-6 weeks',
    'Secondary syphilis: Skin rash (often on the palms of the hands and soles of the feet), mucous membrane lesions, fever, swollen lymph nodes, sore throat, patchy hair loss, headaches, weight loss, muscle aches, and fatigue, appearing weeks to months after the chancre',
    'Latent syphilis: No visible signs or symptoms, but the infection remains in the body',
    'Tertiary syphilis: Severe medical problems affecting the heart, brain, nerves, eyes, blood vessels, liver, bones, and joints, occurring years or decades after the initial infection',
    'Neurosyphilis: Can occur at any stage and cause a variety of neurological symptoms, including headache, altered behavior, difficulty coordinating muscle movements, paralysis, numbness, and dementia',
    'Congenital syphilis: Can cause miscarriage, stillbirth, prematurity, low birth weight, or death shortly after birth. Infected newborns may have no symptoms initially but can develop serious problems within a few weeks if not treated, including rash, fever, jaundice, anemia, bone and joint inflammation, and neurosyphilis'
  ],
  relatedParameters: [
    {
      id: 'RPR',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Nontreponemal tests (e.g., RPR, VDRL) are usually positive in primary, secondary, and early latent syphilis'
    },
    {
      id: 'VDRL',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Nontreponemal tests (e.g., RPR, VDRL) are usually positive in primary, secondary, and early latent syphilis'
    },
    {
      id: 'TPHA',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Treponemal tests (e.g., FTA-ABS, TP-PA, EIA) are usually positive for life once infected'
    },
    {
      id: 'FTA_ABS',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Treponemal tests (e.g., FTA-ABS, TP-PA, EIA) are usually positive for life once infected'
    },
    {
      id: 'CSF_EXAMINATION',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'CSF examination (e.g., cell count, protein, VDRL) may be abnormal in neurosyphilis'
    },
    {
      id: 'DARKFIELD_MICROSCOPY',
      value: 'Treponemes',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Treponemes',
      description: 'Darkfield microscopy of lesion exudate or tissue can demonstrate treponemes'
    }
  ],
  medications: [
    'Penicillin G (treatment of choice for all stages of syphilis)',
    'Doxycycline, tetracycline, or ceftriaxone (alternative options for non-pregnant patients with penicillin allergy)',
    'Treatment for neurosyphilis requires intravenous penicillin G',
    'Pregnant women with syphilis should be treated with penicillin according to the stage of infection'
  ],
  lifestyle: [
    'Safe sex practices (e.g., consistent and correct use of condoms)',
    'Screening for syphilis in high-risk populations (e.g., men who have sex with men, people with HIV infection, commercial sex workers)',
    'Screening pregnant women for syphilis at the first prenatal visit and again in the third trimester and at delivery in high-prevalence areas',
    'Treating sexual partners of individuals with syphilis to prevent reinfection',
    'Reporting syphilis cases to public health authorities for partner notification and contact tracing',
    'Abstaining from sexual intercourse until treatment is completed and lesions have healed'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
  },
  {
  id: 'tennis-elbow',
  name: 'Tennis Elbow',
  category: 'Musculoskeletal',
  description: 'Also known as lateral epicondylitis, is a painful condition that occurs when tendons in the elbow are overloaded, usually by repetitive motions of the wrist and arm. Despite its name, athletes are not the only people who develop tennis elbow. People whose jobs feature the types of motions that can lead to tennis elbow include plumbers, painters, carpenters, and cooks.',
  symptoms: [
    'Pain that radiates from the outside of the elbow into the forearm and wrist',
    'Pain that worsens with forearm activity, such as shaking hands, turning a doorknob, or holding a coffee cup',
    'Weakness in the forearm',
    'Stiffness in the elbow',
    'Tenderness on the outside of the elbow'
  ],
  relatedParameters: [
    {
      id: 'COZENS_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: "Cozen's test (resisted wrist extension with the elbow extended) elicits pain at the lateral epicondyle"
    },
    {
      id: 'MILLS_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: "Mill's test (passive wrist flexion with the elbow extended) elicits pain at the lateral epicondyle"
    },
    {
      id: 'TENDERNESS_EXAM',
      value: 'Lateral epicondyle',
      unit: '',
      normalRange: { min: 'No tenderness', max: 'No tenderness' },
      status: 'Lateral epicondyle',
      description: 'Palpation reveals tenderness over the lateral epicondyle'
    },
    {
      id: 'MRI_ELBOW',
      value: 'Tendinosis',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tendinosis',
      description: 'MRI may show tendinosis or a partial tear of the common extensor tendon, but is not usually necessary for diagnosis'
    }
  ],
  medications: [
    'NSAIDs (e.g., ibuprofen, naproxen) for pain relief',
    'Corticosteroid injections (may provide short-term relief but are not recommended for long-term use)',
    'Platelet-rich plasma (PRP) injections (may be considered in chronic cases)'
  ],
  lifestyle: [
    'Rest (avoiding activities that aggravate the pain)',
    'Ice (applying ice packs to the affected area for 15-20 minutes several times a day)',
    'Bracing (using a counterforce brace or elbow strap to reduce stress on the tendon)',
    'Stretching and strengthening exercises (under the guidance of a physical therapist)',
    'Gradual return to activity',
    'Ergonomic modifications to reduce strain on the elbow',
    'Proper technique for sports and work activities'
  ],
  diet: [
    'Generally not directly related to diet, but an anti-inflammatory diet may be helpful'
  ]
},
{
  id: 'testicular-cancer',
  name: 'Testicular Cancer',
  category: 'Oncological',
  description: 'Cancer that develops in the testicles, a part of the male reproductive system. It is the most common cancer in men aged 15-44 years. Testicular cancer is highly treatable, even when it has spread beyond the testicle.',
  symptoms: [
    'A lump or enlargement in either testicle',
    'A feeling of heaviness in the scrotum',
    'A dull ache in the abdomen or groin',
    'A sudden collection of fluid in the scrotum',
    'Pain or discomfort in a testicle or the scrotum',
    'Enlargement or tenderness of the breasts',
    'Back pain'
  ],
  relatedParameters: [
    {
      id: 'SCROTAL_ULTRASOUND',
      value: 'Testicular mass',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Testicular mass',
      description: 'Scrotal ultrasound shows a hypoechoic mass within the testicle'
    },
    {
      id: 'AFP',
      status: 'HIGH',
      description: 'Alpha-fetoprotein (AFP) may be elevated in non-seminomatous germ cell tumors'
    },
    {
      id: 'BETA_HCG',
      status: 'HIGH',
      description: 'Beta-human chorionic gonadotropin (β-hCG) may be elevated in both seminomas and non-seminomatous germ cell tumors'
    },
    {
      id: 'LDH',
      status: 'HIGH',
      description: 'Lactate dehydrogenase (LDH) may be elevated and is a marker of tumor burden'
    },
    {
      id: 'CT_ABDOMEN_PELVIS',
      value: 'Metastases',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Metastases',
      description: 'CT scan of the abdomen and pelvis can detect retroperitoneal lymph node metastases'
    },
    {
      id: 'CHEST_X_RAY',
      value: 'Pulmonary nodules',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Pulmonary nodules',
      description: 'Chest X-ray or CT scan of the chest can detect lung metastases'
    },
    {
      id: 'HISTOPATHOLOGY',
      value: 'Germ cell tumor',
      unit: '',
      normalRange: { min: 'Normal testicular tissue', max: 'Normal testicular tissue' },
      status: 'Germ cell tumor',
      description: 'Histopathological examination of the orchiectomy specimen confirms the diagnosis and classifies the tumor as seminoma or non-seminomatous germ cell tumor (e.g., embryonal carcinoma, yolk sac tumor, choriocarcinoma, teratoma)'
    }
  ],
  medications: [
    'Chemotherapy (e.g., cisplatin, etoposide, bleomycin, ifosfamide, paclitaxel) is often used after orchiectomy, depending on the stage and type of cancer',
    'High-dose chemotherapy with stem cell transplantation may be used for recurrent or refractory disease'
  ],
  lifestyle: [
    'Regular self-examination of the remaining testicle',
    'Follow-up with an oncologist for surveillance (e.g., physical exams, tumor marker measurements, imaging studies)',
    'Sperm banking before treatment if fertility is a concern',
    'Psychosocial support',
    'Healthy lifestyle (e.g., exercise, healthy diet)'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy diet is important during and after treatment'
  ]
},
{
  id: 'threadworms',
  name: 'Threadworms',
  category: 'Parasitic',
  description: 'Also known as pinworms, are small, thin, white roundworms that infect the intestines. Threadworm infection, also called enterobiasis, is the most common type of intestinal worm infection in the United States and one of the most common worldwide. Threadworms are highly contagious and spread easily, especially among children.',
  symptoms: [
    'Itching around the anus, especially at night',
    'Restless sleep',
    'Irritability',
    'Visible worms in the anal area or in the stool',
    'Abdominal pain (uncommon)',
    'Loss of appetite (uncommon)',
    'Vaginal itching in girls (if worms spread to the vagina)'
  ],
  relatedParameters: [
    {
      id: 'TAPE_TEST',
      value: 'Threadworm eggs',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Threadworm eggs',
      description: 'Microscopic examination of the tape reveals threadworm eggs'
    },
    {
      id: 'STOOL_EXAMINATION',
      value: 'Threadworms or eggs',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Threadworms or eggs',
      description: 'Stool examination for ova and parasites may reveal threadworms or their eggs, but is less sensitive than the tape test'
    }
  ],
  medications: [
    'Mebendazole',
    'Albendazole',
    'Pyrantel pamoate',
    'All household members should be treated at the same time',
    'A second dose is often given 2 weeks later to prevent reinfection'
  ],
  lifestyle: [
    'Washing hands frequently, especially after using the toilet and before eating',
    'Keeping fingernails short and clean',
    'Discouraging nail-biting and scratching the anal area',
    'Washing bedding, towels, and clothing in hot water',
    'Bathing or showering daily, especially in the morning',
    'Cleaning and vacuuming the house thoroughly, especially bedrooms',
    'Changing underwear daily',
    'Educating children about hygiene'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'thrush',
  name: 'Thrush',
  category: 'Fungal',
  description: 'A fungal infection caused by an overgrowth of Candida yeast. It can affect the mouth (oral thrush), the vagina (vaginal candidiasis), the skin, and other mucous membranes. Thrush is common in babies, older adults, people with weakened immune systems, and those taking certain medications (e.g., antibiotics, corticosteroids).',
  symptoms: [
    'Oral thrush: White patches on the tongue, inner cheeks, gums, tonsils, or roof of the mouth that can be scraped off, redness or soreness, pain when eating or swallowing, cracking at the corners of the mouth, loss of taste',
    'Vaginal candidiasis: Itching and irritation in the vagina and vulva, burning sensation, especially during intercourse or urination, redness and swelling of the vulva, vaginal pain and soreness, vaginal rash, thick, white, odorless discharge with a cottage cheese appearance',
    'Cutaneous candidiasis: Red rash in skin folds (e.g., under the breasts, groin, armpits), itching, small red pustules'
  ],
  relatedParameters: [
    {
      id: 'KOH_PREP',
      value: 'Budding yeast',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Budding yeast',
      description: 'KOH preparation of scrapings from the affected area shows budding yeast cells and pseudohyphae'
    },
    {
      id: 'FUNGAL_CULTURE',
      value: 'Candida species',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Candida species',
      description: 'Fungal culture may grow Candida species, most commonly Candida albicans'
    },
    {
      id: 'GRAM_STAIN',
      value: 'Gram-positive yeast',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Gram-positive yeast',
      description: 'Gram stain of scrapings or discharge may show Gram-positive budding yeast cells and pseudohyphae'
    }
  ],
  medications: [
    'Oral thrush: Antifungal mouthwash (e.g., nystatin), lozenges (e.g., clotrimazole), or oral antifungal medication (e.g., fluconazole)',
    'Vaginal candidiasis: Antifungal creams, ointments, tablets, or suppositories (e.g., miconazole, clotrimazole, terconazole), or a single dose of oral fluconazole',
    'Cutaneous candidiasis: Topical antifungal creams or powders (e.g., nystatin, clotrimazole, ketoconazole)'
  ],
  lifestyle: [
    'Good oral hygiene (e.g., brushing teeth twice a day, flossing daily, using a soft-bristled toothbrush)',
    'Rinsing the mouth after using inhaled corticosteroids',
    'Limiting sugar and yeast intake',
    'Keeping skin folds clean and dry',
    'Wearing loose-fitting, breathable clothing',
    'For breastfeeding mothers with thrush on their nipples: Applying antifungal cream to the nipples after each feeding, sterilizing pacifiers and bottle nipples, and washing bras in hot water',
    'Controlling blood sugar levels in people with diabetes'
  ],
  diet: [
    'Limiting sugar and refined carbohydrates, which can promote yeast overgrowth',
    'Eating yogurt with live and active cultures, which may help restore the balance of bacteria and yeast in the body',
    'Adequate hydration'
  ]
},
{
  id: 'thyroid-cancer',
  name: 'Thyroid Cancer',
  category: 'Oncological',
  description: 'Cancer that develops in the thyroid gland, a small butterfly-shaped gland located at the base of the neck. There are several types of thyroid cancer, including papillary, follicular, medullary, and anaplastic. Thyroid cancer is often treatable, especially when detected early.',
  symptoms: [
    'A lump or nodule in the neck',
    'Swelling in the neck',
    'Pain in the front of the neck, sometimes going up to the ears',
    'Hoarseness or other voice changes that do not go away',
    'Trouble swallowing',
    'Trouble breathing',
    'A persistent cough'
  ],
  relatedParameters: [
    {
      id: 'THYROID_ULTRASOUND',
      value: 'Thyroid nodule',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Thyroid nodule',
      description: 'Thyroid ultrasound shows a hypoechoic nodule with suspicious features (e.g., microcalcifications, irregular margins, taller-than-wide shape)'
    },
    {
      id: 'FNA_BIOPSY',
      value: 'Malignant cells',
      unit: '',
      normalRange: { min: 'Benign', max: 'Benign' },
      status: 'Malignant cells',
      description: 'Fine-needle aspiration (FNA) biopsy of the thyroid nodule shows malignant cells (e.g., papillary thyroid cancer, follicular thyroid cancer, medullary thyroid cancer, anaplastic thyroid cancer)'
    },
    {
      id: 'TSH',
      status: 'NORMAL',
      description: 'Thyroid-stimulating hormone (TSH) is usually normal but may be suppressed in some cases'
    },
    {
      id: 'THYROGLOBULIN',
      status: 'HIGH',
      description: 'Thyroglobulin may be elevated, especially after thyroidectomy, and is used as a tumor marker for differentiated thyroid cancers (papillary and follicular)'
    },
    {
      id: 'CALCITONIN',
      status: 'HIGH',
      description: 'Calcitonin is elevated in medullary thyroid cancer'
    },
    {
      id: 'CEA',
      status: 'HIGH',
      description: 'Carcinoembryonic antigen (CEA) may be elevated in medullary thyroid cancer'
    },
    {
      id: 'GENETIC_TESTING',
      value: 'Specific mutations',
      unit: '',
      normalRange: { min: 'No mutations', max: 'No mutations' },
      status: 'Specific mutations',
      description: 'Genetic testing may reveal specific mutations associated with certain types of thyroid cancer (e.g., BRAF mutation in papillary thyroid cancer, RET mutation in medullary thyroid cancer)'
    }
  ],
  medications: [
    'Levothyroxine (thyroid hormone replacement) is given after thyroidectomy to replace the hormones normally produced by the thyroid and to suppress TSH, which can stimulate the growth of any remaining cancer cells',
    'Radioactive iodine (RAI) therapy may be used after surgery for papillary or follicular thyroid cancer to destroy any remaining thyroid tissue and cancer cells',
    'Targeted therapy (e.g., sorafenib, lenvatinib, vandetanib, cabozantinib) may be used for advanced or metastatic thyroid cancer that does not respond to RAI',
    'Chemotherapy is rarely used but may be considered for anaplastic thyroid cancer'
  ],
  lifestyle: [
    'Regular follow-up with an endocrinologist or oncologist for surveillance (e.g., physical exams, neck ultrasound, thyroglobulin measurements, whole-body iodine scans)',
    'Taking thyroid hormone replacement medication as prescribed',
    'Maintaining a healthy lifestyle (e.g., exercise, healthy diet)',
    'Psychosocial support'
  ],
  diet: [
    'A low-iodine diet may be recommended before radioactive iodine therapy',
    'Generally not directly related to diet, but a healthy diet is important during and after treatment'
  ]
},
{
  id: 'tonsillitis',
  name: 'Tonsillitis',
  category: 'Respiratory',
  description: 'Inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat. Tonsillitis is usually caused by a viral infection but can also be caused by a bacterial infection, most commonly group A Streptococcus (strep throat).',
  symptoms: [
    'Sore throat',
    'Red, swollen tonsils',
    'White or yellow patches or coating on the tonsils',
    'Painful swallowing',
    'Fever',
    'Swollen lymph nodes in the neck',
    'Hoarse, muffled, or scratchy voice',
    'Bad breath',
    'Headache',
    'Stomach ache, especially in children'
  ],
  relatedParameters: [
    {
      id: 'THROAT_EXAM',
      value: 'Erythema, exudate',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Erythema, exudate',
      description: 'Physical examination reveals red, swollen tonsils with or without exudate'
    },
    {
      id: 'RAPID_STREP_TEST',
      value: 'Positive/Negative',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive/Negative',
      description: 'Rapid antigen detection test for group A Streptococcus may be positive or negative'
    },
    {
      id: 'THROAT_CULTURE',
      value: 'Bacterial growth',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Bacterial growth',
      description: 'Throat culture may grow group A Streptococcus or other bacteria'
    },
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'White blood cell count may be elevated, especially in bacterial tonsillitis'
    }
  ],
  medications: [
    'Antibiotics (e.g., penicillin, amoxicillin) are prescribed if the tonsillitis is caused by a bacterial infection, such as strep throat',
    'Over-the-counter pain relievers (e.g., acetaminophen, ibuprofen) can help relieve sore throat pain and fever',
    'Throat lozenges or sprays may provide temporary relief'
  ],
  lifestyle: [
    'Rest',
    'Drinking plenty of fluids to stay hydrated and soothe the throat',
    'Gargling with warm salt water several times a day',
    'Using a humidifier to add moisture to the air',
    'Avoiding irritants, such as smoke',
    'Eating soft foods that are easy to swallow',
    'Using a cool-mist vaporizer or taking a steamy shower to help relieve congestion'
  ],
  diet: [
    'Soft foods (e.g., soup, mashed potatoes, scrambled eggs, yogurt, smoothies) that are easy to swallow and do not irritate the throat',
    'Cold foods and drinks (e.g., popsicles, ice cream, chilled beverages) may help numb the throat and provide temporary pain relief',
    'Avoiding acidic, spicy, or crunchy foods that may irritate the throat'
  ]
  },
  {
  id: 'tourettes-syndrome',
  name: 'Tourette’s Syndrome',
  category: 'Neurological',
  description: 'A neurodevelopmental disorder that involves repetitive, involuntary movements and vocalizations called tics. The tics usually begin in childhood and may change in type, frequency, and severity over time. Tourette\'s syndrome is part of a spectrum of tic disorders that includes persistent (chronic) motor or vocal tic disorder and provisional tic disorder.',
  symptoms: [
    'Motor tics: Sudden, brief, repetitive movements, such as eye blinking, facial grimacing, head jerking, shoulder shrugging, and arm or leg movements',
    'Vocal tics: Repetitive throat clearing, sniffing, humming, grunting, or more complex sounds like words or phrases',
    'Simple tics: Involve only a few body parts (e.g., eye blinking, nose twitching, throat clearing)',
    'Complex tics: Involve several body parts or a combination of movements or sounds (e.g., hopping, twirling, repeating words or phrases)',
    'Tics often worsen with stress, anxiety, excitement, or fatigue',
    'Premonitory urge: An uncomfortable sensation that precedes the tic and is relieved by performing the tic',
    'Suppressibility: Tics can often be suppressed temporarily, but this usually leads to a buildup of tension and a subsequent increase in tics',
    'Echolalia (repeating other people\'s words or phrases)',
    'Palilalia (repeating one\'s own words or phrases)',
    'Coprolalia (involuntary use of obscene or socially inappropriate words or phrases) - occurs in a minority of individuals with Tourette\'s syndrome',
    'Comorbid conditions: Attention-deficit/hyperactivity disorder (ADHD), obsessive-compulsive disorder (OCD), anxiety, depression, learning disabilities'
  ],
  relatedParameters: [
    {
      id: 'CLINICAL_EVALUATION',
      value: 'Presence of tics',
      unit: '',
      normalRange: { min: 'No tics', max: 'No tics' },
      status: 'Presence of tics',
      description: 'Clinical evaluation based on history and observation of tics is the primary means of diagnosis'
    },
    {
      id: 'YALE_GLOBAL_TIC_SEVERITY_SCALE',
      value: 'Tic severity score',
      unit: '',
      normalRange: { min: '0', max: '0' },
      status: 'Tic severity score',
      description: 'The Yale Global Tic Severity Scale (YGTSS) is a commonly used clinician-rated instrument to assess tic severity'
    }
  ],
  medications: [
    'Alpha-2 adrenergic agonists (e.g., clonidine, guanfacine) are often considered first-line medications, especially when tics are mild or when ADHD is also present',
    'Antipsychotics (e.g., risperidone, aripiprazole, haloperidol, pimozide) can be effective in reducing tic severity but may have more side effects',
    'Dopamine depleters (e.g., tetrabenazine) may be used for severe tics that are not responsive to other medications',
    'Botulinum toxin injections can be helpful for specific, localized tics (e.g., focal dystonia)'
  ],
  lifestyle: [
    'Comprehensive Behavioral Intervention for Tics (CBIT), which includes habit reversal training and exposure and response prevention, is an effective non-pharmacological treatment',
    'Psychoeducation for the individual and family members about Tourette\'s syndrome',
    'Stress management techniques (e.g., relaxation exercises, mindfulness)',
    'Regular exercise',
    'Adequate sleep',
    'Supportive and understanding environment at school and home',
    'Social skills training if needed',
    'Accommodations at school or work (e.g., allowing the individual to leave the classroom when tics are severe, providing a quiet workspace)'
  ],
  diet: [
    'Generally not directly related to diet, but some individuals may find that certain foods or substances (e.g., caffeine, artificial sweeteners) exacerbate their tics'
  ]
},
{
  id: 'transient-ischaemic-attack',
  name: 'Transient Ischaemic Attack (TIA)',
  category: 'Neurological',
  description: 'Often called a "mini-stroke," is a temporary period of symptoms similar to those of a stroke. A TIA usually lasts only a few minutes and doesn\'t cause permanent damage. TIAs are caused by a temporary decrease in blood supply to part of the brain, often due to a blood clot. TIAs are a warning sign for future stroke risk.',
  symptoms: [
    'Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body',
    'Sudden confusion, trouble speaking, or difficulty understanding speech',
    'Sudden trouble seeing in one or both eyes',
    'Sudden trouble walking, dizziness, loss of balance, or lack of coordination',
    'Sudden severe headache with no known cause',
    'Symptoms typically last for a few minutes to a few hours and resolve completely within 24 hours'
  ],
  relatedParameters: [
    {
      id: 'CT_BRAIN',
      value: 'Normal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Normal',
      description: 'Non-contrast CT scan of the brain is usually normal in TIA but is important to rule out hemorrhage or other causes'
    },
    {
      id: 'MRI_BRAIN',
      value: 'May show small areas of restricted diffusion',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'May show small areas of restricted diffusion',
      description: 'MRI of the brain, including diffusion-weighted imaging (DWI), may show small areas of restricted diffusion in up to 50% of patients with TIA, but these often resolve'
    },
    {
      id: 'CAROTID_ULTRASOUND',
      value: 'Stenosis',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Stenosis',
      description: 'Carotid duplex ultrasound may show stenosis or occlusion of the carotid arteries'
    },
    {
      id: 'MRA_BRAIN_NECK',
      value: 'Stenosis',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Stenosis',
      description: 'Magnetic resonance angiography (MRA) or CT angiography (CTA) of the head and neck can evaluate for stenosis or occlusion of intracranial and extracranial vessels'
    },
    {
      id: 'ECG',
      value: 'Atrial fibrillation',
      unit: '',
      normalRange: { min: 'Normal sinus rhythm', max: 'Normal sinus rhythm' },
      status: 'Atrial fibrillation',
      description: 'Electrocardiogram (ECG) may reveal atrial fibrillation or other arrhythmias'
    },
    {
      id: 'ECHOCARDIOGRAM',
      value: 'Cardiac source of emboli',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Cardiac source of emboli',
      description: 'Echocardiogram may identify a cardiac source of emboli (e.g., patent foramen ovale, left atrial thrombus, valvular disease)'
    }
  ],
  medications: [
    'Antiplatelet agents (e.g., aspirin, clopidogrel, aspirin-dipyridamole) are the cornerstone of medical management after TIA to prevent future stroke',
    'Anticoagulants (e.g., warfarin, dabigatran, rivaroxaban, apixaban) are indicated if the TIA is due to atrial fibrillation or another cardioembolic source',
    'Statins (e.g., atorvastatin, rosuvastatin) are recommended for all patients with TIA, regardless of cholesterol levels, to reduce the risk of stroke',
    'Antihypertensive medications (e.g., ACE inhibitors, ARBs, thiazide diuretics) are used to control blood pressure'
  ],
  lifestyle: [
    'Control of vascular risk factors is crucial to prevent future stroke:',
    'Blood pressure control',
    'Cholesterol management',
    'Diabetes management',
    'Smoking cessation',
    'Limiting alcohol consumption',
    'Regular exercise',
    'Healthy diet (e.g., Mediterranean diet)',
    'Weight management',
    'Carotid endarterectomy or carotid artery stenting may be considered for patients with symptomatic high-grade carotid stenosis'
  ],
  diet: [
    'A heart-healthy diet, such as the Mediterranean diet, is recommended. This includes:',
    'High intake of fruits, vegetables, whole grains, legumes, and nuts',
    'Moderate intake of fish and poultry',
    'Low intake of red meat, processed foods, and sweets',
    'Use of olive oil as the primary source of fat',
    'Low sodium intake'
  ]
},
{
  id: 'transverse-myelitis',
  name: 'Transverse Myelitis',
  category: 'Neurological',
  description: 'An inflammatory disorder that affects the spinal cord, causing damage to the myelin sheath, the protective covering of nerve fibers. This leads to a disruption in the communication between the nerves in the spinal cord and the rest of the body. Transverse myelitis can occur on its own or as part of another condition, such as multiple sclerosis, neuromyelitis optica, or lupus.',
  symptoms: [
    'Pain in the back, neck, chest, or abdomen',
    'Weakness in the arms or legs',
    'Numbness, tingling, or other abnormal sensations (e.g., burning, coldness) in the arms, legs, or around the torso',
    'Bowel and bladder dysfunction (e.g., urinary urgency, frequency, incontinence, constipation)',
    'Muscle spasms',
    'Sexual dysfunction',
    'Symptoms usually develop over hours to days and may affect one or both sides of the body',
    'The level of the spinal cord affected determines which parts of the body are involved'
  ],
  relatedParameters: [
    {
      id: 'MRI_SPINE',
      value: 'Spinal cord lesion',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Spinal cord lesion',
      description: 'MRI of the spine with contrast shows a T2 hyperintense lesion extending over one or more spinal cord segments, often with gadolinium enhancement'
    },
    {
      id: 'CSF_ANALYSIS',
      value: 'Elevated protein',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated protein',
      description: 'Cerebrospinal fluid (CSF) analysis may show elevated protein, increased white blood cell count (pleocytosis), and the presence of oligoclonal bands'
    },
    {
      id: 'BLOOD_TESTS',
      value: 'Autoantibodies',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Autoantibodies',
      description: 'Blood tests may be performed to look for underlying causes or associated conditions (e.g., NMO-IgG/aquaporin-4 antibody for neuromyelitis optica, ANA for lupus)'
    }
  ],
  medications: [
    'Intravenous corticosteroids (e.g., methylprednisolone) are often used as a first-line treatment to reduce inflammation in the spinal cord',
    'Plasma exchange (plasmapheresis) may be considered for patients who do not respond to corticosteroids',
    'Intravenous immunoglobulin (IVIg) is another option for treatment',
    'Immunosuppressants (e.g., cyclophosphamide, azathioprine, mycophenolate mofetil) may be used for recurrent or severe cases or when transverse myelitis is associated with an underlying autoimmune disease',
    'Pain medications (e.g., gabapentin, pregabalin, duloxetine) for neuropathic pain',
    'Muscle relaxants (e.g., baclofen, tizanidine) for spasticity',
    'Medications for bladder dysfunction (e.g., oxybutynin, tolterodine) or bowel dysfunction (e.g., stool softeners, laxatives)'
  ],
  lifestyle: [
    'Physical therapy to improve strength, coordination, and mobility',
    'Occupational therapy to help with activities of daily living',
    'Rehabilitation to address any long-term neurological deficits',
    'Assistive devices (e.g., cane, walker, wheelchair) if needed',
    'Bladder and bowel management programs',
    'Psychological support and counseling',
    'Regular exercise as tolerated',
    'Healthy diet'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet is important for overall health and well-being'
  ]
},
{
  id: 'trichomonas-infection',
  name: 'Trichomonas Infection',
  category: 'Infectious',
  description: 'Also known as trichomoniasis, is a common sexually transmitted infection (STI) caused by the protozoan parasite Trichomonas vaginalis. It is the most common curable STI in the United States. Trichomoniasis can increase the risk of getting or spreading other STIs, including HIV.',
  symptoms: [
    'Many people with trichomoniasis have no symptoms, especially men',
    'Women: Vaginal discharge (often thin, frothy, yellow-green, and foul-smelling), vaginal itching or irritation, pain during intercourse, pain or discomfort during urination, lower abdominal pain (rare)',
    'Men: Itching or irritation inside the penis, burning after urination or ejaculation, discharge from the penis',
    'Symptoms usually appear within 5 to 28 days of infection but can develop later'
  ],
  relatedParameters: [
    {
      id: 'WET_MOUNT',
      value: 'Motile trichomonads',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Motile trichomonads',
      description: 'Microscopic examination of a wet mount preparation of vaginal fluid shows motile, flagellated trichomonads'
    },
    {
      id: 'NAAT',
      value: 'T. vaginalis DNA',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'T. vaginalis DNA',
      description: 'Nucleic acid amplification tests (NAATs) are the most sensitive tests for trichomoniasis and can detect T. vaginalis DNA in vaginal, urethral, or urine specimens'
    },
    {
      id: 'VAGINAL_PH',
      status: 'HIGH',
      description: 'Vaginal pH is often elevated (>4.5) in women with trichomoniasis'
    },
    {
      id: 'CULTURE',
      value: 'T. vaginalis',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'T. vaginalis',
      description: 'Culture for T. vaginalis can be performed but is less sensitive than NAATs'
    }
  ],
  medications: [
    'Metronidazole (oral) is the treatment of choice for trichomoniasis',
    'Tinidazole (oral) is an alternative treatment',
    'Sexual partners should be treated at the same time to prevent reinfection, even if they have no symptoms',
    'Retesting is recommended for all sexually active women within 3 months of treatment due to high rates of reinfection'
  ],
  lifestyle: [
    'Safe sex practices (e.g., consistent and correct use of condoms) can reduce the risk of trichomoniasis and other STIs',
    'Abstaining from sexual intercourse until treatment is completed and symptoms have resolved',
    'Avoiding douching, which can disrupt the normal vaginal flora and increase the risk of infection',
    'Regular STI screening for sexually active individuals, especially those with multiple partners',
    'Partner notification and treatment'
  ],
  diet: [
    'Generally not directly related to diet'
  ]
},
{
  id: 'trigeminal-neuralgia',
  name: 'Trigeminal Neuralgia',
  category: 'Neurological',
  description: 'Also known as tic douloureux, is a chronic pain condition that affects the trigeminal nerve, which carries sensation from the face to the brain. Trigeminal neuralgia causes episodes of sudden, severe, shock-like or stabbing facial pain that typically last from a few seconds to a few minutes. The pain is usually on one side of the face and can be triggered by mild stimulation, such as chewing, talking, or touching the face.',
  symptoms: [
    'Episodes of severe, shooting, or stabbing pain in the face, often described as an electric shock',
    'Pain usually affects one side of the face at a time',
    'Pain may be triggered by mild stimulation of the face, such as eating, speaking, brushing teeth, washing the face, or exposure to wind',
    'Attacks may occur several times a day or week, followed by periods of remission',
    'Pain is typically localized to the area of the face supplied by the affected branch of the trigeminal nerve (e.g., cheek, jaw, teeth, gums, forehead)',
    'The pain may become more frequent or intense over time'
  ],
  relatedParameters: [
    {
      id: 'NEUROLOGICAL_EXAM',
      value: 'Normal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Normal',
      description: 'Neurological examination is usually normal in trigeminal neuralgia'
    },
    {
      id: 'MRI_BRAIN',
      value: 'May show vascular compression',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'May show vascular compression',
      description: 'MRI of the brain with and without contrast may show a blood vessel compressing the trigeminal nerve, but is often normal'
    },
    {
      id: 'TRIGEMINAL_REFLEX_TESTING',
      value: 'Abnormal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal',
      description: 'Trigeminal reflex testing (e.g., blink reflex) may be abnormal in some cases'
    }
  ],
  medications: [
    'Carbamazepine is often the first-line medication for trigeminal neuralgia',
    'Oxcarbazepine is a related medication that may be better tolerated than carbamazepine',
    'Other anticonvulsants (e.g., gabapentin, lamotrigine, phenytoin) may be used alone or in combination with other medications',
    'Baclofen, a muscle relaxant, can be helpful in some cases',
    'Tricyclic antidepressants (e.g., amitriptyline) may be used for pain management'
  ],
  lifestyle: [
    'Identifying and avoiding triggers that provoke pain attacks, if possible',
    'Using a soft toothbrush and lukewarm water for oral hygiene',
    'Eating soft foods that require less chewing',
    'Protecting the face from cold or wind exposure',
    'Stress management techniques, such as relaxation exercises or meditation',
    'Surgical procedures (e.g., microvascular decompression, gamma knife radiosurgery, percutaneous rhizotomy) may be considered for patients who do not respond to medications or who experience intolerable side effects'
  ],
  diet: [
    'Generally not directly related to diet, but eating soft, lukewarm foods may help avoid triggering pain'
  ]
},
{
  id: 'tuberculosis',
  name: 'Tuberculosis (TB)',
  category: 'Infectious',
  description: 'A contagious infection caused by the bacterium Mycobacterium tuberculosis. TB usually attacks the lungs, but it can also affect other parts of the body, such as the lymph nodes, bones, joints, kidneys, and brain. There are two types of TB conditions: latent TB infection (LTBI) and active TB disease.',
  symptoms: [
    'Active TB disease (pulmonary):',
    'A persistent cough that lasts 3 weeks or longer',
    'Coughing up blood or sputum (phlegm)',
    'Chest pain',
    'Shortness of breath',
    'Fever',
    'Night sweats',
    'Weight loss',
    'Loss of appetite',
    'Fatigue',
    'Active TB disease (extrapulmonary): Symptoms vary depending on the part of the body affected (e.g., swollen lymph nodes, bone pain, headache, confusion)',
    'Latent TB infection: No symptoms; individuals with LTBI are not infectious'
  ],
  relatedParameters: [
    {
      id: 'TST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Tuberculin skin test (TST) shows a positive reaction (induration size depends on risk factors)'
    },
    {
      id: 'IGRA',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Interferon-gamma release assay (IGRA) is positive, indicating exposure to M. tuberculosis'
    },
    {
      id: 'CHEST_X_RAY',
      value: 'Abnormalities',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormalities',
      description: 'Chest X-ray may show abnormalities suggestive of TB (e.g., infiltrates, cavities, nodules, especially in the upper lobes)'
    },
    {
      id: 'SPUTUM_SMEAR',
      value: 'AFB positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'AFB positive',
      description: 'Sputum smear microscopy is positive for acid-fast bacilli (AFB)'
    },
    {
      id: 'SPUTUM_CULTURE',
      value: 'M. tuberculosis',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'M. tuberculosis',
      description: 'Sputum culture grows M. tuberculosis, confirming the diagnosis of active TB disease'
    },
    {
      id: 'NAAT_TB',
      value: 'M. tuberculosis DNA',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'M. tuberculosis DNA',
      description: 'Nucleic acid amplification test (NAAT) for TB detects M. tuberculosis DNA in respiratory specimens'
    }
  ],
  medications: [
    'Active TB disease is treated with a combination of antibiotics for 6-9 months or longer. The most common regimen includes:',
    'Isoniazid',
    'Rifampin',
    'Pyrazinamide',
    'Ethambutol',
    'Directly observed therapy (DOT) is recommended to ensure adherence to treatment',
    'Drug susceptibility testing should be performed to guide treatment',
    'Multidrug-resistant TB (MDR-TB) and extensively drug-resistant TB (XDR-TB) require longer treatment with second-line drugs',
    'Latent TB infection is treated with shorter regimens to prevent progression to active disease (e.g., isoniazid for 6-9 months, rifampin for 4 months, or isoniazid and rifapentine weekly for 3 months)'
  ],
  lifestyle: [
    'Isolation of individuals with active pulmonary TB in a negative-pressure room until they are no longer infectious (usually after 2-3 weeks of effective treatment)',
    'Wearing a surgical mask when outside the isolation room',
    'Covering the mouth and nose when coughing or sneezing',
    'Ensuring adequate ventilation in the home',
    'Adherence to the full course of treatment is crucial to prevent drug resistance and relapse',
    'Contact investigation to identify and evaluate individuals who have been exposed to a person with infectious TB',
    'BCG vaccination can prevent severe forms of TB in children but is not routinely recommended in the United States'
  ],
  diet: [
    'A healthy, balanced diet is important to support the immune system and maintain weight during TB treatment. This includes:',
    'Adequate calorie and protein intake',
    'Foods rich in vitamins and minerals, especially vitamin A, vitamin C, vitamin D, zinc, and iron',
    'Small, frequent meals if appetite is poor',
    'Nutritional counseling and support if needed'
  ]
  },
  {
  id: 'ulcerative-colitis',
  name: 'Ulcerative Colitis',
  category: 'Gastrointestinal',
  description: 'A chronic inflammatory bowel disease (IBD) that causes inflammation and ulcers in the lining of the large intestine (colon) and rectum. Ulcerative colitis typically begins in the rectum and may extend continuously to involve part or all of the colon. The inflammation causes diarrhea, often bloody, abdominal pain and cramping, and an urgent need to have a bowel movement.',
  symptoms: [
    'Diarrhea, often with blood or pus',
    'Abdominal pain and cramping',
    'Rectal pain',
    'Rectal bleeding',
    'Urgency to defecate',
    'Inability to defecate despite urgency',
    'Weight loss',
    'Fatigue',
    'Fever',
    'Anemia',
    'In children, failure to grow'
  ],
  relatedParameters: [
    {
      id: 'COLONOSCOPY',
      value: 'Inflammation, ulcers',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Inflammation, ulcers',
      description: 'Colonoscopy shows continuous inflammation starting in the rectum and extending proximally, with loss of vascular pattern, granularity, friability, erosions, and ulcerations'
    },
    {
      id: 'BIOPSY',
      value: 'Chronic inflammation',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Chronic inflammation',
      description: 'Biopsies of the colon show chronic inflammation with crypt distortion, crypt abscesses, and infiltration of inflammatory cells in the lamina propria'
    },
    {
      id: 'STOOL_TESTS',
      value: 'Elevated fecal calprotectin',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated fecal calprotectin',
      description: 'Stool tests may show elevated fecal calprotectin or lactoferrin, markers of intestinal inflammation'
    },
    {
      id: 'BLOOD_TESTS',
      value: 'Anemia, elevated ESR/CRP',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Anemia, elevated ESR/CRP',
      description: 'Blood tests may show anemia, elevated erythrocyte sedimentation rate (ESR), and C-reactive protein (CRP)'
    },
    {
      id: 'P_ANCA',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Perinuclear anti-neutrophil cytoplasmic antibodies (p-ANCA) may be positive in up to 70% of patients with ulcerative colitis'
    }
  ],
  medications: [
    'Aminosalicylates (e.g., mesalamine, sulfasalazine) are often used as first-line therapy for mild to moderate ulcerative colitis',
    'Corticosteroids (e.g., prednisone, budesonide) can help reduce inflammation during flare-ups but are not for long-term use',
    'Immunomodulators (e.g., azathioprine, 6-mercaptopurine) can help reduce the need for corticosteroids and maintain remission',
    'Biologics (e.g., infliximab, adalimumab, golimumab, vedolizumab, ustekinumab) target specific proteins involved in the inflammatory process',
    'JAK inhibitors (e.g., tofacitinib) block pathways involved in inflammation',
    'Surgery (e.g., proctocolectomy with ileal pouch-anal anastomosis or permanent ileostomy) may be necessary for severe cases or complications'
  ],
  lifestyle: [
    'Keeping a food diary to identify trigger foods',
    'Eating small, frequent meals',
    'Staying hydrated',
    'Stress management techniques (e.g., exercise, relaxation exercises, meditation)',
    'Regular exercise',
    'Quitting smoking',
    'Psychological support and counseling',
    'Regular follow-up with a gastroenterologist'
  ],
  diet: [
    'During flare-ups, a low-fiber, low-residue diet may help reduce symptoms',
    'Avoidance of potential trigger foods (e.g., dairy products, caffeine, alcohol, spicy foods, high-fat foods) may be helpful for some individuals',
    'Adequate calorie and nutrient intake is important to prevent weight loss and malnutrition',
    'In severe cases, parenteral nutrition (intravenous feeding) may be necessary'
  ]
  },
  {
  id: 'urinary-incontinence',
  name: 'Urinary Incontinence',
  category: 'Urological',
  description: 'The loss of bladder control, resulting in unintentional leakage of urine. It is a common problem that can range from occasional leaking when coughing or sneezing to a sudden, strong urge to urinate that is difficult to control. There are several types of urinary incontinence, including stress incontinence, urge incontinence, overflow incontinence, and mixed incontinence.',
  symptoms: [
    'Stress incontinence: Leakage of urine when pressure is exerted on the bladder by coughing, sneezing, laughing, exercising, or lifting something heavy',
    'Urge incontinence: A sudden, intense urge to urinate followed by an involuntary loss of urine; may need to urinate frequently, including throughout the night (nocturia)',
    'Overflow incontinence: Frequent or constant dribbling of urine due to a bladder that doesn\'t empty completely',
    'Functional incontinence: Physical or mental impairments prevent timely trips to the toilet (e.g., severe arthritis, dementia)',
    'Mixed incontinence: A combination of more than one type of urinary incontinence, often stress and urge incontinence'
  ],
  relatedParameters: [
    {
      id: 'URINALYSIS',
      value: 'Normal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Normal',
      description: 'Urinalysis is usually normal but may be performed to rule out infection or other conditions'
    },
    {
      id: 'POST_VOID_RESIDUAL',
      value: 'Elevated',
      unit: 'mL',
      normalRange: { min: '<50', max: '<50' },
      status: 'Elevated',
      description: 'Post-void residual (PVR) volume measurement may show an elevated PVR in overflow incontinence'
    },
    {
      id: 'URODYNAMIC_TESTING',
      value: 'Abnormal bladder function',
      unit: '',
      normalRange: { min: 'Normal bladder function', max: 'Normal bladder function' },
      status: 'Abnormal bladder function',
      description: 'Urodynamic testing can help determine the type and cause of urinary incontinence by assessing bladder function, bladder capacity, and urine flow'
    },
    {
      id: 'CYSTOSCOPY',
      value: 'Abnormalities',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormalities',
      description: 'Cystoscopy may be performed to examine the bladder and urethra for any abnormalities'
    }
  ],
  medications: [
    'Anticholinergics (e.g., oxybutynin, tolterodine, solifenacin, darifenacin) can help relax the bladder muscle and increase bladder capacity, particularly for urge incontinence',
    'Mirabegron, a beta-3 adrenergic agonist, can also help relax the bladder muscle',
    'Topical estrogen may be helpful for postmenopausal women with stress incontinence',
    'Imipramine, a tricyclic antidepressant, may be used for mixed incontinence',
    'Alpha-blockers (e.g., tamsulosin, alfuzosin) may be used for men with urge or overflow incontinence associated with benign prostatic hyperplasia (BPH)'
  ],
  lifestyle: [
    'Pelvic floor muscle exercises (Kegel exercises) to strengthen the muscles that help control urination, particularly for stress incontinence',
    'Bladder training techniques, such as delaying urination and double voiding, to help regain control over the bladder, particularly for urge incontinence',
    'Scheduled toilet trips',
    'Weight loss if overweight or obese',
    'Avoiding bladder irritants (e.g., caffeine, alcohol, artificial sweeteners)',
    'Managing fluid intake',
    'Quitting smoking',
    'Treating chronic cough',
    'Using absorbent pads or protective garments',
    'Maintaining a healthy bowel regimen to avoid constipation'
  ],
  diet: [
    'Limiting or avoiding bladder irritants, such as:',
    'Caffeinated beverages (e.g., coffee, tea, cola)',
    'Alcohol',
    'Carbonated drinks',
    'Artificial sweeteners',
    'Spicy foods',
    'Citrus fruits and juices',
    'Tomato-based products',
    'Maintaining adequate fluid intake to prevent dehydration and concentrated urine, which can irritate the bladder',
    'Eating a high-fiber diet to prevent constipation'
  ]
},
{
  id: 'urinary-tract-infection',
  name: 'Urinary Tract Infection (UTI)',
  category: 'Infectious',
  description: 'An infection in any part of the urinary system, including the kidneys, ureters, bladder, and urethra. Most UTIs involve the lower urinary tract — the bladder (cystitis) and the urethra (urethritis). Women are at greater risk of developing a UTI than men. UTIs are usually caused by bacteria, most commonly Escherichia coli (E. coli).',
  symptoms: [
    'A strong, persistent urge to urinate',
    'A burning sensation when urinating',
    'Passing frequent, small amounts of urine',
    'Cloudy urine',
    'Red, bright pink, or cola-colored urine (signs of blood in the urine)',
    'Strong-smelling urine',
    'Pelvic pain, in women',
    'Rectal pain, in men',
    'Lower back or flank pain, fever, chills, nausea, and vomiting may indicate a kidney infection (pyelonephritis)'
  ],
  relatedParameters: [
    {
      id: 'URINALYSIS',
      value: 'Pyuria, bacteriuria',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Pyuria, bacteriuria',
      description: 'Urinalysis shows pyuria (presence of white blood cells) and bacteriuria (presence of bacteria)'
    },
    {
      id: 'URINE_CULTURE',
      value: 'Bacterial growth',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Bacterial growth',
      description: 'Urine culture grows a significant number of bacteria, usually >10^5 colony-forming units (CFU)/mL of a single uropathogen'
    },
    {
      id: 'NITRITE_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Urine dipstick test may be positive for nitrite, indicating the presence of certain bacteria that convert nitrate to nitrite'
    },
    {
      id: 'LEUKOCYTE_ESTERASE',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Urine dipstick test may be positive for leukocyte esterase, an enzyme produced by white blood cells'
    }
  ],
  medications: [
    'Antibiotics are the mainstay of treatment for UTIs. Commonly used antibiotics include:',
    'Trimethoprim-sulfamethoxazole',
    'Nitrofurantoin',
    'Fosfomycin',
    'Cephalexin',
    'Ceftriaxone',
    'Fluoroquinolones (e.g., ciprofloxacin, levofloxacin) are generally reserved for complicated UTIs or pyelonephritis',
    'The choice of antibiotic and duration of treatment depend on the type of UTI, the patient\'s history, and local antibiotic resistance patterns',
    'Phenazopyridine may be used for symptomatic relief of pain, burning, and urgency'
  ],
  lifestyle: [
    'Drinking plenty of fluids, especially water, to help flush bacteria out of the urinary tract',
    'Wiping from front to back after using the toilet to prevent the spread of bacteria from the anal region to the urethra',
    'Urinating soon after sexual intercourse',
    'Avoiding potentially irritating feminine products, such as douches, sprays, and powders, in the genital area',
    'Cranberry products (e.g., juice, tablets) may help prevent recurrent UTIs in some women, but the evidence is mixed',
    'Probiotics (e.g., Lactobacillus) may help restore the normal genitourinary flora and prevent UTIs, but more research is needed'
  ],
  diet: [
    'Drinking plenty of water to help dilute urine and flush out bacteria',
    'Some studies suggest that cranberry juice or cranberry products may help prevent UTIs by inhibiting the adherence of bacteria to the bladder wall, but the evidence is not conclusive',
    'Avoiding bladder irritants, such as caffeine, alcohol, and spicy foods, may help reduce symptoms'
  ]
},
{
  id: 'vaginal-cancer',
  name: 'Vaginal Cancer',
  category: 'Oncological',
  description: 'A rare cancer that forms in the vagina, the muscular tube that connects the uterus to the outside of the body. Vaginal cancer most commonly occurs in the cells that line the surface of the vagina (squamous cell carcinoma), but it can also occur in other types of cells, such as glandular cells (adenocarcinoma). Vaginal cancer is often associated with human papillomavirus (HPV) infection.',
  symptoms: [
    'Abnormal vaginal bleeding, such as bleeding after intercourse or postmenopausal bleeding',
    'Vaginal discharge that is watery, bloody, or foul-smelling',
    'A lump or mass in the vagina',
    'Painful urination',
    'Frequent urination',
    'Constipation',
    'Pelvic pain',
    'Pain during intercourse',
    'Many women with early-stage vaginal cancer have no symptoms'
  ],
  relatedParameters: [
    {
      id: 'PAP_TEST',
      value: 'Abnormal cells',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal cells',
      description: 'Pap test may show abnormal cells, such as squamous cell carcinoma or adenocarcinoma in situ'
    },
    {
      id: 'COLPOSCOPY',
      value: 'Abnormal areas',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Abnormal areas',
      description: 'Colposcopy with biopsy may reveal abnormal areas in the vagina, which are then biopsied'
    },
    {
      id: 'BIOPSY',
      value: 'Vaginal cancer',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Vaginal cancer',
      description: 'Biopsy of the vaginal lesion confirms the diagnosis of vaginal cancer and determines the cell type (e.g., squamous cell carcinoma, adenocarcinoma, melanoma, sarcoma)'
    },
    {
      id: 'HPV_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'HPV testing may be positive for high-risk HPV types (e.g., HPV 16, 18)'
    },
    {
      id: 'IMAGING',
      value: 'Tumor extent',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor extent',
      description: 'Imaging tests, such as pelvic exam under anesthesia, cystoscopy, proctoscopy, chest X-ray, CT, MRI, and PET scan, are used to determine the extent of the tumor and stage the cancer'
    }
  ],
  medications: [
    'Chemotherapy (e.g., cisplatin, carboplatin, paclitaxel, 5-fluorouracil) may be used in combination with radiation therapy for locally advanced vaginal cancer',
    'Chemotherapy may also be used to treat metastatic vaginal cancer or recurrent disease'
  ],
  lifestyle: [
    'Regular pelvic exams and Pap tests to detect precancerous changes or early-stage vaginal cancer',
    'HPV vaccination to prevent infection with high-risk HPV types that can cause vaginal and other anogenital cancers',
    'Safe sex practices (e.g., using condoms) to reduce the risk of HPV and other sexually transmitted infections',
    'Quitting smoking, as smoking is a risk factor for vaginal cancer',
    'Follow-up with an oncologist after treatment, including regular physical exams, imaging tests, and Pap tests as needed',
    'Psychosocial support and counseling'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet is important for overall health and well-being, especially during and after cancer treatment'
  ]
},
{
  id: 'varicose-eczema',
  name: 'Varicose Eczema',
  category: 'Dermatological',
  description: 'Also known as stasis dermatitis or venous eczema, is a chronic skin condition that affects the lower legs and is often associated with varicose veins and venous insufficiency. It occurs when poor circulation in the leg veins causes increased pressure, leading to fluid leakage into the surrounding tissues and triggering an inflammatory response in the skin.',
  symptoms: [
    'Itching, especially on the lower legs',
    'Dry, scaly, or flaky skin',
    'Redness or discoloration of the skin (may appear red, brown, or purple)',
    'Swelling of the affected area',
    'Thickened, hardened skin',
    'Small, red, pinpoint spots (stasis purpura)',
    'Open sores or ulcers (venous ulcers) in advanced cases',
    'Pain or aching in the legs',
    'Varicose veins may be present'
  ],
  relatedParameters: [
    {
      id: 'SKIN_EXAM',
      value: 'Eczematous changes',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Eczematous changes',
      description: 'Physical examination shows eczematous changes on the lower legs, such as erythema, scaling, crusting, and lichenification'
    },
    {
      id: 'DOPPLER_ULTRASOUND',
      value: 'Venous insufficiency',
      unit: '',
      normalRange: { min: 'Normal venous flow', max: 'Normal venous flow' },
      status: 'Venous insufficiency',
      description: 'Doppler ultrasound of the leg veins may show venous reflux or obstruction, indicating venous insufficiency'
    }
  ],
  medications: [
    'Topical corticosteroids (e.g., hydrocortisone, betamethasone) are used to reduce inflammation and itching',
    'Emollients or moisturizers to help hydrate the skin and improve barrier function',
    'Topical calcineurin inhibitors (e.g., tacrolimus, pimecrolimus) may be used as an alternative to corticosteroids',
    'Oral antibiotics if there is a secondary bacterial infection',
    'Oral antihistamines may help relieve itching'
  ],
  lifestyle: [
    'Compression therapy with stockings or bandages to improve venous circulation and reduce swelling',
    'Elevating the legs above the level of the heart for 15-30 minutes several times a day',
    'Regular exercise, such as walking, to improve calf muscle pump function',
    'Avoiding prolonged standing or sitting',
    'Weight management if overweight or obese',
    'Keeping the skin clean and well-moisturized',
    'Avoiding known irritants or allergens',
    'Treating underlying varicose veins or venous insufficiency, if present, with procedures such as endovenous ablation, sclerotherapy, or surgery'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet is important for overall health and wound healing, especially if venous ulcers are present'
  ]
},
{
  id: 'varicose-veins',
  name: 'Varicose Veins',
  category: 'Vascular',
  description: 'Swollen, twisted, enlarged veins that are visible under the skin, most commonly affecting the legs and feet. Varicose veins occur when faulty valves in the veins allow blood to flow in the wrong direction or to pool, leading to increased pressure and vein enlargement. Varicose veins are often a cosmetic concern, but they can also cause aching, discomfort, and more serious problems.',
  symptoms: [
    'Dark purple or blue veins that appear twisted and bulging, often like cords on the legs',
    'Aching, heavy feeling in the legs',
    'Burning, throbbing, muscle cramping, and swelling in the lower legs',
    'Worsened pain after sitting or standing for a long time',
    'Itching around one or more of the veins',
    'Skin discoloration around a varicose vein',
    'In severe cases, varicose veins can lead to skin ulcers, bleeding, or blood clots'
  ],
  relatedParameters: [
    {
      id: 'PHYSICAL_EXAM',
      value: 'Visible varicose veins',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Visible varicose veins',
      description: 'Physical examination reveals visible, dilated, tortuous veins on the legs'
    },
    {
      id: 'DOPPLER_ULTRASOUND',
      value: 'Venous reflux',
      unit: '',
      normalRange: { min: 'Normal venous flow', max: 'Normal venous flow' },
      status: 'Venous reflux',
      description: 'Duplex ultrasound of the leg veins shows venous reflux (backward flow of blood) in the superficial veins, such as the great saphenous vein or small saphenous vein'
    }
  ],
  medications: [
    'Over-the-counter pain relievers, such as acetaminophen or NSAIDs, may help relieve mild pain or discomfort associated with varicose veins',
    'There are no specific medications to treat varicose veins, but addressing underlying venous insufficiency and complications is important'
  ],
  lifestyle: [
    'Compression stockings are often the first approach to try. They steadily squeeze the legs, helping veins and leg muscles move blood more efficiently',
    'Regular exercise, such as walking, swimming, or cycling, to improve leg circulation',
    'Weight management if overweight or obese',
    'Avoiding prolonged standing or sitting',
    'Elevating the legs when resting',
    'Avoiding high heels and tight clothing around the waist, groin, or legs',
    'Minimally invasive procedures, such as sclerotherapy, laser treatment, or endovenous ablation, may be used to treat varicose veins',
    'Surgical procedures, such as vein ligation and stripping, may be necessary for large or complicated varicose veins'
  ],
  diet: [
    'Generally not directly related to diet, but a high-fiber, low-salt diet can help prevent constipation and reduce fluid retention, which may worsen varicose veins',
    'Maintaining a healthy weight through a balanced diet can also reduce pressure on the veins'
  ]
},
{
  id: 'venous-leg-ulcer',
  name: 'Venous Leg Ulcer',
  category: 'Vascular',
  description: 'A chronic, non-healing wound on the lower leg or ankle that results from venous insufficiency, a condition in which the veins in the legs do not adequately return blood back to the heart. Venous leg ulcers are the most common type of leg ulcer, accounting for the majority of cases. They can be painful, debilitating, and have a significant impact on quality of life.',
  symptoms: [
    'A shallow wound with irregular borders on the lower leg or ankle, often on the inner side of the leg, just above the ankle',
    'The base of the ulcer may be covered with yellow, sloughy tissue or red granulation tissue',
    'The surrounding skin may be discolored (brown or purple), thickened, dry, itchy, or inflamed (varicose eczema)',
    'Leg swelling (edema)',
    'Aching, heaviness, or cramping in the legs',
    'Varicose veins are often present',
    'The ulcer may be painful, especially when infected',
    'Discharge or weeping from the ulcer'
  ],
  relatedParameters: [
    {
      id: 'PHYSICAL_EXAM',
      value: 'Ulcer on lower leg',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Ulcer on lower leg',
      description: 'Physical examination reveals a chronic wound on the lower leg or ankle with characteristic features of a venous ulcer'
    },
    {
      id: 'DOPPLER_ULTRASOUND',
      value: 'Venous insufficiency',
      unit: '',
      normalRange: { min: 'Normal venous flow', max: 'Normal venous flow' },
      status: 'Venous insufficiency',
      description: 'Doppler ultrasound of the leg veins shows venous reflux or obstruction, indicating venous insufficiency'
    },
    {
      id: 'ABI',
      value: 'Normal or mildly reduced',
      unit: '',
      normalRange: { min: '0.9-1.3', max: '0.9-1.3' },
      status: 'Normal or mildly reduced',
      description: 'Ankle-brachial index (ABI) is usually normal (0.9-1.3) or only mildly reduced in venous ulcers, helping to differentiate them from arterial ulcers'
    },
    {
      id: 'WOUND_CULTURE',
      value: 'Bacterial growth',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Bacterial growth',
      description: 'Wound culture may show bacterial growth, but the presence of bacteria does not always indicate infection'
    }
  ],
  medications: [
    'Topical wound care products, such as hydrocolloids, alginates, foams, or silver dressings, are used to promote wound healing and manage exudate',
    'Antibiotics are indicated if there are signs of clinical infection (e.g., increasing pain, erythema, purulent discharge, fever)',
    'Pentoxifylline, an oral medication that improves blood flow, may be used as an adjunct to compression therapy to accelerate ulcer healing',
    'Aspirin may be considered to improve ulcer healing, but the evidence is limited'
  ],
  lifestyle: [
    'Compression therapy with multi-layer bandages or compression stockings is the cornerstone of venous ulcer treatment. Compression helps improve venous return, reduce edema, and promote ulcer healing',
    'Leg elevation above the level of the heart for 30 minutes, 3-4 times a day',
    'Regular exercise, such as walking, to improve calf muscle pump function',
    'Moisturizing the surrounding skin to prevent dryness and cracking',
    'Regular wound assessment and appropriate dressing changes',
    'Addressing underlying venous insufficiency with procedures such as endovenous ablation, sclerotherapy, or surgery, if indicated',
    'Pain management with analgesics, as needed',
    'Education on proper wound care and prevention of recurrence'
  ],
  diet: [
    'A healthy, balanced diet with adequate protein, vitamins (especially vitamin C and A), and minerals (especially zinc) is important to promote wound healing',
    'Nutritional supplements may be considered if there is evidence of malnutrition or specific nutrient deficiencies',
    'Maintaining a healthy weight can help reduce pressure on the leg veins'
  ]
  },
  {
  id: 'vitamin-b12-or-folate-deficiency-anaemia',
  name: 'Vitamin B12 or Folate Deficiency Anaemia',
  category: 'Hematological',
  description: 'Conditions characterized by a deficiency of either vitamin B12 or folate, leading to a decrease in red blood cell production and the development of abnormally large, immature red blood cells (megaloblastic anemia). These deficiencies can result from inadequate dietary intake, malabsorption, certain medications, or increased demand.',
  symptoms: [
    'Fatigue',
    'Lethargy',
    'Pale skin',
    'Shortness of breath',
    'Dizziness',
    'Headache',
    'Cold hands and feet',
    'Palpitations',
    'Tinnitus',
    'Loss of appetite and weight loss',
    'Sore, red tongue (glossitis)',
    'Mouth ulcers',
    'In vitamin B12 deficiency: Neurological symptoms such as numbness or tingling in the hands and feet, difficulty walking, muscle weakness, memory loss, confusion, depression, and dementia'
  ],
  relatedParameters: [
    {
      id: 'CBC',
      value: 'Low hemoglobin, high MCV',
      unit: '',
      normalRange: { min: 'Normal hemoglobin, normal MCV', max: 'Normal hemoglobin, normal MCV' },
      status: 'Low hemoglobin, high MCV',
      description: 'Complete blood count (CBC) shows anemia (low hemoglobin) with macrocytosis (high mean corpuscular volume [MCV] > 100 fL)'
    },
    {
      id: 'BLOOD_SMEAR',
      value: 'Megaloblastic changes',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Megaloblastic changes',
      description: 'Peripheral blood smear shows macrocytic red blood cells, hypersegmented neutrophils, and possibly ovalocytes'
    },
    {
      id: 'VITAMIN_B12',
      status: 'LOW',
      description: 'Serum vitamin B12 level is low (<200 pg/mL)'
    },
    {
      id: 'FOLATE',
      status: 'LOW',
      description: 'Serum or red blood cell folate level is low'
    },
    {
      id: 'HOMOCYSTEINE',
      status: 'HIGH',
      description: 'Serum homocysteine level may be elevated in both vitamin B12 and folate deficiency'
    },
    {
      id: 'MMA',
      status: 'HIGH',
      description: 'Serum methylmalonic acid (MMA) level is elevated in vitamin B12 deficiency'
    },
    {
      id: 'LDH',
      status: 'HIGH',
      description: 'LDH may be elevated'
    },
    {
      id: 'INDIRECT_BILIRUBIN',
      status: 'HIGH',
      description: 'Indirect bilirubin may be mildly elevated'
    },
    {
      id: 'ANTI_IF_ANTIBODY',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Anti-intrinsic factor antibodies may be present in pernicious anemia'
    },
    {
      id: 'ANTI_PARIETAL_CELL_ANTIBODY',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Anti-parietal cell antibodies may be present in pernicious anemia'
    }
  ],
  medications: [
    'Vitamin B12 deficiency: Intramuscular or subcutaneous injections of hydroxocobalamin are typically given initially, followed by maintenance doses. Oral vitamin B12 supplementation may be used for less severe cases or for maintenance',
    'Folate deficiency: Oral folic acid supplementation is the standard treatment',
    'Addressing the underlying cause of the deficiency, if possible (e.g., treating celiac disease, discontinuing medications that interfere with absorption)'
  ],
  lifestyle: [
    'For inadequate dietary intake: Increasing consumption of foods rich in vitamin B12 (e.g., meat, poultry, fish, eggs, dairy products) or folate (e.g., green leafy vegetables, legumes, fortified grains)',
    'For individuals with pernicious anemia: Lifelong vitamin B12 supplementation is required',
    'For individuals with malabsorption due to other causes: Addressing the underlying condition and monitoring vitamin B12 and folate levels regularly',
    'Avoiding excessive alcohol consumption, which can interfere with folate absorption and metabolism'
  ],
  diet: [
    'Foods rich in vitamin B12:',
    'Meat (beef, liver, poultry)',
    'Fish and shellfish',
    'Eggs',
    'Dairy products (milk, cheese, yogurt)',
    'Fortified cereals and plant-based milk alternatives',
    'Foods rich in folate:',
    'Green leafy vegetables (spinach, kale, romaine lettuce)',
    'Legumes (lentils, beans, chickpeas)',
    'Asparagus',
    'Broccoli',
    'Avocado',
    'Citrus fruits',
    'Fortified grains and cereals'
  ]
},
{
  id: 'vulval-cancer',
  name: 'Vulval Cancer',
  category: 'Oncological',
  description: 'A rare cancer that forms in the tissues of the vulva, the external female genitalia. Most vulval cancers are squamous cell carcinomas, arising from the thin, flat cells that line the surface of the vulva. Some vulval cancers are melanomas, developing in the pigment-producing cells. Vulval cancer is often associated with human papillomavirus (HPV) infection or chronic vulvar skin conditions.',
  symptoms: [
    'A lump, growth, or ulcer on the vulva',
    'Persistent itching, pain, or tenderness of the vulva',
    'Bleeding that is not related to menstruation',
    'Changes in the skin of the vulva, such as color changes, thickening, or a rash',
    'Painful urination',
    'Enlarged lymph nodes in the groin'
  ],
  relatedParameters: [
    {
      id: 'PHYSICAL_EXAM',
      value: 'Vulvar lesion',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Vulvar lesion',
      description: 'Physical examination reveals a lump, ulcer, or other visible abnormality on the vulva'
    },
    {
      id: 'BIOPSY',
      value: 'Vulvar cancer',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Vulvar cancer',
      description: 'Biopsy of the vulvar lesion confirms the diagnosis of vulvar cancer and determines the cell type (e.g., squamous cell carcinoma, melanoma, adenocarcinoma, sarcoma)'
    },
    {
      id: 'HPV_TEST',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'HPV testing may be positive for high-risk HPV types (e.g., HPV 16, 18), particularly in younger women with vulvar cancer'
    },
    {
      id: 'IMAGING',
      value: 'Tumor extent',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor extent',
      description: 'Imaging tests, such as pelvic exam under anesthesia, cystoscopy, proctoscopy, chest X-ray, CT, MRI, and PET scan, are used to determine the extent of the tumor and stage the cancer'
    }
  ],
  medications: [
    'Chemotherapy (e.g., cisplatin, 5-fluorouracil, mitomycin C) may be used in combination with radiation therapy for locally advanced vulvar cancer',
    'Chemotherapy may also be used to treat metastatic or recurrent vulvar cancer',
    'Targeted therapy (e.g., cetuximab) may be considered for certain types of vulvar cancer'
  ],
  lifestyle: [
    'HPV vaccination to prevent infection with high-risk HPV types that can cause vulvar and other anogenital cancers',
    'Safe sex practices (e.g., using condoms) to reduce the risk of HPV and other sexually transmitted infections',
    'Regular pelvic exams and Pap tests to detect precancerous changes or early-stage cervical cancer',
    'Quitting smoking, as smoking is a risk factor for vulvar cancer',
    'Prompt evaluation of any vulvar symptoms, such as itching, pain, or a lump',
    'Follow-up with an oncologist after treatment, including regular physical exams, imaging tests, and Pap tests as needed',
    'Psychosocial support and counseling'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet is important for overall health and well-being, especially during and after cancer treatment'
  ]
},
{
  id: 'warts-and-verrucas',
  name: 'Warts and Verrucas',
  category: 'Dermatological',
  description: 'Warts are small, noncancerous skin growths caused by an infection with human papillomavirus (HPV). They can appear anywhere on the body but commonly affect the hands, feet, face, and genitals. Verrucas are warts that occur on the soles of the feet. Warts are contagious and can spread through direct contact or contaminated surfaces.',
  symptoms: [
    'Common warts: Small, grainy, flesh-colored bumps that are rough to the touch, often with small black dots (clotted blood vessels)',
    'Plantar warts (verrucas): Hard, grainy growths on the soles of the feet, often with black dots; may cause pain when walking',
    'Flat warts: Flat-topped, smooth, yellowish or skin-colored warts, often occurring in clusters on the face, neck, or hands',
    'Filiform warts: Long, narrow, thread-like warts, often on the face, especially near the eyelids and lips',
    'Genital warts: Soft, flesh-colored or gray growths in the genital or anal area, which may be raised or flat, single or clustered (cauliflower-like)'
  ],
  relatedParameters: [
    {
      id: 'PHYSICAL_EXAM',
      value: 'Characteristic warts',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Characteristic warts',
      description: 'Physical examination reveals characteristic skin lesions consistent with warts'
    },
    {
      id: 'BIOPSY',
      value: 'HPV changes',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'HPV changes',
      description: 'Biopsy is rarely necessary but may show features of HPV infection, such as koilocytosis (vacuolated cells)'
    }
  ],
  medications: [
    'Salicylic acid is a common over-the-counter treatment for warts. It works by gradually peeling away the layers of the wart',
    'Cryotherapy (freezing) with liquid nitrogen is a common treatment performed by healthcare providers',
    'Cantharidin, a blistering agent, may be applied by a healthcare provider',
    'Topical immunotherapy (e.g., imiquimod, 5-fluorouracil) may be used for resistant or widespread warts',
    'Bleomycin injections may be used for stubborn warts',
    'Prescription-strength salicylic acid or other peeling agents (e.g., glycolic acid, tretinoin) may be used under the guidance of a healthcare provider'
  ],
  lifestyle: [
    'Avoiding direct contact with warts, including one\'s own',
    'Not sharing towels, shoes, or other personal items with others',
    'Keeping feet dry and changing socks daily',
    'Wearing shoes or sandals in public showers, locker rooms, and around swimming pools',
    'Covering warts with a waterproof bandage',
    'Avoiding picking or scratching at warts, which can spread the virus',
    'For genital warts: Practicing safe sex (e.g., using condoms) to reduce the risk of transmission',
    'HPV vaccination can help prevent genital warts and some other types of warts'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet can support the immune system'
  ]
},
{
  id: 'whiplash',
  name: 'Whiplash',
  category: 'Musculoskeletal',
  description: 'A neck injury caused by a sudden, forceful, back-and-forth movement of the head, similar to the cracking of a whip. Whiplash commonly occurs in rear-end car accidents but can also result from sports injuries, falls, or physical abuse. The rapid motion can injure the muscles, ligaments, tendons, nerves, and discs in the neck.',
  symptoms: [
    'Neck pain and stiffness',
    'Worsening of pain with neck movement',
    'Loss of range of motion in the neck',
    'Headaches, most often starting at the base of the skull',
    'Tenderness or pain in the shoulder, upper back, or arms',
    'Tingling or numbness in the arms',
    'Fatigue',
    'Dizziness',
    'Some people may also experience: Blurred vision, ringing in the ears (tinnitus), sleep disturbances, irritability, difficulty concentrating, memory problems, depression'
  ],
  relatedParameters: [
    {
      id: 'PHYSICAL_EXAM',
      value: 'Neck tenderness, restricted range of motion',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Neck tenderness, restricted range of motion',
      description: 'Physical examination may reveal tenderness to palpation of the neck muscles, restricted range of motion, and muscle spasm'
    },
    {
      id: 'X_RAYS',
      value: 'Normal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Normal',
      description: 'X-rays of the neck are usually normal but may be obtained to rule out fractures or other bony abnormalities'
    },
    {
      id: 'CT_SCAN',
      value: 'Normal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Normal',
      description: 'CT scan of the neck is not usually indicated unless there is concern for fracture or other bony injury'
    },
    {
      id: 'MRI_NECK',
      value: 'Normal',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Normal',
      description: 'MRI of the neck is not usually necessary unless there are persistent or severe symptoms, neurological deficits, or concern for disc herniation or other soft tissue injury'
    }
  ],
  medications: [
    'Over-the-counter pain relievers, such as acetaminophen or NSAIDs (e.g., ibuprofen, naproxen), can help relieve pain and inflammation',
    'Prescription NSAIDs or muscle relaxants may be used for more severe pain or muscle spasm',
    'Opioid medications are generally not recommended for whiplash',
    'In some cases, lidocaine injections or nerve blocks may be considered for pain management'
  ],
  lifestyle: [
    'Rest and avoiding activities that worsen pain in the initial days after injury',
    'Applying ice to the neck for 15-20 minutes several times a day during the first 24-48 hours, followed by heat application',
    'Gentle range of motion exercises as tolerated',
    'Maintaining good posture',
    'Using a soft cervical collar (neck brace) may provide temporary relief, but prolonged use is not recommended as it can weaken neck muscles',
    'Physical therapy may be helpful to improve neck strength, flexibility, and range of motion',
    'Chiropractic care or osteopathic manipulation may be considered',
    'Stress management techniques, such as relaxation exercises or meditation'
  ],
  diet: [
    'Generally not directly related to diet, but an anti-inflammatory diet may be helpful in reducing inflammation and promoting healing'
  ]
},
{
  id: 'whooping-cough',
  name: 'Whooping Cough',
  category: 'Infectious',
  description: 'Also known as pertussis, is a highly contagious respiratory infection caused by the bacterium Bordetella pertussis. Whooping cough is characterized by severe coughing fits that often end with a "whoop" sound when the person breathes in. It can affect people of all ages but can be particularly serious in infants and young children.',
  symptoms: [
    'Early symptoms (catarrhal stage): Mild cough, runny nose, low-grade fever, and sneezing, lasting for 1-2 weeks',
    'Paroxysmal stage: Severe coughing fits (paroxysms) that can last for several minutes and often end with a high-pitched "whoop" sound during inhalation, vomiting after coughing fits, exhaustion after coughing fits, turning blue or red in the face during coughing, symptoms can last for 2-8 weeks or longer',
    'Convalescent stage: Gradual recovery with a decrease in the frequency and severity of coughing, can last for weeks to months',
    'Infants may not have a "whoop" but may have apnea (pauses in breathing) or difficulty feeding'
  ],
  relatedParameters: [
    {
      id: 'NASOPHARYNGEAL_SWAB',
      value: 'B. pertussis',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'B. pertussis',
      description: 'Culture of nasopharyngeal swab or aspirate grows B. pertussis, confirming the diagnosis'
    },
    {
      id: 'PCR_TEST',
      value: 'B. pertussis DNA',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'B. pertussis DNA',
      description: 'Polymerase chain reaction (PCR) test of nasopharyngeal specimen detects B. pertussis DNA'
    },
    {
      id: 'SEROLOGY',
      value: 'Antibodies to B. pertussis',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Antibodies to B. pertussis',
      description: 'Serological tests may show a rise in antibodies to B. pertussis antigens, but are not useful for early diagnosis'
    },
    {
      id: 'WBC',
      status: 'HIGH',
      description: 'White blood cell count may show lymphocytosis (increased lymphocytes), especially in the paroxysmal stage'
    }
  ],
  medications: [
    'Antibiotics (e.g., azithromycin, clarithromycin, erythromycin) are used to treat whooping cough and reduce the spread of infection. They are most effective when given early in the course of illness',
    'Trimethoprim-sulfamethoxazole may be used as an alternative in individuals who cannot tolerate macrolides',
    'Antibiotics may not significantly alter the course of illness if given late in the disease but can still help prevent transmission',
    'Supportive care, such as rest, fluids, and humidified air, is important'
  ],
  lifestyle: [
    'Vaccination with DTaP (diphtheria, tetanus, and acellular pertussis) vaccine for infants and children and Tdap (tetanus, diphtheria, and acellular pertussis) booster for adolescents and adults is the best way to prevent whooping cough',
    'Post-exposure prophylaxis with antibiotics for close contacts of individuals with whooping cough, regardless of vaccination status',
    'Isolation of individuals with whooping cough until they have completed 5 days of appropriate antibiotic therapy or for 21 days after the onset of cough if not treated',
    'Covering the mouth and nose when coughing or sneezing',
    'Frequent handwashing',
    'Avoiding close contact with infants and pregnant women',
    'Hospitalization may be necessary for infants or individuals with severe symptoms'
  ],
  diet: [
    'Generally not directly related to diet, but maintaining adequate hydration and nutrition is important, especially in infants and young children'
  ]
},
{
  id: 'wilms-tumour',
  name: 'Wilms’ Tumour',
  category: 'Oncological',
  description: 'Also known as nephroblastoma, is a rare kidney cancer that primarily affects children. It is the most common type of kidney cancer in children and typically occurs in children around age 3 to 4. Wilms\' tumor may be associated with certain genetic syndromes and congenital anomalies.',
  symptoms: [
    'Abdominal mass or swelling',
    'Abdominal pain',
    'Fever',
    'Blood in the urine (hematuria)',
    'High blood pressure',
    'Loss of appetite',
    'Weight loss',
    'Fatigue',
    'Nausea and vomiting',
    'Constipation'
  ],
  relatedParameters: [
    {
      id: 'ABDOMINAL_ULTRASOUND',
      value: 'Renal mass',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Renal mass',
      description: 'Abdominal ultrasound shows a solid mass arising from the kidney'
    },
    {
      id: 'CT_ABDOMEN_PELVIS',
      value: 'Renal mass',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Renal mass',
      description: 'CT scan of the abdomen and pelvis confirms the presence of a renal mass and helps determine the extent of the tumor'
    },
    {
      id: 'CHEST_CT',
      value: 'Lung metastases',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Lung metastases',
      description: 'CT scan of the chest is performed to evaluate for lung metastases'
    },
    {
      id: 'BIOPSY',
      value: 'Wilms\' tumor',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Wilms\' tumor',
      description: 'Biopsy or surgical resection of the tumor confirms the diagnosis of Wilms\' tumor and determines the histological subtype (favorable or anaplastic)'
    },
    {
      id: 'URINALYSIS',
      value: 'Hematuria',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Hematuria',
      description: 'Urinalysis may show microscopic or gross hematuria'
    },
    {
      id: 'GENETIC_TESTING',
      value: 'Specific mutations',
      unit: '',
      normalRange: { min: 'No mutations', max: 'No mutations' },
      status: 'Specific mutations',
      description: 'Genetic testing may reveal specific mutations or chromosomal abnormalities associated with Wilms\' tumor (e.g., WT1, WTX, CTNNB1) or related syndromes (e.g., WAGR syndrome, Denys-Drash syndrome, Beckwith-Wiedemann syndrome)'
    }
  ],
  medications: [
    'Chemotherapy is an integral part of treatment for Wilms\' tumor. Common chemotherapy drugs used include:',
    'Vincristine',
    'Dactinomycin',
    'Doxorubicin',
    'Cyclophosphamide',
    'Etoposide',
    'Carboplatin',
    'The specific chemotherapy regimen depends on the stage and histology of the tumor',
    'Neoadjuvant chemotherapy (given before surgery) may be used to shrink the tumor and make it easier to remove'
  ],
  lifestyle: [
    'Regular follow-up with a pediatric oncologist after treatment, including physical exams, imaging tests, and blood tests',
    'Monitoring for late effects of treatment, such as second cancers, heart problems, and kidney dysfunction',
    'Psychosocial support for the child and family',
    'Genetic counseling for families of children with Wilms\' tumor and associated syndromes'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet is important during and after cancer treatment',
    'Maintaining adequate hydration and nutrition is important, especially during chemotherapy'
  ]
},
{
  id: 'wolff-parkinson-white-syndrome',
  name: 'Wolff-Parkinson-White Syndrome',
  category: 'Cardiovascular',
  description: 'A heart condition characterized by an extra electrical pathway (accessory pathway) between the atria and the ventricles, which can cause rapid heartbeats (tachycardia). The accessory pathway, known as the bundle of Kent, allows electrical signals to bypass the normal conduction system, leading to pre-excitation of the ventricles. WPW syndrome can be associated with episodes of supraventricular tachycardia (SVT), particularly atrioventricular reentrant tachycardia (AVRT).',
  symptoms: [
    'Many individuals with WPW syndrome have no symptoms',
    'Palpitations (a sensation of rapid, fluttering, or pounding heartbeats)',
    'Rapid heart rate',
    'Dizziness or lightheadedness',
    'Fainting (syncope)',
    'Shortness of breath',
    'Chest pain or discomfort',
    'Anxiety',
    'Fatigue',
    'Symptoms may be episodic and triggered by exercise, stress, caffeine, or alcohol'
  ],
  relatedParameters: [
    {
      id: 'ECG',
      value: 'Delta wave, short PR',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Delta wave, short PR',
      description: 'Resting electrocardiogram (ECG) shows a short PR interval (<0.12 seconds), a wide QRS complex (>0.12 seconds), and a delta wave (a slurred upstroke of the QRS complex) in many patients'
    },
    {
      id: 'HOLTER_MONITOR',
      value: 'Episodes of tachycardia',
      unit: '',
      normalRange: { min: 'Normal sinus rhythm', max: 'Normal sinus rhythm' },
      status: 'Episodes of tachycardia',
      description: 'Ambulatory ECG monitoring (e.g., Holter monitor) may capture episodes of tachycardia, such as AVRT or atrial fibrillation'
    },
    {
      id: 'EVENT_MONITOR',
      value: 'Episodes of tachycardia',
      unit: '',
      normalRange: { min: 'Normal sinus rhythm', max: 'Normal sinus rhythm' },
      status: 'Episodes of tachycardia',
      description: 'Event monitor or loop recorder may be used for infrequent episodes of tachycardia'
    },
    {
      id: 'ELECTROPHYSIOLOGY_STUDY',
      value: 'Accessory pathway',
      unit: '',
      normalRange: { min: 'Normal conduction', max: 'Normal conduction' },
      status: 'Accessory pathway',
      description: 'Electrophysiology study (EPS) can confirm the presence of an accessory pathway, determine its location and properties, and induce tachycardia to assess the risk of arrhythmias'
    }
  ],
  medications: [
    'Vagal maneuvers (e.g., Valsalva maneuver, carotid sinus massage) may terminate episodes of SVT in some patients',
    'Adenosine can be used to acutely terminate episodes of AVRT',
    'Antiarrhythmic medications (e.g., flecainide, propafenone, amiodarone) may be used to prevent recurrent episodes of tachycardia in symptomatic patients',
    'Beta-blockers or calcium channel blockers may be used to slow the heart rate during episodes of tachycardia but should be avoided in patients with WPW syndrome and atrial fibrillation, as they can increase conduction through the accessory pathway',
    'Catheter ablation is the definitive treatment for symptomatic WPW syndrome and is generally recommended for patients with a history of life-threatening arrhythmias, such as atrial fibrillation with rapid ventricular response'
  ],
  lifestyle: [
    'Avoiding triggers that can provoke episodes of tachycardia, such as caffeine, alcohol, stress, and certain medications',
    'Learning vagal maneuvers to help terminate episodes of SVT',
    'Regular follow-up with a cardiologist or electrophysiologist',
    'Carrying medical identification that indicates the presence of WPW syndrome',
    'Considering catheter ablation for long-term management and to reduce the risk of potentially life-threatening arrhythmias'
  ],
  diet: [
    'Generally not directly related to diet, but avoiding excessive caffeine and alcohol intake may be helpful in reducing episodes of tachycardia'
  ]
},
{
  id: 'womb-cancer',
  name: 'Womb (Uterus) Cancer',
  category: 'Oncological',
  description: 'Also known as uterine cancer or endometrial cancer, is a type of cancer that begins in the uterus, the pear-shaped organ in the female pelvis where fetal development occurs. Most womb cancers are endometrial cancers, arising from the endometrium, the inner lining of the uterus. Uterine sarcomas, which develop in the muscle or other tissues of the uterus, are less common.',
  symptoms: [
    'Abnormal vaginal bleeding, such as postmenopausal bleeding, bleeding between periods, or unusually heavy or prolonged menstrual bleeding',
    'Vaginal discharge that may be watery, blood-tinged, or foul-smelling',
    'Pelvic pain or pressure',
    'Pain during intercourse',
    'Unexplained weight loss',
    'Difficulty or pain with urination',
    'A mass or lump in the abdomen or pelvis'
  ],
  relatedParameters: [
    {
      id: 'TRANSVAGINAL_ULTRASOUND',
      value: 'Thickened endometrium',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Thickened endometrium',
      description: 'Transvaginal ultrasound may show a thickened endometrial stripe or an endometrial mass'
    },
    {
      id: 'ENDOMETRIAL_BIOPSY',
      value: 'Endometrial cancer',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Endometrial cancer',
      description: 'Endometrial biopsy or dilation and curettage (D&C) confirms the diagnosis of endometrial cancer and determines the histological type (e.g., endometrioid adenocarcinoma, serous carcinoma, clear cell carcinoma) and grade'
    },
    {
      id: 'HYSTEROSCOPY',
      value: 'Endometrial mass',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Endometrial mass',
      description: 'Hysteroscopy may reveal an endometrial mass or other abnormalities and allows for directed biopsy'
    },
    {
      id: 'CA_125',
      status: 'HIGH',
      description: 'CA-125 may be elevated, especially in advanced or high-grade endometrial cancer, but is not specific for uterine cancer'
    },
    {
      id: 'IMAGING',
      value: 'Tumor extent',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Tumor extent',
      description: 'Imaging tests, such as pelvic exam under anesthesia, chest X-ray, CT, MRI, and PET scan, are used to determine the extent of the tumor and stage the cancer'
    }
  ],
  medications: [
    'Chemotherapy (e.g., carboplatin, paclitaxel, doxorubicin, cisplatin) may be used as adjuvant therapy after surgery for high-risk or advanced-stage endometrial cancer',
    'Chemotherapy may also be used to treat metastatic or recurrent endometrial cancer',
    'Hormone therapy (e.g., progestins, tamoxifen, aromatase inhibitors) may be used for certain types of endometrial cancer, particularly low-grade, hormone receptor-positive tumors',
    'Targeted therapy (e.g., everolimus, lenvatinib) may be considered for specific molecular subtypes of endometrial cancer',
    'Immunotherapy (e.g., pembrolizumab) may be used for endometrial cancers with specific genetic features, such as mismatch repair deficiency or high microsatellite instability'
  ],
  lifestyle: [
    'Maintaining a healthy weight, as obesity is a significant risk factor for endometrial cancer',
    'Regular exercise',
    'Management of other risk factors, such as diabetes and hypertension',
    'Use of combination oral contraceptives may reduce the risk of endometrial cancer in premenopausal women',
    'Follow-up with an oncologist after treatment, including regular physical exams, imaging tests, and CA-125 measurements as needed',
    'Psychosocial support and counseling'
  ],
  diet: [
    'Generally not directly related to diet, but a healthy, balanced diet is important for overall health and well-being, especially during and after cancer treatment',
    'Maintaining a healthy weight through diet and exercise can help reduce the risk of endometrial cancer and improve outcomes'
  ]
  },
  {
  id: 'yellow-fever',
  name: 'Yellow Fever',
  category: 'Infectious',
  description: 'An acute viral hemorrhagic disease transmitted by infected mosquitoes, primarily Aedes aegypti. The "yellow" in the name refers to the jaundice that affects some patients. Yellow fever is endemic in tropical areas of Africa and Central and South America. Most people infected with yellow fever virus have no illness or only mild illness, but some develop severe disease, which can be fatal.',
  symptoms: [
    'Initial phase (acute phase):',
    'Fever',
    'Headache',
    'Muscle aches, especially in the back and knees',
    'Sensitivity to light',
    'Nausea, vomiting, or both',
    'Loss of appetite',
    'Dizziness',
    'Red eyes, face, or tongue',
    'This phase usually lasts for 3-4 days and then resolves',
    'Toxic phase: About 15% of people who have the initial symptoms enter a toxic phase within 24 hours, characterized by:',
    'Return of high fever',
    'Jaundice (yellowing of the skin and eyes) due to liver damage',
    'Abdominal pain and vomiting',
    'Bleeding from the mouth, nose, eyes, or stomach',
    'Deterioration of kidney function',
    'Shock',
    'Multiple organ failure',
    'The toxic phase is often fatal'
  ],
  relatedParameters: [
    {
      id: 'YELLOW_FEVER_VIRUS_PCR',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Polymerase chain reaction (PCR) test detects yellow fever virus RNA in blood during the early phase of illness'
    },
    {
      id: 'YELLOW_FEVER_VIRUS_ANTIBODY',
      value: 'IgM positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'IgM positive',
      description: 'Serological tests (e.g., ELISA) show the presence of IgM antibodies to yellow fever virus, typically detectable by the end of the first week of illness'
    },
    {
      id: 'LFT',
      value: 'Elevated AST, ALT',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated AST, ALT',
      description: 'Liver function tests show elevated AST and ALT, indicating liver damage'
    },
    {
      id: 'BILIRUBIN',
      status: 'HIGH',
      description: 'Serum bilirubin is elevated, particularly in the toxic phase'
    },
    {
      id: 'COAGULATION_TESTS',
      value: 'Prolonged PT, aPTT',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Prolonged PT, aPTT',
      description: 'Coagulation studies may show prolonged prothrombin time (PT) and activated partial thromboplastin time (aPTT) due to liver dysfunction'
    },
    {
      id: 'RENAL_FUNCTION_TESTS',
      value: 'Elevated creatinine',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Elevated creatinine',
      description: 'Renal function tests may show elevated creatinine and blood urea nitrogen (BUN), indicating kidney injury'
    },
    {
      id: 'CBC',
      value: 'Leukopenia, thrombocytopenia',
      unit: '',
      normalRange: { min: 'Normal', max: 'Normal' },
      status: 'Leukopenia, thrombocytopenia',
      description: 'Complete blood count may show leukopenia (low white blood cell count) and thrombocytopenia (low platelet count)'
    }
  ],
  medications: [
    'There is no specific antiviral treatment for yellow fever',
    'Treatment is supportive and focuses on relieving symptoms and preventing complications',
    'Rest, fluids, and pain relievers may be used for mild symptoms',
    'Hospitalization is necessary for severe cases and may involve:',
    'Intravenous fluids to maintain hydration and electrolyte balance',
    'Blood transfusions if there is severe bleeding',
    'Dialysis for kidney failure',
    'Treatment of secondary bacterial infections with antibiotics',
    'Oxygen therapy or mechanical ventilation for respiratory failure',
    'Vasopressors to support blood pressure'
  ],
  lifestyle: [
    'Yellow fever vaccination is the most important preventive measure for people traveling to or living in areas where yellow fever is endemic. The vaccine is safe and highly effective, providing lifelong protection for most people',
    'Mosquito control measures to reduce the risk of transmission, including:',
    'Using insect repellent containing DEET, picaridin, IR3535, or oil of lemon eucalyptus',
    'Wearing long-sleeved shirts and long pants',
    'Sleeping under a mosquito net',
    'Eliminating mosquito breeding sites by emptying standing water from containers',
    'Using insecticide-treated materials',
    'Avoiding outdoor activities during peak mosquito biting times (dusk and dawn)',
    'Isolation of individuals with yellow fever to prevent further transmission (viremic patients should be kept under mosquito nets until the fever resolves)'
  ],
  diet: [
    'Generally not directly related to diet, but maintaining adequate hydration and nutrition is important, especially in severe cases'
  ]
},
{
  id: 'zika-virus',
  name: 'Zika Virus',
  category: 'Infectious',
  description: 'A mosquito-borne viral infection primarily transmitted by Aedes mosquitoes, which also transmit dengue and chikungunya viruses. Zika virus infection during pregnancy can cause microcephaly and other severe fetal brain defects. Zika virus can also be transmitted through sexual contact, blood transfusion, and organ transplantation. Most people infected with Zika virus have no symptoms or only mild symptoms.',
  symptoms: [
    'Many people with Zika virus infection have no symptoms',
    'When symptoms occur, they are usually mild and last for several days to a week. Common symptoms include:',
    'Fever',
    'Rash',
    'Joint pain',
    'Conjunctivitis (red eyes)',
    'Muscle pain',
    'Headache',
    'Pain behind the eyes',
    'Vomiting',
    'Zika virus infection during pregnancy can cause microcephaly (a condition in which a baby\'s head is smaller than expected) and other severe fetal brain defects',
    'Zika virus infection has also been linked to Guillain-Barré syndrome, a rare neurological disorder that can cause muscle weakness and paralysis'
  ],
  relatedParameters: [
    {
      id: 'ZIKA_VIRUS_PCR',
      value: 'Positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Positive',
      description: 'Reverse transcription-polymerase chain reaction (RT-PCR) test detects Zika virus RNA in blood or urine during the acute phase of illness (typically within the first 1-2 weeks of symptom onset)'
    },
    {
      id: 'ZIKA_VIRUS_ANTIBODY',
      value: 'IgM positive',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'IgM positive',
      description: 'Serological tests (e.g., ELISA) show the presence of IgM antibodies to Zika virus, typically detectable within a few days to a week after symptom onset'
    },
    {
      id: 'PRNT',
      value: 'Confirmatory',
      unit: '',
      normalRange: { min: 'Negative', max: 'Negative' },
      status: 'Confirmatory',
      description: 'Plaque reduction neutralization test (PRNT) may be performed to confirm the presence of neutralizing antibodies to Zika virus and to distinguish between Zika virus and other closely related flaviviruses (e.g., dengue)'
    }
  ],
  medications: [
    'There is no specific antiviral treatment for Zika virus infection',
    'Treatment is generally supportive and focuses on relieving symptoms',
    'Rest, fluids, and over-the-counter pain relievers (e.g., acetaminophen) may be used to manage symptoms',
    'Aspirin and other non-steroidal anti-inflammatory drugs (NSAIDs) should be avoided until dengue can be ruled out to reduce the risk of bleeding',
    'Pregnant women with confirmed or possible Zika virus infection should be closely monitored by their healthcare providers'
  ],
  lifestyle: [
    'Prevention of mosquito bites is the most important way to prevent Zika virus infection, especially for people traveling to or living in areas where Zika virus is found. This includes:',
    'Using insect repellent containing DEET, picaridin, IR3535, or oil of lemon eucalyptus',
    'Wearing long-sleeved shirts and long pants',
    'Staying in places with air conditioning or that use window and door screens to keep mosquitoes outside',
    'Sleeping under a mosquito net if you are outdoors or in a room that is not well-screened',
    'Removing standing water from containers around the home to eliminate mosquito breeding sites',
    'Pregnant women should avoid travel to areas with ongoing Zika virus transmission. If travel is unavoidable, they should strictly follow steps to prevent mosquito bites and sexual transmission',
    'Using condoms or abstaining from sex during pregnancy if the male partner has traveled to or lives in an area with Zika virus transmission',
    'Avoiding blood transfusion from donors who have recently traveled to areas with Zika virus transmission'
  ],
  diet: [
    'Generally not directly related to diet, but maintaining adequate hydration and nutrition is important, especially during illness'
  ]
}
];