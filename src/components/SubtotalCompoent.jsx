
import { useContext } from "react"
import { ModalContentBody } from "../styles.css/pedidoModal.style"
import { OrderContext } from "../contenxts/orderContenxt"

export const SubtotalComponent = ({ totalInLine,allOrders, width, name, quantity, price }) => {
    const  {order} = useContext(OrderContext)
    const getTotal = () => {
        let total = 0
        order.map((order)=>{
            total += order.price 
        })
        return total
    }
    if(allOrders){
        return(
            <ModalContentBody totalInLine={totalInLine} width={width}>
            <div className="subtotal">
                <div className="content">
                     {order.map((order)=>{
                        console.log(order)
                        return <div key={order.price} className="pedido">
                        <h1>{order.quantity}x  {order.name}</h1>
                        <h1>R$ {order.price}</h1>
                    </div>
                     })}
                    <div className="total">
                        <p>Total do pedido: </p>
                        <h1>R$ {getTotal().toFixed(2)}</h1>
                    </div>
                </div>
            </div>
        </ModalContentBody>
        )
    } 
    return (
        <ModalContentBody width={width}>
            <div className="subtotal">
                <div className="content">
                    <div className="pedido">
                        <h1>{quantity}x  {name}</h1>
                        <h1>R$ {price / 100}</h1>
                    </div>
                    <div className="total">
                        <p>Total do pedido: </p>
                        <h1>R$ {quantity * (price / 100)}</h1>
                    </div>
                </div>
            </div>
        </ModalContentBody>
    )
}