import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { type SubmitHandler, useForm } from "react-hook-form"
import type { LoginFormValues } from "../interfaces"
import { verficaIngreso } from "../functions/verificaIngreso"
import { useState } from "react"
import { useUserStore } from "../store/userStore"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const [loginError, setLoginError] = useState<string | null>(null);
    const { register, handleSubmit } = useForm<LoginFormValues>();
    const setInfoUsuario = useUserStore(state => state.setInfoUsuario);

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        const response = await verficaIngreso(data);
        if (response?.status != 200) return setLoginError("Usuario y/o contraseña incorrectos");
        setInfoUsuario(response.data);
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Iniciar Sesión</CardTitle>
                    <CardDescription>
                        Inicia sesión para acceder al sistema.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="correo">Correo Electrónico:</FieldLabel>
                                <Input
                                    id="correo"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    {...register("correo", { required: true })}
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Contraseña:</FieldLabel>
                                </div>
                                <Input id="password" type="password" required {...register("password", { required: true })} />
                                {loginError && <p className="text-red-500">{loginError}</p>}
                            </Field>
                            <Field>
                                <Button type="submit">Iniciar Sesión</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
