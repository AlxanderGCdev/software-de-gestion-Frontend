import { Edit, X, Plus, FileText } from "lucide-react";

export default function ProductosTable() {
  const productos = [
    {
      id: 1,
      cod: "D2",
      codQR: "QR001D2",
      nombre: "Despensa",
      imagen: "📦",
      categoria: "T2",
      stock: 21,
      almacenCentral: 8,
      almacen1: 6,
      almacen2: 7,
      precioVenta: 19300
    },
    {
      id: 2,
      cod: "T1",
      codQR: "QR002T1",
      nombre: "Tienda",
      imagen: "📦",
      categoria: "T2",
      stock: 17,
      almacenCentral: 8,
      almacen1: 2,
      almacen2: 7,
      precioVenta: 19300
    },
    {
      id: 3,
      cod: "H2",
      codQR: "QR003H2",
      nombre: "Hay Coca",
      imagen: "📦",
      categoria: "T2",
      stock: 9,
      almacenCentral: 3,
      almacen1: 3,
      almacen2: 3,
      precioVenta: 19300
    },
    {
      id: 4,
      cod: "P3",
      codQR: "QR004P3",
      nombre: "Pollería",
      imagen: "📦",
      categoria: "T2",
      stock: 11,
      almacenCentral: 4,
      almacen1: 3,
      almacen2: 4,
      precioVenta: 19300
    }
  ];

  return (
    <div className="bg-gray p-6 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-white text-xl font-semibold">Productos</h1>
            <div className="p-2">
              <FileText className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">              
              <span>Impresión de Códigos</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">             
              <span>Nuevo Producto</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700 border-b border-gray-500">
              <tr>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">#</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Cod</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Cod. QR</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Nombre del Producto</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Imagen</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Categoría</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Stock</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Almacén Central</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Almacén 1</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Almacén 2</th>
                <th className="px-4 py-3 bg-gray-700 text-left text-sm font-medium text-white border-r border-gray-500">Precio de Venta</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-gray-600">
              {productos.map((producto, index) => (
                <tr key={producto.id} className="border-b border-gray-500 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-white border-r border-gray-500">{producto.cod}</td>
                  <td className="px-4 py-3 text-sm font-mono text-white border-r border-gray-500">{producto.codQR}</td>
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.nombre}</td>
                  <td className="px-4 py-3 text-sm border-r border-gray-500">
                    <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                      {producto.imagen}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.categoria}</td>
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.stock}</td>
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.almacenCentral}</td>
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.almacen1}</td>
                  <td className="px-4 py-3 text-sm text-white border-r border-gray-500">{producto.almacen2}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-green-500 border-r border-gray-500">
                    $ {producto.precioVenta.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 px-6 py-4 border-t border-gray-200">
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
            <FileText className="w-4 h-4" />
            Exportar a PDF
          </button>
        </div>
      </div>
    </div>
  );
}