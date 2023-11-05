<script>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

import {useAuthStore} from "@/stores/auth.store";

export default {
  components: {
    AppButton,
    AppInput
  },
  data() {
    return {
      username: null,
      password: null,
      validated: false,
      error: null,
      loading: false
    }
  },
  methods: {
    formValid() {
      this.validated = !!(this.username && this.password);
    },
    sendForm() {
      this.error = null;
      if (!this.validated) return false
      const authStore = useAuthStore();
      this.loading = true;

      return authStore.login(this.username, this.password)
          .catch(err => {
            this.error = err.response.data.detail;
          })
          .finally(() => {
            this.password = null;
            this.loading = false;
            this.formValid()
            const accessToken = useAuthStore()
            console.log(accessToken)
          })
    }
  }
}
</script>

<template>
  <main class="wrapper">
    <div class="login">
      <img style="opacity: .75" src="@/assets/logo.svg">
      <div class="card">
        <h1 style="color: #FFF; font-weight: bold; font-size: 21px; padding: 18px 21px; border-bottom: 1px solid rgba(255, 255, 255, .15);">Вход в систему</h1>
        <p style="color: #C11717; font-size: 14px; margin: 12px 18px 0 18px; line-height: 1.15" v-show="error">{{error}}</p>
        <form class="login-form" @submit.prevent="sendForm">
          <AppInput @input="formValid" v-model="username" name="username" placeholder="Имя пользователя" type="text" :required="true" />
          <AppInput @input="formValid" v-model="password" name="password" placeholder="Пароль" type="password" :required="true" />
          <AppButton type="submit" :disabled="!validated || loading">
            <span v-show="!loading">Войти</span>
            <span v-show="loading">Подождите..</span>
          </AppButton>
          <router-link style="margin-top: 8px; display: inline-block;" to="/forgot-password">Забыли пароль?</router-link>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
}
.login-form {
  margin: 16px 0;
  padding: 0 18px;
}
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.card {
  margin-top: 21px;
  width: 390px;
  border-radius: 18px;
  background: #2C2C2C;
  box-shadow: 2px 4px 27px 0px rgba(0, 0, 0, 0.15);
}
</style>
