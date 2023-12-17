import {defineStore} from "pinia";
import * as task from "@/api/task";

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: null,
        lists: null,
        selectedTask: null
    }),
    actions: {
        async loadTasks() {
            if (!this.tasks) {
                const tasks = await task.getAllTasks()
                this.tasks = tasks.data
            }
        },
        async loadLists() {
            if (!this.lists) {
                const lists = await task.getAllLists()
                this.lists = lists.data
            }
        },
        selectTask(id) {
            this.selectedTask = id
        }
    },
    getters: {
        getFavoriteTasks: (state) => () => {
            return state.tasks.filter((todo) => todo.is_favorite)
        },
        getTasksByListId: (state) => (id) => {
            return state.tasks.filter((todo) => todo.assigned_by === Number(id))
        },
        getListById: (state) => (id) => {
            return state.lists.find((list) => list.id === Number(id))
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
