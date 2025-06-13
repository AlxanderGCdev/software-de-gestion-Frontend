import { useState } from 'react';
import { X, Search, FileText, Download } from 'lucide-react';

const CreditsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const credits = [
    {
      id: 1,
      status: 'Al Dia',
      dni: '23540607',
      solicitud: '1244',
      cliente: 'María José Prenafeta',
      producto: 'P3',
      cuotas: 6,
      fechaAlta: '21/04/25',
      vendedor: 'Pedro Quinteros',
      cobrador: 'Pablo Soria',
      mora: '',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      status: 'Adeuda',
      dni: '50745216',
      solicitud: '5241',
      cliente: 'Juan Pablo Bustos',
      producto: 'D2',
      cuotas: 4,
      fechaAlta: '21/04/25',
      vendedor: 'Pedro Quinteros',
      cobrador: 'Pablo Soria',
      mora: '10 Días',
      statusColor: 'bg-red-500'
    },
    {
      id: 3,
      status: 'Al Dia',
      dni: '32654781',
      solicitud: '6548',
      cliente: 'Lucas Suarez',
      producto: 'H5',
      cuotas: 6,
      fechaAlta: '21/04/25',
      vendedor: 'Pedro Quinteros',
      cobrador: 'Pablo Soria',
      mora: '',
      statusColor: 'bg-green-500'
    }
  ];

  const getStatusBadge = (status, color) => {
    return (
      <div className={`${color} px-2 py-1 rounded text-xs font-medium`}>
        {status}
      </div>
    );
  };

  const ActionButton = ({ icon: Icon, color = "bg-blue-500", onClick }) => (
    <button 
      onClick={onClick}
      className={`${color} hover:opacity-80 text-white p-1 rounded text-xs transition-opacity`}
    >
      <Icon size={12} />
    </button>
  );

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
      >
        Créditos
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 px-6 py-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Créditos</h2>
                
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-6 py-4 bg-gray-800 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DNI</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">N° Solicitud</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Cliente</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Producto</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">N° Cuotas</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Fecha de Alta</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Vendedor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Cobrador</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Mora</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {credits.map((credit, index) => (
                    <tr key={credit.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                      <td className="px-4 py-3">
                        {getStatusBadge(credit.status, credit.statusColor)}
                      </td>
                      <td className="px-4 py-3 text-sm text-white">{credit.dni}</td>
                      <td className="px-4 py-3 text-sm text-white">{credit.solicitud}</td>
                      <td className="px-4 py-3 text-sm text-white">{credit.cliente}</td>
                      <td className="px-4 py-3 text-sm text-white font-medium">{credit.producto}</td>
                      <td className="px-4 py-3 text-sm text-white">{credit.cuotas}</td>
                      <td className="px-4 py-3 text-sm text-white">{credit.fechaAlta}</td>
                      <td className="px-4 py-3 text-sm text-white">{credit.vendedor}</td>
                      <td className="px-4 py-3 text-sm text-white">{credit.cobrador}</td>
                      <td className="px-4 py-3 text-sm text-red-600 font-medium">{credit.mora}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <ActionButton icon={X} color="bg-red-500" />
                          <ActionButton icon={FileText} color="bg-blue-500" />
                          <ActionButton icon={FileText} color="bg-green-500" />
                          <ActionButton icon={FileText} color="bg-purple-500" />
                          <ActionButton icon={Download} color="bg-orange-500" />
                          <ActionButton icon={FileText} color="bg-gray-500" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer with action buttons */}
            <div className="px-6 py-4 bg-gray-800 border-t flex gap-3">              
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium transition-colors">
                Exportar a PDF
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditsModal;