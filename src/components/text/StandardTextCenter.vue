<template>
  <div class="StandardTextCenter">
    <div class="StandardTextCenter__header text-center q-mb-lg">
      {{ header }}
    </div>
    <div class="StandardTextCenter__description text-center">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  header: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../css/app';

.StandardTextCenter {
  &__header {
    @include header;
  }
  &__description {
    @include description;
  }
}
</style>
