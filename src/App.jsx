import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CozinhaPage} from "./pages/CozinhaPage.jsx"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cozinha"  Component={CozinhaPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
