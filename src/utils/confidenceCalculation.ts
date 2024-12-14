import { Disease, BloodParameter } from '../types/medical';
import { getParameterStatus, calculateParameterMatchScore } from './parameterAnalysis';

interface ParameterMatch {
  id: string;
  value: number;
  status: string;
  matchScore: number;
}

export const calculateSymptomConfidence = (
  matchedSymptoms: string[],
  totalDiseaseSymptoms: number
): number => {
  if (totalDiseaseSymptoms === 0) return 0;
  
  // Weight the confidence based on both matched symptoms and their proportion
  const matchRatio = matchedSymptoms.length / totalDiseaseSymptoms;
  const symptomScore = matchRatio * 100;
  
  // Apply a logarithmic scaling to reward matching more symptoms
  return Math.min(100, symptomScore * (1 + Math.log10(matchedSymptoms.length)));
};

export const calculateParameterConfidence = (
  disease: Disease,
  parameters: BloodParameter[]
): { confidence: number; matches: ParameterMatch[] } => {
  const matches: ParameterMatch[] = [];
  let totalScore = 0;
  
  disease.relatedParameters.forEach(diseaseParam => {
    const parameter = parameters.find(p => p.id === diseaseParam.id);
    
    if (parameter) {
      const status = getParameterStatus(parameter.value, parameter);
      const matchScore = calculateParameterMatchScore(status, diseaseParam.status);
      
      matches.push({
        id: parameter.id,
        value: parameter.value,
        status,
        matchScore
      });
      
      totalScore += matchScore;
    }
  });
  
  const maxPossibleScore = disease.relatedParameters.length;
  const parameterConfidence = maxPossibleScore > 0
    ? (totalScore / maxPossibleScore) * 100
    : 0;
  
  return {
    confidence: Math.round(parameterConfidence),
    matches
  };
};