<template>
  <button class="button" :type="type" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  display: block;
  width: 100%;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 6px 8px;
  border-radius: var(--input-border-radius);
  border: none;
  color: #FFFFFF;
  background: #95792B;
  cursor: pointer;
  text-align: center;
  transition: .1s;
  &:hover {
    background: #C19417;
  }
  &:active {
    transition: .08s;
    background: #81681d;
  }
  &:disabled {
    background: #95792B;
    opacity: .4;
    cursor: default;
  }
}
</style>
