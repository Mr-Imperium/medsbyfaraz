import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { BloodParameter } from '../../types/medical';

interface ParameterGridProps {
  parameters: BloodParameter[];
  onValueChange: (id: string, value: number) => void;
}

const ParameterGrid = ({ parameters, onValueChange }: ParameterGridProps) => {
  const categories = ['Basic','LFT', 'RFT', 'TFT', 'Cholesterol','Blood','E&H','CSF'];

  const handleIncrement = (param: BloodParameter) => {
    onValueChange(param.id, param.value + 1);
  };

  const handleDecrement = (param: BloodParameter) => {
    onValueChange(param.id, param.value - 1);
  };

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const categoryParams = parameters.filter((param) => param.category === category);
        
        return (
          <div key={category} className="space-y-3">
            <h3 className="text-xl font-semibold text-[#00ff9d]">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {categoryParams.map((param) => (
                <div
                  key={param.id}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-3 hover:border-[#00ff9d] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-medium text-sm">{param.name}</h4>
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={param.value}
                            onChange={(e) => onValueChange(param.id, Number(e.target.value))}
                            className="w-16 bg-gray-800 border border-gray-700 rounded px-1 py-0.5 text-sm focus:outline-none focus:border-[#00ff9d] appearance-none"
                          />
                          <span className="text-xs text-gray-400">{param.unit}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">
                        Normal Range: {param.normalRange.min}-{param.normalRange.max} {param.unit}
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 ml-1">
                      <button
                        onClick={() => handleIncrement(param)}
                        className="text-gray-400 hover:text-[#00ff9d] p-0.5"
                      >
                        <ArrowUp className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleDecrement(param)}
                        className="text-gray-400 hover:text-[#00ff9d] p-0.5"
                      >
                        <ArrowDown className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParameterGrid;