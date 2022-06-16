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
import {
  textQuizBlock as textQuizBlockType,
  quizzes as quizzesType,
} from '../components/quizzes/models';
import { reactive } from 'vue';
import QuizzesCard from '../components/quizzes/QuizzesCard.vue';

const quizzes = reactive<quizzesType[]>([
  {
    id: 1,
    img: '',
    title: 'test 1',
    preview: 'jhbhbjhjbfve evfvfe evfr evtev etvg',
  },
  {
    id: 2,
    img: '',
    title: 'test 2',
    preview: 'jhbhbjhjbfve evfvfe evfr evtev etvg',
  },
  {
    id: 3,
    img: '',
    title: 'test 3',
    preview: 'jhbhbjhjbfve evfvfe evfr evtev etvg',
  },
]);
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
