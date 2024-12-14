import React, { useState, useRef, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { symptoms } from '../../data/symptoms';
import { Symptom } from '../../types/medical';
import { analyzeSymptoms } from '../../utils/analysis';
import SymptomDropdown from './SymptomDropdown';
import SelectedSymptoms from './SelectedSymptoms';

interface SymptomFormProps {
  selectedSymptoms: string[];
  onSymptomsChange: (symptoms: string[]) => void;
  onAnalysisComplete: (results: any[]) => void;
}

const SymptomForm: React.FC<SymptomFormProps> = ({
  selectedSymptoms,
  onSymptomsChange,
  onAnalysisComplete
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const filteredSymptoms = symptoms.filter(symptom =>
    !selectedSymptoms.includes(symptom.name) &&
    (showDropdown && !searchTerm ? true : 
      symptom.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSymptomSelect = (symptom: Symptom) => {
    if (!selectedSymptoms.includes(symptom.name)) {
      onSymptomsChange([...selectedSymptoms, symptom.name]);
    }
    setSearchTerm('');
  };

  const handleRemoveSymptom = (symptomToRemove: string) => {
    onSymptomsChange(selectedSymptoms.filter(s => s !== symptomToRemove));
  };

  const handleAnalyzeSymptoms = () => {
    if (selectedSymptoms.length > 0) {
      const results = analyzeSymptoms(selectedSymptoms);
      onAnalysisComplete(results);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00ff9d]">Symptom Checker</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Age"
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00ff9d]"
          />
          <select
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00ff9d]"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Type to search symptoms or click to see all..."
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00ff9d]"
          />
          
          {showDropdown && (
            <div ref={dropdownRef}>
              <SymptomDropdown
                symptoms={filteredSymptoms}
                onSelect={handleSymptomSelect}
              />
            </div>
          )}
        </div>

        <SelectedSymptoms
          symptoms={selectedSymptoms}
          onRemove={handleRemoveSymptom}
        />

        <button
          onClick={handleAnalyzeSymptoms}
          disabled={selectedSymptoms.length === 0}
          className="w-full bg-[#00ff9d] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#00ffd5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze Symptoms
        </button>

        <div className="flex items-start space-x-2 text-gray-400">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            This analysis is for informational purposes only and should not be considered as medical advice.
            Please consult with a healthcare professional for proper diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SymptomForm;