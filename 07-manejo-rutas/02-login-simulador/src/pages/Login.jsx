import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const { login } = useAuth(); /* Obtener info del contexto */
  const navigate = useNavigate(); /* Redireccionar */

  const handleLogin = (e) => {
    e.preventDefault();

    // Llamar login y redireccionar al perfil del usuario
    login(() => {
      navigate("/user/123");
    });
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
