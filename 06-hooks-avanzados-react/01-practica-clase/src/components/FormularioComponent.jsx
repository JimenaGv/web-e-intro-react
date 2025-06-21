import { useEffect, useRef, useState } from "react";

export const FormularioComponent = () => {
  const focusRef = useRef(); // Devuelve un objeto con propiedades

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const { userName, userEmail, password } = formData;

  // e = evento; es un objeto. Pueden desestructurarse sus props, siendo posible la segunda opción
  /*  const inputChange = (e) => {
    console.log(e.target.name)
  } */

  const inputChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
      // [name] entre corchetes para que sea variable; puede ser userName, userEmail o password, por ejemplo. Si no tiene corchetes, es una nueva prop.
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    focusRef.current.focus(); // Genera una referencia en el campo de Email
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          name="userName"
          value={userName}
          onChange={inputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">
          Email address
        </label>
        <input
          ref={focusRef}
          type="email"
          className="form-control"
          name="userEmail"
          value={userEmail}
          onChange={inputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={inputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

// Bootstrap: Modificar las palabras reservadas. Usar la consola del navegador para ver las sigerencias de cambio. Ej. cambiar "for" por "htmlFor" y "class" por "className"
