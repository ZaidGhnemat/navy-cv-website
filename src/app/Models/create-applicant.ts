export interface CreateApplicant {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
  education: string;
  experience: string;
  cvFile: File;
}

export interface Applicant {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  education: string;
  experience: string;
  cvFile: string;
}