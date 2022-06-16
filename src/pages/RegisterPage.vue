<template>
  <div
    style="height: 100vh"
    class="RegisterPage flex justify-center content-center"
  >
    <div style="width: 50%">
      <q-input
        label="name"
        class="full-width q-mb-md"
        filled
        v-model="user.name"
      />
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
      <q-input
        label="password"
        class="full-width q-mb-md"
        filled
        v-model="user.password2"
      />
      <p v-if="errorText">{{ errorText }}</p>
      <q-btn color="blue" label="register" class="q-mr-md" @click="register" />
      <q-btn label="reset" @click="reset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { userType } from 'pages/types';
import { useRegister } from 'src/services/auth/register';

const router = useRouter();

const errorText = ref('');
const user: userType = reactive({
  name: '',
  email: '',
  password: '',
  password2: '',
});

async function register() {
  if (user.password === user.password2) {
    const { data } = await useRegister(user);
    console.log(data);
    await router.push('/login');
  } else {
    errorText.value = 'Password must be the same!';
  }
}

function reset() {
  user.name = '';
  user.email = '';
  user.password = '';
  user.password2 = '';
}
</script>

<style lang="scss" scoped></style>
