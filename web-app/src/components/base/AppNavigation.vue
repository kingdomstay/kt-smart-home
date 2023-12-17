<template>
  <div class="navigation">
    <div class="navigation__container">
      <AppLogo/>
      <nav class="navigation__menu menu">
        <ul class="menu__items">
          <li class="menu__item menu__time">{{time}}</li>
          <li class="menu__item" v-for="item of menu">
            <router-link class="menu__link" :class="`menu__link-${item.colorScheme}`" :active-class="`menu__link-${item.colorScheme}_active`" :to="item.link">
              <span class="material-symbols-outlined">{{item.iconName}}</span>{{item.title}}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import AppLogo from "@/components/base/AppLogo.vue";
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeTick: undefined,
      time: '00:00'
    }
  },
  components: {AppLogo},
  mounted() {
    this.updateTime()
    this.timeTick = setInterval(this.updateTime, 1000)
  },
  unmounted() {
    clearTimeout(this.timeTick)
  },
  methods: {
    updateTime() {
      const currentTime = new Date()
      let hours = currentTime.getHours()
      let minutes = currentTime.getMinutes()
      if (hours < 10) {
        hours = '0'+ hours
      }
      if (minutes < 10) {
        minutes = '0'+ minutes
      }
      this.time = `${hours}:${minutes}`
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  background: #333333;
  padding: 10px 0;
  &__container {
    display: flex;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
  }
  &__menu {
    flex: 1;
  }
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  &__items {
    gap: 6px;
    background: #252525;
    list-style: none;
    display: flex;
    align-items: stretch;
    border-radius: 4px;
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    font-weight: 400;
    text-shadow: none;
    color: rgba(255, 255, 255, 0.65);
    transition: .1s;
    padding: 6px 10px 6px 8px;
    border-radius: 4px;
    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }
    &-default {
      &:hover {
        background: rgba(96, 96, 96, 0.1);
        color: rgba(176, 176, 176, 0.7);
      }
      &_active {
        background: rgba(96, 96, 96, 0.45);
        color: #b0b0b0;
        pointer-events: none;
      }
    }
    &-alarm {
      &:hover {
        background: rgba(62, 128, 228, 0.1);
        color: rgba(111, 186, 255, 0.7);
      }
      &_active {
        background: rgba(62, 128, 228, 0.45);
        color: #6FBAFF;
        pointer-events: none;
      }
    }
    &-task {
      &:hover {
        background: rgba(149, 121, 43, 0.1);
        color: rgba(193, 148, 23, 0.7);
      }
      &_active {
        background: rgba(149, 121, 43, 0.45);
        color: #C19417;
        pointer-events: none;
      }
    }
  }
  &__item {
    line-height: 100%;
    color: rgba(255, 255, 255, 65%);
  }
  &__time {
    border-radius: 4px 0 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 22%);
    border-right: 1px solid #333333;
    padding: 6px 10px 6px 8px;
  }
}
</style>
