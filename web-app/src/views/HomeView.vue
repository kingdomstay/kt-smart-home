<script>

import {getAllUsers} from "@/api/user";

export default {
  methods: {
    async getUsers() {
      const users = await getAllUsers();
      console.log(users)
    }
  }
}
</script>

<template>
  <main>
    Загрузка..
    <button @click="getUsers()">Загрузить список пользователей (см. в консоли)</button>
  </main>
</template>
