import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isAutenticated } = useAuth();

  return isAutenticated ? children : <Navigate to="/login" />;
};

/* Si es falso, se muestra la página de ingreso, si es verdadero se muestra la información (children) */
