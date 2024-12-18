import React from 'react';
import { Info } from 'lucide-react';
import { RiskLevel } from '../types/risk';
import { getRiskStyles } from '../utils/risk';
import { sendRiskAlert } from '../utils/emailService';

interface RiskResultProps {
  riskLevel: RiskLevel;
  studentName: string;
  formData?: FormData;
}

export default function RiskResult({ riskLevel, studentName, formData }: RiskResultProps) {
  React.useEffect(() => {
    if (formData && (riskLevel === 'alto' || riskLevel === 'critico')) {
      sendRiskAlert(formData, riskLevel);
    }
  }, [riskLevel, formData]);

  if (!riskLevel) return null;

  const styles = getRiskStyles(riskLevel);
  const formattedName = studentName.split(' ')[0];

  return (
    <div className="mt-8">
      <div className={`rounded-lg p-6 ${styles.bg} border ${styles.border}`}>
        <div className="flex items-center">
          {styles.icon}
          <div className="ml-4">
            <h3 className={`text-lg font-medium ${styles.text}`}>
              {formattedName}, tu nivel de riesgo es: {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {riskLevel === 'bajo' && "¡Vas por buen camino! Sigue así."}
              {riskLevel === 'medio' && "Considera buscar apoyo académico adicional."}
              {riskLevel === 'alto' && "Se recomienda intervención académica inmediata."}
              {riskLevel === 'critico' && "¡Alerta! Situación académica crítica que requiere atención urgente."}
            </p>
            {(riskLevel === 'alto' || riskLevel === 'critico') && (
              <p className="mt-2 text-sm font-medium text-eci-red">
                Se ha enviado una notificación al equipo de apoyo académico.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg p-6 border border-eci-red/20">
        <h4 className="flex items-center text-eci-red font-medium">
          <Info className="h-5 w-5 mr-2" />
          Recomendaciones Personalizadas
        </h4>
        <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
          {/* ... (resto del código de recomendaciones igual) ... */}
        </ul>
      </div>
    </div>
  );
}