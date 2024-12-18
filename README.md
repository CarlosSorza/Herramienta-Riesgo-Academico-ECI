# Evaluación de Riesgo Académico

## Descripción del Proyecto

La herramienta "Evaluación de Riesgo Académico" es una aplicación desarrollada para identificar el nivel de riesgo académico de los estudiantes de la Universidad Escuela Colombiana de Ingeniería Julio Garavito. Esta herramienta permite a los estudiantes y directivos obtener una evaluación basada en indicadores clave del desempeño académico, facilitando la toma de decisiones informadas para prevenir el bajo rendimiento y promover el éxito académico.

## Objetivos

- Diagnóstico temprano: Identificar estudiantes en riesgo académico de manera temprana mediante el análisis de datos académicos clave.

- Automatización: Simplificar el proceso de evaluación de riesgo académico utilizando una aplicación interactiva.

- Orientación personalizada: Ofrecer una herramienta que permita la planificación de estrategias de apoyo específicas para cada estudiante.

## Tecnologías Utilizadas

### Frontend

- React: Biblioteca principal utilizada para la creación de componentes interactivos y manejo de estados.

- Lucide-react: Para iconografía intuitiva.

## Backend

- Se espera integración con servicios REST para gestionar y almacenar datos académicos.

## Tipado

- TypeScript: Garantiza un código más robusto y menos propenso a errores.

## Características del Sistema

### Formulario de Evaluación:

- Permite a los estudiantes ingresar datos académicos relevantes como promedio actual, promedio ponderado, asistencia, y número de materias repetidas.

- Validación en tiempo real para garantizar la integridad de los datos ingresados.

### Cálculo del Riesgo:

- Utiliza algoritmos en el backend para calcular un puntaje de riesgo basado en los datos ingresados.

- Determina el nivel de riesgo académico (“Bajo”, “Moderado”, “Alto” o "Crítico") según los criterios establecidos.

### Resultados Personalizados:

- Muestra el nivel de riesgo académico del estudiante y proporciona una evaluación clara y concisa.

### Interfaz Intuitiva:

- Diseño amigable y accesible, con una navegación simple y enfoque en la experiencia del usuario.

## Cómo Funciona

1. Ingreso de Datos:

- El usuario completa un formulario interactivo con información académica.

- Campos clave: nombre completo, promedio académico, promedio ponderado, materias repetidas, asistencia y participación en tutorías.

2. Cálculo del Puntaje de Riesgo:

- La función calculateRiskScore procesa los datos ingresados y genera un puntaje basado en reglas predeterminadas.

3. Evaluación del Nivel de Riesgo:

- La función determineRiskLevel categoriza el puntaje en uno de los tres niveles de riesgo académico.

4. Presentación de Resultados:

- El componente RiskResult muestra al usuario su nivel de riesgo académico junto con su nombre.

## Estructura del Proyecto

- RiskAssessment:Componente principal que orquesta el flujo de la aplicación, manejando estados y subcomponentes.

- RiskForm:Componente de formulario que recoge la información académica del estudiante.

- RiskResult:Componente que muestra el resultado de la evaluación del nivel de riesgo.

- Utilidades:Funciones de cálculo (calculateRiskScore, determineRiskLevel) que procesan los datos académicos.

## Instalación y Configuración


### Clonar el Repositorio:
```
git clone https://github.com/CarlosSorza/Herramienta-Riesgo-Academico-ECI.git
```
### Instalar Dependencias:
```
npm install
```
### Ejecutar el Proyecto:
```
npm start
```
# Acceder a la Aplicación:
# Abre un navegador y dirígete a:
http://localhost:5173

## Futuras Extensiones

1. Integración con el Sistema Académico: Automatizar la carga de datos de los estudiantes desde la base de datos institucional.

2. Análisis Predictivo: Incorporar algoritmos de Machine Learning para predecir tendencias de riesgo académico.

3. Reportes Automatizados: Generar informes estadísticos para los directivos sobre los niveles de riesgo globales y por cohortes.

## Conclusiones

- La herramienta "Evaluación de Riesgo Académico" representa un avance significativo en el monitoreo del desempeño académico de los estudiantes, permitiendo identificar riesgos de manera proactiva y apoyar el diseño de estrategias de intervención oportunas. 

- Este proyecto es una demostración del compromiso de la Universidad Escuela Colombiana de Ingeniería Julio Garavito con la excelencia académica y la innovación tecnológica.

## Autor

### Carlos Alberto Sorza Gómez [carlosorza](https://github.com/CarlosSorza)
