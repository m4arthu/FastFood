import { useState } from "react"
import { HeaderButton, HeaderButtonContainer } from "../styles.css/styles"

export const HeaderButtons = ({selectedButtonId}) => {
    const handleButtonClick = (buttonId) => {
         // redirecionar para  rota
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