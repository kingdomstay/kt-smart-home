<template>
  <h1 v-if="loaded && list"><span class="title-icon" v-html="list.icon"></span>{{list.name}}</h1>
  <div class="items-group" v-if="loaded && tasks">
    <TaskItem v-for="task in tasks" :task-title="task.title" :task-id="task.id" :key="task.id" />
  </div>
  <div v-if="loaded && tasks.length === 0">
    <p>Не найдено добавленных задач</p>
  </div>
</template>

<script>
import TaskItem from "@/components/task/TaskItem.vue";
import {useTasksStore} from "@/stores/tasks.store";
import {useRoute} from "vue-router";
export default {
  components: {TaskItem},
  data() {
    return {
      tasks: [],
      list: null,
      loaded: false
    }
  },
  async mounted() {
    const route = useRoute()
    const id = route.params.id

    const tasksStore = useTasksStore();
    await tasksStore.loadTasks()
    await tasksStore.loadLists()
    this.tasks = tasksStore.getTasksByListId(id)
    const list = tasksStore.getListById(id)
    this.list = {
      icon: list.icon,
      name: list.name
    }
    this.loaded = true
  },
  async beforeRouteUpdate(to, from, next) {
    const id = to.params.id
    const tasksStore = useTasksStore();
    tasksStore.selectTask(null)
    this.tasks = tasksStore.getTasksByListId(id)
    const list = tasksStore.getListById(id)
    this.list = {
      icon: list.icon,
      name: list.name
    }
    this.loaded = true
    next();
  },
  unmounted() {
    const tasksStore = useTasksStore();
    tasksStore.selectTask(null)
  }
}
</script>

<style scoped>
h1 {
  color: #FFF;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 64px 0 24px 0;
}
.items-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.title-icon {
  padding-right: 8px;
}
</style>
