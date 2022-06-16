<template>
  <div class="QuizzesCard">
    <q-card class="QuizzesCard__card">
      <img
        class="QuizzesCard__img"
        src="https://cdn.quasar.dev/img/mountains.jpg"
        alt=""
      />
      <q-card-section>
        <div class="QuizzesCard__title">{{ quiz.title }}</div>
      </q-card-section>
      <q-card-section class="QuizzesCard__description q-pt-none">
        {{ quiz.preview }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  quiz: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';
.QuizzesCard {
  &__card {
    width: 100%;
    max-width: 250px;
  }
  &__title {
    @include miniHeader;
  }
  &__description {
    @include description;
  }
}
</style>
