/* Componente hijo. Botón que permite reiniciar el juego. */

import { Button } from "@mui/material";

export function RestartButton({ reiniciarJuego }) {
  return (
    <Button variant="outlined" onClick={reiniciarJuego}>
      Jugar de nuevo
    </Button>
  );
}
