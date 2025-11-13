import React, { useEffect } from "react";
import { useState } from "react";
import FilmeItem from "./FilmeItem";
import Modal from "./Modal";
import SerieList from "./SerieList";

export default function FilmesList({ category }) {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const url =
      "https://addedufa6qbaxxeh5xles4qzhy0ovvah.lambda-url.us-east-1.on.aws/?search=" +
      category;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        setMovies(data.results)})
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <>
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap"}} >
        {movies.map((movie) => (
         <FilmeItem movie={movie} />
        ))}
      </div>
    </>
  );
}
