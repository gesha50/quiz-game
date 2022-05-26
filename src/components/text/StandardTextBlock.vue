<template>
  <div class="StandardTextBlock full-height">
    <div class="effectiveText__preview text-yellow-8 q-mb-lg">
      {{ dataText.preview }}
    </div>
    <div class="StandardTextBlock__header q-mb-lg">
      {{ dataText.header }}
    </div>
    <div class="StandardTextBlock__description">
      {{ dataText.description }}
    </div>
    <div
      v-if="dataText.pluses?.length"
      class="StandardTextBlock__pluses q-mt-lg"
    >
      <div class="full-width row">
        <standard-text-block-plus
          v-for="plus in dataText.pluses"
          :key="plus.id"
          class="col-md-6"
          :text="plus.text"
        ></standard-text-block-plus>
      </div>
    </div>
    <div
      v-if="dataText.statistics?.length"
      class="StandardTextBlock__statistics"
    >
      <div class="full-width row">
        <standard-text-block-statistics
          v-for="statistic in dataText.statistics"
          :key="statistic.id"
          class="col-md-6"
          :statistic="statistic"
        ></standard-text-block-statistics>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StandardTextBlockPlus from './StandardTextBlockPlus.vue';
import StandardTextBlockStatistics from './StandardTextBlockStatistics.vue';
import { defineProps } from 'vue';

defineProps({
  dataText: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';

.StandardTextBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  &__preview {
    @include description;
  }
  &__header {
    @include header;
  }
  &__description {
    @include description;
  }
}
</style>
