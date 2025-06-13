import { useState, useEffect, useMemo } from "react";
import { Planeta } from "./Planeta";

export function ExploradorEspacial() {
  // Estado inicial de la nave
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [activo, setActivo] = useState(true);

  // Efectos secundarios
  // Ciclo de vida de los componentes
  useEffect(() => {
    console.log("¡El panel de control está listo!"); // Montaje

    if (!activo) return; // No inicia intervalo si no hay combustible

    const intervalo = setInterval(() => {
      setDistancia((d) => d + 100); // Incrementa distancia
      //setCombustible((c) => c - 1); // Reduce combustible

      // Otra forma: Tomar estado anterior o valor previo
      //setCombustible(prev => prev-1);

      setCombustible((prev) => {
        const combustibleActual = prev > 0 ? prev - 1 : 0;

        if (combustibleActual === 0) {
          setActivo(false); // Detener simulación
          setEstadoNave(
            "El viaje ha terminado. ¡Te has quedado sin combustible!"
          );
        }

        return combustibleActual;
      });
    }, 1000); // Simula el vuelo

    return () => {
      clearInterval(intervalo); //Desmontaje. Limpieza del intervalo de vuelo
      console.log("El panel de control se ha apagado.");
    };
  }, [activo]); // Se ejecuta cuando "activo" cambia

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  // Mensaje de estado memorizado para evitar cálculos innecesarios
  const mensajeEstado = useMemo(() => `Estado: ${estadoNave}`, [estadoNave]);

  // Interfaz de Usuario
  return (
    <div className={`panel-control ${activo ? "" : "panel-inactivo"}`}>
      {/* Información del panel */}
      <h1>Panel de Control 🚀🎚️</h1>
      <p>Distancia recorrida: {distancia} km</p>
      <p>Combustible restante: {combustible}%</p>
      <p className="estado-nave">{mensajeEstado}</p>

      {/* Botón para aterrizar y registrar planetas */}
      {/* Desactivar el botón si no hay combustible */}
      <button
        disabled={!activo}
        onClick={() => {
          setEstadoNave("Aterrizando");
          setPlanetasVisitados([
            ...planetasVisitados,
            `Planeta ${planetasVisitados.length + 1}`,
          ]);
        }}
      >
        Aterrizar
      </button>

      {/* Lista de planetas visitados */}
      <div className="planetas-lista">
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </div>
    </div>
  );
}
