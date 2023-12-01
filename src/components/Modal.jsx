import React, { useState} from 'react';
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
                <span className="icon-close"></span>
              </div>
            </div>
            <div className="content-container">
            </div>
          </div>
        </div>
    );
};

export default Modal;