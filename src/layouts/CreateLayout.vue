<template>
  <q-layout view="hHh lpr lfr">
    <app-header @toggleRightDrawer="rightDrawerOpen = !rightDrawerOpen" />
    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      jkbhgvfc
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from 'components/header/AppHeader.vue';

const rightDrawerOpen = ref(false);
</script>
