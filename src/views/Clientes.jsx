import { NavBar } from '../components/NavBar'
import {TablaClientes} from '../components/TablaClientes'

const Clientes = () => {
  return (
    <div>
      <NavBar/>

      <h2 className="text-4xl text-white text-center mt-7 mb-7">Clientes</h2>      
      <TablaClientes />      
    </div>
  )
}

export default Clientes