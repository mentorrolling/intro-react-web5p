// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { saludarAlumnos } from "./funciones.js";
import persona from "./data.js";

//Desestructuración
const elementos = ["Hola mundo", 45, () => console.log("Chau!!")];

const [palabra, numerito, saludar] = elementos;

console.log(palabra);
console.log(numerito);

console.log(`Mi número favorito es ${numerito}`);
saludar();

let usuario = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log(usuario.address.geo.lat);
console.log(usuario.address.geo.lng);

const { lat, lng } = usuario.address.geo;
const { name, email } = usuario;
// const {
//   address: {
//     geo: { lat, lng },
//   },
// } = usuario;
console.log(name);
console.log(email);
console.log(lat);
console.log(lng);

//Operador ternario
let activado = true;
// if (activado) {
//   console.log("Sistema online");
// } else {
//   console.error("Sistema offline");
// }

activado ? console.log("Sistema online") : console.error("Sistema offline");

activado && console.log("Sistema online");

//Spread operator
const frutas = ["🍎", "🍌"];
const copiaFrutas = [...frutas];

copiaFrutas.push("🍐");
console.log(frutas);
console.log(copiaFrutas);

const verduras = ["🥦", "🥕"];

const comida = [...frutas, ...verduras];
console.log(comida);

const numeritos = [5, 6, 2, 34];
console.log(Math.max(...numeritos)); //5, 6, 2, 34

let frase = "La vida es bella";
const frasesArray = [...frase];
console.log(frasesArray);

saludarAlumnos();
console.log(persona);
