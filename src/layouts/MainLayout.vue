<template>
  <q-layout view="lHh Lpr lFf">
    <app-header />

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from 'components/header/AppHeader.vue';

const leftDrawerOpen = ref(false);
</script>
