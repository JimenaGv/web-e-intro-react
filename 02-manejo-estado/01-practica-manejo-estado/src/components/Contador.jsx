// Importar Hook
import { useState } from "react"

export const Contador = () => {

    // Variables y lógica de la función
    // setContador es la función que modifica al contador
    // useState recibe el valor inicial del contador
    const [contador, setContador] = useState(0)

    // Función "separada" para el botón Decrement
    const decrement = () => {
        if (contador > 0) setContador(contador - 1)
        }

    // Solo regresa elementos de React JSX
  return (
    <>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador + 1)}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setContador(0)}>Reset</button>
    </>
  )
}

