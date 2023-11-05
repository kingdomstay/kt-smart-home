import axios from "axios";
import {useAuthStore} from "@/stores/auth.store";

const config = {
    baseURL: `${import.meta.env.VITE_API_URL}`
};

const api = axios.create(config);

const authInterceptor = config => {
    const authStore = useAuthStore();
    const accessToken = authStore.accessToken;

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
}

api.interceptors.request.use(authInterceptor);

let refreshTokenPromise;
api.interceptors.response.use(
    null,
    async error => {
        const authStore = useAuthStore();

        if (!(error.response.status === 401)) {
            return Promise.reject(error)
        }

        refreshTokenPromise = authStore.updateToken();

        await refreshTokenPromise;
        refreshTokenPromise = null;

        return api(error.config)
    }
)

export { api };
