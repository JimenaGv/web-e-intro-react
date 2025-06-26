/* Creación del contexto */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

/* Hook personalizado */
export function useAuth() {
  return useContext(AuthContext);
}
/* const {login, logout} = useContext(AuthContext) */

/* Creación del proveedor del contexto */
export function AuthProvider({ children }) {
  const [isAutenticated, setIsAutenticated] = useState(false);

  const login = (callback) => {
    setIsAutenticated(true);
    callback(); /* Redirecciona */
  };
  const logout = () => {
    setIsAutenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAutenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
