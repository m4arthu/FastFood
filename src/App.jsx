import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CozinhaPage } from "./pages/CozinhaPage.jsx"
import { RetiradaPage } from "./pages/RetiradaPage.jsx";
import { PedidosPage } from "./pages/pedidosPage.jsx";
import { PaymentPage } from "./pages/PaymentPage.jsx";
import { OrderContextProvider } from "./contenxts/orderContenxt.jsx";
function App() {

  return (
    <BrowserRouter>
      <OrderContextProvider>
        <Routes>
          <Route path="/payment" Component={PaymentPage} />
          <Route path="/" Component={PedidosPage} />
          <Route path="/cozinha" Component={CozinhaPage} />
          <Route path="/retirada" Component={RetiradaPage} />
        </Routes>
      </OrderContextProvider>
    </BrowserRouter>
  )
}

export default App
