import { FormData, RiskLevel } from '../types/risk';

export const calculateRiskScore = (formData: FormData): number => {
  const gpa = (parseFloat(formData.gpa) / 5) * 4; // Normalizar a escala 4.0
  const weightedGpa = (parseFloat(formData.weightedGpa) / 5) * 4; // Normalizar a escala 4.0
  const attendance = parseInt(formData.attendance);
  
  let riskScore = 0;
  
  // Evaluar GPA regular
  if (gpa < 1.5) riskScore += 4;
  else if (gpa < 2.0) riskScore += 3;
  else if (gpa < 2.5) riskScore += 2;
  else if (gpa < 3.0) riskScore += 1;
  
  // Evaluar GPA ponderado
  if (weightedGpa < 1.5) riskScore += 4;
  else if (weightedGpa < 2.0) riskScore += 3;
  else if (weightedGpa < 2.5) riskScore += 2;
  else if (weightedGpa < 3.0) riskScore += 1;
  
  // Evaluar materias repitentes
  switch (formData.repeatingCourses) {
    case '3_o_mas':
      riskScore += 5;
      break;
    case '2':
      riskScore += 3;
      break;
    case '1':
      riskScore += 2;
      break;
  }
  
  // Evaluar asistencia
  if (attendance < 60) riskScore += 4;
  else if (attendance < 70) riskScore += 3;
  else if (attendance < 80) riskScore += 2;
  else if (attendance < 85) riskScore += 1;
  
  // Factor de reducción por tutorías
  if (formData.tutoring === 'si') {
    riskScore -= 2;
  }

  // Factor adicional por beca o apoyo financiero
  if (formData.hasScholarship === 'si') {
    riskScore += 2; // Mayor riesgo por posible pérdida de beneficio
  }
  
  return riskScore;
};

export const determineRiskLevel = (riskScore: number): RiskLevel => {
  if (riskScore >= 10) return 'critico';
  if (riskScore >= 7) return 'alto';
  if (riskScore >= 4) return 'medio';
  return 'bajo';
};