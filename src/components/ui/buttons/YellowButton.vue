<template>
  <q-btn
    class="q-px-lg customBtnText"
    color="yellow-9"
    rounded
    label="try it"
  />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../../../css/app';
.customBtnText {
  @include customBtnText;
}
</style>
