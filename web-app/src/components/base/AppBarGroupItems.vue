<template>
  <div class="sidebar__group">
    <p v-if="groupName" class="sidebar__group-name">{{groupName}}</p>
    <ul class="sidebar__items">
      <slot/>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppBarGroupItems",
  props: {
    groupName: {
      type: String,
      required: false
    }
  },
}
</script>

<style scoped lang="scss">
.sidebar {
  &__items {
    border-top: 1px solid #2C2C2C;
  }
  &__group-name {
    padding: 8px 18px 6px 18px;
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
  }
}
</style>
