import React from 'react';
import { Disease } from '../../types/medical';
import { Activity, Pill, Utensils } from 'lucide-react';

interface AnalysisResult {
  disease: Disease;
  confidence: number;
  matchedParameters?: {
    id: string;
    value: number;
    status: string;
  }[];
}

interface AnalysisResultsProps {
  results: AnalysisResult[];
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#00ff9d]">Analysis Results</h2>
      
      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.disease.id}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Activity className="h-6 w-6 text-[#00ff9d]" />
                <h3 className="text-xl font-semibold text-white">{result.disease.name}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-400">Match:</div>
                <div className="font-bold text-[#00ff9d]">{result.confidence}%</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{result.disease.description}</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">Related Parameters:</h4>
                <div className="space-y-2">
                  {result.disease.relatedParameters.map((param, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded px-3 py-2 text-sm"
                    >
                      <span className="text-gray-300">{param.id}:</span>{' '}
                      <span className="text-[#00ff9d]">{param.status}</span>
                      <p className="text-gray-400 text-xs mt-1">{param.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Key Symptoms:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.disease.symptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Pill className="h-5 w-5 text-[#00ff9d]" />
                  <h4 className="font-medium text-white">Treatment & Management:</h4>
                </div>
                <div className="space-y-3">
                  {result.disease.medications && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-300 mb-1">Medications:</h5>
                      <ul className="list-disc list-inside text-gray-400 text-sm">
                        {result.disease.medications.map((med, index) => (
                          <li key={index}>{med}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-1">Lifestyle Changes:</h5>
                    <ul className="list-disc list-inside text-gray-400 text-sm">
                      {result.disease.lifestyle.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Utensils className="h-5 w-5 text-[#00ff9d]" />
                  <h4 className="font-medium text-white">Dietary Recommendations:</h4>
                </div>
                <ul className="list-disc list-inside text-gray-400 text-sm">
                  {result.disease.diet.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisResults;