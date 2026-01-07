import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Valid roles
export type EvergreenRole = "admin" | "coordinator" | "facilitator";

// User object - updated to match Dashboard expectations
export interface AuthUser {
  id: string;           // Changed from uid to id for Dashboard compatibility
  email: string;
  role: EvergreenRole;
  password: string; // only for test accounts
  name: string;     // Added for Dashboard
}

// Auth context type
interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  loading: boolean;
}

// Test accounts - updated with names
const testUsers: AuthUser[] = [
  { 
    id: "1", 
    email: "admin@example.com", 
    password: "admin123", 
    role: "admin",
    name: "Admin User" 
  },
  { 
    id: "2", 
    email: "coordinator@example.com", 
    password: "coord123", 
    role: "coordinator",
    name: "Coordinator User" 
  },
  { 
    id: "3", 
    email: "facilitator@example.com", 
    password: "fac123", 
    role: "facilitator",
    name: "Facilitator User" 
  },
];

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  const login = (email: string, password: string) => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const foundUser = testUsers.find(u => u.email === email && u.password === password);
      if (foundUser) {
        setUser(foundUser);
        setLoading(false);
        return true;
      }
      setLoading(false);
      return false;
    }, 1000);
    
    return true; // temporary return
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}