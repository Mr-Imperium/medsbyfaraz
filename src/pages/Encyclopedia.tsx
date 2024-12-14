import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { diseases } from '../data/diseases';
import { categories } from '../data/diseases/categories';
import { DiseaseCard, DiseaseModal } from '../components/encyclopedia/DiseaseCard';
import { Disease } from '../types/medical';

const Encyclopedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const filteredDiseases = useMemo(() => {
    return diseases.filter(disease => {
      const matchesSearch = searchTerm === '' || [
        disease.name,
        disease.description,
        ...disease.symptoms,
        ...disease.medications || [],
        ...disease.lifestyle,
        ...disease.diet
      ].some(text => 
        text.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const matchesCategory = !selectedCategory || disease.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[#00ff9d]">Disease Encyclopedia</h1>
        <p className="text-gray-400">
          Explore comprehensive information about various medical conditions, their symptoms,
          and treatment options.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search diseases, symptoms, treatments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-[#00ff9d] text-white"
          />
        </div>
        <div className="sm:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00ff9d] text-white appearance-none"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease) => (
            <div key={disease.id} onClick={() => setSelectedDisease(disease)}>
              <DiseaseCard 
                disease={disease} 
                onClick={() => setSelectedDisease(disease)} 
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-400">No diseases found matching your search criteria.</p>
          </div>
        )}
      </div>

      {selectedDisease && (
        <DiseaseModal
          disease={selectedDisease}
          onClose={() => setSelectedDisease(null)}
        />
      )}
    </div>
  );
};

export default Encyclopedia;