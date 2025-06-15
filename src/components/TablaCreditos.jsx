
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export function TablaCeditos() {
  return (
    <div className="m-7">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Nombre y Apellido</TableHeadCell>
            <TableHeadCell>Provincia</TableHeadCell>
            <TableHeadCell>Dispositivos</TableHeadCell>
            <TableHeadCell>Credito</TableHeadCell>                       
            <TableHeadCell>
                Acccion
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Andrea Reynosa
            </TableCell>
            <TableCell>Salta</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$30000</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Editar
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Maria Patiño
            </TableCell>
            <TableCell>Jujuy</TableCell>
            <TableCell>1</TableCell>
            <TableCell>$19999</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Editar
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Mario Garzon</TableCell>
            <TableCell>Jujuy</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$60000</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Editar
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
