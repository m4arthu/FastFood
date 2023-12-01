import { HeaderContainer } from "../styles.css/styles";
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