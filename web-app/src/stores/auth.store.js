import {defineStore} from "pinia";
import axios from "axios";
import router from "@/router";

const baseUrl = `${import.meta.env.VITE_API_URL}`

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: JSON.parse(localStorage.getItem('accessToken')),
        refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
    }),
    actions: {
        async login(username, password) {
            const user = await axios.post(`${baseUrl}/token/`, {username, password})

            localStorage.setItem('accessToken', JSON.stringify(user.data.access));
            localStorage.setItem('refreshToken', JSON.stringify(user.data.refresh));

            this.accessToken = user.data.access;
            this.refreshToken = user.data.refresh;
        },
        async updateToken() {
            const refresh = this.refreshToken;
            if (!refresh) {
                return router.push('/account/login');
            }
            const user = await axios.post(`${baseUrl}/token/refresh/`, {refresh})

            // TODO: Сделать разлогинивание и редирект на вход, если refresh token всё-таки просрочился

            localStorage.setItem('accessToken', JSON.stringify(user.data.access));
            localStorage.setItem('refreshToken', JSON.stringify(user.data.refresh));

            this.accessToken = user.data.access;
            this.refreshToken = user.data.refresh;
        },
        async logout() {
            // TODO: Добавить разлогинивание со сгоранием действующего refresh-токена
        }
    }
})
