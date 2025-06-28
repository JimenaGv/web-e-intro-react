import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Configuración de las rutas y gestión del login del usuario
const AppContent = ({ user, login, logout }) => {
  const location = useLocation();

  return (
    <>
      {user && location.pathname !== "/login" && (
        <Navbar user={user} logout={logout} />
      )}
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} logout={logout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar info del usuario desde localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    // Actualizar el estado y guardar info en localStorage
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    // Eliminar info de usuario del estado y localStorage
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <AppContent user={user} login={login} logout={logout} />
    </Router>
  );
};
