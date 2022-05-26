<template>
  <div class="faceBlockText text-white">
    <div class="faceBlockText__header q-mb-lg">
      Стань мастер в созданиие тестов!
    </div>
    <div class="faceBlockText__description q-mb-lg">
      Spyro is a powerful landing pages builder WP theme that lets you build
      build high converting landing pages using its specially crafted modules
      clubbed inside.
    </div>
    <yellow-button></yellow-button>
  </div>
</template>

<script setup lang="ts">
import YellowButton from 'components/ui/buttons/YellowButton.vue';
</script>

<style lang="scss" scoped>
@import '../../../css/app';
.faceBlockText {
  width: 90%;
  &__header {
    @include bigHeader;
  }
  &__description {
    @include description;
  }
}
</style>
