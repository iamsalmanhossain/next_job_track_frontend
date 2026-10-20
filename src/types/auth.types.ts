export type UserRole = 'USER' | 'ADMIN' | 'RECRUITER';
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'PENDING';

export interface UserProfile {
  id?: string;
  phone?: string;
  location?: string;
  bio?: string;
  headline?: string;
  website?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  skills?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: UserRole | string;
  status?: UserStatus | string;
  emailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
  profileImage?: string;
  profile?: UserProfile;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
  message?: string;
}

export interface UpdateProfileDTO {
  phone?: string;
  location?: string;
  bio?: string;
  headline?: string;
  website?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  skills?: string;
}

