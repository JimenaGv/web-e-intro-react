import { useState } from "react";

// Formulario para escribir y enviar un nuevo Tweet

export const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState(""); // Estado para el campo de texto

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir recarga del formulario
    if (!text.trim()) return; // Evitar Tweets vacíos
    onAddTweet(text); // Enviar texto al componente padre
    setText(""); // Limpiar el campo
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 my-3">
      <input
        type="text"
        className="form-control"
        placeholder="¿En qué estás pensando?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Tweet
      </button>
    </form>
  );
};
