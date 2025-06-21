import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

// El estado se actualiza dependiendo de la acción. "action" es un objeto.

export function Contador() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // dispatch accede a/se comunica con reducer y state a count.

  return (
    <div>
      <p>Contador: {state.count}</p>

      {/* Entre llaves porque se desestructura action */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
