export const calculateSymptomConfidence = (
  matchedCount: number,
  totalSymptoms: number
): number => {
  if (matchedCount === 0 || totalSymptoms === 0) return 0;

  // Base confidence calculation
  const baseConfidence = (matchedCount / totalSymptoms) * 100;
  
  // Add bonus for matching multiple symptoms
  const matchBonus = matchedCount > 1 ? Math.min(20, matchedCount * 5) : 0;
  
  // Calculate final confidence
  const finalConfidence = Math.min(100, baseConfidence + matchBonus);
  
  // Return as integer
  return Math.round(finalConfidence);
};

export const calculateParameterConfidence = (
  matchScore: number,
  maxScore: number
): number => {
  if (maxScore === 0) return 0;
  return Math.round((matchScore / maxScore) * 100);
};