import React, { useState } from "react";
import Item from "./Item";

export default function Lista() {
  let [itens, setItens] = useState([
    "Abacaxi",
    "Banana",
    "Caju",
    "Laranja",
    "Manga",
    "Melancia",
    "Uva",
  ]);

  function removeDaLista(pos) {
    let novosItens = itens.filter((item, index) => index != pos);
    setItens(novosItens);
  }

  return (
    <>
      <h3>Lista:</h3>
      {itens.map((item, pos) => (
        <Item nome={item} posicao={pos} onClick={() => removeDaLista(pos)} />
      ))}
    </>
  );
}
