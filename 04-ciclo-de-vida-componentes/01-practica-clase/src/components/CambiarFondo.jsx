import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const CambiarFondo = () => {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    //Cuando se monta el componente
    document.body.style.backgroundColor = "#232323";
    document.body.style.color = "white";

    return () => {
      document.body.style.backgroundColor = "lightgray";
      document.body.style.color = "#232323";
    };
  }, []);

  useEffect(() => {
    console.log("Componente actualizado");
  }, [count]);

  return (
    <div>
      <p>
        Contador del usuario {user.nombre}: {count}
      </p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
