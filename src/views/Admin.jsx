
import { BarrasDeEstados } from "../components/BarrasDeEstados"
import CreditsModal from "../components/CreditsModal"
import { SidebarAdmin } from "../components/SidebarAdmin"

const Admin = () => {
  return (
    <>
        <BarrasDeEstados />
        
        <div className="mt-10">
        <SidebarAdmin />
        
        </div>
    </>
  )
}

export default Admin