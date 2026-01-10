import { UsuariosForm } from './UsuariosForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface Props {
    isOpen: boolean
    onClose: () => void
}

export const AddUserModal = ({ isOpen, onClose }: Props) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Usuario</DialogTitle>
                </DialogHeader>
                <UsuariosForm onClose={onClose} />
            </DialogContent>
        </Dialog>
    )
}
