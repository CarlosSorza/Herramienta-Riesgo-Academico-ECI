import { FormData } from '../types/risk';

const nombres = [
  'Ana María González',
  'Carlos Alberto Rodríguez',
  'Juan Diego Martínez',
  'Laura Sofía Pérez',
  'Miguel Ángel Ramírez',
  'Valentina Torres',
  'Daniel Eduardo Castro',
  'María José López',
  'Santiago Herrera',
  'Isabella Sánchez'
];

const generateRandomData = (): FormData => {
  return {
    fullName: nombres[Math.floor(Math.random() * nombres.length)],
    hasScholarship: Math.random() > 0.5 ? 'si' : 'no',
    gpa: (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1),
    weightedGpa: (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1),
    repeatingCourses: ['ninguna', '1', '2', '3_o_mas'][Math.floor(Math.random() * 4)],
    attendance: (Math.random() * (100 - 50) + 50).toFixed(0),
    tutoring: Math.random() > 0.5 ? 'si' : 'no',
  };
};

export const mockStudents: FormData[] = Array.from({ length: 10 }, generateRandomData);