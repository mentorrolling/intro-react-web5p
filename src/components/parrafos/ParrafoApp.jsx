import "./parrafo.css";

const ParrafoApp = (props) => {
  console.log(props.texto); //{texto:'Soy un párrafo}

  return (
    <p
      // style={{ color: "black", fontSize: "3rem" }}
      className="parrafo-principal linea"
    >
      {props.texto}
    </p>
  );
};

export default ParrafoApp;
