import {api} from "@/services/api";

export async function getAllTasks() {
    return await api.get(`/tasks/`);
}
export async function createTask(title) {
    return await api.post(`/tasks/`, {
        "title": title
    });
}
export async function removeTaskById(id) {
    return await api.delete(`/tasks/${id}/`);
}
export async function getAllLists() {
    return await api.get(`/lists/`);
}
