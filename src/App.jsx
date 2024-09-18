import {BrowserRouter,Routes ,Route}from "react-router-dom"
import { Index } from "./page/Index"
import { Agregar} from "./page/Agregar"
import { Administrar } from "./page/Administrar"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/administrar" element={<Administrar></Administrar>}></Route>
      <Route path="/agregar" element={<Agregar></Agregar>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
