/* Lista de citas médicas */
import { Link } from "react-router-dom";

const citas = [
  {
    id: 1,
    paciente: "Juan Pérez",
    fecha: "25-06-2025",
    horario: "10:00-11:00",
  },
  {
    id: 2,
    paciente: "Ana Gómez",
    fecha: "25-06-2025",
    horario: "11:30-12:30",
  },
  {
    id: 3,
    paciente: "Pedro Romero",
    fecha: "26-06-2025",
    horario: "12:00-13:00",
  },
  {
    id: 4,
    paciente: "Sandra Martínez",
    fecha: "26-06-2025",
    horario: "14:00-15:00",
  },
  {
    id: 5,
    paciente: "Alondra Franco",
    fecha: "27-06-2025",
    horario: "10:00-11:00",
  },
];

export const Citas = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">🩺 Listado de Citas</h2>
      <p>Pacientes con cita agendada:</p>
      <div className="row">
        {citas.map((cita) => (
          <div className="col-md-6" key={cita.id}>
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{cita.paciente}</h5>
                <Link
                  to={`/cita/${cita.id}`}
                  state={{ fecha: cita.fecha, horario: cita.horario }}
                  className="btn btn-primary"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
