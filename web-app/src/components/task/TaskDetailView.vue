<template>
  <div class="detail-view" v-if="selectedTask">
    <div class="detail-view__header">
      <input type="checkbox" :checked="selectedTask.is_complete">
      <h3>{{selectedTask.title}}</h3>
    </div>
    <div class="detail-view__content">
      <p class="detail-view__description">{{selectedTask.description}}</p>
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
      keyHandler: (e) => {
        const tasksStore = useTasksStore();
        if (tasksStore.getSelectedTask()) {
          switch (e.keyCode) {
            // Снять фокус с задачи
            case 27:
              return tasksStore.selectTask(null)
            // Удалить задачу
            case 46:
              
          }
        }
      }
    }
  },
  methods: {
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
  gap: 30px;
  &__header {
    margin-top: 38px;
    display: flex;
    align-items: flex-start;
    color: #FFF;
    gap: 14px;
    font-family: Mulish;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 115%;
  }
  &__content {
    flex: 1;
    border-radius: 22px;
    background: #2C2C2C;
  }
  &__footer {
    margin-bottom: 18px;
    color: #FFF;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__description {
    padding: 16px;
    line-height: 1.22;
    font-weight: normal;
  }
}
</style>
