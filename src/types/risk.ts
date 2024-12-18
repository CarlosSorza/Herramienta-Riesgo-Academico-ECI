export type RiskLevel = 'bajo' | 'medio' | 'alto' | 'critico' | null;

export type ScholarshipStatus = 'si' | 'no' | '';

export interface StudentInfo {
  fullName: string;
  hasScholarship: ScholarshipStatus;
}

export interface FormData extends StudentInfo {
  gpa: string;
  weightedGpa: string;
  repeatingCourses: string;
  attendance: string;
  tutoring: string;
}