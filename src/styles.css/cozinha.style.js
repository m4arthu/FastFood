import styled from "styled-components";

export const CozinhaContainer = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    justify-content:center;
    `

export const  CozinhaContent = styled.div`
   margin-top:80px;
   font-family: 'Roboto', sans-serif;
   width:80vw;
   height: 100%;
   display:flex;
   justify-content:space-between;
   h1{
       font-size:35px;
       font-weight:bold;
    }
    .division{
        margin:0 10px;
        height: 100%;
        border:1px solid black;
    }
`
