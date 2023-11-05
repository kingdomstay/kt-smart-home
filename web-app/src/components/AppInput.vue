<template>
  <div class="form-control">
    <input class="form-control__input" :type="type" :placeholder="placeholder" :disabled="disabled" :name="name" :required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <span class="form-control__decorator"></span>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    modelValue: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped lang="scss">
.form-control {
  display: block;
  margin: 8px 0;
  border-radius: var(--input-border-radius);
  position: relative;
  overflow: hidden;
  &__input {
    position: relative;
    background: #404040;
    padding: 10px 8px;
    display: inherit;
    width: 100%;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 400;
    font-size: 16px;
    box-sizing: border-box;
    transition: .1s;
    &:hover {
      background: #494949;
      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }
    &:focus {
      transition: none;
      background: #232323;
      &::placeholder {
        color: rgba(255, 255, 255, 0.35);
      }
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.55);
    }
    &:hover + .form-control__decorator {
      background: rgba(149, 121, 43, 0.85);
    }
    &:active + .form-control__decorator {
      background: rgba(149, 121, 43, 1);
    }
    &:focus + .form-control__decorator {
      transition: none;
      background: rgba(149, 121, 43, 1);
    }
  }
  &__decorator {
    transition: .1s;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: rgba(149, 121, 43, 0.45);
  }
}
</style>
