// Componente que incluye la barra de navegación y el contenido principal
import { Navbar } from "./components/Navbar";

export const Layout = ({ user, logout, children }) => (
  <>
    <Navbar user={user} logout={logout} />
    <main>{children}</main>
  </>
); // <main>{children}</main> Renderiza cualquier contenido; ej. Home, Profile
