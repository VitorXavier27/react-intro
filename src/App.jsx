import "./App.css";
import { Filmes } from "./components/Filmes";
import SerieList from "./components/SerieList";
import Lista from "./Lista";
// import { useState } from "react";

function App() {
  // const [contador, setContador] = useState(0);
  //let num = 0;
  // console.log(contador);
  return (
    <>
      {/* <h3>Meu primeiro React!</h3>
      <div>Valor: {contador}</div>
      <div>
        <button onClick={() => setContador(contador + 1)}> + </button>
        <button onClick={() => setContador(contador - 1)}> - </button>
      </div>

      <Lista /> */}

      <Filmes />
      <SerieList /> 
    </>
  );
}

export default App;
