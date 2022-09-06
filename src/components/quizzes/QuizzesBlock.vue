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
import { reactive, ref } from 'vue';
import StandardTextCenter from '../text/StandardTextCenter.vue';
import { textQuizBlock as textQuizBlockType } from './models';
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
.QuizzesBlock {
  background: #e5d8fa;
}
</style>
