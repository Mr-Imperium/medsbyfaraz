// This file serves as a central registry of disease categories
export const categories = [
  'Metabolic',
  'Endocrine',
  'Hepatic',
  'Renal',
  'Cardiovascular',
  'Musculoskeletal',
  'Dermatological',
  'Gastrointestinal',
  'Oncological',
  'Gynecological',
  'Immunological',
  'Neurological',
  'Respiratory',
] as const;

export type DiseaseCategory = typeof categories[number];