import "../css/Card.css";

/* Crear componente Card */
/* Definición de props */

export const Card = ({ nombre, profesion, descripcion, foto }) => {

    /* Retorno del JSX que representa la tarjeta */
  return (
    <>
      <div className="card">
        <h2>{nombre}</h2>
        <p>Profesión: {profesion}</p>
        <p>{descripcion}</p>
        <img src={foto} alt={nombre}/>
      </div>
    </>
  );
};
