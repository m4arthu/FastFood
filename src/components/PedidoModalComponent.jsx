import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    ModalContainer,
    ModalContentContainer,
    ModalContentHeader,
    ModalCounter,
    PedidoDetails,
    ModalContentBody,
    AdicionalContainer
} from "../styles.css/pedidoModal.style"
import { PedidosFooter } from "../styles.css/pedido.style"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useContext, useRef, useState } from "react"
import { Category, Product } from "../styles.css/pedido.style"
import hamburguer from "../assets/images (10).png"
import fundo from "../assets/fundi-lanche.svg"
import bacon from "../assets/bacon.avif"
import chedar from "../assets/chedar.jpeg"
import molho from "../assets/molho.jpeg"
import { SubtotalComponent } from "./SubtotalCompoent"
import { OrderContext } from "../contenxts/orderContenxt"


export const PedidoModal = ({show, productId,setShow,name,description,price}) => {
    const [quantity, setQuantity] = useState(1);
    const {order,setOrder} = useContext(OrderContext)
    const Description = useRef(null)
    const postOrder =() => {
        const neworder = {
            name:name,
            productId: productId,
            quantity: quantity,
            description: Description.current.value,
            price: quantity * price /100
        }
        setOrder([...order,neworder])
        console.log(order)
    }

    const Adicional = ({ data }) => {
        return (
            <AdicionalContainer>
                <div className="left">
                    <Category width={"70px"} height={"70px"}>
                        <img src={data.img} alt="" />
                    </Category>
                    <div className="details">
                        <h1>{data.nome}</h1>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="right">
                    <p>R$1,00</p>
                    <input className="check" type="checkbox" />
                </div>
            </AdicionalContainer>
        )
    }


    const QuantitySelector = ({quantity, setQuantity }) => {

        const decreaseQuantity = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        };

        const increaseQuantity = () => {
            setQuantity(quantity + 1);
        };

        return (
            <ModalCounter>
                <div className="border">
                    <div className="button" onClick={decreaseQuantity}>-</div>
                    <input type="text" value={quantity} readOnly />
                    <div className="button" onClick={increaseQuantity}>+</div>
                </div>
            </ModalCounter>
        );
    };

    return (
        <>
          <ModalContainer show={show}>
                <ModalContentContainer>
                    <div className="content">
                        <ModalContentHeader>
                            <button onClick={() => {
                                setShow(false)
                            }}><FontAwesomeIcon icon={faX} /></button>
                            <h1>Revise o  seu pedido!</h1>
                            <PedidoDetails>
                                <div className="body">
                                    <Product width={"150px"} height={"150px"} bgColor={"yellow"}>
                                        <img className="overlay" src={fundo} />
                                        <div className="body">
                                            <img src={hamburguer} alt="" />
                                        </div>
                                    </Product>
                                    <div className="details">
                                        <h1>{name}</h1>
                                        <p>{description}</p>
                                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                                    </div>
                                </div>
                                <div className="price">R${price /100}</div>
                            </PedidoDetails>
                        </ModalContentHeader>
                        <ModalContentBody>
                            <h1>Adicionais</h1>
                            <p>Selecione os igredientes que  você quer adicionar a mais  no  seu lanche</p>
                            <Adicional data={{ img: bacon, nome: "bacon", description: "10g" }} />
                            <Adicional data={{ img: chedar, nome: "chedar", description: "10g" }} />
                            <Adicional data={{ img: molho, nome: "molho", description: "10g" }} />
                            <h1>Observaçôes</h1>
                            <textarea ref={Description} name="observações" placeholder="Adicione uma  obsercação  ao pedido" cols="30" rows="10"></textarea>
                           <SubtotalComponent price={price}  name={name} quantity={quantity}/>
                        </ModalContentBody>
                        <PedidosFooter abble={true} className="footer">
                            <div>
                                <button onClick={() => {
                                    postOrder()
                                    setShow(false)
                                }} className="cancel">Continuar adicionando</button>
                                <button onClick={() => {
                                    postOrder()
                                    setShow(false)
                                }} className="finish">Adicionar ao  pedido</button>
                            </div>
                        </PedidosFooter>
                    </div>
                </ModalContentContainer>
            </ModalContainer>
        </>
    )

}