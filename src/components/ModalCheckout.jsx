import Modal from "./Modal";

const ModalCheckout = ({visible, products}) => {

    return (
        <Modal visible={visible}> 
            <section className="modal-content">
                <div className="title" > Añadiste <span className="articles-count">{products.lenght} artículo(s)</span> a tu carrito </div>
                <div className="close-button"> x </div>
            </section>
        </Modal>
    )
}

export default ModalCheckout;
