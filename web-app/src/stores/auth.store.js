import {defineStore} from "pinia";
import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}`
console.log(baseUrl)

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: JSON.parse(localStorage.getItem('accessToken')),
        refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
    }),
    actions: {
        async login(username, password) {
            const user = await axios.post(`${baseUrl}/token/`, {username, password})

            this.accessToken = user.data.access;
            this.refreshToken = user.data.refresh;
        },
        async logout() {
            // TODO: Добавить разлогинивание со сгоранием действующего refresh-токена
        }
    }
})
