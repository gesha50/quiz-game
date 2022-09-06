<template>
  <div class="QuizResultPage">
    <div class="">
      Correct answers: {{ CorrectAnswers }}/{{ QuestionsLength }}
    </div>
    <div class="">Percentage of guessed answers: {{ PercentAnswer }}%</div>
    <div class="">Points: {{ WonPoints }}/{{ TotalPoints }}</div>
    <div class="">Percentage of points won: {{ PercentPoints }}%</div>
  </div>
</template>

<script setup lang="ts">
import { useGetResult } from 'src/services/quiz/get';
import { useStore } from 'src/store';
import { computed, ref } from 'vue';

const store = useStore();
const CorrectAnswers = ref(0);
const QuestionsLength = ref(0);
const TotalPoints = ref(0);
const WonPoints = ref(0);

const PercentAnswer = computed(() =>
  ((CorrectAnswers.value / QuestionsLength.value) * 100).toFixed(2)
);

const PercentPoints = computed(() =>
  ((WonPoints.value / TotalPoints.value) * 100).toFixed(2)
);

async function getResult() {
  const { data } = await useGetResult(store.state.quiz.current_result_id);
  QuestionsLength.value = data.data.quiz.questions.length;
  await results(data.data);
  await getTotalPoints(data.data);
}
getResult();

function results(result) {
  console.log(result);
  result.result_details.forEach((res) => {
    if (res.choice === res.question.correct_answer) {
      CorrectAnswers.value++;
      WonPoints.value += res.question.bonus;
    }
  });
}

function getTotalPoints(result) {
  result.quiz.questions.forEach((q) => {
    TotalPoints.value += q.bonus;
  });
}
</script>

<style lang="scss" scoped></style>
