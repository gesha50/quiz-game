<template>
  <div class="QuizPage">
    <div class="">{{ quiz.start_screen.title }}</div>
    <img
      class="QuizPage__img"
      :src="url + '/storage/' + quiz.start_screen.image"
      alt=""
    />
    <div class="">{{ quiz.category.title }}</div>
    <div class="">description: {{ quiz.start_screen.description }}</div>
    <div class="">Questions: {{ quiz.questions.length }}</div>
    <div class="">Author: {{ quiz.user.name }}</div>
    <div class="">source: {{ quiz.start_screen.source }}</div>
    <q-btn @click="goToQuiz" label="play" color="green" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useCreateResult } from 'src/services/quiz/create';

const store = useStore();
const route = useRoute();
const router = useRouter();

const url = ref(process.env.URL);
const link = route.path.split('/')[2];
const quiz = computed(() => store.getters['quiz/getCurrentQuiz'](link));
console.log(quiz.value);
async function goToQuiz(): Promise<void> {
  let result = new FormData();
  if (store.state.settings.user.id) {
    result.append('user_id', store.state.settings.user.id);
  }
  result.append('quiz_id', quiz.value.id);
  result.append('total_bonus', 0);
  const { data } = await useCreateResult(result);
  await store.dispatch('quiz/updateCurrentResultID', data.data.id);
  console.log(data.data.id);
  await router.push(`/quizzes/${quiz.value.link}/play`);
}
</script>

<style lang="scss" scoped>
.QuizPage {
  &__img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
}
</style>
