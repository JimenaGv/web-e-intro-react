function Mensaje(props) {
  return <h2>{props.texto}</h2>;
}

// Otra forma de incluir las props:
/* function Mensaje(props) {

    const props = {
        texto: "Hola mundo",
        color: "red"
    }

  return <h2>{props.texto}</h2>;
} */

export default Mensaje;
