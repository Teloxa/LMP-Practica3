import { defineStore } from "pinia"
import {getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado} from "@/services/empleadoService.js"

export const useEmpleadoStore = defineStore({
    state: () => ({
        empleados: [],
        loading: false
    }),

    actions: {
        async fetchEmpleados() {
        this.loading = true
        const { data } = await getEmpleados()  
        this.empleados = data
        this.loading = false
        },
        async addEmpleado(empleado) {
            await createEmpleado(empleado)
            await this.fetchEmpleados()
        },
    },
    async editEmpleado(id, empleado) {
        await updateEmpleado(id, empleado)
        await this.fetchEmpleados()
    },
    async removeEmpleado(id) {
        await deleteEmpleado(id)
        await this.fetchEmpleados()
    }
})