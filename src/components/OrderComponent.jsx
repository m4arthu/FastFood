import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faCheck} from '@fortawesome/free-solid-svg-icons';
import { OrderContainer } from "../styles.css/order.style"
export const OrderComponent = ({ selected }) => {
    console.log(selected)
    return (
        <OrderContainer selected={selected}>
            <div className="content">
                <div className="img">
                    <div className="img-content">
                        <img src="" alt="" />
                    </div>
                    <div className="details">
                        <h1>id - username</h1>
                        <p>quantidade + nome</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancel">
                    <FontAwesomeIcon icon={faX} color="red"/>
                    </button>
                    <button className="finish">
                    <FontAwesomeIcon icon={faCheck} color="green"/>
                    </button>
                </div>
            </div>
        </OrderContainer>
    )
}