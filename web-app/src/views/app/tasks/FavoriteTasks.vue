<template>
  <h1><span class="title-icon">&#11088;</span>Важное</h1>
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
import {computed} from "vue";
export default {
  components: {TaskItem},
  data() {
    return {
      tasks: [],
      loaded: false
    }
  },
  async mounted() {
    const tasksStore = useTasksStore();
    await tasksStore.loadTasks()
    this.tasks = computed(() => tasksStore.getFavoriteTasks())
    this.loaded = true
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
