import { Disease, BloodParameter } from '../types/medical';
import { diseases } from '../data/diseases';
import { findMatchingSymptoms } from './symptomMatcher';
import { calculateSymptomConfidence, calculateParameterConfidence } from './confidenceCalculator';
import { getParameterStatus, calculateParameterMatchScore, isCriticalParameter } from './parameterAnalyzer';

interface AnalysisResult {
  disease: Disease;
  confidence: number;
  matchedSymptoms: string[];
  matchedParameters?: {
    id: string;
    value: number;
    status: string;
    matchScore: number;
  }[];
}

const analyzeParameters = (
  disease: Disease,
  parameters: BloodParameter[]
): { confidence: number; matches: any[] } => {
  const matches: any[] = [];
  let totalScore = 0;
  let maxPossibleScore = 0;

  // Only analyze parameters that were provided
  disease.relatedParameters.forEach(diseaseParam => {
    const parameter = parameters.find(p => p.id === diseaseParam.id);
    if (parameter) {
      const status = getParameterStatus(parameter);
      const matchScore = calculateParameterMatchScore(status, diseaseParam.status);
      const weight = isCriticalParameter(diseaseParam.id) ? 1.5 : 1;
      
      matches.push({
        id: parameter.id,
        value: parameter.value,
        status,
        matchScore: matchScore * weight
      });
      
      totalScore += matchScore * weight;
      maxPossibleScore += weight;
    }
  });

  // If no parameters were analyzed, return zero confidence
  if (maxPossibleScore === 0) {
    return { confidence: 0, matches: [] };
  }

  const confidence = calculateParameterConfidence(totalScore, maxPossibleScore);

  return { confidence, matches };
};

export const analyzeSymptoms = (symptoms: string[]): AnalysisResult[] => {
  if (symptoms.length === 0) return [];
  
  const results = diseases.map(disease => {
    const matchedSymptoms = findMatchingSymptoms(symptoms, disease.symptoms);
    const confidence = calculateSymptomConfidence(
      matchedSymptoms.length,
      disease.symptoms.length
    );
    
    return {
      disease,
      confidence,
      matchedSymptoms
    };
  });

  return results
    .filter(result => result.confidence > 0)
    .sort((a, b) => b.confidence - a.confidence);
};

export const analyzeWithParameters = (
  symptoms: string[],
  parameters: BloodParameter[]
): AnalysisResult[] => {
  if (symptoms.length === 0) return [];

  const results = diseases.map(disease => {
    const matchedSymptoms = findMatchingSymptoms(symptoms, disease.symptoms);
    const symptomConfidence = calculateSymptomConfidence(
      matchedSymptoms.length,
      disease.symptoms.length
    );
    
    const parameterAnalysis = analyzeParameters(disease, parameters);
    
    // If no parameters were modified, use only symptom confidence
    const finalConfidence = parameters.length === 0 
      ? symptomConfidence
      : Math.round((symptomConfidence * 0.7) + (parameterAnalysis.confidence * 0.3));
    
    return {
      disease,
      confidence: finalConfidence,
      matchedSymptoms,
      matchedParameters: parameterAnalysis.matches
    };
  });

  return results
    .filter(result => result.confidence > 0)
    .sort((a, b) => b.confidence - a.confidence);
};