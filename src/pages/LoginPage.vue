<template>
  <div
    style="height: 100vh"
    class="LoginPage flex justify-center content-center"
  >
    <div style="width: 50%">
      <q-input
        label="email"
        class="full-width q-mb-md"
        filled
        v-model="user.email"
      />
      <q-input
        label="password"
        class="full-width q-mb-md"
        filled
        v-model="user.password"
      />
      <q-btn color="blue" label="login" class="q-mr-md" @click="login" />
      <q-btn label="reset" @click="reset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useLogin } from 'src/services/auth/login';
import { userType } from 'pages/types';
import { useStore } from 'src/store';
import { useRouter } from 'vue-router';

const router = useRouter();
const $store = useStore();
const user: userType = reactive({
  email: '',
  password: '',
});

async function login() {
  try {
    const { data } = await useLogin(user);
    await $store.dispatch('settings/login', data);
    window.location.reload();
    await router.push('/cabinet');
  } catch (e) {
    console.log(e);
  }
}

function reset() {
  user.email = '';
  user.password = '';
}
</script>

<style lang="scss" scoped></style>
