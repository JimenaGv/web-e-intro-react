import { useState, useEffect, useRef } from "react";

export function BitacoraExploracion() {
  // Estado lista de planetas
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem("planetas")) || []
  );
  // Estados para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState("");
  const inputImagenRef = useRef(null);

  // Guardar los planetas en localStorage cada vez que se actualizan
  useEffect(() => {
    localStorage.setItem("planetas", JSON.stringify(planetas));
  }, [planetas]);

  // Validación del formulario
  const validarFormulario = () => {
    if (!nombre.trim() || !descripcion.trim()) {
      setError("El nombre y la descripción son campos obligatorios.");
      return false;
    }
    setError("");
    return true;
  };

  // Validación de la imagen
  const validarImagen = (file) => {
    if (file && !file.type.startsWith("image/")) {
      setError("El archivo debe ser una imagen válida.");
      return false;
    }
    return true;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;
    if (imagen && !validarImagen(imagen)) return;

    // Se crea un nuevo planeta con los datos ingresados
    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    setPlanetas([...planetas, nuevoPlaneta]); // Se actualiza la lista
    setNombre("");
    setDescripcion("");
    setImagen(null);
    if (inputImagenRef.current) inputImagenRef.current.value = ""; // Se limpian los campos del formulario
  };

  // Eliminación de un planeta de la bitácora
  const handleDelete = (index) => {
    const nuevosPlanetas = planetas.filter((_, i) => i !== index);
    setPlanetas(nuevosPlanetas);
  }; // Se filtra y se actualiza la lista de planetas

  // Interfaz de Usuario
  return (
    <div className="bitacora">
      <h1>Bitácora de Exploración 📒</h1>

      {/* Muestra errores en caso de que haya problemas */}
      {error && <p className="error">{error}</p>}

      {/* Formulario para registrar planetas */}
      <form className="bitacora-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          //required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          //required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit">Guardar</button>
      </form>

      {/* Lista de planetas registrados */}
      <h2>Planetas Registrados 🪐✨</h2>
      <ul className="bitacora-lista">
        {planetas.map((planeta, index) => (
          <li className="bitacora-item" key={index}>
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && (
              <img
                className="bitacora-imagen"
                src={planeta.imagen}
                alt={planeta.nombre}
              />
            )}
            <button
              className="eliminar-btn"
              onClick={() => handleDelete(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
