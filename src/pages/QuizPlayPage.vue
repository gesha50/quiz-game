<template>
  <div class="QuizPlayPage">
    <p>{{ quiz.start_screen.title }}</p>
    <div class="">
      <h3 class="">{{ quiz.questions[questionNum].title }}</h3>
      <div class="">
        <q-img
          width="300px"
          height="300px"
          :src="url + '/storage/' + quiz.questions[questionNum].image"
        />
      </div>
      <div class="row">
        <div
          v-for="answer in quiz.questions[questionNum].answers"
          :key="answer.id"
          class="col-6"
        >
          <q-radio
            @update:model-value="updateAnswersResult(answer, $event)"
            :model-value="answer"
            :val="answer.id"
          >
            <div class="">{{ answer.title }}</div>
          </q-radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { AnswersInterface } from 'src/store/quiz/state';

const store = useStore();
const route = useRoute();

const questionNum = ref(0);
const url = ref(process.env.URL);
const link = route.path.split('/')[2];
const quiz = computed(() => store.getters['quiz/getCurrentQuiz'](link));

function updateAnswersResult(answer: AnswersInterface, e) {
  console.log(answer);
  console.log(e);
}
</script>

<style lang="scss" scoped></style>
