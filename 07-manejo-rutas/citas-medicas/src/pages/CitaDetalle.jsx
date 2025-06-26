/* Detalles de una cita específica */

import { useParams, useLocation } from "react-router-dom";

export const CitaDetalle = () => {
  const { id } = useParams();

  // Se utilizó el apoyo de la IA para obtener información de las citas sin necesidad de colocarlos como parámetros en la ruta (uso de useLocation).
  const { state } = useLocation();
  const { fecha, horario } = state || {};

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📋 Detalles de la Cita</h2>
      <ul className="list-group">
        <li className="list-group-item">📮 ID: {id}</li>
        <li className="list-group-item">🗓️ Fecha: {fecha}</li>
        <li className="list-group-item">🕜 Horario: {horario}</li>
      </ul>
    </div>
  );
};
