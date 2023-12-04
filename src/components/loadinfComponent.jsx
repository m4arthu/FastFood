import LoadingSpin from "react-loading-spin"
import { LoadingContainer } from "../styles.css/loading.style"
import { HeaderComponent } from "./HeaderComponent"

export const LoadingComponent = () => {
    return (
        <>
        <HeaderComponent/>
        <LoadingContainer>
            <div className="content">
                <h1>Carregando conteúdo</h1>
                <LoadingSpin />
                <p>a api pode entrar en standby então  é normal  demorar um  pouco  a primeira vez!!</p>
            </div>
        </LoadingContainer>
        </>
    )
}