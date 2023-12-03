import styled from "styled-components"

export const ModalContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    position:absolute;
    display: ${({ show }) => show ? "flex" : "none"};
    top:0;
    width:100%;
    height:400%;
    background-color:#00000030;
    z-index:7;
    justify-content:center;
`

export const ModalContentContainer = styled.div`
    z-index:8;
    width:70vw;
    height:56%;
    background-color:white;
    margin-top:180px;
    border-radius:20px;
    display:flex;
    justify-content:center;
    .content{
        width:80%;
    }
`

export const ModalContentHeader = styled.div`
    margin-top:80px;
    position:relative;
    width:100%;
    button{
        border:inherit;
        background-color:inherit;
        top:-20px;
        position:absolute;
        font-weight:700;
        font-size:30px;
        color:gray;
        right:0;
    }
    h1{
        font-weight:bold;
        font-size:30px;
    }

`

export const PedidoDetails = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:40px;
    .body{
        display:flex;
        h1{
          font-size:18px;
        }
        p{
          font-weight:400;
          font-size:14px;
          color:gray;
        }
        .details{
            margin-left:30px;
            
         }
    }

    .price{
        font-weight:bold;
        margin-right:80px;
    }
`

export const ModalCounter = styled.div`
    width:85px;
    margin-top:20px;
    .border{
        width:100%;
        border: 1px solid green;
        display:flex;
        border-radius:50px;
    }
    input{
        width:90%;
        border:none;
        text-align:center;
    }
    .button{
        font-size:20px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100px;
        height:30px;
        border-radius:100%;
        background-color:green;
    }
`

export const ModalContentBody = styled.div`
    h1{
        margin-top:20px;
        font-weight:bold;
    }
    p{
        margin-top:10px;
        font-size:12px;
        font-weight:400;
    }
    textarea{
        margin-top:20px;
        width:98%;
        background-color:#e2e2e2;
        border:none;
        border-radius:15px;
        padding:20px;
    }
    ::placeholder{
        padding:20px;
    }
    .subtotal{
        width:${({width})=>width?width:"100%"};
        overflow:scroll;
        height:200px;
        margin:auto;
        margin-bottom:30px;
        border: 1px solid gray;
        border-radius:7px;
        margin-top:30px;
        display:flex;
        justify-content:center;
        .content{
            width:80%;
        }
        .pedido{
            width:100%;
            display:flex;
            justify-content:space-between;
            margin-top:10px;
            h1{
                font-weight:400;
            }
        }
        .total{
            margin-top:70px;
            width:100%;
            border-top: 2px dashed gray;
            display:${({totalInLine})=>totalInLine?"flex":"block"};
            h1{
                font-size:26px;
                margin-top:10px;
                margin:${({totalInLine})=>totalInLine?"15px 0 0 80px":"0"};
            }
            p{
                font-size:15px;
                margin-top:20px
            }
        }
    }

`

export const  AdicionalContainer = styled.div`
display:flex;
 width:100%;
 justify-content:space-between;
 .right{
    display:flex;
    p{
        margin-top:24px;
        margin-right:20px;
        font-size:17px;
        font-weight:bold;
        color:gray;
    }
    margin-top:40px;
 }
.left{
    .details{
        margin-top:40px;
    }
    display:flex;
}


`