import { createBrowserRouter } from "react-router-dom"


import LoginPage from "../modules/auth/pages/LoginPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    }
])