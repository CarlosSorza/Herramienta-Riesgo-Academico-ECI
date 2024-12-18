import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { FormData, RiskLevel } from '../types/risk';
import RiskForm from './RiskForm';
import RiskResult from './RiskResult';
import BackButton from './BackButton';
import { calculateRiskScore, determineRiskLevel } from '../utils/calculations';

export default function RiskAssessment() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    hasScholarship: '',
    gpa: '',
    weightedGpa: '',
    repeatingCourses: '',
    attendance: '',
    tutoring: '',
  });
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const riskScore = calculateRiskScore(formData);
    const risk = determineRiskLevel(riskScore);
    setRiskLevel(risk);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        
        <div className="text-center mb-8">
          <Calculator className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Evaluación de Riesgo Académico</h2>
          <p className="mt-2 text-gray-600">Ingresa tu información académica para evaluar tu nivel de riesgo</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
          <RiskForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
          <RiskResult riskLevel={riskLevel} studentName={formData.fullName} />
        </div>
      </div>
    </div>
  );
}