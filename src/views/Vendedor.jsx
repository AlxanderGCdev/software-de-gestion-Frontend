import CreditoModal from "../components/CreditoModal"
import CreditsModal from "../components/CreditsModal"
import FooterVendedor from "../components/FooterVendedor";
import { NavBar } from "../components/NavBar";
import NewCreditClientModal from "../components/NewCreditClientModal"
import { useState } from 'react';


const Vendedor = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>    
    <div className=" flex mt-8 justify-center">       
      <CreditsModal/>
      <NewCreditClientModal/>
      <div className="ml-4">
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setModalOpen(true)}
      >
      Nuevo Crédito
      </button>
      
      {/* Modal de crédito */}
      <CreditoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
      </div>
      </div>
      <div >
      <FooterVendedor/>
      </div>
    </>
  )
}

export default Vendedor