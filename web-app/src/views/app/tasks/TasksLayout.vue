<template>
  <div class="task-layout">
    <aside>
      <AppBar>
        <AppBarGroupItems>
          <!--<AppBarItem item-icon="&#127919;" item-name="Текущее" item-url="/app/tasks/current" />-->
          <AppBarItem item-icon="&#11088;" item-name="Важное" item-url="/app/tasks/favorites" />
          <AppBarItem item-icon="&#128197;" item-name="Все" item-url="/app/tasks/all" />
        </AppBarGroupItems>
        <AppBarGroupItems group-name="Списки">
          <AppBarItem v-for="list in lists" :key="list.id" :item-icon="list.icon" :item-name="list.name" :item-url="`/app/tasks/lists/${list.id}`" />
        </AppBarGroupItems>
        <AppBarGroupItems group-name="Категории">
        </AppBarGroupItems>
      </AppBar>
    </aside>
    <main>
      <router-view></router-view>
      <div class="fill-max-size"></div>
      <CreateTask/>
    </main>
    <TaskDetailView/>
  </div>
</template>

<script>
import AppBar from "@/components/base/AppBar.vue";
import AppBarGroupItems from "@/components/base/AppBarGroupItems.vue";
import AppBarItem from "@/components/base/AppBarItem.vue";
import TaskDetailView from "@/components/task/TaskDetailView.vue";
import CreateTask from "@/components/task/CreateTask.vue";
import {useTasksStore} from "@/stores/tasks.store";
export default {
  components: {CreateTask, TaskDetailView, AppBarItem, AppBarGroupItems, AppBar},
  data() {
    return {
      lists: []
    }
  },
  async mounted() {
    const tasksStore = useTasksStore()
    await tasksStore.loadLists()
    this.lists = tasksStore.lists
  }
}
</script>

<style scoped lang="scss">
.task-layout {
  flex: 1;
  height: calc(100% - 56px);
  display: flex;
  aside {
    height: 100%;
    flex-shrink: 0;
  }
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 18px 0 24px;
    max-height: 100%;
    overflow-y: scroll;
  }
  .fill-max-size {
    flex: 1;
  }
}
aside {
  width: 300px;
}
</style>
