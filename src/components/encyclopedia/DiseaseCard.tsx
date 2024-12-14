import React from 'react';
import { Disease } from '../../types/medical';
import { Activity, X } from 'lucide-react';

interface DiseaseCardProps {
  disease: Disease;
  onClick: () => void;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-[#00ff9d] transition-colors cursor-pointer">
      <div className="flex items-center space-x-3 mb-4">
        <Activity className="h-6 w-6 text-[#00ff9d]" />
        <h3 className="text-xl font-semibold text-white">{disease.name}</h3>
      </div>
      <p className="text-gray-400 mb-4">{disease.description}</p>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {disease.symptoms.slice(0, 3).map((symptom, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
            >
              {symptom}
            </span>
          ))}
          {disease.symptoms.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
              +{disease.symptoms.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

interface DiseaseModalProps {
  disease: Disease;
  onClose: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'HIGH':
      return 'text-yellow-400';
    case 'VERY_HIGH':
      return 'text-red-500';
    case 'LOW':
      return 'text-blue-400';
    case 'VERY_LOW':
      return 'text-blue-600';
    default:
      return 'text-green-400';
  }
};

export const DiseaseModal: React.FC<DiseaseModalProps> = ({ disease, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-[#00ff9d]">{disease.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[#ff0066] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <p className="text-gray-300">{disease.description}</p>

          <div className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold text-[#00ff9d] mb-2">Symptoms</h3>
              <div className="flex flex-wrap gap-2">
                {disease.symptoms.map((symptom, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#00ff9d] mb-2">Related Parameters</h3>
              <div className="space-y-2">
                {disease.relatedParameters.map((param, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white">{param.id}</span>
                      <span className={`font-medium ${getStatusColor(param.status)}`}>
                        {param.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{param.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#00ff9d] mb-2">Treatment & Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {disease.medications && (
                  <div>
                    <h4 className="font-medium text-white mb-2">Medications</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {disease.medications.map((med, index) => (
                        <li key={index}>{med}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-white mb-2">Lifestyle Changes</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {disease.lifestyle.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#00ff9d] mb-2">Dietary Recommendations</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {disease.diet.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};