<template>
  <q-page class="justify-evenly full-height full-width">
    <div class="QuizzesPage full-height full-width q-pa-xl">
      <div class="QuizzesPage__text row justify-center q-mb-xl">
        <standard-text-center
          :header="textQuizBlock.header"
          :description="textQuizBlock.description"
        ></standard-text-center>
      </div>
      <div class="QuizzesPage__list flex justify-around wrap q-mb-xl">
        <quizzes-card
          v-for="quiz in quizzes"
          :key="quiz.id"
          :quiz="quiz"
          class="col-sm-3"
        ></quizzes-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import StandardTextCenter from '../components/text/StandardTextCenter.vue';
import { textQuizBlock as textQuizBlockType } from '../components/quizzes/models';
import { reactive, ref } from 'vue';
import QuizzesCard from '../components/quizzes/QuizzesCard.vue';
import { useStore } from 'src/store';
import { useGetQuizzes } from 'src/services/quiz/get';

const store = useStore();
const quizzes = ref([]);

async function getQuizzes() {
  const { data } = await useGetQuizzes();
  await store.dispatch('quiz/setQuizzes', data.data);
  quizzes.value = data.data;
}
getQuizzes();

const textQuizBlock = reactive<textQuizBlockType>({
  header: 'News & Case Studies',
  description: 'We specialize in a wide array of marketing fields',
});
</script>

<style lang="scss" scoped>
.QuizzesPage {
  background: #e5d8fa;
}
</style>
