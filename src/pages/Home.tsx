import React, { useState } from 'react';
import SymptomForm from '../components/symptom-checker/SymptomForm';
import ParameterGrid from '../components/blood-parameters/ParameterGrid';
import AnalysisResults from '../components/analysis/AnalysisResults';
import { BloodParameter } from '../types/medical';
import { defaultParameters } from '../data/parameters';
import { analyzeWithParameters } from '../utils/analysis';

const Home = () => {
  const [parameters, setParameters] = useState<BloodParameter[]>(defaultParameters);
  const [modifiedParameterIds, setModifiedParameterIds] = useState<Set<string>>(new Set());
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [analysisResults, setAnalysisResults] = useState<any[]>([]);

  const handleParameterChange = (id: string, value: number) => {
    setParameters(parameters.map(param =>
      param.id === id ? { ...param, value } : param
    ));
    setModifiedParameterIds(prev => new Set(prev).add(id));
  };

  const handleAnalyzeWithParameters = () => {
    const modifiedParameters = parameters.filter(param => 
      modifiedParameterIds.has(param.id)
    );
    const results = analyzeWithParameters(selectedSymptoms, modifiedParameters);
    setAnalysisResults(results);
  };

  return (
    <div className="space-y-12">
      <section>
        <SymptomForm
          selectedSymptoms={selectedSymptoms}
          onSymptomsChange={setSelectedSymptoms}
          onAnalysisComplete={setAnalysisResults}
        />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-[#00ff9d] mb-6">Blood Parameters</h2>
        <ParameterGrid
          parameters={parameters}
          onValueChange={handleParameterChange}
        />
      </section>

      <section>
        <button
          onClick={handleAnalyzeWithParameters}
          disabled={selectedSymptoms.length === 0}
          className="w-full bg-[#00ff9d] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#00ffd5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze Symptoms with Blood Parameters
        </button>
      </section>
      
      {analysisResults.length > 0 && (
        <section>
          <AnalysisResults results={analysisResults} />
        </section>
      )}
    </div>
  );
};

export default Home;