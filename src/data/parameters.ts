import { BloodParameter } from '../types/medical';

export const defaultParameters: BloodParameter[] = [
  // LFT Parameters
  {
    id: 'ALT',
    name: 'ALT (SGPT)',
    value: 21,
    unit: 'U/L',
    normalRange: { min: 7, max: 35 },
    category: 'LFT'
  },
  {
    id: 'AST',
    name: 'AST (SGOT)',
    value: 20,
    unit: 'U/L',
    normalRange: { min: 8, max: 33 },
    category: 'LFT'
  },
  {
    id: 'ALP',
    name: 'ALP',
    value: 95,
    unit: 'U/L',
    normalRange: { min: 44, max: 147 },
    category: 'LFT'
  },
  {
    id: 'TOTAL_BILIRUBIN',
    name: 'Total Bilirubin',
    value: 0.7,
    unit: 'mg/dL',
    normalRange: { min: 0.2, max: 1.2 },
    category: 'LFT'
  },
  {
    id: 'DIRECT_BILIRUBIN',
    name: 'Direct Bilirubin',
    value: 0.15,
    unit: 'mg/dL',
    normalRange: { min: 0.0, max: 0.3 },
    category: 'LFT'
  },
  {
    id: 'ALBUMIN',
    name: 'Albumin',
    value: 4.2,
    unit: 'g/dL',
    normalRange: { min: 3.5, max: 5.0 },
    category: 'LFT'
  },
  {
    id: 'GLOBULIN',
    name: 'Globulin',
    value: 2.7,
    unit: 'g/dL',
    normalRange: { min: 2.0, max: 3.5 },
    category: 'LFT'
  },
  {
    id: 'PT',
    name: 'Prothrombin Time',
    value: 12,
    unit: 'seconds',
    normalRange: { min: 11, max: 13.5 },
    category: 'LFT'
  },
  {
        id: 'GGT',
        name: 'GGT',
        value: 20,
        unit: 'U/L',
        normalRange: { min: 9, max: 48 },
        category: 'LFT'
  },
  
  // RFT Parameters
  {
    id: 'BUN',
    name: 'BUN',
    value: 13,
    unit: 'mg/dL',
    normalRange: { min: 7, max: 20 },
    category: 'RFT'
  },
  {
    id: 'CREATININE',
    name: 'Creatinine',
    value: 0.9,
    unit: 'mg/dL',
    normalRange: { min: 0.6, max: 1.2 },
    category: 'RFT'
  },
  {
    id: 'URIC_ACID',
    name: 'Uric Acid',
    value: 5.2,
    unit: 'mg/dL',
    normalRange: { min: 3.5, max: 7.0 },
    category: 'RFT'
  },
  {
    id: 'SODIUM',
    name: 'Sodium (Na+)',
    value: 140,
    unit: 'mmol/L',
    normalRange: { min: 135, max: 145 },
    category: 'RFT'
  },
  {
    id: 'POTASSIUM',
    name: 'Potassium (K+)',
    value: 4.3,
    unit: 'mmol/L',
    normalRange: { min: 3.5, max: 5.1 },
    category: 'RFT'
  },
  {
    id: 'CHLORIDE',
    name: 'Chloride (Cl-)',
    value: 101,
    unit: 'mmol/L',
    normalRange: { min: 96, max: 106 },
    category: 'RFT'
  },
  {
    id: 'GFR',
    name: 'GFR',
    value: 95,
    unit: 'mL/min/1.73m²',
    normalRange: { min: 90, max: 120 },
    category: 'RFT'
  },
  
  // TFT Parameters
  {
    id: 'TSH',
    name: 'TSH',
    value: 2.5,
    unit: 'mIU/L',
    normalRange: { min: 0.5, max: 4.5 },
    category: 'TFT'
  },
  {
    id: 'FREE_T4',
    name: 'Free T4',
    value: 1.3,
    unit: 'ng/dL',
    normalRange: { min: 0.8, max: 1.8 },
    category: 'TFT'
  },
  {
    id: 'FREE_T3',
    name: 'Free T3',
    value: 3.2,
    unit: 'pg/mL',
    normalRange: { min: 2.3, max: 4.1 },
    category: 'TFT'
  },
  {
    id: 'TOTAL_T4',
    name: 'Total T4',
    value: 8.5,
    unit: 'µg/dL',
    normalRange: { min: 4.5, max: 12.5 },
    category: 'TFT'
  },
  {
    id: 'TOTAL_T3',
    name: 'Total T3',
    value: 140,
    unit: 'ng/dL',
    normalRange: { min: 80, max: 200 },
    category: 'TFT'
  },
  
  // Other Blood Tests
  {
    id: 'HEMOGLOBIN',
    name: 'Hemoglobin',
    value: 14.5,
    unit: 'g/dL',
    normalRange: { min: 12.0, max: 17.0 },
    category: 'Blood'
  },
  {
    id: 'WBC',
    name: 'WBC',
    value: 7500,
    unit: '/µL',
    normalRange: { min: 4000, max: 11000 },
    category: 'Blood'
  },
  {
    id: 'PLATELETS',
    name: 'Platelets',
    value: 300000,
    unit: '/µL',
    normalRange: { min: 150000, max: 450000 },
    category: 'Blood'
  },
  {
    id: 'GLUCOSE',
    name: 'Fasting Glucose',
    value: 85,
    unit: 'mg/dL',
    normalRange: { min: 70, max: 99 },
    category: 'Blood'
  },
  {
    id: 'HBA1C',
    name: 'HbA1c',
    value: 5.4,
    unit: '%',
    normalRange: { min: 4.0, max: 5.7 },
    category: 'Blood'
  },
  {
    id: 'TOTAL_CHOLESTEROL',
    name: 'Total Cholesterol',
    value: 180,
    unit: 'mg/dL',
    normalRange: { min: 125, max: 200 },
    category: 'Cholesterol'
  },
  {
    id: 'LDL',
    name: 'LDL Cholesterol',
    value: 90,
    unit: 'mg/dL',
    normalRange: { min: 0, max: 100 },
    category: 'Cholesterol'
  },
  {
    id: 'HDL',
    name: 'HDL Cholesterol',
    value: 55,
    unit: 'mg/dL',
    normalRange: { min: 45, max: 90 },
    category: 'Cholesterol'
  },
  {
    id: 'TRIGLYCERIDES',
    name: 'Triglycerides',
    value: 120,
    unit: 'mg/dL',
    normalRange: { min: 0, max: 150 },
    category: 'Cholesterol'
  },
  {
    id: 'AMYLASE',
    name: 'Amylase',
    value: 55, 
    unit: 'U/L',
    normalRange: { min: 25, max: 90 },
    category: 'E&H'
  },
  {
    id: 'LIPASE',
    name: 'Lipase', 
    value: 80,
    unit: 'U/L',
    normalRange: { min: 0, max: 160 },
    category: 'E&H'
  },
  {
        id: 'CORTISOL',
        name: 'Cortisol',
        value: 12,
        unit: 'µg/dL',
        normalRange: { min: 6, max: 23 },
        category: 'E&H'
      },
      {
        id: 'ACTH',
        name: 'ACTH',
        value: 25,
        unit: 'pg/mL',
        normalRange: { min: 6, max: 50 },
        category: 'E&H'
      },
  {
        id: 'CA125',
        name: 'CA125',
        value: 20,
        unit: 'U/mL',
        normalRange: {min: 0, max: 35},
        category: 'Blood'
      },
      {
        id: 'ESTRADIOL',
        name: 'Estradiol',
        value: 100, 
        unit: 'pg/mL',
        normalRange: { min: 30, max: 400 }, 
        category: 'E&H'
      },
  {
        id: 'EOSINOPHILS',
        name: 'Eosinophils',
        value: 250,
        unit: '/µL',
        normalRange: { min: 0, max: 500},
        category:'Blood'
      },
  {
        id: 'NEUTROPHILS',
        name: 'Neutrophils',
        value: 60, 
        unit: '%',
        normalRange: { min: 40, max: 75 },
        category: 'Blood'
      },
      {
        id: 'IgE',
        name: 'IgE',
        value: 50,
        unit: 'IU/mL',
        normalRange: { min: 0, max: 100 },
        category: 'Blood'
      },
  {
        id: 'HISTAMINE',
        name: 'Histamine',
        value: 0.5, 
        unit: 'nmol/L',
        normalRange: { min: 0, max: 1.0 },
        category: 'Blood'
      },
  {
        id: 'BETA_AMYLOID_42',
        name: 'B_Amyloid_42',
        value: 800,
        unit: 'pg/mL',
        normalRange: { min: 600, max: 1200 },
        category:'CSF'
      },
      {
        id: 'TAU_PROTEIN',
        name: 'TAU_Protein',
        value: 150,
        unit: 'pg/mL',
        normalRange: { min: 100, max: 300 },
        category:'CSF'
      },
  {
        id: 'CEA',
        name: 'CEA',
        value: 2.5,
        unit: 'ng/mL',
        normalRange: { min: 0, max: 5 },
        category: 'Blood'
      },
      {
        id: 'SQUAMOUS_CELL_CARCINOMA_ANTIGEN',
        name: 'SCC Ag',
        value: 1.5,
        unit: 'ng/mL',
        normalRange: { min: 0, max: 2.5 },
        category: 'Blood'
      },
  {
        id: 'TRYPTASE',
        name: 'Tryptase',
        value: 5, 
        unit: 'ng/mL',
        normalRange: { min: 0, max: 11.4 },
        category: 'E&H'
      },
  {
        id: 'TROPONIN',
        name: 'Troponin',
        value: 0.02,
        unit: 'ng/mL',
        normalRange: { min: 0, max: 0.04 },
        category: 'Blood'
      },
      {
        id: 'CK_MB',
        name: 'CK-MB',
        value: 1.5,
        unit: 'ng/mL',
        normalRange: { min: 0, max: 3 },
        category: 'E&H'
      },
  {
        id: 'CRP',
        name: 'CRP',
        value: 8, 
        unit: 'mg/L',
        normalRange: { min: 0, max: 5 },
        category: 'Blood'
      },
      {
        id: 'ESR',
        name: 'ESR',
        value: 25, 
        unit: 'mm/hr',
        normalRange: { min: 0, max: 20 },
        category: 'Blood'
      },
  {
        id: 'BMI',
        name: 'BMI',
        value: 25, 
        unit: 'kg/m²',
        normalRange: { min: 18.5, max: 24.9 },
        category: 'Basic'
      },
  {
        id: 'HEART_RATE',
        name:' Heart Rate',
        value: 72, 
        unit: 'bpm',
        normalRange: { min: 60, max: 100 },
        category: 'Basic'
      },
     {
        id: 'BLOOD_PRESSURE',
        name: 'BP',
        value: 120/80,
        unit: 'mmHg',
        normalRange: { min: 90/60, max: 140/100 },
        category:'Basic'
      },
];