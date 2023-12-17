import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import accountRoutes from "@/router/account.routes";
import dashboardRoutes from "@/router/dashboard.routes";
import taskRoutes from "@/router/task.routes";
import {useAuthStore} from "@/stores/auth.store";
import Layout from "@/views/app/Layout.vue";
import Home from "@/views/app/dashboard/Home.vue";
import TasksLayout from "@/views/app/tasks/TasksLayout.vue";
import AllTasks from "@/views/app/tasks/AllTasks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'appDashboard'}
    },
    { ...accountRoutes },
    {
      path: '/app',
      component: Layout,
      redirect: {name: 'appDashboard'},
      children: [
        { ...dashboardRoutes },
        { ...taskRoutes }
      ]
    },

    // При другом случае редирект на главную страницу
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/account/login', '/account/forgot-password'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.accessToken && !authStore.refreshToken) {
    return '/account/login';
  }
});

export default router
