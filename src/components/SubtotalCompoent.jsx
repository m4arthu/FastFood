import { ModalContentBody } from "../styles.css/pedidoModal.style"

export const SubtotalComponent = ({width}) => {
    return (
        <ModalContentBody width={width}>
            <div className="subtotal">
                <div className="content">
                    <div className="pedido">
                        <h1>quantidade + product name</h1>
                        <h1>price</h1>
                    </div>
                    <div className="total">
                        <p>Total do pedido: </p>
                        <h1>ToTal</h1>
                    </div>
                </div>
            </div>
        </ModalContentBody>
    )

}