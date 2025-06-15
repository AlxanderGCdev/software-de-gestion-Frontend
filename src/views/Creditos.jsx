import { NavBar } from "../components/NavBar"
import { TablaCeditos } from "../components/TablaCreditos"


const Creditos= () => {
  return (
    <>
      <NavBar/>
      <h2 className="text-4xl text-white text-center mt-7">Creditos</h2>
      <TablaCeditos/>
    </>
  )
}

export default Creditos