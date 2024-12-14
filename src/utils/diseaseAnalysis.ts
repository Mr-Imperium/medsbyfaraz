import { Disease, BloodParameter } from '../types/medical';

export const calculateDiseaseConfidence = (
  disease: Disease,
  matchedSymptoms: string[],
  parameters?: BloodParameter[]
): {
  confidence: number;
  matchedSymptoms: string[];
  matchedParameters?: any[];
} => {
  // Calculate symptom confidence
  const symptomConfidence = calculateSymptomConfidence(
    matchedSymptoms,
    disease.symptoms
  );

  // If no parameters provided, return symptom-based confidence
  if (!parameters) {
    return {
      confidence: Math.round(symptomConfidence),
      matchedSymptoms
    };
  }

  // Calculate parameter confidence
  const parameterAnalysis = calculateParameterConfidence(disease, parameters);
  
  // Weighted average: symptoms (70%) and parameters (30%)
  const finalConfidence = Math.round(
    (symptomConfidence * 0.7) + (parameterAnalysis.confidence * 0.3)
  );

  return {
    confidence: finalConfidence,
    matchedSymptoms,
    matchedParameters: parameterAnalysis.matches
  };
};

const calculateSymptomConfidence = (
  matchedSymptoms: string[],
  diseaseSymptoms: string[]
): number => {
  if (diseaseSymptoms.length === 0 || matchedSymptoms.length === 0) return 0;

  // Calculate the base confidence based on the proportion of matched symptoms
  const matchRatio = matchedSymptoms.length / diseaseSymptoms.length;
  
  // Apply progressive scaling for more matched symptoms
  const progressiveScale = 1 + Math.log10(matchedSymptoms.length + 1);
  
  // Add specificity bonus if most symptoms match
  const specificityBonus = matchedSymptoms.length >= diseaseSymptoms.length * 0.7 ? 20 : 0;
  
  // Calculate final confidence with progressive scaling and specificity bonus
  const confidence = (matchRatio * 100 * progressiveScale) + specificityBonus;
  
  // Ensure confidence doesn't exceed 100%
  return Math.min(100, confidence);
};

const calculateParameterConfidence = (
  disease: Disease,
  parameters: BloodParameter[]
): { confidence: number; matches: any[] } => {
  const matches: any[] = [];
  let totalScore = 0;
  let maxPossibleScore = disease.relatedParameters.length;

  disease.relatedParameters.forEach(diseaseParam => {
    const parameter = parameters.find(p => p.id === diseaseParam.id);
    
    if (parameter) {
      const status = getParameterStatus(parameter);
      const matchScore = getParameterMatchScore(status, diseaseParam.status);
      
      matches.push({
        id: parameter.id,
        value: parameter.value,
        status,
        matchScore
      });
      
      // Weight critical parameters more heavily
      const parameterWeight = isCriticalParameter(diseaseParam.id) ? 1.5 : 1;
      totalScore += matchScore * parameterWeight;
    }
  });

  const confidence = maxPossibleScore > 0 
    ? (totalScore / (maxPossibleScore * 1.5)) * 100 
    : 0;

  return {
    confidence: Math.min(100, confidence),
    matches
  };
};

const getParameterStatus = (parameter: BloodParameter): string => {
  const { value, normalRange } = parameter;
  const { min, max } = normalRange;
  
  const veryHighThreshold = max * 1.5;
  const veryLowThreshold = min * 0.5;
  
  if (value >= veryHighThreshold) return 'VERY_HIGH';
  if (value > max) return 'HIGH';
  if (value <= veryLowThreshold) return 'VERY_LOW';
  if (value < min) return 'LOW';
  return 'NORMAL';
};

const getParameterMatchScore = (actual: string, expected: string): number => {
  if (actual === expected) return 1;
  
  if (
    (actual === 'VERY_HIGH' && expected === 'HIGH') ||
    (actual === 'HIGH' && expected === 'VERY_HIGH') ||
    (actual === 'VERY_LOW' && expected === 'LOW') ||
    (actual === 'LOW' && expected === 'VERY_LOW')
  ) {
    return 0.75;
  }
  
  return 0;
};

const isCriticalParameter = (parameterId: string): boolean => {
  const criticalParameters = [
    'GLUCOSE',
    'HBA1C',
    'CREATININE',
    'ALT',
    'AST',
    'TSH',
    'HEMOGLOBIN',
    'WBC',
    'PLATELETS'
  ];
  return criticalParameters.includes(parameterId);
};