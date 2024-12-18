import React from 'react';
import { Calculator } from 'lucide-react';
import { FormData } from '../types/risk';
import StudentInfoFields from './StudentInfoFields';

interface RiskFormProps {
  formData: FormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function RiskForm({ formData, onSubmit, onChange }: RiskFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <StudentInfoFields studentInfo={formData} onChange={onChange} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Promedio Actual (0.0 - 5.0)
          </label>
          <input
            type="number"
            name="gpa"
            step="0.1"
            min="0"
            max="5"
            required
            value={formData.gpa}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eci-red focus:ring focus:ring-eci-red/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Promedio Ponderado (0.0 - 5.0)
          </label>
          <input
            type="number"
            name="weightedGpa"
            step="0.1"
            min="0"
            max="5"
            required
            value={formData.weightedGpa}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eci-red focus:ring focus:ring-eci-red/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Materias Repitentes
          </label>
          <select
            name="repeatingCourses"
            required
            value={formData.repeatingCourses}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eci-red focus:ring focus:ring-eci-red/20"
          >
            <option value="">Seleccione cantidad</option>
            <option value="ninguna">Ninguna</option>
            <option value="1">1 materia</option>
            <option value="2">2 materias</option>
            <option value="3_o_mas">3 o más materias</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Porcentaje de Asistencia (%)
          </label>
          <input
            type="number"
            name="attendance"
            min="0"
            max="100"
            required
            value={formData.attendance}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eci-red focus:ring focus:ring-eci-red/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ¿Asiste a Tutorías?
          </label>
          <select
            name="tutoring"
            required
            value={formData.tutoring}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eci-red focus:ring focus:ring-eci-red/20"
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-eci-red hover:bg-eci-darkred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eci-red transition-colors"
        >
          <Calculator className="mr-2 h-5 w-5" />
          Calcular Nivel de Riesgo
        </button>
      </div>
    </form>
  );
}