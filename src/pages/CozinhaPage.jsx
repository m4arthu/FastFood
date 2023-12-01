import { OrderComponent } from "../components/OrderComponent.jsx"
import { CozinhaContainer, CozinhaContent } from "../styles.css/cozinha.style.js"
import { HeaderComponent } from "../components/HeaderComponent.jsx"
import { OrderUsernameContent } from "../styles.css/order.style.js"
import { OrderUsername } from "../components/orderUsername.jsx"
export function CozinhaPage({ onlyNames,headerNumber }) {
    if (!onlyNames) {
        return (
            <>
                <HeaderComponent selectedButtonId={2} />
                <CozinhaContainer >
                    <CozinhaContent>
                        <div className="orders">
                            <h1>Preparando:</h1>
                            <OrderComponent />
                        </div>
                        <div className="division"></div>
                        <div className="orders">
                            <h1>Pronto:</h1>
                            <OrderComponent selected={true} />
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
                            <OrderUsername finished={false}/>
                        </div>
                        <div className="division"></div>
                        <div className="orders">
                            <h1>Pronto:</h1>
                            <OrderUsername finished={true}/>
                        </div>
                    </CozinhaContent>
                </CozinhaContainer>
            </>
        )
    }
}