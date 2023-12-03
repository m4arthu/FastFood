import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HeaderComponent } from "../components/HeaderComponent"
import { PaymentContainer, PaymentContent, PaymentTypeContainer } from "../styles.css/payment.style"
import { faCreditCard, faMoneyBill, faWallet } from "@fortawesome/free-solid-svg-icons"
import { SubtotalComponent } from "../components/SubtotalCompoent"

export const PaymentPage = () => {

    const PaymentType = ({icon}) => {
        return (
            <PaymentTypeContainer>
                <div className="content">
                    <div className="method">
                        <FontAwesomeIcon icon={icon} color={"green"} />
                    </div>
                    <input type="checkbox" />
                </div>
            </PaymentTypeContainer>
        )
    }
    return (
        <>
            <HeaderComponent selectedButtonId={1} />
            <PaymentContainer>
                <PaymentContent>
                    <div className="header">
                        <FontAwesomeIcon color={"green"} icon={faWallet} />
                        <h1>Pagamento</h1>
                    </div>
                    <div className="body">
                        <div className="left">
                            <h2>Resumo  da compra</h2>
                            <SubtotalComponent className={"subtotal"} />
                            <div className="username">
                                <div className="section">
                                    <h2>Nome do cliente</h2>
                                    <input className="user" placeholder="username" type="text" />
                                </div>
                                <div className="section">
                                    <h2>Codigo</h2>
                                    <input className="cod" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h2>Selecione a forma  de pagamento</h2>
                            <PaymentType icon={faCreditCard} />
                            <PaymentType icon={faCreditCard} />
                            <PaymentType icon={faMoneyBill} />
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
                </PaymentContent>
            </PaymentContainer>
        </>
    )
}