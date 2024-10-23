import { create } from 'zustand';
import { User } from '../types/auth';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Demo login logic
    if (email === 'admin@school.com' && password === 'admin123') {
      set({
        user: {
          id: '1',
          email,
          nom: 'Admin',
          prenom: 'System',
          role: 'admin'
        },
        isAuthenticated: true
      });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null, isAuthenticated: false })
}));