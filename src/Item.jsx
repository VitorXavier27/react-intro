import React from "react";

export default function Item({ nome, posicao, onClick }) {
  return (
    <>
      <a
        onClick={onClick}
        style={{
          borderWidth: 1,
          borderColor: "#999",
          borderStyle: "solid",
          margin: "10px",
        }}
      >
        {posicao} - {nome}
      </a>
    </>
  );
}
