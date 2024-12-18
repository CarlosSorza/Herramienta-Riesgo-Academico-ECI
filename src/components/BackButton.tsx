import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-eci-red hover:text-eci-darkred transition-colors"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      Volver al Inicio
    </Link>
  );
}