import React from "react";

const Tarjeta = (props) => {
  const { nombre, tipo, popularidad } = props.item;
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>{tipo}</p>
      <small>{popularidad}</small>
    </div>
  );
};

export default Tarjeta;
