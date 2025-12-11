import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
    isAuthenticated: boolean,
    component: React.ReactElement
}

export const PrivateRoute = ({ isAuthenticated, component: Component }: PrivateRouteProps) => {
    if (!isAuthenticated) {
        return Navigate({ to: "/", replace: true })
    }
    return (
        Component
    )
}