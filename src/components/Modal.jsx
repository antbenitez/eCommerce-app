import { useEffect, useRef } from "react";
import './Modal.css';

const Modal = ({ visible, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.style.display = visible ? "flex" : "none";
  }, [visible]);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal;
