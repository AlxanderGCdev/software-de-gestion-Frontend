import React, { useState } from 'react';

const PreciosMasivos = () => {
  const [activeTab, setActiveTab] = useState('1-dispositivo');
  const [periodos, setPeriodos] = useState([
    { id: 1, nombre: 'Enero - 2025', activo: false },
    { id: 2, nombre: 'Febrero - 2025', activo: true },
    { id: 3, nombre: 'Abril - 2025', activo: false },
  ]);
  const [nuevoPeriodo, setNuevoPeriodo] = useState('');
  const [precios, setPrecios] = useState({
    '1-dispositivo': {
      contado: 35000,
      '2-cuotas': 17500,
      '4-cuotas': 10000,
      '6-cuotas': 7000,
    },
    '2-dispositivos': {
      contado: 65000,
      '2-cuotas': 65000,
      '4-cuotas': 65000,
      '6-cuotas': 65000,
    },
    '3-dispositivos': {
      contado: 105000,
      '2-cuotas': 52500,
      '4-cuotas': 26500,
      '6-cuotas': 25000,
    },
    '4-dispositivos': {
      contado: 140000,
      '2-cuotas': 70000,
      '4-cuotas': 35000,
      '6-cuotas': 23000,
    },
  });

  const handlePrecioChange = (dispositivo, tipo, valor) => {
    setPrecios(prev => ({
      ...prev,
      [dispositivo]: {
        ...prev[dispositivo],
        [tipo]: parseInt(valor) || 0,
      },
    }));
  };

  const agregarPeriodo = () => {
    if (nuevoPeriodo.trim() === '') return;
    const nuevo = {
      id: periodos.length + 1,
      nombre: nuevoPeriodo,
      activo: false,
    };
    setPeriodos([...periodos, nuevo]);
    setNuevoPeriodo('');
  };

  const activarPeriodo = (id) => {
    setPeriodos(periodos.map(p => ({
      ...p,
      activo: p.id === id,
    })));
  };

  return (
    <div className="bg-gray min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Actualización Masiva de Precios</h1>

          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              {['1 Dispositivo', '2 Dispositivos', '3 Dispositivos', '4 Dispositivos'].map((dispositivo, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                    activeTab === `${index + 1}-dispositivo`
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-500'
                  }`}
                  onClick={() => setActiveTab(`${index + 1}-dispositivo`)}
                >
                  {dispositivo}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Periodos</h3>
              <ul className="space-y-2">
                {periodos.map((periodo) => (
                  <li key={periodo.id}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded ${
                        periodo.activo
                          ? 'bg-blue-100 text-blue-800'
                          : 'hover:bg-gray-500 text-white bg-gray-600'
                      }`}
                      onClick={() => activarPeriodo(periodo.id)}
                    >
                      {periodo.nombre}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 border text-white border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Nuevo periodo"
                  value={nuevoPeriodo}
                  onChange={(e) => setNuevoPeriodo(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
                  onClick={agregarPeriodo}
                >
                  +
                </button>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-3">Precios para {activeTab.replace('-', ' ')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['contado', '2-cuotas', '4-cuotas', '6-cuotas'].map((tipo) => (
                    <div key={tipo} className="bg-gray-600 p-3 rounded shadow-sm">
                      <label className="block text-sm font-medium text-white mb-1">
                        {tipo.replace('-', ' ').toUpperCase()}
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          className="flex-1 min-w-0 block w-full text-white px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={precios[activeTab][tipo]}
                          onChange={(e) => handlePrecioChange(activeTab, tipo, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button className="px-4 py-2 border bg-blue-700 border-gray-300 rounded-md text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Cancelar
            </button>
            <div className="space-x-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Guardar
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Exportar a PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreciosMasivos;