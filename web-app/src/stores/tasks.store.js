import {defineStore} from "pinia";
import * as task from "@/api/task";

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: null,
        selectedTask: null
    }),
    actions: {
        async loadTasks() {
            if (!this.tasks) {
                const tasks = await task.getAllTasks()
                this.tasks = tasks.data
            }
        },
        selectTask(id) {
            this.selectedTask = id
        }
    },
    getters: {
        getFavoriteTasks: (state) => () => {
            return state.tasks.find((todo) => todo.is_favovite)
        },
        getSelectedTask: (state) => () => {
            if (state.selectedTask) {
                return state.tasks.find((todo) => todo.id === state.selectedTask)
            } else {
                return false
            }
        }
    }
})
