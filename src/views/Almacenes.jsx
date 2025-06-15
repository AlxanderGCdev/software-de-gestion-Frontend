import AlmacenesTable from "../components/AlmacenesTable"
import { NavBar } from "../components/NavBar"



const Almacenes = () => {
  return (
    <div>
      <NavBar/>
        <h2 className="text-4xl text-white text-center mt-7">Vista Almacenes</h2> 
        <AlmacenesTable/>
    </div>
  )
}

export default Almacenes