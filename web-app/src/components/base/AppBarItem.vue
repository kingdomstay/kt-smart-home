<template>
  <li class="sidebar__item">
    <router-link class="sidebar__item-link" :to="itemUrl" active-class="sidebar__item-link_active">
      <p><span class="sidebar__item-icon" v-html="itemIcon"></span>{{itemName}}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "AppBarItem",
  props: {
    itemIcon: {
      type: String,
      required: true
    },
    itemName: {
      type: String,
      required: true
    },
    itemUrl: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.sidebar {
  &__item-link {
    display: block;
    color: #FFF;
    font-family: Mulish, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    padding: 14px 18px;
    border-left: 1px solid transparent;
    transition: .1s;
    &:hover {
      background: rgba(255, 255, 255, .03);
    }
    &:active {
      background: rgba(255, 255, 255, .01);
    }
    &_active {
      border-left: 1px solid #C19417;
      background: rgba(86, 74, 40, 0.25);
      pointer-events: none;
    }
  }
  &__item-icon {
    padding-right: 8px;
  }
}
</style>
