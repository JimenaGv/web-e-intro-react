// Estructura del Tweet individual
// Contenido (texto) y botón para dar "like"

export const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <p className="mb-0">{tweet.text}</p>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onLike(tweet.id)}
        >
          {tweet.likes} ❤️
        </button>
      </div>
    </div>
  );
};
