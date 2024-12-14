import { BloodParameter } from '../types/medical';

export const getParameterStatus = (value: number, param: BloodParameter) => {
  const { min, max } = param.normalRange;
  const veryHighThreshold = max * 1.5;
  const veryLowThreshold = min * 0.5;

  if (value >= veryHighThreshold) return 'VERY_HIGH';
  if (value > max) return 'HIGH';
  if (value <= veryLowThreshold) return 'VERY_LOW';
  if (value < min) return 'LOW';
  return 'NORMAL';
};

export const calculateParameterMatchScore = (
  actualStatus: string,
  expectedStatus: string
): number => {
  if (actualStatus === expectedStatus) return 1;
  
  // Partial matches for similar statuses
  if (
    (actualStatus === 'VERY_HIGH' && expectedStatus === 'HIGH') ||
    (actualStatus === 'HIGH' && expectedStatus === 'VERY_HIGH') ||
    (actualStatus === 'VERY_LOW' && expectedStatus === 'LOW') ||
    (actualStatus === 'LOW' && expectedStatus === 'VERY_LOW')
  ) {
    return 0.5;
  }
  
  return 0;
};