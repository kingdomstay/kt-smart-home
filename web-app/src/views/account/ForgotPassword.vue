<script>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
    AppInput
  },
  data() {
    return {
      email: null,
      validated: false,
      error: null,
      loading: false
    }
  },
  methods: {
    formValid() {
      this.validated = !!(this.email);
    },
    sendForm() {
      // TODO: Добавить бизнес-логику восстановления пароля
    }
  }
}
</script>

<template>
  <h1 style="color: #FFF; font-weight: bold; font-size: 21px; padding: 18px 21px; border-bottom: 1px solid rgba(255, 255, 255, .15);">Восстановление пароля</h1>
  <p style="color: #C11717; font-size: 14px; margin: 12px 18px 0 18px; line-height: 1.15" v-show="error">{{error}}</p>
  <p style="font-size: 14px; line-height: 1.15; color: rgba(255, 255, 255, .75); margin: 12px 18px 0 18px;">Укажите почту, на которую был зарегистрирован аккаунт.</p>
  <form class="account-form" @submit.prevent="sendForm">
    <AppInput @input="formValid" v-model="email" name="email" placeholder="Ваш email" type="email" :required="true" />
    <AppButton type="submit" :disabled="!validated || loading">
      <span v-show="!loading">Сбросить пароль</span>
      <span v-show="loading">Подождите..</span>
    </AppButton>
    <router-link style="margin-top: 8px; display: inline-block;" to="/account/login">Вернуться ко входу</router-link>
  </form>
</template>
