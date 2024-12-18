import React from 'react';
import { StudentInfo } from '../types/risk';

interface StudentInfoFieldsProps {
  studentInfo: StudentInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function StudentInfoFields({ studentInfo, onChange }: StudentInfoFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre Completo
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={studentInfo.fullName}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Ingrese su nombre completo"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          ¿Pertenece a algún programa de apoyo? (Pilo Paga, Fondo de Solidaridad u otro)
        </label>
        <select
          name="hasScholarship"
          required
          value={studentInfo.hasScholarship}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Seleccione una opción</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
}