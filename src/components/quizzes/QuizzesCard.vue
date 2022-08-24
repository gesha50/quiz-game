<template>
  <div class="QuizzesCard">
    <q-card class="QuizzesCard__card">
      <img
        class="QuizzesCard__img"
        :src="url + '/storage/' + quiz.start_screen.image"
        alt=""
      />
      <q-card-section>
        <div class="QuizzesCard__title text-center">
          {{ quiz.start_screen.title }}
        </div>
      </q-card-section>
      <q-card-section class="QuizzesCard__description q-pt-none">
        category: {{ quiz.category.title }}
      </q-card-section>
      <q-card-section class="QuizzesCard__more q-pt-none text-right">
        <q-btn label="More..." color="blue" :to="`/quizzes/${quiz.link}`" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { QuizInterface } from 'src/store/quiz/state';

const props = defineProps<{
  quiz: QuizInterface;
}>();
const url = ref(process.env.URL);
console.log(props.quiz);
</script>

<style lang="scss" scoped>
@import '../../css/app';
.QuizzesCard {
  &__card {
    width: 100%;
    max-width: 250px;
  }
  &__img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  &__title {
    @include miniHeader;
  }
  &__description {
    @include description;
  }
}
</style>
