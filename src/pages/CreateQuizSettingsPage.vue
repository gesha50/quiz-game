<template>
  <div class="QuizSettingsPage">
    settings
    <hr />
    <div class="">
      <div class="">
        <div v-if="quiz.is_visible" class="">This quiz is visible</div>
        <div v-else class="">This quiz is not visible</div>
      </div>
      <q-toggle
        :model-value="isVis"
        @update:model-value="updateQuizIsVisible($event, quiz.id)"
        color="green"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'src/store';
import { getUserQuizzes } from 'src/services/quiz/get';
import { useUpdateQuizIsVisible } from 'src/services/quiz/edit';

const store = useStore();
const route = useRoute();

const link = route.path.split('/')[3];
const quiz = computed(() => store.getters['quiz/getCurrentQuiz'](link));
const isVis = computed(() => !!quiz.value.is_visible);

async function updateQuizIsVisible(val: boolean, id: number): Promise<void> {
  let value;
  if (val) {
    value = 1;
  } else {
    value = 0;
  }
  const is_visible = new FormData();
  is_visible.append('is_visible', value);
  await useUpdateQuizIsVisible(id, is_visible);
  await getQuizzes();
}

async function getQuizzes() {
  const { data } = await getUserQuizzes();
  await store.dispatch('quiz/setQuizzes', data.data);
}
</script>

<style lang="scss" scoped></style>
