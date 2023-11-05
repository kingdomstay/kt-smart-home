<template>
  <main class="wrapper">
    <div class="login">
      <img style="opacity: .75" src="@/assets/logo.svg">
      <div class="card">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
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
