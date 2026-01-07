export type UserRole = 'admin' | 'coordinator' | 'facilitator';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}