import { OrderUsernameContent } from "../styles.css/order.style"

export const  OrderUsername =({finished,name}) => {
    return (
        <OrderUsernameContent finished={finished}>{name}</OrderUsernameContent>
    )
}