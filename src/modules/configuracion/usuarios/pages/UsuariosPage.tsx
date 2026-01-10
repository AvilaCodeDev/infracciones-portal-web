import { ModuleCard } from "@/components/shared/ModuleCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetUsuarios } from "../hooks/useGetUsuarios"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Usuario } from "../interfaces";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddUserModal } from "../components/AddUserModal";
import { useGetRoles } from "../hooks/useGetRoles";

export const UsuariosPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {
    isLoading,
    error,
    data
  } = useGetUsuarios();

  useGetRoles();

  if (error) return <h1>No se pudo cargar el modulo</h1>

  return (
    <>
      <ModuleCard>
        <Card className="bg-black">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Usuarios</CardTitle>
              <div>
                <Button className="w-50" onClick={() => setIsOpen(true)}>Agregar Usuario</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {
              isLoading
                ? <h1>Cargando...</h1>
                : (
                  <Table>
                    <TableCaption>Listado de Usuarios</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Numero de Empleado</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Correo</TableHead>
                        <TableHead>Rol</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {
                        data.data.map((usuario: Usuario) => (
                          <TableRow>
                            <TableCell className="font-medium">{usuario.numero_empleado}</TableCell>
                            <TableCell>{usuario.nombre_completo}</TableCell>
                            <TableCell>{usuario.correo}</TableCell>
                            <TableCell>{usuario.rol}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                )
            }
          </CardContent>
        </Card>
      </ModuleCard>

      <AddUserModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
