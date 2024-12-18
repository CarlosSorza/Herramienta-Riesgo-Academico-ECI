import React from 'react';
import { UserCircle } from 'lucide-react';
import { mockStudents } from '../utils/mockData';
import { calculateRiskScore, determineRiskLevel } from '../utils/calculations';
import RiskResult from './RiskResult';
import BackButton from './BackButton';

export default function InteractivePage() {
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleStudentSelect = (student) => {
    const riskScore = calculateRiskScore(student);
    const riskLevel = determineRiskLevel(riskScore);
    setSelectedStudent({ ...student, riskLevel });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Estudiantes Registrados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockStudents.map((student, index) => (
            <button
              key={index}
              onClick={() => handleStudentSelect(student)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="flex items-center mb-4">
                <UserCircle className="h-10 w-10 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">{student.fullName}</h3>
                  <p className="text-sm text-gray-600">
                    Promedio: {student.gpa}
                  </p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Materias repitentes: {student.repeatingCourses}</p>
                <p>Asistencia: {student.attendance}%</p>
                <p>
                  Programa de apoyo:{' '}
                  {student.hasScholarship === 'si' ? 'Sí' : 'No'}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedStudent && (
          <div className="mt-8">
            <RiskResult
              riskLevel={selectedStudent.riskLevel}
              studentName={selectedStudent.fullName}
            />
          </div>
        )}
      </div>
    </div>
  );
}