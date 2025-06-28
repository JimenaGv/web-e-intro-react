import { Link } from "react-router-dom";

// Componente para la barra de navegación con enlaces a Inicio y Perfil, más el botón de Cerrar sesión
export const Navbar = ({ logout }) => {
  return (
    <>
      {/* <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/profile">Perfil</Link>
      <button onClick={logout}>Cerrar sesión</button>
    </nav> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inicio
          </Link>
          <div className="d-flex gap-3">
            <Link className="btn btn-outline-light" to="/profile">
              Perfil
            </Link>
            <button className="btn btn-light" onClick={logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
