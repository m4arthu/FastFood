import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';
import { OrderContainer } from "../styles.css/order.style"
import hamburguer from "../assets/images (10).png"
import { deleteOrderApi, updateOrder } from "../services/orders.service";
import { useState } from "react";
export const OrderComponent = ({ selected, data }) => {
    const [ showDetails, setShowDetails ] = useState(false)
    const finishOrder = async () => {
        await updateOrder({
            orderId: data.id,
            isFinished: true
        })
        window.location.reload()
    }
    const deleteOrder = async () => {
        await deleteOrderApi(data.id)
        window.location.reload()
    }
    return (
        <OrderContainer onClick={() =>{console.log(data),setShowDetails(!showDetails)}} selected={selected}>
            <div  className="content">
                <div className="img">
                    <div className="img-content">
                        <img src={hamburguer} alt="" />
                    </div>
                    <div className="details">
                        <h1>{data.id} - {data.username}</h1>
                        {data.OrderProducts.map((product) => {
                            return <p key={product.id}>{product.quantity}x {product.Products.name}</p>
                        })}
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => deleteOrder()} className="cancel">
                        <FontAwesomeIcon icon={faX} color="red" />
                    </button>
                    {selected ? "" : <button onClick={() => finishOrder()} className="finish">
                        <FontAwesomeIcon icon={faCheck} color="green" />
                    </button>}
                </div>
            </div>
         {showDetails?<div className="description">
            <h1>Observações:</h1>
            <div className="content">
                {data.OrderProducts.map((product)=>{
                    return product.description
                })}
            </div>
         </div>:""}
        </OrderContainer>
    )
}