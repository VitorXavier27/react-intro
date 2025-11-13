import React from "react";

export default function FilmeItem({ movie }) {
  return (
    <>
      <div style={{ width: "250px" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          style={{ height: "250px" }}
          alt=""
        />
        <h4>
          {movie.name} ({movie.first_air_date.substring(0, 4)}) [{movie.id}]
        </h4>
      </div>
    </>
  );
}
