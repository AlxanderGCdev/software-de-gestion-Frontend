import CreditoModal from "../components/CreditoModal"
import CreditsModal from "../components/CreditsModal"
import NewCreditClientModal from "../components/NewCreditClientModal"
import { useState } from 'react';


const Vendedor = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>        
      <CreditsModal/>
      <NewCreditClientModal/>
      <div className="pl-7 pt-7">
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
    </>
  )
}

export default Vendedor