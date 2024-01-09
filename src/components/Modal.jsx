import React, { useState} from 'react';
import Close from '../assets/close.svg';
import './Modal.css';

const Modal = () => {
    const [isModalActive, setIsModalActive] = useState(true);

    const closeModal = () => {
      setIsModalActive(false);
    }
    
    return (
        <div className={`overlay ${isModalActive ? 'active' : ''}`}>
          <div className="modal-container">
            <div className="button-container">
              <div className="close-button" onClick={closeModal}>
                <img src={Close} alt="Close" />
              </div>
            </div>
            <div className="content-container">
            </div>
          </div>
        </div>
    );
};

export default Modal;