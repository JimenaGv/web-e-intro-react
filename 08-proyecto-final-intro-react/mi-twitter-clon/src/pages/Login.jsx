import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Página con el formulario de inicio de sesión con validación simple
export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de usuario y contraseña
    if (username === "Admin" && password === "1234") {
      const userData = { username };
      onLogin(username);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 w-50">
      <div className="mb-3">
        <input
          ref={focusRef}
          className="form-control"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Iniciar sesión
      </button>
      <p style={{ paddingTop: "30px" }}>
        ⚠️ Nota: Para ingresar usar "Admin" como nombre de usuario y "1234" como
        contraseña.
      </p>
    </form>
  );
};
