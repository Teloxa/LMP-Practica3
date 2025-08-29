import { defineStore } from "pinia"
import { loginRequest, registerRequest} from '@/services/authService.js'
import router from "@/router"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null
    }),
    actions: {
        async login(credentials) {
        try {
            const token = await loginRequest(credentials)
            localStorage.setItem('token', token.token.token)
            router.push('/dashboard')
        } catch (error) {
            console.error(error)
            alert('Credenciales incorrectas')
            }
        },
        async register(payload) {
            try {
                await registerRequest(payload)
                router.push('/')
            } catch (error) {
                console.error(error)
                alert('No se puede registrar')
            }
        },
        logout() {
            this.token = null
            localStorage.removeItem('token')
            router.push('/')
        },
    },
})