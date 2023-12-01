import hamburguer  from "../assets/images.png"
import { LogoContainer } from "../styles.css/styles"

export const  LogoComponent =() => {
    return (
        <LogoContainer>
            <img src={hamburguer} alt="" />
            <p>
                fastfood
            </p>
        </LogoContainer>
    )
}