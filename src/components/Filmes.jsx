import React, { useState } from "react";
import FilmesList from "./FilmesList";

export const Filmes = () => {
  const [categories, setCategories] = useState([
    "CSI",
    "Game of Thrones",
    "Walking Dead",
    "Dexter",
  ]);

  const [category, setCategory] = useState(categories[0]);

  return (
    <>
      <h3>Filmes</h3>

      <div >
        {categories.map((value) => (
          <button key={value} onClick={() => setCategory(value)}>{value}</button>
        ))}
      </div>

      <h4>
        Mostrando: <i>{category}</i>
      </h4>
      <FilmesList category={category} />
    </>
  );
};
