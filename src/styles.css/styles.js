
import styled from "styled-components"

const headerColor = "#3D6611"

export const Container = styled.div`
`
export const HeaderContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    width:100vw;
    height:55px;
    display:flex;
    background-color: ${headerColor};
    justify-content: space-between;

`
export const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    height:100%;
    align-items: center;
    margin-left: 20px;
    img{
        border-radius:50px;
        width: 25px;
    }
    p{
        color:white;
        font-weight: 600;
        font-size:22px;
         margin-left: 5px;
     }
`
export const HeaderButtonContainer = styled.div`
    display:flex;
    align-items: center;
`
export const  HeaderButton = styled.div`
     background-color : ${(props)=> props.selected? "#00000059": "inherit" };
     width : 100px;
     height :  35px;
     margin-left:20px;
     border-radius:8px;
     display:flex;
     color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;

`