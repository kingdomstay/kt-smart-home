import {api} from "@/services/api";

export async function getAllTasks() {
    return await api.get(`/tasks/`);
}
