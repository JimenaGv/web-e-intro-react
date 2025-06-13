import "./css/App.css";
import { ExploradorEspacial } from "./components/ExploradorEspacial";
import { BitacoraExploracion } from "./components/BitacoraExploracion";

function App() {
  return (
    <div className="container">
      <ExploradorEspacial />
      <BitacoraExploracion />
    </div>
  );
}

export default App;
