import { useEffect, useState } from "react"

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
      // Llamado de la API
      // Se ejecuta una sola vez; dependencias = []
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      console.log(usuarios)
      }, [])
    
      console.log(usuarios)

  return (
    <div>
        <h2>Usuarios</h2>
        <ul>
            {usuarios.map( (item, index) => {

                return (
                    <li key={index}>{item.name}</li>
                )

            } )}
        </ul>
    </div>
  )
}

