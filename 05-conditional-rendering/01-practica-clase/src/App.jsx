/* Ejercicio 2 */
/* import { useState } from "react";
import { StatusMessage } from "./components/StatusMessage"; */
/* Ejercicio 1 */
/* import { WelcomeMessage } from "./components/WelcomeMessage"; */

/* Ejercicio 3 */
/* Composición de componentes */
/* function Header() {
  return <h1>Bienvenido a mi aplicación</h1>;
}

function Content() {
  return <p>Este es el contenido principal de la aplicación.</p>;
} */

/* Ejercicio 4 */
/* function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
} */

/* Ejercicio 5 */

/* npm install @mui/material @emotion/react @emotion/styled */

import Button from "@mui/material/Button";

function Modal({ title, content }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        backgroundColor: "lightgray",
      }}
    >
      <h2>{title}</h2>

      <p>{content}</p>

      <Button variant="contained">Contained</Button>
    </div>
  );
}

function App() {
  /* const [status, setStatus] = useState(""); */

  return (
    <>
      {/* Ejercicio 1 */}
      {/* <WelcomeMessage isLoggedIn={true}/> */}

      {/* Ejercicio 2 */}
      {/* Interfaz de usuario */}
      {/*  <button onClick={() => setStatus("loading")}>Carga</button>
      <button onClick={() => setStatus("success")}>Éxito</button>
      <button onClick={() => setStatus("error")}>Error</button>

      <StatusMessage status={status} /> */}

      {/* Ejercicio 3 */}
      {/* <div>
        <Header />

        <Content />
      </div> */}

      {/* Ejercicio 4 */}
      {/*  <Card>
        <h2>Título dentro de Card</h2>

        <p>Este es un contenido dentro de la tarjeta.</p>
      </Card> */}

      {/* Ejercicio 5 */}
      <Modal title="Aviso" content="Este es un mensaje importante." />
    </>
  );
}

export default App;

/* MATERIAL UI ⚠️⚠️⚠️⚠️⚠️✨*/
/* Similar a Bootstrap. Permite obtener estilos */
