import { useState, useEffect } from 'react';
import { User } from '../types/user';

// Mock data - replace with real authentication
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@evergreen.rw',
  role: 'admin', // Change this to test different roles
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000);
  }, []);

  const logout = () => {
    setUser(null);
    // Add actual logout logic here
  };

  return { user, loading, logout };
};