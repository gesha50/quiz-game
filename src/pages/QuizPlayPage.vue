<template>
  <div class="QuizPlayPage">
    <p>{{ quiz.start_screen.title }}</p>
    <div class="">
      <div v-if="gameStatus === 'question'" class="">
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
            <q-radio v-model="answerChoice" :val="answer.id">
              <div class="">{{ answer.title }}</div>
            </q-radio>
          </div>
        </div>
        <q-btn @click="goToAnswer" label="confirm" color="green" />
      </div>
      <div v-else class="">
        <div class="">
          <div v-if="isCorrect" class="">correct</div>
          <div v-else class="">not correct</div>
        </div>
        <q-btn @click="nextQuestion" label="confirm" color="green" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useCreateResultDetail } from 'src/services/quiz/create';

const store = useStore();
const route = useRoute();
const router = useRouter();

const questionNum = ref(0);
const gameStatus = ref('question');
const answerChoice = ref(null);
const isCorrect = computed(
  () =>
    quiz.value.questions[questionNum.value].correct_answer ===
    answerChoice.value
);

const url = ref(process.env.URL);
const link = route.path.split('/')[2];
const quiz = computed(() => store.getters['quiz/getCurrentQuiz'](link));

async function goToAnswer() {
  let ResultForm = new FormData();
  ResultForm.append('result_id', store.state.quiz.current_result_id);
  ResultForm.append('question_id', quiz.value.questions[questionNum.value].id);
  ResultForm.append('choice', answerChoice.value);
  ResultForm.append('time_to_end', '00:00:15');
  await useCreateResultDetail(ResultForm);
  gameStatus.value = 'answer';
}
function nextQuestion() {
  if (quiz.value.questions.length === questionNum.value + 1) {
    router.push(`/quizzes/${quiz.value.link}/result`);
  } else {
    questionNum.value++;
    gameStatus.value = 'question';
  }
}
</script>

<style lang="scss" scoped></style>
