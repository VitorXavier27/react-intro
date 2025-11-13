import React from 'react'

export default function Modal({isOpen,setModalOpen, children}) {

    const backGround ={
        position : 'fixed',
        top: '0',
        botton: '',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0,0,0,0.7)',
        zIndex: '1000'
    }

    const modalStyle ={
        position: 'fixed',
        top: '50%',
        right: '40%',
        transform: 'translate(-50%,-50%)',
        padding: '100px',
        backgroundColor: '#fff',
        borderRadius: '10px'
    }

    if(isOpen){
         return (
             <div style={backGround}>
                <div style={modalStyle}>
                    <div>
                        {children}      
                    </div>
                    <button onClick={setModalOpen}>Fechar</button>
                </div>
             </div>
            )
            
    }

    return null;
}
