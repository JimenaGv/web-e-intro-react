import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Citas } from "./pages/Citas";
import { CitaDetalle } from "./pages/CitaDetalle";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Citas Médicas
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/citas">
                    Ver Citas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/cita/:id" element={<CitaDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
