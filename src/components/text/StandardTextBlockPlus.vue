<template>
  <div class="StandardTextBlockPlus row justify-center items-center no-wrap">
    <q-icon name="done" class="q-mr-md" />
    <div class="StandardTextBlockPlus__text">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  text: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';

.StandardTextBlockPlus {
  &__text {
    @include description;
  }
}
</style>
