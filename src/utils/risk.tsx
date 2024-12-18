import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, AlertOctagon } from 'lucide-react';
import { RiskLevel } from '../types/risk';

export const getRiskStyles = (level: RiskLevel) => {
  switch (level) {
    case 'bajo':
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-800',
        icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      };
    case 'medio':
      return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-800',
        icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      };
    case 'alto':
      return {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-800',
        icon: <XCircle className="h-8 w-8 text-red-500" />,
      };
    case 'critico':
      return {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-800',
        icon: <AlertOctagon className="h-8 w-8 text-purple-500" />,
      };
    default:
      return {
        bg: '',
        border: '',
        text: '',
        icon: null,
      };
  }
};