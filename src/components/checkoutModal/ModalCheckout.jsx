import { useState } from "react";
import './ModalCheckout.css';
import Modal from "../Modal/Modal";

const ModalCheckout = ({products}) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={toggle} > Abrir modal </button>
            <Modal visible={visible}>
                <h2 className="title" > Añadiste <span className="articles-count"> {products.length} artículo(s)</span> a tu carrito </h2>
            </Modal>
        </div>
    )
}

export default ModalCheckout;
