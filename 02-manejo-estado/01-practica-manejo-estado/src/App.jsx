/* import Mensaje from "./components/Mensaje";
import { TarjetaUsuario } from "./components/TarjetaUsuario";
import { Contador } from "./components/Contador"; */

import { useState } from "react";

function App() {

  const [usuario, setUsuario] = useState("")
  const [usuarios, setUsuarios] = useState([])

  // e = pointer event
  const agregarUser = (e) => {
    e.preventDefault()
    // ...usuarios = genera una copia actual del array
    // setUsuarios añade el nuevo usuario al array
    setUsuarios([...usuarios, usuario])
    //console.log(usuarios)
    setUsuario("") // Limpiar después de registrar
  }

  const eliminarUser = (index) => {
    const nuevoArray = usuarios.filter( (_, i) => i !== index)
    setUsuarios(nuevoArray)
  }

  return (
    <>
      {/* <h1>Hola React</h1>
      <Mensaje texto="Hola React desde prop" color="red" />
      <Mensaje texto="Hola JavaScript desde prop" color="red" />
      <TarjetaUsuario nombre="Pedro" edad="21" ocupacion="Diseñador"/>
      <Contador/> */}



        {/* Interfaz gráfica: Formulario */}
        <form>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)} // Cada vez que cambia la entrada, se envía a usuario. Es decir, se actualiza el estado del input. Independientemente de dar click en Registrar
          />
          <button 
            type="submit"
            onClick={agregarUser}
          >Registrar</button>
        </form>
        <ul>
          {/* <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li> */}
          {
            usuarios.map((user, index) => {
              return (
                <li
                  key={index}>
                  {user}
                  <button
                    onClick={() => eliminarUser(index)}
                  >
                    ✖️
                  </button>
                  </li>
              )
            })
          }
        </ul>

    </>
  );
}

export default App;
