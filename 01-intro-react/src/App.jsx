import { Card } from "./components/Card";

/* Integrar el Componente en App*/

function App() {
  return (
    <>
      <h1>Tarjetas de Presentación</h1>
      <div className="container">
        <Card
          nombre={"Carlos López"}
          profesion={"Diseñador web"}
          descripcion={"Especialista en UI/UX con gran creatividad."}
          foto={"./src/assets/Carlos.jpg"}
        />
        <Card
          nombre={"María Estrada"}
          profesion={"Desarrolladora Full Stack"}
          descripcion={"Experta en tecnologías web modernas y eficientes."}
          foto={"./src/assets/Maria.jpg"}
        />
        <Card
          nombre={"José Guevara"}
          profesion={"Barista"}
          descripcion={"Apasionado del café y maestro en técnicas de extracción."}
          foto={"./src/assets/Jose.jpg"}
        />
        <Card
          nombre={"Ana Franco"}
          profesion={"Fotógrafa"}
          descripcion={"Captura momentos únicos con una visión artística impresionante."}
          foto={"./src/assets/Ana.jpg"}
        />
      </div>
    </>
  );
}

export default App;
