import React from "react";

const ImagenApp = (props) => {
  console.log(props);
  //código javascript
  //   const imagen = {
  //     img: "https://http2.mlstatic.com/D_NQ_NP_2X_921820-MLA80168208479_102024-F.webp",
  //     texto: "computadora",
  //   };

  return <img src={props.img} alt={props.texto} width={props.width} />;
};

export default ImagenApp;
