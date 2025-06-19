// Importación del hook useState y componentes
import { useState } from "react";
import { InputNumber } from "./InputNumber";
import { Message } from "./Message";
import { RestartButton } from "./RestartButton";

// Importación de Material UI para el estilo
import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Creación de un tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Componente principal
export function Game() {
  // Estados para controlar la lógica del juego
  const [numeroAleatorio, setNumeroAleatorio] = useState();
  const [numeroIngresado, setNumeroIngresado] = useState("");
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [juegoFinalizado, setJuegoFinalizado] = useState(false);
  const [botonReinicio, setBotonReinicio] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [intentoConfirmado, setIntentoConfirmado] = useState(false);
  const [intentos, setIntentos] = useState(0);

  // Función que inicializa o reinicia el juego
  const iniciarJuego = () => {
    setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
    setNumeroIngresado("");
    setMensaje("");
    setIntentos(0);
    setJuegoIniciado(true);
    setJuegoFinalizado(false);
    setBotonReinicio(false);
  };

  // Renderizado de la interfaz de usuario
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Aplicación del fondo oscuro */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ maxWidth: 400, width: "100%", bgcolor: "grey.900", p: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Adivina el número 🔮
            </Typography>

            {/* Botón para comenzar el juego */}
            {!juegoIniciado && (
              <Button variant="contained" onClick={iniciarJuego}>
                Iniciar juego
              </Button>
            )}

            {/* Contenido visible solo durante el juego */}
            {juegoIniciado && (
              <>
                <Typography variant="body2" sx={{ my: 2 }}>
                  Se ha generado un número entre 1 y 100. ¡Adivínalo!
                </Typography>
                {/* Input y botón Adivinar */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <InputNumber
                    numeroIngresado={numeroIngresado}
                    setNumeroIngresado={setNumeroIngresado}
                    disabled={juegoFinalizado}
                  />

                  <Button
                    variant="contained"
                    disabled={juegoFinalizado}
                    onClick={() => {
                      if (numeroIngresado !== "") setIntentoConfirmado(true);
                    }}
                  >
                    Adivinar
                  </Button>
                </Box>

                {/* Componente que muestra las pistas o mensajes */}
                <Message
                  numeroIngresado={numeroIngresado}
                  numeroAleatorio={numeroAleatorio}
                  setMensaje={setMensaje}
                  setJuegoFinalizado={setJuegoFinalizado}
                  setBotonReinicio={setBotonReinicio}
                  setIntentos={setIntentos}
                  intentoConfirmado={intentoConfirmado}
                  setIntentoConfirmado={setIntentoConfirmado}
                />
                {/* Mensaje */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {mensaje}
                </Typography>

                {/* Número total de intentos */}
                {juegoFinalizado && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {intentos === 1
                      ? "¡Ganaste en un intento!"
                      : `¡Ganaste en ${intentos} intentos!`}
                  </Typography>
                )}
              </>
            )}
            {/* Botón para reiniciar la partida */}
            {botonReinicio && (
              <Box sx={{ mt: 3 }}>
                <RestartButton reiniciarJuego={iniciarJuego} />
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
