import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import apiClient from '../services/apiClient';

// --- Type Definitions ---
interface PublicUser {
  id: string;
  name: string;
  email: string | null;
}

interface PublicAuthContextType {
  user: PublicUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const PublicAuthContext = createContext<PublicAuthContextType | undefined>(undefined);

export const PublicAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // --- Monitor auth state ---
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (err) {
        console.error("Failed to parse user", err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // --- Login function ---
  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { token, user: loggedInUser } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser({
        id: loggedInUser.id,
        name: loggedInUser.name || "Anonymous",
        email: loggedInUser.email,
      });

      return { success: true };
    } catch (err: any) {
      console.error("Login error:", err);
      return { success: false, error: err.response?.data?.message || err.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  // --- Logout function ---
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete apiClient.defaults.headers.common['Authorization'];
    setUser(null);
  }, []);

  const value = { 
    user, 
    isAuthenticated: !!user, 
    isLoading, 
    login, 
    logout 
  };

  return (
    <PublicAuthContext.Provider value={value}>
      {children}
    </PublicAuthContext.Provider>
  );
};

export const usePublicAuth = () => {
  const context = useContext(PublicAuthContext);
  if (context === undefined) {
    throw new Error('usePublicAuth must be used within a PublicAuthProvider');
  }
  return context;
};
