import { Disease, BloodParameter } from '../types/medical';

export const getParameterStatus = (parameter: BloodParameter): string => {
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

export const calculateParameterMatchScore = (
  actualStatus: string,
  expectedStatus: string
): number => {
  if (actualStatus === expectedStatus) return 1;
  
  if (
    (actualStatus === 'VERY_HIGH' && expectedStatus === 'HIGH') ||
    (actualStatus === 'HIGH' && expectedStatus === 'VERY_HIGH') ||
    (actualStatus === 'VERY_LOW' && expectedStatus === 'LOW') ||
    (actualStatus === 'LOW' && expectedStatus === 'VERY_LOW')
  ) {
    return 0.75;
  }
  
  return 0;
};

export const isCriticalParameter = (parameterId: string): boolean => {
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