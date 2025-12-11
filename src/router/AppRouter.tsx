import LayoutPage from "@/layout/pages/page"
import LoginPage from "@/modules/auth/pages/LoginPage"
import { useUserStore } from "@/modules/auth/store/userStore"
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
    const infoUsuario = useUserStore(state => state.infoUsuario);
    const navigate = useNavigate();

    useEffect(() => {
        if (infoUsuario != null) {
            navigate("/app");
        }
    }, [infoUsuario])

    return (
        <Routes>
            <Route index element={<LoginPage />} />

            <Route
                path="/app"
                element={<PrivateRoute isAuthenticated={infoUsuario != null} component={<LayoutPage />} />}
            >
                <Route index element={<h1>Home</h1>} />
            </Route>
        </Routes>
    )
}