import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import Projects from "./pages/Projects";
import RoleRoute from "./components/RoleRoute";
import { PropelProvider } from './components/PropelProvider';
import LandingPage from "./components/Landingpage";
import Donate from "./pages/Donate";

export default function App() {
  const { user } = useAuth();

  return (
    <PropelProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />

        {/* Protected routes - require login */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" replace />}
        />

        {/* Role protected routes */}
        <Route
          path="/forms"
          element={
            <RoleRoute allowed={["coordinator", "admin"]}>
              <Forms />
            </RoleRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <RoleRoute allowed={["admin"]}>
              <Projects />
            </RoleRoute>
          }
        />

        {/* Default route - redirect to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PropelProvider>
  );
}