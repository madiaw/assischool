export type UserRole = 'admin' | 'professeur' | 'eleve' | 'parent';

export interface User {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}