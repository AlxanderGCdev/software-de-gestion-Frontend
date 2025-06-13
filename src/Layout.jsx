import { BrowserRouter, Route, Routes } from "react-router"
import Admin from "./views/Admin.jsx"
import Clientes from "./views/Clientes.jsx"
import Login from "./views/Login.jsx"
import Vendedor from "./views/Vendedor.jsx"
import Cobrador from "./views/Cobrador.jsx"
import Almacenes from "./views/Almacenes.jsx"
import Productos from "./views/Productos.jsx"
import PreciosMasivos from "./views/VistaPreciosMasivos.jsx"
import NotFound from "./views/NotFound.jsx"
import Creditos from "./views/Creditos.jsx"
import Graficos from "./views/Graficos.jsx"
import { NavBar } from "./components/Navbar.jsx"
import ClienteNuevo from "./views/ClienteNuevo.jsx"
import CreditoNuevo from "./views/CreditoNuevo.jsx"




const Layout = () => {
  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Admin/>} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientenuevo" element={<ClienteNuevo/>} />
                <Route path="/creditonuevo" element={<CreditoNuevo/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/vendedor" element={<Vendedor/>} />
                <Route path="/cobrador" element={<Cobrador/>} />
                <Route path="/almacenes" element={<Almacenes/>} />
                <Route path="/productos" element={<Productos/>} />
                <Route path="/preciosmasivos" element={<PreciosMasivos/>} />
                <Route path="/creditos" element={<Creditos/>} />
                <Route path="/graficos" element={<Graficos/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Layout