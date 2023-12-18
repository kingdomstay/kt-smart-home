<template>
  <div class="task-item" :class="{'task-item__active': selectedCurrentTask}" @click="selectTask">
    <input type="checkbox">
    <h2 class="task-item__title">{{taskTitle}}</h2>
  </div>
</template>

<script>

import {useTasksStore} from "@/stores/tasks.store";

export default {
  name: "TaskItem",
  props: {
    taskId: {
      type: Number,
      required: true
    },
    taskTitle: {
      type: String,
      required: true
    },
    taskCompleted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedCurrentTask() {
      const tasksStore = useTasksStore();
      const task = tasksStore.getSelectedTask()
      return task.id === this.taskId;
    },
  },
  methods: {
    selectTask() {
      const taskStore = useTasksStore()
      taskStore.selectTask(this.taskId)
    }
  }
}
</script>

<style scoped lang="scss">
.task-item {
  width: 100%;
  max-width: 75vw;
  min-height: 46px;
  display: flex;
  padding: 12px 14px;
  align-items: center;
  gap: 14px;
  border-radius: var(--input-radius, 4px);
  background: #2C2C2C;
  user-select: none;
  &__active {
    background: lighten(#2C2C2C, 5%);
  }
  &:hover:not(.task-item__active) {
    background: lighten(#2C2C2C, 3%);
  }
  &__title {
    color: #FFF;
    font-family: Noto Sans, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

</style>
