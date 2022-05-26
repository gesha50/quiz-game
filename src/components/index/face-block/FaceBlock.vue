<template>
  <section class="faceBlock row q-py-xl q-pl-xl q-pr-md">
    <div class="faceBlock__text col-12 col-sm-5">
      <div class="flex column justify-center full-height">
        <face-block-text></face-block-text>
      </div>
    </div>
    <div class="col-12 col-sm-7 flex justify-center">
      <img
        class="faceBlock__img"
        src="../../../assets/img/index/face.png"
        alt=""
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import FaceBlockText from 'src/components/index/face-block/FaceBlockText.vue';
</script>

<style lang="scss" scoped>
.faceBlock {
  width: 100%;
  background: $mainPurple;
  padding-bottom: 75px;
  &__img {
    width: 90%;
  }
}
</style>
