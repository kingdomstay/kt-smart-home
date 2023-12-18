<template xmlns="http://www.w3.org/1999/html">
  <div class="detail-view" v-if="selectedTask">
    <div class="detail-view__header">
      <input type="checkbox" :checked="selectedTask.is_complete">
      <textarea ref="title" class="detail-view__title" @focusin="startEditingTitle" @focusout="endEditingTitle" v-model="selectedTask.title"></textarea>
    </div>
    <div class="detail-view__actions">
      <button class="detail-view__action">
        <span class="material-symbols-outlined">star</span> Отметить как важное
      </button>
      <button class="detail-view__action">
        <span class="material-symbols-outlined">alarm</span> Добавить даты выполнения
      </button>
    </div>
    <div class="detail-view__content">
      <!--<p class="detail-view__description">{{selectedTask.description}}</p>-->
      <textarea @click="startEditingDescription" v-if="!descriptionEdit" class="detail-view__description" placeholder="Добавьте описание к задаче">{{selectedTask.description}}</textarea>
      <textarea ref="description" @focusout="endEditingDescription" v-else class="detail-view__description" placeholder="Добавьте описание к задаче" v-model="description"></textarea>
    </div>
    <div class="detail-view__footer">
      <p>Последнее изменение {{formatDate(selectedTask.updated_by)}}</p>
      <p>Создано {{formatDate(selectedTask.created_by)}}</p>
    </div>
  </div>
</template>

<script>
import {useTasksStore} from "@/stores/tasks.store";
import moment from 'moment'
import 'moment/dist/locale/ru';
moment.locale('ru')

export default {
  name: "TaskDetailView",
  data() {
    return {
      selectedItem: null,
      description: null,
      descriptionEdit: false,
      oldTitle: null,
      keyHandler: (e) => {
        const tasksStore = useTasksStore();
        const currentTask = tasksStore.getSelectedTask()
        if (currentTask) {
          switch (e.keyCode) {
            // Снять фокус с задачи
            case 27:
              return tasksStore.selectTask(null)
            // Удалить задачу
            case 46:
              return tasksStore.removeTask(currentTask.id)
          }
        }
      }
    }
  },
  methods: {
    startEditingTitle() {
      this.oldTitle = this.selectedTask.title.trim();
    },
    async endEditingTitle() {
      const finallyTitle = this.selectedTask.title.trim();
      if (finallyTitle !== this.oldTitle) {
        const tasksStore = useTasksStore();
        const data = {
          title: finallyTitle
        }
        await tasksStore.editTask(this.selectedTask.id, data)
        this.oldTitle = null;
      }
    },
    /*resizeTitle() {
      let element = this.$refs.title;

      element.style.height = "18px";
      element.style.height = element.scrollHeight + "px";
    },*/
    startEditingDescription() {
      this.descriptionEdit = true;
      this.description = this.selectedTask.description;
      this.$nextTick(() => {
        this.$refs.description.focus()
      });
    },
    async endEditingDescription() {
      const finallyDescription = this.description.trim();
      // Отправить запрос
      if (finallyDescription !== this.selectedTask.description) {
        const tasksStore = useTasksStore();
        const data = {
          description: finallyDescription
        }
        await tasksStore.editTask(this.selectedTask.id, data)
      }
      this.description = null;
      this.descriptionEdit = false;
    },
    formatDate: (value) => {
      const datetime = moment(value)
      return datetime.format('LL');
    }
  },
  computed: {
    selectedTask() {
      const tasksStore = useTasksStore();
      return tasksStore.getSelectedTask()
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keyHandler);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyHandler);
  }
}
</script>

<style scoped lang="scss">
.detail-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 26px 0 18px;
  min-width: 250px;
  max-width: 450px;
  min-height: 100%;
  background: #1B1B1B;
  border-left: 1px solid #2C2C2C;
  gap: 21px;
  &__header {
    margin-top: 38px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    color: #FFF;
    gap: 14px;
  }
  &__title {
    resize: none;
    outline: none;
    border: none;
    background: transparent;
    display: block;
    font-family: Mulish, sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 115%;
  }
  &__content {
    overflow: hidden;
    flex: 1;
    border-radius: 22px;
    background: #2C2C2C;
  }
  &__actions {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &__action {
    gap: 10px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    padding: 10px 12px;
    background: #2C2C2C;
    color: #FFFFFF;
    font-family: Noto Sans, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    border-radius: 4px;
    cursor: pointer;
    .material-symbols-outlined {
      color: rgba(255, 255, 255, .65);
    }
    &:hover {
      background: lighten(#2C2C2C, 3%);
    }
    &:active {
      background: darken(#2C2C2C, 2%);
    }
  }
  &__footer {
    margin-bottom: 18px;
    color: rgba(255, 255, 255, .65);
    font-family: Noto Sans, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__description {
    border-radius: 22px;
    padding: 16px;
    line-height: 1.22;
    font-weight: normal;
    // Далее новое
    outline: none;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    border: none;
    background: transparent;
    resize: none;
    &:focus {
      background: #0e0e0e;
    }
    &:hover:not(:focus) {
      background: lighten(#2C2C2C, 3%);
      cursor: pointer;
    }
  }
}
</style>
