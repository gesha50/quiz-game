<template>
  <router-view />
</template>

<script setup lang="ts">
import { api } from 'boot/axios';

api.get(process.env.URL + '/sanctum/csrf-cookie').then((res) => {
  console.log(res);
});
</script>
<style lang="scss"></style>
