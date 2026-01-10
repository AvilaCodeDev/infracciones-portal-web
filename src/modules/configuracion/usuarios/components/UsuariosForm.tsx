import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input"
import { useForm, type SubmitHandler, Controller } from "react-hook-form"
import { useGetRoles } from "../hooks/useGetRoles";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { RolUsuario, Usuario } from "../interfaces";
import { Button } from "@/components/ui/button";
import { useAgregarUsuario } from "../hooks/useAgregarUsuario";

interface Props {
    onClose: () => void
}

export const UsuariosForm = ({ onClose }: Props) => {

    const { data, isFetching } = useGetRoles();
    const agregarUsuario = useAgregarUsuario(onClose);

    const {
        register,
        handleSubmit,
        control
    } = useForm<Usuario>();

    const onSubmit: SubmitHandler<Usuario> = (data) => {
        agregarUsuario.mutate(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FieldSet>
                <FieldGroup>
                    <FieldGroup className="flex flex-row">
                        <Field>
                            <FieldLabel>Numero de empleado</FieldLabel>
                            <Input
                                id="numero_empleado"
                                placeholder="Numero de empleado"
                                autoComplete="off"
                                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                {...register("numero_empleado", { required: true })}
                            />
                        </Field>
                        <Field>
                            <FieldLabel>Rol</FieldLabel>
                            <Controller
                                name="rol"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Selecciona un rol" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                isFetching
                                                    ? <SelectItem value="">Cargando...</SelectItem>
                                                    : (
                                                        data.data.map((rol: RolUsuario) => {
                                                            return <SelectItem key={`rol-${rol.id}`} value={rol.id.toString()} >{rol.nombre}</SelectItem>
                                                        })
                                                    )
                                            }
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </Field>
                    </FieldGroup>
                    <Field>
                        <FieldLabel>Nombre Completo</FieldLabel>
                        <Input
                            id="nombre"
                            placeholder="Nombre completo"
                            autoComplete="off"
                            {...register("nombre_completo", { required: true })}
                        />
                    </Field>
                    <Field>
                        <FieldLabel>Correo</FieldLabel>
                        <Input
                            id="correo"
                            placeholder="Correo"
                            autoComplete="off"
                            {...register("correo", { required: true })}
                        />
                    </Field>
                    <Field>
                        <FieldLabel>Telefono</FieldLabel>
                        <Input
                            id="Telefono"
                            placeholder="Telefono"
                            autoComplete="off"
                            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            {...register("telefono", { required: true })}
                        />
                    </Field>
                </FieldGroup>

                <Button type="submit">Guardar</Button>
            </FieldSet>
        </form>
    )
}
