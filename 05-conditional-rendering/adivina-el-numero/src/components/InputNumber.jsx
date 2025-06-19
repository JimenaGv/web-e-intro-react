/* Componente hijo. Campo de entrada para que el usuario escriba su número. */

import { TextField } from "@mui/material";

export function InputNumber({ numeroIngresado, setNumeroIngresado, disabled }) {
  return (
    <TextField
      type="number"
      label="Número"
      variant="outlined"
      value={numeroIngresado}
      onChange={(e) => setNumeroIngresado(e.target.value)}
      disabled={disabled}
      placeholder="El número es ..."
    />
  );
}
