import {defineStore} from "pinia";
import * as task from "@/api/task";

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: null,
        lists: null,
        selectedTask: null
    }),
    actions: {
        async loadTasks(force = false) {
            if (!this.tasks || force) {
                const tasks = await task.getAllTasks()
                this.tasks = tasks.data
            }
        },
        async loadLists(force = false) {
            if (!this.lists || force) {
                const lists = await task.getAllLists()
                this.lists = lists.data
            }
        },
        selectTask(id) {
            this.selectedTask = id
        },
        async createTask(title) {
            await task.createTask(title)
            await this.loadTasks(true)
        },
        async editTask(id, data) {
            await task.editTaskById(id, data)
            await this.loadTasks(true)
        },
        async completeTask(id) {
            await this.editTask(id, 'is_complete', true)
        },
        async removeTask(id) {
            await task.removeTaskById(id)
            this.selectTask(null)
            await this.loadTasks(true)
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
