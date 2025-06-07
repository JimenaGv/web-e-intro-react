// Importar archivo CSS para Estilo
import "../css/lista.css";

// Importar useState para el manejo del estado de la lista
import { useState } from "react";

export function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]); // Para almacenar los productos en la lista
  const [nuevoProducto, setNuevoProducto] = useState(""); // Para obtener el valor del nuevo producto
  const [editandoProducto, setEditandoProducto] = useState(null); // Para identificar el producto en edición; null si nada está siendo editado
  const [productoEditado, setProductoEditado] = useState(""); // Para obtener el nuevo valor del producto

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    // Si el campo no está vacío, se agrega el producto a la lista existente y se limpia el campo
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    // Se filtran los productos de la lista menos el que corresponde al índice y se actualiza la lista
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
  };

  // Función para activar el modo edición del producto
  const editarProducto = (index) => {
    // Se guarda el índice del producto seleccionado y su valor actual a modificar
    setEditandoProducto(index);
    setProductoEditado(productos[index]);
  };

  // Guardar cambios de edición
  const guardarEdicion = (index) => {
    // Solo si el índice coincide, se reemplaza el producto con el nuevo valor. Se actualiza la lista y se sale del modo edición
    const nuevaLista = productos.map((producto, i) =>
      i === index ? productoEditado : producto
    );
    setProductos(nuevaLista);
    setEditandoProducto(null);
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      {/* Permitir que usuarios añadan productos */}
      <input
        type="text"
        value={nuevoProducto}
        placeholder="Nombre del producto"
        onChange={(e) => setNuevoProducto(e.target.value)} // Actualiza el estado con el valor ingresado
      />
      <button onClick={agregarProducto}>Agregar</button>
      {/* Mostrar lista en pantalla */}
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {editandoProducto === index ? (
              // Si el producto está en modo edición, se muestra el campo
              <>
                <input
                  type="text"
                  value={productoEditado}
                  onChange={(e) => setProductoEditado(e.target.value)} // Se guarda el valor modificado
                />
                <button
                  className="btn-guardar"
                  onClick={() => guardarEdicion(index)}
                >
                  Guardar
                </button>
              </>
            ) : (
              <>
                {producto}

                {/* Permitir que usuarios eliminen productos */}
                <button
                  onClick={() => {
                    if (
                      confirm(`¿Confirmar la eliminación de "${producto}"?`)
                    ) {
                      eliminarProducto(index);
                    } else {
                      return;
                    }
                  }}
                >
                  ❎
                </button>
                {/* Permitir que usuarios modifiquen los productos */}
                <button onClick={() => editarProducto(index)}>✏️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
