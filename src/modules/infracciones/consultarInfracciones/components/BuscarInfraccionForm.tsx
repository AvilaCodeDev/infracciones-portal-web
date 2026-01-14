import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState, type Dispatch, type SetStateAction } from "react"

interface Props {
    onClick: Dispatch<SetStateAction<string>>
}

export const BuscarInfraccionForm = ({ onClick }: Props) => {

    const [placaValue, setPlacaValue] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlacaValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClick(placaValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FieldSet>
                <FieldGroup>
                    <FieldGroup className="flex flex-row">
                        <Field>
                            <FieldLabel>Numero de placa</FieldLabel>
                            <div className="flex flex-row gap-4">
                                <Input
                                    id="numero_placa"
                                    placeholder="Ingrese el numero de placa"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <Button type="submit">Buscar</Button>
                            </div>
                        </Field>
                    </FieldGroup>
                </FieldGroup>
            </FieldSet>
        </form>
    )
}