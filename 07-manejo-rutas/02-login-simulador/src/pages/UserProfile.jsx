import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const UserProfile = () => {
  const { id } = useParams();
  const { logout } = useAuth();

  return (
    <div>
      <h1>Perfil del usuario {id}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

/* Lo que se muestre depende del id del usuario */
