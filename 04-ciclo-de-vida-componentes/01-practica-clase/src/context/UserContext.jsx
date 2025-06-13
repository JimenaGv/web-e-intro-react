import { createContext } from "react";

//Crear el contexto
export const UserContext = createContext();

//Crear el provider

export const UserProvider = ({ children }) => {
  const user = {
    nombre: "pepe",
    correo: "pepe@pepe",
    tema: "ligth",
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
