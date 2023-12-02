import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CozinhaPage} from "./pages/CozinhaPage.jsx"
import { RetiradaPage } from "./pages/RetiradaPage.jsx";
import { PedidosPage } from "./pages/pedidosPage.jsx";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pedidos" Component={PedidosPage} />
        <Route path="/cozinha"  Component={CozinhaPage} />
        <Route path="/retirada"  Component={RetiradaPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
