import styled from "styled-components";

export const PaymentContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
`

export const PaymentContent = styled.div`
    margin-top:60px;
    width:80%;
        .header{
            display:flex;
            align-items:center;
            h1{
                margin-left:20px;
                font-weight:bold;
                font-size:20px;
            }
        }

        .body{
            display:flex;
            justify-content:space-between;
            h2{
                font-weight:bold;
                font-size:14px;
            }
            margin-top:20px;
            input{
                 margin-top:10px;
                 border:none;
                 background-color:#e9e9e9;
                 height:25px;
                 border-radius:2px;
                }
            ::placeholder{
                padding:10px;
            }
            .left{
                width:40%;
                .subtotal{
                    margin-top:10px;
                }
                .username{
                    width:100%;
                    justify-content:space-between;
                    display:flex;
                    .user{
                        width:250px;
                    }
                     .cod{
                        width:100px;
                     }
                }

            }
            .right{
                width:40%;
                .details{
                    display:flex;
                    justify-content:space-between;
                }
            }
        }
        .footer{
          margin-top:30px;
          margin-left:30px;
        }
`

export const PaymentTypeContainer = styled.div`
    width:100%;
    height:50px;
    border: 1px solid gray;
    margin-top:10px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    .content{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:80%;
    }
    .method{
        h1{
            margin-left:10px;
            font-weight:bold;
        }
        display:flex;
        
    }    


`