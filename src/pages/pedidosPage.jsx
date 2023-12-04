import { HeaderComponent } from "../components/HeaderComponent"
import {
    Category, PedidoContent, PedidoContentHeader,
    PedidoSection, PedidosContainer,
    Product, PedidosFooter
} from "../styles.css/pedido.style"
import combo from "../assets/images (9).jpeg"
import batata from "../assets/download (8).jpeg"
import sobremesa from "../assets/download (10).webp"
import coca from "../assets/download (9).jpeg"
import fundo from "../assets/fundi-lanche.svg"
import hamburguer from "../assets/images (10).png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { PedidoModal } from "../components/PedidoModalComponent.jsx"
import { useContext, useEffect, useState } from "react"
import { SubtotalComponent } from "../components/SubtotalCompoent.jsx"
import { getProducts } from "../services/products.service.js"
import { OrderContext } from "../contenxts/orderContenxt.jsx"
import { useNavigate } from "react-router-dom"
import { LoadingComponent } from "../components/loadinfComponent.jsx"
export const PedidosPage = () => {
    const [modalShow, setModalShow] = useState(false)
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [selectedName, setSelectedName] = useState()
    const [selectedDescription, setSelectedDescription] = useState()
    const [selectedPrice, setSelectedPrice] = useState()
    const [selectedProductId, setSelectedProductId] = useState()
    const { order, setOrder } = useContext(OrderContext)
    const navigate = useNavigate()
    const cancel = () => {
        setOrder([])
    }
    const finishPedido = () => {
        navigate("/payment")
    }

    const handleSearch = () => {
        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredList(filtered);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData)
                setFilteredList(productsData)
            } catch (error) {
                alert('Erro ao buscar produtos:', error);
            }
        };
        fetchProducts();
    }, [])

    if (products.length > 0) {
        return (
            <>

                <HeaderComponent selectedButtonId={1} />
                <PedidosContainer>
                    <PedidoContent>
                        <PedidoContentHeader tabIndex={0} onKeyDown={handleSearch}>
                            <h1>Seja bem vindo!</h1>
                            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder="O que você procura?" type="serarch" />
                        </PedidoContentHeader>
                        <PedidoSection >
                            <h1>Categorias</h1>
                            <p>Navegue por categoria</p>
                            <div className="categorys">
                                <Category>
                                    <img src={combo} alt="" />
                                    <h1>Combos</h1>
                                </Category>
                                <Category>
                                    <img src={batata} alt="" />
                                    <h1>Acompanhamentos</h1>
                                </Category>
                                <Category>
                                    <img src={coca} alt="" />
                                    <h1>Bebidas</h1>
                                </Category>
                                <Category>
                                    <img src={sobremesa} alt="" />
                                    <h1>Sobremesa</h1>
                                </Category>
                            </div>
                        </PedidoSection>
                        <PedidoSection >
                            <h1>Produtos</h1>
                            <p>Selecione um  produto para adicionar ao  seu  carinho</p>
                            <div className="products">
                                <div className="productsContent">
                                    {filteredList.filter((product) => product.bgColor === "red").map((product) => {
                                        return <ProductView selected={order.some(order => order.product_id === product.id) ? true : false} key={product.id} color={product.bgColor} functions={{ setSelectedProductId, setSelectedName, setSelectedPrice, setSelectedDescription }} data={product} setModalShow={setModalShow} />
                                    })}
                                </div>
                                <div className="productsContent">
                                    {filteredList.filter((product) => product.bgColor === "green").map((product) => {
                                        return <ProductView selected={order.some(order => order.product_id === product.id) ? true : false} key={product.id} color={product.bgColor} functions={{ setSelectedProductId, setSelectedName, setSelectedPrice, setSelectedDescription }} data={product} setModalShow={setModalShow} />
                                    })}
                                </div>
                                <div className="productsContent">
                                    {filteredList.filter((product) => product.bgColor === "yellow").map((product) => {
                                        return <ProductView selected={order.some(order => order.product_id === product.id) ? true : false} key={product.id} color={product.bgColor} functions={{ setSelectedProductId, setSelectedName, setSelectedPrice, setSelectedDescription }} data={product} setModalShow={setModalShow} />
                                    })}
                                </div>
                            </div>
                        </PedidoSection>
                        {order.length > 0 ? <SubtotalComponent allOrders={true} width={"80%"} /> : ""}
                    </PedidoContent>
                </PedidosContainer>
                <PedidosFooter abble={order.length > 0 ? true : false}>
                    <div>
                        <button onClick={() => cancel()} disabled={order.length > 0 ? false : true} className="cancel">Cancelar</button>
                        <button onClick={() => finishPedido()} disabled={order.length > 0 ? false : true} className="finish">Finalizar Pedido</button>
                    </div>
                </PedidosFooter>
                <PedidoModal productId={selectedProductId} description={selectedDescription} name={selectedName} price={selectedPrice} show={modalShow} setShow={setModalShow} />
            </>
        )
    } else{
        return<LoadingComponent/>
    }
}


const ProductView = ({ color, data, setModalShow, selected, functions }) => {
    const productDetails = data
    productDetails
    return (
        <Product onClick={() => {
            setModalShow(true)
            functions.setSelectedName(data.name)
            functions.setSelectedPrice(data.price)
            functions.setSelectedDescription(data.description)
            functions.setSelectedProductId(data.id)
        }} selected={selected} bgColor={color}>
            <img className="overlay" src={fundo} />
            <div className="body">
                <img src={hamburguer} alt="" />
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <h2>R$ {data.price / 100}</h2>
            </div>
            <div className="selected">
                <FontAwesomeIcon icon={faCheck} color="white" />
            </div>
        </Product>
    )
}