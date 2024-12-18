import { RiskLevel } from '../types/risk';

export const getRecommendations = (riskLevel: RiskLevel): string[] => {
  switch (riskLevel) {
    case 'alto':
      return [
        'Se requiere reunión inmediata con el asesor académico',
        'Inscripción obligatoria en el programa intensivo de tutorías',
        'Considerar reducción de la carga académica para el próximo semestre',
        'Participación en talleres de técnicas de estudio',
        'Seguimiento quincenal con consejero académico',
        'Evaluación de factores externos que puedan estar afectando el rendimiento'
      ];
    case 'critico':
      return [
        'Reunión URGENTE con el consejo académico en las próximas 48 horas',
        'Evaluación inmediata de la situación académica actual',
        'Desarrollo de un plan de recuperación académica personalizado',
        'Seguimiento semanal obligatorio con tutores y consejeros',
        'Reducción significativa de la carga académica recomendada',
        'Evaluación psicológica y de bienestar estudiantil',
        'Consideración de opciones de apoyo adicional o reorientación académica',
        'Revisión de la situación con el programa de apoyo financiero (si aplica)'
      ];
    default:
      return [];
  }
};