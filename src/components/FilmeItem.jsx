import React, { useState } from "react";
import Modal from "./Modal";
import SerieList from "./SerieList";

export default function FilmeItem({ movie }) {
  const[openModal, setOpenModal] = useState(false)

  return (
    <>
      <div style={{ width: "250px" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          style={{ height: "250px" }}
          alt=""
          onClick={()=> setOpenModal(true)}
        />
        <h4>
          {movie.name} ({movie.first_air_date.substring(0, 4)}) [{movie.id}]
        </h4>
        <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}><SerieList series={movie}/></Modal>
      </div>
    </>
  );
}
