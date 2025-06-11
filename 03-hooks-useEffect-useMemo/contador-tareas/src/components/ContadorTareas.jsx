import { useState, useEffect, useMemo } from "react";
import "../css/ContadorTareas.css"

export function ContadorTareas() {
  // Gestión de los estados de almacenamiento de tareas, entrada de una nueva tarea y duración de la tarea en minutos
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [duracion, setDuracion] = useState("");

  // Gestión del estado del filtro por duración mínima
  const [filtroDuracion, setFiltroDuracion] = useState("");
  // Gestión del estado para alternar la vista entre todas las tareas y las recientes (10 min)
  const [mostrarRecientes, setMostrarRecientes] = useState(false);

  // Efecto secundario: Actualizar el título del documento (página) cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [tareas]); // Se ejecuta cada vez que las tareas cambian

  // (Memorizar) Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    //console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas
  // Si las tareas no cambian, se reutiliza el valor calculado previamente, evitando cálculos innecesarios en cada renderizado

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion),
        fecha: Date.now(), // Guardar fecha actual en milisegundos
      };
      setTareas([...tareas, nuevaTareaObj]); // Actualizar estado de "tareas"
      setNuevaTarea("");
      setDuracion("");
      // Limpiar inputs
    }
  };

  // Filtrado de tareas según duración mínima y si han sido agregadas recientemente
  const tareasFiltradas = useMemo(() => {
    return tareas.filter((tarea) => {
      const cumpleDuracion = filtroDuracion
        ? tarea.duracion >= parseInt(filtroDuracion)
        : true;
      const esReciente = mostrarRecientes
        ? Date.now() - tarea.fecha < 600000
        : true; // Últimos 10 minutos

      return cumpleDuracion && esReciente;
    });
  }, [tareas, filtroDuracion, mostrarRecientes]);

  // Guardar tareas cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Cargar tareas guardadas en el localStorage al iniciar la app
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // Renderizado del componente
  return (
    <div>
      <h1>Contador de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>
      <div>
        <input
          type="number"
          value={filtroDuracion}
          onChange={(e) => setFiltroDuracion(e.target.value)}
          placeholder="Duración mínima"
        />
      </div>
      <div>
        <button onClick={() => setMostrarRecientes(!mostrarRecientes)}>
          {" "}
          {mostrarRecientes ? "Mostrar todas" : "Mostrar recientes"}
        </button>
      </div>

      <h2>🗒️ Tareas</h2>
      <ul>
        {tareasFiltradas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre}: {tarea.duracion} minutos
          </li>
        ))}
      </ul>

      <h3>⏱️ Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}
