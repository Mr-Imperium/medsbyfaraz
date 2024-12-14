import React from 'react';

interface SelectedSymptomsProps {
  symptoms: string[];
  onRemove: (symptom: string) => void;
}

const SelectedSymptoms: React.FC<SelectedSymptomsProps> = ({ symptoms, onRemove }) => {
  if (symptoms.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {symptoms.map((symptom) => (
        <span
          key={symptom}
          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm flex items-center gap-2"
        >
          {symptom}
          <button
            onClick={() => onRemove(symptom)}
            className="text-gray-400 hover:text-[#ff0066]"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
};

export default SelectedSymptoms;