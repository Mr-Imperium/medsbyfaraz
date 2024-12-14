import React from 'react';
import { Activity, Brain, Shield, AlertTriangle } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-[#00ff9d]">About MediCheck</h1>
        <p className="text-gray-300 max-w-3xl">
          MediCheck is an advanced medical information platform designed to help users understand
          their health through symptom analysis and comprehensive medical knowledge. Our platform
          combines cutting-edge technology with medical expertise to provide reliable health insights.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <Activity className="h-8 w-8 text-[#00ff9d] mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Symptom Analysis</h2>
          <p className="text-gray-400">
            Our advanced algorithm analyzes your symptoms and blood parameters to provide
            potential health insights and recommendations.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <Brain className="h-8 w-8 text-[#00ff9d] mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">AI Technology</h2>
          <p className="text-gray-400">
            Powered by machine learning algorithms that continuously learn and improve
            from medical data to provide accurate health assessments.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <Shield className="h-8 w-8 text-[#00ff9d] mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Privacy First</h2>
          <p className="text-gray-400">
            Your health data is encrypted and protected. We prioritize your privacy
            and follow strict security protocols.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-3xl">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="h-6 w-6 text-[#ff0066] flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Medical Disclaimer</h2>
            <p className="text-gray-400">
              The information provided by MediCheck is for general informational purposes only
              and is not a substitute for professional medical advice. Always seek the advice
              of your physician or other qualified health provider with any questions you may
              have regarding a medical condition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;