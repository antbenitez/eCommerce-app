import { useEffect, useRef } from "react";
import './Modal.css';

const ModalCheckout = ({ visible, children }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (!visible) {
      modalRef.current.style.display = "flex";
      return;
    }

    modalRef.current.style.display = "none";
  }, [visible]);

  return <div className="modal" ref={modalRef}>
    {children}
  </div>;
};

export default ModalCheckout;
