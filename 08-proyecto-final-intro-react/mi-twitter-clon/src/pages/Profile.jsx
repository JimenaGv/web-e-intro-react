// Página de perfil que muestra info del usuario autenticado

export const Profile = ({ user }) => {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body text-center">
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=0D8ABC&color=fff`}
            alt="Avatar"
            className="rounded-circle mb-3"
            width={100}
            height={100}
          />
          <h3 className="card-title mb-2">{user.username}</h3>
          <p className="text-muted">
            <i className="bi bi-person-badge-fill me-2"></i>Usuario registrado
          </p>
          <hr />
          <div className="text-start">
            <p>
              <strong>Correo:</strong> usuario@example.com
            </p>
            <p>
              <strong>Ubicación:</strong> Ciudad de México 🇲🇽
            </p>
            <p>
              <strong>Biografía:</strong> Soy fan del desarrollo web 🐦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
