import { useEffect } from "react";

export function Planeta({ nombre }) {
  // Efecto que se ejecuta cuando el planeta aparece y desaparece
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`); // Mensaje al montar

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`); // Mensaje al desmontar
    };
  }, []);

  return (
    <div className="planeta">
      <h3>{nombre}</h3>
    </div>
  );
}
