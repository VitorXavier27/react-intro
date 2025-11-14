import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import FilmeItem from './FilmeItem';

export default function SerieList({series}) {
    const [serie , setSerie] = useState([]);
    const [openModal,setOpenModal] = useState(false)

    useEffect(() =>{
      if(series && series.id){
        const url = "https://5gq3hyraihfvst6qq2xsbr26gu0skmws.lambda-url.us-east-1.on.aws/?id=" + series.id;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setSerie(data)})
            .catch((error) => console.error("nao foi possivel"+error))
}
    }, [series])
  return (
    <>
    <div>
      <div>
        <h2>Teste</h2>

      </div>
      {/* <button onClick={() => setOpenModal(true)}>Teste</button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        {serie.id}
      </Modal> */}
    </div>
    </>
  )
}
