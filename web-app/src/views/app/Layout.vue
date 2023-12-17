<template>
  <AppNavigation id="navigation" :menu="menu" />
  <router-view id="page"></router-view>
</template>

<script>
import AppNavigation from "@/components/base/AppNavigation.vue";
export default {
  components: {AppNavigation},
  data() {
    return {
      menu: [
        {
          title: 'Главная',
          iconName: 'dashboard',
          link: '/app/dashboard',
          colorScheme: 'default'
        },
        {
          title: 'Задачи',
          iconName: 'task_alt',
          link: '/app/tasks',
          colorScheme: 'task'
        },
        /*{
          title: 'Будильники',
          iconName: 'alarm',
          link: '/app/alarms',
          colorScheme: 'alarm'
        }*/
      ]
    }
  }
}
</script>

<style scoped>

</style>
