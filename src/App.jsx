const App = () => {
  let activado = true;
  return (
    <div>
      {activado ? <h1>Hola mundo!!</h1> : <h1>No es un buen día</h1>}

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        dicta pariatur, tempora quas recusandae autem ea dolorem? Animi nemo,
        iste, quasi mollitia libero culpa quam, harum ratione aspernatur fugit
        inventore.
      </p>
    </div>
  );
};

export default App;
