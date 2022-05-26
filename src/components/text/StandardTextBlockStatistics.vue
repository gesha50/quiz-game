<template>
  <div class="StandardTextBlockStatistics q-mt-lg">
    <div class="StandardTextBlockStatistics__inside row q-pa-md">
      <div
        class="StandardTextBlockStatistics__forIcon col-4 flex justify-center items-center"
      >
        <q-icon color="white" size="md" :name="statistic.icon" />
      </div>
      <div
        class="StandardTextBlockStatistics__forText col-8 flex justify-center wrap"
      >
        <div class="StandardTextBlockStatistics__number">
          {{ statistic.number }} %
        </div>
        <div class="StandardTextBlockStatistics__text">
          {{ statistic.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  statistic: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';

.StandardTextBlockStatistics {
  &__inside {
    width: 90%;
    background: #f6f1ff;
    border-radius: 10px;
  }
  &__forIcon {
    background: #604b83;
  }
  &__number {
    @include header;
  }
  &__text {
    @include description;
  }
}
</style>
