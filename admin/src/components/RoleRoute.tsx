import { Navigate } from "react-router-dom";
import { useAuth} from "../context/AuthContext";
import type { EvergreenRole } from "../context/AuthContext";
import type { ReactNode } from "react";

interface RoleRouteProps {
  children: ReactNode;
  allowed: EvergreenRole[]; // Allowed roles for this route
}

export default function RoleRoute({ children, allowed }: RoleRouteProps) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check if user role is allowed
  if (!allowed.includes(user.role)) {
    return <Navigate to="/dashboard" replace />; // Redirect if not allowed
  }

  // Render children if allowed
  return <>{children}</>;
}
