import React from "react";

// Uso de llaves {} para la desestructuración del objeto ⚠️

/* export const WelcomeMessage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Bienvenido de nuevo!</h1>;
  } else {
    return <h1>Por favor, inicia sesión.</h1>;
  }
}; */

export const WelcomeMessage = ({ isLoggedIn }) => {
  return (
    <>
    {/* <h1>{isLoggedIn ? "Bienvenido de nuevo!" : "Por favor, inicia sesión."}</h1> */}

    {/* Sólo si es verdadera la condición: */}
    {isLoggedIn && <h1>{"Bienvenido de nuevo!"}</h1>}
    </>
    

  );
};
