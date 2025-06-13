import { Button } from "flowbite-react";

const AlmacenesTable = () => {
  const almacenes = [
    {
      nombre: "Central",
      stockValorado: "$ 214.455",
      provincia: "Jujuy",
      localidad: "Jujuy",
      direccion: "Lavalle 513",
      barrio: "Centro",
      telefono: "3884521015",
      ciudades: "Jujuy, A. Comedero, Palpola",
      responsable: "Mario Gonzalez",
    },
    {
      nombre: "Jujuy1",
      stockValorado: "$ 135.370",
      provincia: "Jujuy",
      localidad: "Tilcara",
      direccion: "Huichaira 23",
      barrio: "Norte",
      telefono: "3884521015",
      ciudades: "Tilcara, Humahuaca, Mainara Purnamarca",
      responsable: "Nicolas Quiroga",
    },
    {
      nombre: "Jujuy 2",
      stockValorado: "$ 111.950",
      provincia: "Jujuy",
      localidad: "Perico",
      direccion: "Av. Bolivia 18",
      barrio: "Cuyaya",
      telefono: "3884521015",
      ciudades: "Perico, El Carmen, Monterrico",
      responsable: "Emilio Suarez",
    },
    {
      nombre: "Jujuy 3",
      stockValorado: "$ 83.000",
      provincia: "Jujuy",
      localidad: "San Pedro",
      direccion: "Iquique s/n",
      barrio: "Lozano",
      telefono: "3884521015",
      ciudades: "San Pedro, Santa Clara",
      responsable: "Juan Martínez",
    },
  ];

  return (
    <div className="p-6 m-7 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-white mb-6">Almacenes</h1>
      <div className="flex">
      <Button color="green" className="mb-6">Nuevo Almacen</Button>
      <Button className="ml-5">Historial</Button>
      </div>
      
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Stock Valorado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Provincia</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Localidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Dirección</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Barrio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Teléfono</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Ciudades que Alcanzan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Responsable</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {almacenes.map((almacen, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{almacen.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.stockValorado}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.provincia}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.localidad}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.direccion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.barrio}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.telefono}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.ciudades}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{almacen.responsable}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  <button className="text-green-600 hover:text-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Exportar a PDF
        </button>
      </div>
    </div>
  );
};

export default AlmacenesTable;