import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faCheck} from '@fortawesome/free-solid-svg-icons';
import { OrderContainer } from "../styles.css/order.style"
import hamburguer from "../assets/images (10).png"
export const OrderComponent = ({ selected,data }) => {
    return (
        <OrderContainer selected={selected}>
            <div className="content">
                <div className="img">
                    <div className="img-content">
                        <img src={hamburguer} alt="" />
                    </div>
                    <div className="details">
                        <h1>{data.id} - {data.username}</h1>
                        <p>{data.quantity}x name</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancel">
                    <FontAwesomeIcon icon={faX} color="red"/>
                    </button>
                   {selected? "" : <button className="finish">
                    <FontAwesomeIcon icon={faCheck} color="green"/>
                    </button> }
                </div>
            </div>
        </OrderContainer>
    )
}