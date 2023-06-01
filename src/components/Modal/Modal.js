import React from 'react';
import ReactDOM from 'react-dom';
// import './Modal.css';
import './PlatziModal.css';

const Modal = ({ children, setOpenModal }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="Modal">
        {children}
        {/* <input placeholder="Comer cebolla" />
        <div>
          <button onClick={() => setOpenModal((state) => !state)}>
            Cancelar
          </button>
          <button>Enviar</button>
        </div> */}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export { Modal };
