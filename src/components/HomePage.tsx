import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <img 
          src="/logo.svg" 
          alt="ECI Logo" 
          className="h-24 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-eci-red mb-8">
          Sistema de Evaluación de Riesgo Académico
        </h1>
        <p className="text-xl text-eci-gray-600 mb-12">
          Seleccione el tipo de tratamiento que desea realizar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/manual"
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-eci-red"
          >
            <GraduationCap className="h-16 w-16 text-eci-red mb-4" />
            <h2 className="text-2xl font-semibold text-eci-gray-900 mb-2">
              Tratamiento Manual
            </h2>
            <p className="text-eci-gray-600 text-center">
              Evalúe el riesgo académico ingresando la información manualmente
            </p>
          </Link>

          <Link
            to="/interactive"
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-eci-red"
          >
            <Users className="h-16 w-16 text-eci-red mb-4" />
            <h2 className="text-2xl font-semibold text-eci-gray-900 mb-2">
              Tratamiento Interactivo
            </h2>
            <p className="text-eci-gray-600 text-center">
              Visualice y analice datos de estudiantes previamente registrados
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}