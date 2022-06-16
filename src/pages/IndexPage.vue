<script setup lang="ts">
import AppFooter from 'src/components/footer/AppFooter.vue';
import FaceBlock from 'components/index/face-block/FaceBlock.vue';
import EffectiveSection from 'components/index/effective-section/EffectiveSection.vue';
import PlusesSection from 'src/components/index/PlusesSection.vue';
import QuizzesBlock from 'components/quizzes/QuizzesBlock.vue';
</script>

<template>
  <q-page class="justify-evenly">
    <face-block></face-block>
    <div class="full-width">
      <img
        class="flex"
        src="../assets/img/index/transitionToWhite.png"
        alt=""
      />
    </div>
    <effective-section></effective-section>
    <pluses-section></pluses-section>
    <div class="flex">
      <img
        class="full-width full-height"
        src="../assets/img/index/transitionToLightPurple.png"
        alt=""
      />
    </div>
    <quizzes-block class="full-width full-height"></quizzes-block>
    <app-footer />
  </q-page>
</template>

<style lang="scss" scoped></style>
