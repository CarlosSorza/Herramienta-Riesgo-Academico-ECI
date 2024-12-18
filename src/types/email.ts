export interface EmailRecipient {
  email: string;
  name: string;
  role: string;
}

export interface AlertEmail {
  student: string;
  riskLevel: string;
  academicData: {
    gpa: string;
    weightedGpa: string;
    repeatingCourses: string;
    attendance: string;
    tutoring: string;
    hasScholarship: string;
  };
  recommendations: string[];
  timestamp: string;
}