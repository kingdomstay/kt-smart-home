import TasksLayout from "@/views/app/tasks/TasksLayout.vue";
import AllTasks from "@/views/app/tasks/AllTasks.vue";
import FavoriteTasks from "@/views/app/tasks/FavoriteTasks.vue";

export default {
    path: 'tasks',
    component: TasksLayout,
    redirect: {name: 'allTasks'},
    children: [
        {
            path: 'all',
            component: AllTasks,
            name: "allTasks"
        },
        {
            path: 'favorites',
            component: FavoriteTasks,
            name: "favoriteTasks"
        }
    ]
};
