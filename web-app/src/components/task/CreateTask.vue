<template>
  <div class="create-task">
    <div class="create-task__button" @click="startCreateTask()">
      <h2 class="create-task__title" v-if="!selected"><span class="create-task__icon material-symbols-outlined">add</span>Добавить новую задачу, событие или цель</h2>
      <input ref="task" :class="{'not-completed': notCompleted}" v-model="taskName" class="create-task__field" v-if="selected" @focusout="endCreateTask(false)" type="text" :placeholder="randomTemplateTask">
    </div>
  </div>
</template>

<script>
import {useTasksStore} from "@/stores/tasks.store";

export default {
  name: "CreateTask",
  data() {
    return {
      selected: false,
      notCompleted: false,
      taskName: null
    }
  },
  methods: {
    startCreateTask() {
      const tasksStore = useTasksStore()
      tasksStore.selectTask(null)
      this.selected = true;
      this.$nextTick(() => {
        this.$refs.task.focus();
      });
    },
    endCreateTask(isSuccess) {
      if (!isSuccess) {
        if (!this.taskName) {
          this.selected = false
        } else {
          this.notCompleted = true
        }
      }
    },
  },
  computed: {
    randomTemplateTask() {
      const templates = ['починить пылесос', 'сделать домашнее задание по математике', 'разработать схему для детали', 'исправить ошибку в работе функции таймера'];
      const randomIndex = Math.floor(Math.random() * templates.length);
      return `Например, ${templates[randomIndex]}`
    }
  }
}
</script>

<style scoped lang="scss">
.create-task {
  background: linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, rgba(21, 21, 21, 0.95) 34%);
  padding-top: 48px;
  padding-bottom: 64px;
  position: sticky;
  bottom: 0;
  &__button {
    overflow: hidden;
    transform: translateX(-4px);
    width: calc(100% + 8px);
    max-width: calc(75vw + 8px);
    display: flex;
    align-items: center;
    border-radius: var(--input-radius, 4px);
    background: #2C2C2C;
    user-select: none;
    color: #C19417;
    transition: .1s;
    &.active {
      background: #0e0e0e;
    }
    &:hover {
      background: lighten(#2C2C2C, 3%);
      cursor: pointer;
    }
  }
  &__title {
    padding: 12px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #C19417;
    font-family: Noto Sans, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__field {
    padding: 13px 12px;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: rgba(255, 255, 255, .85);
    background: #2C2C2C;
    &:focus {
      background: #0e0e0e;
    }
    &:hover:not(:focus) {
      transition: .1s;
      background: lighten(#2C2C2C, 3%);
      cursor: pointer;
    }
  }
}
</style>
