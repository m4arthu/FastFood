import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HeaderComponent } from "../components/HeaderComponent"
import { PaymentContainer, PaymentContent, PaymentTypeContainer } from "../styles.css/payment.style"
import { faCreditCard, faMoneyBill, faWallet } from "@fortawesome/free-solid-svg-icons"
import { SubtotalComponent } from "../components/SubtotalCompoent"
import { useContext, useEffect, useState } from "react"
import { OrderContext } from "../contenxts/orderContenxt"
import { getOrders, postOrder } from "../services/orders.service"
import { useNavigate } from "react-router-dom"
import { PedidosFooter } from "../styles.css/pedido.style"

export const PaymentPage = () => {
    const { order, setOrder } = useContext(OrderContext);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [orderId, setOrderId] = useState();
    const cancel = () => {
        navigate('/');
    };
    const sendOrder = async () => {
        const newOrders = order.map(order => {
            const rest = order;
            delete rest.name;
            delete rest.price;
            return rest;
        });
        if (username.length > 12) {
            alert("username precisa ser menor do  que 12 caracteres")
            return
        }
        const orderData = {
            username: username,
            products: newOrders
        }
        await postOrder(orderData);
        navigate("/"),
            setOrder([])
    };

    const PaymentType = ({ icon, name }) => {
        return (
            <PaymentTypeContainer>
                <div className="content">
                    <div className="method">
                        <FontAwesomeIcon icon={icon} color={'green'} />
                        <h1>{name}</h1>
                    </div>
                    <input type="checkbox" />
                </div>
            </PaymentTypeContainer>
        );
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersData = await getOrders();
                const encontrarUltimoID = () => {
                    if (ordersData.length === 0) {
                        return null;
                    }
                    const ultimoID = ordersData.reduce((maxID, order) => {
                        return order.id > maxID ? order.id : maxID;
                    }, ordersData[0].id);
                    return ultimoID;
                };
                setOrderId(encontrarUltimoID())
            } catch (error) {
                alert('Erro ao buscar produtos:', error);
            }
        };
        fetchOrders()
    }, [])

    return (
        <>
            <HeaderComponent selectedButtonId={1} />
            <PaymentContainer>
                <PaymentContent>
                    <div className="header">
                        <FontAwesomeIcon color={'green'} icon={faWallet} />
                        <h1>Pagamento</h1>
                    </div>
                    <div className="body">
                        <div className="left">
                            <h2>Resumo da compra</h2>
                            <SubtotalComponent allOrders={true} totalInline={true} className={'subtotal'} />
                            <div className="username">
                                <div className="section">
                                    <h2>Nome do cliente</h2>
                                    {/* Utilize o estado do username no input */}
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="user"
                                        placeholder="username"
                                        type="text"
                                    />
                                </div>
                                <div className="section">
                                    <h2>Codigo</h2>
                                    <div className="cod" type="text">{orderId}</div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h2>Selecione a forma de pagamento</h2>
                            <PaymentType name={'debito'} icon={faCreditCard} />
                            <PaymentType name={'credito'} icon={faCreditCard} />
                            <PaymentType name={'dinheiro'} icon={faMoneyBill} />
                            <div className="details">
                                <div className="section">
                                    <h2>Valor entregue</h2>
                                    <input className="pagamento" placeholder="....quantia" type="text" />
                                </div>
                                <div className="section">
                                    <h2>troco</h2>
                                    <input className="troco" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PedidosFooter className="footer" abble={!username || username === '' ? false : true}>
                        <div>
                            <button onClick={() => cancel()} disabled={!username || username === ''} className="cancel">
                                Cancelar
                            </button>
                            <button onClick={() => sendOrder()} disabled={!username || username === ''} className="finish">
                                Finalizar Pedido
                            </button>
                        </div>
                    </PedidosFooter>
                </PaymentContent>
            </PaymentContainer>
        </>
    );
};