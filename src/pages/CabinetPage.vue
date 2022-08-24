<template>
  <div class="CabinetPage q-pa-xl">
    <div class="">
      <h3>My quizzes</h3>
      <div class="row">
        <div v-for="quiz in quizzes" :key="quiz.id" class="q-pa-md col-4">
          <q-card>
            <div class="q-pa-md">{{ quiz.start_screen.title }}</div>
            <q-btn
              icon="edit"
              color="yellow-8"
              :to="`/create/quiz/${quiz.link}`"
            />
            <q-btn icon="delete" color="red" @click="deleteQuiz(quiz.id)" />
            <q-btn
              icon="sports_esports"
              color="green"
              :to="`/quizzes/${quiz.link}`"
            />
          </q-card>
        </div>
        <div class="q-pa-md col-4">
          <q-card>
            <div class="q-pa-md">Add new Quiz</div>
            <q-btn :to="{ name: 'CreateQuiz' }" icon="add" color="blue" />
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserQuizzes } from 'src/services/quiz/get';
import { ref } from 'vue';
import { useStore } from 'src/store';

const store = useStore();
const quizzes = ref([]);

async function getQuizzes() {
  const { data } = await getUserQuizzes();
  await store.dispatch('quiz/setQuizzes', data.data);
  quizzes.value = data.data;
}
getQuizzes();

function deleteQuiz(id: number): void {
  console.log(id);
}
</script>

<style lang="scss" scoped></style>
