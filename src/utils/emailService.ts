import { EmailRecipient, AlertEmail } from '../types/email';
import { EMAIL_RECIPIENTS } from '../config/emailConfig';
import { FormData, RiskLevel } from '../types/risk';
import { getRecommendations } from './recommendations';

const formatEmailBody = (data: AlertEmail): string => {
  const {
    student,
    riskLevel,
    academicData,
    recommendations,
    timestamp
  } = data;

  return `
ALERTA DE RIESGO ACADÉMICO
--------------------------
Fecha y hora: ${timestamp}
Nivel de Riesgo: ${riskLevel.toUpperCase()}

INFORMACIÓN DEL ESTUDIANTE
-------------------------
Nombre: ${student}
Promedio Actual: ${academicData.gpa}
Promedio Ponderado: ${academicData.weightedGpa}
Materias Repitentes: ${academicData.repeatingCourses}
Porcentaje de Asistencia: ${academicData.attendance}%
Asiste a Tutorías: ${academicData.tutoring}
Programa de Apoyo: ${academicData.hasScholarship === 'si' ? 'Sí' : 'No'}

RECOMENDACIONES
--------------
${recommendations.map(rec => `• ${rec}`).join('\n')}

Esta es una alerta automática generada por el Sistema de Evaluación de Riesgo Académico.
Por favor, tomar las acciones correspondientes según el protocolo establecido.
`;
};

export const sendRiskAlert = async (
  formData: FormData,
  riskLevel: RiskLevel
): Promise<void> => {
  if (riskLevel !== 'alto' && riskLevel !== 'critico') {
    return;
  }

  const recommendations = getRecommendations(riskLevel);
  
  const alertData: AlertEmail = {
    student: formData.fullName,
    riskLevel,
    academicData: {
      gpa: formData.gpa,
      weightedGpa: formData.weightedGpa,
      repeatingCourses: formData.repeatingCourses,
      attendance: formData.attendance,
      tutoring: formData.tutoring,
      hasScholarship: formData.hasScholarship
    },
    recommendations,
    timestamp: new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  };

  const emailBody = formatEmailBody(alertData);
  
  try {
    // Aquí iría la implementación real del envío de correo
    // Usando servicios como SendGrid, AWS SES, etc.
    console.log('Alerta enviada a:', EMAIL_RECIPIENTS.map(r => r.email).join(', '));
    console.log('Contenido del correo:', emailBody);
  } catch (error) {
    console.error('Error al enviar la alerta:', error);
  }
};