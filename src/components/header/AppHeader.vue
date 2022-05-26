<template>
  <q-header reveal elevated class="bg-white text-black" height-hint="98">
    <q-toolbar>
      <q-icon size="lg" color="red-7" name="extension" />
      <q-toolbar-title>
        <router-link class="logo" to="/">TestsCreator</router-link>
      </q-toolbar-title>
      <q-tabs>
        <q-route-tab :to="{ name: 'Quizzes' }" label="quizzes" />
        <q-route-tab
          v-if="isLogin"
          :to="{ name: 'CreateQuiz' }"
          label="Create"
        />
        <q-route-tab v-if="!isLogin" :to="{ name: 'Login' }" icon="login" />
        <q-route-tab v-if="!isLogin" :to="{ name: 'Register' }" icon="person" />
        <q-route-tab v-if="isLogin" :to="{ name: 'Cabinet' }" label="Cabinet" />
        <q-tab v-if="isLogin" icon="logout" @click="logout" />
      </q-tabs>
      <q-btn
        v-if="router.currentRoute.value.name === 'CreateQuizUnique'"
        dense
        flat
        round
        icon="menu"
        @click="emit('toggleRightDrawer')"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'src/store';

const $store = useStore();
const isLogin = computed(() => $store.getters['settings/isLogin']);
const router = useRouter();

const emit = defineEmits<rightDrawerEmit>();

function logout(): void {
  $store.dispatch('settings/logout');
  router.push('/');
}

type rightDrawerEmit = {
  (e: 'toggleRightDrawer'): void;
};
</script>

<style lang="scss" scoped>
@import 'src/css/app';
.logo {
  @include logo;
}
</style>
