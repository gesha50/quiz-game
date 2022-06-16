<template>
  <div class="QuizzesBlock q-pa-xl column">
    <div class="QuizzesBlock__text row justify-center q-mb-xl">
      <standard-text-center
        :header="textQuizBlock.header"
        :description="textQuizBlock.description"
      ></standard-text-center>
    </div>
    <div class="QuizzesBlock__list flex justify-around wrap q-mb-xl">
      <quizzes-card
        v-for="quiz in quizzes"
        :key="quiz.id"
        :quiz="quiz"
        class="col-sm-3"
      ></quizzes-card>
    </div>
    <div class="QuizzesBlock__btn text-center">
      <q-btn
        :to="{ name: 'Quizzes' }"
        class="q-px-lg"
        label="See all"
        rounded
        outline
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import QuizzesCard from './QuizzesCard.vue';
import { reactive } from 'vue';
import StandardTextCenter from '../text/StandardTextCenter.vue';
import {
  textQuizBlock as textQuizBlockType,
  quizzes as quizzesType,
} from './models';

const textQuizBlock = reactive<textQuizBlockType>({
  header: 'News & Case Studies',
  description: 'We specialize in a wide array of marketing fields',
});
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
</script>

<style lang="scss" scoped>
.QuizzesBlock {
  background: #e5d8fa;
}
</style>
