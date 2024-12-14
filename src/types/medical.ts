export interface Symptom {
  id: string;
  name: string;
  description: string;
}

export interface ParameterStatus {
  id: string;
  status: 'HIGH' | 'VERY_HIGH' | 'LOW' | 'VERY_LOW' | 'NORMAL';
  description: string;
}

export interface BloodParameter {
  id: string;
  name: string;
  value: number;
  unit: string;
  normalRange: {
    min: number;
    max: number;
  };
  category: 'BMI' | 'LFT' | 'RFT' | 'TFT' | 'Cholesterol'|'Blood'|'E&H'| 'CSF';
}

export interface Disease {
  id: string;
  name: string;
  description: string;
  category: 'Metabolic' | 'Endocrine' | 'Hepatic' | 'Renal' | 'Cardiovascular' | 'Musculoskeletal' | 'Dermatological' | 'Gastrointestinal'| 'Oncological'| 'Gynecological' ;
  symptoms: string[];
  relatedParameters: ParameterStatus[];
  medications?: string[];
  lifestyle: string[];
  diet: string[];
}