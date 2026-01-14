import { ModuleCard } from "@/components/shared/ModuleCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate, useParams } from "react-router-dom"
import { useInfraccionById } from "../hooks/useInfraccionById"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, User, FileText, AlertCircle } from "lucide-react"
import type { Evidencia } from "../interfaces"
import { useEffect } from "react"

export const InfraccionDetallePage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: infraccion, isLoading, error } = useInfraccionById(Number(id));

    useEffect(() => {
        console.log(infraccion);
    }, [infraccion])

    if (isLoading) {
        return (
            <ModuleCard>
                <Card className="bg-black">
                    <CardContent className="pt-6">
                        <div className="h-[400px] rounded border-white border flex items-center justify-center">
                            <p className="text-gray-500">Cargando detalles de la infracción...</p>
                        </div>
                    </CardContent>
                </Card>
            </ModuleCard>
        );
    }

    if (error || !infraccion) {
        return (
            <ModuleCard>
                <Card className="bg-black">
                    <CardContent className="pt-6">
                        <div className="h-[400px] rounded border-white border flex items-center justify-center">
                            <p className="text-red-500">Error al cargar la infracción</p>
                        </div>
                    </CardContent>
                </Card>
            </ModuleCard>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <ModuleCard>
            <Card className="bg-black">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => navigate(-1)}
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                            <CardTitle className="text-2xl">Detalle de Infracción</CardTitle>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-sm font-semibold ${infraccion.estatus === 'Registrada'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-500/20 text-gray-400'
                            }`}>
                            {infraccion.estatus}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Información General */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                                Información General
                            </h3>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Folio</p>
                                        <p className="text-lg font-semibold">{infraccion.folio}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <AlertCircle className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Placa</p>
                                        <p className="text-lg font-semibold">{infraccion.placa}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FileText className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Descripción</p>
                                        <p className="text-base">{infraccion.descripcion}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <User className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Infractor</p>
                                        <p className="text-base">{infraccion.nombre_infractor}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Fecha y Hora</p>
                                        <p className="text-base">{formatDate(infraccion.ocurrio_en)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Alcaldía</p>
                                        <p className="text-base">{infraccion.nombre}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Información del Oficial */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                                Información del Oficial
                            </h3>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <User className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Nombre Completo</p>
                                        <p className="text-base">{infraccion.nombre_completo}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FileText className="h-5 w-5 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Número de Empleado</p>
                                        <p className="text-base">{infraccion.numero_empleado}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-3">
                                    Ubicación
                                </h3>
                                <div className="space-y-2">
                                    <div>
                                        <p className="text-sm text-gray-400">Latitud</p>
                                        <p className="text-base">{infraccion.latitud}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Longitud</p>
                                        <p className="text-base">{infraccion.longitud}</p>
                                    </div>
                                    <a
                                        href={`https://www.google.com/maps?q=${infraccion.latitud},${infraccion.longitud}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-2"
                                    >
                                        <MapPin className="h-4 w-4" />
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Comentarios */}
                        {infraccion.comentarios && (
                            <div className="lg:col-span-2 space-y-4">
                                <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                                    Comentarios
                                </h3>
                                <p className="text-base bg-gray-900 p-4 rounded-lg">
                                    {infraccion.comentarios}
                                </p>
                            </div>
                        )}

                        {/* Evidencias */}
                        {infraccion.evidencias && infraccion.evidencias.length > 0 && (
                            <div className="lg:col-span-2 space-y-4">
                                <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                                    Evidencias ({infraccion.evidencias.length})
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {infraccion.evidencias.map((evidencia: Evidencia, index: number) => (
                                        <div key={index} className="relative group">
                                            <img
                                                src={`https://mrcvl.com${evidencia.url}`}
                                                alt={`Evidencia ${index + 1}`}
                                                className="w-full h-48 object-cover rounded-lg border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
                                                onClick={() => window.open(`https://mrcvl.com${evidencia.url}`, '_blank')}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </ModuleCard>
    )
}
