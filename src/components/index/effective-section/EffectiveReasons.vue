<template>
  <div class="effectiveReasons flex column justify-around full-height">
    <div class="effectiveReasons__blocks">
      <effective-reasons-block
        v-for="reason in reasons"
        :key="reason.id"
        :reason="reason"
        class="q-mb-lg"
      ></effective-reasons-block>
    </div>
  </div>
</template>

<script setup lang="ts">
import EffectiveReasonsBlock from 'src/components/index/effective-section/EffectiveReasonsBlock.vue';
import { ref } from 'vue';
import type { ReasonType } from 'components/index/effective-section/models';

const reasons = ref<ReasonType[]>([
  {
    id: 1,
    img: 'plane.png',
    header: 'Digital Marketing',
    description:
      'It’s a modern business theme, that lets you build stunning high\n' +
      'performance websites using a fully visual interface.',
  },
  {
    id: 2,
    img: 'space.png',
    header: 'Digital Marketing',
    description:
      'It’s a modern business theme, that lets you build stunning high\n' +
      'performance websites using a fully visual interface.',
  },
]);
</script>

<style lang="scss" scoped></style>
