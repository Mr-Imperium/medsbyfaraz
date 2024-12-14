import { Disease } from '../types/medical';

export const normalizeString = (str: string): string => {
  return str.toLowerCase().trim();
};

export const findMatchingSymptoms = (
  userSymptoms: string[],
  diseaseSymptoms: string[]
): string[] => {
  const normalizedUserSymptoms = userSymptoms.map(normalizeString);
  const normalizedDiseaseSymptoms = diseaseSymptoms.map(normalizeString);
  
  return diseaseSymptoms.filter((symptom) => 
    normalizedUserSymptoms.includes(normalizeString(symptom))
  );
};