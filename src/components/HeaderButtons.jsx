
import { HeaderButton, HeaderButtonContainer } from "../styles.css/header.style.js"
import { useNavigate } from"react-router-dom"
export const HeaderButtons = ({ selectedButtonId }) => {
    const navigate = useNavigate()
    const handleButtonClick = (buttonId) => {
        switch (buttonId) {
            case 1:
                return navigate("/")
            case 2:
             return navigate("/cozinha")
            case 3:
                return navigate("/Retirada")
        }
    };
    return (
        <HeaderButtonContainer>
            <HeaderButton selected={selectedButtonId === 1 ? true : false}
                onClick={() => handleButtonClick(1)}><p>Pedidos</p>
            </HeaderButton>
            <HeaderButton selected={selectedButtonId === 2 ? true : false}
                onClick={() => handleButtonClick(2)}><p>Cozinha</p>
            </HeaderButton>
            <HeaderButton selected={selectedButtonId === 3 ? true : false}
                onClick={() => handleButtonClick(3)}><p>Retirada</p>
            </HeaderButton>
        </HeaderButtonContainer>
    )
}