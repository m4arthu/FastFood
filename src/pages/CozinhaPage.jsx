import { OrderComponent } from "../components/OrderComponent.jsx"
import { CozinhaContainer, CozinhaContent } from "../styles.css/cozinha.style.js"
import { HeaderComponent } from "../components/HeaderComponent.jsx"
import { OrderUsername } from "../components/OrderUsername.jsx"
import { useEffect, useState } from "react"
import { getOrders } from "../services/orders.service.js"
export function CozinhaPage({ onlyNames,headerNumber }) {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        const fetchOrders = async () => {
            try {
                const ordersData = await getOrders();
                setOrders(ordersData)
            } catch (error) {
                console.log(error)
                alert('Erro ao buscar produtos:', error);
            }
        };
        fetchOrders();
    },[])
    if (!onlyNames) {
        return (
            <>
                <HeaderComponent selectedButtonId={2} />
                <CozinhaContainer >
                    <CozinhaContent>
                        <div className="orders">
                            <h1>Preparando:</h1>
                            {orders? orders.filter(order => order.isFinished === false).map(order =>{
                                return <OrderComponent orderId={order.id}  key={order.id} data={order} />
                            }):""}
                        </div>
                        <div className="division"></div>
                        <div className="orders">
                            <h1>Pronto:</h1>
                            {orders? orders.filter(order => order.isFinished === true).map(order =>{
                                return <OrderComponent   key={order.id} selected={true} data={order} />
                            }):""}
                        </div>
                    </CozinhaContent>
                </CozinhaContainer>
            </>
        )
    } else {
        return (
            <>
             <HeaderComponent selectedButtonId={headerNumber} />
                <CozinhaContainer >
                    <CozinhaContent>
                        <div className="orders">
                            <h1>Preparando:</h1>
                            {orders? orders.filter(order => order.isFinished === false).map(order =>{
                                return <OrderUsername   key={order.id} name={order.username} />
                            }):""}
                        </div>
                        <div className="division"></div>
                        <div className="orders">
                            <h1>Pronto:</h1>
                            {orders? orders.filter(order => order.isFinished === true).map(order =>{
                                return <OrderUsername key={order.id}  finished={true} name={order.username} />
                            }):""}
                        </div>
                    </CozinhaContent>
                </CozinhaContainer>
            </>
        )
    }
}