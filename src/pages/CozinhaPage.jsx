import { OrderComponent } from "../components/OrderComponent.jsx"
import { CozinhaContainer, CozinhaContent } from "../styles.css/cozinha.style.js"
import { HeaderComponent } from "../components/HeaderComponent.jsx"
export function CozinhaPage() {
    return (
        <>
            <HeaderComponent selectedButtonId={2} />
            <CozinhaContainer >
                <CozinhaContent>
                    <div className="orders">
                        <h1>preparando:</h1>
                        <OrderComponent />
                    </div>
                    <div className="division"></div>
                    <div className="orders">
                        <h1>pronto:</h1>
                        <OrderComponent selected={true} />
                    </div>
                </CozinhaContent>
            </CozinhaContainer>
        </>
    )
}