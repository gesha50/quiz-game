<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar class="glossy">
      <q-avatar>
        <img
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          alt=""
        />
      </q-avatar>
      <q-toolbar-title>Quiz</q-toolbar-title>
      <q-tabs align="left">
        <q-route-tab :to="{ name: 'Login' }" label="Login" />
        <q-route-tab :to="{ name: 'Register' }" label="Register" />
        <q-route-tab :to="{ name: 'Cabinet' }" label="Cabinet" />
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

const router = useRouter();

const emit = defineEmits<rightDrawerEmit>();

type rightDrawerEmit = {
  (e: 'toggleRightDrawer'): void;
};
</script>

<style lang="scss" scoped></style>
