import styled from "styled-components";

export const PedidosContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    width:100%;
    display:flex;
    justify-content:center;
    `
export const PedidoContent = styled.div`
    width: 82vw;
    margin-top:60px;
    `


export const PedidoContentHeader = styled.div`
        margin-bottom: 70px;
    h1{
        font-size:32px;
        font-weight:700;
    }
    input{
        margin-top:20px;
        width: 320px;
        height: 40px;
        border-radius:5px;
        border:inherit;
        background-color: #ececec;
    }

    ::placeholder{
        font-family: 'Roboto', sans-serif;
        font-size:15px;
        padding:20px;
    }
`

export const  PedidoSection = styled.div`
    margin-bottom:60px;
    h1{
        font-weight: bold;
        font-size: 21px;
    }

    p{
        margin: 20px 0;
    }
    .categorys{
        display:flex;
        flex-wrap: wrap;
    }
    .products{
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap:30px;
        .productsContent{
            display:flex;
            gap:20px;
        }
    }
`

export const Category = styled.div`
    margin-top:30px;
    margin-right:35px;
    width:${({width})=>width?width:"215px"};
    height:${({height})=>height?height:"150px"};
    box-shadow: 0px 0px 18px  6px #10010010;
    border-radius: 12px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;

    img {
        width:44%;
        margin-bottom:20px;
    }
    h1{
        position:absolute;
         font-size:17px;
        bottom:10px;
    }

`

export const  Product = styled.div`
    box-shadow: 0px 0px 18px  6px #10010010;
    width:${({width})=>width?width:"200px"};
    height:${({height})=>height?height:"220px"};
    position:relative;
    margin-bottom:30px;
    border-radius: 15px;
    background-color:${({bgColor})=> bgColor? bgColor:"inherit"};
    .selected{
        position:relative;
        bottom:160px;
        display:${({selected})=>selected?"flex":"none"};
        background-color:#14883A99;
        width:100%;
        height:100%;
        z-index:6;
        font-size:60px;
        align-items:center;
        justify-content:center;
        border-radius: 15px;
    }
    .overlay{
        border-radius: 15px;
        max-width:100%;
    }
    .body{
        position:absolute;
        bottom:0px;
        z-index:2;
        height:55%;
        width:100%;
        border-radius: 12px;
        background-color: white;
        display:flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size:16px;
            z-index:4;
            bottom:60px;
            position:absolute;
        }
        h2{
            position:absolute;
            bottom:10px;
        }
        p{
            font-size:12px;
            bottom:20px;
            position:absolute;
        }
        img{
            z-index:3;
            height:90%;
            position:relative;
            bottom:40%;
        }
    }
`

export const PedidosFooter = styled.div`
    width: 100%;
    display:flex;
    justify-content: right;
    margin-bottom: 20px;
    button{
        border:inherit;
        height:50px;
        border-radius:15px;
    }
    .cancel{
        color:#6A6D6B;
        border:1px solid #6A6D6B;
        margin-right:30px;
        width:300px;
    }
    .finish{
        background-color: ${({abble})=>abble? "green" :"#6A6D6B"};
        color:white;
        margin-right:30px;
        width:300px;
        
    }

`