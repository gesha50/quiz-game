<template>
  <div class="effectiveReasonsBlock row">
    <div class="col-3">
      <img
        class="effectiveReasonsBlock__img"
        style="width: 90%"
        :src="require(`../../../assets/img/effective/${reason.img}`)"
        alt=""
      />
    </div>
    <div class="col-9 q-pl-md">
      <div class="effectiveReasonsBlock__header q-mb-md">
        {{ reason.header }}
      </div>
      <div class="effectiveReasonsBlock__description">
        {{ reason.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  reason: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
@import '../../../css/app';

.effectiveReasonsBlock {
  &__header {
    @include miniHeader;
  }
  &__description {
    @include description;
  }
}
</style>
