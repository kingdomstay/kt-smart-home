<template>
<div class="sidebar">
  <div class="sidebar__profile-item profile-item">
    <img class="profile-item__avatar" src="@/assets/avatar.png">
    <div class="profile-item__content">
      <h4 class="profile-item__name">Кирилл</h4>
      <span class="profile-item__last-sync">2 минуты назад</span>
    </div>
  </div>
  <slot/>
</div>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped lang="scss">
.sidebar {
  height: inherit;
  background: #1B1B1B;
  border-right: 1px solid #2C2C2C;
}
.profile-item {
  padding: 14px 18px;
  gap: 8px;
  display: flex;
  align-items: center;
  &__avatar {
    border-radius: 100%;
    width: 42px;
    height: 42px;
    object-fit: cover;
    object-position: center;
  }
  &__name {
    font-weight: bold;
    font-size: 18px;
    color: rgba(255, 255, 255, .85);
  }
  &__last-sync {
    font-weight: 500;
    font-size: 12px;
    color: rgba(255, 255, 255, .55);
  }
}
</style>
