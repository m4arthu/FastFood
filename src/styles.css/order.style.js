import styled from "styled-components";

export const OrderContainer = styled.div`
    padding:10px;
    border-radius: 14px;
    width: 400px;
    height:70px;
    box-shadow: 5px 10px 40px  5px #10010010;
    margin-top:20px;
    border:${({ selected }) => selected ? "2px solid #3D6611" : "inherit"};
    margin: 10px 10px 0 0px;
    .content{
        width:100%;
        margin:10px;
        display: flex;
        justify-content: space-between;
    }
    .img{
        .img-content{
            img{
                width:30px;
            }
            width:30px;
            height:30px;
            padding:10px;
            border-radius:4px;
            box-shadow: 0px 0px 4px  2px #10010010;
        }
        display: flex;
        .details{
            h1{
                font-size:17px;
            }
            p{
                color:#999999;
                margin-top:5px;
                font-size:13px;
            }
            margin-left:20px;
        }
    }
    .buttons{
        .finish{
            background-color: #aeefbe;
        }
        .cancel{
            background-color: #efaeae;
        }
        button{
            border-radius:6px;
            border:inherit;
            margin-right:20px;
            width:30px;
            height:30px;
        }
    }
    .description{
        position:relative;
        background-color:white;
        width:100%;
        padding:10px;
        right:10px;
        border-radius: 0  0 14px  14px;
        box-shadow: 0px 16px 16px  2px #10010010;
        h1{
            align-self:left;
            font-size:15px;
            margin-left:10px;
        }
        .content{
            font-size:12px;
            border-radius:6px;
            border:1px solid gray;
            width:360px;
            padding:10px;
            margin:10px auto auto 10px;
        }
    }
`

export const OrderUsernameContent = styled.div`
  color: ${(props)=>props.finished? "green" : "gray"};
  margin-top: 20px;
  font-size:70px;
  font-weight:bold;
`