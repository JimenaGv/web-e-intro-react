/* Página de error para rutas no existentes */

export const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger">⚠️ Error 404</h2>
      <p className="lead">
        Lo sentimos, la página que está buscando no existe.
      </p>
    </div>
  );
};
