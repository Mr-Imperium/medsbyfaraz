import React from 'react';
import { Symptom } from '../../types/medical';

interface SymptomDropdownProps {
  symptoms: Symptom[];
  onSelect: (symptom: Symptom) => void;
}

const SymptomDropdown: React.FC<SymptomDropdownProps> = ({ symptoms, onSelect }) => {
  return (
    <div className="absolute z-10 w-full mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {symptoms.length > 0 ? (
        symptoms.map((symptom) => (
          <div
            key={symptom.id}
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => onSelect(symptom)}
          >
            <div className="font-medium text-white">{symptom.name}</div>
            <div className="text-sm text-gray-400">{symptom.description}</div>
          </div>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-400">No matching symptoms found</div>
      )}
    </div>
  );
};

export default SymptomDropdown;