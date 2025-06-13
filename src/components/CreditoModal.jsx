import { useState } from 'react';

const CreditoModal = ({ isOpen, onClose }) => {
  const [tipoCredito, setTipoCredito] = useState('Super PROMO');
  const [modalidadPago, setModalidadPago] = useState('Mensual');
  const [entrega, setEntrega] = useState('2 Cuotas');
  const [articulos, setArticulos] = useState([
    { codigo: 'D1', nombre: 'Despensas', cantidad: 1, descripcion: 'Rubro e imagenes' },
    { codigo: 'P8', nombre: 'Polleria', cantidad: 1, descripcion: 'Solo Rubro' }
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-700 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Encabezado */}
        <div className="bg-gray-800 text-white p-4 rounded-t-lg">
          <h1 className="text-2xl font-bold">Nuevo Credito</h1>
          <div className="flex justify-between mt-2">
            <h2 className="text-lg">Natalia Rebeca Fernandez</h2>
            <h3 className="text-lg">264587412</h3>
          </div>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-6">
            {/* Información básica */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white">Solicitud Numero</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Vendedor</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white">Cobrador</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Fecha de Alta</label>
                  <input type="date" className="mt-1 text-white block w-full border border-gray-300 rounded-md p-2" />
                </div>
              </div>
            </div>

            {/* Artículos */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-white">Agregar Artículos</h3>
                <button className="font-medium rounded-md border bg-blue-100 border-blue-500">Agregar</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y text-white divide-gray-200">
                  <thead className="bg-gray-800">
                    <tr >
                      <th className="px-2 py-2 text-left text-xs font-medium text-white uppercase">Código</th>
                      <th className="px-2 py-2 text-left text-xs font-medium text-white uppercase">Artículo</th>
                      <th className="px-2 py-2 text-left text-xs font-medium text-white uppercase">Cantidad</th>
                      <th className="px-2 py-2 text-left text-xs font-medium text-white uppercase">Descripción</th>
                      <th className="px-2 py-2 text-left text-xs font-medium text-white uppercase">Opciones</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-700 divide-y divide-gray-200">
                    {articulos.map((articulo, index) => (
                      <tr key={index}>
                        <td className="px-2 py-2 whitespace-nowrap">{articulo.codigo}</td>
                        <td className="px-2 py-2 whitespace-nowrap font-medium">{articulo.nombre}</td>
                        <td className="px-2 py-2 whitespace-nowrap">{articulo.cantidad}</td>
                        <td className="px-2 py-2 whitespace-nowrap text-sm text-white">{articulo.descripcion}</td>
                        <td className="px-2 py-2 whitespace-nowrap">
                          <button className="text-red-500 hover:text-red-700">Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Tipo de crédito */}
            <div>
              <h3 className="font-medium mb-2 text-white">Tipo de Credito</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Super PROMO', 'Entrega Exclusive'].map((opcion) => (
                  <button
                    key={opcion}
                    className={`p-2 rounded-md border ${tipoCredito === opcion ? 'bg-blue-100 border-blue-500' : 'border-gray-300 text-white'}`}
                    onClick={() => setTipoCredito(opcion)}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-white">Entrega</p>
                  <p className="font-medium rounded-md border bg-blue-100 border-blue-500">$6,000</p>
                </div>
              </div>
            </div>

            {/* Modalidad de pago */}
            <div>
              <h3 className="font-medium mb-2 text-white">Modalidad de Pago</h3>
              <div className="grid grid-cols-3 gap-2">
                {['Mensual', 'Semanal', 'Quincenal'].map((opcion) => (
                  <button
                    key={opcion}
                    className={`p-2 rounded-md border ${modalidadPago === opcion ? 'bg-blue-100 border-blue-500' : 'border-gray-300 text-white'}`}
                    onClick={() => setModalidadPago(opcion)}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </div>

            {/* Entrega */}
            <div>
              <h3 className="font-medium mb-2 text-white">Entrega</h3>
              <div className="grid grid-cols-4 gap-2">
                {['Contado', '2 Cuotas', '4 Cuotas', '6 Cuotas'].map((opcion) => (
                  <button
                    key={opcion}
                    className={`p-2 rounded-md border text-sm ${entrega === opcion ? 'bg-blue-100 border-blue-500' : 'border-gray-300 text-white'}`}
                    onClick={() => setEntrega(opcion)}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-white">FINANCIACION</p>
                  <p className="font-medium rounded-md border bg-blue-100 border-blue-500">$50,000</p>
                </div>
                <div>
                  <p className="text-sm text-white">Importe de Cuota</p>
                  <p className="font-medium rounded-md border bg-blue-100 border-blue-500">$12,500</p>
                </div>
              </div>
            </div>

            {/* Campos adicionales */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Financiadora Especial</label>
                <input type="text" className="mt-1 block w-full border bg-blue-100 border-blue-500 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Primer Cobro</label>
                <input type="date" className="mt-1 block w-full border bg-blue-100 border-blue-500 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Rango Horario</label>
                <input type="text" className="mt-1 block w-full border bg-blue-100 border-blue-500 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Observaciones</label>
                <textarea className="mt-1 block w-full border bg-blue-100 border-blue-500 rounded-md p-2" rows="2"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Resumen y acciones */}
        <div className="bg-gray-800 p-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-white">Resumen de Credito</h3>
              <div className="grid grid-cols-5 gap-4 mt-2 text-sm">
                <div>
                  <p className="text-white">Tipo de Credito</p>
                  <p className="text-white">Simple</p>
                </div>
                <div>
                  <p className="text-white">Producto/s</p>
                  <p className="text-white">D1/frs</p>
                </div>
                <div>
                  <p className="text-white">Credito</p>
                  <p className="text-white">$50,000</p>
                </div>
                <div>
                  <p className="text-white">Entrega</p>
                  <p className="text-white">$0</p>
                </div>
                <div>
                  <p className="text-white">Cuotas</p>
                  <p className="text-white">6</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-500" onClick={onClose}>
                Cancelar
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ejemplo de uso del componente


export default CreditoModal;