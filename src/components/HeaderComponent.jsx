import { HeaderContainer } from "../styles.css/header.style.js";
import { HeaderButtons } from "./HeaderButtons";
import { LogoComponent } from "./LogoComponent";

export function HeaderComponent({selectedButtonId}){
    return (
       <>
       <HeaderContainer>
         <LogoComponent/>
         <HeaderButtons selectedButtonId={selectedButtonId}/>
       </HeaderContainer>
       </>
    )
}