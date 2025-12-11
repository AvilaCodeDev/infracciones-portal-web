import type { infoUsuario } from "../interfaces";
import { create } from "zustand";
import { devtools } from "zustand/middleware"

interface userStore {
    infoUsuario: infoUsuario | null;

    setInfoUsuario: (value: infoUsuario) => void
}


export const useUserStore = create<userStore>()(
    devtools(
        (set) => ({
            infoUsuario: null,

            setInfoUsuario: (value: infoUsuario | null) => set({ infoUsuario: value })
        }),
        { name: "userStore" }
    )
);