import { ModuleCard } from "@/components/shared/ModuleCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BuscarInfraccionForm } from "../components/BuscarInfraccionForm"
import { useEffect, useState } from "react"
import { useInfraccionesPorPlaca } from "../hooks/useInfraccionesPorPlaca"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Infracciones } from "../interfaces"
import { useNavigate } from "react-router-dom"

export const InfraccionesPage = () => {

    const [numeroPlaca, setNumeroPlaca] = useState<string>("");
    const { data, isLoading } = useInfraccionesPorPlaca(numeroPlaca);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(numeroPlaca, data);
    }, [data])

    const handleRowDoubleClick = (id: number) => {
        navigate(`/app/infracciones/consultarInfracciones/${id}`);
    };

    return (
        <ModuleCard>
            <Card className="bg-black">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl">Infracciones</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="filtros mb-5">
                        <BuscarInfraccionForm onClick={setNumeroPlaca} />
                    </div>

                    {
                        isLoading
                            ? (
                                <div className="h-[200px] rounded border-white border flex items-center justify-center">
                                    <p className="text-gray-500">Cargando...</p>
                                </div>
                            )
                            : (
                                <Table>
                                    <TableCaption>Lista de infracciones</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Folio</TableHead>
                                            <TableHead>Placa</TableHead>
                                            <TableHead>Infractor</TableHead>
                                            <TableHead>Fecha</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            data?.map((infraccion: Infracciones) => (
                                                <TableRow
                                                    key={infraccion.folio}
                                                    onDoubleClick={() => handleRowDoubleClick(infraccion.id)}
                                                    className="cursor-pointer hover:bg-gray-900/50 transition-colors"
                                                >
                                                    <TableCell>{infraccion.folio}</TableCell>
                                                    <TableCell>{infraccion.placa}</TableCell>
                                                    <TableCell>{infraccion.nombre_infractor}</TableCell>
                                                    <TableCell>{infraccion.fecha}</TableCell>
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

    )
}
