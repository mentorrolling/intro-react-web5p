import React from "react";
import ParrafoApp from "./components/parrafos/ParrafoApp";
import ImagenApp from "./components/imagen/ImagenApp";

import datos from "./data/parrafos.json";
import { frameworks } from "./data/frameworks";
import Tarjeta from "./components/tarjeta";

const App = () => {
  console.log(datos);

  let activo = true;

  return (
    <div>
      <h1>Soy mi primer componente</h1>
      {datos.map((item, index) => (
        <ParrafoApp texto={item.texto} key={index} />
      ))}

      {activo ? (
        <ImagenApp
          img={
            "https://http2.mlstatic.com/D_NQ_NP_2X_921820-MLA80168208479_102024-F.webp"
          }
          texto={"Computadora"}
          width={300}
        />
      ) : (
        <h3>No hay imagen</h3>
      )}

      {/* <ImagenApp
        img={
          "https://http2.mlstatic.com/D_NQ_NP_2X_604837-MLA82735823275_022025-F.webp"
        }
        texto={"Computadora 2"}
        width={200}
      /> */}

      {/* <ul>
        {frameworks.map((framework) => (
          <li key={framework.id}>{framework.nombre}</li>
        ))}
      </ul> */}
      {frameworks.map((item) => (
        <Tarjeta item={item} key={item.id} />
      ))}

      <button>Hola gente</button>
    </div>
  );
};

export default App;
