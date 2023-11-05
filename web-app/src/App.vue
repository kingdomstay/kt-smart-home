<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
