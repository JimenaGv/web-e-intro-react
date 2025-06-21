// Importar los hooks necesarios
import { useReducer, useRef, useCallback, useState, useEffect } from "react";

const initialState = { products: [] }; // El estado por defecto es una lista vacía

// Función que gestiona las acciones sobre el inventario
function reducer(state, action) {
  switch (action.type) {
    // Agregar un nuevo producto
    case "add":
      return {
        products: [
          ...state.products,
          {
            id: action.id || Date.now(),
            name: action.name,
            quantity: action.quantity || 1,
          },
        ],
      }; // products almacena los productos en el inventario. Si se pasa un id y un quantity, se utilizarán; si no, se usarán los valores por defecto
    // Aumentar la cantidad del producto correspondiente
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    // Disminuir la cantidad del producto correspondiente únicamente si es mayor a 1
    case "decrement":
      return {
        products: state.products.map((p) =>
          p.id === action.id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ),
      };
    // Eliminar un producto específico
    case "remove":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    // Vaciar completamente el inventario
    case "clear":
      return { products: [] };
    default:
      return state;
  }
} // Cada acción (case) modifica el estado

// Componente principal
export function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState); // Estado global
  const inputRef = useRef(null); // Referencia al campo de entrada del nuevo producto
  const [productoABuscar, setProductoABuscar] = useState(""); // Estado para el input de búsqueda

  // Agregar un nuevo producto
  const handleAddProduct = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = "";
    }
  }; // Limpiar input automáticamente después

  // Evitar que se generen nuevas instancias de funciones en cada renderizado, optimizando las acciones con useCallback
  // Aumenar la cantidad de un producto
  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  // Disminuir la cantidad de un producto
  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  // Guardar lista de productos en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(state.products));
  }, [state.products]);

  // Cargar lista de productos en el localStorage al iniciar la app
  useEffect(() => {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
      const productosParseados = JSON.parse(productosGuardados);
      productosParseados.forEach((producto) =>
        dispatch({
          type: "add",
          id: producto.id,
          name: producto.name,
          quantity: producto.quantity,
        })
      );
    }
  }, []);

  // Interfaz de Usuario
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Gestor de Inventario</h2>

          {/* Inputs y botones */}
          <div className="row g-2 mb-3">
            <div className="col-md-6">
              <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Nombre del producto"
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-success w-100"
                onClick={handleAddProduct}
              >
                Agregar Producto
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-danger w-100"
                onClick={() => dispatch({ type: "clear" })}
              >
                Vaciar Inventario
              </button>
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar producto 🔍"
              value={productoABuscar}
              onChange={(e) => setProductoABuscar(e.target.value)}
            />
          </div>

          {/* Listado de productos filtrable */}
          <ul className="list-group">
            {state.products
              .filter((producto) =>
                producto.name
                  .toLowerCase()
                  .includes(productoABuscar.toLowerCase())
              )
              .map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{product.name}</strong> — Cantidad:{" "}
                    <span className="badge bg-secondary">
                      {product.quantity}
                    </span>
                  </div>
                  {/* Botones para cada producto */}
                  <div className="btn-group btn-group-sm">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleIncrement(product.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleDecrement(product.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        dispatch({ type: "remove", id: product.id })
                      }
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
