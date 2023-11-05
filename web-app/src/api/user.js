import {api} from "@/services/api";

export function getAllUsers() {
    return api.get(`/users/`);
}
export function getUser(id) {
    return api.get(`/users/${id}/`);
}
