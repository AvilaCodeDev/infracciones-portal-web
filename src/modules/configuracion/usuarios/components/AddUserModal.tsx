import { UsuariosForm } from './UsuariosForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface Props {
    isOpen: boolean
}

export const AddUserModal = ({ isOpen }: Props) => {
    return (
        <Dialog open={ isOpen }>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Usuario</DialogTitle>
                </DialogHeader>
                <UsuariosForm />
            </DialogContent>
        </Dialog>
    )
}
