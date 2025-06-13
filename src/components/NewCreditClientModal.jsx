import { useState } from 'react';
import { X, MapPin } from 'lucide-react';

const NewCreditClientModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    apellidoNombre: 'Natalia Rebeca Fernandez',
    dni: '26458412',
    barrio: 'Manzanales',
    direccion: 'Rivadavia 6532',
    ubicacion: '',
    localidad: 'Antillaco',
    provincia: 'Salta',
    telefono1: '388-4521518',
    telefono2: '388-8745123',
    rubro: 'Despensa',
    razonSocial: 'El Cuervo',
    observaciones: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveClient = () => {
    console.log('Guardando cliente:', formData);
    // Aquí implementarías la lógica para guardar
  };

  const handleSaveAndSell = () => {
    console.log('Guardando y vendiendo a cliente:', formData);
    // Aquí implementarías la lógica para guardar y vender
  };

  return (
    <div className="pl-7">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
      >
        Nuevo Cliente
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Nuevo Cliente</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="space-y-4">
                
                {/* Primera fila: Apellido y Nombre, DNI, Barrio */}
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-white mb-1">
                      Apellido y Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.apellidoNombre}
                      onChange={(e) => handleInputChange('apellidoNombre', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-white mb-1">
                      DNI <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.dni}
                      onChange={(e) => handleInputChange('dni', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-white mb-1">
                      Barrio <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.barrio}
                      onChange={(e) => handleInputChange('barrio', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Segunda fila: Dirección, Ubicación, Localidad, Provincia */}
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <label className="block text-sm font-medium text-white mb-1">
                      Dirección <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.direccion}
                      onChange={(e) => handleInputChange('direccion', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white mb-1">
                      Ubicación <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <button className="w-full h-10 bg-green-100 border border-green-300 rounded-md flex items-center justify-center hover:bg-green-200 transition-colors">
                        <MapPin size={20} className="text-green-600" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-white mb-1">
                      Localidad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.localidad}
                      onChange={(e) => handleInputChange('localidad', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-white mb-1">
                      Provincia <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.provincia}
                      onChange={(e) => handleInputChange('provincia', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Tercera fila: Teléfonos, Rubro, Razón Social, Observaciones */}
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white mb-1">
                      Teléfono 1 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.telefono1}
                      onChange={(e) => handleInputChange('telefono1', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white mb-1">
                      Teléfono 2 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.telefono2}
                      onChange={(e) => handleInputChange('telefono2', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white mb-1">
                      Rubro <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.rubro}
                      onChange={(e) => handleInputChange('rubro', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Despensa">Despensa</option>
                      <option value="Almacén">Almacén</option>
                      <option value="Kiosco">Kiosco</option>
                      <option value="Restaurante">Restaurante</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white mb-1">
                      Razón Social <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.razonSocial}
                      onChange={(e) => handleInputChange('razonSocial', e.target.value)}
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white mb-1">
                      Observaciones
                    </label>
                    <textarea
                      value={formData.observaciones}
                      onChange={(e) => handleInputChange('observaciones', e.target.value)}
                      rows="2"
                      className="w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Footer con botones */}
            <div className="px-6 py-4 bg-gray-800 border-t flex gap-3 justify-between">
              <div className="flex gap-3">
                <button
                  onClick={handleSaveClient}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors flex items-center gap-2"
                >                  
                  Guardar Cliente
                </button>
                <button
                  onClick={handleSaveAndSell}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors flex items-center gap-2"
                >
                  
                  Guardar y Vender
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded font-medium transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCreditClientModal;