<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'src/store';

const $store = useStore();
const isLogin = computed(() => $store.getters['settings/isLogin']);
function login(): void {
  $store.dispatch('settings/login');
}
function logout(): void {
  $store.dispatch('settings/logout');
}
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div class="">{{ isLogin }}</div>
    <q-btn icon="login" @click="login" />
    <q-btn icon="logout" @click="logout" />
  </q-page>
</template>
