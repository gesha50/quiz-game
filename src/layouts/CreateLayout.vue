<template>
  <q-layout view="hHh lpr lfr">
    <app-header @toggleRightDrawer="rightDrawerOpen = !rightDrawerOpen" />
    <q-drawer v-model="rightDrawerOpen" side="right">
      <q-scroll-area class="fit">
        <q-tabs vertical class="text-teal">
          <q-route-tab
            label="Start screen"
            :to="`/create/quiz/${link}/start-screen`"
            exact
          />
          <q-route-tab label="Questions" :to="`/create/quiz/${link}`" exact />
          <q-route-tab
            label="Settings"
            :to="`/create/quiz/${link}/settings`"
            exact
          />
          <q-route-tab
            class="text-white bg-red"
            label="End Quiz"
            :to="`/cabinet`"
            exact
          />
        </q-tabs>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from 'components/header/AppHeader.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const rightDrawerOpen = ref(false);
const link = route.path.split('/')[3];
console.log(link);
</script>
