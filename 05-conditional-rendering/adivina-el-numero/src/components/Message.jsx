// Importación del hook useEffect
import { useEffect } from "react";

// Componente hijo que muestra pistas o mensajes
// Evalúa el número ingresado por el usuario y actualiza el estado del juego
export function Message({
  numeroIngresado,
  numeroAleatorio,
  setMensaje,
  setJuegoFinalizado,
  setBotonReinicio,
  setIntentos,
  intentoConfirmado,
  setIntentoConfirmado,
}) {
  useEffect(() => {
    // No se ejecuta si no se ha dado clic a Adivinar
    if (!intentoConfirmado) return;

    const numero = Number(numeroIngresado);

    if (isNaN(numero) || numero < 1 || numero > 100) {
      setMensaje("Por favor, ingresa un número válido entre 1 y 100. ❌");
    } else {
      setIntentos((prev) => prev + 1);
      if (numero === numeroAleatorio) {
        setMensaje("¡Felicidades! ¡Adivinaste el número! 🥳✨");
        setJuegoFinalizado(true);
        setBotonReinicio(true);
      } else if (numero < numeroAleatorio) {
        setMensaje("El número es más alto. ⬆️");
      } else {
        setMensaje("El número es más bajo. ⬇️");
      }
    } // Si el número ingresado es válido, se realiza la comparación con el número secreto y se entrega el mensaje según el caso

    // Se reestablece el estado para evitar ejecuciones múltiples
    setIntentoConfirmado(false);
  }, [intentoConfirmado]);

  return null; // No renderiza nada visual
}
