<template>
  <div class="task-layout">
    <aside>
      <AppBar>
        <AppBarGroupItems>
          <AppBarItem item-icon="&#127919;" item-name="Текущее" item-url="/app/tasks/current" />
          <AppBarItem item-icon="&#11088;" item-name="Важное" item-url="/app/tasks/favorites" />
          <AppBarItem item-icon="&#128197;" item-name="Все" item-url="/app/tasks/all" />
        </AppBarGroupItems>
        <AppBarGroupItems group-name="Списки">
          <AppBarItem item-icon="&#127968;" item-name="Дом" item-url="/app/tasks/categories/home" />
          <AppBarItem item-icon="&#127891;" item-name="Учеба" item-url="/app/tasks/categories/study" />
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
export default {
  components: {CreateTask, TaskDetailView, AppBarItem, AppBarGroupItems, AppBar},
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
